define(["require", "exports"], function (require, exports) {
    function created(target, key, descriptor) {
        target['createdCallback'] = target[key];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = created;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9kZWNvcmF0b3IvY3JlYXRlZC50cyJdLCJuYW1lcyI6WyJjcmVhdGVkIl0sIm1hcHBpbmdzIjoiO0lBQUEsaUJBQWdDLE1BQVUsRUFBRSxHQUFVLEVBQUUsVUFBYztRQUNyRUEsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUFGRDs2QkFFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudC9kZWNvcmF0b3IvY3JlYXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZWQodGFyZ2V0OmFueSwga2V5OnN0cmluZywgZGVzY3JpcHRvcjphbnkpOiB2b2lkIHtcclxuXHR0YXJnZXRbJ2NyZWF0ZWRDYWxsYmFjayddID0gdGFyZ2V0W2tleV07XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=