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
            while (!!parent && !("parentComponent" in parent)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudC5wYXJlbnRDb21wb25lbnQiLCJDdXN0b21FbGVtZW50RHVtbXkiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVBO1FBQTRCQSxpQ0FBV0E7UUFBdkNBO1lBQTRCQyw4QkFBV0E7UUFnQnZDQSxDQUFDQTtRQVZBRCx3Q0FBZ0JBLEdBQWhCQSxjQUFzQ0UsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQ3BERixtQ0FBV0EsR0FBWEEsY0FBNkJHLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUMzQ0gscUNBQWFBLEdBQWJBLGNBQStCSSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDN0NKLCtCQUFPQSxHQUFQQSxjQUFpQkssQ0FBQ0E7UUFDbEJMLGdDQUFRQSxHQUFSQSxjQUFrQk0sQ0FBQ0E7UUFDbkJOLGdDQUFRQSxHQUFSQSxjQUFrQk8sQ0FBQ0E7UUFJbkJQLHNCQUFJQSwwQ0FBZUE7aUJBQW5CQSxjQUFzQ1EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7OztXQUFBUjtRQUNyREEsb0JBQUNBO0lBQURBLENBaEJBLEFBZ0JDQSxFQWhCMkIsV0FBVyxFQWdCdEM7SUF3Q08scUJBQWEsaUJBeENwQjtJQUVEO1FBQ0NTLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ2xCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUFnQ3NCLDBCQUFrQixzQkFoQ3hDO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFDcEQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNyRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBRXJELE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RFLEdBQUcsRUFBRTtZQUNKLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ25ELE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUE7WUFDMUMsQ0FBQztZQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO1FBQ0QsVUFBVSxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFO1FBQy9ELEdBQUcsRUFBRTtZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHdCQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7SUFHdUMiLCJmaWxlIjoiY29tcG9uZW50L2N1c3RvbWVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCJob3JjcnV4LWV2ZW50XCI7XHJcblxyXG5jbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGhvc3Q6IEhUTUxFbGVtZW50O1xyXG5cdHNoYWRvd1Jvb3Q6IERvY3VtZW50RnJhZ21lbnQ7XHJcblx0cHJvcGVydGllczogQXJyYXk8c3RyaW5nPjtcclxuXHRsYXp5OiBib29sZWFuO1xyXG5cdGV2ZW50QnVzOiBFdmVudEJ1cztcclxuXHRjcmVhdGVTaGFkb3dSb290KCk6IERvY3VtZW50RnJhZ21lbnQge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkFjdGl2YXRlKCk6IFByb21pc2U8YW55PiB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y2FuRGVhY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNyZWF0ZWQoKTogdm9pZCB7fVxyXG5cdGF0dGFjaGVkKCk6IHZvaWQge31cclxuXHRkZXRhY2hlZCgpOiB2b2lkIHt9XHRcclxuXHRvbkNyZWF0ZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uQXR0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uRGV0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdGdldCBwYXJlbnRDb21wb25lbnQoKTogQ3VzdG9tRWxlbWVudCB7cmV0dXJuIHZvaWQgMH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ3VzdG9tRWxlbWVudER1bW15KCkge1xyXG5cdHRoaXMubGF6eSA9IGZhbHNlO1xyXG5cdHRoaXMucHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyB8fCBbXTtcclxuXHR0aGlzLm9uQ3JlYXRlZCA9IHRoaXMub25DcmVhdGVkIHx8IFtdO1xyXG5cdHRoaXMub25BdHRhY2hlZCA9IHRoaXMub25BdHRhY2hlZCB8fCBbXTtcclxuXHR0aGlzLm9uRGV0YWNoZWQgPSB0aGlzLm9uRGV0YWNoZWQgfHwgW107XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcblxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuYXR0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuZGV0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZSwgXCJwYXJlbnRDb21wb25lbnRcIiwge1xyXG5cdGdldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMuaG9zdCB8fCB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHR3aGlsZSAoISFwYXJlbnQgJiYgIShcInBhcmVudENvbXBvbmVudFwiIGluIHBhcmVudCkpIHtcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50Lmhvc3QgfHwgcGFyZW50LnBhcmVudE5vZGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9LFxyXG5cdGVudW1lcmFibGU6IHRydWVcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZSwgXCJldmVudEJ1c1wiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZXZlbnRCdXMgfHwgKHRoaXMuX2V2ZW50QnVzID0gbmV3IEV2ZW50QnVzKCkpO1xyXG5cdH0sXHJcblx0ZW51bWVyYWJsZTogdHJ1ZVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQge0N1c3RvbUVsZW1lbnQsIEN1c3RvbUVsZW1lbnREdW1teX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=