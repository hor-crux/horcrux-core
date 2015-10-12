define(["require", "exports", '../bind/binding'], function (require, exports, binding_1) {
    var Attributes = {};
    exports.Attributes = Attributes;
    function Attribute(target) {
        Attributes[target.selector.toLowerCase()] = target;
    }
    exports.Attribute = Attribute;
    var CustomAttribute = (function () {
        function CustomAttribute(node, attr, model) {
            this.node = node;
            this.attr = attr;
            this.model = model;
            this.createBinding();
            this.init();
        }
        CustomAttribute.prototype.createBinding = function () {
            this.binding = new binding_1.ModelBinding(this.attr, this.model).getCounterBinding();
        };
        CustomAttribute.prototype.init = function () { };
        ;
        return CustomAttribute;
    })();
    exports.CustomAttribute = CustomAttribute;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS9hdHRyaWJ1dGUudHMiXSwibmFtZXMiOlsiQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlLmNvbnN0cnVjdG9yIiwiQ3VzdG9tQXR0cmlidXRlLmNyZWF0ZUJpbmRpbmciLCJDdXN0b21BdHRyaWJ1dGUuaW5pdCJdLCJtYXBwaW5ncyI6IjtJQUdBLElBQUksVUFBVSxHQUEwQyxFQUFFO0lBcUJ0QixrQkFBVSxjQXJCWTtJQUUxRCxtQkFBbUIsTUFBVTtRQUM1QkEsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFDcERBLENBQUNBO0lBaUJPLGlCQUFTLGFBakJoQjtJQUVEO1FBR0NDLHlCQUFzQkEsSUFBU0EsRUFBWUEsSUFBU0EsRUFBWUEsS0FBV0E7WUFBckRDLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1lBQVlBLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1lBQVlBLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO1lBQzFFQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtZQUNyQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDYkEsQ0FBQ0E7UUFFU0QsdUNBQWFBLEdBQXZCQTtZQUNDRSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxzQkFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtRQUM1RUEsQ0FBQ0E7UUFFU0YsOEJBQUlBLEdBQWRBLGNBQXVCRyxDQUFDQTs7UUFDekJILHNCQUFDQTtJQUFEQSxDQWJBLEFBYUNBLElBQUE7SUFFa0IsdUJBQWUsbUJBRmpDO0lBRStDIiwiZmlsZSI6ImF0dHJpYnV0ZS9hdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaW5kaW5nLCBNb2RlbEJpbmRpbmcgfSBmcm9tICcuLi9iaW5kL2JpbmRpbmcnXHJcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9iaW5kL21vZGVsJ1xyXG5cclxubGV0IEF0dHJpYnV0ZXM6IHtba2V5OnN0cmluZ106dHlwZW9mIEN1c3RvbUF0dHJpYnV0ZX0gPSB7fVxyXG5cclxuZnVuY3Rpb24gQXR0cmlidXRlKHRhcmdldDphbnkpOnZvaWQge1xyXG5cdEF0dHJpYnV0ZXNbdGFyZ2V0LnNlbGVjdG9yLnRvTG93ZXJDYXNlKCldID0gdGFyZ2V0O1xyXG59XHJcblxyXG5jbGFzcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdHByb3RlY3RlZCBiaW5kaW5nOiBCaW5kaW5nO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBub2RlOk5vZGUsIHByb3RlY3RlZCBhdHRyOkF0dHIsIHByb3RlY3RlZCBtb2RlbDpNb2RlbCkge1xyXG5cdFx0dGhpcy5jcmVhdGVCaW5kaW5nKCk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGNyZWF0ZUJpbmRpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJpbmRpbmcgPSBuZXcgTW9kZWxCaW5kaW5nKHRoaXMuYXR0ciwgdGhpcy5tb2RlbCkuZ2V0Q291bnRlckJpbmRpbmcoKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGluaXQoKTogYW55IHt9O1xyXG59XHJcblxyXG5leHBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBBdHRyaWJ1dGVzfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=