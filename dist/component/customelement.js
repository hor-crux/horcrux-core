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
    Object.defineProperty(CustomElement.prototype, "parentComponent", {
        get: function () {
            var parent = void 0;
            while (!(parent instanceof CustomElementDummy)) {
                parent = parent.host || parent.parentNode;
            }
            return parent;
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudC5wYXJlbnRDb21wb25lbnQiLCJDdXN0b21FbGVtZW50RHVtbXkiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBO1FBQTRCQSxpQ0FBV0E7UUFBdkNBO1lBQTRCQyw4QkFBV0E7UUFldkNBLENBQUNBO1FBWEFELHdDQUFnQkEsR0FBaEJBLGNBQXNDRSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDcERGLG1DQUFXQSxHQUFYQSxjQUE2QkcsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQzNDSCxxQ0FBYUEsR0FBYkEsY0FBK0JJLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUM3Q0osK0JBQU9BLEdBQVBBLGNBQWlCSyxDQUFDQTtRQUNsQkwsZ0NBQVFBLEdBQVJBLGNBQWtCTSxDQUFDQTtRQUNuQk4sZ0NBQVFBLEdBQVJBLGNBQWtCTyxDQUFDQTtRQUtuQlAsc0JBQUlBLDBDQUFlQTtpQkFBbkJBLGNBQXNDUSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7O1dBQUFSO1FBQ3JEQSxvQkFBQ0E7SUFBREEsQ0FmQSxBQWVDQSxFQWYyQixXQUFXLEVBZXRDO0lBZ0NPLHFCQUFhLGlCQWhDcEI7SUFFRDtRQUNDUyxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBd0JzQiwwQkFBa0Isc0JBeEJ4QztJQUNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUc7UUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRztRQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFFRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBQ3BELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFDckQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUVyRCxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7UUFDakUsR0FBRyxFQUFFO1lBQ0osSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDcEIsT0FBTSxDQUFDLENBQUMsTUFBTSxZQUFZLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztnQkFDL0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQTtZQUMxQyxDQUFDO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUM7S0FDRCxDQUFDLENBQUM7SUFHdUMiLCJmaWxlIjoiY29tcG9uZW50L2N1c3RvbWVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGhvc3Q6IEhUTUxFbGVtZW50O1xyXG5cdHNoYWRvd1Jvb3Q6IERvY3VtZW50RnJhZ21lbnQ7XHJcblx0cHJvcGVydGllczogQXJyYXk8c3RyaW5nPjtcclxuXHRjcmVhdGVTaGFkb3dSb290KCk6IERvY3VtZW50RnJhZ21lbnQge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkFjdGl2YXRlKCk6IFByb21pc2U8YW55PiB7cmV0dXJuIHZvaWQgMH07XHJcblx0Y2FuRGVhY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNyZWF0ZWQoKTogdm9pZCB7fVxyXG5cdGF0dGFjaGVkKCk6IHZvaWQge31cclxuXHRkZXRhY2hlZCgpOiB2b2lkIHt9XHRcclxuXHRvbkNyZWF0ZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uQXR0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdG9uRGV0YWNoZWQ6IEFycmF5PChzZWxmOkN1c3RvbUVsZW1lbnQpPT5hbnk+O1xyXG5cdGJlZm9yZUJpbmRpbmc6IEFycmF5PFByb21pc2U8YW55Pj47XHJcblx0Z2V0IHBhcmVudENvbXBvbmVudCgpOiBDdXN0b21FbGVtZW50IHtyZXR1cm4gdm9pZCAwfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDdXN0b21FbGVtZW50RHVtbXkoKSB7XHJcblx0dGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IFtdO1xyXG5cdHRoaXMub25DcmVhdGVkID0gdGhpcy5vbkNyZWF0ZWQgfHwgW107XHJcblx0dGhpcy5vbkF0dGFjaGVkID0gdGhpcy5vbkF0dGFjaGVkIHx8IFtdO1xyXG5cdHRoaXMub25EZXRhY2hlZCA9IHRoaXMub25EZXRhY2hlZCB8fCBbXTtcclxuXHR0aGlzLmJlZm9yZUJpbmRpbmcgPSB0aGlzLmJlZm9yZUJpbmRpbmcgfHwgW107XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcblxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuYXR0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuZGV0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudC5wcm90b3R5cGUsIFwicGFyZW50Q29tcG9uZW50XCIsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCBwYXJlbnQgPSB2b2lkIDA7XHJcblx0XHR3aGlsZSghKHBhcmVudCBpbnN0YW5jZW9mIEN1c3RvbUVsZW1lbnREdW1teSkpIHtcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50Lmhvc3QgfHwgcGFyZW50LnBhcmVudE5vZGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCB7Q3VzdG9tRWxlbWVudCwgQ3VzdG9tRWxlbWVudER1bW15fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==