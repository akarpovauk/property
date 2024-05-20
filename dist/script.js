/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hamburger = (hamburgerSelector, hamburgerActiveClass, menuSelector, menuActiveClass) => {
  const hamburger = document.querySelector(hamburgerSelector),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    parent.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;
      if (target && (target.classList.contains(childSelector.replace(/\./, '')) || target.parentNode.classList.contains(childSelector.replace(/\./, '')))) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.section', '.tab', 'active', 'hide', '.nav', '.logo', '.logo__link');
  (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"])('.hamburger', 'hamburger_active', '.nav__list', 'nav__list_active');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map