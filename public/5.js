(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      campaigns: [],
      blogs: []
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("api/campaign/random/3").then(function (res) {
      var data = res.data.data;
      _this.campaigns = data.campaigns;
      console.log(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("api/blog/random/3").then(function (res) {
      var data = res.data.data;
      _this.blogs = data.blogs;
      console.log(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Home.vue?vue&type=template&id=e6b5e8a8&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/views/Home.vue?vue&type=template&id=e6b5e8a8& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "v-container",
    { staticClass: "ma-0 pa-0 mx-auto", attrs: { "grid-list-sm": "" } },
    [
      _c(
        "div",
        { staticClass: "text-right" },
        [
          _c(
            "v-btn",
            {
              staticClass: "blue--text",
              staticStyle: { "text-decoration": "none" },
              attrs: { small: "", text: "", to: "/campaigns" },
            },
            [
              _vm._v("\n            All Campaigns "),
              _c("v-icon", [_vm._v("mdi-chevron-right")]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        _vm._l(_vm.campaigns, function (campaign) {
          return _c(
            "v-flex",
            {
              key: "campaign-" + campaign.id,
              attrs: { xs15: "", sm8: "", md6: "", lg4: "" },
            },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-width": "344" } },
                [
                  _c("v-img", {
                    attrs: {
                      src: "images/campaign/" + campaign.image,
                      height: "200px",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _vm._v(" " + _vm._s(campaign.title) + " "),
                  ]),
                  _vm._v(" "),
                  _c("v-card-subtitle", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(campaign.description) +
                        "\n                "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-right" },
        [
          _c(
            "v-btn",
            {
              staticClass: "blue--text",
              staticStyle: { "text-decoration": "none" },
              attrs: { small: "", text: "", to: "/blogs" },
            },
            [
              _vm._v("\n            All Blogs "),
              _c("v-icon", [_vm._v("mdi-chevron-right")]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c(
            "v-carousel",
            _vm._l(_vm.blogs, function (blog) {
              return _c(
                "v-carousel-item",
                {
                  key: "blog-" + blog.id,
                  attrs: {
                    "reverse-transition": "fade-transition",
                    transition: "fade-transition",
                  },
                },
                [
                  _c(
                    "v-img",
                    {
                      staticClass: "fill-height",
                      attrs: { src: "images/blog/" + blog.image },
                    },
                    [
                      _c(
                        "v-container",
                        {
                          attrs: {
                            "fill-height": "",
                            fluid: "",
                            "pa-0": "",
                            "ma-0": "",
                          },
                        },
                        [
                          _c(
                            "v-layout",
                            { attrs: { "fill-height": "", "align-end": "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", "mx-2": "" } },
                                [
                                  _c("span", {
                                    staticClass: "headline white--text",
                                    domProps: {
                                      textContent: _vm._s(blog.title),
                                    },
                                  }),
                                ]
                              ),
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
            }),
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

/***/ "./resources/js/app/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/app/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e6b5e8a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e6b5e8a8& */ "./resources/js/app/views/Home.vue?vue&type=template&id=e6b5e8a8&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/app/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e6b5e8a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e6b5e8a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/app/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/views/Home.vue?vue&type=template&id=e6b5e8a8&":
/*!************************************************************************!*\
  !*** ./resources/js/app/views/Home.vue?vue&type=template&id=e6b5e8a8& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e6b5e8a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e6b5e8a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Home.vue?vue&type=template&id=e6b5e8a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e6b5e8a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e6b5e8a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);