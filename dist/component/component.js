define(["require", "exports", "../util/loadhtml", "./register/register"], function (require, exports, loadhtml_1, register_1) {
    //TODO Wrap Decorator in Function - possible properties: template:boolean
    function Component(target) {
        loadhtml_1.default(target.selector)
            .then(function (template) {
            return register_1.register(target.selector, target, template);
        });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Component;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0lBSUEseUVBQXlFO0lBQ3pFLG1CQUFrQyxNQUFNO1FBRXZDQSxrQkFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7YUFDeEJBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBO1lBQ2JBLE1BQU1BLENBQUNBLG1CQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxNQUFNQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFBQTtRQUNuREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFORDsrQkFNQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudC9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZGh0bWwgZnJvbSBcIi4uL3V0aWwvbG9hZGh0bWxcIlxyXG5pbXBvcnQge3JlZ2lzdGVyfSBmcm9tIFwiLi9yZWdpc3Rlci9yZWdpc3RlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudE9wdGlvbnMsIElDb21wb25lbnRPcHRpb25zfSBmcm9tIFwiLi9vcHRpb25zXCJcclxuXHJcbi8vVE9ETyBXcmFwIERlY29yYXRvciBpbiBGdW5jdGlvbiAtIHBvc3NpYmxlIHByb3BlcnRpZXM6IHRlbXBsYXRlOmJvb2xlYW5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KHRhcmdldCkge1xyXG5cdFx0XHJcblx0bG9hZGh0bWwodGFyZ2V0LnNlbGVjdG9yKVxyXG5cdC50aGVuKHRlbXBsYXRlID0+IHtcclxuXHRcdHJldHVybiByZWdpc3Rlcih0YXJnZXQuc2VsZWN0b3IsIHRhcmdldCwgdGVtcGxhdGUpXHJcblx0fSk7XHJcbn1cclxuIFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=