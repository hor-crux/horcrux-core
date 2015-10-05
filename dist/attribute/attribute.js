define(["require", "exports"], function (require, exports) {
    var Attributes = {};
    exports.Attributes = Attributes;
    function Attribute(target) {
        Attributes[target.selector.toLowerCase()] = target;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS9hdHRyaWJ1dGUudHMiXSwibmFtZXMiOlsiQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlLmNvbnN0cnVjdG9yIiwiQ3VzdG9tQXR0cmlidXRlLm5ld0pTVmFsdWUiLCJDdXN0b21BdHRyaWJ1dGUubmV3RE9NVmFsdWUiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFJLFVBQVUsR0FBMEMsRUFBRTtJQVl0QixrQkFBVSxjQVpZO0lBRTFELG1CQUFtQixNQUFVO1FBQzVCQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUFRTyxpQkFBUyxhQVJoQjtJQUVEO1FBQ0NDLHlCQUFzQkEsSUFBVUEsRUFBWUEsSUFBaUNBLEVBQVlBLEtBQVVBLEVBQVlBLElBQVlBO1lBQXJHQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtZQUFZQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUE2QkE7WUFBWUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBS0E7WUFBWUEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBUUE7UUFBR0EsQ0FBQ0E7UUFDL0hELG9DQUFVQSxHQUFWQSxVQUFXQSxLQUFTQSxJQUFTRSxDQUFDQTtRQUM5QkYscUNBQVdBLEdBQVhBLFVBQVlBLEtBQVNBLElBQVNHLENBQUNBO1FBQ2hDSCxzQkFBQ0E7SUFBREEsQ0FKQSxBQUlDQSxJQUFBO0lBRWtCLHVCQUFlLG1CQUZqQztJQUUrQyIsImZpbGUiOiJhdHRyaWJ1dGUvYXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEF0dHJpYnV0ZXM6IHtba2V5OnN0cmluZ106dHlwZW9mIEN1c3RvbUF0dHJpYnV0ZX0gPSB7fVxuXG5mdW5jdGlvbiBBdHRyaWJ1dGUodGFyZ2V0OmFueSk6dm9pZCB7XG5cdEF0dHJpYnV0ZXNbdGFyZ2V0LnNlbGVjdG9yLnRvTG93ZXJDYXNlKCldID0gdGFyZ2V0O1xufVxuXG5jbGFzcyBDdXN0b21BdHRyaWJ1dGUge1xuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbm9kZT86Tm9kZSwgcHJvdGVjdGVkIGF0dHI/OntuYW1lOnN0cmluZywgdmFsdWU6c3RyaW5nfSwgcHJvdGVjdGVkIG1vZGVsPzphbnksIHByb3RlY3RlZCBwYXRoPzpzdHJpbmcpIHt9XG5cdG5ld0pTVmFsdWUodmFsdWU6YW55KTogdm9pZCB7fVxuXHRuZXdET01WYWx1ZSh2YWx1ZTphbnkpOiB2b2lkIHt9XG59XG5cbmV4cG9ydCB7QXR0cmlidXRlLCBDdXN0b21BdHRyaWJ1dGUsIEF0dHJpYnV0ZXN9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
