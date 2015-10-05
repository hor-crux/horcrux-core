define(["require", "exports", "./model", "../util/visit", "./bindattribute", "./bindnode"], function (require, exports, model_1, visit_1, bindattribute_1, bindnode_1) {
    var regex = /\{\{(.+)\}\}/gm;
    exports.regex = regex;
    function bind(node, model) {
        if (node.attributes) {
            Array.prototype.forEach.call(node.attributes, function (attr) {
                bindattribute_1.default(node, attr, model);
            });
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZC50cyJdLCJuYW1lcyI6WyJiaW5kIiwiYmluZERvbSJdLCJtYXBwaW5ncyI6IjtJQU1BLElBQUksS0FBSyxHQUFHLGdCQUFnQjtJQXFCcEIsYUFBSyxTQXJCZ0I7SUFHN0IsY0FBYyxJQUFTLEVBQUUsS0FBVztRQUNuQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLFVBQUFBLElBQUlBO2dCQUNqREEsdUJBQWFBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2xDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQUVEQSxrQkFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFFdkJBLENBQUNBO0lBRUQsaUJBQWlCLEdBQU8sRUFBRSxNQUFpQjtRQUMxQ0MsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsZUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLGVBQUtBLENBQUNBLEdBQUdBLEVBQUVBLFVBQUFBLElBQUlBO1lBQ2RBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUFBO1FBQ2xCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVjLGVBQU8sV0FGckI7SUFFc0IiLCJmaWxlIjoiYmluZC9iaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb219IGZyb20gXCIuLi91dGlsL3R5cGVzXCJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiXG5pbXBvcnQgdmlzaXQgZnJvbSBcIi4uL3V0aWwvdmlzaXRcIlxuaW1wb3J0IGJpbmRBdHRyaWJ1dGUgZnJvbSBcIi4vYmluZGF0dHJpYnV0ZVwiXG5pbXBvcnQgYmluZE5vZGUgZnJvbSBcIi4vYmluZG5vZGVcIlxuXG5sZXQgcmVnZXggPSAvXFx7XFx7KC4rKVxcfVxcfS9nbTtcblxuXG5mdW5jdGlvbiBiaW5kKG5vZGU6Tm9kZSwgbW9kZWw6TW9kZWwpOiB2b2lkIHtcblx0aWYobm9kZS5hdHRyaWJ1dGVzKSB7XG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlLmF0dHJpYnV0ZXMsIGF0dHIgPT4ge1xuXHRcdFx0YmluZEF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdGJpbmROb2RlKG5vZGUsIG1vZGVsKTtcblx0XG59XG5cbmZ1bmN0aW9uIGJpbmREb20oZG9tOkRvbSwgbW9kZWxzOkFycmF5PGFueT4pOiB2b2lkIHtcblx0bGV0IG1vZGVsID0gbmV3IE1vZGVsKG1vZGVscyk7XG5cdHZpc2l0KGRvbSwgbm9kZT0+e1xuXHRcdGJpbmQobm9kZSwgbW9kZWwpXG5cdH0pO1xufVxuXG5leHBvcnQge3JlZ2V4LCBiaW5kRG9tfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
