(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaign.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/views/Campaign.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      campaign: {}
    };
  },
  created: function created() {
    this.go();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({
    go: function go() {
      var _this = this;

      var id = this.$route.params.id;
      var url = "/api/campaign/".concat(id);
      axios.get(url).then(function (res) {
        var data = res.data.data;
        _this.campaign = data.campaign;
        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    tambahTransaksi: "transaction/insert"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setAlert: "alert/set"
  })), {}, {
    donate: function donate() {
      this.tambahTransaksi();
      this.setAlert({
        status: true,
        color: "primary",
        text: "Transaksi berhasil ditambahkan"
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaign.vue?vue&type=template&id=5572b4dd&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/views/Campaign.vue?vue&type=template&id=5572b4dd& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        { staticClass: "mx-auto" },
        [
          _c("v-img", {
            attrs: {
              src: "/images/campaign/" + _vm.campaign.image,
              height: "500px",
            },
          }),
          _vm._v(" "),
          _c("v-card-title", [_vm._v(_vm._s(_vm.campaign.title))]),
          _vm._v(" "),
          _c("v-card-subtitle", { staticClass: "pb-0" }, [
            _vm._v(
              "\n            " + _vm._s(_vm.campaign.description) + "\n        "
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-btn", { attrs: { color: "orange", text: "" } }, [
                _vm._v(" Share "),
              ]),
              _vm._v(" "),
              _c("v-btn", { attrs: { color: "orange", text: "" } }, [
                _vm._v(" Explore "),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "pa-2 my-2",
          attrs: { elevation: "2", "tile-outlined": "" },
        },
        [
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [
                      _c("h3", [_vm._v("Detail")]),
                    ]),
                    _vm._v(" "),
                    _c("th"),
                  ]),
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c(
                      "td",
                      [
                        _c("v-icon", [_vm._v("mdi-home-city")]),
                        _vm._v(" Alamat"),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.campaign.address))]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      [
                        _c("v-icon", [_vm._v("mdi-hand-heart")]),
                        _vm._v(" Terkumpul"),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "blue--text" }, [
                      _c("b", [
                        _vm._v(
                          _vm._s(
                            new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(_vm.campaign.collected)
                          )
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      [
                        _c("v-icon", [_vm._v("mdi-cash")]),
                        _vm._v(" Dibutuhkan"),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "orange--text" }, [
                      _c("b", [
                        _vm._v(
                          _vm._s(
                            new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(_vm.campaign.required)
                          )
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  staticClass: "rounded-pill",
                  attrs: { block: "", color: "primary" },
                  on: { click: _vm.donate },
                },
                [
                  _c("v-icon", [_vm._v("mdi-money")]),
                  _vm._v("   DONATE\n            "),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app/views/Campaign.vue":
/*!*********************************************!*\
  !*** ./resources/js/app/views/Campaign.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Campaign_vue_vue_type_template_id_5572b4dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Campaign.vue?vue&type=template&id=5572b4dd& */ "./resources/js/app/views/Campaign.vue?vue&type=template&id=5572b4dd&");
/* harmony import */ var _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Campaign.vue?vue&type=script&lang=js& */ "./resources/js/app/views/Campaign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Campaign_vue_vue_type_template_id_5572b4dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Campaign_vue_vue_type_template_id_5572b4dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/views/Campaign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app/views/Campaign.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/app/views/Campaign.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Campaign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/views/Campaign.vue?vue&type=template&id=5572b4dd&":
/*!****************************************************************************!*\
  !*** ./resources/js/app/views/Campaign.vue?vue&type=template&id=5572b4dd& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5572b4dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Campaign.vue?vue&type=template&id=5572b4dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaign.vue?vue&type=template&id=5572b4dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5572b4dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5572b4dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);