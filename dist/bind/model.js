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
            var ret = { object: void 0, value: void 0 };
            this.objects.some(function (obj) {
                if (Model.has(obj, path)) {
                    ret = {
                        object: obj,
                        value: Model.get(obj, path)
                    };
                    return true;
                }
            });
            return !!ret.object ? ret : (!!strict ? ret : { object: this.objects[0], value: ret.value });
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
            var ret = true;
            path.split('.')
                .forEach(function (part, index, parts) {
                if (typeof object[part] === 'undefined' && index + 1 < parts.length)
                    return ret = false;
                else {
                    object = object[part];
                }
            });
            return ret;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLm9iamVjdHMiLCJNb2RlbC5nZXQiLCJNb2RlbC5zZXQiLCJNb2RlbC5maW5kT2JqZWN0IiwiTW9kZWwuaGFzIl0sIm1hcHBpbmdzIjoiO0lBRUE7UUFJQ0EsZUFBWUEsT0FBa0JBO1lBQzdCQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFFREQsc0JBQUlBLDBCQUFPQTtpQkFBWEE7Z0JBQ0NFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO1lBQ3RCQSxDQUFDQTs7O1dBQUFGO1FBRU1BLG1CQUFHQSxHQUFWQSxVQUFXQSxJQUFXQSxFQUFFQSxNQUFZQTtZQUFaRyxzQkFBWUEsR0FBWkEsY0FBWUE7WUFDbkNBLElBQUlBLEdBQUdBLEdBQW1CQSxFQUFDQSxNQUFNQSxFQUFFQSxLQUFLQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxLQUFLQSxDQUFDQSxFQUFDQSxDQUFDQTtZQUUxREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsR0FBR0E7Z0JBQ3BCQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDekJBLEdBQUdBLEdBQUdBO3dCQUNMQSxNQUFNQSxFQUFFQSxHQUFHQTt3QkFDWEEsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0E7cUJBQzFCQSxDQUFBQTtvQkFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ2JBLENBQUNBO1lBQ0ZBLENBQUNBLENBQUNBLENBQUFBO1lBRUZBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdB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QU1BLEdBQUdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUFBO1lBQ3RCQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUVGQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFFRkosWUFBQ0E7SUFBREEsQ0FqRkEsQUFpRkNBLElBQUE7SUFqRkQ7MkJBaUZDLENBQUEiLCJmaWxlIjoiYmluZC9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JqZWN0QW5kVmFsdWV9IGZyb20gXCIuLi91dGlsL3R5cGVzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcclxuXHRcclxuXHRwcm90ZWN0ZWQgX29iamVjdHM6QXJyYXk8YW55PjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihvYmplY3RzOkFycmF5PGFueT4pIHtcclxuXHRcdHRoaXMuX29iamVjdHMgPSBvYmplY3RzO1xyXG5cdH1cclxuXHRcclxuXHRnZXQgb2JqZWN0cygpOiBBcnJheTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9vYmplY3RzO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0KHBhdGg6c3RyaW5nLCBzdHJpY3Q9ZmFsc2UpOiBPYmplY3RBbmRWYWx1ZSB7XHJcblx0XHRsZXQgcmV0OiBPYmplY3RBbmRWYWx1ZSA9IHtvYmplY3Q6IHZvaWQgMCwgdmFsdWU6IHZvaWQgMH07XHJcblx0XHRcclxuXHRcdHRoaXMub2JqZWN0cy5zb21lKG9iaiA9PiB7XHJcblx0XHRcdGlmKE1vZGVsLmhhcyhvYmosIHBhdGgpKSB7XHJcblx0XHRcdFx0cmV0ID0ge1xyXG5cdFx0XHRcdFx0b2JqZWN0OiBvYmosXHJcblx0XHRcdFx0XHR2YWx1ZTogTW9kZWwuZ2V0KG9iaixwYXRoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuICEhcmV0Lm9iamVjdCA/IHJldCA6ICghIXN0cmljdCA/IHJldCA6IHtvYmplY3Q6dGhpcy5vYmplY3RzWzBdLCB2YWx1ZTpyZXQudmFsdWV9KTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNldChwYXRoOnN0cmluZywgdmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHR0aGlzLm9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG5cdFx0XHRpZihNb2RlbC5oYXMob2JqLCBwYXRoKSkge1xyXG5cdFx0XHRcdHJldHVybiBNb2RlbC5zZXQob2JqLCBwYXRoLCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBmaW5kT2JqZWN0KHBhdGg6c3RyaW5nKTogYW55IHtcclxuXHRcdGxldCByZXQgPSB2b2lkIDA7XHJcblx0XHR0aGlzLm9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG5cdFx0XHRpZighIU1vZGVsLmhhcyhvYmosIHBhdGgpKVxyXG5cdFx0XHRcdHJldHVybiByZXQgPSBvYmo7XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgaGFzKG9iamVjdDphbnksIHBhdGg6c3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRsZXQgcmV0ID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0cGF0aC5zcGxpdCgnLicpXHJcblx0XHQuZm9yRWFjaCgocGFydCwgaW5kZXgsIHBhcnRzKSA9PiB7XHJcblx0XHRcdGlmKHR5cGVvZiBvYmplY3RbcGFydF0gPT09ICd1bmRlZmluZWQnICYmIGluZGV4KzEgPCBwYXJ0cy5sZW5ndGgpXHJcblx0XHRcdFx0cmV0dXJuIHJldCA9IGZhbHNlO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRvYmplY3QgPSBvYmplY3RbcGFydF1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldChvYmplY3Q6YW55LCBwYXRoOnN0cmluZyk6IGFueSB7XHJcblx0XHRwYXRoLnNwbGl0KCcuJylcclxuXHRcdC5mb3JFYWNoKHBhcnQgPT4ge1xyXG5cdFx0XHRvYmplY3QgPSBvYmplY3QgJiYgb2JqZWN0W3BhcnRdXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gb2JqZWN0O1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgc2V0KG9iamVjdDphbnksIHBhdGg6c3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcclxuXHRcdGxldCBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcclxuXHRcdGxldCBrZXkgPSBwYXJ0cy5wb3AoKTtcclxuXHRcdFxyXG5cdFx0cGFydHMuZm9yRWFjaChwYXJ0ID0+IHtcclxuXHRcdFx0b2JqZWN0ID0gb2JqZWN0W3BhcnRdXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG5cdH1cclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==