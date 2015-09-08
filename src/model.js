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
define(["require", "exports", "./attribute/attribute"], function (require, exports, attribute_1) {
    var Model = (function (_super) {
        __extends(Model, _super);
        function Model(node, attr, model, path) {
            _super.call(this, node, attr, model, path);
            this.strategy = new Model.strategies[node.nodeName.toLowerCase()](node, attr, model, path);
        }
        Model.prototype.newJSValue = function (val) {
            this.strategy.newJSValue(val);
        };
        Model.prototype.newDomValue = function (val) {
            this.strategy.newDOMValue(val);
        };
        Model.register = function (type, model) {
            Model.strategies[type.toLowerCase()] = model;
        };
        Model.strategies = {};
        Model = __decorate([
            attribute_1.Attribute
        ], Model);
        return Model;
    })(attribute_1.CustomAttribute);
    var InputModel = (function (_super) {
        __extends(InputModel, _super);
        function InputModel(node, attr, model, path) {
            var _this = this;
            _super.call(this, node, attr, model, path);
            this.pending = false;
            node.onkeyup = function (event) {
                _this.newDOMValue(node.value);
            };
        }
        InputModel.prototype.newJSValue = function (val) {
            if (this.pending)
                this.pending = false;
            else
                this.node.value = val;
        };
        InputModel.prototype.newDOMValue = function (val) {
            this.pending = true;
            this.model[this.path] = val;
        };
        return InputModel;
    })(attribute_1.CustomAttribute);
    Model.register("INPUT", InputModel);
});
//# sourceMappingURL=model.js.map