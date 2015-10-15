/// <reference path="../typings/tsd" />
define(["require", "exports", "./attribute/attribute", "./component/customelement", "./component/component", "./component/options", "./component/componentregistry", "./component/watch", "./component/register/events", "./bind/binding", "./component/property", "./component/register/register", "./bind/bind", "./bind/model", "./polyfill/all", "observejs", "html"], function (require, exports, attribute_1, customelement_1, component_1, options_1, componentregistry_1, watch_1, events_1, binding_1, property_1, register_1, bind_1, model_1) {
    exports.Attribute = attribute_1.Attribute;
    exports.CustomAttribute = attribute_1.CustomAttribute;
    exports.CustomElement = customelement_1.CustomElementDummy;
    exports.Component = component_1.default;
    exports.ComponentOptions = options_1.ComponentOptions;
    exports.ComponentRegistry = componentregistry_1.ComponentRegistry;
    exports.watch = watch_1.watch;
    exports.ComponentCanBindEvent = events_1.ComponentCanBindEvent;
    exports.Binding = binding_1.Binding;
    exports.ModelBinding = binding_1.ModelBinding;
    exports.Property = property_1.Property;
    exports.register = register_1.register;
    exports.ElementRegistered = register_1.ElementRegistered;
    exports.bindDom = bind_1.bindDom;
    exports.Model = model_1.default;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcmNydXgtY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7O0lBOEJ0QyxpQkFBUztJQUNULHVCQUFlO0lBQ2YscUJBQWE7SUFDYixpQkFBUztJQUVULHdCQUFnQjtJQUNoQix5QkFBaUI7SUFDakIsYUFBSztJQUNMLDZCQUFxQjtJQUNyQixlQUFPO0lBQUUsb0JBQVk7SUFDckIsZ0JBQVE7SUFDUixnQkFBUTtJQUNSLHlCQUFpQjtJQUNqQixlQUFPO0lBQ1AsYUFBSztJQUdMIiwiZmlsZSI6ImhvcmNydXgtY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZFwiIC8+XHJcblxyXG4vLy0tLS0tLS0gZ2VuZXJhbCBpbXBvcnQuIE1vZHVsZXMgZXhwb3NlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IGUuZy4gJ3dpbmRvdydcclxuaW1wb3J0IFwiLi9wb2x5ZmlsbC9hbGxcIlxyXG5pbXBvcnQgXCJvYnNlcnZlanNcIlxyXG5pbXBvcnQgXCJodG1sXCJcclxuXHJcbi8vLS0tLS0tLSBpbXBvcnRzIGZvciBleHBvcnQgb2YgbW9kdWxlcyBtYWluIGZpbGVcclxuaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZX0gZnJvbSBcIi4vYXR0cmlidXRlL2F0dHJpYnV0ZVwiXHJcbmltcG9ydCB7Q3VzdG9tRWxlbWVudER1bW15IGFzIEN1c3RvbUVsZW1lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9jdXN0b21lbGVtZW50XCJcclxuXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50L2NvbXBvbmVudFwiXHJcbmltcG9ydCB7SUNvbXBvbmVudE9wdGlvbnMsIENvbXBvbmVudE9wdGlvbnN9IGZyb20gXCIuL2NvbXBvbmVudC9vcHRpb25zXCJcclxuaW1wb3J0IHtDb21wb25lbnRSZWdpc3RyeX0gZnJvbSBcIi4vY29tcG9uZW50L2NvbXBvbmVudHJlZ2lzdHJ5XCJcclxuXHJcbmltcG9ydCB7d2F0Y2h9IGZyb20gXCIuL2NvbXBvbmVudC93YXRjaFwiIFxyXG5cclxuaW1wb3J0IHtDb21wb25lbnRDYW5CaW5kRXZlbnR9IGZyb20gXCIuL2NvbXBvbmVudC9yZWdpc3Rlci9ldmVudHNcIlxyXG5cclxuaW1wb3J0IHtCaW5kaW5nLCBNb2RlbEJpbmRpbmd9IGZyb20gXCIuL2JpbmQvYmluZGluZ1wiO1xyXG5cclxuaW1wb3J0IHtQcm9wZXJ0eSwgSVByb3BlcnR5fSBmcm9tIFwiLi9jb21wb25lbnQvcHJvcGVydHlcIlxyXG5cclxuaW1wb3J0IHtyZWdpc3RlciwgRWxlbWVudFJlZ2lzdGVyZWR9IGZyb20gXCIuL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3RlclwiXHJcbmltcG9ydCB7YmluZERvbX0gZnJvbSBcIi4vYmluZC9iaW5kXCJcclxuaW1wb3J0IE1vZGVsIGZyb20gXCIuL2JpbmQvbW9kZWxcIlxyXG5pbXBvcnQge0RvbSwgT2JqZWN0QW5kVmFsdWV9IGZyb20gXCIuL3V0aWwvdHlwZXNcIlxyXG5cclxuXHJcbmV4cG9ydCB7XHJcblx0QXR0cmlidXRlLFxyXG5cdEN1c3RvbUF0dHJpYnV0ZSxcclxuXHRDdXN0b21FbGVtZW50LFxyXG5cdENvbXBvbmVudCxcclxuXHRJQ29tcG9uZW50T3B0aW9ucyxcclxuXHRDb21wb25lbnRPcHRpb25zLFxyXG5cdENvbXBvbmVudFJlZ2lzdHJ5LFxyXG5cdHdhdGNoLFxyXG5cdENvbXBvbmVudENhbkJpbmRFdmVudCxcclxuXHRCaW5kaW5nLCBNb2RlbEJpbmRpbmcsXHJcblx0UHJvcGVydHksIElQcm9wZXJ0eSxcclxuXHRyZWdpc3RlcixcclxuXHRFbGVtZW50UmVnaXN0ZXJlZCxcclxuXHRiaW5kRG9tLFxyXG5cdE1vZGVsLFxyXG5cdERvbSxcclxuXHRPYmplY3RBbmRWYWx1ZVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9