define(["require", "exports"], function (require, exports) {
    var Model = (function () {
        function Model(objects) {
            this.pathCache = {};
            this._objects = objects;
        }
        Object.defineProperty(Model.prototype, "objects", {
            get: function () {
                return this._objects;
            },
            enumerable: true,
            configurable: true
        });
        Model.prototype.get = function (path, strict) {
            if (strict === void 0) { strict = false; }
            /*
            let ret: ObjectAndValue = {object: void 0, value: void 0};
            this.objects.some(obj => {
                if(Model.has(obj, path)) {
                    ret = {
                        object: obj,
                        value: Model.get(obj,path)
                    }
                    return true;
                }
            })
            */
            var object = Model.highestOrder(this.objects, path);
            var value = Model.get(object, path);
            var ov = { object: object, value: value };
            //no value found - strict mode
            if (typeof value === "undefined" && !!strict) {
                return { object: void 0, value: value };
            }
            else {
                this.pathCache[path] = object;
                return ov;
            }
        };
        Model.prototype.set = function (path, value) {
            if (typeof this.pathCache[path] !== "undefined") {
                Model.set(this.pathCache[path], path, value);
            }
            else {
                var object = Model.highestOrder(this.objects, path);
                Model.set(object, path, value);
            }
        };
        Model.prototype.findObject = function (path) {
            var ret = void 0;
            this.objects.forEach(function (obj) {
                if (!!Model.has(obj, path))
                    return ret = obj;
            });
            return ret;
        };
        Model.has = function (object, path) {
            return Model.order(object, path) === path.split('.').length;
            /*
            let ret = true;
            
            path.split('.')
            .forEach((part, index, parts) => {
                if(typeof object[part] === 'undefined')
                    return ret = false;
                else {
                    object = object[part]
                }
            })
            
            return ret;
            */
        };
        Model.order = function (object, path) {
            var order = 0;
            path.split('.')
                .every(function (part, index, parts) {
                if (typeof object[part] === 'undefined')
                    return false;
                else {
                    object = object[part];
                    order++;
                    return true;
                }
            });
            return order;
        };
        Model.highestOrder = function (objects, path) {
            return objects
                .map(function (obj) {
                return { order: Model.order(obj, path), object: obj };
            })
                .reduce(function (prev, curr) {
                return curr.order > prev.order ? curr : prev;
            }).object;
        };
        Model.get = function (object, path) {
            path.split('.')
                .forEach(function (part) {
                object = object && object[part];
            });
            return object;
        };
        Model.set = function (object, path, value) {
            var parts = path.split('.');
            var key = parts.pop();
            parts.forEach(function (part) {
                object = object[part];
            });
            object[key] = value;
        };
        return Model;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Model;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLm9iamVjdHMiLCJNb2RlbC5nZXQiLCJNb2RlbC5zZXQiLCJNb2RlbC5maW5kT2JqZWN0IiwiTW9kZWwuaGFzIiwiTW9kZWwub3JkZXIiLCJNb2RlbC5oaWdoZXN0T3JkZXIiXSwibWFwcGluZ3MiOiI7SUFFQTtRQUtDQSxlQUFZQSxPQUFrQkE7WUFGcEJDLGNBQVNBLEdBQXdCQSxFQUFFQSxDQUFDQTtZQUc3Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0E7UUFDekJBLENBQUNBO1FBRURELHNCQUFJQSwwQkFBT0E7aUJBQVhBO2dCQUNDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUN0QkEsQ0FBQ0E7OztXQUFBRjtRQUVNQSxtQkFBR0EsR0FBVkEsVUFBV0EsSUFBV0EsRUFBRUEsTUFBWUE7WUFBWkcsc0JBQVlBLEdBQVpBLGNBQVlBO1lBQ25DQTs7Ozs7Ozs7Ozs7Y0FXRUE7WUFDRkEsSUFBSUEsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDcERBLElBQUlBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3BDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxRQUFBQSxNQUFNQSxFQUFFQSxPQUFBQSxLQUFLQSxFQUFDQSxDQUFDQTtZQUV6QkEsOEJBQThCQTtZQUM5QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsS0FBS0EsS0FBS0EsV0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxNQUFNQSxDQUFDQSxFQUFDQSxNQUFNQSxFQUFFQSxLQUFLQSxDQUFDQSxFQUFFQSxLQUFL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LENBQUNBO1FBRUZKLFlBQUNBO0lBQURBLENBL0hBLEFBK0hDQSxJQUFBO0lBL0hEOzJCQStIQyxDQUFBIiwiZmlsZSI6ImJpbmQvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09iamVjdEFuZFZhbHVlfSBmcm9tIFwiLi4vdXRpbC90eXBlc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcblx0XHJcblx0cHJvdGVjdGVkIF9vYmplY3RzOkFycmF5PGFueT47XHJcblx0cHJvdGVjdGVkIHBhdGhDYWNoZToge1twYXRoOnN0cmluZ106YW55fSA9IHt9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG9iamVjdHM6QXJyYXk8YW55Pikge1xyXG5cdFx0dGhpcy5fb2JqZWN0cyA9IG9iamVjdHM7XHJcblx0fVxyXG5cdFxyXG5cdGdldCBvYmplY3RzKCk6IEFycmF5PGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29iamVjdHM7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXQocGF0aDpzdHJpbmcsIHN0cmljdD1mYWxzZSk6IE9iamVjdEFuZFZhbHVlIHtcclxuXHRcdC8qXHJcblx0XHRsZXQgcmV0OiBPYmplY3RBbmRWYWx1ZSA9IHtvYmplY3Q6IHZvaWQgMCwgdmFsdWU6IHZvaWQgMH07XHJcblx0XHR0aGlzLm9iamVjdHMuc29tZShvYmogPT4ge1xyXG5cdFx0XHRpZihNb2RlbC5oYXMob2JqLCBwYXRoKSkge1xyXG5cdFx0XHRcdHJldCA9IHtcclxuXHRcdFx0XHRcdG9iamVjdDogb2JqLFxyXG5cdFx0XHRcdFx0dmFsdWU6IE1vZGVsLmdldChvYmoscGF0aClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQqL1xyXG5cdFx0bGV0IG9iamVjdCA9IE1vZGVsLmhpZ2hlc3RPcmRlcih0aGlzLm9iamVjdHMsIHBhdGgpO1xyXG5cdFx0bGV0IHZhbHVlID0gTW9kZWwuZ2V0KG9iamVjdCwgcGF0aCk7XHJcblx0XHRsZXQgb3YgPSB7b2JqZWN0LCB2YWx1ZX07XHJcblx0XHRcclxuXHRcdC8vbm8gdmFsdWUgZm91bmQgLSBzdHJpY3QgbW9kZVxyXG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICYmICEhc3RyaWN0KSB7XHJcblx0XHRcdHJldHVybiB7b2JqZWN0OiB2b2lkIDAsIHZhbHVlOiB2YWx1ZX07XHJcblx0XHR9XHJcblx0XHQvL3ZhbHVlIGZvdW5kIHx8IG5vIHZhbHVlIGZvdW5kICYmICFzdHJpY3QgbW9kZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMucGF0aENhY2hlW3BhdGhdID0gb2JqZWN0O1xyXG5cdFx0XHRyZXR1cm4gb3Y7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzZXQocGF0aDpzdHJpbmcsIHZhbHVlOmFueSk6IHZvaWQge1xyXG5cdFx0aWYodHlwZW9mIHRoaXMucGF0aENhY2hlW3BhdGhdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdE1vZGVsLnNldCh0aGlzLnBhdGhDYWNoZVtwYXRoXSwgcGF0aCwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxldCBvYmplY3QgPSBNb2RlbC5oaWdoZXN0T3JkZXIodGhpcy5vYmplY3RzLCBwYXRoKTtcclxuXHRcdFx0TW9kZWwuc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBmaW5kT2JqZWN0KHBhdGg6c3RyaW5nKTogYW55IHtcclxuXHRcdGxldCByZXQgPSB2b2lkIDA7XHJcblx0XHR0aGlzLm9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG5cdFx0XHRpZighIU1vZGVsLmhhcyhvYmosIHBhdGgpKVxyXG5cdFx0XHRcdHJldHVybiByZXQgPSBvYmo7XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgaGFzKG9iamVjdDphbnksIHBhdGg6c3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gTW9kZWwub3JkZXIob2JqZWN0LCBwYXRoKSA9PT0gcGF0aC5zcGxpdCgnLicpLmxlbmd0aDtcclxuXHRcdC8qXHJcblx0XHRsZXQgcmV0ID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0cGF0aC5zcGxpdCgnLicpXHJcblx0XHQuZm9yRWFjaCgocGFydCwgaW5kZXgsIHBhcnRzKSA9PiB7XHJcblx0XHRcdGlmKHR5cGVvZiBvYmplY3RbcGFydF0gPT09ICd1bmRlZmluZWQnKVxyXG5cdFx0XHRcdHJldHVybiByZXQgPSBmYWxzZTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0b2JqZWN0ID0gb2JqZWN0W3BhcnRdXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdHJldHVybiByZXQ7XHJcblx0XHQqL1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgb3JkZXIob2JqZWN0OmFueSwgcGF0aDpzdHJpbmcpOiBudW1iZXIge1xyXG5cdFx0bGV0IG9yZGVyID0gMDtcclxuXHRcdFxyXG5cdFx0cGF0aC5zcGxpdCgnLicpXHJcblx0XHQuZXZlcnkoKHBhcnQsIGluZGV4LCBwYXJ0cykgPT4ge1xyXG5cdFx0XHRpZih0eXBlb2Ygb2JqZWN0W3BhcnRdID09PSAndW5kZWZpbmVkJylcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdG9iamVjdCA9IG9iamVjdFtwYXJ0XVxyXG5cdFx0XHRcdG9yZGVyKys7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdHJldHVybiBvcmRlcjtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGhpZ2hlc3RPcmRlcihvYmplY3RzOmFueVtdLCBwYXRoOnN0cmluZyk6IGFueSB7XHJcblx0XHRyZXR1cm4gb2JqZWN0c1xyXG5cdFx0Lm1hcChvYmogPT4ge1xyXG5cdFx0XHRyZXR1cm4ge29yZGVyOiBNb2RlbC5vcmRlcihvYmosIHBhdGgpLCBvYmplY3Q6IG9ian07XHJcblx0XHR9KVxyXG5cdFx0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gY3Vyci5vcmRlciA+IHByZXYub3JkZXIgPyBjdXJyIDogcHJldjtcclxuXHRcdH0pLm9iamVjdDtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldChvYmplY3Q6YW55LCBwYXRoOnN0cmluZyk6IGFueSB7XHJcblx0XHRwYXRoLnNwbGl0KCcuJylcclxuXHRcdC5mb3JFYWNoKHBhcnQgPT4ge1xyXG5cdFx0XHRvYmplY3QgPSBvYmplY3QgJiYgb2JqZWN0W3BhcnRdXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gb2JqZWN0O1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgc2V0KG9iamVjdDphbnksIHBhdGg6c3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcclxuXHRcdGxldCBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcclxuXHRcdGxldCBrZXkgPSBwYXJ0cy5wb3AoKTtcclxuXHRcdFxyXG5cdFx0cGFydHMuZm9yRWFjaChwYXJ0ID0+IHtcclxuXHRcdFx0b2JqZWN0ID0gb2JqZWN0W3BhcnRdXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG5cdH1cclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==