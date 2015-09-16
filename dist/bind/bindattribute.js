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
            else if (node._properties && node._properties.indexOf(attr.name) !== -1) {
                bindProperty(node, attr, model, path);
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
    function bindProperty(node, attr, model, path) {
        var _a = model.get(path), object = _a.object, value = _a.value;
        var observer = new observejs_1.PathObserver(object, path);
        var cb = function (newVal, oldVal) {
            node[attr.name] = newVal;
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
        //TODO map params to types e.g. 'true' to boolean, 1.2 to number...
        var functionName = regex_function.exec(path)[1];
        var _a = model.get(functionName), object = _a.object, value = _a.value;
        attr.ownerElement.removeAttribute(attr.name);
        node[attr.name.toLocaleLowerCase()] = function (event) {
            value.apply(object, params);
        };
    }
    function bindFunctionAttribute(node, attr, model, path) {
        var _a = model.get(path), object = _a.object, value = _a.value;
        attr.ownerElement.removeAttribute(attr.name);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6WyJiaW5kQXR0cmlidXRlIiwiYmluZFRleHRBdHRyaWJ1dGUiLCJiaW5kUHJvcGVydHkiLCJiaW5kRnVuY3Rpb25XaXRoUGFyYW1BdHRyaWJ1dGUiLCJiaW5kRnVuY3Rpb25BdHRyaWJ1dGUiLCJiaW5kQ3VzdG9tQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO0lBS0EsdUJBQXNDLElBQVMsRUFBRSxJQUFTLEVBQUUsS0FBVztRQUV0RUEsWUFBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLElBQUlBLEtBQUtBLEdBQUdBLFlBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ25DQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNWQSxJQUFJQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUVwQkEsRUFBRUEsQ0FBQUEsQ0FBQ0Esc0JBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0REEsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNyREEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JDQSw4QkFBOEJBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3pEQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxFQUFF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QUNBO1FBQ2xCQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNqQkEsQ0FBQ0EiLCJmaWxlIjoiYmluZC9iaW5kYXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZWdleH0gZnJvbSBcIi4vYmluZFwiXHJcbmltcG9ydCB7QXR0cmlidXRlc30gZnJvbSBcIi4uL2F0dHJpYnV0ZS9hdHRyaWJ1dGVcIlxyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kZWxcIlxyXG5pbXBvcnQge1BhdGhPYnNlcnZlcn0gZnJvbSBcIm9ic2VydmVqc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kQXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCk6IHZvaWQge1xyXG5cdFxyXG5cdHJlZ2V4Lmxhc3RJbmRleCA9IDA7XHJcblx0bGV0IG1hdGNoID0gcmVnZXguZXhlYyhhdHRyLnZhbHVlKTtcclxuXHRpZihtYXRjaCkge1xyXG5cdFx0bGV0IHBhdGggPSBtYXRjaFsxXTtcclxuXHRcdFxyXG5cdFx0aWYoQXR0cmlidXRlc1thdHRyLm5hbWUudG9Mb3dlckNhc2UoKV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gYmluZEN1c3RvbUF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCEhL1xcKC4qXFwpLy5leGVjKGF0dHIudmFsdWUpKSB7XHJcblx0XHRcdGJpbmRGdW5jdGlvbldpdGhQYXJhbUF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBtb2RlbC5nZXQocGF0aCkudmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRiaW5kRnVuY3Rpb25BdHRyaWJ1dGUobm9kZSwgYXR0ciwgbW9kZWwsIHBhdGgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZigoPGFueT5ub2RlKS5fcHJvcGVydGllcyAmJiAoPGFueT5ub2RlKS5fcHJvcGVydGllcy5pbmRleE9mKGF0dHIubmFtZSkgIT09IC0xKSB7XHJcblx0XHRcdGJpbmRQcm9wZXJ0eShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0YmluZFRleHRBdHRyaWJ1dGUobm9kZSwgYXR0ciwgbW9kZWwsIHBhdGgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmluZFRleHRBdHRyaWJ1dGUobm9kZTpOb2RlLCBhdHRyOkF0dHIsIG1vZGVsOk1vZGVsLCBwYXRoOnN0cmluZyk6IHZvaWQge1xyXG5cdGxldCBvcmlnaW5hbFZhbHVlID0gYXR0ci52YWx1ZTtcclxuXHRcclxuXHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFxyXG5cdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcclxuXHRsZXQgciA9IG5ldyBSZWdFeHAoXCJcXHtcXHtcIiArIHBhdGggKyBcIlxcfVxcfVwiLCBcImdcIilcclxuXHRcclxuXHRsZXQgY2IgPSAobmV3VmFsLCBvbGRWYWwpID0+IHtcclxuXHRcdGF0dHIudmFsdWUgPSBvcmlnaW5hbFZhbHVlLnJlcGxhY2UociwgbmV3VmFsKTtcclxuXHR9O1xyXG5cdG9ic2VydmVyLm9wZW4oY2IpO1xyXG5cdGNiKHZhbHVlLCBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZFByb3BlcnR5KG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFxyXG5cdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcclxuXHRsZXQgY2IgPSAobmV3VmFsLCBvbGRWYWwpID0+IHtcclxuXHRcdG5vZGVbYXR0ci5uYW1lXSA9IG5ld1ZhbDtcclxuXHR9O1xyXG5cdG9ic2VydmVyLm9wZW4oY2IpO1xyXG5cdGNiKHZhbHVlLCBudWxsKTtcclxufVxyXG5cclxubGV0IHJlZ2V4X3BhcmFtcyA9IC9cXCgoLispXFwpLztcclxubGV0IHJlZ2V4X2Z1bmN0aW9uID0gLyguKilcXCgvO1xyXG5cclxuZnVuY3Rpb24gYmluZEZ1bmN0aW9uV2l0aFBhcmFtQXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpOiB2b2lkIHtcclxuXHRyZWdleF9wYXJhbXMubGFzdEluZGV4ID0gMDtcclxuXHRyZWdleF9mdW5jdGlvbi5sYXN0SW5kZXggPSAwO1xyXG5cdFxyXG5cdGxldCBwYXJhbXMgPSByZWdleF9wYXJhbXMuZXhlYyhwYXRoKVsxXVxyXG5cdFx0LnNwbGl0KFwiLFwiKVxyXG5cdFx0Lm1hcChwYXJhbSA9PiB7cmV0dXJuIHBhcmFtLnRyaW0oKX0pXHJcblx0XHQubWFwKHBhcmFtID0+IHtcclxuXHRcdFx0bGV0IHZhbHVlID0gbW9kZWwuZ2V0KHBhcmFtKS52YWx1ZTtcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IHBhcmFtIDogdmFsdWU7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdC8vVE9ETyBtYXAgcGFyYW1zIHRvIHR5cGVzIGUuZy4gJ3RydWUnIHRvIGJvb2xlYW4sIDEuMiB0byBudW1iZXIuLi5cclxuXHRcdFxyXG5cdGxldCBmdW5jdGlvbk5hbWUgPSByZWdleF9mdW5jdGlvbi5leGVjKHBhdGgpWzFdO1xyXG5cdFxyXG5cdGxldCB7b2JqZWN0LCB2YWx1ZX0gPSBtb2RlbC5nZXQoZnVuY3Rpb25OYW1lKTtcclxuXHRcclxuXHRhdHRyLm93bmVyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcclxuXHRub2RlW2F0dHIubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpXSA9IGV2ZW50ID0+IHtcclxuXHRcdHZhbHVlLmFwcGx5KG9iamVjdCwgcGFyYW1zKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRGdW5jdGlvbkF0dHJpYnV0ZShub2RlOk5vZGUsIGF0dHI6QXR0ciwgbW9kZWw6TW9kZWwsIHBhdGg6c3RyaW5nKTogdm9pZCB7XHJcblx0bGV0IHtvYmplY3QsIHZhbHVlfSA9IG1vZGVsLmdldChwYXRoKTtcclxuXHRcclxuXHRhdHRyLm93bmVyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcclxuXHRub2RlW2F0dHIubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpXSA9IGV2ZW50ID0+IHtcclxuXHRcdHZhbHVlLmNhbGwob2JqZWN0LCBldmVudCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYmluZEN1c3RvbUF0dHJpYnV0ZShub2RlOk5vZGUsIGF0dHI6QXR0ciwgbW9kZWw6TW9kZWwsIHBhdGg6c3RyaW5nKTogdm9pZCB7XHJcblx0bGV0IGN1c3RvbUF0dHIgPSBuZXcgQXR0cmlidXRlc1thdHRyLm5hbWVdKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcclxuXHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFxyXG5cdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcclxuXHRsZXQgY2IgPSAobmV3VmFsLCBvbGRWYWwpID0+IHtcclxuXHRcdGN1c3RvbUF0dHIubmV3SlNWYWx1ZShuZXdWYWwpO1xyXG5cdH07XHJcblx0b2JzZXJ2ZXIub3BlbihjYik7XHJcblx0Y2IodmFsdWUsIG51bGwpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9