define(["require", "exports"], function (require, exports) {
    var Model = (function () {
        function Model(objects) {
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
            var obj = this.objects
                .map(function (obj) {
                return { order: Model.order(obj, path), object: obj };
            })
                .reduce(function (prev, curr) {
                return curr.order > prev.order ? curr : prev;
            }).object;
            var ret = Model.get(obj, path);
            return typeof ret.value === "undefined" ? ret : (!!strict ? { object: void 0, value: void 0 } : ret);
        };
        Model.prototype.set = function (path, value) {
            this.objects.forEach(function (obj) {
                if (Model.has(obj, path)) {
                    return Model.set(obj, path, value);
                }
            });
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
                }
            });
            return order;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLm9iamVjdHMiLCJNb2RlbC5nZXQiLCJNb2RlbC5zZXQiLCJNb2RlbC5maW5kT2JqZWN0IiwiTW9kZWwuaGFzIiwiTW9kZWwub3JkZXIiXSwibWFwcGluZ3MiOiI7SUFFQTtRQUlDQSxlQUFZQSxPQUFrQkE7WUFDN0JDLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBO1FBQ3pCQSxDQUFDQTtRQUVERCxzQkFBSUEsMEJBQU9BO2lCQUFYQTtnQkFDQ0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDdEJBLENBQUNBOzs7V0FBQUY7UUFFTUEsbUJBQUdBLEdBQVZBLFVBQVdBLElBQVdBLEVBQUVBLE1BQVlBO1lBQVpHLHNCQUFZQSxHQUFaQSxjQUFZQTtZQUNuQ0E7Ozs7Ozs7Ozs7O2NBV0VBO1lBQ0ZBLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BO2lCQUNyQkEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0E7Z0JBQ1BBLE1BQU1BLENBQUNBLEVBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQSxDQUFDQTtpQkFDREEsTUFBTUEsQ0FBQ0EsVUFBQ0EsSUFBSUEsRUFBRUEsSUFBSUE7Z0JBQ2xCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUM5Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFFVkEsSUFBSUEsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFL0JBLE1BQU1BLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLEtBQUtBLEtBQUtBLFdBQVdBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLEVBQUNBLE1BQU1BLEVBQUVBLEtBQUtBLENBQUNBLEVBQUVBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBLEVBQUNBLEdBQUdBLEdBQUdBLENBQUVBLENBQUNBO1FBQ3JHQSxDQUFDQTtRQUVNSCxtQkFBR0EsR0FBVkEsVUFBV0EsSUFBV0EsRUFBRUEsS0FBU0E7WUFDaENJLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLEdBQUdBO2dCQUN2QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDcENBLENBQUNBO1lBQ0ZBLENBQUNBLENBQUNBLENBQUFBO1FBQ0hBLENBQUNBO1FBRU1KLDBCQUFVQSxHQUFqQkEsVUFBa0JBLElBQVdBO1lBQzVCSyxJQUFJQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNqQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsR0FBR0E7Z0JBQ3ZCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDekJBLE1BQU1BLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO1lBQ25CQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUVGQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNaQSxDQUFDQTtRQUVNTCxTQUFHQSxHQUFWQSxVQUFXQSxNQUFVQSxFQUFFQSxJQUFXQTtZQUNqQ00sTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDNURBOzs7Ozs7Ozs7Ozs7O2NBYUVBO1FBQ0hBLENBQUNBO1FBRU1OLFdBQUtBLEdBQVpBLFVBQWFBLE1BQVVBLEVBQUVBLElBQVdBO1lBQ25DTyxJQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUVkQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQTtpQkFDZEEsS0FBS0EsQ0FBQ0EsVUFBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsS0FBS0E7Z0JBQ3pCQSxFQUFFQSxDQUFBQSxDQUFDQSxPQUFPQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxXQUFXQSxDQUFDQTtvQkFDdENBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO2dCQUNkQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDTEEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUE7b0JBQ3JCQSxLQUFLQSxFQUFFQSxDQUFDQTtnQkFDVEEsQ0FBQ0E7WUFDRkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFFRkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFTVAsU0FBR0EsR0FBVkEsVUFBV0EsTUFBVUEsRUFBRUEsSUFBV0E7WUFDakNHLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBO2lCQUNkQSxPQUFPQSxDQUFDQSxVQUFBQSxJQUFJQTtnQkFDWkEsTUFBTUEsR0FBR0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUE7WUFDaENBLENBQUNBLENBQUNBLENBQUFBO1lBRUZBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO1FBQ2ZBLENBQUNBO1FBRU1ILFNBQUdBLEdBQVZBLFVBQVdBLE1BQVVBLEVBQUVBLElBQVdBLEVBQUVBLEtBQVNBO1lBQzVDSSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM1QkEsSUFBSUEsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFFdEJBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLElBQUlBO2dCQUNqQkEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUE7WUFDdEJBLENBQUNBLENBQUNBLENBQUFBO1lBRUZBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUVGSixZQUFDQTtJQUFEQSxDQTlHQSxBQThHQ0EsSUFBQTtJQTlHRDsyQkE4R0MsQ0FBQSIsImZpbGUiOiJiaW5kL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYmplY3RBbmRWYWx1ZX0gZnJvbSBcIi4uL3V0aWwvdHlwZXNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xyXG5cdFxyXG5cdHByb3RlY3RlZCBfb2JqZWN0czpBcnJheTxhbnk+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG9iamVjdHM6QXJyYXk8YW55Pikge1xyXG5cdFx0dGhpcy5fb2JqZWN0cyA9IG9iamVjdHM7XHJcblx0fVxyXG5cdFxyXG5cdGdldCBvYmplY3RzKCk6IEFycmF5PGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29iamVjdHM7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXQocGF0aDpzdHJpbmcsIHN0cmljdD1mYWxzZSk6IE9iamVjdEFuZFZhbHVlIHtcclxuXHRcdC8qXHJcblx0XHRsZXQgcmV0OiBPYmplY3RBbmRWYWx1ZSA9IHtvYmplY3Q6IHZvaWQgMCwgdmFsdWU6IHZvaWQgMH07XHJcblx0XHR0aGlzLm9iamVjdHMuc29tZShvYmogPT4ge1xyXG5cdFx0XHRpZihNb2RlbC5oYXMob2JqLCBwYXRoKSkge1xyXG5cdFx0XHRcdHJldCA9IHtcclxuXHRcdFx0XHRcdG9iamVjdDogb2JqLFxyXG5cdFx0XHRcdFx0dmFsdWU6IE1vZGVsLmdldChvYmoscGF0aClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQqL1xyXG5cdFx0bGV0IG9iaiA9IHRoaXMub2JqZWN0c1xyXG5cdFx0Lm1hcChvYmogPT4ge1xyXG5cdFx0XHRyZXR1cm4ge29yZGVyOiBNb2RlbC5vcmRlcihvYmosIHBhdGgpLCBvYmplY3Q6IG9ian07XHJcblx0XHR9KVxyXG5cdFx0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gY3Vyci5vcmRlciA+IHByZXYub3JkZXIgPyBjdXJyIDogcHJldjtcclxuXHRcdH0pLm9iamVjdDtcclxuXHRcdFxyXG5cdFx0bGV0IHJldCA9IE1vZGVsLmdldChvYmosIHBhdGgpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHlwZW9mIHJldC52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IHJldCA6ICghIXN0cmljdCA/IHtvYmplY3Q6IHZvaWQgMCwgdmFsdWU6IHZvaWQgMH0gOiByZXQgKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNldChwYXRoOnN0cmluZywgdmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHR0aGlzLm9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG5cdFx0XHRpZihNb2RlbC5oYXMob2JqLCBwYXRoKSkge1xyXG5cdFx0XHRcdHJldHVybiBNb2RlbC5zZXQob2JqLCBwYXRoLCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBmaW5kT2JqZWN0KHBhdGg6c3RyaW5nKTogYW55IHtcclxuXHRcdGxldCByZXQgPSB2b2lkIDA7XHJcblx0XHR0aGlzLm9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG5cdFx0XHRpZighIU1vZGVsLmhhcyhvYmosIHBhdGgpKVxyXG5cdFx0XHRcdHJldHVybiByZXQgPSBvYmo7XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgaGFzKG9iamVjdDphbnksIHBhdGg6c3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gTW9kZWwub3JkZXIob2JqZWN0LCBwYXRoKSA9PT0gcGF0aC5zcGxpdCgnLicpLmxlbmd0aDtcclxuXHRcdC8qXHJcblx0XHRsZXQgcmV0ID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0cGF0aC5zcGxpdCgnLicpXHJcblx0XHQuZm9yRWFjaCgocGFydCwgaW5kZXgsIHBhcnRzKSA9PiB7XHJcblx0XHRcdGlmKHR5cGVvZiBvYmplY3RbcGFydF0gPT09ICd1bmRlZmluZWQnKVxyXG5cdFx0XHRcdHJldHVybiByZXQgPSBmYWxzZTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0b2JqZWN0ID0gb2JqZWN0W3BhcnRdXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdHJldHVybiByZXQ7XHJcblx0XHQqL1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgb3JkZXIob2JqZWN0OmFueSwgcGF0aDpzdHJpbmcpOiBudW1iZXIge1xyXG5cdFx0bGV0IG9yZGVyID0gMDtcclxuXHRcdFxyXG5cdFx0cGF0aC5zcGxpdCgnLicpXHJcblx0XHQuZXZlcnkoKHBhcnQsIGluZGV4LCBwYXJ0cykgPT4ge1xyXG5cdFx0XHRpZih0eXBlb2Ygb2JqZWN0W3BhcnRdID09PSAndW5kZWZpbmVkJylcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdG9iamVjdCA9IG9iamVjdFtwYXJ0XVxyXG5cdFx0XHRcdG9yZGVyKys7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdHJldHVybiBvcmRlcjtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldChvYmplY3Q6YW55LCBwYXRoOnN0cmluZyk6IGFueSB7XHJcblx0XHRwYXRoLnNwbGl0KCcuJylcclxuXHRcdC5mb3JFYWNoKHBhcnQgPT4ge1xyXG5cdFx0XHRvYmplY3QgPSBvYmplY3QgJiYgb2JqZWN0W3BhcnRdXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gb2JqZWN0O1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgc2V0KG9iamVjdDphbnksIHBhdGg6c3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcclxuXHRcdGxldCBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcclxuXHRcdGxldCBrZXkgPSBwYXJ0cy5wb3AoKTtcclxuXHRcdFxyXG5cdFx0cGFydHMuZm9yRWFjaChwYXJ0ID0+IHtcclxuXHRcdFx0b2JqZWN0ID0gb2JqZWN0W3BhcnRdXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG5cdH1cclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==