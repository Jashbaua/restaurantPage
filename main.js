/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout(){\n    const img=document.createElement('img')\n    const heading=document.createElement('h1')\n    const para=document.createElement('p')\n    const div=document.createElement('div')\n    const par=document.querySelector('#content')\n\n    img.src=\"https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXR8ZW58MHx8MHx8fDI%3D\"\n    heading.textContent='Good About'\n    para.textContent='Very good about'\n\n    div.appendChild(img)\n    div.appendChild(heading)\n    div.appendChild(para)\n\n    par.appendChild(div)\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXQuanM/NTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVBYm91dCgpe1xuICAgIGNvbnN0IGltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IGhlYWRpbmc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNvbnN0IHBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcGFyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGltZy5zcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1NTg0OTMxODc0My1iMjIzMzA1MmZjZmY/dz02MDAmYXV0bz1mb3JtYXQmZml0PWNyb3AmcT02MCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhZV0p2ZFhSOFpXNThNSHg4TUh4OGZESSUzRFwiXG4gICAgaGVhZGluZy50ZXh0Q29udGVudD0nR29vZCBBYm91dCdcbiAgICBwYXJhLnRleHRDb250ZW50PSdWZXJ5IGdvb2QgYWJvdXQnXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhKVxuXG4gICAgcGFyLmFwcGVuZENoaWxkKGRpdilcblxufVxuZXhwb3J0IHtjcmVhdGVBYm91dH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst homeBtn=document.querySelector('.home')\nconst menuBtn=document.querySelector('.menu')\nconst aboutBtn=document.querySelector('.about')\nconst div=document.querySelector('#content')\n\n\nhomeBtn.addEventListener('click',()=>{\n    div.textContent=''\n    ;(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createHome)()\n})\nmenuBtn.addEventListener('click',()=>{\n    div.textContent=''\n    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)()\n})\naboutBtn.addEventListener('click',()=>{\n    div.textContent=''\n    ;(0,_about__WEBPACK_IMPORTED_MODULE_1__.createAbout)()\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QztBQUNIO0FBQ0Y7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSx1REFBVTtBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxrREFBVTtBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IGhvbWVCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxuY29uc3QgbWVudUJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG5jb25zdCBhYm91dEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKVxuY29uc3QgZGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGRpdi50ZXh0Q29udGVudD0nJ1xuICAgIGNyZWF0ZUhvbWUoKVxufSlcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgZGl2LnRleHRDb250ZW50PScnXG4gICAgY3JlYXRlTWVudSgpXG59KVxuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgZGl2LnRleHRDb250ZW50PScnXG4gICAgY3JlYXRlQWJvdXQoKVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu(){\n    const img=document.createElement('img')\n    const heading=document.createElement('h1')\n    const para=document.createElement('p')\n    const div=document.createElement('div')\n    const par=document.querySelector('#content')\n\n    img.src=\"https://images.unsplash.com/photo-1629341948402-42a2d20577a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudXxlbnwwfHwwfHx8Mg%3D%3D\"\n    heading.textContent='Good Menu'\n    para.textContent='Very good menu'\n\n    div.appendChild(img)\n    div.appendChild(heading)\n    div.appendChild(para)\n\n    par.appendChild(div)\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IGltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IGhlYWRpbmc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNvbnN0IHBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcGFyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGltZy5zcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyOTM0MTk0ODQwMi00MmEyZDIwNTc3YTY/dz02MDAmYXV0bz1mb3JtYXQmZml0PWNyb3AmcT02MCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE9YeDhiV1Z1ZFh4bGJud3dmSHd3Zkh4OE1nJTNEJTNEXCJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50PSdHb29kIE1lbnUnXG4gICAgcGFyYS50ZXh0Q29udGVudD0nVmVyeSBnb29kIG1lbnUnXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhKVxuXG4gICAgcGFyLmFwcGVuZENoaWxkKGRpdilcblxufVxuZXhwb3J0IHtjcmVhdGVNZW51fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome(){\n    const img=document.createElement('img')\n    const heading=document.createElement('h1')\n    const para=document.createElement('p')\n    const div=document.createElement('div')\n    const par=document.querySelector('#content')\n\n    img.src=\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8Mg%3D%3D\"\n    heading.textContent='Good Restaurant'\n    para.textContent='Very good Restaurant'\n\n    div.appendChild(img)\n    div.appendChild(heading)\n    div.appendChild(para)\n\n    par.appendChild(div)\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ21CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzP2JlY2IiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IGhlYWRpbmc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNvbnN0IHBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcGFyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGltZy5zcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNzI0ODEzNTQ2Ny00YzdlZGNhZDM0YzQ/dz02MDAmYXV0bz1mb3JtYXQmZml0PWNyb3AmcT02MCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhjbVZ6ZEdGMWNtRnVkSHhsYm53d2ZId3dmSHg4TWclM0QlM0RcIlxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQ9J0dvb2QgUmVzdGF1cmFudCdcbiAgICBwYXJhLnRleHRDb250ZW50PSdWZXJ5IGdvb2QgUmVzdGF1cmFudCdcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpXG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmEpXG5cbiAgICBwYXIuYXBwZW5kQ2hpbGQoZGl2KVxufVxuZXhwb3J0IHtjcmVhdGVIb21lfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/page-load.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;