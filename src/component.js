define(["require", "exports"], function (require, exports) {
    var loadHtml = function (name) {
        if (name) {
            var html = name + ".html!";
            return System.import(html);
        }
        else {
            return Promise.resolve("");
        }
    };
    var register = function (name, target, template) {
        var proto = Object.create(HTMLElement.prototype);
        var t = new target();
        for (var key in t) {
            proto[key] = t[key];
        }
        var createdCallback = function () {
            if (!template)
                return;
            var shadow = this.createShadowRoot();
            var clone = document.importNode(template.content, true);
            shadow.appendChild(clone);
        };
        if (typeof proto.createdCallback === "function") {
            var orig = proto.createdCallback;
            proto.createdCallback = function () {
                createdCallback.call(this);
                orig.call(this);
            };
        }
        else {
            proto.createdCallback = createdCallback;
        }
        document.registerElement(name, {
            prototype: proto
        });
    };
    var ComponentDecorator = function (opt) {
        return function (target) {
            var html = opt.template;
            var name = ((opt.namespace ? opt.namespace + "-" : "") + target.name).toLowerCase();
            loadHtml(html)
                .then(function (dom) {
                return register(name, target, dom.template);
            });
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentDecorator;
});
//# sourceMappingURL=component.js.map