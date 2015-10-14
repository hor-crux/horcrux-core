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
        CustomAttribute.precedence = 9;
        return CustomAttribute;
    })();
    exports.CustomAttribute = CustomAttribute;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS9hdHRyaWJ1dGUudHMiXSwibmFtZXMiOlsiQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlIiwiQ3VzdG9tQXR0cmlidXRlLmNvbnN0cnVjdG9yIiwiQ3VzdG9tQXR0cmlidXRlLmNyZWF0ZUJpbmRpbmciLCJDdXN0b21BdHRyaWJ1dGUuaW5pdCJdLCJtYXBwaW5ncyI6IjtJQUdBLElBQUksVUFBVSxHQUEwQyxFQUFFO0lBd0J0QixrQkFBVSxjQXhCWTtJQUUxRCxtQkFBbUIsTUFBVTtRQUM1QkEsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFDcERBLENBQUNBO0lBb0JPLGlCQUFTLGFBcEJoQjtJQUVEO1FBTUNDLHlCQUFzQkEsSUFBU0EsRUFBWUEsSUFBU0EsRUFBWUEsS0FBV0E7WUFBckRDLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1lBQVlBLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1lBQVlBLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO1lBQzFFQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtZQUNyQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDYkEsQ0FBQ0E7UUFFU0QsdUNBQWFBLEdBQXZCQTtZQUNDRSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxzQkFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtRQUM1RUEsQ0FBQ0E7UUFFU0YsOEJBQUlBLEdBQWRBLGNBQXVCRyxDQUFDQTs7UUFiakJILDBCQUFVQSxHQUFHQSxDQUFDQSxDQUFDQTtRQWN2QkEsc0JBQUNBO0lBQURBLENBaEJBLEFBZ0JDQSxJQUFBO0lBRWtCLHVCQUFlLG1CQUZqQztJQUUrQyIsImZpbGUiOiJhdHRyaWJ1dGUvYXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluZGluZywgTW9kZWxCaW5kaW5nIH0gZnJvbSAnLi4vYmluZC9iaW5kaW5nJ1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vYmluZC9tb2RlbCdcclxuXHJcbmxldCBBdHRyaWJ1dGVzOiB7W2tleTpzdHJpbmddOnR5cGVvZiBDdXN0b21BdHRyaWJ1dGV9ID0ge31cclxuXHJcbmZ1bmN0aW9uIEF0dHJpYnV0ZSh0YXJnZXQ6YW55KTp2b2lkIHtcclxuXHRBdHRyaWJ1dGVzW3RhcmdldC5zZWxlY3Rvci50b0xvd2VyQ2FzZSgpXSA9IHRhcmdldDtcclxufVxyXG5cclxuY2xhc3MgQ3VzdG9tQXR0cmlidXRlIHtcclxuXHRcclxuXHRzdGF0aWMgcHJlY2VkZW5jZSA9IDk7XHJcblx0XHJcblx0cHJvdGVjdGVkIGJpbmRpbmc6IEJpbmRpbmc7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIG5vZGU6Tm9kZSwgcHJvdGVjdGVkIGF0dHI6QXR0ciwgcHJvdGVjdGVkIG1vZGVsOk1vZGVsKSB7XHJcblx0XHR0aGlzLmNyZWF0ZUJpbmRpbmcoKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgY3JlYXRlQmluZGluZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmluZGluZyA9IG5ldyBNb2RlbEJpbmRpbmcodGhpcy5hdHRyLCB0aGlzLm1vZGVsKS5nZXRDb3VudGVyQmluZGluZygpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgaW5pdCgpOiBhbnkge307XHJcbn1cclxuXHJcbmV4cG9ydCB7QXR0cmlidXRlLCBDdXN0b21BdHRyaWJ1dGUsIEF0dHJpYnV0ZXN9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==