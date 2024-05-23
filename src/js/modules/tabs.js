
const tabs = (sectionSelector, navSelector, navItemsSelector) => {
	// tabs('section', '.nav', '.tab');
	const sections = document.querySelectorAll(sectionSelector);
	const nav = document.querySelector(navSelector);
	const navItems = document.querySelectorAll(navItemsSelector);
	const logo = document.querySelector('.logo');
	const logoLinks  = document.querySelectorAll('.logo__link');

	function hideTabContent() {
		sections.forEach(item => {
			item.classList.add('hide');
		});
		navItems.forEach(item => {
			item.classList.remove('active');
		});
	}

	function showTabContent(selector) {
		let str = `${sectionSelector}.${selector}`;
		let sectionToShow = document.querySelector(str);
		sectionToShow.classList.remove('hide');

		navItems.forEach(item => {
			if(item.parentNode.classList.contains(selector)) {
				item.classList.add('active');
			} 
		});
	}

	//show tabs by default
	hideTabContent();
	showTabContent('search-main');

	function switchTabs(parent, children, childSelector) {
		parent.addEventListener('click', (e) => {
			e.preventDefault();
			const target = e.target;

			if (target && (target.classList.contains(childSelector.replace(/\./, '')) || 
			target.parentNode.classList.contains(childSelector.replace(/\./, '')))) {
				children.forEach((item) => {
					if (target == item || target.parentNode == item) {
						hideTabContent();
						if (item.parentNode.classList.contains('search-main')) {
							showTabContent('search-main');
							
						} else {
							showTabContent('tenure-doc');
						}
					}
				});
			}
		});
	}

	switchTabs(nav, navItems, navItemsSelector);
	switchTabs(logo, logoLinks, '.logo__link');
};

export default tabs;