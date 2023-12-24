<template>
    <header>
        <div class="header-container">
        <nav class="header-nav-bar">
                <div class="nav-logo">
                    <a href="/home">
                        <img :src="require('@/assets/img/veronicalogo.png')"  alt="Logo">
                        
                            <div class="logout-modal" v-if="isLogoutModalOpen">
                    <div class="modal-content">
                    <p>Are you sure you want to login  in admin?</p>
                    <div class="modal-buttons">
    <button @click="confirmLogin">Yes</button>
    <button @click="cancelLogin">Cancel</button>
    </div>
    </div>
</div>
                    </a>
                </div>
                <ul class="header-nav-lists" :class="{ 'show': isMenuOpen }">
                    <li class="header-nav-list">
                        <router-link to="/" class="header-nav-link header-active" @click="closeMenu">Home</router-link>
                    </li>
                    <li class="header-nav-list">
                        <router-link to="/rooms" class="header-nav-link" @click="closeMenu">Rooms</router-link>
                    </li>
                        <li class="header-nav-list"><router-link to="/aminities" class="header-nav-link"> Aminities </router-link></li>
                        <li class="header-nav-list"><router-link to="/prod" class="header-nav-link"> Products </router-link></li>
                        <li class="header-nav-list"><router-link to="/aboutus" class="header-nav-link"> About Us  </router-link></li>
                        <li class="header-nav-list">
                        <router-link to="/yourbook" class="header-nav-link">
                            <span class="icon-book">Your Booking</span>
                        </router-link>
                        </li>
                        <li class="header-nav-list">
                        <router-link to="/login" class="header-nav-link" >Log In</router-link>
                        </li>
                        </ul>
                        <div class="header-hamburger-icon" @click="toggleMenu">
                        <div class="header-hamburger-line"></div>
                        <div class="header-hamburger-line"></div>
                        <div class="header-hamburger-line"></div>
                </div>
                <ul class="header-nav-lists" :class="{ 'show': isMenuOpen }">
  <!-- Your existing navigation links here -->
</ul>
        </nav>
        </div>

    
    </header>
</template>

<script>
export default {
data() {
return {
  isMenuOpen: false,
};
},
methods: {
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
},
closeMenu() {
  this.isMenuOpen = false;
},
},
};
</script>

<!-- <style>
/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/global-header.css">
    <link rel="stylesheet" href="./assets/css/global-footer.css">
    <link rel="stylesheet" href="./assets/css/accesibility.css">
    <link rel="stylesheet" href="./assets/css/index.css">
    <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon"> */

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');


    @import '../assets/css/global-header.css';
    @import '../assets/css/accesibility.css';
    @import '../assets/css/index.css';

.logout-modal {
display: none;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
justify-content: center;
align-items: center;
}

.modal-content {
background: #eae4e4;
padding: 20px;
border-radius: 8px;
text-align: center;
}

.modal-buttons button {
margin: 0 10px;
padding: 8px 16px;
cursor: pointer;
}


</style> -->

<style>
/* Importing Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/* Styling for the header navigation bar */
header {
    font-family: 'Montserrat', sans-serif;
    background-color: #ffffff; /* White background color */
    color: #333; /* Dark text color */
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
    border: 1px solid #ddd; /* Border around the entire navbar */
    border-radius: 8px; /* Rounded corners */
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    width: 150px;
}

.nav-logo img {
    max-height: 50px;
    max-width: 100%;
}

.header-nav-bar {
    display: flex;
    align-items: center;
}

.header-nav-lists {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: auto; /* Move the navigation links to the left on smaller screens */
}

.header-nav-list {
    margin-right: 20px;
}

.header-nav-link {
    color: #333; /* Dark text color */
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease-in-out;
}

.header-nav-link:hover {
    color: #ffd700; /* Gold color on hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.header-nav-link.active {
    color: #ffd700 !important; /* Gold color for active link */
}


@media (max-width: 768px) {
    /* Show the hamburger icon on smaller screens */
    .header-hamburger-icon {
        display: block;
    }

    /* Hide the regular navigation links on smaller screens */
    .header-nav-lists {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px; /* Adjust the top position based on your design */
        left: 20px; /* Adjust the left position based on your design */
        background-color: #ffffff; /* White background color */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 4px; /* Rounded corners */
        z-index: 1;
    }

    .header-nav-list {
        margin-right: 0;
    }

    .header-nav-link {
        color: #333; /* Dark text color for mobile menu */
        margin-bottom: 10px; /* Adjust the margin between mobile links */
    }

    .header-nav-link:hover {
        color: #ffd700; /* Gold color on hover for mobile menu */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .header-nav-link.active {
        color: #ffd700 !important; /* Gold color for active link in mobile menu */
    }

    .header-nav-bar.show {
        flex-direction: column;
    }
    .header-hamburger-icon {
cursor: pointer;
display: none; /* Hide the hamburger icon by default on larger screens */
color: #333; /* Dark text color */
font-size: 20px;
position: absolute;
top: 10px;
right: 20px; /* Adjust the right position as needed */
    }

.header-hamburger-line {
width: 25px;
height: 3px;
background-color: #333;
margin: 5px 0;
}

@media (max-width: 768px) {
/* Show the hamburger icon on smaller screens */
.header-hamburger-icon {
display: block;


}
.header-nav-lists.show {
display: flex;
}

.header-nav-list {
margin: 10px;
padding-right: 300px;
}

/* Media query for screens smaller than 768px */
@media screen and (max-width: 768px) {
.header-nav-list {
padding-right: 300px; /* Adjust padding for smaller screens */

}
}
}
}

/* Add more styles as needed for other elements */
</style>



