define(["require", "exports", "./model", "../util/visit", "./bindattribute", "./bindnode"], function (require, exports, model_1, visit_1, bindattribute_1, bindnode_1) {
    var regex = /\{\{(.+)\}\}/gm;
    exports.regex = regex;
    function bind(node, model) {
        if (node.attributes) {
            Array.prototype.forEach.call(node.attributes, function (attr) {
                bindattribute_1.default(node, attr, model);
            });
        }
        if (!!node.dontVisit)
            return;
        bindnode_1.default(node, model);
    }
    function bindDom(dom, models) {
        var model = new model_1.default(models);
        visit_1.default(dom, function (node) {
            bind(node, model);
        });
    }
    exports.bindDom = bindDom;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZC50cyJdLCJuYW1lcyI6WyJiaW5kIiwiYmluZERvbSJdLCJtYXBwaW5ncyI6IjtJQU1BLElBQUksS0FBSyxHQUFHLGdCQUFnQjtJQXFCcEIsYUFBSyxTQXJCZ0I7SUFHN0IsY0FBYyxJQUFTLEVBQUUsS0FBVztRQUNuQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLFVBQUFBLElBQUlBO2dCQUNqREEsdUJBQWFBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2xDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNuQkEsTUFBTUEsQ0FBQ0E7UUFDUkEsa0JBQVFBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVELGlCQUFpQixHQUFPLEVBQUUsTUFBaUI7UUFDMUNDLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLGVBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzlCQSxlQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxVQUFBQSxJQUFJQTtZQUNkQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFBQTtRQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFFYyxlQUFPLFdBRnJCO0lBRXNCIiwiZmlsZSI6ImJpbmQvYmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9tfSBmcm9tIFwiLi4vdXRpbC90eXBlc1wiXHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiXHJcbmltcG9ydCB2aXNpdCBmcm9tIFwiLi4vdXRpbC92aXNpdFwiXHJcbmltcG9ydCBiaW5kQXR0cmlidXRlIGZyb20gXCIuL2JpbmRhdHRyaWJ1dGVcIlxyXG5pbXBvcnQgYmluZE5vZGUgZnJvbSBcIi4vYmluZG5vZGVcIlxyXG5cclxubGV0IHJlZ2V4ID0gL1xce1xceyguKylcXH1cXH0vZ207XHJcblxyXG5cclxuZnVuY3Rpb24gYmluZChub2RlOk5vZGUsIG1vZGVsOk1vZGVsKTogdm9pZCB7XHJcblx0aWYobm9kZS5hdHRyaWJ1dGVzKSB7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGUuYXR0cmlidXRlcywgYXR0ciA9PiB7XHJcblx0XHRcdGJpbmRBdHRyaWJ1dGUobm9kZSwgYXR0ciwgbW9kZWwpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGlmKCEhbm9kZS5kb250VmlzaXQpXHJcblx0XHRyZXR1cm47XHJcblx0YmluZE5vZGUobm9kZSwgbW9kZWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kRG9tKGRvbTpEb20sIG1vZGVsczpBcnJheTxhbnk+KTogdm9pZCB7XHJcblx0bGV0IG1vZGVsID0gbmV3IE1vZGVsKG1vZGVscyk7XHJcblx0dmlzaXQoZG9tLCBub2RlPT57XHJcblx0XHRiaW5kKG5vZGUsIG1vZGVsKVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQge3JlZ2V4LCBiaW5kRG9tfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==