import tabs from './modules/tabs';
import hamburger from './modules/hamburger';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', ()=> {
	'use strict';

	tabs('section', '.nav', '.tab');
	hamburger('.hamburger', 'hamburger_active', '.nav__list', 'nav__list_active');
	forms('#search-main', '#search-advanced');
	
});
