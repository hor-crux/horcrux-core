var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "horcrux-event", "horcrux-di", "../componentregistry", "./prototype"], function (require, exports, horcrux_event_1, horcrux_di_1, componentregistry_1, prototype_1) {
    var eventBus = horcrux_di_1.get(horcrux_event_1.EventBus);
    function register(name, target, template) {
        var prototype = prototype_1.createPrototype(target);
        prototype_1.assignCallback(prototype, "createdCallback", prototype_1.createdCallback, [template, target]);
        prototype_1.assignCallback(prototype, "attachedCallback", prototype_1.attachedCallback, []);
        prototype_1.assignCallback(prototype, "detachedCallback", prototype_1.detachedCallback, []);
        document.registerElement(name, { prototype: prototype });
        componentregistry_1.ComponentRegistry[name] = name;
        eventBus.dispatch(new ElementRegistered(name));
    }
    exports.register = register;
    var ElementRegistered = (function (_super) {
        __extends(ElementRegistered, _super);
        function ElementRegistered() {
            _super.apply(this, arguments);
        }
        return ElementRegistered;
    })(horcrux_event_1.Event);
    exports.ElementRegistered = ElementRegistered;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci50cyJdLCJuYW1lcyI6WyJyZWdpc3RlciIsIkVsZW1lbnRSZWdpc3RlcmVkIiwiRWxlbWVudFJlZ2lzdGVyZWQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1BLElBQUksUUFBUSxHQUFHLGdCQUFHLENBQUMsd0JBQVEsQ0FBQyxDQUFDO0lBRTdCLGtCQUFrQixJQUFZLEVBQUUsTUFBVSxFQUFFLFFBQVk7UUFFdkRBLElBQUlBLFNBQVNBLEdBQUdBLDJCQUFlQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUV4Q0EsMEJBQWNBLENBQUNBLFNBQVNBLEVBQUVBLGlCQUFpQkEsRUFBRUEsMkJBQWVBLEVBQUVBLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1FBQ2xGQSwwQkFBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsa0JBQWtCQSxFQUFFQSw0QkFBZ0JBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1FBQ3BFQSwwQkFBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsa0JBQWtCQSxFQUFFQSw0QkFBZ0JBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1FBRTdEQSxRQUFTQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFDQSxXQUFBQSxTQUFTQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUNwREEscUNBQWlCQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMvQkEsUUFBUUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsaUJBQWlCQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFJTyxnQkFBUSxZQUpmO0lBRUQ7UUFBZ0NDLHFDQUFhQTtRQUE3Q0E7WUFBZ0NDLDhCQUFhQTtRQUFFQSxDQUFDQTtRQUFERCx3QkFBQ0E7SUFBREEsQ0FBL0MsQUFBZ0RBLEVBQWhCLHFCQUFLLEVBQVc7SUFFOUIseUJBQWlCLHFCQUZhO0lBRVoiLCJmaWxlIjoiY29tcG9uZW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEJ1cywgRXZlbnR9IGZyb20gXCJob3JjcnV4LWV2ZW50XCI7XHJcbmltcG9ydCB7Z2V0fSBmcm9tIFwiaG9yY3J1eC1kaVwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnRSZWdpc3RyeX0gZnJvbSBcIi4uL2NvbXBvbmVudHJlZ2lzdHJ5XCJcclxuaW1wb3J0IHtjcmVhdGVQcm90b3R5cGUsIGFzc2lnbkNhbGxiYWNrLCBjcmVhdGVkQ2FsbGJhY2ssIGF0dGFjaGVkQ2FsbGJhY2ssIGRldGFjaGVkQ2FsbGJhY2t9IGZyb20gXCIuL3Byb3RvdHlwZVwiXHJcblxyXG5sZXQgZXZlbnRCdXMgPSBnZXQoRXZlbnRCdXMpO1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXIobmFtZTogc3RyaW5nLCB0YXJnZXQ6YW55LCB0ZW1wbGF0ZTphbnkpOnZvaWQge1xyXG5cdFxyXG5cdGxldCBwcm90b3R5cGUgPSBjcmVhdGVQcm90b3R5cGUodGFyZ2V0KTtcclxuXHRcclxuXHRhc3NpZ25DYWxsYmFjayhwcm90b3R5cGUsIFwiY3JlYXRlZENhbGxiYWNrXCIsIGNyZWF0ZWRDYWxsYmFjaywgW3RlbXBsYXRlLCB0YXJnZXRdKTtcclxuXHRhc3NpZ25DYWxsYmFjayhwcm90b3R5cGUsIFwiYXR0YWNoZWRDYWxsYmFja1wiLCBhdHRhY2hlZENhbGxiYWNrLCBbXSk7XHJcblx0YXNzaWduQ2FsbGJhY2socHJvdG90eXBlLCBcImRldGFjaGVkQ2FsbGJhY2tcIiwgZGV0YWNoZWRDYWxsYmFjaywgW10pO1xyXG5cdFxyXG5cdCg8YW55PiBkb2N1bWVudCkucmVnaXN0ZXJFbGVtZW50KG5hbWUsIHtwcm90b3R5cGV9KTtcclxuXHRDb21wb25lbnRSZWdpc3RyeVtuYW1lXSA9IG5hbWU7XHJcblx0ZXZlbnRCdXMuZGlzcGF0Y2gobmV3IEVsZW1lbnRSZWdpc3RlcmVkKG5hbWUpKTtcclxufVxyXG5cclxuY2xhc3MgRWxlbWVudFJlZ2lzdGVyZWQgZXh0ZW5kcyBFdmVudDxzdHJpbmc+IHt9XHJcblxyXG5leHBvcnQge3JlZ2lzdGVyLCBFbGVtZW50UmVnaXN0ZXJlZH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=