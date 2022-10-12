/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CatalogMenu/CatalogMenu.js":
/*!***************************************************!*\
  !*** ./src/components/CatalogMenu/CatalogMenu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catalogMenuPage": () => (/* binding */ catalogMenuPage)
/* harmony export */ });
/* harmony import */ var _constants_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/catalog */ "./src/constants/catalog.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/root */ "./src/constants/root.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var CatalogMenu = /*#__PURE__*/function () {
  function CatalogMenu() {
    _classCallCheck(this, CatalogMenu);

    this.classNameActive = " catalog-menu__item-link--active";
  }

  _createClass(CatalogMenu, [{
    key: "render",
    value: function render() {
      var _this = this;

      var htmlCatalog = "";
      _constants_catalog__WEBPACK_IMPORTED_MODULE_0__.CATALOG_CATEGORIES.forEach(function (_ref) {
        var id = _ref.id,
            parentId = _ref.parentId,
            name = _ref.name;
        var activeClass = '';
        var linkPath = "";

        if (parentId) {
          linkPath = "/".concat(parentId, "/").concat(id, ".html");
        } else {
          linkPath = "/".concat(id, ".html");
        }

        if (linkPath == window.location.pathname) {
          activeClass = _this.classNameActive;
        }

        htmlCatalog += "\n                <li class=\"catalog-menu__item\">\n                    <a class=\"catalog-menu__item-link".concat(activeClass, "\" href=\"").concat(linkPath, "\">").concat(name, "</a>\n                </li>\n            ");
      });
      var html = "\n            <div class=\"sidebar__header catalog-menu__header\"> \n                <p class=\"sidebar__header-text catalog-menu__header-text\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433</p>\n            </div>\n            <div class=\"sidebar__content catalog-menu__content\">\n                <ul class=\"catalog-menu__items\">\n                    ".concat(htmlCatalog, "\n                </ul>\n            </div>\n        ");
      _constants_root__WEBPACK_IMPORTED_MODULE_1__.ROOT_CATALOG_MENU.innerHTML = html;
    }
  }]);

  return CatalogMenu;
}();

var catalogMenuPage = new CatalogMenu();

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerPage": () => (/* binding */ headerPage)
/* harmony export */ });
/* harmony import */ var _constants_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/catalog */ "./src/constants/catalog.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/root */ "./src/constants/root.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    this.productsCountValue = _constants_catalog__WEBPACK_IMPORTED_MODULE_0__.CATALOG_ITEMS.length;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var productsCount = this.productsCountValue;
      var html = "\n            <ul class=\"breadcrumbs-list\">\n                <li class=\"breadcrumbs-list__item\">\n                    <a href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n                </li>\n                <li class=\"breadcrumbs-list__item\">\n                    <a href=\"/\">\u041A\u0430\u0442\u0430\u043B\u043E\u0433</a>\n                </li>\n                <li class=\"breadcrumbs-list__item breadcrumbs-list__item--current\">\n                    <a>\u0414\u043B\u044F \u043B\u0435\u0433\u043A\u043E\u0432\u044B\u0445 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439</a>\n                </li>\n            </ul>\n            <h1 class=\"page-title\">\u041C\u0430\u0441\u043B\u0430 Mobil \u0434\u043B\u044F \u043B\u0435\u0433\u043A\u043E\u0432\u044B\u0445 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439</h1>\n            <div class=\"header__products-count\">\n                \u041D\u0430\u0439\u0434\u0435\u043D\u043E ".concat(productsCount, " \u0442\u043E\u0432\u0430\u0440\u043E\u0432\n            </div>\n        ");
      _constants_root__WEBPACK_IMPORTED_MODULE_1__.ROOT_HEADER.innerHTML = html;
    }
  }]);

  return Header;
}();

var headerPage = new Header();

/***/ }),

/***/ "./src/components/Products/Products.js":
/*!*********************************************!*\
  !*** ./src/components/Products/Products.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Products": () => (/* binding */ Products),
