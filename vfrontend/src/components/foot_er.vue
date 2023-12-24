<template>
	<footer class="footer bg-gray">
	  <div class="container">
		<div class="row">
		  <div class="col-md-4">
			<div class="footer-description">
			  <h3 class="h5 text-dark">Veronica INN</h3>
			  <p class="text-muted">Hospitality and Comfort are our watchwords</p>
			</div>
		  </div>
		  <div class="col-md-4">
			<div class="footer-contact-us">
			  <h3 class="h5 text-dark">Contact Us</h3>
			  <p class="mb-1">
				<img :src="require('@/assets/img/map-pin.svg')" class="footer-description-icon" alt="star hotel location">
				<span class="text-muted">Talipanan Puerto Galera</span>
			  </p>
			  <p class="mb-1">
				<img :src="require('@/assets/img/mail.svg')" class="footer-description-icon" alt="star hotels email">
				<span class="text-muted">08185956620</span>
			  </p>
			  <p class="mb-1">
				<img :src="require('@/assets/img/mail.svg')" class="footer-description-icon" alt="star hotels email">
				<span class="text-muted">support@VeronicaINN.com</span>
			  </p>
			</div>
		  </div>
		  <div class="col-md-4">
			<div class="footer-follow-us">
			  <h3 class="h5 text-dark">Follow Us</h3>
			  <ul class="list-unstyled d-flex">
				<li class="me-3">
				  <a href="#">
					<img :src="require('@/assets/img/facebook.svg')" alt="star hotels facebook page">
				  </a>
				</li>
				<li class="me-3">
				  <a href="#">
					<img :src="require('@/assets/img/twitter.svg')" alt="star hotels twitter page">
				  </a>
				</li>
				<li>
				  <a href="#">
					<img :src="require('@/assets/img/instagram.svg')" alt="star hotels instagram page">
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </div>
	</footer>
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
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
  
  .footer {
	background-color: #d7dbe0; /* Set the background color to light gray */
  }
  
  .text-dark {
	color: #343a40; /* Set text color to dark */
  }
  
  .text-muted {
	color: #6c757d; /* Set muted text color */
  }
  
  /* Add any additional styling as needed */
  </style>
  