<template>
    <div class="color-container">
      <table class="table-container table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Room Name</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Special Request</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Reason</th>
          </tr>
        </thead>
  
        <tbody>
          <tr v-for="filteredInfo in filteredBookings"  :key="filteredInfo.id">
            <td>{{ filteredInfo.room_name }}</td>
            <td>{{ filteredInfo.check_in_date }}</td>
            <td>{{ filteredInfo.check_out_date }}</td>
            <td>{{ filteredInfo.special_request }}</td>
            <td>{{ filteredInfo.name }}</td>
            <td>{{ filteredInfo.email }}</td>
            <td>{{ filteredInfo.phone_number }}</td>
            <td>{{ filteredInfo.address }}</td>
            <td>{{ filteredInfo.status }}</td>
            
            <td>
              <button @click="denyBooking(filteredInfo.id)" class="btn btn-danger btn-sm">
                Cancel
              </button>
            </td>
            <td>{{ filteredInfo.reason }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        bookings: [],
        infos: [],
        status:'',
        
      };
    },
    mounted() {
        this.fetchBookingDetails();
    },
    created() {
	this.token = sessionStorage.getItem('jwt');
  if (this.token) {
    this.fetchBookingDetails();
  } else {
    // Handle the case where token is not available in local storage
    console.error('JWT token not found in local storage');
  }
  this.fetchBookingDetails();
},
    computed: {
      filteredBookings() {
        return this.infos.filter(info => info.token === this.token && (info.status === 'approved' || info.status === 'pending' || info.status === 'denied'));

        //return this.bookings.filter(booking => booking.status !== 'denied');
      },
    },
    methods: {
    //   async fetchBookingDetails() {
    //     try {
    //       const response = await axios.get("/api/getBookingroom");
    //       this.bookings = response.data;
    //     } catch (error) {
    //       console.error("Error fetching booking details:", error);
    //     }
    //   },
      async fetchBookingDetails() {
  try {
    const response = await axios.get('/api/getBookingroom');
    this.infos = response.data;
    // Set hideToken to true after fetching notifications
    this.hideToken = true;
  } catch (error) {
    console.error(error);
  }
},
      async denyBooking(id) {
        try {
          const response = await axios.post(`/api/updateBookingStatus/${id}`, { status: 'cancel' });
         
          if (response.status === 200 && response.data.message === 'Booking status updated successfully') {
            // Refresh bookings after status update
            this.fetchBookingDetails();
          } else {
            console.error('Error updating booking status:', response.data);
          }
        } catch (error) {
          console.error('Error updating booking status:', error);
        }
        this.fetchBookingDetails();
      },
    },
  };
  </script>
  
  <style scoped>
    @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
  
    .color-container {
      background-color: #f2f2f2;
      padding: 20px;
    }
  
    .table-container {
      margin-top: 20px;
      width: 100%;
      background-color: #fff;
    }
  
    .btn-danger {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 3px 15px;
      text-align: center;
      text-decoration: none;
      display: block;
      margin: 0 auto;
      font-size: 14px;
      cursor: pointer;
      border-radius: 4px;
    }
  
    .btn-danger:hover {
      background-color: #c82333;
    }
  </style>
  
  
  
  
  
  


<!-- <template>


<v-container>
          <v-card>
             <v-card-title class="text-h5">Room Bookings</v-card-title>
             <v-data-table :headers="headers" :items="[...pendingBookings, ...approvedBookings]" :search="search" class="elevation-1">

              <template v-for="(header, index) in headers" v-slot:[`header.${header.value}`]="{ props }">
                <th :key="index">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <span v-on="on">{{ getHeaderTitle(header.value) }}</span>
                    </template>
                    <span>{{ header.text }}</span>
                  </v-tooltip>
                </th>
              </template>


              <template v-slot:[`item.actions`]="{ item }">

            <button @click="denyBooking(item.id)" class="btn btn-danger btn-sm">
             Cancel
            </button>
          </template>

              <template v-slot:items="props">
                <td>{{ props.item.room_name }}</td>
                <td>{{ props.item.check_in_date }}</td>
                <td>{{ props.item.check_out_date }}</td>
                <td>{{ props.item.special_request }}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.phone_number }}</td>
                <td>{{ props.item.address }}</td>
                <td>{{ props.item.status }}</td>
              </template>
            </v-data-table>
          </v-card>
        </v-container>
</template> -->

