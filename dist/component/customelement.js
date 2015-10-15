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
        CustomElement.prototype.canDeactivate = function (newComponent, args) { return void 0; };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFFQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBa0J2Q0EsQ0FBQ0E7UUFUQUQsd0NBQWdCQSxHQUFoQkEsY0FBc0NFLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUNwREYsbUNBQVdBLEdBQVhBLGNBQTZCRyxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDM0NILHFDQUFhQSxHQUFiQSxVQUFjQSxZQUFvQkEsRUFBRUEsSUFBUUEsSUFBaUJJLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUMzRUosK0JBQU9BLEdBQVBBLGNBQWlCSyxDQUFDQTtRQUNsQkwsZ0NBQVFBLEdBQVJBLGNBQWtCTSxDQUFDQTtRQUNuQk4sZ0NBQVFBLEdBQVJBLGNBQWtCTyxDQUFDQTtRQUlwQlAsb0JBQUNBO0lBQURBLENBbEJBLEFBa0JDQSxFQWxCMkIsV0FBVyxFQWtCdEM7SUFvRE8scUJBQWEsaUJBcERwQjtJQUVEO1FBQ0NRLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ2xCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUE0Q3NCLDBCQUFrQixzQkE1Q3hDO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFDcEQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNyRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBRXJELE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RFLEdBQUcsRUFBRTtZQUNKLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ25ELE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUE7WUFDMUMsQ0FBQztZQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDZixDQUFDO1FBQ0QsVUFBVSxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFO1FBQ2hFLEdBQUcsRUFBRTtZQUNKLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUNWLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7WUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUNELFVBQVUsRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRTtRQUMvRCxHQUFHLEVBQUU7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3QkFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsVUFBVSxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBR3VDIiwiZmlsZSI6ImNvbXBvbmVudC9jdXN0b21lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiaG9yY3J1eC1ldmVudFwiO1xyXG5cclxuY2xhc3MgQ3VzdG9tRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRob3N0OiBIVE1MRWxlbWVudDtcclxuXHRzaGFkb3dSb290OiBEb2N1bWVudEZyYWdtZW50O1xyXG5cdHByb3BlcnRpZXM6IEFycmF5PHN0cmluZz47XHJcblx0bGF6eTogYm9vbGVhbjtcclxuXHRldmVudEJ1czogRXZlbnRCdXM7XHJcblx0cGFyZW50Q29tcG9uZW50OiBDdXN0b21FbGVtZW50O1xyXG5cdGFuY2VzdG9yczogQXJyYXk8Q3VzdG9tRWxlbWVudD47XHJcblx0XHJcblx0Y3JlYXRlU2hhZG93Um9vdCgpOiBEb2N1bWVudEZyYWdtZW50IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjYW5BY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkRlYWN0aXZhdGUobmV3Q29tcG9uZW50OiBzdHJpbmcsIGFyZ3M6YW55KTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjcmVhdGVkKCk6IHZvaWQge31cclxuXHRhdHRhY2hlZCgpOiB2b2lkIHt9XHJcblx0ZGV0YWNoZWQoKTogdm9pZCB7fVx0XHJcblx0b25DcmVhdGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkF0dGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkRldGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxufVxyXG5cclxuZnVuY3Rpb24gQ3VzdG9tRWxlbWVudER1bW15KCkge1xyXG5cdHRoaXMubGF6eSA9IGZhbHNlO1xyXG5cdHRoaXMucHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyB8fCBbXTtcclxuXHR0aGlzLm9uQ3JlYXRlZCA9IHRoaXMub25DcmVhdGVkIHx8IFtdO1xyXG5cdHRoaXMub25BdHRhY2hlZCA9IHRoaXMub25BdHRhY2hlZCB8fCBbXTtcclxuXHR0aGlzLm9uRGV0YWNoZWQgPSB0aGlzLm9uRGV0YWNoZWQgfHwgW107XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcblxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuYXR0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuZGV0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZSwgXCJwYXJlbnRDb21wb25lbnRcIiwge1xyXG5cdGdldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMuaG9zdCB8fCB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHR3aGlsZSAoISFwYXJlbnQgJiYgIShcInBhcmVudENvbXBvbmVudFwiIGluIHBhcmVudCkpIHtcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50Lmhvc3QgfHwgcGFyZW50LnBhcmVudE5vZGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9LFxyXG5cdGVudW1lcmFibGU6IHRydWVcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZSwgXCJhbmNlc3RvcnNcIiwge1xyXG5cdGdldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IGEgPSBbXVxyXG5cdFx0bGV0IHAgPSB0aGlzO1xyXG5cdFx0d2hpbGUgKHAgPSBwLnBhcmVudENvbXBvbmVudCkge1xyXG5cdFx0XHRhLnB1c2gocCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYTtcclxuXHR9LFxyXG5cdGVudW1lcmFibGU6IHRydWVcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZSwgXCJldmVudEJ1c1wiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZXZlbnRCdXMgfHwgKHRoaXMuX2V2ZW50QnVzID0gbmV3IEV2ZW50QnVzKCkpO1xyXG5cdH0sXHJcblx0ZW51bWVyYWJsZTogdHJ1ZVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQge0N1c3RvbUVsZW1lbnQsIEN1c3RvbUVsZW1lbnREdW1teX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=