var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './bind', 'observejs'], function (require, exports, bind_1, observejs_1) {
    var Binding = (function () {
        function Binding(counterBinding) {
            if (counterBinding) {
                this.other = counterBinding;
                counterBinding.other = this;
            }
        }
        Binding.prototype.setNewValue = function (value) {
            this.other && this.other.changed(value);
        };
        Binding.prototype.onNewValue = function (callback, callNow) {
            var _this = this;
            if (callNow === void 0) { callNow = true; }
            this.changed = function (value) {
                callback(value);
                _this.value = value;
            };
            if (callNow)
                this.changed(this.value);
        };
        Binding.prototype.getvalue = function () {
            return this.value;
        };
        Binding.prototype.getCounterBinding = function () {
            var counter = this.other || new Binding(this);
            counter.value = this.value;
            return counter;
        };
        return Binding;
    })();
    exports.Binding = Binding;
    var ModelBinding = (function (_super) {
        __extends(ModelBinding, _super);
        //TODO add Transformators
        function ModelBinding(attribute, model) {
            var _this = this;
            _super.call(this);
            bind_1.regex.lastIndex = 0;
            var match = bind_1.regex.exec(attribute.value);
            if (match) {
                var path = match[1];
                var _a = model.get(path), object = _a.object, value = _a.value;
                var observer = new observejs_1.PathObserver(object, path);
                this.value = value;
                // update Counter-Binding on Model-Change
                observer.open(function (newVal, oldVal) {
                    _this.setNewValue(newVal);
                });
                // update Model on Counter-Binding-Change
                this.onNewValue(function (val) {
                    model.set(path, val);
                }, false);
            }
            else {
                this.setNewValue(attribute.value);
            }
        }
        return ModelBinding;
    })(Binding);
    exports.ModelBinding = ModelBinding;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGluZy50cyJdLCJuYW1lcyI6WyJCaW5kaW5nIiwiQmluZGluZy5jb25zdHJ1Y3RvciIsIkJpbmRpbmcuc2V0TmV3VmFsdWUiLCJCaW5kaW5nLm9uTmV3VmFsdWUiLCJCaW5kaW5nLmdldHZhbHVlIiwiQmluZGluZy5nZXRDb3VudGVyQmluZGluZyIsIk1vZGVsQmluZGluZyIsIk1vZGVsQmluZGluZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUE7UUFNQ0EsaUJBQVlBLGNBQXVCQTtZQUNsQ0MsRUFBRUEsQ0FBQUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQTtnQkFDNUJBLGNBQWNBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBQzdCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVNRCw2QkFBV0EsR0FBbEJBLFVBQW1CQSxLQUFTQTtZQUMzQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLENBQUNBO1FBRU1GLDRCQUFVQSxHQUFqQkEsVUFBa0JBLFFBQXlCQSxFQUFFQSxPQUFZQTtZQUF6REcsaUJBUUNBO1lBUjRDQSx1QkFBWUEsR0FBWkEsY0FBWUE7WUFDeERBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQUFBLEtBQUtBO2dCQUNuQkEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hCQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0EsQ0FBQ0E7WUFFRkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ1ZBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTtRQUVNSCwwQkFBUUEsR0FBZkE7WUFDQ0ksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDbkJBLENBQUNBO1FBRU1KLG1DQUFpQkEsR0FBeEJBO1lBQ0NLLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLElBQUlBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzlDQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUUzQkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDaEJBLENBQUNBO1FBQ0ZMLGNBQUNBO0lBQURBLENBckNBLEFBcUNDQSxJQUFBO0lBdUNPLGVBQU8sV0F2Q2Q7SUFFRDtRQUEyQk0sZ0NBQU9BO1FBRWpDQSx5QkFBeUJBO1FBRXpCQSxzQkFBWUEsU0FBY0EsRUFBRUEsS0FBV0E7WUFKeENDLGlCQWlDQ0E7WUE1QkNBLGlCQUFPQSxDQUFDQTtZQUVSQSxZQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNwQkEsSUFBSUEsS0FBS0EsR0FBR0EsWUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDeENBLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUNWQSxJQUFJQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDcEJBLElBQUlBLEtBQWtCQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFoQ0EsTUFBTUEsY0FBRUEsS0FBS0EsV0FBbUJBLENBQUNBO2dCQUN0Q0EsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsd0JBQVlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUU5Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBRW5CQSx5Q0FBeUNBO2dCQUN6Q0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsTUFBTUEsRUFBRUEsTUFBTUE7b0JBQzVCQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDMUJBLENBQUNBLENBQUNBLENBQUNBO2dCQUVIQSx5Q0FBeUNBO2dCQUN6Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBQUEsR0FBR0E7b0JBQ2xCQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDdEJBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUFBO1lBQ1ZBLENBQUNBO1lBQ0RBLElBQUlBLENBQUNBLENBQUNBO2dCQUNMQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNuQ0EsQ0FBQ0E7UUFHRkEsQ0FBQ0E7UUFFRkQsbUJBQUNBO0lBQURBLENBakNBLEFBaUNDQSxFQWpDMEIsT0FBTyxFQWlDakM7SUFJZ0Isb0JBQVksZ0JBSjVCO0lBSTZCIiwiZmlsZSI6ImJpbmQvYmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJ1xyXG5pbXBvcnQgeyByZWdleCB9IGZyb20gJy4vYmluZCdcclxuaW1wb3J0IHsgUGF0aE9ic2VydmVyIH0gZnJvbSAnb2JzZXJ2ZWpzJ1xyXG5cclxuY2xhc3MgQmluZGluZyB7XHJcblx0XHJcblx0cHJvdGVjdGVkIG90aGVyOkJpbmRpbmc7XHJcblx0cHJvdGVjdGVkIGNoYW5nZWQ6KHZhbHVlOmFueSk9PmFueTtcclxuXHRwcm90ZWN0ZWQgdmFsdWU6IGFueTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihjb3VudGVyQmluZGluZz86QmluZGluZykge1xyXG5cdFx0aWYoY291bnRlckJpbmRpbmcpIHtcclxuXHRcdFx0dGhpcy5vdGhlciA9IGNvdW50ZXJCaW5kaW5nO1xyXG5cdFx0XHRjb3VudGVyQmluZGluZy5vdGhlciA9IHRoaXM7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzZXROZXdWYWx1ZSh2YWx1ZTphbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMub3RoZXIgJiYgdGhpcy5vdGhlci5jaGFuZ2VkKHZhbHVlKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uTmV3VmFsdWUoY2FsbGJhY2s6KHZhbHVlOmFueSk9PmFueSwgY2FsbE5vdz10cnVlKTogdm9pZCB7XHJcblx0XHR0aGlzLmNoYW5nZWQgPSB2YWx1ZSA9PiB7XHJcblx0XHRcdGNhbGxiYWNrKHZhbHVlKTtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0aWYoY2FsbE5vdylcclxuXHRcdFx0dGhpcy5jaGFuZ2VkKHRoaXMudmFsdWUpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0dmFsdWUoKTogYW55IHtcclxuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0Q291bnRlckJpbmRpbmcoKTogQmluZGluZyB7XHJcblx0XHRsZXQgY291bnRlciA9IHRoaXMub3RoZXIgfHwgbmV3IEJpbmRpbmcodGhpcyk7XHJcblx0XHRjb3VudGVyLnZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGNvdW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBNb2RlbEJpbmRpbmcgZXh0ZW5kcyBCaW5kaW5nIHtcclxuXHRcclxuXHQvL1RPRE8gYWRkIFRyYW5zZm9ybWF0b3JzXHJcblx0XHJcblx0Y29uc3RydWN0b3IoYXR0cmlidXRlOkF0dHIsIG1vZGVsOk1vZGVsKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHRyZWdleC5sYXN0SW5kZXggPSAwO1xyXG5cdFx0bGV0IG1hdGNoID0gcmVnZXguZXhlYyhhdHRyaWJ1dGUudmFsdWUpO1xyXG5cdFx0aWYobWF0Y2gpIHtcclxuXHRcdFx0bGV0IHBhdGggPSBtYXRjaFsxXTtcclxuXHRcdFx0bGV0IHtvYmplY3QsIHZhbHVlfSA9IG1vZGVsLmdldChwYXRoKTtcclxuXHRcdFx0bGV0IG9ic2VydmVyID0gbmV3IFBhdGhPYnNlcnZlcihvYmplY3QsIHBhdGgpO1xyXG5cdFxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHJcblx0XHRcdC8vIHVwZGF0ZSBDb3VudGVyLUJpbmRpbmcgb24gTW9kZWwtQ2hhbmdlXHJcblx0XHRcdG9ic2VydmVyLm9wZW4oKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXROZXdWYWx1ZShuZXdWYWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIHVwZGF0ZSBNb2RlbCBvbiBDb3VudGVyLUJpbmRpbmctQ2hhbmdlXHJcblx0XHRcdHRoaXMub25OZXdWYWx1ZSh2YWwgPT4ge1xyXG5cdFx0XHRcdG1vZGVsLnNldChwYXRoLCB2YWwpO1xyXG5cdFx0XHR9LCBmYWxzZSlcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNldE5ld1ZhbHVlKGF0dHJpYnV0ZS52YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtCaW5kaW5nLCBNb2RlbEJpbmRpbmd9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9