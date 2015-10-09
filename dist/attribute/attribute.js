var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../bind/binding'], function (require, exports, binding_1) {
    var Attributes = {};
    exports.Attributes = Attributes;
    function Attribute(target) {
        Attributes[target.selector.toLowerCase()] = target;
    }
    exports.Attribute = Attribute;
    var CustomAttributeBase = (function () {
        function CustomAttributeBase(node, attr, model) {
            this.node = node;
            this.attr = attr;
            this.model = model;
        }
        return CustomAttributeBase;
    })();
    var CustomAttribute = (function (_super) {
        __extends(CustomAttribute, _super);
        function CustomAttribute(node, attr, model) {
            _super.call(this, node, attr, model);
            this.createBinding();
            this.init();
        }
        CustomAttribute.prototype.createBinding = function () {
            this.binding = new binding_1.ModelBinding(this.attr, this.model).getCounterBinding();
        };
        CustomAttribute.prototype.init = function () { };
        ;
        return CustomAttribute;
    })(CustomAttributeBase);
    exports.CustomAttribute = CustomAttribute;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS9hdHRyaWJ1dGUudHMiXSwibmFtZXMiOlsiQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlQmFzZSIsIkN1c3RvbUF0dHJpYnV0ZUJhc2UuY29uc3RydWN0b3IiLCJDdXN0b21BdHRyaWJ1dGUiLCJDdXN0b21BdHRyaWJ1dGUuY29uc3RydWN0b3IiLCJDdXN0b21BdHRyaWJ1dGUuY3JlYXRlQmluZGluZyIsIkN1c3RvbUF0dHJpYnV0ZS5pbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQSxJQUFJLFVBQVUsR0FBMEMsRUFBRTtJQTJCdEIsa0JBQVUsY0EzQlk7SUFFMUQsbUJBQW1CLE1BQVU7UUFDNUJBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBO0lBQ3BEQSxDQUFDQTtJQXVCTyxpQkFBUyxhQXZCaEI7SUFFRDtRQUNDQyw2QkFBc0JBLElBQVNBLEVBQVlBLElBQVNBLEVBQVlBLEtBQVdBO1lBQXJEQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFLQTtZQUFZQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFLQTtZQUFZQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFNQTtRQUFHQSxDQUFDQTtRQUVoRkQsMEJBQUNBO0lBQURBLENBSEEsQUFHQ0EsSUFBQTtJQUVEO1FBQThCRSxtQ0FBbUJBO1FBR2hEQSx5QkFBWUEsSUFBU0EsRUFBRUEsSUFBU0EsRUFBRUEsS0FBV0E7WUFDNUNDLGtCQUFNQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUN6QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7WUFDckJBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQ2JBLENBQUNBO1FBRVNELHVDQUFhQSxHQUF2QkE7WUFDQ0UsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsc0JBQVlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7UUFDNUVBLENBQUNBO1FBRVNGLDhCQUFJQSxHQUFkQSxjQUF1QkcsQ0FBQ0E7O1FBQ3pCSCxzQkFBQ0E7SUFBREEsQ0FkQSxBQWNDQSxFQWQ2QixtQkFBbUIsRUFjaEQ7SUFFa0IsdUJBQWUsbUJBRmpDO0lBRStDIiwiZmlsZSI6ImF0dHJpYnV0ZS9hdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaW5kaW5nLCBNb2RlbEJpbmRpbmcgfSBmcm9tICcuLi9iaW5kL2JpbmRpbmcnXHJcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9iaW5kL21vZGVsJ1xyXG5cclxubGV0IEF0dHJpYnV0ZXM6IHtba2V5OnN0cmluZ106dHlwZW9mIEN1c3RvbUF0dHJpYnV0ZX0gPSB7fVxyXG5cclxuZnVuY3Rpb24gQXR0cmlidXRlKHRhcmdldDphbnkpOnZvaWQge1xyXG5cdEF0dHJpYnV0ZXNbdGFyZ2V0LnNlbGVjdG9yLnRvTG93ZXJDYXNlKCldID0gdGFyZ2V0O1xyXG59XHJcblxyXG5jbGFzcyBDdXN0b21BdHRyaWJ1dGVCYXNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbm9kZTpOb2RlLCBwcm90ZWN0ZWQgYXR0cjpBdHRyLCBwcm90ZWN0ZWQgbW9kZWw6TW9kZWwpIHt9XHJcblx0XHJcbn1cclxuXHJcbmNsYXNzIEN1c3RvbUF0dHJpYnV0ZSBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZUJhc2Uge1xyXG5cdHByb3RlY3RlZCBiaW5kaW5nOiBCaW5kaW5nO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCkge1xyXG5cdFx0c3VwZXIobm9kZSwgYXR0ciwgbW9kZWwpO1xyXG5cdFx0dGhpcy5jcmVhdGVCaW5kaW5nKCk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGNyZWF0ZUJpbmRpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJpbmRpbmcgPSBuZXcgTW9kZWxCaW5kaW5nKHRoaXMuYXR0ciwgdGhpcy5tb2RlbCkuZ2V0Q291bnRlckJpbmRpbmcoKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGluaXQoKTogYW55IHt9O1xyXG59XHJcblxyXG5leHBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBBdHRyaWJ1dGVzfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=