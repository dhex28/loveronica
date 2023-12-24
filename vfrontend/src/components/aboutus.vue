<template>
	<main>
		<div class="container">
			<!-- Top Text -->
			<div class="page-header-container">
				<h2 class="page-header">Welcome to Veronica's Inn Hotel</h2>
				<hr />
				<p class="page-sub-header">

					"Get to know more about our hotel and discover a world where luxury,<br>
					 innovation, and personalized service come together <br> seamlessly,
					ensuring an extraordinary experience for every guest.
				</p>
			</div>
			<!-- Upper Section -->
			<section class="upper-section">
				<div class="row center-lg">
					<div class="col image-col right-marg">
						<div class="large-image-container">
							<img :src="require('@/assets/img/room-aboutus.jpg')" alt="room-image-large" class="large-image">
						</div>

					</div>
					<!-- Top Right Text -->
					<div class="col">
						<h3 class="right-title"> We are available 10 hours<br> Telephone Services</h3>
						<p>
							Discover a world of elegance and comfort at Veronica's Inn Hotel. Since our inception in [Year
							of Establishment],
							we have been dedicated to providing an unparalleled experience for our guests. Nestled in the
							heart of Talipanan Puerto Galera,
							our hotel is more than just a place to stay; it's a destination where every moment is designed
							to exceed your expectations.
						</p>
						<br>
					</div>
				</div>
			</section>
			<!-- Other Facilities Section -->
			<div class="up">
				<h2 class="page-header">Veronica's Hotel Information </h2>
				<hr />
			</div>

			<!-- Facilities Gallery -->
			<div class="container">
				<div class="containera">
					<section class="upper-section">
						<div class="row center-lg">
							<div class="col image-col right-marg">
								<div class="large-image-container">
									<img :src="require('@/assets/img/owner2.jpg')" alt="room-image-large"
										class="large-image">
								</div>

							</div>
							<!-- Top Right Text -->
							<div class="col">
								<h3 class="right-title"> Owner <br> </h3>
								<p>
									judie Ann here, and I am thrilled to welcome you to in Veronica's Inn .
									Our journey in the hospitality industry is a testament to our passion for creating
									memorable experiences.
									Whether you're here for business, leisure, or a special event, my goal is to ensure that
									your time at
									our hotel is nothing short of exceptional. Thank you for choosing us, and I look forward
									to personally
									welcoming you to the unique world of Veronica's Inn Hotel."
								</p>
								<br>
							</div>
						</div>
					</section>

					<section class="upper-section">
						<div class="row center-lg">
							<div class="col image-col right-marg">
								<div class="large-image-container">
									<img :src="require('@/assets/img/room1-aboutus.jpg')" alt="room-image-large"
										class="large-image">
								</div>

							</div>
							<!-- Top Right Text -->
							<div class="col">
								<h3 class="right-title"> About Hotel <br> </h3>
								<p>
									Luxurious Accommodations:

									Indulge in the lap of luxury with our thoughtfully designed rooms and suites.
									Each space is a sanctuary of comfort, featuring modern amenities, plush furnishings,
									and breathtaking views of Puerto Galera. Whether you're here for business or leisure,
									our
									accommodations are a perfect blend of style and functionality.
								</p>
								<br>
							</div>
						</div>
					</section>

				</div>
			</div>
		</div>
	</main>
</template>
	
	
<script>
export default {
	mounted() {
		this.initializeHamburgerToggle();
	},
	methods: {
		initializeHamburgerToggle() {
			const ul = document.querySelector('.header-nav-lists');
			const hamburger = document.querySelector('.header-hamburger-icon');

			hamburger.addEventListener('click', () => {
				ul.classList.toggle('show');
				hamburger.classList.toggle('show');
			});
		}
	}
};

</script>
	
	
<style>

.large-image-container {
    width: 100%;
    max-width: 100%;
    height: auto;
    text-align: center; /* Center the image */
}

.large-image {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: inline-block;
}
.container {
    width: 100%;
    max-width: 1200px; /* Adjust the max-width according to your design */
    margin: 0 auto;
    padding: 0 15px;
}

/* Header styles */
.page-header-container {
    text-align: center;
    padding: 20px 0;
}

.page-header {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.page-sub-header {
    font-size: 1.2rem;
    line-height: 1.5;
}

/* Upper section styles */
.upper-section {
    margin-top: 30px;
}

.right-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

/* Col layout styles */
.col {
    flex: 1;
    padding: 0 15px;
    margin-bottom: 20px;
}

/* Image styles */
.large-image {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin-bottom: 15px;
}
/* You can add additional styles for larger screens if needed */
/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="./assets/css/global-header.css">
		<link rel="stylesheet" href="./assets/css/global-footer.css">
		<link rel="stylesheet" href="./assets/css/facilities.css"> */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

@import '../assets/css/facilities.css';</style>