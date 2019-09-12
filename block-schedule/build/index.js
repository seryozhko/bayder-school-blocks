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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./src/schedule/index.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/location/index.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ "./src/table/index.js");
var registerBlockType = wp.blocks.registerBlockType;



[_schedule__WEBPACK_IMPORTED_MODULE_0__, _location__WEBPACK_IMPORTED_MODULE_1__, _table__WEBPACK_IMPORTED_MODULE_2__].forEach(function (block) {
  if (!block) return;
  var name = block.name,
      settings = block.settings;
  registerBlockType(name, settings);
});

/***/ }),

/***/ "./src/location/attributes.js":
/*!************************************!*\
  !*** ./src/location/attributes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  venueId: {
    type: 'number'
  },
  title: {
    type: 'string'
  },
  index: {
    type: 'number'
  },
  tablesCount: {
    type: 'number'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/location/edit.js":
/*!******************************!*\
  !*** ./src/location/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$data2 = wp.data,
    useDispatch = _wp$data2.useDispatch,
    useSelect = _wp$data2.useSelect;
var compose = wp.compose.compose;
var TEMPLATE = [['bayder-school/table']];
var EMPTY_TEMPLATE = [];
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$attributes = _ref.attributes,
      title = _ref$attributes.title,
      tablesCount = _ref$attributes.tablesCount,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var hasChildBlocks = useSelect(function (select) {
    return select('core/block-editor').getBlockOrder(clientId).length > 0;
  });

  var _useDispatch = useDispatch('core/block-editor'),
      insertBlock = _useDispatch.insertBlock;

  if (hasChildBlocks && tablesCount === undefined) {
    setAttributes({
      tablesCount: 1
    });
  }

  ;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, title, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isDefault: true,
    isDestructive: true,
    onClick: function onClick() {
      return insertBlock(wp.blocks.createBlock('bayder-school/table'), 100, clientId, false);
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0422\u0430\u0431\u043B\u0438\u0446\u0443 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    template: hasChildBlocks || tablesCount === undefined ? TEMPLATE : EMPTY_TEMPLATE,
    template_lock: false,
    allowedBlocks: ['bayder-school/table'],
    renderAppender: function renderAppender() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null);
    },
    templateInsertUpdatesSelection: false
  }));
});

/***/ }),

/***/ "./src/location/index.js":
/*!*******************************!*\
  !*** ./src/location/index.js ***!
  \*******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/location/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/location/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/location/save.js");
var BLOCK_NAME = 'bayder-school/location';
var BLOCK_TITLE = 'Зал';
var BLOCK_DESCRIPTION = '';



var name = BLOCK_NAME;
var settings = {
  title: BLOCK_TITLE,
  description: BLOCK_DESCRIPTION,
  icon: 'location',
  category: 'bayder-school',
  parent: ['bayder-school/schedule'],
  supports: {
    html: false,
    className: false,
    inserter: false,
    reusable: false
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/location/save.js":
/*!******************************!*\
  !*** ./src/location/save.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$attributes = _ref.attributes,
      venueId = _ref$attributes.venueId,
      index = _ref$attributes.index;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "tab-pane fade ".concat(index ? '' : 'show active'),
    id: "nav-".concat(venueId),
    role: "tabpanel",
    "aria-labelledby": "".concat(venueId, "-tab")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
});

/***/ }),

/***/ "./src/schedule/attributes.js":
/*!************************************!*\
  !*** ./src/schedule/attributes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  venues: {
    type: 'array',
    default: []
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/schedule/edit.js":
/*!******************************!*\
  !*** ./src/schedule/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;
var Fragment = wp.element.Fragment;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$data2 = wp.data,
    useDispatch = _wp$data2.useDispatch,
    useSelect = _wp$data2.useSelect;
var compose = wp.compose.compose;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var blocks = [];

var block = function block(_ref) {
  var addVenue = _ref.addVenue,
      removeVenue = _ref.removeVenue,
      updateVenues = _ref.updateVenues,
      setAttributes = _ref.setAttributes,
      blockList = _ref.blockList,
      locations = _ref.locations;

  if (JSON.stringify(blocks) !== JSON.stringify(blockList)) {
    blocks = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(blockList);
    setAttributes({
      venues: blocks
    });
    updateVenues();
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, locations && locations.map(function (location) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: location.name
    }, location.venues && location.venues.map(function (venue) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CheckboxControl, {
        label: venue.title.rendered,
        checked: blockList.find(function (item) {
          return item.id === venue.id;
        }) !== undefined,
        onChange: function onChange(isChecked) {
          return isChecked ? addVenue({
            venueId: venue.id,
            title: venue.title.rendered
          }) : removeVenue(venue);
        }
      }));
    }));
  }))), "\u0417\u0430\u043B\u044B \u0438 \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    class: "tab-content",
    id: "nav-tabContent"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, {
    allowedBlocks: ['bayder-school/location'],
    renderAppender: function renderAppender() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null);
    }
  })));
};

var dispatchFunc = function dispatchFunc(dispatch, ownProps, registry) {
  var clientId = ownProps.clientId;

  var _registry$select = registry.select('core/block-editor'),
      getBlocks = _registry$select.getBlocks;

  var innerBlocks = getBlocks(clientId);
  return {
    updateVenues: function updateVenues() {
      var _dispatch = dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      innerBlocks.map(function (block, index) {
        return updateBlockAttributes(block.clientId, {
          index: index
        });
      });
    },
    removeVenue: function removeVenue(venue) {
      var _dispatch2 = dispatch('core/block-editor'),
          removeBlock = _dispatch2.removeBlock;

      var blockId = innerBlocks.filter(function (item) {
        return item.attributes.venueId === venue.id;
      })[0].clientId;
      removeBlock(blockId, false);
    },
    addVenue: function addVenue(opts) {
      var _dispatch3 = dispatch('core/block-editor'),
          insertBlock = _dispatch3.insertBlock;

      var blockTable = wp.blocks.createBlock('bayder-school/location', opts);
      insertBlock(blockTable, 100, clientId, false);
    }
  };
};

var selectFunc = function selectFunc(select, ownProps) {
  var clientId = ownProps.clientId;
  var innerBlocks = select('core/block-editor').getBlocks(clientId);
  var blockList = innerBlocks.map(function (block) {
    return {
      id: block.attributes.venueId,
      title: block.attributes.title,
      tables: block.innerBlocks.length
    };
  });
  var locations = select('core').getEntityRecords('taxonomy', 'locations', {
    hide_empty: true,
    parent: 0
  });
  var venues = locations ? select('core').getEntityRecords('postType', 'venues', {
    locations: locations.map(function (location) {
      return location.id;
    })
  }) : [];
  return {
    blockList: blockList,
    locations: locations && venues ? locations.map(function (location) {
      return _objectSpread({}, location, {
        venues: venues.filter(function (venue) {
          return venue.locations.includes(location.id);
        })
      });
    }) : []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(selectFunc), withDispatch(dispatchFunc))(block));

/***/ }),

