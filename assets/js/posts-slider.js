(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _settings = /*#__PURE__*/new WeakMap();

var OW_Base = /*#__PURE__*/function () {
  function OW_Base() {
    _classCallCheck(this, OW_Base);

    _settings.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "elements", void 0);

    this.onInit();
    this.bindEvents();
  }

  _createClass(OW_Base, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {};
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      return {};
    }
  }, {
    key: "onInit",
    value: function onInit() {
      _classPrivateFieldSet(this, _settings, this.getDefaultSettings());

      this.elements = this.getDefaultElements();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "getSettings",
    value: function getSettings() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!!key) {
        return _classPrivateFieldGet(this, _settings)[key];
      }

      return _classPrivateFieldGet(this, _settings);
    }
  }, {
    key: "setSettings",
    value: function setSettings() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!settings) {
        return;
      }

      _classPrivateFieldSet(this, _settings, Object.assign(_classPrivateFieldGet(this, _settings), settings));
    }
  }]);

  return OW_Base;
}();

var _default = OW_Base;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _base = _interopRequireDefault(require("./base/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OW_PostsSlider = /*#__PURE__*/function (_OW_Base) {
  _inherits(OW_PostsSlider, _OW_Base);

  var _super = _createSuper(OW_PostsSlider);

  function OW_PostsSlider() {
    _classCallCheck(this, OW_PostsSlider);

    return _super.apply(this, arguments);
  }

  _createClass(OW_PostsSlider, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          postsLists: ".oceanwp-post-list"
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings("selectors");
      return {
        postsLists: document.querySelectorAll(selectors.postsLists)
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this = this;

      _get(_getPrototypeOf(OW_PostsSlider.prototype), "onInit", this).call(this); // Detect if in Elementor editor mode


      if (typeof elementorFrontend !== 'undefined' && elementorFrontend.isEditMode()) {
        console.log("Elementor editor detected, using delay");
        setTimeout(function () {
          _this.detectAndInitSliders();
        }, 1000); // Delay to ensure DOM is fully loaded in the editor
      } else {
        this.detectAndInitSliders();
      }
    }
  }, {
    key: "detectAndInitSliders",
    value: function detectAndInitSliders() {
      this.elements = this.getDefaultElements(); // Refresh elements

      var hasSlider = this.hasPostsSlider();

      if (hasSlider) {
        this.initSwiper();
      }
    }
  }, {
    key: "initSwiper",
    value: function initSwiper() {
      this.elements.postsLists.forEach(function (postsList) {
        var typeTwo = postsList.classList.contains("two");
        var swiper = new Swiper(postsList, {
          spaceBetween: postsList.dataset.spaceBetween ? Number.parseInt(postsList.dataset.spaceBetween) : 0,
          speed: 500,
          autoplay: {
            delay: Number.parseInt(postsList.dataset.slideshow)
          },
          loop: true,
          loopFillGroupWithBlank: true,
          preloadImages: true,
          breakpoints: {
            480: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            980: {
              slidesPerView: typeTwo ? 2 : 1,
              slidesPerGroup: typeTwo ? 2 : 1
            },
            1200: {
              slidesPerView: typeTwo ? postsList.dataset.number : 1,
              slidesPerGroup: typeTwo ? postsList.dataset.number : 1
            }
          },
          // Prevent confilict with other plugins
          noSwipingClass: "oceanwp-swiper-no-swiping",
          containerModifierClass: "oceanwp-swiper-container-",
          slideClass: "oceanwp-swiper-slide",
          slideBlankClass: "oceanwp-swiper-slide-invisible-blank",
          slideActiveClass: "oceanwp-swiper-slide-active",
          slideDuplicateActiveClass: "oceanwp-swiper-slide-duplicate-active",
          slideVisibleClass: "oceanwp-swiper-slide-visible",
          slideDuplicateClass: "oceanwp-swiper-slide-duplicate",
          slideNextClass: "oceanwp-swiper-slide-next",
          slideDuplicateNextClass: "oceanwp-swiper-slide-duplicate-next",
          slidePrevClass: "oceanwp-swiper-slide-prev",
          slideDuplicatePrevClass: "oceanwp-swiper-slide-duplicate-prev",
          wrapperClass: "oceanwp-swiper-wrapper",
          navigation: {
            nextEl: ".oceanwp-swiper-button-next",
            prevEl: ".oceanwp-swiper-button-prev",
            hideOnClick: false,
            disabledClass: "oceanwp-swiper-button-disabled",
            hiddenClass: "oceanwp-swiper-button-hidden",
            lockClass: "oceanwp-swiper-button-lock"
          },
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            bulletClass: "oceanwp-swiper-pagination-bullet",
            bulletActiveClass: "oceanwp-swiper-pagination-bullet-active",
            modifierClass: "oceanwp-swiper-pagination-",
            // NEW
            currentClass: "oceanwp-swiper-pagination-current",
            totalClass: "oceanwp-swiper-pagination-total",
            hiddenClass: "oceanwp-swiper-pagination-hidden",
            progressbarFillClass: "oceanwp-swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "oceanwp-swiper-pagination-progressbar-opposite",
            clickableClass: "oceanwp-swiper-pagination-clickable",
            // NEW
            lockClass: "oceanwp-swiper-pagination-lock"
          },
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: "oceanwp-swiper-scrollbar-lock",
            dragClass: "oceanwp-swiper-scrollbar-drag"
          },
          lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: "",
            elementClass: "oceanwp-swiper-lazy",
            loadingClass: "oceanwp-swiper-lazy-loading",
            loadedClass: "oceanwp-swiper-lazy-loaded",
            preloaderClass: "oceanwp-swiper-lazy-preloader"
          },
          thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: "oceanwp-swiper-slide-thumb-active",
            thumbsContainerClass: "oceanwp-swiper-container-thumbs"
          },
          zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: "oceanwp-swiper-zoom-container",
            zoomedSlideClass: "oceanwp-swiper-slide-zoomed"
          },
          a11y: {
            enabled: true,
            notificationClass: "oceanwp-swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group"
          }
        });
      });
    }
  }, {
    key: "hasPostsSlider",
    value: function hasPostsSlider() {
      return !document.body.classList.contains("no-carousel");
    }
  }]);

  return OW_PostsSlider;
}(_base["default"]);

