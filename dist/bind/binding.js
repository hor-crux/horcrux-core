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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGluZy50cyJdLCJuYW1lcyI6WyJCaW5kaW5nIiwiQmluZGluZy5jb25zdHJ1Y3RvciIsIkJpbmRpbmcuc2V0TmV3VmFsdWUiLCJCaW5kaW5nLm9uTmV3VmFsdWUiLCJCaW5kaW5nLmdldHZhbHVlIiwiQmluZGluZy5nZXRDb3VudGVyQmluZGluZyIsIk1vZGVsQmluZGluZyIsIk1vZGVsQmluZGluZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUE7UUFNQ0EsaUJBQVlBLGNBQXVCQTtZQUNsQ0MsRUFBRUEsQ0FBQUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQTtnQkFDNUJBLGNBQWNBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBQzdCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVNRCw2QkFBV0EsR0FBbEJBLFVBQW1CQSxLQUFTQTtZQUMzQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLENBQUNBO1FBRU1GLDRCQUFVQSxHQUFqQkEsVUFBa0JBLFFBQXlCQSxFQUFFQSxPQUFZQTtZQUF6REcsaUJBUUNBO1lBUjRDQSx1QkFBWUEsR0FBWkEsY0FBWUE7WUFDeERBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQUFBLEtBQUtBO2dCQUNuQkEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hCQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0EsQ0FBQ0E7WUFFRkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ1ZBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTtRQUVNSCwwQkFBUUEsR0FBZkE7WUFDQ0ksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDbkJBLENBQUNBO1FBRU1KLG1DQUFpQkEsR0FBeEJBO1lBQ0NLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLElBQUlBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ3hDQSxDQUFDQTtRQUNGTCxjQUFDQTtJQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtJQXFDTyxlQUFPLFdBckNkO0lBRUQ7UUFBMkJNLGdDQUFPQTtRQUVqQ0EseUJBQXlCQTtRQUV6QkEsc0JBQVlBLFNBQWNBLEVBQUVBLEtBQVdBO1lBSnhDQyxpQkErQkNBO1lBMUJDQSxpQkFBT0EsQ0FBQ0E7WUFFUkEsWUFBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLElBQUlBLEtBQUtBLEdBQUdBLFlBQUtBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3hDQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDVkEsSUFBSUEsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxJQUFJQSxLQUFrQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBaENBLE1BQU1BLGNBQUVBLEtBQUtBLFdBQW1CQSxDQUFDQTtnQkFDdENBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLHdCQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFFOUNBLHlDQUF5Q0E7Z0JBQ3pDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFNQSxFQUFFQSxNQUFNQTtvQkFDNUJBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMxQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLHlDQUF5Q0E7Z0JBQ3pDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFBQSxHQUFHQTtvQkFDbEJBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQUE7WUFDVkEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ25DQSxDQUFDQTtRQUdGQSxDQUFDQTtRQUVGRCxtQkFBQ0E7SUFBREEsQ0EvQkEsQUErQkNBLEVBL0IwQixPQUFPLEVBK0JqQztJQUlnQixvQkFBWSxnQkFKNUI7SUFJNkIiLCJmaWxlIjoiYmluZC9iaW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnXHJcbmltcG9ydCB7IHJlZ2V4IH0gZnJvbSAnLi9iaW5kJ1xyXG5pbXBvcnQgeyBQYXRoT2JzZXJ2ZXIgfSBmcm9tICdvYnNlcnZlanMnXHJcblxyXG5jbGFzcyBCaW5kaW5nIHtcclxuXHRcclxuXHRwcml2YXRlIG90aGVyOkJpbmRpbmc7XHJcblx0cHJpdmF0ZSBjaGFuZ2VkOih2YWx1ZTphbnkpPT5hbnk7XHJcblx0cHJpdmF0ZSB2YWx1ZTogYW55O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKGNvdW50ZXJCaW5kaW5nPzpCaW5kaW5nKSB7XHJcblx0XHRpZihjb3VudGVyQmluZGluZykge1xyXG5cdFx0XHR0aGlzLm90aGVyID0gY291bnRlckJpbmRpbmc7XHJcblx0XHRcdGNvdW50ZXJCaW5kaW5nLm90aGVyID0gdGhpcztcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIHNldE5ld1ZhbHVlKHZhbHVlOmFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5vdGhlciAmJiB0aGlzLm90aGVyLmNoYW5nZWQodmFsdWUpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25OZXdWYWx1ZShjYWxsYmFjazoodmFsdWU6YW55KT0+YW55LCBjYWxsTm93PXRydWUpOiB2b2lkIHtcclxuXHRcdHRoaXMuY2hhbmdlZCA9IHZhbHVlID0+IHtcclxuXHRcdFx0Y2FsbGJhY2sodmFsdWUpO1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRpZihjYWxsTm93KVxyXG5cdFx0XHR0aGlzLmNoYW5nZWQodGhpcy52YWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXR2YWx1ZSgpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXRDb3VudGVyQmluZGluZygpOiBCaW5kaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLm90aGVyIHx8IG5ldyBCaW5kaW5nKHRoaXMpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgTW9kZWxCaW5kaW5nIGV4dGVuZHMgQmluZGluZyB7XHJcblx0XHJcblx0Ly9UT0RPIGFkZCBUcmFuc2Zvcm1hdG9yc1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKGF0dHJpYnV0ZTpBdHRyLCBtb2RlbDpNb2RlbCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0cmVnZXgubGFzdEluZGV4ID0gMDtcclxuXHRcdGxldCBtYXRjaCA9IHJlZ2V4LmV4ZWMoYXR0cmlidXRlLnZhbHVlKTtcclxuXHRcdGlmKG1hdGNoKSB7XHJcblx0XHRcdGxldCBwYXRoID0gbWF0Y2hbMV07XHJcblx0XHRcdGxldCB7b2JqZWN0LCB2YWx1ZX0gPSBtb2RlbC5nZXQocGF0aCk7XHJcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcclxuXHRcclxuXHRcdFx0Ly8gdXBkYXRlIENvdW50ZXItQmluZGluZyBvbiBNb2RlbC1DaGFuZ2VcclxuXHRcdFx0b2JzZXJ2ZXIub3BlbigobmV3VmFsLCBvbGRWYWwpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gdXBkYXRlIE1vZGVsIG9uIENvdW50ZXItQmluZGluZy1DaGFuZ2VcclxuXHRcdFx0dGhpcy5vbk5ld1ZhbHVlKHZhbCA9PiB7XHJcblx0XHRcdFx0bW9kZWwuc2V0KHBhdGgsIHZhbCk7XHJcblx0XHRcdH0sIGZhbHNlKVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMuc2V0TmV3VmFsdWUoYXR0cmlidXRlLnZhbHVlKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge0JpbmRpbmcsIE1vZGVsQmluZGluZ30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=