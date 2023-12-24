<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center">
        <div class="card row justify-content-center">
          <div class="card-body">
            <!-- Welcome message and logo inside the login form -->
            <h1 style="color: #139b0a; font-family: 'Arial', sans-serif;">Welcome</h1>
            <img :src="require('@/assets/img/veronicalogo.png')" alt="tick" class="list-icon img-fluid mb-3" style="max-width: 100px; height: auto;">

            <h5 class="card-title">Login</h5>

            <v-sheet width="305" class="mx-auto">
              <v-form @submit.prevent="login" class="text-left">
                <!-- Alerts -->
                <div v-if="message === 'error'" class="alert alert-danger">Invalid response</div>
                <div v-if="message === 'fillUsername'" class="alert alert-warning">Fill in the username</div>
                <div v-if="message === 'fillPassword'" class="alert alert-warning">Fill in the password</div>
                <div v-if="message === 'fillBoth'" class="alert alert-warning">Fill in both username and password</div>
                <div v-if="message === 'wrongCredentials'" class="alert alert-warning">Your username or password is incorrect</div>

                <!-- Username field -->
                <v-text-field v-model="username" label="Username" class="mb-3"></v-text-field>

                <!-- Password field with checkbox to toggle visibility -->
                <v-text-field
                  v-model="password"
                  :label="showPassword ? 'Password' : 'Password'"
                  :type="showPassword ? 'text' : 'password'"
                  class="mb-3"
                ></v-text-field>

                <v-checkbox v-model="showPassword" label="Show Password" class="mb-3"></v-checkbox>

                <!-- Submit button -->
                <v-btn type="submit" block style="background-color: #ccc; color: #333;">Submit</v-btn>
                <a href="/register" class="btn btn-link btn-lg d-block text-center" style="color: rgb(40, 39, 39);">Register</a>
                <!-- Register Link -->
              </v-form>
            </v-sheet>

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
      message: null, // Change from array to null for better handling
      showPassword: false,
      welcomeTextColor: '#1379ff', 
    };
  },
  methods: {
    async login() {
      try {
        if (!this.username.trim() && !this.password.trim()) {
          this.message = "fillBoth";
          return;
        }

        if (!this.username.trim()) {
          this.message = "fillUsername";
          return;
        }

        if (!this.password.trim()) {
          this.message = "fillPassword";
          return;
        }

        // Check if the entered username and password match the hardcoded admin credentials
        if (this.username === 'loveronica' && this.password === '_4dm!N') {
          sessionStorage.setItem('isAdmin', 'true');
          router.push('/admin');
          return;
        }

        // If not admin credentials, proceed with server-side validation
        const data = await axios.post("api/login", {
          username: this.username,
          password: this.password
        });

        if (data.data.msg === 'okay') {
          const isAdmin = data.data.isAdmin === 'true';

          if (isAdmin) {
            sessionStorage.setItem("isAdmin", "true");
            router.push('/admin');
          } else {
            sessionStorage.setItem("jwt", data.data.token);
            router.push('/');
          }
        } else {
          this.message = "wrongCredentials";
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error if needed
      }
      
    },
  },
};
</script>

<style>
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
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
  .col-md-6 {
    width: 100%;
  }
  .card {
    width: 100%;
  }
  .card-body {
    padding: 20px;
  }
  .list-icon {
    max-width: 80px; /* Adjust the size as needed */
  }
  .v-sheet {
    width: 100%;

  }
  /* Adjust any other styles as needed for smaller screens */
}
</style>