"use script";

function initializeOWPostsSlider() {
  new OW_PostsSlider();
}

document.addEventListener('DOMContentLoaded', function () {
  initializeOWPostsSlider();

  if (typeof elementor !== 'undefined') {
    elementor.hooks.addAction('frontend/element_ready/global', function () {
      initializeOWPostsSlider();
    });
  }
});

},{"./base/base":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvcG9zdHMtc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTztBQUlGLHFCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQ1YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0g7Ozs7V0FFRCw4QkFBcUI7QUFDakIsYUFBTyxFQUFQO0FBQ0g7OztXQUVELDhCQUFxQjtBQUNqQixhQUFPLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCw2Q0FBaUIsS0FBSyxrQkFBTCxFQUFqQjs7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxrQkFBTCxFQUFoQjtBQUNIOzs7V0FFRCxzQkFBYSxDQUFFOzs7V0FFZix1QkFBd0I7QUFBQSxVQUFaLEdBQVksdUVBQU4sSUFBTTs7QUFDcEIsVUFBSSxDQUFDLENBQUMsR0FBTixFQUFXO0FBQ1AsZUFBTyx1Q0FBZSxHQUFmLENBQVA7QUFDSDs7QUFFRCxtQ0FBTyxJQUFQO0FBQ0g7OztXQUVELHVCQUEyQjtBQUFBLFVBQWYsUUFBZSx1RUFBSixFQUFJOztBQUN2QixVQUFJLENBQUMsUUFBTCxFQUFlO0FBQ1g7QUFDSDs7QUFFRCw2Q0FBaUIsTUFBTSxDQUFDLE1BQVAsdUJBQWMsSUFBZCxjQUE4QixRQUE5QixDQUFqQjtBQUNIOzs7Ozs7ZUFHVSxPOzs7Ozs7OztBQ3pDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGM7Ozs7Ozs7Ozs7Ozs7V0FDRiw4QkFBcUI7QUFDakIsYUFBTztBQUNILFFBQUEsU0FBUyxFQUFFO0FBQ1AsVUFBQSxVQUFVLEVBQUU7QUFETDtBQURSLE9BQVA7QUFLSDs7O1dBRUQsOEJBQXFCO0FBQ2pCLFVBQU0sU0FBUyxHQUFHLEtBQUss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QkFBaUIsRUFBRSx5QkFMakI7QUFNRixZQUFBLGdCQUFnQixFQUFFLHdCQU5oQjtBQU9GLFlBQUEsdUJBQXVCLEVBQUUsdUJBUHZCO0FBUUYsWUFBQSxpQkFBaUIsRUFBRSw4QkFSakI7QUFTRixZQUFBLGdCQUFnQixFQUFFLElBVGhCO0FBVUYsWUFBQSwrQkFBK0IsRUFBRSxJQVYvQjtBQVdGLFlBQUEsMEJBQTBCLEVBQUUsSUFYMUI7QUFZRixZQUFBLFNBQVMsRUFBRTtBQVpUO0FBN0cyQixTQUF0QixDQUFmO0FBNEhILE9BL0hEO0FBZ0lIOzs7V0FFRCwwQkFBaUI7QUFDYixhQUFPLENBQUMsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLFFBQXhCLENBQWlDLGFBQWpDLENBQVI7QUFDSDs7OztFQTdLd0IsZ0I7O0FBZ0w1QixZQUFEOztBQUNBLFNBQVMsdUJBQVQsR0FBbUM7QUFDL0IsTUFBSSxjQUFKO0FBQ0g7O0FBRUQsUUFBUSxDQUFDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELEVBQUEsdUJBQXVCOztBQUV2QixNQUFJLE9BQU8sU0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUNsQyxJQUFBLFNBQVMsQ0FBQyxLQUFWLENBQWdCLFNBQWhCLENBQTBCLCtCQUExQixFQUEyRCxZQUFZO0FBQ25FLE1BQUEsdUJBQXVCO0FBQzFCLEtBRkQ7QUFHSDtBQUNKLENBUkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBPV19CYXNlIHtcclxuICAgICNzZXR0aW5ncztcclxuICAgIGVsZW1lbnRzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0RWxlbWVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLiNzZXR0aW5ncyA9IHRoaXMuZ2V0RGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuZ2V0RGVmYXVsdEVsZW1lbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHt9XHJcblxyXG4gICAgZ2V0U2V0dGluZ3Moa2V5ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghIWtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3Nba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNzZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZXR0aW5ncyhzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy4jc2V0dGluZ3MsIHNldHRpbmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT1dfQmFzZTtcclxuIiwiaW1wb3J0IE9XX0Jhc2UgZnJvbSBcIi4vYmFzZS9iYXNlXCI7XHJcblxyXG5jbGFzcyBPV19Qb3N0c1NsaWRlciBleHRlbmRzIE9XX0Jhc2Uge1xyXG4gICAgZ2V0RGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgICAgICAgcG9zdHNMaXN0czogXCIub2NlYW53cC1wb3N0LWxpc3RcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRFbGVtZW50cygpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLmdldFNldHRpbmdzKFwic2VsZWN0b3JzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3N0c0xpc3RzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5wb3N0c0xpc3RzKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgICBzdXBlci5vbkluaXQoKTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZWN0IGlmIGluIEVsZW1lbnRvciBlZGl0b3IgbW9kZVxyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudG9yRnJvbnRlbmQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnRvckZyb250ZW5kLmlzRWRpdE1vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsZW1lbnRvciBlZGl0b3IgZGV0ZWN0ZWQsIHVzaW5nIGRlbGF5XCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0QW5kSW5pdFNsaWRlcnMoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7IC8vIERlbGF5IHRvIGVuc3VyZSBET00gaXMgZnVsbHkgbG9hZGVkIGluIHRoZSBlZGl0b3JcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRldGVjdEFuZEluaXRTbGlkZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdEFuZEluaXRTbGlkZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmdldERlZmF1bHRFbGVtZW50cygpOyAvLyBSZWZyZXNoIGVsZW1lbnRzXHJcbiAgICAgICAgY29uc3QgaGFzU2xpZGVyID0gdGhpcy5oYXNQb3N0c1NsaWRlcigpO1xyXG5cclxuICAgICAgICBpZiAoaGFzU2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFN3aXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U3dpcGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucG9zdHNMaXN0cy5mb3JFYWNoKChwb3N0c0xpc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZVR3byA9IHBvc3RzTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0d29cIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHBvc3RzTGlzdCwge1xyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiBwb3N0c0xpc3QuZGF0YXNldC5zcGFjZUJldHdlZW4gPyBOdW1iZXIucGFyc2VJbnQocG9zdHNMaXN0LmRhdGFzZXQuc3BhY2VCZXR3ZWVuKSA6IDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogTnVtYmVyLnBhcnNlSW50KHBvc3RzTGlzdC5kYXRhc2V0LnNsaWRlc2hvdyksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkSW1hZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICA0ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogdHlwZVR3byA/IDIgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogdHlwZVR3byA/IDIgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiB0eXBlVHdvID8gcG9zdHNMaXN0LmRhdGFzZXQubnVtYmVyIDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IHR5cGVUd28gPyBwb3N0c0xpc3QuZGF0YXNldC5udW1iZXIgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgY29uZmlsaWN0IHdpdGggb3RoZXIgcGx1Z2luc1xyXG4gICAgICAgICAgICAgICAgbm9Td2lwaW5nQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItbm8tc3dpcGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyTW9kaWZpZXJDbGFzczogXCJvY2VhbndwLXN3aXBlci1jb250YWluZXItXCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZUJsYW5rQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rXCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZUFjdGl2ZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLWFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogXCJvY2VhbndwLXN3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVZpc2libGVDbGFzczogXCJvY2VhbndwLXN3aXBlci1zbGlkZS12aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZVwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVOZXh0Q2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtbmV4dFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtZHVwbGljYXRlLW5leHRcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlUHJldkNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLXByZXZcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2XCIsXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItd3JhcHBlclwiLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbDogXCIub2NlYW53cC1zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLm9jZWFud3Atc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItYnV0dG9uLWRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItYnV0dG9uLWhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tDbGFzczogXCJvY2VhbndwLXN3aXBlci1idXR0b24tbG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBlbDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRFbGVtZW50OiBcInNwYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJCdWxsZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyRnJhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ3VzdG9tOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnVsbGV0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICdidWxsZXRzJyBvciAncHJvZ3Jlc3NiYXInIG9yICdmcmFjdGlvbicgb3IgJ2N1c3RvbSdcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljQnVsbGV0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldENsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogXCJvY2VhbndwLXN3aXBlci1wYWdpbmF0aW9uLVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5FV1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDbGFzczogXCJvY2VhbndwLXN3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXBhZ2luYXRpb24tdG90YWxcIixcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5DbGFzczogXCJvY2VhbndwLXN3aXBlci1wYWdpbmF0aW9uLWhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzczogXCJvY2VhbndwLXN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyBORVdcclxuICAgICAgICAgICAgICAgICAgICBsb2NrQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItcGFnaW5hdGlvbi1sb2NrXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ1NpemU6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc25hcE9uUmVsZWFzZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NrQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2Nyb2xsYmFyLWxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBkcmFnQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2Nyb2xsYmFyLWRyYWdcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXp5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJblZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQcmV2TmV4dDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFByZXZOZXh0QW1vdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nRWxlbWVudDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3M6IFwib2NlYW53cC1zd2lwZXItbGF6eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdDbGFzczogXCJvY2VhbndwLXN3aXBlci1sYXp5LWxvYWRpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZWRDbGFzczogXCJvY2VhbndwLXN3aXBlci1sYXp5LWxvYWRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRlckNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLWxhenktcHJlbG9hZGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGh1bWJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlQWN0aXZlVGh1bWJzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TY3JvbGxPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUaHVtYkFjdGl2ZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLXRodW1iLWFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRodW1ic0NvbnRhaW5lckNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLWNvbnRhaW5lci10aHVtYnNcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4UmF0aW86IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluUmF0aW86IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXpvb20tY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbWVkU2xpZGVDbGFzczogXCJvY2VhbndwLXN3aXBlci1zbGlkZS16b29tZWRcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhMTF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25DbGFzczogXCJvY2VhbndwLXN3aXBlci1ub3RpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U2xpZGVNZXNzYWdlOiBcIlByZXZpb3VzIHNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlTWVzc2FnZTogXCJOZXh0IHNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6IFwiVGhpcyBpcyB0aGUgZmlyc3Qgc2xpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U2xpZGVNZXNzYWdlOiBcIlRoaXMgaXMgdGhlIGxhc3Qgc2xpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZTogXCJHbyB0byBzbGlkZSB7e2luZGV4fX1cIixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUxhYmVsTWVzc2FnZTogXCJ7e2luZGV4fX0gLyB7e3NsaWRlc0xlbmd0aH19XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlUm9sZTogXCJncm91cFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzUG9zdHNTbGlkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWNhcm91c2VsXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4oXCJ1c2Ugc2NyaXB0XCIpO1xyXG5mdW5jdGlvbiBpbml0aWFsaXplT1dQb3N0c1NsaWRlcigpIHtcclxuICAgIG5ldyBPV19Qb3N0c1NsaWRlcigpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdGlhbGl6ZU9XUG9zdHNTbGlkZXIoKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBlbGVtZW50b3IuaG9va3MuYWRkQWN0aW9uKCdmcm9udGVuZC9lbGVtZW50X3JlYWR5L2dsb2JhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZU9XUG9zdHNTbGlkZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=
