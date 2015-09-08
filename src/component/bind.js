define(["require", "exports", "observer", "../attribute/attribute"], function (require, exports, observer_1, attribute_1) {
    var regex = /\{\{(.+)\}\}/gm;
    function bindTextNode(node, model) {
        regex.lastIndex = 0;
        var match = regex.exec(node.textContent);
        if (match) {
            var path = match[1];
            var originalText = node.textContent;
            var observer = new observer_1.PathObserver(model, path);
            var r = new RegExp("\{\{" + path + "\}\}", "g");
            var cb = function (newVal, oldVal) {
                node.textContent = originalText.replace(r, newVal);
            };
            observer.open(cb);
            cb(model[path], null);
        }
    }
    function bindAttribute(node, attr, model) {
        var match = regex.exec(attr.value);
        if (match) {
            var path = match[1];
            if (attribute_1.Attributes[attr.name.toLowerCase()] !== undefined) {
                bindCustomAttribute(node, attr, model, path);
            }
            else if (typeof model[path] === "function") {
                bindFunctionAttribute(node, attr, model, path);
            }
            else {
                bindTextAttribute(node, attr, model, path);
            }
        }
    }
    function bindTextAttribute(node, attr, model, path) {
        var originalValue = attr.value;
        var observer = new observer_1.PathObserver(model, path);
        var r = new RegExp("\{\{" + path + "\}\}", "g");
        var cb = function (newVal, oldVal) {
            attr.value = originalValue.replace(r, newVal);
        };
        observer.open(cb);
        cb(model[path], null);
    }
    function bindFunctionAttribute(node, attr, model, path) {
        node[attr.name.toLocaleLowerCase()] = function (event) {
            model[path](event);
        };
    }
    function bindCustomAttribute(node, attr, model, path) {
        var customAttr = new attribute_1.Attributes[attr.name](node, attr, model, path);
        var observer = new observer_1.PathObserver(model, path);
        var cb = function (newVal, oldVal) {
            customAttr.newJSValue(newVal);
        };
        observer.open(cb);
        cb(model[path], null);
    }
    function bindNode(node, model) {
        var isTextNode = node.nodeType === 3;
        var hasOnlyTextNodes = node.childElementCount === 0;
        if (isTextNode || hasOnlyTextNodes) {
            bindTextNode(node, model);
        }
        if (node.attributes)
            Array.prototype.forEach.call(node.attributes, function (attr) {
                bindAttribute(node, attr, model);
            });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = bindNode;
});
//# sourceMappingURL=bind.js.map