(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\annjo\Documents\j\angularD3\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "shadow", "header"], ["routerLink", "/"], ["src", "./assets/images/logo.svg", "alt", "logo", 1, "img-fluid", "logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 2em 1em;\n  width: 100%;\n  position: fixed;\n  z-index: 100;\n}\n\n.logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMmVtIDFlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "AGGw":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/piechart/piechart.component.ts ***!
  \***************************************************************/
/*! exports provided: PiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiechartComponent", function() { return PiechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../d3.service */ "i/zK");



class PiechartComponent {
    constructor(d3) {
        this.d3 = d3;
        this.data = [
            { name: "Chairman office", value: "35", color: "#0060b5" },
            { name: "DOH sector", value: "65", color: "#5f86a8" }
        ];
        this.margin = { top: 10, right: 30, bottom: 30, left: 40 };
        this.width = 250;
        this.height = 250;
        this.radius = Math.min(this.width, this.height) / 2 - this.margin.left;
    }
    ngOnInit() {
        this.createSvg();
        this.createColors(this.data);
        this.drawChart();
    }
    createSvg() {
        this.svg = this.d3.d3
            .select("figure#donut")
            .append("svg")
            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    }
    createColors(data) {
        let index = 0;
        const defaultColors = [
            "#6773f1",
            "#32325d",
            "#6162b5",
            "#6586f6",
            "#8b6ced",
            "#1b1b1b",
            "#212121"
        ];
        const colorsRange = [];
        this.data.forEach(element => {
            if (element.color)
                colorsRange.push(element.color);
            else {
                colorsRange.push(defaultColors[index]);
                index++;
            }
        });
        this.colors = this.d3.d3
            .scaleOrdinal()
            .domain(data.map(d => d.value.toString()))
            .range(colorsRange);
    }
    drawChart() {
        // Compute the position of each group on the pie:
        var pie = this.d3.d3
            .pie()
            .sort(null) // Do not sort group by size
            .value((d) => {
            return d.value;
        });
        var data_ready = pie(this.data);
        // The arc generator
        var arc = this.d3.d3
            .arc()
            .innerRadius(this.radius * 0.5) // This is the size of the donut hole
            .outerRadius(this.radius * 0.8);
        // Another arc that won't be drawn. Just for labels positioning
        var outerArc = this.d3.d3
            .arc()
            .innerRadius(this.radius * 0.9)
            .outerRadius(this.radius * 0.9);
        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        this.svg
            .selectAll("allSlices")
            .data(data_ready)
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", d => this.colors(d.data.value))
            .attr("stroke", "white")
            .style("stroke-width", "2px")
            .style("opacity", 0.7);
        // Add the polylines between chart and labels:
        this.svg
            .selectAll("allPolylines")
            .data(data_ready)
            .enter()
            .append("polyline")
            .attr("stroke", "black")
            .style("fill", "none")
            .attr("stroke-width", 1)
            .attr("points", d => {
            var posA = arc.centroid(d); // line insertion in the slice
            var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
            var posC = outerArc.centroid(d); // Label position = almost the same as posB
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
            posC[0] = this.radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
            return [posA, posB, posC];
        });
        // Add the polylines between chart and labels:
        this.svg
            .selectAll("allLabels")
            .data(data_ready)
            .enter()
            .append("text")
            .text(d => {
            return d.data.name;
        })
            .attr("transform", d => {
            var pos = outerArc.centroid(d);
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            pos[0] = this.radius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
        })
            .style("text-anchor", d => {
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            return midangle < Math.PI ? "start" : "end";
        });
    }
}
PiechartComponent.ɵfac = function PiechartComponent_Factory(t) { return new (t || PiechartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"])); };
PiechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PiechartComponent, selectors: [["app-piechart"]], inputs: { data: "data" }, decls: 1, vars: 0, consts: [["id", "donut"]], template: function PiechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figure", 0);
    } }, styles: ["#chart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 50px;\n}\n\n.arc[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font: 10px sans-serif;\n  text-anchor: middle;\n}\n\n.pieBox[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n}\n\n#mainTooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  min-width: 40px;\n  height: 40px;\n  padding: 0 0 25px 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50px;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);\n  pointer-events: none;\n  fill: #fff;\n  color: #fff;\n  text-anchor: middle;\n  text-align: center;\n  font-weight: bold;\n  z-index: 9999;\n}\n\n#mainTooltip[_ngcontent-%COMP%]:before {\n  border: solid;\n  border-color: rgba(0, 0, 0, 0.6) transparent;\n  border-width: 10px 10px 0 10px;\n  top: 100%;\n  content: \"\";\n  left: 43%;\n  position: absolute;\n  z-index: 99;\n}\n\n#mainTooltip.hidden[_ngcontent-%COMP%] {\n  display: none;\n  color: #5f86a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcGllY2hhcnQvcGllY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFFTjs7QUFDRTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBSUEsbUJBQUE7RUFHQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBRU47O0FBQUU7RUFDSSxhQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUdOOztBQURFO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFJTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3BpZWNoYXJ0L3BpZWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJ0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5hcmMgdGV4dCB7XHJcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAucGllQm94e1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI21haW5Ub29sdGlwIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtaW4td2lkdGggOjQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogMCAwIDI1cHggMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcbiAgI21haW5Ub29sdGlwOmJlZm9yZSB7XHJcbiAgICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjYpIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwIDEwcHg7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgbGVmdDogNDMlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICAjbWFpblRvb2x0aXAuaGlkZGVuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgY29sb3I6ICM1Zjg2YThcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PiechartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-piechart',
                templateUrl: './piechart.component.html',
                styleUrls: ['./piechart.component.scss']
            }]
    }], function () { return [{ type: _d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["data"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./d3.service */ "i/zK");
/* harmony import */ var _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./piechart/piechart.component */ "AGGw");
/* harmony import */ var _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./barchart/barchart.component */ "wwJf");


// material modules























class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _d3_service__WEBPACK_IMPORTED_MODULE_21__["D3Service"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_23__["BarchartComponent"], _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_22__["PiechartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_23__["BarchartComponent"],
        _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_22__["PiechartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_23__["BarchartComponent"], _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_22__["PiechartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_23__["BarchartComponent"],
                    _piechart_piechart_component__WEBPACK_IMPORTED_MODULE_22__["PiechartComponent"]
                ],
                providers: [
                    _d3_service__WEBPACK_IMPORTED_MODULE_21__["D3Service"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "oUHS");



class AppComponent {
    constructor() {
        this.title = 'angularD3';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-bar");
    } }, directives: [_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__["SideBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "oUHS");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bDRk":
/*!**************************************************!*\
  !*** ./src/app/components/side-bar/menu-list.ts ***!
  \**************************************************/
/*! exports provided: MenuItem, menuList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuList", function() { return menuList; });
class MenuItem {
    constructor(name, route, toolTip, icon = '') {
        this.name = name;
        this.route = route;
        this.toolTip = toolTip;
        this.icon = icon;
    }
}
const menuList = [
    new MenuItem('Dashboard', 'dashboard', 'Dashboard', 'home'),
    new MenuItem('Product', 'product', 'Products', 'list')
];


/***/ }),

/***/ "i/zK":
/*!**********************************************!*\
  !*** ./src/app/modules/shared/d3.service.ts ***!
  \**********************************************/
/*! exports provided: D3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return D3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");



class D3Service {
    constructor() {
        this.d3 = d3__WEBPACK_IMPORTED_MODULE_1__;
    }
    /**
     * Generates random letter string with specified length
     * @param length: number
     */
    generateId(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
D3Service.ɵfac = function D3Service_Factory(t) { return new (t || D3Service)(); };
D3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: D3Service, factory: D3Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oUHS":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-list */ "bDRk");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










const _c0 = function (a1) { return ["/", a1]; };
function SideBarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_div_7_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, i_r1.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", i_r1.toolTip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.collapse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.name);
} }
class SideBarComponent {
    constructor() {
        this.sideMenu = _menu_list__WEBPACK_IMPORTED_MODULE_1__["menuList"];
        this.collapse = false;
    }
    ngOnInit() {
    }
    toggleSidebar() {
        this.collapse = !this.collapse;
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 12, vars: 1, consts: [["autosize", "true", 1, "full-height", "bg-light"], ["mode", "side", "opened", ""], ["mat-menu-item", "", 1, "with-icon", "padded", 3, "click"], ["matTooltip", "toggle side menu", 1, "toggle-btn"], [1, "mt-4"], ["mat-menu-item", "", "class", "with-icon padded", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "contain"], ["mat-menu-item", "", 1, "with-icon", "padded", 3, "routerLink", "click"], [3, "matTooltip"], [3, "hidden"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_2_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SideBarComponent_div_7_Template, 6, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sideMenu);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], styles: [".full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.padded[_ngcontent-%COMP%] {\n  padding: 1.5em 1em;\n  color: #2e2e2e;\n  font-weight: 400;\n  font-size: 1.2em;\n}\n\n.with-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: #2e2e2e !important;\n}\n\n.contain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10em;\n}\n\n.bg-light[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  background: #f8fffe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnBhZGRlZCB7XHJcbiAgICBwYWRkaW5nOiAxLjVlbSAxZW07XHJcbiAgICBjb2xvcjogIzJlMmUyZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4ud2l0aC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogIzJlMmUyZSAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuXHJcbi5jb250YWluIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBlbTtcclxufVxyXG5cclxuLmJnLWxpZ2h0LCBtYXQtc2lkZW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNTUsIDI1NCk7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "XoyV")).then(m => m.DashboardModule) },
    { path: 'product', loadChildren: () => __webpack_require__.e(/*! import() | modules-product-product-module */ "modules-product-product-module").then(__webpack_require__.bind(null, /*! ./modules/product/product.module */ "sjYV")).then(m => m.ProductModule) },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "XoyV")).then(m => m.DashboardModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wwJf":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/barchart/barchart.component.ts ***!
  \***************************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");



class BarchartComponent {
    constructor(container) {
        this.container = container;
        this.w = 480;
        this.h = 500;
        this.margin = { top: 10, right: 50, bottom: 60, left: 100 };
        this.width = 300;
        this.height = this.h - this.margin.top - this.margin.bottom;
        this.colors = ['rgb(64, 160, 0)', 'rgb(197, 141, 0)', 'rgb(160, 0, 0)', 'rgb(0, 131, 112)'];
    }
    ngOnInit() {
        this.stack = d3__WEBPACK_IMPORTED_MODULE_1__["stack"]()
            .keys(['Less30', 'Gt30Le60', 'Gt60le90', 'Gt90']);
        this.initScales();
        this.initSvg();
        this.createStack(this.data);
        this.drawAxis();
    }
    // 	ngOnChanges(changes: SimpleChanges) {
    // 		const dataChange = changes.data;
    // 		if(dataChange.firstChange === false){
    // 			this.stack = d3.stack()
    // 				.keys(this.keys);
    // 			this.createStack(this.data);
    // 		}
    // 	}
    initScales() {
        this.x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .rangeRound([0, this.width])
            .padding(0.05);
        this.y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .range([this.height, 0]);
    }
    initSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.container.nativeElement)
            .select('.chart-container')
            .append('svg')
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr('class', 'chart')
            .attr('width', this.w)
            .attr('height', this.h)
            .attr("viewBox", "0 0 600 400");
        this.chart = this.svg.append('g')
            .classed('chart-contents', true)
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        this.layersBarArea = this.chart.append('g')
            .classed('layers', true);
    }
    drawAxis() {
        this.xAxis = this.chart.append('g')
            .classed('x axis', true)
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.x));
        this.chart.append("text")
            .attr("y", this.height + 40)
            .attr("x", (this.width / 2))
            .classed('axis-title', true)
            .style("text-anchor", "middle")
            .style('stroke', 'none')
            .text(this.xTitle);
        this.yAxis = this.chart.append('g')
            .classed('y axis', true)
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.y)
            .ticks(7));
        this.chart.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - 60)
            .attr("x", 0 - (this.height / 2))
            .style("text-anchor", "middle")
            .style('stroke', 'none')
            .classed('axis-title', true)
            .text(this.yTitle);
    }
    createStack(stackData) {
        this.stackedSeries = this.stack(stackData);
        console.log(this.stackedSeries);
        this.drawChart(this.stackedSeries);
    }
    drawChart(data) {
        this.layersBar = this.layersBarArea.selectAll('.layer')
            .data(data)
            .enter()
            .append('g')
            .classed('layer', true)
            .style('fill', (d, i) => {
            return this.colors[i];
        });
        this.x.domain(this.data.map((d) => {
            return d.date;
        }));
        this.y.domain([0, +d3__WEBPACK_IMPORTED_MODULE_1__["max"](this.stackedSeries, function (d) {
                return d3__WEBPACK_IMPORTED_MODULE_1__["max"](d, (d) => {
                    return d[1];
                });
            })]);
        this.layersBar.selectAll('rect')
            .data((d) => {
            return d;
        })
            .enter()
            .append('rect')
            .attr('y', (d) => {
            return this.y(d[1]);
        })
            .attr('x', (d, i) => {
            return this.x(d.data.date);
        })
            .attr('width', this.x.bandwidth())
            .attr('height', (d, i) => {
            return this.y(d[0]) - this.y(d[1]);
        });
    }
}
BarchartComponent.ɵfac = function BarchartComponent_Factory(t) { return new (t || BarchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BarchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarchartComponent, selectors: [["app-barchart"]], inputs: { data: "data", xTitle: "xTitle", yTitle: "yTitle" }, decls: 1, vars: 0, consts: [[1, "chart-container"]], template: function BarchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".chart-container[_ngcontent-%COMP%] {\n  rotate: 90deg !important;\n  translate: -80px 10px !important;\n  color: #008370;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvYmFyY2hhcnQvYmFyY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvYmFyY2hhcnQvYmFyY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbi5jaGFydC1jb250YWluZXIgeyBcclxuICAgIHJvdGF0ZTogOTBkZWcgIWltcG9ydGFudDtcclxuICAgIHRyYW5zbGF0ZTogLTgwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigwLCAxMzEsIDExMik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarchartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-barchart',
                templateUrl: './barchart.component.html',
                styleUrls: ['./barchart.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], yTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "SYky");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map