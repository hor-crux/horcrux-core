var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "./component/component", "./component/visit", "./component/bind"], function (require, exports, component_1, visit_1, bind_1) {
    var Repeat = (function (_super) {
        __extends(Repeat, _super);
        function Repeat() {
            _super.apply(this, arguments);
            this.dontVisit = true;
        }
        Repeat.prototype.attachedCallback = function () {
            var path = this.getAttribute("data").replace(/\{/gm, "").replace(/\}/gm, "");
            var host = this.getHost();
            var data = host[path];
            var contents = this.childNodes;
            var shadow = this.createShadowRoot();
            data.forEach(function (row) {
                Array.prototype.forEach.call(contents, function (node) {
                    var model = {
                        item: row
                    };
                    var cloned = node.cloneNode(true);
                    visit_1.default(cloned, function (node) { bind_1.default(node, model); });
                    shadow.appendChild(cloned);
                });
            });
        };
        Repeat.prototype.getHost = function () {
            var parent = this.parentNode;
            while (!parent.host)
                parent = parent.parentNode;
            return parent.host;
        };
        Repeat = __decorate([
            component_1.default({
                namespace: "ho",
                template: false
            })
        ], Repeat);
        return Repeat;
    })(CustomElement);
});
//# sourceMappingURL=repeat.js.map