/*
let CE = window["CustomElement"] = function() {}

declare class CustomElement extends HTMLElement {
    createShadowRoot(): DocumentFragment;
    host: HTMLElement;
}
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var CustomElement = (function (_super) {
        __extends(CustomElement, _super);
        function CustomElement() {
            _super.apply(this, arguments);
        }
        CustomElement.prototype.createShadowRoot = function () { return void 0; };
        return CustomElement;
    })(HTMLElement);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CustomElement;
    window["CustomElement"] = function () { };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQU9FOzs7Ozs7O0lBRUY7UUFBMkNBLGlDQUFXQTtRQUF0REE7WUFBMkNDLDhCQUFXQTtRQUd0REEsQ0FBQ0E7UUFGQUQsd0NBQWdCQSxHQUFoQkEsY0FBc0NFLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUFBLENBQUNBO1FBRXRERixvQkFBQ0E7SUFBREEsQ0FIQSxBQUdDQSxFQUgwQyxXQUFXLEVBR3JEO0lBSEQ7bUNBR0MsQ0FBQTtJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxjQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnQvY3VzdG9tZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbmxldCBDRSA9IHdpbmRvd1tcIkN1c3RvbUVsZW1lbnRcIl0gPSBmdW5jdGlvbigpIHt9XHJcblxyXG5kZWNsYXJlIGNsYXNzIEN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y3JlYXRlU2hhZG93Um9vdCgpOiBEb2N1bWVudEZyYWdtZW50O1xyXG5cdGhvc3Q6IEhUTUxFbGVtZW50O1xyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNyZWF0ZVNoYWRvd1Jvb3QoKTogRG9jdW1lbnRGcmFnbWVudCB7cmV0dXJuIHZvaWQgMDt9XHJcblx0aG9zdDogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbndpbmRvd1tcIkN1c3RvbUVsZW1lbnRcIl0gPSBmdW5jdGlvbigpIHt9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==