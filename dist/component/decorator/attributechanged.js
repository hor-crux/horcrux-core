define(["require", "exports"], function (require, exports) {
    function attributeChanged(target, key, descriptor) {
        target['attributeChangedCallback'] = target[key];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = attributeChanged;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9kZWNvcmF0b3IvYXR0cmlidXRlY2hhbmdlZC50cyJdLCJuYW1lcyI6WyJhdHRyaWJ1dGVDaGFuZ2VkIl0sIm1hcHBpbmdzIjoiO0lBQUEsMEJBQXlDLE1BQVUsRUFBRSxHQUFVLEVBQUUsVUFBYztRQUM5RUEsTUFBTUEsQ0FBQ0EsMEJBQTBCQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFGRDtzQ0FFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudC9kZWNvcmF0b3IvYXR0cmlidXRlY2hhbmdlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dHJpYnV0ZUNoYW5nZWQodGFyZ2V0OmFueSwga2V5OnN0cmluZywgZGVzY3JpcHRvcjphbnkpOiB2b2lkIHtcblx0dGFyZ2V0WydhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXSA9IHRhcmdldFtrZXldO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
