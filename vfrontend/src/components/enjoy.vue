<template> 

<!-- Enjoy your stay in our hotel -->
<div class="enjoy-container">
		<div class="enjoy-header">
			<h2 class="enjoy-heading">Enjoy your stay <br>at our hotel</h2>
			<hr class="horizontal">
			<p>We are more than being a hotel because we are able<br> to combine the quality standard of a hotel with the<br> advantages of an apartment.</p>
		</div>
	<div class="enjoy-services">
		<div class="first-col">
			<div class="upper">
					<span>
						<img :src="require('@/assets/img/clock.svg')" alt="clock icon" class="enjoy__clock-icon">
					</span>
					<h3>24 hours Room Service</h3>
					<p>You have access to 24-hours a day room service at our hotel.</p>
			</div>
			<div class="lower">
				<span>
					<img :src="require('@/assets/img/database.svg')"  alt="fitness icon" class="enjoy__fitness-icon">
				</span>
				<h3>Free Billiard</h3>
				<p>Access to Billiard is part of our hotel package when you make a booking.</p>
			</div>
			
		</div>
		<div class="sec-col">
				<div class="upper">
					<span>
						<img :src="require('@/assets/img/coffee.svg')" alt="coffee icon" class="enjoy__coffee-icon">
					</span>
						<h3>Restaurant and Bars</h3>
					<p>You have access to the world state of art restaurants and bars at our hotel</p>
				</div>
				<div class="lower">
					<span>
						<img :src="require('@/assets/img/wifi.svg')" alt="wifi icon" class="enjoy__wifi-icon">
					</span>
						<h3>Free Wi-Fi Access</h3>
						<p>You have access to 24-hours free Wi-Fi services irrespective of any room.</p>
				</div>
		</div>
		<div class="third-col cont">
		
			<img :src="require('@/assets/img/room7.jpg')" alt="women in swimming pool" class="third-col-video" style="width: 310px; height: 280px;">

		</div>
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

<style>
/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="./assets/css/global-header.css">
	<link rel="stylesheet" href="./assets/css/global-footer.css">
	<link rel="stylesheet" href="./assets/css/accesibility.css">
	<link rel="stylesheet" href="./assets/css/index.css">
	<link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon"> */

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');



    @import '../assets/css/accesibility.css';
    @import '../assets/css/index.css';

</style>