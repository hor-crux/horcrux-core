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
            var object = this.objects
                .map(function (obj) {
                return { order: Model.order(obj, path), object: obj };
            })
                .reduce(function (prev, curr) {
                return curr.order > prev.order ? curr : prev;
            }).object;
            var value = Model.get(object, path);
            var ov = { object: object, value: value };
            return typeof value !== "undefined" ? ov : (!!strict ? { object: void 0, value: value } : ov);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLm9iamVjdHMiLCJNb2RlbC5nZXQiLCJNb2RlbC5zZXQiLCJNb2RlbC5maW5kT2JqZWN0IiwiTW9kZWwuaGFzIiwiTW9kZWwub3JkZXIiXSwibWFwcGluZ3MiOiI7SUFFQTtRQUlDQSxlQUFZQSxPQUFrQkE7WUFDN0JDLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBO1FBQ3pCQSxDQUFDQTtRQUVERCxzQkFBSUEsMEJBQU9BO2lCQUFYQTtnQkFDQ0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDdEJBLENBQUNBOzs7V0FBQUY7UUFFTUEsbUJBQUdBLEdBQVZBLFVBQVdBLElBQVdBLEVBQUVBLE1BQVlBO1lBQVpHLHNCQUFZQSxHQUFaQSxjQUFZQTtZQUNuQ0E7Ozs7Ozs7Ozs7O2NBV0VBO1lBQ0ZBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BO2lCQUN4QkEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0E7Z0JBQ1BBLE1BQU1BLENBQUNBLEVBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQSxDQUFDQTtpQkFDREEsTUFBTUEsQ0FBQ0EsVUFBQ0EsSUFBSUEsRUFBRUEsSUFBSUE7Z0JBQ2xCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUM5Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFFVkEsSUFBSUEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FB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QUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUVNSCxTQUFHQSxHQUFWQSxVQUFXQSxNQUFVQSxFQUFFQSxJQUFXQSxFQUFFQSxLQUFTQTtZQUM1Q0ksSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO1lBRXRCQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxJQUFJQTtnQkFDakJBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUFBO1lBQ3RCQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUVGQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFFRkosWUFBQ0E7SUFBREEsQ0EvR0EsQUErR0NBLElBQUE7SUEvR0Q7MkJBK0dDLENBQUEiLCJmaWxlIjoiYmluZC9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JqZWN0QW5kVmFsdWV9IGZyb20gXCIuLi91dGlsL3R5cGVzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcclxuXHRcclxuXHRwcm90ZWN0ZWQgX29iamVjdHM6QXJyYXk8YW55PjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihvYmplY3RzOkFycmF5PGFueT4pIHtcclxuXHRcdHRoaXMuX29iamVjdHMgPSBvYmplY3RzO1xyXG5cdH1cclxuXHRcclxuXHRnZXQgb2JqZWN0cygpOiBBcnJheTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9vYmplY3RzO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0KHBhdGg6c3RyaW5nLCBzdHJpY3Q9ZmFsc2UpOiBPYmplY3RBbmRWYWx1ZSB7XHJcblx0XHQvKlxyXG5cdFx0bGV0IHJldDogT2JqZWN0QW5kVmFsdWUgPSB7b2JqZWN0OiB2b2lkIDAsIHZhbHVlOiB2b2lkIDB9O1xyXG5cdFx0dGhpcy5vYmplY3RzLnNvbWUob2JqID0+IHtcclxuXHRcdFx0aWYoTW9kZWwuaGFzKG9iaiwgcGF0aCkpIHtcclxuXHRcdFx0XHRyZXQgPSB7XHJcblx0XHRcdFx0XHRvYmplY3Q6IG9iaixcclxuXHRcdFx0XHRcdHZhbHVlOiBNb2RlbC5nZXQob2JqLHBhdGgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0Ki9cclxuXHRcdGxldCBvYmplY3QgPSB0aGlzLm9iamVjdHNcclxuXHRcdC5tYXAob2JqID0+IHtcclxuXHRcdFx0cmV0dXJuIHtvcmRlcjogTW9kZWwub3JkZXIob2JqLCBwYXRoKSwgb2JqZWN0OiBvYmp9O1xyXG5cdFx0fSlcclxuXHRcdC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuXHRcdFx0cmV0dXJuIGN1cnIub3JkZXIgPiBwcmV2Lm9yZGVyID8gY3VyciA6IHByZXY7XHJcblx0XHR9KS5vYmplY3Q7XHJcblx0XHRcclxuXHRcdGxldCB2YWx1ZSA9IE1vZGVsLmdldChvYmplY3QsIHBhdGgpO1xyXG5cdFx0bGV0IG92ID0ge29iamVjdCwgdmFsdWV9XHJcblx0XHRcclxuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgPyBvdiA6ICghIXN0cmljdCA/IHtvYmplY3Q6IHZvaWQgMCwgdmFsdWU6IHZhbHVlfSA6IG92ICk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzZXQocGF0aDpzdHJpbmcsIHZhbHVlOmFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5vYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuXHRcdFx0aWYoTW9kZWwuaGFzKG9iaiwgcGF0aCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gTW9kZWwuc2V0KG9iaiwgcGF0aCwgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZmluZE9iamVjdChwYXRoOnN0cmluZyk6IGFueSB7XHJcblx0XHRsZXQgcmV0ID0gdm9pZCAwO1xyXG5cdFx0dGhpcy5vYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuXHRcdFx0aWYoISFNb2RlbC5oYXMob2JqLCBwYXRoKSlcclxuXHRcdFx0XHRyZXR1cm4gcmV0ID0gb2JqO1xyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGhhcyhvYmplY3Q6YW55LCBwYXRoOnN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIE1vZGVsLm9yZGVyKG9iamVjdCwgcGF0aCkgPT09IHBhdGguc3BsaXQoJy4nKS5sZW5ndGg7XHJcblx0XHQvKlxyXG5cdFx0bGV0IHJldCA9IHRydWU7XHJcblx0XHRcclxuXHRcdHBhdGguc3BsaXQoJy4nKVxyXG5cdFx0LmZvckVhY2goKHBhcnQsIGluZGV4LCBwYXJ0cykgPT4ge1xyXG5cdFx0XHRpZih0eXBlb2Ygb2JqZWN0W3BhcnRdID09PSAndW5kZWZpbmVkJylcclxuXHRcdFx0XHRyZXR1cm4gcmV0ID0gZmFsc2U7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdG9iamVjdCA9IG9iamVjdFtwYXJ0XVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0Ki9cclxuXHR9XHJcblx0XHJcblx0c3RhdGljIG9yZGVyKG9iamVjdDphbnksIHBhdGg6c3RyaW5nKTogbnVtYmVyIHtcclxuXHRcdGxldCBvcmRlciA9IDA7XHJcblx0XHRcclxuXHRcdHBhdGguc3BsaXQoJy4nKVxyXG5cdFx0LmV2ZXJ5KChwYXJ0LCBpbmRleCwgcGFydHMpID0+IHtcclxuXHRcdFx0aWYodHlwZW9mIG9iamVjdFtwYXJ0XSA9PT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRvYmplY3QgPSBvYmplY3RbcGFydF1cclxuXHRcdFx0XHRvcmRlcisrO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gb3JkZXI7XHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBnZXQob2JqZWN0OmFueSwgcGF0aDpzdHJpbmcpOiBhbnkge1xyXG5cdFx0cGF0aC5zcGxpdCgnLicpXHJcblx0XHQuZm9yRWFjaChwYXJ0ID0+IHtcclxuXHRcdFx0b2JqZWN0ID0gb2JqZWN0ICYmIG9iamVjdFtwYXJ0XVxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG9iamVjdDtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIHNldChvYmplY3Q6YW55LCBwYXRoOnN0cmluZywgdmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHRsZXQgcGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XHJcblx0XHRsZXQga2V5ID0gcGFydHMucG9wKCk7XHJcblx0XHRcclxuXHRcdHBhcnRzLmZvckVhY2gocGFydCA9PiB7XHJcblx0XHRcdG9iamVjdCA9IG9iamVjdFtwYXJ0XVxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0b2JqZWN0W2tleV0gPSB2YWx1ZTtcclxuXHR9XHJcblx0XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=