<!-- <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pendingReservation: [],
        approvedReservation: [],
          pendingBookings: [],
      approvedBookings: [],
      declinedBookings: [],
        bookingRooms: [],
        search: '',
        headers: [
          { text: 'Room Name', value: 'room_name' },
          { text: 'Check-in Date', value: 'check_in_date' },
          { text: 'Check-out Date', value: 'check_out_date' },
          { text: 'Special Request', value: 'special_request' },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Phone Number', value: 'phone_number' },
          { text: 'Address', value: 'address' },
          { text: 'Status', value: 'status' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      };
    },
    computed: {
    totalBookings() {
      return this.pendingBookings.length + this.approvedBookings.length;
    },
    totalReserve() {
      return this.pendingReservation.length + this.approvedReservation.length;
    },
  },
    mounted() {
      this.fetchBookingDetails();
      this.fetchReservationDetails();
  
    },
    methods: {
      async fetchBookingDetails() {
    try {
      const response = await axios.get("/api/getBookingroom");
      this.pendingBookings = response.data.filter(booking => booking.status === 'pending');
      this.approvedBookings = response.data.filter(booking => booking.status === 'approved');
      this.declinedBookings = response.data.filter(booking => booking.status === 'denied');
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }

    
  },

  async fetchReservationDetails() {
    try {
      const response = await axios.get("/api/getReservationAmenities");
      this.pendingReservation = response.data.filter(reservation_amenities => reservation_amenities.status === 'pending');
      this.approvedReservation = response.data.filter(reservation_amenities => reservation_amenities.status === 'approved');
      this.declinedReservation = response.data.filter(reservation_amenities => reservation_amenities.status === 'denied');
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }
  },
      getHeaderTitle(field) {
        const headerTitles = {
          room_name: 'Room Name',
          check_in_date: 'Check-in Date',
          check_out_date: 'Check-out Date',
          special_request: 'Special Request',
          name: 'Name',
          email: 'Email',
          phone_number: 'Phone Number',
          address: 'Address',
          status: 'Status',
          actions: 'Actions',
        };
        return headerTitles[field] || '';
      },
  
  
     
  
  async approveBooking(id) {
    try {
      const response = await axios.post(`/api/updateBookingStatus/${id}`, { status: 'approved' });
  
      if (response.status === 200 && response.data.message === 'Booking status updated successfully') {
        // Refresh bookings after status update
        this.fetchBookingDetails();
      } else {
        console.error('Error updating booking status:', response.data);
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
    this.fetchBookingDetails();
  },
  
  async denyBooking(id) {
    try {
      const response = await axios.post(`/api/updateBookingStatus/${id}`, { status: 'denied' });
  
      if (response.status === 200 && response.data.message === 'Booking status updated successfully') {
        // Refresh bookings after status update
        this.fetchBookingDetails();
      } else {
        console.error('Error updating booking status:', response.data);
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
    this.fetchBookingDetails();
  },
  async approveReservation(id) {
  try {
    const response = await axios.post(`/api/updateReservationStatus/${id}`, { status: 'approved' });

    if (response.status === 200 && response.data.message === 'Reservation status updated successfully') {
      // Refresh Reservations after status update
      this.fetchReservationDetails();
    } else {
      console.error('Error updating Reservation status:', response.data);
    }
  } catch (error) {
    console.error('Error updating Reservation status:', error);
  }
  this.fetchReservationDetails();
},

async denyReservation(id) {
  try {
    const response = await axios.post(`/api/updateReservationStatus/${id}`, { status: 'denied' });

    if (response.status === 200 && response.data.message === 'Reservation status updated successfully') {
      // Refresh Reservations after status update
      this.fetchReservationDetails();
    } else {
      console.error('Error updating Reservation status:', response.data);
    }
  } catch (error) {
    console.error('Error updating Reservation status:', error);
  }
  this.fetchReservationDetails();
},
getHeaderTitles(field) {
      const headerTitles = {
        name: 'Amenities',
        date: 'Reserve Date',
        customer_name: 'Name',
        email: 'Email',
        contact: 'Contact',
        address: 'Address',
        status: 'Status',
        actions: 'Actions',
      };
      return headerTitles[field] || '';
    },
    },
  };
  </script>
    
  

  
  
  <script :src="require('../assets/admin/libs/jquery/dist/jquery.min.js')"></script>
  <script :src="require('../assets/admin/libs/bootstrap/dist/js/bootstrap.bundle.min.js')"></script>
  <script :src="require('../assets/admin/js/sidebarmenu.js')"></script>
  <script :src="require('../assets/admin/js/app.min.js')"></script>
  <script :src="require('../assets/admin/libs/apexcharts/dist/apexcharts.min.js')"></script>
  <script :src="require('../assets/admin/libs/simplebar/dist/simplebar.js')"></script>
  <script :src="require('../assets/admin/js/dashboard.js')"></script>
  <style scoped>
  
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
  .color-container {
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  .table-container {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 3px 15px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style> -->
    