/* harmony export */   "productsPage": () => (/* binding */ productsPage)
/* harmony export */ });
/* harmony import */ var _constants_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/catalog */ "./src/constants/catalog.js");
/* harmony import */ var _utils_localStorageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localStorageUtil */ "./src/utils/localStorageUtil.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/root */ "./src/constants/root.js");
/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShoppingCart/ShoppingCart */ "./src/components/ShoppingCart/ShoppingCart.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Products = /*#__PURE__*/function () {
  function Products() {
    _classCallCheck(this, Products);

    this.classNameActive = "product__cart-btn--active";
    this.lableAdd = "Добавить в корзину";
    this.lableRemove = "Удалить из корзины";
  }

  _createClass(Products, [{
    key: "handleSetLocationStorage",
    value: function handleSetLocationStorage(element, id) {
      var _localStorageUtil$put = _utils_localStorageUtil__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.putProducts(id),
          isAddedProduct = _localStorageUtil$put.isAddedProduct,
          products = _localStorageUtil$put.products;

      if (isAddedProduct) {
        element.classList.add(this.classNameActive);
        element.innerHTML = this.lableRemove;
      } else {
        element.classList.remove(this.classNameActive);
        element.innerHTML = this.lableAdd;
      }

      _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_3__.shoppingCartPage.render(products.length);

      if (element.classList.contains("shopping-cart__item-close")) {
        productsPage.render();
      }
    }
  }, {
    key: "handleClickOnCartBtn",
    value: function handleClickOnCartBtn() {
      var productCartBtn = document.querySelectorAll("#product-cart-btn");
      productCartBtn.forEach(function (element) {
        element.addEventListener("click", function (e) {
          var productId = e.target.getAttribute("data-product-id");
          productsPage.handleSetLocationStorage(e.target, productId);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var productsStore = _utils_localStorageUtil__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.getProducts();
      var htmlCatalog = '';
      _constants_catalog__WEBPACK_IMPORTED_MODULE_0__.CATALOG_ITEMS.forEach(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            img = _ref.img;
        var activeClass = "";
        var activeText = "";

        if (productsStore.indexOf(id) === -1) {
          activeText = _this.lableAdd;
        } else {
          activeClass = " " + _this.classNameActive;
          activeText = _this.lableRemove;
        }

        htmlCatalog += "\n                <li class=\"product\">\n                    <div class=\"product__wrapper\">\n                        <img class=\"product__img\" src=\"".concat(img, "\">\n                        <span class=\"product__name\">").concat(name, "</span>\n                        <button id=\"product-cart-btn\" data-product-id=\"").concat(id, "\" class=\"product__cart-btn").concat(activeClass, "\">\n                            ").concat(activeText, "\n                        </button>\n                    </div>\n                </li>\n            ");
      });
      var html = "\n            <ul class=\"products__wrapper\">\n                ".concat(htmlCatalog, ";\n            </ul>\n        ");
      _constants_root__WEBPACK_IMPORTED_MODULE_2__.ROOT_PRODUCTS.innerHTML = html;
    }
  }]);

  return Products;
}();
var productsPage = new Products();

/***/ }),

/***/ "./src/components/ShoppingCart/ShoppingCart.js":
/*!*****************************************************!*\
  !*** ./src/components/ShoppingCart/ShoppingCart.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shoppingCartPage": () => (/* binding */ shoppingCartPage)
