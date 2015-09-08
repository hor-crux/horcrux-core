define(["require", "exports", "./visit", "./bind"], function (require, exports, visit_1, bind_1) {
    function createProto(target) {
        var proto = Object.create(HTMLElement.prototype);
        var t = new target();
        for (var key in t) {
            proto[key] = t[key];
        }
        return proto;
    }
    function createdCallback(template) {
        var _this = this;
        if (!template)
            return;
        var shadow = this.createShadowRoot();
        var clone = document.importNode(template.content, true);
        shadow.appendChild(clone);
        visit_1.default(shadow, function (node) { bind_1.default(node, _this); });
    }
    function assignCallback(target, key, cb, args) {
        if (args === void 0) { args = []; }
        var original = target[key];
        target[key] = function () {
            cb.apply(this, args);
            typeof original === "function" ? original.apply(this, arguments) : '';
        };
    }
    function register(name, target, template) {
        var prototype = createProto(target);
        assignCallback(prototype, "createdCallback", createdCallback, [template]);
        document.registerElement(name, { prototype: prototype });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = register;
});
//# sourceMappingURL=register.js.map