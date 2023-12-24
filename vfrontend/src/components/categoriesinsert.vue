<template>
    <div class="container-fluid">
      <form @submit.prevent="save" class="card p-4">
        <div class="mb-3">
          <label for="category_name" class="form-label">Category Name</label>
          <input type="text" placeholder="Category Name" v-model="category_name" class="form-control">
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
        category_name: "",
      };
    },
    methods: {
      async save() {
        try {
          const formData = new FormData();
          formData.append('category_name', this.category_name);
          
          const category = await axios.post("saveCateg", formData);
  
          console.log("Category saved successfully:", category);
  
          // Clear the form after successful submission
          this.category_name = "";
  
          // Refresh the data in the admin view
          this.$emit("refreshData");
        } catch (error) {
          console.error("Error saving room:", error);
          // You can display an error message to the user
        }
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
  
  