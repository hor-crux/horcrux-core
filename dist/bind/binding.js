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
        Binding.prototype.onNewValue = function (callback, self, callNow) {
            var _this = this;
            if (callNow === void 0) { callNow = true; }
            this.changed = function (value) {
                !!self ? callback.call(self, value) : callback(value);
                _this.value = value;
            };
            if (callNow)
                this.changed(this.value);
        };
        Binding.prototype.getvalue = function () {
            return this.value;
        };
        Binding.prototype.getCounterBinding = function () {
            return this.other || new Binding(this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGluZy50cyJdLCJuYW1lcyI6WyJCaW5kaW5nIiwiQmluZGluZy5jb25zdHJ1Y3RvciIsIkJpbmRpbmcuc2V0TmV3VmFsdWUiLCJCaW5kaW5nLm9uTmV3VmFsdWUiLCJCaW5kaW5nLmdldHZhbHVlIiwiQmluZGluZy5nZXRDb3VudGVyQmluZGluZyIsIk1vZGVsQmluZGluZyIsIk1vZGVsQmluZGluZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUE7UUFNQ0EsaUJBQVlBLGNBQXVCQTtZQUNsQ0MsRUFBRUEsQ0FBQUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQTtnQkFDNUJBLGNBQWNBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBQzdCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVNRCw2QkFBV0EsR0FBbEJBLFVBQW1CQSxLQUFTQTtZQUMzQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLENBQUNBO1FBRU1GLDRCQUFVQSxHQUFqQkEsVUFBa0JBLFFBQXlCQSxFQUFFQSxJQUFTQSxFQUFFQSxPQUFZQTtZQUFwRUcsaUJBUUNBO1lBUnVEQSx1QkFBWUEsR0FBWkEsY0FBWUE7WUFDbkVBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQUFBLEtBQUtBO2dCQUNuQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3REQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0EsQ0FBQ0E7WUFFRkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ1ZBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTtRQUVNSCwwQkFBUUEsR0FBZkE7WUFDQ0ksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDbkJBLENBQUNBO1FBRU1KLG1DQUFpQkEsR0FBeEJBO1lBQ0NLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLElBQUlBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ3hDQSxDQUFDQTtRQUNGTCxjQUFDQTtJQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtJQXFDTyxlQUFPLFdBckNkO0lBRUQ7UUFBMkJNLGdDQUFPQTtRQUVqQ0EseUJBQXlCQTtRQUV6QkEsc0JBQVlBLFNBQWNBLEVBQUVBLEtBQVdBO1lBSnhDQyxpQkErQkNBO1lBMUJDQSxpQkFBT0EsQ0FBQ0E7WUFFUkEsWUFBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLElBQUlBLEtBQUtBLEdBQUdBLFlBQUtBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3hDQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDVkEsSUFBSUEsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxJQUFJQSxLQUFrQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBaENBLE1BQU1BLGNBQUVBLEtBQUtBLFdBQW1CQSxDQUFDQTtnQkFDdENBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLHdCQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFFOUNBLHlDQUF5Q0E7Z0JBQ3pDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFNQSxFQUFFQSxNQUFNQTtvQkFDNUJBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMxQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLHlDQUF5Q0E7Z0JBQ3pDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFBQSxHQUFHQTtvQkFDbEJBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQUE7WUFDVkEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ25DQSxDQUFDQTtRQUdGQSxDQUFDQTtRQUVGRCxtQkFBQ0E7SUFBREEsQ0EvQkEsQUErQkNBLEVBL0IwQixPQUFPLEVBK0JqQztJQUlnQixvQkFBWSxnQkFKNUI7SUFJNkIiLCJmaWxlIjoiYmluZC9iaW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnXHJcbmltcG9ydCB7IHJlZ2V4IH0gZnJvbSAnLi9iaW5kJ1xyXG5pbXBvcnQgeyBQYXRoT2JzZXJ2ZXIgfSBmcm9tICdvYnNlcnZlanMnXHJcblxyXG5jbGFzcyBCaW5kaW5nIHtcclxuXHRcclxuXHRwcml2YXRlIG90aGVyOkJpbmRpbmc7XHJcblx0cHJpdmF0ZSBjaGFuZ2VkOih2YWx1ZTphbnkpPT5hbnk7XHJcblx0cHJpdmF0ZSB2YWx1ZTogYW55O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKGNvdW50ZXJCaW5kaW5nPzpCaW5kaW5nKSB7XHJcblx0XHRpZihjb3VudGVyQmluZGluZykge1xyXG5cdFx0XHR0aGlzLm90aGVyID0gY291bnRlckJpbmRpbmc7XHJcblx0XHRcdGNvdW50ZXJCaW5kaW5nLm90aGVyID0gdGhpcztcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNldE5ld1ZhbHVlKHZhbHVlOmFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5vdGhlciAmJiB0aGlzLm90aGVyLmNoYW5nZWQodmFsdWUpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25OZXdWYWx1ZShjYWxsYmFjazoodmFsdWU6YW55KT0+YW55LCBzZWxmPzphbnksIGNhbGxOb3c9dHJ1ZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5jaGFuZ2VkID0gdmFsdWUgPT4ge1xyXG5cdFx0XHQhIXNlbGYgPyBjYWxsYmFjay5jYWxsKHNlbGYsIHZhbHVlKSA6IGNhbGxiYWNrKHZhbHVlKTtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0aWYoY2FsbE5vdylcclxuXHRcdFx0dGhpcy5jaGFuZ2VkKHRoaXMudmFsdWUpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0dmFsdWUoKTogYW55IHtcclxuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0Q291bnRlckJpbmRpbmcoKTogQmluZGluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5vdGhlciB8fCBuZXcgQmluZGluZyh0aGlzKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIE1vZGVsQmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xyXG5cdFxyXG5cdC8vVE9ETyBhZGQgVHJhbnNmb3JtYXRvcnNcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGU6QXR0ciwgbW9kZWw6TW9kZWwpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHJlZ2V4Lmxhc3RJbmRleCA9IDA7XHJcblx0XHRsZXQgbWF0Y2ggPSByZWdleC5leGVjKGF0dHJpYnV0ZS52YWx1ZSk7XHJcblx0XHRpZihtYXRjaCkge1xyXG5cdFx0XHRsZXQgcGF0aCA9IG1hdGNoWzFdO1xyXG5cdFx0XHRsZXQge29iamVjdCwgdmFsdWV9ID0gbW9kZWwuZ2V0KHBhdGgpO1xyXG5cdFx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgUGF0aE9ic2VydmVyKG9iamVjdCwgcGF0aCk7XHJcblx0XHJcblx0XHRcdC8vIHVwZGF0ZSBDb3VudGVyLUJpbmRpbmcgb24gTW9kZWwtQ2hhbmdlXHJcblx0XHRcdG9ic2VydmVyLm9wZW4oKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXROZXdWYWx1ZShuZXdWYWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIHVwZGF0ZSBNb2RlbCBvbiBDb3VudGVyLUJpbmRpbmctQ2hhbmdlXHJcblx0XHRcdHRoaXMub25OZXdWYWx1ZSh2YWwgPT4ge1xyXG5cdFx0XHRcdG1vZGVsLnNldChwYXRoLCB2YWwpO1xyXG5cdFx0XHR9LCBmYWxzZSlcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNldE5ld1ZhbHVlKGF0dHJpYnV0ZS52YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtCaW5kaW5nLCBNb2RlbEJpbmRpbmd9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9