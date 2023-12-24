<!-- roominsert.vue -->
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
            <a href="./index.html" class="text-nowrap logo-img">
            </a> <img :src="require('@/assets/img/veronicalogo.png')" />
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
                <span class="hide-menu">Menu</span>
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
                  <span class="hide-menu">Amenities</span>
                </a>
              </li>
              <!-- <li class="sidebar-item">
                <a class="sidebar-link" href="/categories" aria-expanded="false">
                  <span>
                    <i class="ti ti-cards"></i>
                  </span>
                  <span class="hide-menu">Categories</span>
                </a>
              </li> -->
              <!-- <li class="sidebar-item">
                <a class="sidebar-link" href="/inventory" aria-expanded="false">
                  <span>
                    <i class="ti ti-file-description"></i>
                  </span>
                  <span class="hide-menu">Inventory</span>
                </a>
              </li> -->
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
              <!-- Inside the Sidebar navigation -->
              <li class="sidebar-item">
              <a class="sidebar-link" href="#" id="logoutButton">
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
        <div class="color-container">
          <roominsert @refreshData="refreshData" />
          <table border="1" class="table-container">

            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Capacity</th>
              <th>Number of Bed</th>
              <th>Room Image</th>
              <th>Action</th>
            </tr>

            <tr v-for="room in rooms" :key="room.id">
              <td>{{ room.name }}</td>
              <td>{{ room.description }}</td>
              <td>{{ room.price }}</td>
              <td>{{ room.capacity }}</td>
              <td>{{ room.num_bed }}</td>
              <td v-if="room.room_image">

                <img :src="room.room_image" style="max-width: 200px; max-height: 100px;" @error="handleImageError">
              </td>
              <td>

                <button @click="updateRoom(room.id)">Edit</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import roominsert from '@/components/roominsert.vue';

export default {
  data() {
    return {
      rooms: [],
    };
  },
  components: {
    roominsert,
  },
  created() {
    this.refreshData();
  },
  methods: {
    async refreshData() {
      try {
        const response = await axios.get("getData");
        this.rooms = response.data;

        this.rooms.forEach(room => {
          console.log('Room Data:', room);
        });
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    },
    handleImageError(event) {
      console.error('Error loading image:', event.target.src);

    },
    updateRoom(roomId) {

      console.log(`Update room with ID: ${roomId}`);
    },
  },
};
</script>

<style scoped>
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
