<template>
    <div class="jumbotron-container">
        <div class="jumbotron-left">
            <h2 class="jumbotron-header">Discover the perfect balance <br> of hospitality, luxury and <br>comfort.</h2>
            <p>We are focused on providing clients with the highest level<br>
                of comfort and excellent affordable rates</p>
            <a href="/rooms" class="btn btn-fill btn-large">Book Now</a>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const loader = document.getElementById('loader');
        const scrollBar = document.getElementsByClassName('scroll-bar')[0];
        window.addEventListener('load', () => {
            if (loader && scrollBar) {
                loader.classList.add('none');
                scrollBar.classList.remove('scroll-bar');
            }
        });
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');

@import '../assets/css/accesibility.css';
@import '../assets/css/index.css';

.btn {
    color: rgb(255, 255, 255);
    background-color: #abab15; /* Button background color */
    padding: 10px 0px; /* Adjust padding as needed */
    border-radius: 5px; /* Add rounded corners */
    text-decoration: none; /* Remove default link underline */
    display: inline-block;
    transition: background-color 0.3s ease; /* Add smooth transition effect */
}
.jumbotron-header{
    color: rgb(224, 219, 219);
}
.btn-large {
    font-size: 18px; /* Adjust font size as needed */
}
</style>
