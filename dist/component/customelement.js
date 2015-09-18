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
        ;
        CustomElement.prototype.canActivate = function () { return void 0; };
        ;
        CustomElement.prototype.canDeactivate = function () { return void 0; };
        ;
        return CustomElement;
    })(HTMLElement);
    exports.CustomElement = CustomElement;
    function CustomElementDummy() { }
    exports.CustomElementDummy = CustomElementDummy;
    CustomElementDummy.prototype.canActivate = function () {
        return Promise.resolve('');
    };
    CustomElementDummy.prototype.canDeactivate = function () {
        return Promise.resolve('');
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnREdW1teSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7UUFBNEJBLGlDQUFXQTtRQUF2Q0E7WUFBNEJDLDhCQUFXQTtRQU12Q0EsQ0FBQ0E7UUFIQUQsd0NBQWdCQSxHQUFoQkEsY0FBc0NFLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUNwREYsbUNBQVdBLEdBQVhBLGNBQTZCRyxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDM0NILHFDQUFhQSxHQUFiQSxjQUErQkksTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQzlDSixvQkFBQ0E7SUFBREEsQ0FOQSxBQU1DQSxFQU4yQixXQUFXLEVBTXRDO0lBV08scUJBQWEsaUJBWHBCO0lBRUQsZ0NBQStCSyxDQUFDQTtJQVNULDBCQUFrQixzQkFUVDtJQUNoQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUc7UUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBO0lBR3lDIiwiZmlsZSI6ImNvbXBvbmVudC9jdXN0b21lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3VzdG9tRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRob3N0OiBIVE1MRWxlbWVudDtcclxuXHRzaGFkb3dSb290OiBEb2N1bWVudEZyYWdtZW50O1xyXG5cdGNyZWF0ZVNoYWRvd1Jvb3QoKTogRG9jdW1lbnRGcmFnbWVudCB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y2FuQWN0aXZhdGUoKTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjYW5EZWFjdGl2YXRlKCk6IFByb21pc2U8YW55PiB7cmV0dXJuIHZvaWQgMH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEN1c3RvbUVsZW1lbnREdW1teSgpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuQWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnKTtcclxufVxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNhbkRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7Q3VzdG9tRWxlbWVudCwgQ3VzdG9tRWxlbWVudER1bW15fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==