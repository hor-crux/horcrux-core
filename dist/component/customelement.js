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
        CustomElement.prototype.created = function () { };
        CustomElement.prototype.attached = function () { };
        CustomElement.prototype.detached = function () { };
        return CustomElement;
    })(HTMLElement);
    exports.CustomElement = CustomElement;
    function CustomElementDummy() {
        this.properties = this.properties || [];
        this.onCreated = this.onCreated || [];
        this.onAttached = this.onAttached || [];
        this.onDetached = this.onDetached || [];
    }
    exports.CustomElementDummy = CustomElementDummy;
    CustomElementDummy.prototype.canActivate = function () {
        return Promise.resolve('');
    };
    CustomElementDummy.prototype.canDeactivate = function () {
        return Promise.resolve('');
    };
    CustomElementDummy.prototype.created = function () { };
    CustomElementDummy.prototype.attached = function () { };
    CustomElementDummy.prototype.detached = function () { };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBYXZDQSxDQUFDQTtRQVRBRCx3Q0FBZ0JBLEdBQWhCQSxjQUFzQ0UsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQ3BERixtQ0FBV0EsR0FBWEEsY0FBNkJHLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUMzQ0gscUNBQWFBLEdBQWJBLGNBQStCSSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDN0NKLCtCQUFPQSxHQUFQQSxjQUFpQkssQ0FBQ0E7UUFDbEJMLGdDQUFRQSxHQUFSQSxjQUFrQk0sQ0FBQ0E7UUFDbkJOLGdDQUFRQSxHQUFSQSxjQUFrQk8sQ0FBQ0E7UUFJcEJQLG9CQUFDQTtJQUFEQSxDQWJBLEFBYUNBLEVBYjJCLFdBQVcsRUFhdEM7SUFvQk8scUJBQWEsaUJBcEJwQjtJQUVEO1FBQ0NRLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO0lBQ3pDQSxDQUFDQTtJQWFzQiwwQkFBa0Isc0JBYnhDO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFDcEQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNyRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBR1giLCJmaWxlIjoiY29tcG9uZW50L2N1c3RvbWVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGhvc3Q6IEhUTUxFbGVtZW50O1xyXG5cdHNoYWRvd1Jvb3Q6IERvY3VtZW50RnJhZ21lbnQ7XHJcblx0cHJvcGVydGllczogQXJyYXk8c3RyaW5nPjtcclxuXHRjcmVhdGVTaGFkb3dSb290KCk6IERvY3VtZW50RnJhZ21lbnQge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkFjdGl2YXRlKCk6IFByb21pc2U8YW55PiB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y2FuRGVhY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNyZWF0ZWQoKTogdm9pZCB7fVxyXG5cdGF0dGFjaGVkKCk6IHZvaWQge31cclxuXHRkZXRhY2hlZCgpOiB2b2lkIHt9XHRcclxuXHRvbkNyZWF0ZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uQXR0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uRGV0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBDdXN0b21FbGVtZW50RHVtbXkoKSB7XHJcblx0dGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IFtdO1xyXG5cdHRoaXMub25DcmVhdGVkID0gdGhpcy5vbkNyZWF0ZWQgfHwgW107XHJcblx0dGhpcy5vbkF0dGFjaGVkID0gdGhpcy5vbkF0dGFjaGVkIHx8IFtdO1xyXG5cdHRoaXMub25EZXRhY2hlZCA9IHRoaXMub25EZXRhY2hlZCB8fCBbXTtcclxufVxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNhbkFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5EZWFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XHJcbn1cclxuXHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY3JlYXRlZCA9IGZ1bmN0aW9uKCkge31cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5hdHRhY2hlZCA9IGZ1bmN0aW9uKCkge31cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5kZXRhY2hlZCA9IGZ1bmN0aW9uKCkge31cclxuXHJcblxyXG5leHBvcnQge0N1c3RvbUVsZW1lbnQsIEN1c3RvbUVsZW1lbnREdW1teX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=