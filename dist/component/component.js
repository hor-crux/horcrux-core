define(["require", "exports", "../util/loadhtml", "./register/register"], function (require, exports, loadhtml_1, register_1) {
    //TODO Wrap Decorator in Function - possible properties: template:boolean
    function Component(target) {
        loadhtml_1.default(target.selector)
            .then(function (template) {
            return register_1.default(target.selector, target, template);
        });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Component;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0lBSUEseUVBQXlFO0lBQ3pFLG1CQUFrQyxNQUFNO1FBRXZDQSxrQkFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7YUFDeEJBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBO1lBQ2JBLE1BQU1BLENBQUNBLGtCQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxNQUFNQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFBQTtRQUNuREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFORDsrQkFNQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudC9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZGh0bWwgZnJvbSBcIi4uL3V0aWwvbG9hZGh0bWxcIlxyXG5pbXBvcnQgcmVnaXN0ZXIgZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXJcIjtcclxuaW1wb3J0IHtDb21wb25lbnRPcHRpb25zLCBJQ29tcG9uZW50T3B0aW9uc30gZnJvbSBcIi4vb3B0aW9uc1wiXHJcblxyXG4vL1RPRE8gV3JhcCBEZWNvcmF0b3IgaW4gRnVuY3Rpb24gLSBwb3NzaWJsZSBwcm9wZXJ0aWVzOiB0ZW1wbGF0ZTpib29sZWFuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCh0YXJnZXQpIHtcclxuXHRcdFxyXG5cdGxvYWRodG1sKHRhcmdldC5zZWxlY3RvcilcclxuXHQudGhlbih0ZW1wbGF0ZSA9PiB7XHJcblx0XHRyZXR1cm4gcmVnaXN0ZXIodGFyZ2V0LnNlbGVjdG9yLCB0YXJnZXQsIHRlbXBsYXRlKVxyXG5cdH0pO1xyXG59XHJcbiBcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9