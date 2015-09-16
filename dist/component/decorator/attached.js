define(["require", "exports"], function (require, exports) {
    function atached(target, key, descriptor) {
        target['attachedCallback'] = target[key];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = atached;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9kZWNvcmF0b3IvYXR0YWNoZWQudHMiXSwibmFtZXMiOlsiYXRhY2hlZCJdLCJtYXBwaW5ncyI6IjtJQUFBLGlCQUFnQyxNQUFVLEVBQUUsR0FBVSxFQUFFLFVBQWM7UUFDckVBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDMUNBLENBQUNBO0lBRkQ7NkJBRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQvZGVjb3JhdG9yL2F0dGFjaGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXRhY2hlZCh0YXJnZXQ6YW55LCBrZXk6c3RyaW5nLCBkZXNjcmlwdG9yOmFueSk6IHZvaWQge1xyXG5cdHRhcmdldFsnYXR0YWNoZWRDYWxsYmFjayddID0gdGFyZ2V0W2tleV07XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=