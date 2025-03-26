/* Nav bar hamburger-menu in samll screen */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('click', () => {
	menuItems.classList.toggle('open');
});

/* JavaScript function for product search */
const offerimgs = document.querySelectorAll('.offerrow div[class^="offerimg"]');

/**
 * Searches for products based on the user's input in the search field.
 * The function retrieves the search query from the input element with the ID 'productSearch'
 * and filters the displayed products based on their title, price, and description.
 * Products that match the search query will be displayed, while those that do not will be hidden.
 *
 * @function searchProducts
 * @throws {Error} Throws an error if the search input element is not found in the document.
 */
function searchProducts() {
	const searchQuery = document.getElementById('productSearch').value.toLowerCase();

	offerimgs.forEach(offerimg => {
		const title = offerimg.querySelector('.offerimg-subtxt1').textContent.toLowerCase();
		const price = offerimg.querySelector('.offerimg-subtxt2').textContent.toLowerCase();
		const description = offerimg.querySelector('.offerimg-subtxt3').textContent.toLowerCase();

		if (title.includes(searchQuery) || price.includes(searchQuery) || description.includes(searchQuery)) {
			offerimg.style.display = 'block';
		} else {
			offerimg.style.display = 'none';
		}
	});
}

/* Image Sliding of banner section */
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('li');

/**
 * Slides the carousel in the specified direction.
 * The function updates the current index of the carousel items and adjusts the
 * position of the carousel based on the new index. If the index goes out of bounds,
 * it wraps around to the other end of the carousel.
 *
 * @param {number} direction - The direction to slide the carousel.
 *                             A positive value slides to the right,
 *                             while a negative value slides to the left.
 *
 * @throws {Error} Throws an error if the carousel items are not defined.
 *
 * @returns {void} This function does not return a value.
 */
function slideCarousel(direction) {
	currentIndex += direction;
	if (currentIndex < 0) {
		currentIndex = carouselItems.length - 1;
	} else if (currentIndex >= carouselItems.length) {
		currentIndex = 0;
	}

	const slideAmount = -currentIndex * carousel.offsetWidth;
	carousel.querySelector('ul').style.transform = `translateX(${slideAmount}px)`;
}

/**
 * Initiates an automatic sliding effect for a carousel.
 * This function sets up an interval that triggers the `slideCarousel` function
 * every 2000 milliseconds (2 seconds), advancing the carousel by one slide each time.
 *
 * @function startAutoSlide
 * @returns {void} This function does not return any value.
 *
 * @throws {Error} Throws an error if `slideCarousel` is not defined or is not a function.
 */
function startAutoSlide() {
	setInterval(() => {
		slideCarousel(1);
	}, 2000); // (interval time in milliseconds)
}
startAutoSlide();

/* Redirect button */
/**
 * Redirects the user to a specified URL when a button is clicked.
 *
 * This function attaches a click event listener to a button identified by its ID.
 * When the button is clicked, the browser will navigate to the provided URL.
 *
 * @param {string} buttonId - The ID of the button element to attach the click event listener to.
 * @param {string} url - The URL to redirect to when the button is clicked.
 *
 * @throws {Error} Throws an error if the button with the specified ID does not exist in the DOM.
 */
function redirectToPage(buttonId, url) {
	const button = document.getElementById(buttonId);
	if (button) {
		button.addEventListener('click', () => {
			window.location.href = url;
		});
	}
}
redirectToPage('Top-Deals', 'Top-Deals.html');
redirectToPage('Best-of-Electronics', 'Best-of-Electronics.html');
redirectToPage('Home-Essentials', 'Home-Essentials.html');
redirectToPage('Essentials-for-Kids', 'Essentials-for-Kids.html');
redirectToPage('Top-Picks', 'Top-Picks.html');