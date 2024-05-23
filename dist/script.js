/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = (sectionSearch, sectionSearchAdv) => {
  // forms('#search', '#search-advanced');
  const allForms = document.querySelectorAll('form');
  const inputMain = document.querySelectorAll('#search-input');
  const inputTenure = document.querySelectorAll('#tenure-input');
  const priceMin = document.querySelectorAll('#min-price');
  const priceMax = document.querySelectorAll('#max-price');
  const bedMin = document.querySelectorAll('#min-bed');
  const bedMax = document.querySelectorAll('#max-bed');
  const inputs = document.querySelectorAll('input');
  const selects = document.querySelectorAll('select');
  let statusMessage = document.createElement('div');
  let statusImg = document.createElement('img');
  let formState = {
    inputMain: '',
    bedMin: '0',
    bedMax: '0',
    priceMin: '0',
    priceMax: '0',
    tenureInput: '0'
  };
  const searchSection = document.querySelector(sectionSearch);
  const searchSectionAdv = document.querySelector(sectionSearchAdv);
  const message = {
    loading: 'Loading...',
    failure: 'Something went wrong...',
    spinner: 'icons/spinner.gif',
    fail: 'icons/not-found-magnifying-glass.svg'
  };
  let updateTitle = () => {
    let title = document.querySelector('#text').textContent;
    title = `Property for sale in ${formState.inputMain}`;
    document.querySelector('#text').textContent = title;
  };
  function showAdvancedSearch(selector, funcUpdateTitle) {
    searchSection.classList.add(selector);
    searchSectionAdv.classList.remove(selector);
    funcUpdateTitle();
  }
  ;
  function bindActionToElems(event, elem, prop) {
    elem.forEach(item => {
      item.addEventListener(event, () => {
        elem.forEach(item => {
          formState[prop] = item.value;
        });
      });
    });
  }
  bindActionToElems('input', inputMain, 'inputMain');
  bindActionToElems('change', inputTenure, 'tenureInput');
  bindActionToElems('change', priceMin, 'priceMin');
  bindActionToElems('change', priceMax, 'priceMax');
  bindActionToElems('change', bedMin, 'bedMin');
  bindActionToElems('change', bedMax, 'bedMax');
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    selects.forEach(item => {
      item.value = '0';
    });
  };
  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };
  function addStatusInfo(form, text, img) {
    let parent = form.parentNode;
    statusMessage.classList.add('status', 'form');
    statusMessage.textContent = text;
    parent.appendChild(statusMessage);
    statusImg.setAttribute('src', img);
    statusImg.classList.add('faded', 'status', 'status_img');
    statusMessage.appendChild(statusImg);
  }
  function clearStatusInfo() {
    statusMessage.remove();
  }
  allForms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      addStatusInfo(form, message.loading, message.spinner);
      const formData = new FormData(form);
      if (form.id = '#search') {
        showAdvancedSearch('hide', updateTitle);
      }
      if (form.id = '#search-advanced') {
        console.log(formState);
        for (let key in formState) {
          if (key == 'inputMain') {
            formData.append(key, formState[key]);
          }
        }
      }
      postData('assets/server.php', formData).then(res => {
        console.log(`my res is ${res}`);
      }).catch(() => {
        addStatusInfo(form, message.failure, message.fail);
      }).finally(() => {
        clearInputs();
        clearStatusInfo();
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

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
const tabs = (sectionSelector, navSelector, navItemsSelector) => {
  // tabs('section', '.nav', '.tab');
  const sections = document.querySelectorAll(sectionSelector);
  const nav = document.querySelector(navSelector);
  const navItems = document.querySelectorAll(navItemsSelector);
  const logo = document.querySelector('.logo');
  const logoLinks = document.querySelectorAll('.logo__link');
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
      if (item.parentNode.classList.contains(selector)) {
        item.classList.add('active');
      }
    });
  }

  //show tabs by default
  hideTabContent();
  showTabContent('search-main');
  function switchTabs(parent, children, childSelector) {
    parent.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;
      if (target && (target.classList.contains(childSelector.replace(/\./, '')) || target.parentNode.classList.contains(childSelector.replace(/\./, '')))) {
        children.forEach(item => {
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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('section', '.nav', '.tab');
  (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"])('.hamburger', 'hamburger_active', '.nav__list', 'nav__list_active');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('#search-main', '#search-advanced');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map