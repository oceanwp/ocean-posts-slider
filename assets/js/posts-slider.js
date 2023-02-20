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
      _get(_getPrototypeOf(OW_PostsSlider.prototype), "onInit", this).call(this);

      if (this.hasPostsSlider()) {
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
          //containerModifierClass: "oceanwp-swiper-container-",
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
new OW_PostsSlider();

},{"./base/base":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvcG9zdHMtc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTztBQUlGLHFCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQ1YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0g7Ozs7V0FFRCw4QkFBcUI7QUFDakIsYUFBTyxFQUFQO0FBQ0g7OztXQUVELDhCQUFxQjtBQUNqQixhQUFPLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCw2Q0FBaUIsS0FBSyxrQkFBTCxFQUFqQjs7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxrQkFBTCxFQUFoQjtBQUNIOzs7V0FFRCxzQkFBYSxDQUFFOzs7V0FFZix1QkFBd0I7QUFBQSxVQUFaLEdBQVksdUVBQU4sSUFBTTs7QUFDcEIsVUFBSSxDQUFDLENBQUMsR0FBTixFQUFXO0FBQ1AsZUFBTyx1Q0FBZSxHQUFmLENBQVA7QUFDSDs7QUFFRCxtQ0FBTyxJQUFQO0FBQ0g7OztXQUVELHVCQUEyQjtBQUFBLFVBQWYsUUFBZSx1RUFBSixFQUFJOztBQUN2QixVQUFJLENBQUMsUUFBTCxFQUFlO0FBQ1g7QUFDSDs7QUFFRCw2Q0FBaUIsTUFBTSxDQUFDLE1BQVAsdUJBQWMsSUFBZCxjQUE4QixRQUE5QixDQUFqQjtBQUNIOzs7Ozs7ZUFHVSxPOzs7Ozs7OztBQ3pDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGM7Ozs7Ozs7Ozs7Ozs7V0FDRiw4QkFBcUI7QUFDakIsYUFBTztBQUNILFFBQUEsU0FBUyxFQUFFO0FBQ1AsVUFBQSxVQUFVLEVBQUU7QUFETDtBQURSLE9BQVA7QUFLSDs7O1dBRUQsOEJBQXFCO0FBQ2pCLFVBQU0sU0FBUyxHQUFHLEtBQUss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QUksY0FBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIE9XX0Jhc2Uge1xuICAgICNzZXR0aW5ncztcbiAgICBlbGVtZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0RWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzID0gdGhpcy5nZXREZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuZ2V0RGVmYXVsdEVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHt9XG5cbiAgICBnZXRTZXR0aW5ncyhrZXkgPSBudWxsKSB7XG4gICAgICAgIGlmICghIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NldHRpbmdzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2V0U2V0dGluZ3Moc2V0dGluZ3MgPSB7fSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy4jc2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XX0Jhc2U7XG4iLCJpbXBvcnQgT1dfQmFzZSBmcm9tIFwiLi9iYXNlL2Jhc2VcIjtcblxuY2xhc3MgT1dfUG9zdHNTbGlkZXIgZXh0ZW5kcyBPV19CYXNlIHtcbiAgICBnZXREZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgICAgICAgICBwb3N0c0xpc3RzOiBcIi5vY2VhbndwLXBvc3QtbGlzdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0RWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJzZWxlY3RvcnNcIik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc3RzTGlzdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnBvc3RzTGlzdHMpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzUG9zdHNTbGlkZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0U3dpcGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U3dpcGVyKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnBvc3RzTGlzdHMuZm9yRWFjaCgocG9zdHNMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlVHdvID0gcG9zdHNMaXN0LmNsYXNzTGlzdC5jb250YWlucyhcInR3b1wiKTtcblxuICAgICAgICAgICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihwb3N0c0xpc3QsIHtcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IHBvc3RzTGlzdC5kYXRhc2V0LnNwYWNlQmV0d2VlbiA/IE51bWJlci5wYXJzZUludChwb3N0c0xpc3QuZGF0YXNldC5zcGFjZUJldHdlZW4pIDogMCxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiBOdW1iZXIucGFyc2VJbnQocG9zdHNMaXN0LmRhdGFzZXQuc2xpZGVzaG93KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVsb2FkSW1hZ2VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIDQ4MDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IHR5cGVUd28gPyAyIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiB0eXBlVHdvID8gMiA6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IHR5cGVUd28gPyBwb3N0c0xpc3QuZGF0YXNldC5udW1iZXIgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IHR5cGVUd28gPyBwb3N0c0xpc3QuZGF0YXNldC5udW1iZXIgOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGNvbmZpbGljdCB3aXRoIG90aGVyIHBsdWdpbnNcbiAgICAgICAgICAgICAgICBub1N3aXBpbmdDbGFzczogXCJvY2VhbndwLXN3aXBlci1uby1zd2lwaW5nXCIsXG4gICAgICAgICAgICAgICAgLy9jb250YWluZXJNb2RpZmllckNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLWNvbnRhaW5lci1cIixcbiAgICAgICAgICAgICAgICBzbGlkZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlXCIsXG4gICAgICAgICAgICAgICAgc2xpZGVCbGFua0NsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFua1wiLFxuICAgICAgICAgICAgICAgIHNsaWRlQWN0aXZlQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogXCJvY2VhbndwLXN3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgc2xpZGVWaXNpYmxlQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtdmlzaWJsZVwiLFxuICAgICAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtZHVwbGljYXRlXCIsXG4gICAgICAgICAgICAgICAgc2xpZGVOZXh0Q2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtbmV4dFwiLFxuICAgICAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0XCIsXG4gICAgICAgICAgICAgICAgc2xpZGVQcmV2Q2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtcHJldlwiLFxuICAgICAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2XCIsXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRFbDogXCIub2NlYW53cC1zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgcHJldkVsOiBcIi5vY2VhbndwLXN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICAgICAgICAgICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItYnV0dG9uLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLWJ1dHRvbi1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgbG9ja0NsYXNzOiBcIm9jZWFud3Atc3dpcGVyLWJ1dHRvbi1sb2NrXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBidWxsZXRFbGVtZW50OiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJCdWxsZXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJGcmFjdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ3VzdG9tOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidWxsZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICdidWxsZXRzJyBvciAncHJvZ3Jlc3NiYXInIG9yICdmcmFjdGlvbicgb3IgJ2N1c3RvbSdcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljTWFpbkJ1bGxldHM6IDEsXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldENsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllckNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXBhZ2luYXRpb24tXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIE5FV1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2xhc3M6IFwib2NlYW53cC1zd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItcGFnaW5hdGlvbi10b3RhbFwiLFxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5DbGFzczogXCJvY2VhbndwLXN3aXBlci1wYWdpbmF0aW9uLWhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogXCJvY2VhbndwLXN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gTkVXXG4gICAgICAgICAgICAgICAgICAgIGxvY2tDbGFzczogXCJvY2VhbndwLXN3aXBlci1wYWdpbmF0aW9uLWxvY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZHJhZ1NpemU6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc25hcE9uUmVsZWFzZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9ja0NsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNjcm9sbGJhci1sb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWdDbGFzczogXCJvY2VhbndwLXN3aXBlci1zY3JvbGxiYXItZHJhZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGF6eToge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0luVmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJldk5leHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJldk5leHRBbW91bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ0VsZW1lbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJvY2VhbndwLXN3aXBlci1sYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdDbGFzczogXCJvY2VhbndwLXN3aXBlci1sYXp5LWxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItbGF6eS1sb2FkZWRcIixcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGVyQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItbGF6eS1wcmVsb2FkZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRodW1iczoge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlQWN0aXZlVGh1bWJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvU2Nyb2xsT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRodW1iQWN0aXZlQ2xhc3M6IFwib2NlYW53cC1zd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIHRodW1ic0NvbnRhaW5lckNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLWNvbnRhaW5lci10aHVtYnNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1heFJhdGlvOiAzLFxuICAgICAgICAgICAgICAgICAgICBtaW5SYXRpbzogMSxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzczogXCJvY2VhbndwLXN3aXBlci16b29tLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICB6b29tZWRTbGlkZUNsYXNzOiBcIm9jZWFud3Atc3dpcGVyLXNsaWRlLXpvb21lZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYTExeToge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25DbGFzczogXCJvY2VhbndwLXN3aXBlci1ub3RpZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcHJldlNsaWRlTWVzc2FnZTogXCJQcmV2aW91cyBzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiBcIk5leHQgc2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6IFwiVGhpcyBpcyB0aGUgZmlyc3Qgc2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNsaWRlTWVzc2FnZTogXCJUaGlzIGlzIHRoZSBsYXN0IHNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiBcIkdvIHRvIHNsaWRlIHt7aW5kZXh9fVwiLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZUxhYmVsTWVzc2FnZTogXCJ7e2luZGV4fX0gLyB7e3NsaWRlc0xlbmd0aH19XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZVJvbGU6IFwiZ3JvdXBcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhc1Bvc3RzU2xpZGVyKCkge1xuICAgICAgICByZXR1cm4gIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tY2Fyb3VzZWxcIik7XG4gICAgfVxufVxuXG4oXCJ1c2Ugc2NyaXB0XCIpO1xubmV3IE9XX1Bvc3RzU2xpZGVyKCk7XG4iXX0=
