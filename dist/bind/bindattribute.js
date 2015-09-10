define(["require", "exports", "./bind", "../attribute/attribute", "observejs"], function (require, exports, bind_1, attribute_1, observejs_1) {
    function bindAttribute(node, attr, model) {
        bind_1.regex.lastIndex = 0;
        var match = bind_1.regex.exec(attr.value);
        if (match) {
            var path = match[1];
            if (attribute_1.Attributes[attr.name.toLowerCase()] !== undefined) {
                return bindCustomAttribute(node, attr, model, path);
            }
            else if (!!/\(.*\)/.exec(attr.value)) {
                bindFunctionWithParamAttribute(node, attr, model, path);
            }
            else if (typeof model.get(path).value === "function") {
                bindFunctionAttribute(node, attr, model, path);
            }
            else {
                bindTextAttribute(node, attr, model, path);
            }
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = bindAttribute;
    function bindTextAttribute(node, attr, model, path) {
        var originalValue = attr.value;
        var _a = model.get(path), object = _a.object, value = _a.value;
        var observer = new observejs_1.PathObserver(object, path);
        var r = new RegExp("\{\{" + path + "\}\}", "g");
        var cb = function (newVal, oldVal) {
            attr.value = originalValue.replace(r, newVal);
        };
        observer.open(cb);
        cb(value, null);
    }
    var regex_params = /\((.+)\)/;
    var regex_function = /(.*)\(/;
    function bindFunctionWithParamAttribute(node, attr, model, path) {
        regex_params.lastIndex = 0;
        regex_function.lastIndex = 0;
        var params = regex_params.exec(path)[1]
            .split(",")
            .map(function (param) { return param.trim(); })
            .map(function (param) {
            var value = model.get(param).value;
            return typeof value === "undefined" ? param : value;
        });
        var functionName = regex_function.exec(path)[1];
        var _a = model.get(path), object = _a.object, value = _a.value;
        node[attr.name.toLocaleLowerCase()] = function (event) {
            value.apply(object, params);
        };
    }
    function bindFunctionAttribute(node, attr, model, path) {
        var _a = model.get(path), object = _a.object, value = _a.value;
        node[attr.name.toLocaleLowerCase()] = function (event) {
            value.call(object, event);
        };
    }
    function bindCustomAttribute(node, attr, model, path) {
        var customAttr = new attribute_1.Attributes[attr.name](node, attr, model, path);
        var _a = model.get(path), object = _a.object, value = _a.value;
        var observer = new observejs_1.PathObserver(object, path);
        var cb = function (newVal, oldVal) {
            customAttr.newJSValue(newVal);
        };
        observer.open(cb);
        cb(value, null);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6WyJiaW5kQXR0cmlidXRlIiwiYmluZFRleHRBdHRyaWJ1dGUiLCJiaW5kRnVuY3Rpb25XaXRoUGFyYW1BdHRyaWJ1dGUiLCJiaW5kRnVuY3Rpb25BdHRyaWJ1dGUiLCJiaW5kQ3VzdG9tQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO0lBS0EsdUJBQXNDLElBQVMsRUFBRSxJQUFTLEVBQUUsS0FBVztRQUV0RUEsWUFBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLElBQUlBLEtBQUtBLEdBQUdBLFlBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ25DQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNWQSxJQUFJQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUVwQkEsRUFBRUEsQ0FBQUEsQ0FBQ0Esc0JBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0REEsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNyREEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JDQSw4QkFBOEJBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3pEQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFBQSxDQUFDQSxP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LElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQ2xCQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUVqQkEsQ0FBQ0EiLCJmaWxlIjoiYmluZC9iaW5kYXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZWdleH0gZnJvbSBcIi4vYmluZFwiXHJcbmltcG9ydCB7QXR0cmlidXRlc30gZnJvbSBcIi4uL2F0dHJpYnV0ZS9hdHRyaWJ1dGVcIlxyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kZWxcIlxyXG5pbXBvcnQge1BhdGhPYnNlcnZlcn0gZnJvbSBcIm9ic2VydmVqc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kQXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCk6IHZvaWQge1xyXG5cdFxyXG5cdHJlZ2V4Lmxhc3RJbmRleCA9IDA7XHJcblx0bGV0IG1hdGNoID0gcmVnZXguZXhlYyhhdHRyLnZhbHVlKTtcclxuXHRpZihtYXRjaCkge1xyXG5cdFx0bGV0IHBhdGggPSBtYXRjaFsxXTtcclxuXHRcdFxyXG5cdFx0aWYoQXR0cmlidXRlc1thdHRyLm5hbWUudG9Mb3dlckNhc2UoKV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gYmluZEN1c3RvbUF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCEhL1xcKC4qXFwpLy5leGVjKGF0dHIudmFsdWUpKSB7XHJcblx0XHRcdGJpbmRGdW5jdGlvbldpdGhQYXJhbUF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBtb2RlbC5nZXQocGF0aCkudmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRiaW5kRnVuY3Rpb25BdHRyaWJ1dGUobm9kZSwgYXR0ciwgbW9kZWwsIHBhdGgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGJpbmRUZXh0QXR0cmlidXRlKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRUZXh0QXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQgb3JpZ2luYWxWYWx1ZSA9IGF0dHIudmFsdWU7XHJcblx0XHJcblx0bGV0IHtvYmplY3QsIHZhbHVlfSA9IG1vZGVsLmdldChwYXRoKTtcclxuXHRcclxuXHRsZXQgb2JzZXJ2ZXIgPSBuZXcgUGF0aE9ic2VydmVyKG9iamVjdCwgcGF0aCk7XHJcblx0bGV0IHIgPSBuZXcgUmVnRXhwKFwiXFx7XFx7XCIgKyBwYXRoICsgXCJcXH1cXH1cIiwgXCJnXCIpXHJcblx0XHJcblx0bGV0IGNiID0gKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcblx0XHRhdHRyLnZhbHVlID0gb3JpZ2luYWxWYWx1ZS5yZXBsYWNlKHIsIG5ld1ZhbCk7XHJcblx0fTtcclxuXHRvYnNlcnZlci5vcGVuKGNiKTtcclxuXHRjYih2YWx1ZSwgbnVsbCk7XHJcbn1cclxuXHJcbmxldCByZWdleF9wYXJhbXMgPSAvXFwoKC4rKVxcKS87XHJcbmxldCByZWdleF9mdW5jdGlvbiA9IC8oLiopXFwoLztcclxuXHJcbmZ1bmN0aW9uIGJpbmRGdW5jdGlvbldpdGhQYXJhbUF0dHJpYnV0ZShub2RlOk5vZGUsIGF0dHI6QXR0ciwgbW9kZWw6TW9kZWwsIHBhdGg6c3RyaW5nKTogdm9pZCB7XHJcblx0cmVnZXhfcGFyYW1zLmxhc3RJbmRleCA9IDA7XHJcblx0cmVnZXhfZnVuY3Rpb24ubGFzdEluZGV4ID0gMDtcclxuXHRcclxuXHRsZXQgcGFyYW1zID0gcmVnZXhfcGFyYW1zLmV4ZWMocGF0aClbMV1cclxuXHRcdC5zcGxpdChcIixcIilcclxuXHRcdC5tYXAocGFyYW0gPT4ge3JldHVybiBwYXJhbS50cmltKCl9KVxyXG5cdFx0Lm1hcChwYXJhbSA9PiB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IG1vZGVsLmdldChwYXJhbSkudmFsdWU7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBwYXJhbSA6IHZhbHVlO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRsZXQgZnVuY3Rpb25OYW1lID0gcmVnZXhfZnVuY3Rpb24uZXhlYyhwYXRoKVsxXTtcclxuXHRcclxuXHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFxyXG5cdG5vZGVbYXR0ci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCldID0gZXZlbnQgPT4ge1xyXG5cdFx0dmFsdWUuYXBwbHkob2JqZWN0LCBwYXJhbXMpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmluZEZ1bmN0aW9uQXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFxyXG5cdG5vZGVbYXR0ci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCldID0gZXZlbnQgPT4ge1xyXG5cdFx0dmFsdWUuY2FsbChvYmplY3QsIGV2ZW50KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBiaW5kQ3VzdG9tQXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQgY3VzdG9tQXR0ciA9IG5ldyBBdHRyaWJ1dGVzW2F0dHIubmFtZV0obm9kZSwgYXR0ciwgbW9kZWwsIHBhdGgpO1xyXG5cdFxyXG5cdGxldCB7b2JqZWN0LCB2YWx1ZX0gPSBtb2RlbC5nZXQocGF0aCk7XHJcblx0XHJcblx0bGV0IG9ic2VydmVyID0gbmV3IFBhdGhPYnNlcnZlcihvYmplY3QsIHBhdGgpO1xyXG5cdGxldCBjYiA9IChuZXdWYWwsIG9sZFZhbCkgPT4ge1xyXG5cdFx0Y3VzdG9tQXR0ci5uZXdKU1ZhbHVlKG5ld1ZhbCk7XHJcblx0fTtcclxuXHRvYnNlcnZlci5vcGVuKGNiKTtcclxuXHRjYih2YWx1ZSwgbnVsbCk7XHJcblx0XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=