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
              <a href="/admin" class="text-nowrap logo-img">
                <img :src="require('@/assets/admin/images/logos/dark-logo.svg')" />
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
                  <a class="sidebar-link" href="./index.html" aria-expanded="false">
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
                  <a class="sidebar-link" href="/categories" aria-expanded="false">
                    <span>
                      <i class="ti ti-cards"></i>
                    </span>
                    <span class="hide-menu">Categories</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/inventory" aria-expanded="false">
                    <span>
                      <i class="ti ti-file-description"></i>
                    </span>
                    <span class="hide-menu">Inventory</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/productinventory" aria-expanded="false">
                    <span>
                      <i class="ti ti-alert-circle"></i>
                    </span>
                    <span class="hide-menu">Products </span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="/pos" aria-expanded="false">
                    <span>
                      <i class="ti ti-typography"></i>
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
          <div class="color-container">
            <categoriesinsert @refreshData="refreshData" />
            <table border="1" class="table-container">
  
              <tr>
                <th>Category Name</th>
                
              </tr>
  
              <tr v-for="category in categories" :key="category.category_id">
                <td>{{ category.category_name }}</td>
  
              
              </tr>
            </table>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  <script>
  import axios from 'axios';
  import categoriesinsert from '@/components/categoriesinsert.vue';
  
  export default {
    data() {
      return {
        categories: [],
      };
    },
    components: {
      categoriesinsert,
    },
    created() {
      this.refreshData();
    },
    methods: {
      async refreshData() {
        try {
          const response = await axios.get("getCategory");
          this.categories = response.data;
  
          this.categories.forEach(category => {
            console.log('Category Data:', category);
          });
        } catch (error) {
          console.error("Error fetching category:", error);
        }
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
  