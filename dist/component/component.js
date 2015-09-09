define(["require", "exports", "./loadhtml", "./register", "./options"], function (require, exports, loadhtml_1, register_1, options_1) {
    function ComponentDecorator(opt) {
        opt = new options_1.ComponentOptions(opt);
        return function (target) {
            var html = opt.template ? target.name : void 0;
            ;
            var name = ((opt.namespace ? opt.namespace + "-" : "") + target.name).toLowerCase();
            loadhtml_1.default(html)
                .then(function (dom) {
                return register_1.default(name, target, dom.template);
            });
        };
    }
    ;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentDecorator;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50RGVjb3JhdG9yIl0sIm1hcHBpbmdzIjoiO0lBSUEsNEJBQTRCLEdBQXNCO1FBQ2pEQSxHQUFHQSxHQUFHQSxJQUFJQSwwQkFBZ0JBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBRWhDQSxNQUFNQSxDQUFDQSxVQUFDQSxNQUFNQTtZQUViQSxJQUFJQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUFBQSxDQUFDQTtZQUNoREEsSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsR0FBR0EsR0FBR0EsQ0FBQ0EsU0FBU0EsR0FBR0EsR0FBR0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFFcEZBLGtCQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTtpQkFDYkEsSUFBSUEsQ0FBQ0EsVUFBQUEsR0FBR0E7Z0JBQ1JBLE1BQU1BLENBQUNBLGtCQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFBQTtZQUM1Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0EsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFBQSxDQUFDO0lBR0Y7c0JBQWUsa0JBQWtCLENBQUMiLCJmaWxlIjoiY29tcG9uZW50L2NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkaHRtbCBmcm9tIFwiLi9sb2FkaHRtbFwiXHJcbmltcG9ydCByZWdpc3RlciBmcm9tIFwiLi9yZWdpc3RlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudE9wdGlvbnMsIElDb21wb25lbnRPcHRpb25zfSBmcm9tIFwiLi9vcHRpb25zXCJcclxuXHJcbmZ1bmN0aW9uIENvbXBvbmVudERlY29yYXRvcihvcHQ6IElDb21wb25lbnRPcHRpb25zKTogQ2xhc3NEZWNvcmF0b3Ige1xyXG5cdG9wdCA9IG5ldyBDb21wb25lbnRPcHRpb25zKG9wdCk7XHJcblx0XHJcblx0cmV0dXJuICh0YXJnZXQpID0+IHtcclxuXHRcdFxyXG5cdFx0bGV0IGh0bWwgPSBvcHQudGVtcGxhdGUgPyB0YXJnZXQubmFtZSA6IHZvaWQgMDs7XHJcblx0XHRsZXQgbmFtZSA9ICgob3B0Lm5hbWVzcGFjZSA/IG9wdC5uYW1lc3BhY2UgKyBcIi1cIiA6IFwiXCIpICsgdGFyZ2V0Lm5hbWUpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcclxuXHRcdGxvYWRodG1sKGh0bWwpXHJcblx0XHQudGhlbihkb20gPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVnaXN0ZXIobmFtZSwgdGFyZ2V0LCBkb20udGVtcGxhdGUpXHJcblx0XHR9KTtcclxuXHR9XHJcbn07IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudERlY29yYXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=