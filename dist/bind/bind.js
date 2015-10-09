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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZC50cyJdLCJuYW1lcyI6WyJiaW5kIiwiYmluZERvbSJdLCJtYXBwaW5ncyI6IjtJQU1BLElBQUksS0FBSyxHQUFHLGdCQUFnQjtJQXFCcEIsYUFBSyxTQXJCZ0I7SUFHN0IsY0FBYyxJQUFTLEVBQUUsS0FBVztRQUNuQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLFVBQUFBLElBQUlBO2dCQUNqREEsdUJBQWFBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2xDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQUVEQSxrQkFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFFdkJBLENBQUNBO0lBRUQsaUJBQWlCLEdBQU8sRUFBRSxNQUFpQjtRQUMxQ0MsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsZUFBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLGVBQUtBLENBQUNBLEdBQUdBLEVBQUVBLFVBQUFBLElBQUlBO1lBQ2RBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUFBO1FBQ2xCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVjLGVBQU8sV0FGckI7SUFFc0IiLCJmaWxlIjoiYmluZC9iaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb219IGZyb20gXCIuLi91dGlsL3R5cGVzXCJcclxuaW1wb3J0IE1vZGVsIGZyb20gXCIuL21vZGVsXCJcclxuaW1wb3J0IHZpc2l0IGZyb20gXCIuLi91dGlsL3Zpc2l0XCJcclxuaW1wb3J0IGJpbmRBdHRyaWJ1dGUgZnJvbSBcIi4vYmluZGF0dHJpYnV0ZVwiXHJcbmltcG9ydCBiaW5kTm9kZSBmcm9tIFwiLi9iaW5kbm9kZVwiXHJcblxyXG5sZXQgcmVnZXggPSAvXFx7XFx7KC4rKVxcfVxcfS9nbTtcclxuXHJcblxyXG5mdW5jdGlvbiBiaW5kKG5vZGU6Tm9kZSwgbW9kZWw6TW9kZWwpOiB2b2lkIHtcclxuXHRpZihub2RlLmF0dHJpYnV0ZXMpIHtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZS5hdHRyaWJ1dGVzLCBhdHRyID0+IHtcclxuXHRcdFx0YmluZEF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0YmluZE5vZGUobm9kZSwgbW9kZWwpO1xyXG5cdFxyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kRG9tKGRvbTpEb20sIG1vZGVsczpBcnJheTxhbnk+KTogdm9pZCB7XHJcblx0bGV0IG1vZGVsID0gbmV3IE1vZGVsKG1vZGVscyk7XHJcblx0dmlzaXQoZG9tLCBub2RlPT57XHJcblx0XHRiaW5kKG5vZGUsIG1vZGVsKVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQge3JlZ2V4LCBiaW5kRG9tfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==