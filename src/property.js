define(["require", "exports"], function (require, exports) {
    var PropertyDecorator = function (target, key) {
        target[key] = null;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PropertyDecorator;
});
//# sourceMappingURL=property.js.map