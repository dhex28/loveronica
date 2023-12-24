<template>
    <div class="container-fluid">
        <form @submit.prevent="save" class="card p-4">
  <div class="mb-3">
    <label for="product_name" class="form-label">Name</label>
    <input type="text" placeholder="Name" v-model="product_name" class="form-control">
  </div>

<!--   
  <div class="mb-3">
    <label for="category_id" class="form-label">Category</label>
        <select v-model="category_id">
          <option v-for="category in categories" :key="category.category_id" :value="category.category_id">
            {{ category.category_name }}
          </option>
        </select>

  </div> -->

  <div class="mb-3">
        <label for="category_id" class="form-label">Category</label>
        <div class="input-group">
          <select v-model="category_id" class="form-control"  >
            <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.category_name }}
          </option>
          </select>
          <div class="input-group-append">
            <div class="input-group-text position-absolute" style="left: 50px; top: 0; bottom: 0; pointer-events: none;">
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
        </div>
  </div>

  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="text" placeholder="Price" v-model="price" class="form-control">
  </div>

  <div class="mb-3">
    <label for="quantity" class="form-label">Quantity</label>
    <input type="number" placeholder="Quantity" v-model="quantity" class="form-control" style="font-size: 16px;">
  </div>
  <div class="mb-3">
          <label for="productImage" class="form-label">Image</label>
          <input type="file" accept="image/*" @change="handleImageUpload" required class="form-control">

        </div>
  <div class="mb-3">
    <label for="status" class="form-label">Status</label>
    <select v-model="status" class="form-control">
      <option value="Available">Available</option>
      <option value="Not Available">Not Available</option>
    </select>
  </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>

      </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: "",
        category_id: "",
        price: "",
        quantity: "",
        productImage: null,
        status: "Available",
        categories:[],

      };
    },
    methods: {
      async save() {
            try {
                const formData = new FormData();
                formData.append("product_name", this.product_name);
                formData.append("category_id", this.category_id);
                formData.append("price", this.price);
                formData.append("quantity", this.quantity);
                formData.append('product_image', this.productImage, this.productImage.name);
                formData.append("status", this.status);
                

                const product = await axios.post("inventorySave", formData);

                console.log("Product saved successfully:", product);

                // Reset form fields or perform other actions after saving
                this.product_name = "";
                this.category_id = "";
                this.price = "";
                this.quantity = "";   
                this.productImage = null;
                this.status = "";

                this.$emit("refreshData");
            } catch (error) {
                console.error("Error saving product:", error);
            }
            
        },
        handleImageUpload(event) {
      this.productImage = event.target.files[0];
        },
        getBase64Image(file) {
            return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
          });
        },
        async fetchCategories() {
        try {
          const response = await axios.get("getCategory");
          this.categories = response.data; // Assuming response.data contains the categories array
        } catch (error) {
          console.error(error);
        }
      },
      
  
    },
    mounted() {

      this.fetchCategories();
    }
  };
  </script>
  
  <style scoped>

/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-cTyZVgM0R+nuFqWDOQTNnXS5D/Npz8I5+6SgWv22d9QH6U4PKqRTbneELzC6s7cz" crossorigin="anonymous"> */

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  .form-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .room-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-input {
    margin-bottom: 10px;
    padding: 0px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .file-input {
    cursor: pointer;
  }
  
  .submit-button {
    background-color: rgb(215, 246, 74);
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }

  .input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 80px;
}

/* Style the dropdown icon */
.input-group-text {
  border-radius: 0 .25rem .25rem 0;
  background-color: #fff; /* Adjust the background color as needed */
  cursor: pointer;
}

.input-group-text i {
  pointer-events: none; /* Ensure the icon doesn't interfere with the select element */
}
  </style>
  
  