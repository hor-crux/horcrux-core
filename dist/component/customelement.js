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
            while (!!parent && !("parentComponent" in parent)) {
                parent = parent.host || parent.parentNode;
            }
            return parent;
        },
        enumerable: true
    });
    Object.defineProperty(CustomElementDummy.prototype, "ancestors", {
        get: function () {
            var a = [];
            var p = this;
            while (p = p.parentComponent) {
                a.push(p);
            }
            return a;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFFQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBa0J2Q0EsQ0FBQ0E7UUFUQUQsd0NBQWdCQSxHQUFoQkEsY0FBc0NFLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUNwREYsbUNBQVdBLEdBQVhBLGNBQTZCRyxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDM0NILHFDQUFhQSxHQUFiQSxjQUErQkksTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQzdDSiwrQkFBT0EsR0FBUEEsY0FBaUJLLENBQUNBO1FBQ2xCTCxnQ0FBUUEsR0FBUkEsY0FBa0JNLENBQUNBO1FBQ25CTixnQ0FBUUEsR0FBUkEsY0FBa0JPLENBQUNBO1FBSXBCUCxvQkFBQ0E7SUFBREEsQ0FsQkEsQUFrQkNBLEVBbEIyQixXQUFXLEVBa0J0QztJQW9ETyxxQkFBYSxpQkFwRHBCO0lBRUQ7UUFDQ1EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbEJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO0lBQ3pDQSxDQUFDQTtJQTRDc0IsMEJBQWtCLHNCQTVDeEM7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUc7UUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBO0lBRUQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNwRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBQ3JELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFFckQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7UUFDdEUsR0FBRyxFQUFFO1lBQ0osSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDbkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQTtZQUMxQyxDQUFDO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUU7UUFDaEUsR0FBRyxFQUFFO1lBQ0osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ1YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDO1FBQ0QsVUFBVSxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFO1FBQy9ELEdBQUcsRUFBRTtZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHdCQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7SUFHdUMiLCJmaWxlIjoiY29tcG9uZW50L2N1c3RvbWVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCJob3JjcnV4LWV2ZW50XCI7XHJcblxyXG5jbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGhvc3Q6IEhUTUxFbGVtZW50O1xyXG5cdHNoYWRvd1Jvb3Q6IERvY3VtZW50RnJhZ21lbnQ7XHJcblx0cHJvcGVydGllczogQXJyYXk8c3RyaW5nPjtcclxuXHRsYXp5OiBib29sZWFuO1xyXG5cdGV2ZW50QnVzOiBFdmVudEJ1cztcclxuXHRwYXJlbnRDb21wb25lbnQ6IEN1c3RvbUVsZW1lbnQ7XHJcblx0YW5jZXN0b3JzOiBBcnJheTxDdXN0b21FbGVtZW50PjtcclxuXHRcclxuXHRjcmVhdGVTaGFkb3dSb290KCk6IERvY3VtZW50RnJhZ21lbnQge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkFjdGl2YXRlKCk6IFByb21pc2U8YW55PiB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y2FuRGVhY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNyZWF0ZWQoKTogdm9pZCB7fVxyXG5cdGF0dGFjaGVkKCk6IHZvaWQge31cclxuXHRkZXRhY2hlZCgpOiB2b2lkIHt9XHRcclxuXHRvbkNyZWF0ZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uQXR0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uRGV0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBDdXN0b21FbGVtZW50RHVtbXkoKSB7XHJcblx0dGhpcy5sYXp5ID0gZmFsc2U7XHJcblx0dGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IFtdO1xyXG5cdHRoaXMub25DcmVhdGVkID0gdGhpcy5vbkNyZWF0ZWQgfHwgW107XHJcblx0dGhpcy5vbkF0dGFjaGVkID0gdGhpcy5vbkF0dGFjaGVkIHx8IFtdO1xyXG5cdHRoaXMub25EZXRhY2hlZCA9IHRoaXMub25EZXRhY2hlZCB8fCBbXTtcclxufVxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNhbkFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5EZWFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XHJcbn1cclxuXHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY3JlYXRlZCA9IGZ1bmN0aW9uKCkge31cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5hdHRhY2hlZCA9IGZ1bmN0aW9uKCkge31cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5kZXRhY2hlZCA9IGZ1bmN0aW9uKCkge31cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLCBcInBhcmVudENvbXBvbmVudFwiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5ob3N0IHx8IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdHdoaWxlICghIXBhcmVudCAmJiAhKFwicGFyZW50Q29tcG9uZW50XCIgaW4gcGFyZW50KSkge1xyXG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQuaG9zdCB8fCBwYXJlbnQucGFyZW50Tm9kZVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdH0sXHJcblx0ZW51bWVyYWJsZTogdHJ1ZVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLCBcImFuY2VzdG9yc1wiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRsZXQgYSA9IFtdXHJcblx0XHRsZXQgcCA9IHRoaXM7XHJcblx0XHR3aGlsZSAocCA9IHAucGFyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdGEucHVzaChwKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhO1xyXG5cdH0sXHJcblx0ZW51bWVyYWJsZTogdHJ1ZVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLCBcImV2ZW50QnVzXCIsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ldmVudEJ1cyB8fCAodGhpcy5fZXZlbnRCdXMgPSBuZXcgRXZlbnRCdXMoKSk7XHJcblx0fSxcclxuXHRlbnVtZXJhYmxlOiB0cnVlXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCB7Q3VzdG9tRWxlbWVudCwgQ3VzdG9tRWxlbWVudER1bW15fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==