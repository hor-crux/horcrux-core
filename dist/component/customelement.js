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
        return CustomElement;
    })(HTMLElement);
    exports.CustomElement = CustomElement;
    function CustomElementDummy() { }
    exports.CustomElementDummy = CustomElementDummy;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBR3ZDQSxDQUFDQTtRQUZBRCx3Q0FBZ0JBLEdBQWhCQSxjQUFzQ0UsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBRXJERixvQkFBQ0E7SUFBREEsQ0FIQSxBQUdDQSxFQUgyQixXQUFXLEVBR3RDO0lBSU8scUJBQWEsaUJBSnBCO0lBRUQsZ0NBQStCRyxDQUFDQTtJQUVULDBCQUFrQixzQkFGVDtJQUVVIiwiZmlsZSI6ImNvbXBvbmVudC9jdXN0b21lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3VzdG9tRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjcmVhdGVTaGFkb3dSb290KCk6IERvY3VtZW50RnJhZ21lbnQge3JldHVybiB2b2lkIDB9O1xyXG5cdGhvc3Q6IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBDdXN0b21FbGVtZW50RHVtbXkoKSB7fVxyXG5cclxuZXhwb3J0IHtDdXN0b21FbGVtZW50LCBDdXN0b21FbGVtZW50RHVtbXl9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9