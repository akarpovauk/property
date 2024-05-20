import tabs from './modules/tabs';
import hamburger from './modules/hamburger';

window.addEventListener('DOMContentLoaded', ()=> {
	'use strict';

	tabs('.section', '.tab', 'active', 'hide', '.nav', '.logo', '.logo__link');
	hamburger('.hamburger', 'hamburger_active', '.nav__list', 'nav__list_active');
	
});
