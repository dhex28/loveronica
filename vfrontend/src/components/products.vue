<template>
  <section class="container rooms-section">
    <div class="row justify-content-start flex-wrap">
      <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card">
          <div>
            <!-- Add checkbox input for product selection -->
            <input type="checkbox" v-model="product.selected" class="product-checkbox">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text text-muted">{{ product.description }}</p>
            <div class="details-container">
              <p class="list-text text-muted">{{ product.quantity }} in stock</p>
            </div>
            <div class="details-container">
              <p class="list-text">₱{{ product.price }}</p>
            </div>
            <div class="quantity-container">
              <button @click="decreaseQuantity(product)" class="btn btn-outline-secondary btn-sm">-</button>
              <span class="quantity">{{ product.quantitySelected || 0 }}</span>
              <button @click="increaseQuantity(product)" class="btn btn-outline-secondary btn-sm">+</button>
            </div>
            <div class="total-amount">
              <h4>Total Amount: ₱{{ calculateTotalAmount(product) }}</h4>
            </div>
            <div class="buttons-container">
              <a :href="'https://timbu.com/search?query=' + product.product_name" class="btn btn-primary btn-sm">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading" class="col-12 text-center mt-4">Loading products...</div>
    <div v-if="error" class="col-12 text-center mt-4 text-danger">{{ error }}</div>

    <!-- Selected Items Summary -->
    <div v-if="selectedProducts.length > 0" class="selected-items mt-4">
      <h2>Selected Items</h2>
      <ul>
        <!-- Display selected items -->
        <li v-for="product in selectedProducts" :key="product.id">
          {{ product.product_name }} - ₱{{ calculateTotalAmount(product) }}
        </li>
      </ul>
    </div>
    <p>Total Order Amount: ₱{{ totalOrderAmount }}</p>

    <!-- Customer Information -->
    <div class="customer-info mt-4">
      <h3 class="mb-4">Customer Information</h3>
      <form>
        <div class="form-group row">
          <label for="address" class="col-sm-2 col-form-label">Address</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="address" v-model="customerInfo.address">
          </div>
        </div>
        <div class="form-group row">
          <label for="contact" class="col-sm-2 col-form-label">Contact</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="contact" v-model="customerInfo.contact">
          </div>
        </div>
        <div class="form-group row">
          <label for="otherInfo" class="col-sm-2 col-form-label">Other Info</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="otherInfo" rows="3" v-model="customerInfo.otherInfo"></textarea>
          </div>
        </div>
      </form>
    </div>

    <button @click="placeOrder" class="btn btn-success mt-4">Place Order</button>

    <!-- Display Order Details -->
    <div v-if="orderPlaced" class="order-details mt-4">
      <h2>Order Details</h2>
      <p><strong>Customer Information:</strong></p>
      <p><strong>Address:</strong> {{ customerInfo.address }}</p>
      <p><strong>Contact:</strong> {{ customerInfo.contact }}</p>
      <p><strong>Other Info:</strong> {{ customerInfo.otherInfo }}</p>

      <p><strong>Selected Products:</strong></p>
      <ul>
        <li v-for="product in selectedProducts" :key="product.id">
          {{ product.product_name }} - Quantity: {{ product.quantitySelected }} - Total Amount: ₱{{ calculateTotalAmount(product) }}
        </li>
      </ul>
      <p><strong>Total Order Amount:</strong> ₱{{ totalOrderAmount }}</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      loading: true,
      error: null,
      customerInfo: {
        address: '',
        contact: '',
        otherInfo: ''
      }
    };
  },
  computed: {
    selectedProducts() {
      return this.products.filter(product => product.selected);
    },
    totalOrderAmount() {
      return this.selectedProducts.reduce((total, product) => total + this.calculateTotalAmount(product), 0);
    },
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await axios.get("/api/getProducts");
        this.products = response.data.map(product => ({
          ...product,
          quantitySelected: 0,
          selected: false,
        }));
        this.loading = false;
      } catch (error) {
        console.error("Error fetching rooms:", error);
        this.loading = false;
        this.error = "Error fetching rooms. Please try again later.";
      }
    },
    increaseQuantity(product) {
      if (product.quantitySelected < product.quantity) {
        product.quantitySelected++;
      }
    },
    decreaseQuantity(product) {
      if (product.quantitySelected > 0) {
        product.quantitySelected--;
      }
    },
    calculateTotalAmount(product) {
      return product.quantitySelected * product.price;
    },
    placeOrder() {
      // Logic for placing the order goes here
      // Access customer information using this.customerInfo (e.g., this.customerInfo.address)
      // For example, you could display a message that the order has been placed along with customer information
      const customerInfo = {
        address: this.customerInfo.address,
        contact: this.customerInfo.contact,
        otherInfo: this.customerInfo.otherInfo
      };
      alert(`Order placed successfully!\nCustomer Info:\nAddress: ${customerInfo.address}\nContact: ${customerInfo.contact}\nOther Info: ${customerInfo.otherInfo}`);
      
      // Optionally, reset the selected products' state after placing the order
      this.selectedProducts.forEach(product => {
        product.selected = false;
        product.quantitySelected = 0;
      });

      // Reset customer information
      this.customerInfo = {
        address: '',
        contact: '',
        otherInfo: ''
      };
    },
  },
  mounted() {
    this.fetchRooms();
  },
};
</script>

<style scoped>
/* Add any additional styling here if needed */
.product-checkbox {
  width: 20px;
  height: 20px;
}

.image-container {
  position: relative;
}

.product-checkbox {
  position: absolute;
  top: 10px;
  left: 10px;
}

.quantity-container {
  display: flex;
  align-items: center;
}

.quantity-container button {
  margin: 0 5px;
}

.card {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.875rem;
}

.list-text {
  font-size: 0.75rem;
}

.quantity {
  font-size: 1rem;
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  color: #495057;
  border-color: #495057;
}

.total-amount {
  margin-top: 10px;
}

.selected-items {
  border-top: 1px solid #dee2e6;
  padding-top: 20px;
}

.selected-items h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.selected-items ul {
  list-style: none;
  padding: 0;
}

.selected-items li {
  font-size: 1rem;
}

.product-image {
  height: 150px; /* Adjust the height as needed */
  object-fit: cover;
}
</style>
