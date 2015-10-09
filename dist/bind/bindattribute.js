define(["require", "exports", "./bind", "../attribute/attribute", "observejs"], function (require, exports, bind_1, attribute_1, observejs_1) {
    function bindAttribute(node, attr, model) {
        //TODO use Bindings
        //TODO also detect CustomAttribute with non-{{}} Values
        //TODO call Alternative if {{.*}} does not match: setProperty
        if (attribute_1.Attributes[attr.name.toLowerCase()] !== undefined) {
            return bindCustomAttribute(node, attr, model);
        }
        bind_1.regex.lastIndex = 0;
        var match = bind_1.regex.exec(attr.value);
        if (match) {
            var path = match[1];
            if (!!/\(.*\)/.exec(attr.value)) {
                bindFunctionWithParamAttribute(node, attr, model, path);
            }
            else if (typeof model.get(path).value === "function") {
                bindFunctionAttribute(node, attr, model, path);
            }
            else if (attr.ownerElement.properties.indexOf(attr.name) > -1) {
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
        (function (node, attr, model, path) {
            var _a = model.get(path), object = _a.object, value = _a.value;
            var observer = new observejs_1.PathObserver(object, path);
            var cb = function (newVal, oldVal) {
                node[attr.name.substr(1)] = newVal;
            };
            observer.open(cb);
            cb(value, null);
            attr.ownerElement.removeAttribute(attr.name);
        })(node, attr, model, path);
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
    function bindCustomAttribute(node, attr, model) {
        var customAttr = new attribute_1.Attributes[attr.name](node, attr, model);
        /*
        let {object, value} = model.get(path);
        
        let observer = new PathObserver(object, path);
        let cb = (newVal, oldVal) => {
            customAttr.newJSValue(newVal);
        };
        observer.open(cb);
        cb(value, null);
        */
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6WyJiaW5kQXR0cmlidXRlIiwiYmluZFRleHRBdHRyaWJ1dGUiLCJiaW5kUHJvcGVydHkiLCJiaW5kRnVuY3Rpb25XaXRoUGFyYW1BdHRyaWJ1dGUiLCJiaW5kRnVuY3Rpb25BdHRyaWJ1dGUiLCJiaW5kQ3VzdG9tQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO0lBS0EsdUJBQXNDLElBQVMsRUFBRSxJQUFTLEVBQUUsS0FBVztRQUV0RUEsbUJBQW1CQTtRQUNuQkEsdURBQXVEQTtRQUN2REEsNkRBQTZEQTtRQUU3REEsRUFBRUEsQ0FBQUEsQ0FBQ0Esc0JBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3REQSxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1FBQy9DQSxDQUFDQTtRQUNEQSxZQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNwQkEsSUFBSUEsS0FBS0EsR0FBR0EsWUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ1ZBLElBQUlBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXBCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDaENBLDhCQUE4QkEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDekRBLENBQUNBO1lB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QUFDQTtRQUM3Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQSxHQUFHQSxVQUFBQSxLQUFLQTtZQUMxQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRUQsK0JBQStCLElBQVMsRUFBRSxJQUFTLEVBQUUsS0FBVyxFQUFFLElBQVc7UUFDNUVDLElBQUlBLEtBQWtCQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFoQ0EsTUFBTUEsY0FBRUEsS0FBS0EsV0FBbUJBLENBQUNBO1FBRXRDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM3Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQSxHQUFHQSxVQUFBQSxLQUFLQTtZQUMxQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBR0QsNkJBQTZCLElBQVMsRUFBRSxJQUFTLEVBQUUsS0FBVztRQUM3REMsSUFBSUEsVUFBVUEsR0FBR0EsSUFBSUEsc0JBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1FBRTlEQTs7Ozs7Ozs7O1VBU0VBO0lBQ0hBLENBQUNBIiwiZmlsZSI6ImJpbmQvYmluZGF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVnZXh9IGZyb20gXCIuL2JpbmRcIlxyXG5pbXBvcnQge0F0dHJpYnV0ZXN9IGZyb20gXCIuLi9hdHRyaWJ1dGUvYXR0cmlidXRlXCJcclxuaW1wb3J0IE1vZGVsIGZyb20gXCIuL21vZGVsXCJcclxuaW1wb3J0IHtQYXRoT2JzZXJ2ZXJ9IGZyb20gXCJvYnNlcnZlanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEF0dHJpYnV0ZShub2RlOk5vZGUsIGF0dHI6QXR0ciwgbW9kZWw6TW9kZWwpOiB2b2lkIHtcclxuXHRcclxuXHQvL1RPRE8gdXNlIEJpbmRpbmdzXHJcblx0Ly9UT0RPIGFsc28gZGV0ZWN0IEN1c3RvbUF0dHJpYnV0ZSB3aXRoIG5vbi17e319IFZhbHVlc1xyXG5cdC8vVE9ETyBjYWxsIEFsdGVybmF0aXZlIGlmIHt7Lip9fSBkb2VzIG5vdCBtYXRjaDogc2V0UHJvcGVydHlcclxuXHRcclxuXHRpZihBdHRyaWJ1dGVzW2F0dHIubmFtZS50b0xvd2VyQ2FzZSgpXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gYmluZEN1c3RvbUF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCk7XHJcblx0fVxyXG5cdHJlZ2V4Lmxhc3RJbmRleCA9IDA7XHJcblx0bGV0IG1hdGNoID0gcmVnZXguZXhlYyhhdHRyLnZhbHVlKTtcclxuXHRpZihtYXRjaCkge1xyXG5cdFx0bGV0IHBhdGggPSBtYXRjaFsxXTtcclxuXHRcdFxyXG5cdFx0aWYoISEvXFwoLipcXCkvLmV4ZWMoYXR0ci52YWx1ZSkpIHtcclxuXHRcdFx0YmluZEZ1bmN0aW9uV2l0aFBhcmFtQXR0cmlidXRlKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodHlwZW9mIG1vZGVsLmdldChwYXRoKS52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdGJpbmRGdW5jdGlvbkF0dHJpYnV0ZShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGVsc2UgaWYoKDxhbnk+YXR0ci5vd25lckVsZW1lbnQpLnByb3BlcnRpZXMuaW5kZXhPZihhdHRyLm5hbWUpID4gLTEpIHtcclxuXHRcdFx0YmluZFByb3BlcnR5KG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcdH1cclxuXHRcdC8qXHJcblx0XHRlbHNlIGlmKGF0dHIubmFtZVswXSA9PT0gJyMnKSB7XHJcblx0XHRcdGJpbmRQcm9wZXJ0eShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGJpbmRUZXh0QXR0cmlidXRlKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRUZXh0QXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQgb3JpZ2luYWxWYWx1ZSA9IGF0dHIudmFsdWU7XHJcblx0XHJcblx0bGV0IHtvYmplY3QsIHZhbHVlfSA9IG1vZGVsLmdldChwYXRoKTtcclxuXHRcclxuXHRsZXQgb2JzZXJ2ZXIgPSBuZXcgUGF0aE9ic2VydmVyKG9iamVjdCwgcGF0aCk7XHJcblx0bGV0IHIgPSBuZXcgUmVnRXhwKFwiXFx7XFx7XCIgKyBwYXRoICsgXCJcXH1cXH1cIiwgXCJnXCIpXHJcblx0XHJcblx0bGV0IGNiID0gKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcblx0XHRhdHRyLnZhbHVlID0gb3JpZ2luYWxWYWx1ZS5yZXBsYWNlKHIsIG5ld1ZhbCk7XHJcblx0fTtcclxuXHRvYnNlcnZlci5vcGVuKGNiKTtcclxuXHRjYih2YWx1ZSwgbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRQcm9wZXJ0eShub2RlOk5vZGUsIGF0dHI6QXR0ciwgbW9kZWw6TW9kZWwsIHBhdGg6c3RyaW5nKTogdm9pZCB7XHJcblx0KGZ1bmN0aW9uKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKSB7XHJcblx0XHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFx0XHJcblx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgUGF0aE9ic2VydmVyKG9iamVjdCwgcGF0aCk7XHJcblx0XHRsZXQgY2IgPSAobmV3VmFsLCBvbGRWYWwpID0+IHtcclxuXHRcdFx0bm9kZVthdHRyLm5hbWUuc3Vic3RyKDEpXSA9IG5ld1ZhbDtcclxuXHRcdH07XHJcblx0XHRvYnNlcnZlci5vcGVuKGNiKTtcclxuXHRcdGNiKHZhbHVlLCBudWxsKTtcclxuXHRcdGF0dHIub3duZXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xyXG5cdH0pKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKVxyXG5cdFxyXG59XHJcblxyXG5sZXQgcmVnZXhfcGFyYW1zID0gL1xcKCguKylcXCkvO1xyXG5sZXQgcmVnZXhfZnVuY3Rpb24gPSAvKC4qKVxcKC87XHJcblxyXG5mdW5jdGlvbiBiaW5kRnVuY3Rpb25XaXRoUGFyYW1BdHRyaWJ1dGUobm9kZTpOb2RlLCBhdHRyOkF0dHIsIG1vZGVsOk1vZGVsLCBwYXRoOnN0cmluZyk6IHZvaWQge1xyXG5cdHJlZ2V4X3BhcmFtcy5sYXN0SW5kZXggPSAwO1xyXG5cdHJlZ2V4X2Z1bmN0aW9uLmxhc3RJbmRleCA9IDA7XHJcblx0XHJcblx0bGV0IHBhcmFtcyA9IHJlZ2V4X3BhcmFtcy5leGVjKHBhdGgpWzFdXHJcblx0XHQuc3BsaXQoXCIsXCIpXHJcblx0XHQubWFwKHBhcmFtID0+IHtyZXR1cm4gcGFyYW0udHJpbSgpfSlcclxuXHRcdC5tYXAocGFyYW0gPT4ge1xyXG5cdFx0XHRsZXQgdmFsdWUgPSBtb2RlbC5nZXQocGFyYW0pLnZhbHVlO1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gcGFyYW0gOiB2YWx1ZTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0Ly9UT0RPIG1hcCBwYXJhbXMgdG8gdHlwZXMgZS5nLiAndHJ1ZScgdG8gYm9vbGVhbiwgMS4yIHRvIG51bWJlci4uLlxyXG5cdFx0XHJcblx0bGV0IGZ1bmN0aW9uTmFtZSA9IHJlZ2V4X2Z1bmN0aW9uLmV4ZWMocGF0aClbMV07XHJcblx0XHJcblx0bGV0IHtvYmplY3QsIHZhbHVlfSA9IG1vZGVsLmdldChmdW5jdGlvbk5hbWUpO1xyXG5cdFxyXG5cdGF0dHIub3duZXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xyXG5cdG5vZGVbYXR0ci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCldID0gZXZlbnQgPT4ge1xyXG5cdFx0dmFsdWUuYXBwbHkob2JqZWN0LCBwYXJhbXMpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmluZEZ1bmN0aW9uQXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFxyXG5cdGF0dHIub3duZXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xyXG5cdG5vZGVbYXR0ci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCldID0gZXZlbnQgPT4ge1xyXG5cdFx0dmFsdWUuY2FsbChvYmplY3QsIGV2ZW50KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBiaW5kQ3VzdG9tQXR0cmlidXRlKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCk6IHZvaWQge1xyXG5cdGxldCBjdXN0b21BdHRyID0gbmV3IEF0dHJpYnV0ZXNbYXR0ci5uYW1lXShub2RlLCBhdHRyLCBtb2RlbCk7XHJcblx0XHJcblx0LypcclxuXHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFxyXG5cdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcclxuXHRsZXQgY2IgPSAobmV3VmFsLCBvbGRWYWwpID0+IHtcclxuXHRcdGN1c3RvbUF0dHIubmV3SlNWYWx1ZShuZXdWYWwpO1xyXG5cdH07XHJcblx0b2JzZXJ2ZXIub3BlbihjYik7XHJcblx0Y2IodmFsdWUsIG51bGwpO1xyXG5cdCovXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=