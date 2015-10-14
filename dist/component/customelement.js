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
            var p = this.parentComponent;
            do {
                a.push(p);
            } while (p = p.parentComponent);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFFQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBa0J2Q0EsQ0FBQ0E7UUFUQUQsd0NBQWdCQSxHQUFoQkEsY0FBc0NFLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUNwREYsbUNBQVdBLEdBQVhBLGNBQTZCRyxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDM0NILHFDQUFhQSxHQUFiQSxjQUErQkksTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQzdDSiwrQkFBT0EsR0FBUEEsY0FBaUJLLENBQUNBO1FBQ2xCTCxnQ0FBUUEsR0FBUkEsY0FBa0JNLENBQUNBO1FBQ25CTixnQ0FBUUEsR0FBUkEsY0FBa0JPLENBQUNBO1FBSXBCUCxvQkFBQ0E7SUFBREEsQ0FsQkEsQUFrQkNBLEVBbEIyQixXQUFXLEVBa0J0QztJQW9ETyxxQkFBYSxpQkFwRHBCO0lBRUQ7UUFDQ1EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbEJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO0lBQ3pDQSxDQUFDQTtJQTRDc0IsMEJBQWtCLHNCQTVDeEM7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUc7UUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBO0lBRUQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUNwRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBQ3JELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFFckQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7UUFDdEUsR0FBRyxFQUFFO1lBQ0osSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDbkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQTtZQUMxQyxDQUFDO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUU7UUFDaEUsR0FBRyxFQUFFO1lBQ0osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ1YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM3QixHQUFHLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRTtZQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUNELFVBQVUsRUFBRSxJQUFJO0tBQ2hCLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRTtRQUMvRCxHQUFHLEVBQUU7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3QkFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsVUFBVSxFQUFFLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBR3VDIiwiZmlsZSI6ImNvbXBvbmVudC9jdXN0b21lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiaG9yY3J1eC1ldmVudFwiO1xyXG5cclxuY2xhc3MgQ3VzdG9tRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRob3N0OiBIVE1MRWxlbWVudDtcclxuXHRzaGFkb3dSb290OiBEb2N1bWVudEZyYWdtZW50O1xyXG5cdHByb3BlcnRpZXM6IEFycmF5PHN0cmluZz47XHJcblx0bGF6eTogYm9vbGVhbjtcclxuXHRldmVudEJ1czogRXZlbnRCdXM7XHJcblx0cGFyZW50Q29tcG9uZW50OiBDdXN0b21FbGVtZW50O1xyXG5cdGFuY2VzdG9yczogQXJyYXk8Q3VzdG9tRWxlbWVudD47XHJcblx0XHJcblx0Y3JlYXRlU2hhZG93Um9vdCgpOiBEb2N1bWVudEZyYWdtZW50IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjYW5BY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xyXG5cdGNhbkRlYWN0aXZhdGUoKTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcclxuXHRjcmVhdGVkKCk6IHZvaWQge31cclxuXHRhdHRhY2hlZCgpOiB2b2lkIHt9XHJcblx0ZGV0YWNoZWQoKTogdm9pZCB7fVx0XHJcblx0b25DcmVhdGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkF0dGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxuXHRvbkRldGFjaGVkOiBBcnJheTwoc2VsZjpDdXN0b21FbGVtZW50KT0+YW55PjtcclxufVxyXG5cclxuZnVuY3Rpb24gQ3VzdG9tRWxlbWVudER1bW15KCkge1xyXG5cdHRoaXMubGF6eSA9IGZhbHNlO1xyXG5cdHRoaXMucHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyB8fCBbXTtcclxuXHR0aGlzLm9uQ3JlYXRlZCA9IHRoaXMub25DcmVhdGVkIHx8IFtdO1xyXG5cdHRoaXMub25BdHRhY2hlZCA9IHRoaXMub25BdHRhY2hlZCB8fCBbXTtcclxuXHR0aGlzLm9uRGV0YWNoZWQgPSB0aGlzLm9uRGV0YWNoZWQgfHwgW107XHJcbn1cclxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoJycpO1xyXG59XHJcblxyXG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuYXR0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuZGV0YWNoZWQgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZSwgXCJwYXJlbnRDb21wb25lbnRcIiwge1xyXG5cdGdldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMuaG9zdCB8fCB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHR3aGlsZSAoISFwYXJlbnQgJiYgIShcInBhcmVudENvbXBvbmVudFwiIGluIHBhcmVudCkpIHtcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50Lmhvc3QgfHwgcGFyZW50LnBhcmVudE5vZGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9LFxyXG5cdGVudW1lcmFibGU6IHRydWVcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZSwgXCJhbmNlc3RvcnNcIiwge1xyXG5cdGdldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IGEgPSBbXVxyXG5cdFx0bGV0IHAgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcclxuXHRcdGRvIHtcclxuXHRcdFx0YS5wdXNoKHApO1xyXG5cdFx0fSB3aGlsZSAocCA9IHAucGFyZW50Q29tcG9uZW50KTtcclxuXHRcdHJldHVybiBhO1xyXG5cdH0sXHJcblx0ZW51bWVyYWJsZTogdHJ1ZVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLCBcImV2ZW50QnVzXCIsIHtcclxuXHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ldmVudEJ1cyB8fCAodGhpcy5fZXZlbnRCdXMgPSBuZXcgRXZlbnRCdXMoKSk7XHJcblx0fSxcclxuXHRlbnVtZXJhYmxlOiB0cnVlXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCB7Q3VzdG9tRWxlbWVudCwgQ3VzdG9tRWxlbWVudER1bW15fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==