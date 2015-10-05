define(["require", "exports", "../util/loadhtml", "./register/register"], function (require, exports, loadhtml_1, register_1) {
    function Component(target) {
        loadhtml_1.default(target.selector)
            .then(function (template) {
            return register_1.default(target.selector, target, template);
        });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Component;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0lBS0EsbUJBQWtDLE1BQU07UUFFdkNBLGtCQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTthQUN4QkEsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7WUFDYkEsTUFBTUEsQ0FBQ0Esa0JBQVFBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLEVBQUVBLFFBQVFBLENBQUNBLENBQUFBO1FBQ25EQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQU5EOytCQU1DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L2NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkaHRtbCBmcm9tIFwiLi4vdXRpbC9sb2FkaHRtbFwiXG5pbXBvcnQgcmVnaXN0ZXIgZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXJcIjtcbmltcG9ydCB7Q29tcG9uZW50T3B0aW9ucywgSUNvbXBvbmVudE9wdGlvbnN9IGZyb20gXCIuL29wdGlvbnNcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCh0YXJnZXQpIHtcblx0XHRcblx0bG9hZGh0bWwodGFyZ2V0LnNlbGVjdG9yKVxuXHQudGhlbih0ZW1wbGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHJlZ2lzdGVyKHRhcmdldC5zZWxlY3RvciwgdGFyZ2V0LCB0ZW1wbGF0ZSlcblx0fSk7XG59XG4gXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
