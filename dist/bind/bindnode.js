define(["require", "exports", "./bind"], function (require, exports, bind_1) {
    function bindNode(node, model) {
        var isTextNode = node.nodeType === 3;
        var hasOnlyTextNodes = node.childElementCount === 0;
        if (isTextNode || hasOnlyTextNodes) {
            bindTextNode(node, model);
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = bindNode;
    function bindTextNode(node, model) {
        bind_1.regex.lastIndex = 0;
        var match = bind_1.regex.exec(node.textContent);
        if (match) {
            var path = match[1];
            var r = new RegExp("\{\{" + path + "\}\}", "g");
            var originalText = node.textContent;
            var _a = model.get(path), object = _a.object, value = _a.value;
            var observer = new PathObserver(object, path);
            var cb = function (newVal, oldVal) {
                node.textContent = originalText.replace(r, newVal);
            };
            observer.open(cb);
            cb(value, null);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZG5vZGUudHMiXSwibmFtZXMiOlsiYmluZE5vZGUiLCJiaW5kVGV4dE5vZGUiXSwibWFwcGluZ3MiOiI7SUFHQSxrQkFBaUMsSUFBUyxFQUFFLEtBQVc7UUFDdERBLElBQUlBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3JDQSxJQUFJQSxnQkFBZ0JBLEdBQWFBLElBQUtBLENBQUNBLGlCQUFpQkEsS0FBS0EsQ0FBQ0EsQ0FBQUE7UUFDOURBLEVBQUVBLENBQUFBLENBQUNBLFVBQVVBLElBQUlBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLFlBQVlBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTtJQUVGQSxDQUFDQTtJQVBEOzhCQU9DLENBQUE7SUFFRCxzQkFBc0IsSUFBUyxFQUFFLEtBQVc7UUFDM0NDLFlBQUtBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3BCQSxJQUFJQSxLQUFLQSxHQUFHQSxZQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUN6Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsSUFBSUEsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLEdBQUdBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUFBO1lBRy9DQSxJQUFJQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUVwQ0EsSUFBSUEsS0FBa0JBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLEVBQWhDQSxNQUFNQSxjQUFFQSxLQUFLQSxXQUFtQkEsQ0FBQ0E7WUFDdENBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBRTlDQSxJQUFJQSxFQUFFQSxHQUFHQSxVQUFDQSxNQUFNQSxFQUFFQSxNQUFNQTtnQkFDdkJBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3BEQSxDQUFDQSxDQUFDQTtZQUNGQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNsQkEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDakJBLENBQUNBO0lBQ0ZBLENBQUNBIiwiZmlsZSI6ImJpbmQvYmluZG5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kZWxcIlxyXG5pbXBvcnQge3JlZ2V4fSBmcm9tIFwiLi9iaW5kXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmROb2RlKG5vZGU6Tm9kZSwgbW9kZWw6TW9kZWwpOiB2b2lkIHtcclxuXHRsZXQgaXNUZXh0Tm9kZSA9IG5vZGUubm9kZVR5cGUgPT09IDM7XHJcblx0bGV0IGhhc09ubHlUZXh0Tm9kZXMgPSAoPEVsZW1lbnQ+bm9kZSkuY2hpbGRFbGVtZW50Q291bnQgPT09IDAgXHJcblx0aWYoaXNUZXh0Tm9kZSB8fCBoYXNPbmx5VGV4dE5vZGVzKSB7XHJcblx0XHRiaW5kVGV4dE5vZGUobm9kZSwgbW9kZWwpO1xyXG5cdH1cclxuXHRcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZFRleHROb2RlKG5vZGU6Tm9kZSwgbW9kZWw6TW9kZWwpOiB2b2lkIHtcclxuXHRyZWdleC5sYXN0SW5kZXggPSAwO1xyXG5cdGxldCBtYXRjaCA9IHJlZ2V4LmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0aWYobWF0Y2gpIHtcclxuXHRcdGxldCBwYXRoID0gbWF0Y2hbMV07XHJcblx0XHRsZXQgciA9IG5ldyBSZWdFeHAoXCJcXHtcXHtcIiArIHBhdGggKyBcIlxcfVxcfVwiLCBcImdcIilcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRsZXQgb3JpZ2luYWxUZXh0ID0gbm9kZS50ZXh0Q29udGVudDtcclxuXHRcdFxyXG5cdFx0bGV0IHtvYmplY3QsIHZhbHVlfSA9IG1vZGVsLmdldChwYXRoKTtcclxuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcclxuXHRcdFxyXG5cdFx0bGV0IGNiID0gKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcblx0XHRcdG5vZGUudGV4dENvbnRlbnQgPSBvcmlnaW5hbFRleHQucmVwbGFjZShyLCBuZXdWYWwpO1xyXG5cdFx0fTtcclxuXHRcdG9ic2VydmVyLm9wZW4oY2IpO1xyXG5cdFx0Y2IodmFsdWUsIG51bGwpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==