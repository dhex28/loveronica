<template>

	<section class="special-offers">
			<!-- Top Text -->
			<div class="page-header-container">
	
			  <h2 class="page-header">Simplicity is the ultimate <br>Watchword</h2>
		
				
				</div>
				<div class="row center-lg">
					<div class="col image-col right-marg">
						<img :src="require('@/assets/img/hotel-1.webp')" alt="room-image" class="small-image">
						<img :src="require('@/assets/img/hotel-2.webp')" alt="room-image" class="small-image">
						<img :src="require('@/assets/img/hotel-3.webp')" alt="room-image" class="small-image img-hide">
						<div class="side-by-side-container">
							<div class="large-image-container">
								<img :src="require('@/assets/img/hotel-4-large.webp')" alt="room-image-large" class="large-image">
							</div>
							<section class="stacked-image-container">
							  <div><img :src="require('@/assets/img/hotel-5.webp')" alt="room-image" class="small-image"></div>
							  <div><img :src="require('@/assets/img/hotel-6.webp')" alt="room-image" class="small-image"></div>
							</section>
						</div>
					</div>
					<div class="col">
						<p class="offers-sub-title">
								The fact that we are run by hospitality professionals<br>and equipped with the world best interior designers <br> is why our rooms and suites are second to none in <br>the universe
						</p>
						<ul class="offers-list">
							<li>
								<div>
									<img :src="require('@/assets/img/check-square.svg')" alt="tick" class="list-icon">
									<p class="list-text">Standard Room</p>
								</div>
							</li>
							<li>
								<div>
									<img :src="require('@/assets/img/check-square.svg')" alt="tick" class="list-icon">
									<p class="list-text">Executive Room</p>
								</div>
							</li>
							<li>
								<div>
									<img :src="require('@/assets/img/check-square.svg')" alt="tick" class="list-icon">
									<p class="list-text">King Suite</p>
								</div>
							</li>
						</ul>
						<a href="https://timbu.com/search?query=hotel" class="btn btn-fill btn-large centered">Book Now</a>
					</div>
				</div>
			</section>
	
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