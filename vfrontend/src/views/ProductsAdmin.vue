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
                <!-- <li class="sidebar-item">
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
      
    <!-- ... existing code ... -->
    <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'name', order: 'desc' }]"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Product Inventory</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.upc"
                      label="Universal Product Code"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Product Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.description"
                      label="Product Description"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      label="Price"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.category"
                      label="Category"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="openQuantityModal(item)"
      >
        mdi-plus
      </v-icon>
      
      <router-link :to="{ name: 'history', params: { upc: item.upc } }">
      <v-icon size="small">mdi-history</v-icon>
    </router-link>
      
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  <v-dialog v-model="quantityModal" max-width="400">
    <v-card>
      <v-card-title>Add Quantity</v-card-title>
      <v-card-text>
        <!-- Your quantity input field and other necessary fields go here -->
        <v-text-field v-model="quantityToAdd" label="Quantity"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="addQuantity">Add</v-btn>
        <v-btn @click="closeQuantityModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
    </div>
</body>
  </template>
  
  <script>
  import axios from 'axios'
    export default {
      data: () => ({
        dialog: false,
        quantityModal: false,
        selectedProduct: null,
        quantityToAdd: 0,
        search: '',
        dialogDelete: false,
      headers: [
              {
                align: 'start',
                key: 'upc',
                sortable: false,
                title: 'UPC',
              },
              { key: 'name', title: 'Name' },
              { key: 'description', title: 'Description' },
              { key: 'quantity', title: 'Current Stocks' },
              { key: 'price', title: 'Price' },
              { key: 'category', title: 'Category' },
              { title: 'Actions', key: 'actions', sortable: false },
            ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          upc: '',
          name: '',
          description: '',
          quantity: 0,
          price: 0,
          cateogry:''
        },
        defaultItem: {
          upc: '',
          name: '',
          description: '',
          quantity: 0,
          price: 0,
          cateogry:''
          
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
        this.initialize()
      },
  
      methods: {
        openQuantityModal(item) {
        this.selectedProduct = item;
        this.quantityToAdd = 0;
        this.quantityModal = true;
      },
      closeQuantityModal() {
        this.selectedProduct = null;
        this.quantityToAdd = 0;
        this.quantityModal = false;
      },
      async addQuantity() {
        const updatedProduct = { ...this.selectedProduct };
        updatedProduct.quantity += parseInt(this.quantityToAdd);
        await axios.post('api/updateQuantity', {
          upc: updatedProduct.upc,
          quantity: this.quantityToAdd,
        });
        const index = this.desserts.findIndex((product) => product.upc === updatedProduct.upc);
        this.initialize();
        this.closeQuantityModal();
      },
          async  initialize () {
          const data = await axios.get('api/getProducts');
            this.desserts = data.data;
        },
  
        editItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm () {
          this.desserts.splice(this.editedIndex, 1)
          this.closeDelete()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        async save () {
          if (this.editedIndex > -1) {
            // edit
            const response = await axios.put(`api/updateproduct/${this.editedItem.id}`, this.editedItem);
            console.log(response.data);
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
          } else {
            
            const response = await axios.post('api/newproduct', this.editedItem);
            console.log(response.data);
            this.desserts.push(this.editedItem)
          }
          this.close()
        },
      },
    }
  </script>