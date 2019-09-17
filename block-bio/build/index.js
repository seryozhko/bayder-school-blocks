/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  content: {
    type: 'string'
  },
  imgUrl: {
    type: 'string',
    default: 'http://placehold.it/160x236'
  },
  linkUrl: {
    type: 'string',
    default: ''
  },
  email: {
    selector: 'p.email a',
    source: 'children'
  },
  phone: {
    selector: 'p.phone a',
    source: 'children'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    TextareaControl = _wp$components.TextareaControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$attributes = props.attributes,
      content = _props$attributes.content,
      imgUrl = _props$attributes.imgUrl,
      linkUrl = _props$attributes.linkUrl,
      email = _props$attributes.email,
      phone = _props$attributes.phone,
      alignment = _props$attributes.alignment,
      setAttributes = props.setAttributes,
      className = props.className;

  var onSelectImage = function onSelectImage(image) {
    return setAttributes({
      imgUrl: image.sizes.profileThumb.url
    });
  };

  var onChangeLinkURL = function onChangeLinkURL(linkUrl) {
    return setAttributes({
      linkUrl: linkUrl
    });
  };

  var onChangeEmail = function onChangeEmail(email) {
    return setAttributes({
      email: [email]
    });
  };

  var onChangePhone = function onChangePhone(phone) {
    return setAttributes({
      phone: phone
    });
  };

  var myComponent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0430"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "\u0424\u043E\u0442\u043E"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: onSelectImage,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        onClick: open
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: imgUrl,
        className: "align-self-start mx-auto mx-sm-0"
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
    label: "\u0421\u0430\u0439\u0442\u044B (\u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E):",
    onChange: onChangeLinkURL,
    value: linkUrl
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Email:",
    onChange: onChangeEmail,
    value: email
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:",
    onChange: onChangePhone,
    value: phone
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    className: "font-weight-bold text-nowrap bg-light border",
    tagName: "div",
    multiline: "p",
    value: content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, phone.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    class: "phone"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "font-weight-bold"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "tel:".concat(phone)
  }, phone)) : '', email.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    class: "email"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "font-weight-bold"
  }, "E-mail: "), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "mailto:".concat(email)
  }, email)) : '', linkUrl ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    class: "sites"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "font-weight-bold"
  }, "\u0421\u0430\u0439\u0442: "), " ", linkUrl.split(',').map(function (url, i, all) {
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "//".concat(url.trim())
    }, url.trim())].concat(i + 1 === all.length ? [''] : [' | ']);
  })) : '')));
  return myComponent;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
var registerBlockType = wp.blocks.registerBlockType;



registerBlockType('bayder-school/bio', {
  title: 'Профиль инструктора',
  icon: 'admin-users',
  category: 'bayder-school',
  supports: {
    html: false // className: false,

  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var RichText = wp.blockEditor.RichText;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$attributes = props.attributes,
      content = _props$attributes.content,
      imgUrl = _props$attributes.imgUrl,
      linkUrl = _props$attributes.linkUrl,
      email = _props$attributes.email,
      phone = _props$attributes.phone,
      alignment = _props$attributes.alignment,
      className = props.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media flex-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imgUrl,
    class: "align-self-start mx-auto mx-sm-0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "media-body flex-wrap ml-2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    className: "font-weight-bold text-nowrap",
    tagName: "div",
    value: content
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, phone.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    class: "phone"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "font-weight-bold"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "tel:".concat(phone)
  }, phone)) : '', email.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    class: "email"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "font-weight-bold"
  }, "E-mail: "), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "mailto:".concat(email)
  }, email)) : '', linkUrl ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    class: "sites"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "font-weight-bold"
  }, "\u0421\u0430\u0439\u0442: "), " ", linkUrl.split(',').map(function (url, i, all) {
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "//".concat(url.trim())
    }, url.trim())].concat(i + 1 === all.length ? [''] : [' | ']);
  })) : '')));
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map