var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    window["CustomElement"] = function () { };
    var CustomElement = (function (_super) {
        __extends(CustomElement, _super);
        function CustomElement() {
            _super.apply(this, arguments);
        }
        CustomElement.prototype.createShadowRoot = function () { return void 0; };
        ;
        return CustomElement;
    })(HTMLElement);
    exports.CustomElement = CustomElement;
    function CustomElementDummy() { }
    exports.CustomElementDummy = CustomElementDummy;
});
/*
let HTML5Element = {
    new: ()=>{return void 0;},
    
}
class CustomElement extends HTML5Element {}

export {CustomElement, HTML5Element}
*/ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFFdkM7UUFBNEJBLGlDQUFXQTtRQUF2Q0E7WUFBNEJDLDhCQUFXQTtRQUd2Q0EsQ0FBQ0E7UUFGQUQsd0NBQWdCQSxHQUFoQkEsY0FBc0NFLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUVyREYsb0JBQUNBO0lBQURBLENBSEEsQUFHQ0EsRUFIMkIsV0FBVyxFQUd0QztJQUlPLHFCQUFhLGlCQUpwQjtJQUVELGdDQUErQkcsQ0FBQ0E7SUFFVCwwQkFBa0Isc0JBRlQ7SUFFVTtBQUMxQzs7Ozs7Ozs7RUFRRSIsImZpbGUiOiJjb21wb25lbnQvY3VzdG9tZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvd1tcIkN1c3RvbUVsZW1lbnRcIl0gPSBmdW5jdGlvbigpIHt9XHJcblxyXG5jbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNyZWF0ZVNoYWRvd1Jvb3QoKTogRG9jdW1lbnRGcmFnbWVudCB7cmV0dXJuIHZvaWQgMH07XHJcblx0aG9zdDogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEN1c3RvbUVsZW1lbnREdW1teSgpIHt9XHJcblxyXG5leHBvcnQge0N1c3RvbUVsZW1lbnQsIEN1c3RvbUVsZW1lbnREdW1teX1cclxuLypcclxubGV0IEhUTUw1RWxlbWVudCA9IHtcclxuXHRuZXc6ICgpPT57cmV0dXJuIHZvaWQgMDt9LFxyXG5cdFxyXG59XHJcbmNsYXNzIEN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBIVE1MNUVsZW1lbnQge31cclxuXHJcbmV4cG9ydCB7Q3VzdG9tRWxlbWVudCwgSFRNTDVFbGVtZW50fVxyXG4qLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==