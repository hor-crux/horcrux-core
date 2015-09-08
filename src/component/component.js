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
//# sourceMappingURL=component.js.map