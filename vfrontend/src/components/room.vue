<template>
  <section class="container rooms-section">
    <div class="row justify-content-center">
      <div v-for="room in rooms" :key="room.id" class="col-lg-4 mb-4">
        <div class="card">
          <img :src="room.room_image" alt="Room Image" class="card-img-top">
          <div class="card-body">
            <h2 class="card-title" style="font-weight: bold;">{{ room.name }}</h2>
            <p class="card-text">{{ room.description }}</p>
            <div class="details-container">
              <img :src="require('@/assets/img/check-square.svg')" alt="tick" class="list-icon">
              <p class="list-text">{{ room.capacity }} Persons</p>
            </div>
            <div class="details-container">
              <img :src="require('@/assets/img/bed.png')" alt="tick" class="list-icon">
              <p class="list-text">{{ room.num_bed }} Bed(maximum)</p>
            </div>
            <p class="card-text">₱{{ room.price }} Per Night</p>
            <div class="buttons-container">
              <button @click="openBookingDialog(room)" class="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading" class="col-12 text-center mt-4">Loading rooms...</div>
      <div v-if="error" class="col-12 text-center mt-4 text-danger">{{ error }}</div>
    </div>
    <!-- Modal for booking -->
    <div v-if="showBookingDialog" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title font-weight-bold">Book Room</h4>
            <button type="button" class="close" @click="closeBookingDialog" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="submitBooking">
            <div class="modal-body">
              
            <div class="form-group">
              <label for="roomName">Room Name:</label>
              <input type="text" id="room_name" class="form-control" v-model="selectedRoom.name" readonly>
            </div>
              <div class="form-group">
                <label for="checkInDate">Check-in Date:</label>
                <input type="date" class="form-control" v-model="booking.checkInDate" required>
              </div>
              <div class="form-group">
                <label for="checkOutDate">Check-out Date:</label>
                <input type="date" class="form-control" v-model="booking.checkOutDate" required>
              </div>
              <div class="form-group">
                <label for="specialRequest">Special Request:</label>
                <textarea class="form-control" v-model="booking.specialRequest"></textarea>
              </div>
              <h3>Contact Information</h3>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="booking.name" required>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" v-model="booking.email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" class="form-control" v-model="booking.phoneNumber" required>
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" v-model="booking.address" required>
              </div>
              <div class="form-group">
                <input type="hidden" v-model="info.token" placeholder="Enter Other Information" required>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeBookingDialog">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rooms: [],
      info: [],
      token:'',
      loading: true,
      error: null,
      showBookingDialog: false,
      selectedRoom: null,
      booking: {
        room_name: '',
        checkInDate: '',
        checkOutDate: '',
        specialRequest: '',
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        
      },
    };
  },
  mounted() {
    this.fetchRooms();
    // this.getInfo();
  },

  created() {
	this.token = sessionStorage.getItem('jwt');
  if (this.token) {
    this.getInfo();
  } else {
    // Handle the case where token is not available in local storage
    console.error('JWT token not found in local storage');
  }
  this.getInfo();
},
  methods: {
    async fetchRooms() {
      try {
        const response = await axios.get("getData");
        this.rooms = response.data;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching rooms:", error);
        this.loading = false;
        this.error = "Error fetching rooms. Please try again later.";
      }
    },

    async getInfo() {
    try {
      const response = await axios.get(`api/getUserData/${this.token}`);
      this.info = response.data; // Assuming response.data is an object/array of user data
    } catch (error) {
      console.error(error);
      // Handle the error case, such as showing a message to the user
    }
  },
    openBookingDialog(room) {
      this.selectedRoom = room;
      this.showBookingDialog = true;
    },
    closeBookingDialog() {
      this.showBookingDialog = false;
      this.selectedRoom = null;
      this.resetBookingForm();
    },
    resetBookingForm() {
      this.booking = {
        room_name: '',
        checkInDate: '',
        checkOutDate: '',
        specialRequest: '',
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
      };
    },
    async submitBooking() {
      try {
        // Prepare the booking data
        const bookingData = {
          room_id: this.selectedRoom.id,
          room_name: this.selectedRoom.name,
          check_in_date: this.booking.checkInDate,
          check_out_date: this.booking.checkOutDate,
          special_request: this.booking.specialRequest,
          name: this.booking.name,
          email: this.booking.email,
          phone_number: this.booking.phoneNumber,
          address: this.booking.address,
          token: this.info[0].token,
          
        };

        // Send booking details to the server
        const response = await axios.post("/api/bookingsRoom", bookingData);

        // Handle success response
        console.log('Booking submitted:', response.data);
        this.closeBookingDialog();
      } catch (error) {
        console.error('Error submitting booking:', error);
        // Handle error
      }
    },
  },
};
</script>

<style scoped>
/* Styles for modal/dialog */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%; /* Adjusted width for the modal content */
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.card-img-top {
  height: 200px; /* Adjust the height according to your design */
  object-fit: cover; /* Ensure the image covers the entire container */
}
</style>
