const hamburger = (hamburgerSelector, hamburgerActiveClass, menuSelector,  menuActiveClass) => {
	const hamburger  = document.querySelector(hamburgerSelector),
		menu = document.querySelector(menuSelector);

	function toggleHamburger() {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle(hamburgerActiveClass);
			menu.classList.toggle(menuActiveClass);
		});
	}

	function hideMenu() {
		menu.addEventListener('click', () => {
			hamburger.classList.toggle(hamburgerActiveClass);
			menu.classList.toggle(menuActiveClass);
		});
	}

	toggleHamburger();
	hideMenu();

};

export default hamburger;