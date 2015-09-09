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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS9hdHRyaWJ1dGUudHMiXSwibmFtZXMiOlsiQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlLmNvbnN0cnVjdG9yIiwiQ3VzdG9tQXR0cmlidXRlLm5ld0pTVmFsdWUiLCJDdXN0b21BdHRyaWJ1dGUubmV3RE9NVmFsdWUiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFJLFVBQVUsR0FBMEMsRUFBRTtJQVl0QixrQkFBVSxjQVpZO0lBRTFELG1CQUFtQixNQUFVO1FBQzVCQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFRTyxpQkFBUyxhQVJoQjtJQUVEO1FBQ0NDLHlCQUFzQkEsSUFBVUEsRUFBWUEsSUFBaUNBLEVBQVlBLEtBQVVBLEVBQVlBLElBQVlBO1lBQXJHQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtZQUFZQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUE2QkE7WUFBWUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBS0E7WUFBWUEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBUUE7UUFBR0EsQ0FBQ0E7UUFDL0hELG9DQUFVQSxHQUFWQSxVQUFXQSxLQUFTQSxJQUFTRSxDQUFDQTtRQUM5QkYscUNBQVdBLEdBQVhBLFVBQVlBLEtBQVNBLElBQVNHLENBQUNBO1FBQ2hDSCxzQkFBQ0E7SUFBREEsQ0FKQSxBQUlDQSxJQUFBO0lBRWtCLHVCQUFlLG1CQUZqQztJQUUrQyIsImZpbGUiOiJhdHRyaWJ1dGUvYXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEF0dHJpYnV0ZXM6IHtba2V5OnN0cmluZ106dHlwZW9mIEN1c3RvbUF0dHJpYnV0ZX0gPSB7fVxyXG5cclxuZnVuY3Rpb24gQXR0cmlidXRlKHRhcmdldDphbnkpOnZvaWQge1xyXG5cdEF0dHJpYnV0ZXNbdGFyZ2V0Lm5hbWUudG9Mb3dlckNhc2UoKV0gPSB0YXJnZXQ7XHJcbn1cclxuXHJcbmNsYXNzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIG5vZGU/Ok5vZGUsIHByb3RlY3RlZCBhdHRyPzp7bmFtZTpzdHJpbmcsIHZhbHVlOnN0cmluZ30sIHByb3RlY3RlZCBtb2RlbD86YW55LCBwcm90ZWN0ZWQgcGF0aD86c3RyaW5nKSB7fVxyXG5cdG5ld0pTVmFsdWUodmFsdWU6YW55KTogdm9pZCB7fVxyXG5cdG5ld0RPTVZhbHVlKHZhbHVlOmFueSk6IHZvaWQge31cclxufVxyXG5cclxuZXhwb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZSwgQXR0cmlidXRlc307Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9