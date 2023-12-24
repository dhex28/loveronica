
<template>
  <body>
    <!--  Body Wrapper -->
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed">
      <!-- Sidebar Start -->
      <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div>
          <div class="brand-logo d-flex align-items-center justify-content-between">
            <a href="/admin" class="text-nowrap logo-img">
              <img :src="require('@/assets/img/veronicalogo.png')" />
            </a>
            <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i class="ti ti-x fs-8"></i>
            </div>
          </div>
          <!-- Sidebar navigation-->
          <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">Home</span>
              </li>
              <li class="sidebar-item">
                <a class="sidebar-link" href="/dashboard" aria-expanded="false">
                  <span>
                    <i class="ti ti-layout-dashboard"></i>
                  </span>
                  <span class="hide-menu">Dashboard</span>
                </a>
              </li>
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">MENU</span>
              </li>
              <li class="sidebar-item">
              <a class="sidebar-link" href="/bookingroom" aria-expanded="false">
                  <span>
                  <i class="fas fa-calendar"></i>
                  </span>
                  <span class="hide-menu">Booking</span>
              </a>
              </li>
              <li class="sidebar-item">
                <a class="sidebar-link" href="/reservation" aria-expanded="false">
                  <span>
                    <i class="fas fa-concierge-bell"></i>
                  </span>
                  <span class="hide-menu">Amenities Reservation</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a class="sidebar-link" href="/addroom" aria-expanded="false">
                  <span>
                    <i class="ti ti-article"></i>
                  </span>
                  <span class="hide-menu">Rooms</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a class="sidebar-link" href="/addamenities" aria-expanded="false">
                  <span>
                    <i class="ti ti-alert-circle"></i>
                  </span>
                  <span class="hide-menu">Amenities </span>
                </a>
              </li>


              <li class="sidebar-item">
                <a class="sidebar-link" href="/productinventory" aria-expanded="false">
                  <span>
                    <i class="ti ti-cards"></i>
                  </span>
                  <span class="hide-menu">Product Inventory </span>
                </a>
              </li>
              <li class="sidebar-item">
                <a class="sidebar-link" href="/pos" aria-expanded="false">
                  <span>
                    <i class="fas fa-cash-register"></i>
                  </span>
                  <span class="hide-menu">POS</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a class="sidebar-link" href="/notification" aria-expanded="false">
                  <span>
                    <i class="ti ti-typography"></i>
                  </span>
                  <span class="hide-menu">Notification</span>
                </a>
              </li>
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">AUTH</span>
              </li>
              <li class="sidebar-item">
                <a class="sidebar-link" href="/" aria-expanded="false">
                  <span>
                    <i class="ti ti-login"></i>
                  </span>
                  <span class="hide-menu">Logout</span>
                </a>
              </li>
            </ul>
          </nav>
          <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
      </aside>
      <!--  Sidebar End -->
      <!--  Main wrapper -->
      <div class="body-wrapper">
        <!--  Header Start -->
        <header class="app-header">
          <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav">
              <li class="nav-item d-block d-xl-none">
                <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                  <i class="ti ti-menu-2"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                  <i class="ti ti-bell-ringing"></i>
                  <div class="notification bg-primary rounded-circle"></div>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div class="container-fluid"></div>

         <!-- Dashboard Container --> 

  <!-- Dashboard Container on the Left Side -->
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-3" color="primary">
          <v-row>
            <v-col>
              <v-icon color="white">mdi-book-multiple</v-icon>
            </v-col>
            <v-col>
              <div class="headline text-white">Total Bookings</div>
              <div class="subtitle-1 text-white">{{ totalBookings }}</div>
            </v-col>

          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container> 

  <div class="container-fluid"></div>

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
          <button @click="approveBooking(item.id)" class="btn btn-success btn-sm mb-2">
            Approve
          </button>
          <button @click="denyBooking(item.id)" class="btn btn-danger btn-sm">
            Deny
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




  <!--<v-container>
        <v-card>
          <v-card-title class="text-h6">Room Bookings</v-card-title>
          <v-data-table :headers="headers" :items="bookingRooms" :search="search" class="elevation-1">
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
<button @click="approveBooking(item.id)" class="btn btn-success btn-sm mb-2">
  Approve
</button>
<button @click="denyBooking(item.id)" class="btn btn-danger btn-sm">
  Deny
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
      </v-container> -->
</div>

</div>



</body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
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
},
  mounted() {
    this.fetchBookingDetails();

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
}
  },
};
</script>
  

  <!-- Add this in the head section of your HTML file -->


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
</style>
  