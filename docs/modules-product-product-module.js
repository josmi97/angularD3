(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-product-product-module"],{

/***/ "3+Lc":
/*!******************************************************!*\
  !*** ./src/app/modules/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductComponent {
    constructor() { }
    ngOnInit() {
        this.generateData();
    }
    generateData() {
        this.chartData = [];
        for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
            this.chartData.push([
                `Index ${i}`,
                Math.floor(Math.random() * 100)
            ]);
        }
        console.log('&&&&', this.chartData);
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 2, vars: 0, template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iARD":
/*!***********************************************************!*\
  !*** ./src/app/modules/product/product-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "3+Lc");





const routes = [{ path: '', component: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] }];
class ProductRoutingModule {
}
ProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sjYV":
/*!***************************************************!*\
  !*** ./src/app/modules/product/product.module.ts ***!
  \***************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-routing.module */ "iARD");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.component */ "3+Lc");





class ProductModule {
}
ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-product-product-module.js.map