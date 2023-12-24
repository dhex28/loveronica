
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
    <!-- <v-container>
      <v-row>
        <v-col>
          <v-card class="pa-3" color="primary">
            <v-row>
              <v-col>
                <v-icon color="white">mdi-book-multiple</v-icon>
              </v-col>
              <v-col>
                <div class="headline text-white">Total Reservations</div>
                <div class="subtitle-1 text-white">{{ ReservationRooms.length }}</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->




    <v-container>
          <v-card>
             <v-card-title class="text-h5">Pending Amenities Reservation</v-card-title>
            <v-data-table :headers="headers" :items="pendingReservation" :search="search" class="elevation-1">
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
            <button @click="approveReservation(item.id)" class="btn btn-success btn-sm mb-2">
              Approve
            </button>
            <button @click="denyReservation(item.id)" class="btn-danger btn-danger btn-sm">
              Deny
            </button>
          </template>

              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.date }}</td>
                <td>{{ props.item.customer_name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.contact}}</td>
                <td>{{ props.item.address }}</td>
                <td>{{ props.item.status }}</td>
              </template>
            </v-data-table>
          </v-card>
        </v-container>

        <div class="container-fluid"></div>

        <!-- Appove table -->

        <v-container>
          <v-card>
            <v-card-title class="text-h5">Approved Amenities Reservation</v-card-title>
        <v-data-table :headers="headers" :items="approvedReservations" :search="search" class="elevation-1">
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

<button @click="denyReservation(item.id)" class="btn btn-danger btn-sm">
Deny
</button>
</template>

              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.date }}</td>
                <td>{{ props.item.customer_name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.contact}}</td>
                <td>{{ props.item.address }}</td>
                <td>{{ props.item.status }}</td>
              </template>
            </v-data-table>
          </v-card>
        </v-container>


        <div class="container-fluid"></div>

        <!-- denied table -->
        <v-container>
          <v-card>
            <v-card-title class="text-h5">Denied Amenities Reservation</v-card-title>
        <v-data-table :headers="headers" :items="declinedReservations" :search="search" class="elevation-1">
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
            <button @click="approveReservation(item.id)" class="btn btn-success btn-sm ">
              Approve
            </button>
          
          </template>
              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.date }}</td>
                <td>{{ props.item.customer_name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.contact}}</td>
                <td>{{ props.item.address }}</td>
                <td>{{ props.item.status }}</td>
              </template>
            </v-data-table>
          </v-card>
        </v-container>

  </div>
  
</div>



  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        pendingReservation: [],
    approvedReservations: [],
    declinedReservations: [],
      ReservationAmenities: [],
      search: '',
      headers: [
        { text: 'Amenities', value: 'name' },
        { text: 'Date', value: 'date' },
        { text: 'Name', value: 'customer_name' },
        { text: 'Email', value: 'email' },
        { text: 'Contact', value: 'contact' },
        { text: 'Address', value: 'address' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    };
  },
  mounted() {
    this.fetchReservationDetails();

  },
  methods: {
    async fetchReservationDetails() {
  try {
    const response = await axios.get("/api/getReservationAmenities");
    this.pendingReservation = response.data.filter(reservation_amenities => reservation_amenities.status === 'pending');
    this.approvedReservations = response.data.filter(reservation_amenities => reservation_amenities.status === 'approved');
    this.declinedReservations = response.data.filter(reservation_amenities => reservation_amenities.status === 'denied');
  } catch (error) {
    console.error("Error fetching Reservation details:", error);
  }
},
    getHeaderTitle(field) {
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
    