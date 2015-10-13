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
        this.beforeBinding = this.beforeBinding || [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBY3ZDQSxDQUFDQTtRQVZBRCx3Q0FBZ0JBLEdBQWhCQSxjQUFzQ0UsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQ3BERixtQ0FBV0EsR0FBWEEsY0FBNkJHLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUMzQ0gscUNBQWFBLEdBQWJBLGNBQStCSSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDN0NKLCtCQUFPQSxHQUFQQSxjQUFpQkssQ0FBQ0E7UUFDbEJMLGdDQUFRQSxHQUFSQSxjQUFrQk0sQ0FBQ0E7UUFDbkJOLGdDQUFRQSxHQUFSQSxjQUFrQk8sQ0FBQ0E7UUFLcEJQLG9CQUFDQTtJQUFEQSxDQWRBLEFBY0NBLEVBZDJCLFdBQVcsRUFjdEM7SUFxQk8scUJBQWEsaUJBckJwQjtJQUVEO1FBQ0NRLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUMvQ0EsQ0FBQ0E7SUFhc0IsMEJBQWtCLHNCQWJ4QztJQUNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUc7UUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRztRQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFFRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBQ3BELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFDckQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUdYIiwiZmlsZSI6ImNvbXBvbmVudC9jdXN0b21lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3VzdG9tRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRob3N0OiBIVE1MRWxlbWVudDtcclxuXHRzaGFkb3dSb290OiBEb2N1bWVudEZyYWdtZW50O1xyXG5cdHByb3BlcnRpZXM6IEFycmF5PHN0cmluZz47XHJcblx0Y3JlYXRlU2hhZG93Um9vdCgpOiBEb2N1bWVudEZyYWdtZW50IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjYW5BY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkRlYWN0aXZhdGUoKTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjcmVhdGVkKCk6IHZvaWQge31cclxuXHRhdHRhY2hlZCgpOiB2b2lkIHt9XHJcblx0ZGV0YWNoZWQoKTogdm9pZCB7fVx0XHJcblx0b25DcmVhdGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkF0dGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkRldGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRiZWZvcmVCaW5kaW5nOiBBcnJheTxQcm9taXNlPGFueT4+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBDdXN0b21FbGVtZW50RHVtbXkoKSB7XHJcblx0dGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IFtdO1xyXG5cdHRoaXMub25DcmVhdGVkID0gdGhpcy5vbkNyZWF0ZWQgfHwgW107XHJcblx0dGhpcy5vbkF0dGFjaGVkID0gdGhpcy5vbkF0dGFjaGVkIHx8IFtdO1xyXG5cdHRoaXMub25EZXRhY2hlZCA9IHRoaXMub25EZXRhY2hlZCB8fCBbXTtcclxuXHR0aGlzLmJlZm9yZUJpbmRpbmcgPSB0aGlzLmJlZm9yZUJpbmRpbmcgfHwgW107XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcblxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuYXR0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuZGV0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5cclxuZXhwb3J0IHtDdXN0b21FbGVtZW50LCBDdXN0b21FbGVtZW50RHVtbXl9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9