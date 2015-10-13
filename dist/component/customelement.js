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
        Object.defineProperty(CustomElement.prototype, "parentComponent", {
            get: function () { return void 0; },
            enumerable: true,
            configurable: true
        });
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
    Object.defineProperty(CustomElementDummy.prototype, "parentComponent", {
        get: function () {
            var parent = this.host || this.parentNode;
            while (!("parentComponent" in parent)) {
                parent = parent.host || parent.parentNode;
            }
            return parent;
        },
        enumerable: true
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudC5wYXJlbnRDb21wb25lbnQiLCJDdXN0b21FbGVtZW50RHVtbXkiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBO1FBQTRCQSxpQ0FBV0E7UUFBdkNBO1lBQTRCQyw4QkFBV0E7UUFjdkNBLENBQUNBO1FBVkFELHdDQUFnQkEsR0FBaEJBLGNBQXNDRSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDcERGLG1DQUFXQSxHQUFYQSxjQUE2QkcsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQzNDSCxxQ0FBYUEsR0FBYkEsY0FBK0JJLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUM3Q0osK0JBQU9BLEdBQVBBLGNBQWlCSyxDQUFDQTtRQUNsQkwsZ0NBQVFBLEdBQVJBLGNBQWtCTSxDQUFDQTtRQUNuQk4sZ0NBQVFBLEdBQVJBLGNBQWtCTyxDQUFDQTtRQUluQlAsc0JBQUlBLDBDQUFlQTtpQkFBbkJBLGNBQXNDUSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7O1dBQUFSO1FBQ3JEQSxvQkFBQ0E7SUFBREEsQ0FkQSxBQWNDQSxFQWQyQixXQUFXLEVBY3RDO0lBZ0NPLHFCQUFhLGlCQWhDcEI7SUFFRDtRQUNDUyxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUF5QnNCLDBCQUFrQixzQkF6QnhDO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFDcEQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNyRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBRXJELE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RFLEdBQUcsRUFBRTtZQUNKLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN2QyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFBO1lBQzFDLENBQUM7WUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2YsQ0FBQztRQUNELFVBQVUsRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQztJQUd1QyIsImZpbGUiOiJjb21wb25lbnQvY3VzdG9tZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0aG9zdDogSFRNTEVsZW1lbnQ7XHJcblx0c2hhZG93Um9vdDogRG9jdW1lbnRGcmFnbWVudDtcclxuXHRwcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+O1xyXG5cdGNyZWF0ZVNoYWRvd1Jvb3QoKTogRG9jdW1lbnRGcmFnbWVudCB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y2FuQWN0aXZhdGUoKTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjYW5EZWFjdGl2YXRlKCk6IFByb21pc2U8YW55PiB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y3JlYXRlZCgpOiB2b2lkIHt9XHJcblx0YXR0YWNoZWQoKTogdm9pZCB7fVxyXG5cdGRldGFjaGVkKCk6IHZvaWQge31cdFxyXG5cdG9uQ3JlYXRlZDogQXJyYXk8KHNlbGY6Q3VzdG9tRWxlbWVudCk9PmFueT47XHJcblx0b25BdHRhY2hlZDogQXJyYXk8KHNlbGY6Q3VzdG9tRWxlbWVudCk9PmFueT47XHJcblx0b25EZXRhY2hlZDogQXJyYXk8KHNlbGY6Q3VzdG9tRWxlbWVudCk9PmFueT47XHJcblx0Z2V0IHBhcmVudENvbXBvbmVudCgpOiBDdXN0b21FbGVtZW50IHtyZXR1cm4gdm9pZCAwfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDdXN0b21FbGVtZW50RHVtbXkoKSB7XHJcblx0dGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IFtdO1xyXG5cdHRoaXMub25DcmVhdGVkID0gdGhpcy5vbkNyZWF0ZWQgfHwgW107XHJcblx0dGhpcy5vbkF0dGFjaGVkID0gdGhpcy5vbkF0dGFjaGVkIHx8IFtdO1xyXG5cdHRoaXMub25EZXRhY2hlZCA9IHRoaXMub25EZXRhY2hlZCB8fCBbXTtcclxufVxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNhbkFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5EZWFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XHJcbn1cclxuXHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY3JlYXRlZCA9IGZ1bmN0aW9uKCkge31cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5hdHRhY2hlZCA9IGZ1bmN0aW9uKCkge31cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5kZXRhY2hlZCA9IGZ1bmN0aW9uKCkge31cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLCBcInBhcmVudENvbXBvbmVudFwiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5ob3N0IHx8IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdHdoaWxlICghKFwicGFyZW50Q29tcG9uZW50XCIgaW4gcGFyZW50KSkge1xyXG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQuaG9zdCB8fCBwYXJlbnQucGFyZW50Tm9kZVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdH0sXHJcblx0ZW51bWVyYWJsZTogdHJ1ZVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQge0N1c3RvbUVsZW1lbnQsIEN1c3RvbUVsZW1lbnREdW1teX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=