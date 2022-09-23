(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "campaignItem",
  props: ["campaign"],
  computed: {
    progress: function progress() {
      return Math.round(this.campaign.collected / this.campaign.required * 100);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaigns.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/views/Campaigns.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CampaignItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CampaignItem.vue */ "./resources/js/app/components/CampaignItem.vue");
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
      page: 0,
      lengthPage: 0
    };
  },
  components: {
    campaignItem: _components_CampaignItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.go();
  },
  methods: {
    go: function go() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("api/campaign?page=" + this.page).then(function (res) {
        var data = res.data.data;
        _this.campaigns = data.campaigns.data;
        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/components/CampaignItem.vue?vue&type=template&id=17ec8ec0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/components/CampaignItem.vue?vue&type=template&id=17ec8ec0& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      staticClass: "mx-auto",
      attrs: {
        "max-width": "344",
        to: "campaign/" + _vm.campaign.id,
        flat: "",
      },
    },
    [
      _c("v-img", {
        attrs: {
          src: "images/campaign/" + _vm.campaign.image,
          height: "200px",
        },
      }),
      _vm._v(" "),
      _c("v-card-title", [
        _vm._v("\n        " + _vm._s(_vm.campaign.title) + "\n    "),
      ]),
      _vm._v(" "),
      _c(
        "v-progress-linear",
        { attrs: { color: "blue", height: "15", value: _vm.progress } },
        [
          _c("strong", { staticClass: "white--text" }, [
            _vm._v(_vm._s(_vm.progress) + "%"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _vm._v("\n        Required :"),
          _c("v-icon", [_vm._v("mdi-cash")]),
          _vm._v("  \n        "),
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _vm._v("\n        Donate :"),
          _c("v-icon", [_vm._v("mdi-cash")]),
          _vm._v("  \n        "),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaigns.vue?vue&type=template&id=5c8f87e6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/views/Campaigns.vue?vue&type=template&id=5c8f87e6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("v-subheader", [_vm._v(" All Campaigns ")]),
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
            [_c("campaignItem", { attrs: { campaign: campaign } })],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("v-pagination", {
        attrs: { length: _vm.lengthPage, "total-visible": 6 },
        on: { input: _vm.go },
        model: {
          value: _vm.page,
          callback: function ($$v) {
            _vm.page = $$v
          },
          expression: "page",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app/components/CampaignItem.vue":
/*!******************************************************!*\
  !*** ./resources/js/app/components/CampaignItem.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignItem_vue_vue_type_template_id_17ec8ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=template&id=17ec8ec0& */ "./resources/js/app/components/CampaignItem.vue?vue&type=template&id=17ec8ec0&");
/* harmony import */ var _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=script&lang=js& */ "./resources/js/app/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignItem_vue_vue_type_template_id_17ec8ec0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignItem_vue_vue_type_template_id_17ec8ec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/components/CampaignItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/app/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/components/CampaignItem.vue?vue&type=template&id=17ec8ec0&":
/*!*************************************************************************************!*\
  !*** ./resources/js/app/components/CampaignItem.vue?vue&type=template&id=17ec8ec0& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_17ec8ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=template&id=17ec8ec0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/components/CampaignItem.vue?vue&type=template&id=17ec8ec0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_17ec8ec0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_17ec8ec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/app/views/Campaigns.vue":
/*!**********************************************!*\
  !*** ./resources/js/app/views/Campaigns.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Campaigns_vue_vue_type_template_id_5c8f87e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Campaigns.vue?vue&type=template&id=5c8f87e6& */ "./resources/js/app/views/Campaigns.vue?vue&type=template&id=5c8f87e6&");
/* harmony import */ var _Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Campaigns.vue?vue&type=script&lang=js& */ "./resources/js/app/views/Campaigns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Campaigns_vue_vue_type_template_id_5c8f87e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Campaigns_vue_vue_type_template_id_5c8f87e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/views/Campaigns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app/views/Campaigns.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/app/views/Campaigns.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Campaigns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaigns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/views/Campaigns.vue?vue&type=template&id=5c8f87e6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/app/views/Campaigns.vue?vue&type=template&id=5c8f87e6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_template_id_5c8f87e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Campaigns.vue?vue&type=template&id=5c8f87e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/views/Campaigns.vue?vue&type=template&id=5c8f87e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_template_id_5c8f87e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_template_id_5c8f87e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);