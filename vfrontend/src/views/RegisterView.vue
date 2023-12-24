<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card row justify-content-center">
            <div class="card-body text-center">
              <!-- Welcome message -->
              <h1 style="color: #139b0a; font-family: 'Arial', sans-serif;" class="blinking-text">Welcome</h1>
    
              <!-- Your logo image -->
              <img :src="require('@/assets/img/veronicalogo.png')" alt="tick" class="list-icon img-fluid mb-3" style="max-width: 100px; height: auto;">
    
              <h5 class="card-title">Register</h5>
    
              <div> <!-- Centering the form -->
                <v-sheet width="405" class="mx-auto" style="background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
                  <v-form fast-fail @submit.prevent="register">
                    <!-- Alerts -->
                    <div v-if="message === 'error'" style="color: rgb(35, 32, 32);">Invalid response</div>
                    <v-text-field v-model="username" label="Username" outlined dense></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password" outlined dense></v-text-field>
                    <v-text-field v-model="passwordConfirm" label="Password Confirm" type="password" outlined dense></v-text-field>
                    <div v-if="message === 'passwordMismatch'" style="color: rgb(35, 32, 32);">Passwords do not match</div>
                    <!-- Submit button -->
                    <v-btn type="submit" block class="mt-2" style="background-color: #ccc; color: #333;">Submit</v-btn>
                    <!-- Link to Login -->
                    <router-link to="/login" style="color: rgb(137, 32, 30);" class="d-block text-center mt-2">Login</router-link>
                  </v-form>
                </v-sheet>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
    
    <script>
    import router from '@/router';
    import axios from 'axios';
    
    export default {
      data() {
        return {
          username: '',
          password: '',
          passwordConfirm: '',
          message: null,
          welcomeTextColor: '#1379ff', // Adjust this color as needed
        };
      },
      methods: {
        async register() {
          if (this.password === this.passwordConfirm) {
            const data = await axios.post("api/register", {
              username: this.username,
              password: this.password
            });
    
            this.message = data.data.msg;
    
            if (data.data.msg === 'okay') {
              alert("Registered successfully");
              router.push('/login');
            }
          } else {
            this.message = "passwordMismatch";
          }
        }
      }
    };
    </script>
    
  <style>
  /* Define the style for the welcome-text class */
  .welcome-text {
    color: #139b0a;
    font-family: 'Arial', sans-serif;
  }
  @keyframes blinkText {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  /* Apply the animation to the text */
  .blinking-text {
    animation: blinkText 2s ease-in-out infinite; /* Adjust duration and timing as needed */
  }
  @media only screen and (max-width: 414px) {
    /* Your existing responsive styles for smaller screens */
  
    /* Additional styles for iPhone XR */
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .col-md-6 {
      width: 100%;
      max-width: 100%;
    }
    .card {
      width: 100%;
      max-width: 100%;
    }
    .card-body {
      padding: 15px; /* Adjust padding as needed */
    }
    .list-icon {
      max-width: 70px; /* Adjust the size as needed */
    }
    .v-sheet {
      width: 100%;
      max-width: 100%;
    }
    /* Adjust any other styles as needed for iPhone XR */
  }
  
  </style>
  
    