
const tabs = (sectionSelector, navItemsSelector, activeClass, hideClass, navSelector, logoSelector, logoItemSelector) => {
	const sections = document.querySelectorAll(sectionSelector);
	const navItems = document.querySelectorAll(navItemsSelector);
	const nav = document.querySelector(navSelector);
	const logo = document.querySelector(logoSelector);
	const logoItems = document.querySelectorAll(logoItemSelector);
		
	function hideTabContent() {
		sections.forEach(item => {
			item.classList.add(hideClass);
		});
		navItems.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		sections[i].classList.remove(hideClass);
		navItems[i].classList.add(activeClass);
		// adjustPadding();
	}

	//show tabs by default
	hideTabContent();
	showTabContent();

	function switchTabs(parent, children, childSelector) {
		parent.addEventListener('click', (e) => {
			e.preventDefault();
			const target = e.target;
			if (target && (target.classList.contains(childSelector.replace(/\./, '')) || 
			target.parentNode.classList.contains(childSelector.replace(/\./, '')))) {
				children.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						hideTabContent();
						showTabContent(i);
					}
				});
			}
		});
	}

	switchTabs(nav, navItems, navItemsSelector);
	switchTabs(logo, logoItems, logoItemSelector);

};

export default tabs;