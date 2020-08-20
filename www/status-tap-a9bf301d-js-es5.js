(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-a9bf301d-js"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/status-tap-a9bf301d.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/status-tap-a9bf301d.js ***!
      \******************************************************************/

    /*! exports provided: startStatusTap */

    /***/
    function node_modulesIonicCoreDistEsmStatusTapA9bf301dJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startStatusTap", function () {
        return startStatusTap;
      });
      /* harmony import */


      var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-44bf8136.js */
      "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");

      var startStatusTap = function startStatusTap() {
        var win = window;
        win.addEventListener('statusTap', function () {
          Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
            var width = win.innerWidth;
            var height = win.innerHeight;
            var el = document.elementFromPoint(width / 2, height / 2);

            if (!el) {
              return;
            }

            var contentEl = el.closest('ion-content');

            if (contentEl) {
              contentEl.componentOnReady().then(function () {
                Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                  return contentEl.scrollToTop(300);
                });
              });
            }
          });
        });
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=status-tap-a9bf301d-js-es5.js.map