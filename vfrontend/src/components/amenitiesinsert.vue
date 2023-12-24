<template>
    <div class="container-fluid">
        <form @submit.prevent="save" class="card p-4">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" placeholder="Name" v-model="name" class="form-control">
  </div>
  <div class="mb-3">
    <label for="category" class="form-label">Category</label>
    <select v-model="category" class="form-control">
      <option value="event">Event</option>
      <option value="activity">Activity</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" placeholder="Description" v-model="description" class="form-control" style="font-size: 16px;">
  </div>

  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="text" placeholder="Price" v-model="price" class="form-control">
  </div>
  <div class="mb-3">
          <label for="amenitiesImage" class="form-label">Image</label>
          <input type="file" accept="image/*" @change="handleImageUpload" required class="form-control">

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
        category:"",
        description: "", 
        price: "",
        amenitiesImage: null,
        


      };
    },
    methods: {
      async save() {
        try {
          const imageName = `room_${Date.now()}.png`;

          const formData = new FormData();
          formData.append('name', this.name);
          formData.append('category', this.category);
          formData.append('description', this.description);
          formData.append('price', this.price);
          formData.append('amenities_image', this.amenitiesImage, this.amenitiesImage.name);
          const amenitie = await axios.post("amenitiesSave", formData);

          console.log("Amenities saved successfully:", amenitie );

          // Clear the form after successful submission
          this.name = "";
          this.capacity = "";
          this.description = "";
          this.price = "";
          this.amenitiesImage = null;

  
          // Refresh the data in the admin view
          this.$emit("refreshData");
        } catch (error) {
          console.error("Error saving room:", error);
          // You can display an error message to the user
        }
      },
      handleImageUpload(event) {
      this.amenitiesImage = event.target.files[0];
  },
  getBase64Image(file) {
      return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  },
  
    },
  };
  </script>
  
  <style scoped>
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
  </style>
  
  