/***/ "./src/schedule/index.js":
/*!*******************************!*\
  !*** ./src/schedule/index.js ***!
  \*******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/schedule/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/schedule/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/schedule/save.js");
var BLOCK_NAME = 'bayder-school/schedule';
var BLOCK_TITLE = 'Залы и Расписание';
var BLOCK_DESCRIPTION = 'Выберите залы, чтобы добавить расписание';



var name = BLOCK_NAME;
var settings = {
  title: BLOCK_TITLE,
  description: BLOCK_DESCRIPTION,
  icon: 'calendar-alt',
  category: 'bayder-school',
  supports: {
    html: false,
    className: false,
    multiple: false,
    reusable: false
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/schedule/save.js":
/*!******************************!*\
  !*** ./src/schedule/save.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var venues = _ref.attributes.venues;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("nav", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "nav nav-tabs",
    id: "nav-tab",
    role: "tablist"
  }, venues.map(function (venue, index) {
    return venue.tables ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      class: "nav-item nav-link ".concat(index ? '' : 'active'),
      "data-toggle": "tab",
      id: "".concat(venue.id, "-tab"),
      href: "#nav-".concat(venue.id),
      role: "tab",
      "aria-controls": "nav-".concat(venue.id),
      "aria-selected": "true"
    }, venue.title) : null;
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "tab-content",
    id: "nav-tabContent"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
});

/***/ }),

/***/ "./src/table/edit.js":
/*!***************************!*\
  !*** ./src/table/edit.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var TEMPLATE = [['core/heading', {
  placeholder: 'Recipe Title',
  className: 'text-light bg-primary text-uppercase p-2',
  level: 5,
  content: 'Расписание занятий',
  align: 'center'
}], ['core/table', {
  "hasFixedLayout": true,
  "head": [],
  "body": [{
    "cells": [{
      "content": "Понедельник",
      "tag": "td"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }]
  }, {
    "cells": [{
      "content": "Вторник",
      "tag": "td"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }]
  }, {
    "cells": [{
      "content": "Среда",
      "tag": "td"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }]
  }, {
    "cells": [{
      "content": "Четверг",
      "tag": "td"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }]
  }, {
    "cells": [{
      "content": "Пятница",
      "tag": "td"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }]
  }, {
    "cells": [{
      "content": "Суббота",
      "tag": "td"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }]
  }, {
    "cells": [{
      "content": "Воскресенье",
      "tag": "td"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }, {
      "content": "",
      "tag": "td",
      "align": "center"
    }]
  }],
  "foot": []
}]];
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.attributes.title,
      clientId = _ref.clientId,
      isSelected = _ref.isSelected;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    template: TEMPLATE,
    templateLock: "all",
    templateInsertUpdatesSelection: false
  }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isPrimary: true,
    isDestructive: true,
    onClick: function onClick() {
      return wp.data.dispatch('core/block-editor').removeBlock(clientId, false);
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0442\u0430\u0431\u043B\u0438\u0446\u0443"));
});

/***/ }),

/***/ "./src/table/index.js":
/*!****************************!*\
  !*** ./src/table/index.js ***!
  \****************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/table/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/table/save.js");
var BLOCK_NAME = 'bayder-school/table';
var BLOCK_TITLE = 'Таблица расписания';
var BLOCK_DESCRIPTION = '';


var name = BLOCK_NAME;
var settings = {
  title: BLOCK_TITLE,
  description: BLOCK_DESCRIPTION,
  icon: 'editor-table',
  category: 'bayder-school',
  parent: ['bayder-school/location'],
  supports: {
    html: false,
    className: false,
    inserter: false,
    reusable: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/table/save.js":
/*!***************************!*\
  !*** ./src/table/save.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
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