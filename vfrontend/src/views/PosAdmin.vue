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
        <v-app>
    <v-row>

      <v-col>
        <div v-if="salesTransactionNumber">
              Sales Transaction Number: <b>{{ salesTransactionNumber }}</b>
        </div>
        <div>Total Price: <b>{{ totalSalesPrice.toFixed(2) }}</b></div>

      <v-data-table :items="tableData" :headers="tableHeaders" dense>
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.price }}</td>
        <td>{{ props.item.quantity }}</td>
        <td>{{ props.item.quantity * props.item.price }}</td>
      </template>
    </v-data-table>
      </v-col>
    </v-row>
    <v-footer app>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="inputText"
              label="Fixed Input Text"
              outlined
              @keydown.enter="handleEnterKey"
              @keydown.ctrl.enter.prevent="handleSales"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
   
    <v-dialog v-model="showProductModal" max-width="600" @click:outside="showProductModal = false">
      <v-card>
        <v-card-title class="headline">
          Products List
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="productFilter"
            label="Filter Products"
            outlined
            solo-inverted
            @input="filterProducts"
            ref="productFilterInput"
          ></v-text-field>
          <v-list style="max-height: 300px; overflow-y: auto;">
            <v-list-item v-for="(product, index) in filteredProductList" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ product.name + "  -   " + product.price }}</v-list-item-title>
                <v-list-item-subtitle>{{ product.description }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn @click="selectProduct(product.upc)">Select</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="showProductModal = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showPaymentModal" max-width="400">
    <v-card>
      <v-card-title>Payment Information</v-card-title>
      <v-card-text>
        <!-- Add input fields for payment mode and amount paid -->
        <v-select v-model="paymentMode" :items="paymentModes" label="Payment Mode"></v-select>
        <v-text-field v-if="paymentMode !== 'Cash'" v-model="cardboxInput" label="Cardbox Input"></v-text-field>
        <v-text-field v-model="amountPaid" label="Amount Paid"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="processPayment" color="primary">Process Payment</v-btn>
        <v-btn @click="cancelPayment" color="error">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </v-app>
    </div>
        </div>
    </body>
      </template>
      
      <script>
      import axios from 'axios';
      
      export default {
  data() {
    return {
      productFilter: '',
      inputText: '',
      salesTransactionNumber: null,
      tableData: [],
      quantity:'',
      upc:'',
      showProductModal: false,
      productList: [],
      prod:[],
      showQuantityModal:false,
      showPaymentModal: false,
      paymentMode: null,
      amountPaid: null,
      paymentModes: ['Cash', 'Credit Card', 'Debit Card', 'Gcash', 'Maya'], 
      cardboxInput:''
    };
  },
  computed:{
    tableHeaders() {
      return [
        { text: 'Product Name', value: 'name' },
        { text: 'Price', value: 'price' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Subtotal', value: 'subtotal' }, 
      ];
    },
    filteredProductList() {
      const filterText = this.productFilter.toLowerCase();
      return this.productList.filter(product =>
        product.name.toLowerCase().includes(filterText)
      );
    },
    totalSalesPrice() {
      return this.tableData.reduce((total, item) => total + item.subtotal, 0);
    },
  },
  created(){
    this.salesTransactionNumber = this.generateRandomKey();
    this.getSales();
    this.getProducts();
  },
  watch: {
    showProductModal: 'showProductModalChanged',
    
    $data: {
      handler() {
        this.$nextTick(() => {
          this.$refs.productFilterInput && this.$refs.productFilterInput.focus();
        });
      },
      deep: true,
    },
  },
  methods: {
    async showProductModalChanged() {
      if (this.showProductModal) {
        await this.$nextTick();
        this.$refs.productFilterInput.focus();
      }
    },
    async getProducts(){
      const data = await axios.get('api/getProducts');
      this.prod = data.data;
    },

    selectProduct(upc) {
      this.inputText = upc;
      this.showProductModal = false;
      
    },
    generateRandomKey() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const length = 8;
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    },
    async getSales(){
      const sales = await axios.get(`api/sales/${this.salesTransactionNumber}`);
      this.tableData = sales.data.map(item => ({
        ...item,
        subtotal: item.quantity * item.price,
      }));
      

      
    },
    handleSales() {
      // SET MODAL HERE TO ASK FOR PAYMENT MODE AND AMOUNT PAID
      this.showPaymentModal = true;
      if (this.paymentMode !== 'Cash') {
        console.log('Cardbox Input:', this.cardboxInput);
      }
      
    },
    async processPayment() {
      console.log('Processing payment...');
      const sales = await axios.get(`api/setsales/${this.salesTransactionNumber}`);
      this.salesTransactionNumber = this.generateRandomKey();
      this.getSales();
      this.showPaymentModal = false;
      this.paymentMode = null;
      this.amountPaid = null;

    },

    cancelPayment() {
      // Close the payment modal without processing the payment
      this.showPaymentModal = false;

      // Reset payment-related data
      this.paymentMode = null;
      this.amountPaid = null;

      // Additional actions if needed
      // ...
    },
    showQuantity(){
      this.showQuantityModal= true;
    },
    async handleEnterKey() {
      if (this.inputText.includes('@')) {
        const parts = this.inputText.split('@');
        console.log('Split parts:', parts);
        this.quantity = parts[0];
        this.upc = parts[1];
      } else {
        this.upc = this.inputText;
        this.quantity = '1';
      }
      const st = await axios.post('api/isales', {
        quantity: this.quantity,
        upc: this.upc,
        orderID: this.salesTransactionNumber,
      });
      if (st.data === 'no_result') {
        const d = await axios.get('api/products');
        this.productList= d.data;
        this.showProductModal = true;
        console.log(this.productList);
      } else {
        this.inputText = '';
        this.getSales();
      }
    },
  },
};
      </script>
      