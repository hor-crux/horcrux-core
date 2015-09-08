var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "./component/component"], function (require, exports, component_1) {
    var Greeting = (function () {
        function Greeting() {
            this.list = [1, 2, 3];
        }
        Greeting = __decorate([
            component_1.default({
                namespace: "my",
            })
        ], Greeting);
        return Greeting;
    })();
});
//# sourceMappingURL=greeting.js.map