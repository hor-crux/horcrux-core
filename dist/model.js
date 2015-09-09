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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLnRzIl0sIm5hbWVzIjpbIk1vZGVsIiwiTW9kZWwuY29uc3RydWN0b3IiLCJNb2RlbC5uZXdKU1ZhbHVlIiwiTW9kZWwubmV3RG9tVmFsdWUiLCJNb2RlbC5yZWdpc3RlciIsIklucHV0TW9kZWwiLCJJbnB1dE1vZGVsLmNvbnN0cnVjdG9yIiwiSW5wdXRNb2RlbC5uZXdKU1ZhbHVlIiwiSW5wdXRNb2RlbC5uZXdET01WYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFFQTtRQUNvQkEseUJBQWVBO1FBS2xDQSxlQUFZQSxJQUFTQSxFQUFFQSxJQUFRQSxFQUFFQSxLQUFTQSxFQUFFQSxJQUFXQTtZQUN0REMsa0JBQU1BLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUFBO1lBQzlCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM1RkEsQ0FBQ0E7UUFFREQsMEJBQVVBLEdBQVZBLFVBQVdBLEdBQU9BO1lBQ2pCRSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUMvQkEsQ0FBQ0E7UUFFREYsMkJBQVdBLEdBQVhBLFVBQVlBLEdBQU9BO1lBQ2xCRyxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNoQ0EsQ0FBQ0E7UUFFTUgsY0FBUUEsR0FBZkEsVUFBZ0JBLElBQVdBLEVBQUVBLEtBQTRCQTtZQUN4REksS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBbkJNSixnQkFBVUEsR0FBMkNBLEVBQUVBLENBQUNBO1FBRmhFQTtZQUFDQSxxQkFBU0E7a0JBc0JUQTtRQUFEQSxZQUFDQTtJQUFEQSxDQXRCQSxBQXNCQ0EsRUFyQm1CLDJCQUFlLEVBcUJsQztJQUVEO1FBQXlCSyw4QkFBZUE7UUFJdkNBLG9CQUFZQSxJQUFxQkEsRUFBRUEsSUFBUUEsRUFBRUEsS0FBU0EsRUFBRUEsSUFBV0E7WUFKcEVDLGlCQXVCQ0E7WUFsQkNBLGtCQUFNQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUh4QkEsWUFBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFLdkJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQUFBLEtBQUtBO2dCQUNuQkEsS0FBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLENBQUNBLENBQUFBO1FBQ0ZBLENBQUNBO1FBRURELCtCQUFVQSxHQUFWQSxVQUFXQSxHQUFPQTtZQUNqQkUsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ2ZBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3RCQSxJQUFJQTtnQkFDZ0JBLElBQUlBLENBQUNBLElBQUtBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBO1FBQzVDQSxDQUFDQTtRQUVERixnQ0FBV0EsR0FBWEEsVUFBWUEsR0FBT0E7WUFDbEJHLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO1lBQ3BCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7UUFDRkgsaUJBQUNBO0lBQURBLENBdkJBLEFBdUJDQSxFQXZCd0IsMkJBQWUsRUF1QnZDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlfSBmcm9tIFwiLi9hdHRyaWJ1dGUvYXR0cmlidXRlXCI7XHJcblxyXG5AQXR0cmlidXRlXHJcbmNsYXNzIE1vZGVsIGV4dGVuZHMgQ3VzdG9tQXR0cmlidXRlIHtcclxuXHRzdGF0aWMgc3RyYXRlZ2llczoge1t0eXBlOnN0cmluZ106dHlwZW9mIEN1c3RvbUF0dHJpYnV0ZX0gPSB7fTtcclxuXHRcclxuXHRwcml2YXRlIHN0cmF0ZWd5OkN1c3RvbUF0dHJpYnV0ZTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihub2RlOk5vZGUsIGF0dHI6YW55LCBtb2RlbDphbnksIHBhdGg6c3RyaW5nKSB7XHJcblx0XHRzdXBlcihub2RlLCBhdHRyLCBtb2RlbCwgcGF0aClcclxuXHRcdHRoaXMuc3RyYXRlZ3kgPSBuZXcgTW9kZWwuc3RyYXRlZ2llc1tub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHR9XHJcblx0XHJcblx0bmV3SlNWYWx1ZSh2YWw6YW55KTp2b2lkIHtcclxuXHRcdHRoaXMuc3RyYXRlZ3kubmV3SlNWYWx1ZSh2YWwpO1xyXG5cdH1cclxuXHRcclxuXHRuZXdEb21WYWx1ZSh2YWw6YW55KTp2b2lkIHtcclxuXHRcdHRoaXMuc3RyYXRlZ3kubmV3RE9NVmFsdWUodmFsKTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIHJlZ2lzdGVyKHR5cGU6c3RyaW5nLCBtb2RlbDp0eXBlb2YgQ3VzdG9tQXR0cmlidXRlKTp2b2lkIHtcclxuXHRcdE1vZGVsLnN0cmF0ZWdpZXNbdHlwZS50b0xvd2VyQ2FzZSgpXSA9IG1vZGVsO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW5wdXRNb2RlbCBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0XHJcblx0cHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XHJcblx0XHJcblx0Y29uc3RydWN0b3Iobm9kZTpIVE1MSW5wdXRFbGVtZW50LCBhdHRyOmFueSwgbW9kZWw6YW55LCBwYXRoOnN0cmluZykge1xyXG5cdFx0c3VwZXIobm9kZSwgYXR0ciwgbW9kZWwsIHBhdGgpO1xyXG5cdFx0XHJcblx0XHRub2RlLm9ua2V5dXAgPSBldmVudCA9PiB7XHJcblx0XHRcdHRoaXMubmV3RE9NVmFsdWUobm9kZS52YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG5ld0pTVmFsdWUodmFsOmFueSk6dm9pZCB7XHJcblx0XHRpZih0aGlzLnBlbmRpbmcpXHJcblx0XHRcdHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ub2RlKS52YWx1ZSA9IHZhbDtcclxuXHR9XHJcblx0XHJcblx0bmV3RE9NVmFsdWUodmFsOmFueSk6dm9pZCB7XHJcblx0XHR0aGlzLnBlbmRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5tb2RlbFt0aGlzLnBhdGhdID0gdmFsO1xyXG5cdH1cclxufVxyXG5cclxuTW9kZWwucmVnaXN0ZXIoXCJJTlBVVFwiLCBJbnB1dE1vZGVsKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=