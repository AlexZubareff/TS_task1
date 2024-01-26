/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./userInfo.ts":
/*!*********************!*\
  !*** ./userInfo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userInfoArray: () => (/* binding */ userInfoArray)
/* harmony export */ });
var userInfoArray = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        birthdate: '1982-02-17T21:00:00.000Z',
        age: 40,
        organization: {
            name: 'Amazon',
            position: 'General Manager'
        }
    },
    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        birthdate: '1988-02-17T21:00:00.000Z',
        age: 34,
        organization: {
            name: 'Amazon',
            position: 'Manager'
        }
    }
];


/***/ }),

/***/ "./users.ts":
/*!******************!*\
  !*** ./users.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usersArray: () => (/* binding */ usersArray)
/* harmony export */ });
var usersArray = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        gender: 'man'
    },
    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        gender: 'woman'
    }
];


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
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./users.ts");
/* harmony import */ var _userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo */ "./userInfo.ts");


function getUsersJobPositions(users) {
    var newArray = [];
    users.map(function (user) {
        var userInfo = _userInfo__WEBPACK_IMPORTED_MODULE_1__.userInfoArray === null || _userInfo__WEBPACK_IMPORTED_MODULE_1__.userInfoArray === void 0 ? void 0 : _userInfo__WEBPACK_IMPORTED_MODULE_1__.userInfoArray.find(function (item) { return item.userid == user.userid; });
        if (userInfo != undefined && userInfo.organization != undefined) {
            var newObj = {
                age: userInfo.age,
                gender: user.gender,
                name: user.name,
                position: userInfo.organization.position,
            };
            newArray.push(newObj);
        }
    });
    return newArray;
}
var usersPositions = getUsersJobPositions(_users__WEBPACK_IMPORTED_MODULE_0__.usersArray);
console.log(usersPositions);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map