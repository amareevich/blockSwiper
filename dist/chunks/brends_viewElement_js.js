"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["brends_viewElement_js"],{

/***/ "./brends/viewElement.js":
/*!*******************************!*\
  !*** ./brends/viewElement.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ viewElement)\n/* harmony export */ });\nconst changeable__element = document.querySelector('.swiper-wrapper');\r\nconst span = document.querySelector('.unwrap-btn__text');\r\nconst img = document.querySelector('.unwrap-btn__arrow-img');\r\n\r\nconst changing__elements__btn = {\r\n    'open': \"Показать все\",\r\n    'close': \"Скрыть\",\r\n};\r\n\r\nfunction default__style() {\r\n    changeable__element.classList.remove('brends__ul-names--action--open');\r\n    changeable__element.removeAttribute('style');\r\n    span.classList.add('unwrap-btn__text--action--open');\r\n    span.textContent = changing__elements__btn['open'];\r\n    span.classList.remove('unwrap-btn__text--action--close');\r\n    img.classList.add('unwrap-btn__arrow-img--action--open');\r\n}\r\n\r\nfunction viewElement(flag) {\r\n    const btn = document.querySelector('.unwrap-btn--action--changes-width');\r\n    if (flag) {\r\n        btn.addEventListener('click', changingElements);\r\n        window.addEventListener('resize', default__style);\r\n    } else {\r\n        btn.removeEventListener('click', changingElements);\r\n        window.removeEventListener('resize', default__style);\r\n    }\r\n}\r\n\r\nfunction changingElements() {\r\n    changeable__element.classList.toggle('brends__ul-names--action--open');\r\n    changeable__element.classList.contains('brends__ul-names--action--open')\r\n        ? changeable__element.style.height = changeable__element.scrollHeight + \"px\"\r\n        : changeable__element.removeAttribute('style');\r\n\r\n    img.classList.toggle('unwrap-btn__arrow-img--action--open');\r\n    span.classList.toggle('unwrap-btn__text--action--open');\r\n    span.classList.toggle('unwrap-btn__text--action--close');\r\n\r\n    span.classList.contains('unwrap-btn__text--action--open')\r\n        ? span.textContent = changing__elements__btn['open']\r\n        : span.textContent = changing__elements__btn['close'];\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./brends/viewElement.js?");

/***/ })

}]);