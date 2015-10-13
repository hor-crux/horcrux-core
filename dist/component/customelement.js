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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBYXZDQSxDQUFDQTtRQVRBRCx3Q0FBZ0JBLEdBQWhCQSxjQUFzQ0UsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQ3BERixtQ0FBV0EsR0FBWEEsY0FBNkJHLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUMzQ0gscUNBQWFBLEdBQWJBLGNBQStCSSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDN0NKLCtCQUFPQSxHQUFQQSxjQUFpQkssQ0FBQ0E7UUFDbEJMLGdDQUFRQSxHQUFSQSxjQUFrQk0sQ0FBQ0E7UUFDbkJOLGdDQUFRQSxHQUFSQSxjQUFrQk8sQ0FBQ0E7UUFJcEJQLG9CQUFDQTtJQUFEQSxDQWJBLEFBYUNBLEVBYjJCLFdBQVcsRUFhdEM7SUFtQk8scUJBQWEsaUJBbkJwQjtJQUVEO1FBQ0NRLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDekNBLENBQUNBO0lBYXNCLDBCQUFrQixzQkFieEM7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUc7UUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBO0lBRUQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNwRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBQ3JELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFHWCIsImZpbGUiOiJjb21wb25lbnQvY3VzdG9tZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0aG9zdDogSFRNTEVsZW1lbnQ7XHJcblx0c2hhZG93Um9vdDogRG9jdW1lbnRGcmFnbWVudDtcclxuXHRwcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+O1xyXG5cdGNyZWF0ZVNoYWRvd1Jvb3QoKTogRG9jdW1lbnRGcmFnbWVudCB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y2FuQWN0aXZhdGUoKTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjYW5EZWFjdGl2YXRlKCk6IFByb21pc2U8YW55PiB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y3JlYXRlZCgpOiB2b2lkIHt9XHJcblx0YXR0YWNoZWQoKTogdm9pZCB7fVxyXG5cdGRldGFjaGVkKCk6IHZvaWQge31cdFxyXG5cdG9uQ3JlYXRlZDogQXJyYXk8KHNlbGY6Q3VzdG9tRWxlbWVudCk9PmFueT47XHJcblx0b25BdHRhY2hlZDogQXJyYXk8KHNlbGY6Q3VzdG9tRWxlbWVudCk9PmFueT47XHJcblx0b25EZXRhY2hlZDogQXJyYXk8KHNlbGY6Q3VzdG9tRWxlbWVudCk9PmFueT47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEN1c3RvbUVsZW1lbnREdW1teSgpIHtcclxuXHR0aGlzLm9uQ3JlYXRlZCA9IHRoaXMub25DcmVhdGVkIHx8IFtdO1xyXG5cdHRoaXMub25BdHRhY2hlZCA9IHRoaXMub25BdHRhY2hlZCB8fCBbXTtcclxuXHR0aGlzLm9uRGV0YWNoZWQgPSB0aGlzLm9uRGV0YWNoZWQgfHwgW107XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcblxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuYXR0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuZGV0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5cclxuZXhwb3J0IHtDdXN0b21FbGVtZW50LCBDdXN0b21FbGVtZW50RHVtbXl9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9