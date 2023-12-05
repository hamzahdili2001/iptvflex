document.addEventListener('DOMContentLoaded', function () {
	const menuBars = document.querySelector(".menu-toggle");
	const navigation = document.querySelector("header nav");
	const navLinks = document.querySelectorAll('nav a');
	/* 
	document.addEventListener('contextmenu', function (e) {
		e.preventDefault();
	});
	*/

	menuBars.addEventListener("click", () => {
		navigation.classList.toggle("show");
	});

	const links = document.querySelectorAll('.scroll');

	links.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href');
			const targetPosition = document.querySelector(targetId).offsetTop;
			const startPosition = window.pageYOffset;
			const distance = targetPosition - startPosition;
			const duration = 1000; // Adjust as needed
			let start = null;

			function animation(currentTime) {
				if (start === null) start = currentTime;
				const progress = currentTime - start;
				window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
				if (progress < duration) requestAnimationFrame(animation);
			}

			function easeInOut(t, b, c, d) {
				t /= d / 2;
				if (t < 1) return c / 2 * t * t + b;
				t--;
				return -c / 2 * (t * (t - 2) - 1) + b;
			}

			requestAnimationFrame(animation);

			// Activate the clicked link
			activateLink(link);

			navigation.classList.remove('show');
		});
	});

	function activateLink(clickedLink) {
		// Remove active class from all links
		navLinks.forEach(link => {
			link.classList.remove('active');
		});

		// Add active class to the clicked link
		clickedLink.classList.add('active');
	}
});
