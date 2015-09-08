define(["require", "exports"], function (require, exports) {
    var Attributes = {};
    exports.Attributes = Attributes;
    function Attribute(target) {
        Attributes[target.name.toLowerCase()] = target;
    }
    exports.Attribute = Attribute;
    var CustomAttribute = (function () {
        function CustomAttribute(node, attr, model, path) {
            this.node = node;
            this.attr = attr;
            this.model = model;
            this.path = path;
        }
        CustomAttribute.prototype.newJSValue = function (value) { };
        CustomAttribute.prototype.newDOMValue = function (value) { };
        return CustomAttribute;
    })();
    exports.CustomAttribute = CustomAttribute;
});
//# sourceMappingURL=attribute.js.map