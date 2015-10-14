var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "horcrux-event"], function (require, exports, horcrux_event_1) {
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
        this.lazy = false;
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
    Object.defineProperty(CustomElementDummy.prototype, "eventBus", {
        get: function () {
            return this._eventBus || (this._eventBus = new horcrux_event_1.EventBus());
        },
        enumerable: true
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudC5wYXJlbnRDb21wb25lbnQiLCJDdXN0b21FbGVtZW50RHVtbXkiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVBO1FBQTRCQSxpQ0FBV0E7UUFBdkNBO1lBQTRCQyw4QkFBV0E7UUFnQnZDQSxDQUFDQTtRQVZBRCx3Q0FBZ0JBLEdBQWhCQSxjQUFzQ0UsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQ3BERixtQ0FBV0EsR0FBWEEsY0FBNkJHLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUMzQ0gscUNBQWFBLEdBQWJBLGNBQStCSSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDN0NKLCtCQUFPQSxHQUFQQSxjQUFpQkssQ0FBQ0E7UUFDbEJMLGdDQUFRQSxHQUFSQSxjQUFrQk0sQ0FBQ0E7UUFDbkJOLGdDQUFRQSxHQUFSQSxjQUFrQk8sQ0FBQ0E7UUFJbkJQLHNCQUFJQSwwQ0FBZUE7aUJBQW5CQSxjQUFzQ1EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7OztXQUFBUjtRQUNyREEsb0JBQUNBO0lBQURBLENBaEJBLEFBZ0JDQSxFQWhCMkIsV0FBVyxFQWdCdEM7SUF3Q08scUJBQWEsaUJBeENwQjtJQUVEO1FBQ0NTLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ2xCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUFnQ3NCLDBCQUFrQixzQkFoQ3hDO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFDcEQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNyRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBRXJELE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RFLEdBQUcsRUFBRTtZQUNKLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN2QyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFBO1lBQzFDLENBQUM7WUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2YsQ0FBQztRQUNELFVBQVUsRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRTtRQUMvRCxHQUFHLEVBQUU7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3QkFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsVUFBVSxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBR3VDIiwiZmlsZSI6ImNvbXBvbmVudC9jdXN0b21lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiaG9yY3J1eC1ldmVudFwiO1xyXG5cclxuY2xhc3MgQ3VzdG9tRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRob3N0OiBIVE1MRWxlbWVudDtcclxuXHRzaGFkb3dSb290OiBEb2N1bWVudEZyYWdtZW50O1xyXG5cdHByb3BlcnRpZXM6IEFycmF5PHN0cmluZz47XHJcblx0bGF6eTogYm9vbGVhbjtcclxuXHRldmVudEJ1czogRXZlbnRCdXM7XHJcblx0Y3JlYXRlU2hhZG93Um9vdCgpOiBEb2N1bWVudEZyYWdtZW50IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjYW5BY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkRlYWN0aXZhdGUoKTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjcmVhdGVkKCk6IHZvaWQge31cclxuXHRhdHRhY2hlZCgpOiB2b2lkIHt9XHJcblx0ZGV0YWNoZWQoKTogdm9pZCB7fVx0XHJcblx0b25DcmVhdGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkF0dGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkRldGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRnZXQgcGFyZW50Q29tcG9uZW50KCk6IEN1c3RvbUVsZW1lbnQge3JldHVybiB2b2lkIDB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEN1c3RvbUVsZW1lbnREdW1teSgpIHtcclxuXHR0aGlzLmxhenkgPSBmYWxzZTtcclxuXHR0aGlzLnByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMgfHwgW107XHJcblx0dGhpcy5vbkNyZWF0ZWQgPSB0aGlzLm9uQ3JlYXRlZCB8fCBbXTtcclxuXHR0aGlzLm9uQXR0YWNoZWQgPSB0aGlzLm9uQXR0YWNoZWQgfHwgW107XHJcblx0dGhpcy5vbkRldGFjaGVkID0gdGhpcy5vbkRldGFjaGVkIHx8IFtdO1xyXG59XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuQWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnKTtcclxufVxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNhbkRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnKTtcclxufVxyXG5cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jcmVhdGVkID0gZnVuY3Rpb24oKSB7fVxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmF0dGFjaGVkID0gZnVuY3Rpb24oKSB7fVxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmRldGFjaGVkID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUsIFwicGFyZW50Q29tcG9uZW50XCIsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCBwYXJlbnQgPSB0aGlzLmhvc3QgfHwgdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0d2hpbGUgKCEoXCJwYXJlbnRDb21wb25lbnRcIiBpbiBwYXJlbnQpKSB7XHJcblx0XHRcdHBhcmVudCA9IHBhcmVudC5ob3N0IHx8IHBhcmVudC5wYXJlbnROb2RlXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBwYXJlbnQ7XHJcblx0fSxcclxuXHRlbnVtZXJhYmxlOiB0cnVlXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUsIFwiZXZlbnRCdXNcIiwge1xyXG5cdGdldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2V2ZW50QnVzIHx8ICh0aGlzLl9ldmVudEJ1cyA9IG5ldyBFdmVudEJ1cygpKTtcclxuXHR9LFxyXG5cdGVudW1lcmFibGU6IHRydWVcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IHtDdXN0b21FbGVtZW50LCBDdXN0b21FbGVtZW50RHVtbXl9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9