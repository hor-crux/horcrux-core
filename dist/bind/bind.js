define(["require", "exports", "../attribute/attribute", "./model", "../util/visit", "./bindattribute", "./bindnode"], function (require, exports, attribute_1, model_1, visit_1, bindattribute_1, bindnode_1) {
    var regex = /\{\{(.+)\}\}/gm;
    exports.regex = regex;
    function bind(node, model) {
        if (!!node.dontVisit || (typeof node["hasAttribute"] === "function" && node.hasAttribute("dontVisit")))
            return false;
        if (node.attributes) {
            var names = []
                .map.call(node.attributes, function (a) { return a.name; })
                .sort(function (n1, n2) {
                n1 = (attribute_1.Attributes[n1] && attribute_1.Attributes[n1].precedence) || 9;
                n2 = (attribute_1.Attributes[n2] && attribute_1.Attributes[n2].precedence) || 9;
                return n1 - n2;
            });
            names.forEach(function (name) {
                var attr = [].filter.call(node.attributes, function (a) { return a.name === name; })[0];
                bindattribute_1.default(node, attr, model);
            });
        }
        if (!!node.dontVisit || (typeof node["hasAttribute"] === "function" && node.hasAttribute("dontVisit")))
            return false;
        if (node.nodeName.indexOf("-") > -1 && node.nodeName.indexOf("#") === -1)
            return false;
        bindnode_1.default(node, model);
        return true;
    }
    function bindDom(dom, models) {
        var model = new model_1.default(models);
        visit_1.default(dom, function (node) {
            return bind(node, model);
        });
    }
    exports.bindDom = bindDom;
});

//# sourceMappingURL=data:application/json;base64,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QUFBLElBQUlBO1lBQ2RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUFBO1FBQ3pCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVjLGVBQU8sV0FGckI7SUFFc0IiLCJmaWxlIjoiYmluZC9iaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGVzfSBmcm9tIFwiLi4vYXR0cmlidXRlL2F0dHJpYnV0ZVwiXHJcblxyXG5pbXBvcnQge0RvbX0gZnJvbSBcIi4uL3V0aWwvdHlwZXNcIlxyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kZWxcIlxyXG5pbXBvcnQgdmlzaXQgZnJvbSBcIi4uL3V0aWwvdmlzaXRcIlxyXG5pbXBvcnQgYmluZEF0dHJpYnV0ZSBmcm9tIFwiLi9iaW5kYXR0cmlidXRlXCJcclxuaW1wb3J0IGJpbmROb2RlIGZyb20gXCIuL2JpbmRub2RlXCJcclxuXHJcbmxldCByZWdleCA9IC9cXHtcXHsoLispXFx9XFx9L2dtO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGJpbmQobm9kZTpOb2RlLCBtb2RlbDpNb2RlbCk6IGJvb2xlYW4ge1xyXG5cdGlmKCEhKDxhbnk+bm9kZSkuZG9udFZpc2l0IHx8ICh0eXBlb2Ygbm9kZVtcImhhc0F0dHJpYnV0ZVwiXSA9PT0gXCJmdW5jdGlvblwiICYmICg8RWxlbWVudD5ub2RlKS5oYXNBdHRyaWJ1dGUoXCJkb250VmlzaXRcIikpKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFxyXG5cdGlmKG5vZGUuYXR0cmlidXRlcykge1xyXG5cdFx0bGV0IG5hbWVzID0gW11cclxuXHRcdFx0Lm1hcC5jYWxsKG5vZGUuYXR0cmlidXRlcywgZnVuY3Rpb24oYSkge3JldHVybiBhLm5hbWV9KVxyXG5cdFx0XHQuc29ydCgobjEsIG4yKSA9PiB7XHJcblx0XHRcdFx0bjEgPSAoQXR0cmlidXRlc1tuMV0gJiYgQXR0cmlidXRlc1tuMV0ucHJlY2VkZW5jZSkgfHwgOTtcclxuXHRcdFx0XHRuMiA9IChBdHRyaWJ1dGVzW24yXSAmJiBBdHRyaWJ1dGVzW24yXS5wcmVjZWRlbmNlKSB8fCA5O1xyXG5cdFx0XHRcdHJldHVybiBuMS1uMjtcclxuXHRcdFx0fSk7XHJcblx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdFx0bGV0IGF0dHIgPSBbXS5maWx0ZXIuY2FsbChub2RlLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKGEpIHtyZXR1cm4gYS5uYW1lID09PSBuYW1lfSlbMF07XHJcblx0XHRcdGJpbmRBdHRyaWJ1dGUobm9kZSwgYXR0ciwgbW9kZWwpO1xyXG5cdFx0fSlcclxuXHR9XHJcblx0XHJcblx0aWYoISEoPGFueT5ub2RlKS5kb250VmlzaXQgfHwgKHR5cGVvZiBub2RlW1wiaGFzQXR0cmlidXRlXCJdID09PSBcImZ1bmN0aW9uXCIgJiYgKDxFbGVtZW50Pm5vZGUpLmhhc0F0dHJpYnV0ZShcImRvbnRWaXNpdFwiKSkpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcclxuXHRpZihub2RlLm5vZGVOYW1lLmluZGV4T2YoXCItXCIpID4gLTEgJiYgbm9kZS5ub2RlTmFtZS5pbmRleE9mKFwiI1wiKSA9PT0gLTEpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcclxuXHRiaW5kTm9kZShub2RlLCBtb2RlbCk7XHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmREb20oZG9tOkRvbSwgbW9kZWxzOkFycmF5PGFueT4pOiB2b2lkIHtcclxuXHRsZXQgbW9kZWwgPSBuZXcgTW9kZWwobW9kZWxzKTtcclxuXHR2aXNpdChkb20sIG5vZGU9PntcclxuXHRcdHJldHVybiBiaW5kKG5vZGUsIG1vZGVsKVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQge3JlZ2V4LCBiaW5kRG9tfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==