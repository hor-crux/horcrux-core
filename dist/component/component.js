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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0lBS0EsbUJBQWtDLE1BQU07UUFFdkNBLGtCQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTthQUN4QkEsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7WUFDYkEsTUFBTUEsQ0FBQ0Esa0JBQVFBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLEVBQUVBLFFBQVFBLENBQUNBLENBQUFBO1FBQ25EQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQU5EOytCQU1DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L2NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkaHRtbCBmcm9tIFwiLi4vdXRpbC9sb2FkaHRtbFwiXHJcbmltcG9ydCByZWdpc3RlciBmcm9tIFwiLi9yZWdpc3Rlci9yZWdpc3RlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudE9wdGlvbnMsIElDb21wb25lbnRPcHRpb25zfSBmcm9tIFwiLi9vcHRpb25zXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQodGFyZ2V0KSB7XHJcblx0XHRcclxuXHRsb2FkaHRtbCh0YXJnZXQuc2VsZWN0b3IpXHJcblx0LnRoZW4odGVtcGxhdGUgPT4ge1xyXG5cdFx0cmV0dXJuIHJlZ2lzdGVyKHRhcmdldC5zZWxlY3RvciwgdGFyZ2V0LCB0ZW1wbGF0ZSlcclxuXHR9KTtcclxufVxyXG4gXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==