/* harmony export */ });
/* harmony import */ var _constants_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/catalog */ "./src/constants/catalog.js");
/* harmony import */ var _utils_localStorageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localStorageUtil */ "./src/utils/localStorageUtil.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/root */ "./src/constants/root.js");
/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Products/Products */ "./src/components/Products/Products.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var ShoppingCart = /*#__PURE__*/function () {
  function ShoppingCart() {
    _classCallCheck(this, ShoppingCart);
  }

  _createClass(ShoppingCart, [{
    key: "handleClear",
    value: function handleClear() {
      _constants_root__WEBPACK_IMPORTED_MODULE_2__.ROOT_SHOPPING.innerHTML = '';
    }
  }, {
    key: "handleClickOnCartDel",
    value: function handleClickOnCartDel() {
      var productCartDel = document.querySelectorAll("#shopping_cart_item_close");
      productCartDel.forEach(function (element) {
        element.addEventListener("click", function (e) {
          var elemClicked = e.target;
          var elemId = elemClicked.getAttribute("data-product-id");
          _Products_Products__WEBPACK_IMPORTED_MODULE_3__.productsPage.handleSetLocationStorage(elemClicked, elemId);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var productsStore = _utils_localStorageUtil__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.getProducts();
      var htmlCatalog = "";
      _constants_catalog__WEBPACK_IMPORTED_MODULE_0__.CATALOG_ITEMS.forEach(function (_ref) {
        var id = _ref.id,
            name = _ref.name;

        if (productsStore.indexOf(id) !== -1) {
          htmlCatalog += "\n                    <li class=\"shopping-cart__item\">\n                       <span>".concat(name, "</span>\n                       <img id=\"shopping_cart_item_close\" class=\"shopping-cart__item-close\" data-product-id=\"").concat(id, "\" src=\"./dist/images/icons/close-icon.png\">\n                    </li>\n                ");
        }
      });
      var html = "\n            <div class=\"sidebar__header shopping-cart__header\"> \n                <p class=\"sidebar__header-text shopping-cart__header-text\">\u041A\u043E\u0440\u0437\u0438\u043D\u0430 (".concat(productsStore.length, ")</p>\n            </div>\n            <div class=\"sidebar__content shopping-cart__content\">\n                <ul class=\"shopping-cart__items\">\n                    ").concat(htmlCatalog, "\n                </ul>\n            </div>\n        ");
      _constants_root__WEBPACK_IMPORTED_MODULE_2__.ROOT_SHOPPING.innerHTML = html;
    }
  }]);

  return ShoppingCart;
}();

var shoppingCartPage = new ShoppingCart();

/***/ }),

/***/ "./src/constants/catalog.js":
/*!**********************************!*\
  !*** ./src/constants/catalog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATALOG_CATEGORIES": () => (/* binding */ CATALOG_CATEGORIES),
/* harmony export */   "CATALOG_ITEMS": () => (/* binding */ CATALOG_ITEMS)
/* harmony export */ });
var CATALOG_ITEMS = [{
  id: "el1",
  name: "Масло моторное Mobil 1 ESP 5W-30",
  img: "https://i.ibb.co/fqR0wq2/mobil-1-esp-5w-30.png"
}, {
  id: "el2",
  name: "Масло моторное Mobil 1 x1 5W-30",
  img: "https://i.ibb.co/s6kRDQn/mobil-1x1-5w-30.png"
}, {
  id: "el3",
  name: "Масло моторное Mobil 1 FS 0W-40",
  img: "https://i.ibb.co/DW1HQTx/mobil-1-fs-0w-40.png"
}, {
  id: "el4",
  name: "Масло моторное Mobil 1 ESP 5W-30",
  img: "https://i.ibb.co/fqR0wq2/mobil-1-esp-5w-30.png"
}, {
  id: "el5",
  name: "Масло моторное Mobil 1 x1 5W-30",
  img: "https://i.ibb.co/s6kRDQn/mobil-1x1-5w-30.png"
}, {
  id: "el6",
  name: "Масло моторное Mobil 1 FS 0W-40",
  img: "https://i.ibb.co/DW1HQTx/mobil-1-fs-0w-40.png"
}, {
  id: "el7",
  name: "Масло моторное Mobil 1 ESP 5W-30",
  img: "https://i.ibb.co/fqR0wq2/mobil-1-esp-5w-30.png",
  price: 13600
}, {
  id: "el8",
  name: "Масло моторное Mobil 1 x1 5W-30",
  img: "https://i.ibb.co/s6kRDQn/mobil-1x1-5w-30.png"
}, {
  id: "el9",
  name: "Масло моторное Mobil 1 FS 0W-40",
  img: "https://i.ibb.co/DW1HQTx/mobil-1-fs-0w-40.png"
}, {
  id: "el10",
  name: "Масло моторное Mobil 1 ESP 5W-30",
  img: "https://i.ibb.co/fqR0wq2/mobil-1-esp-5w-30.png"
}, {
  id: "el11",
  name: "Масло моторное Mobil 1 x1 5W-30",
  img: "https://i.ibb.co/s6kRDQn/mobil-1x1-5w-30.png"
}, {
  id: "el12",
  name: "Масло моторное Mobil 1 FS 0W-40",
  img: "https://i.ibb.co/DW1HQTx/mobil-1-fs-0w-40.png"
}, {
  id: "el13",
  name: "Масло моторное Mobil 1 ESP 5W-30",
  img: "https://i.ibb.co/fqR0wq2/mobil-1-esp-5w-30.png"
}, {
  id: "el14",
  name: "Масло моторное Mobil 1 x1 5W-30",
  img: "https://i.ibb.co/s6kRDQn/mobil-1x1-5w-30.png"
}, {
  id: "el15",
  name: "Масло моторное Mobil 1 FS 0W-40",
  img: "https://i.ibb.co/DW1HQTx/mobil-1-fs-0w-40.png"
}];
var CATALOG_CATEGORIES = [{
  id: "index",
  name: "Для легковых авто"
}, {
  id: "gruz-auto",
  parentId: "catalog",
  name: "Для грузовых авто"
}, {
  id: "teh-zhidkosty",
  parentId: "catalog",
  name: "Технические жидкости"
}];

