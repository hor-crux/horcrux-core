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
define(["require", "exports", "./component/component"], function (require, exports, component_1) {
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
            this.foo = "hello";
        }
        App.prototype.attachedCallback = function () {
            document.body.removeAttribute("unresolved");
        };
        App.prototype.alert = function () {
            window.alert(this.foo);
        };
        App = __decorate([
            component_1.default({
                namespace: "my",
            })
        ], App);
        return App;
    })(CustomElement);
});
//# sourceMappingURL=app.js.map