/***/ }),

/***/ "./src/constants/root.js":
/*!*******************************!*\
  !*** ./src/constants/root.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROOT_CATALOG_MENU": () => (/* binding */ ROOT_CATALOG_MENU),
/* harmony export */   "ROOT_HEADER": () => (/* binding */ ROOT_HEADER),
/* harmony export */   "ROOT_PRODUCTS": () => (/* binding */ ROOT_PRODUCTS),
/* harmony export */   "ROOT_SHOPPING": () => (/* binding */ ROOT_SHOPPING)
/* harmony export */ });
var ROOT_PRODUCTS = document.getElementById("products");
var ROOT_CATALOG_MENU = document.getElementById("catalog_menu");
var ROOT_HEADER = document.getElementById("header");
var ROOT_SHOPPING = document.getElementById("shopping_cart");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/catalog */ "./src/constants/catalog.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/root */ "./src/constants/root.js");
/* harmony import */ var _utils_localStorageUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorageUtil */ "./src/utils/localStorageUtil.js");
/* harmony import */ var _components_Products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products/Products */ "./src/components/Products/Products.js");
/* harmony import */ var _components_CatalogMenu_CatalogMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CatalogMenu/CatalogMenu */ "./src/components/CatalogMenu/CatalogMenu.js");
/* harmony import */ var _components_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ShoppingCart/ShoppingCart */ "./src/components/ShoppingCart/ShoppingCart.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");












function componentsRender() {
  _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__.headerPage.render();
  _components_Products_Products__WEBPACK_IMPORTED_MODULE_3__.productsPage.render();
  _components_CatalogMenu_CatalogMenu__WEBPACK_IMPORTED_MODULE_4__.catalogMenuPage.render();
  _components_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__.shoppingCartPage.render();
}

componentsRender();

function componenstHandler() {
  _components_Products_Products__WEBPACK_IMPORTED_MODULE_3__.productsPage.handleClickOnCartBtn();
  _components_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__.shoppingCartPage.handleClickOnCartDel();
}

componenstHandler();

/***/ }),

/***/ "./src/utils/localStorageUtil.js":
/*!***************************************!*\
  !*** ./src/utils/localStorageUtil.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageUtil": () => (/* binding */ localStorageUtil)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var LocalStorageUtil = /*#__PURE__*/function () {
  function LocalStorageUtil() {
    _classCallCheck(this, LocalStorageUtil);

    this.keyName = 'products';
  }

  _createClass(LocalStorageUtil, [{
    key: "getProducts",
    value: function getProducts() {
      var productsLocalStorage = localStorage.getItem(this.keyName);

      if (productsLocalStorage !== null) {
        return JSON.parse(productsLocalStorage);
      }

      return [];
    }
  }, {
    key: "putProducts",
    value: function putProducts(id) {
      var products = this.getProducts();
      var isAddedProduct = false;
      var index = products.indexOf(id);

      if (index === -1) {
        products.push(id);
        isAddedProduct = true;
      } else {
        products.splice(index, 1);
      }

      localStorage.setItem(this.keyName, JSON.stringify(products));
      return {
        isAddedProduct: isAddedProduct,
        products: products
      };
    }
  }]);

  return LocalStorageUtil;
}();

var localStorageUtil = new LocalStorageUtil();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcatalog_js_es6"] = self["webpackChunkcatalog_js_es6"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;