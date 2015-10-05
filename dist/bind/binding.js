var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './bind', 'observejs'], function (require, exports, bind_1, observejs_1) {
    var Binding = (function () {
        //TODO add Transformators
        function Binding(counterBinding) {
            if (counterBinding) {
                this.other = counterBinding;
                counterBinding.other = this;
            }
        }
        Binding.prototype.setNewValue = function (value) {
            this.other.changed(value);
        };
        Binding.prototype.onNewValue = function (callback) {
            var _this = this;
            this.changed = function (value) {
                callback.call(void 0, value);
                _this.value = value;
            };
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
        function ModelBinding(attribute, model) {
            var _this = this;
            _super.call(this);
            bind_1.regex.lastIndex = 0;
            var match = bind_1.regex.exec(attribute.value);
            if (match) {
                var path = match[1];
                var _a = model.get(path), object = _a.object, value = _a.value;
                var observer = new observejs_1.PathObserver(object, path);
                observer.open(function (newVal, oldVal) {
                    _this.setNewValue(newVal);
                });
            }
            else {
                this.setNewValue(attribute.value);
            }
        }
        return ModelBinding;
    })(Binding);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGluZy50cyJdLCJuYW1lcyI6WyJCaW5kaW5nIiwiQmluZGluZy5jb25zdHJ1Y3RvciIsIkJpbmRpbmcuc2V0TmV3VmFsdWUiLCJCaW5kaW5nLm9uTmV3VmFsdWUiLCJCaW5kaW5nLmdldHZhbHVlIiwiQmluZGluZy5nZXRDb3VudGVyQmluZGluZyIsIk1vZGVsQmluZGluZyIsIk1vZGVsQmluZGluZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUE7UUFNQ0EseUJBQXlCQTtRQUV6QkEsaUJBQVlBLGNBQXVCQTtZQUNsQ0MsRUFBRUEsQ0FBQUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQTtnQkFDNUJBLGNBQWNBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBQzdCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVNRCw2QkFBV0EsR0FBbEJBLFVBQW1CQSxLQUFTQTtZQUMzQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBRU1GLDRCQUFVQSxHQUFqQkEsVUFBa0JBLFFBQXlCQTtZQUEzQ0csaUJBS0NBO1lBSkFBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQUFBLEtBQUtBO2dCQUNuQkEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0EsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFFTUgsMEJBQVFBLEdBQWZBO1lBQ0NJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1FBQ25CQSxDQUFDQTtRQUVNSixtQ0FBaUJBLEdBQXhCQTtZQUNDSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxJQUFJQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN4Q0EsQ0FBQ0E7UUFDRkwsY0FBQ0E7SUFBREEsQ0FqQ0EsQUFpQ0NBLElBQUE7SUE0Qk8sZUFBTyxXQTVCZDtJQUVEO1FBQTJCTSxnQ0FBT0E7UUFFakNBLHNCQUFZQSxTQUFjQSxFQUFFQSxLQUFXQTtZQUZ4Q0MsaUJBc0JDQTtZQW5CQ0EsaUJBQU9BLENBQUNBO1lBRVJBLFlBQUtBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3BCQSxJQUFJQSxLQUFLQSxHQUFHQSxZQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUN4Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1ZBLElBQUlBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwQkEsSUFBSUEsS0FBa0JBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLEVBQWhDQSxNQUFNQSxjQUFFQSxLQUFLQSxXQUFtQkEsQ0FBQ0E7Z0JBQ3RDQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSx3QkFBWUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBRTlDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFNQSxFQUFFQSxNQUFNQTtvQkFDNUJBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMxQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDSkEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ25DQSxDQUFDQTtRQUVGQSxDQUFDQTtRQUVGRCxtQkFBQ0E7SUFBREEsQ0F0QkEsQUFzQkNBLEVBdEIwQixPQUFPLEVBc0JqQztJQUllIiwiZmlsZSI6ImJpbmQvYmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgcmVnZXggfSBmcm9tICcuL2JpbmQnXG5pbXBvcnQgeyBQYXRoT2JzZXJ2ZXIgfSBmcm9tICdvYnNlcnZlanMnXG5cbmNsYXNzIEJpbmRpbmcge1xuXHRcblx0cHJpdmF0ZSBvdGhlcjpCaW5kaW5nO1xuXHRwcml2YXRlIGNoYW5nZWQ6KHZhbHVlOmFueSk9PmFueTtcblx0cHJpdmF0ZSB2YWx1ZTogYW55O1xuXHRcblx0Ly9UT0RPIGFkZCBUcmFuc2Zvcm1hdG9yc1xuXHRcblx0Y29uc3RydWN0b3IoY291bnRlckJpbmRpbmc/OkJpbmRpbmcpIHtcblx0XHRpZihjb3VudGVyQmluZGluZykge1xuXHRcdFx0dGhpcy5vdGhlciA9IGNvdW50ZXJCaW5kaW5nO1xuXHRcdFx0Y291bnRlckJpbmRpbmcub3RoZXIgPSB0aGlzO1xuXHRcdH1cblx0fVxuXHRcblx0cHVibGljIHNldE5ld1ZhbHVlKHZhbHVlOmFueSk6IHZvaWQge1xuXHRcdHRoaXMub3RoZXIuY2hhbmdlZCh2YWx1ZSk7XG5cdH1cblx0XG5cdHB1YmxpYyBvbk5ld1ZhbHVlKGNhbGxiYWNrOih2YWx1ZTphbnkpPT5hbnkpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZWQgPSB2YWx1ZSA9PiB7XG5cdFx0XHRjYWxsYmFjay5jYWxsKHZvaWQgMCwgdmFsdWUpO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdH07XG5cdH1cblx0XG5cdHB1YmxpYyBnZXR2YWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cdFxuXHRwdWJsaWMgZ2V0Q291bnRlckJpbmRpbmcoKTogQmluZGluZyB7XG5cdFx0cmV0dXJuIHRoaXMub3RoZXIgfHwgbmV3IEJpbmRpbmcodGhpcyk7XG5cdH1cbn1cblxuY2xhc3MgTW9kZWxCaW5kaW5nIGV4dGVuZHMgQmluZGluZyB7XG5cdFxuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGU6QXR0ciwgbW9kZWw6TW9kZWwpIHtcblx0XHRzdXBlcigpO1xuXHRcdFxuXHRcdHJlZ2V4Lmxhc3RJbmRleCA9IDA7XG5cdFx0bGV0IG1hdGNoID0gcmVnZXguZXhlYyhhdHRyaWJ1dGUudmFsdWUpO1xuXHRcdGlmKG1hdGNoKSB7XG5cdFx0XHRsZXQgcGF0aCA9IG1hdGNoWzFdO1xuXHRcdFx0bGV0IHtvYmplY3QsIHZhbHVlfSA9IG1vZGVsLmdldChwYXRoKTtcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcblx0XG5cdFx0XHRvYnNlcnZlci5vcGVuKChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNldE5ld1ZhbHVlKGF0dHJpYnV0ZS52YWx1ZSk7XG5cdFx0fVxuXHRcblx0fVxuXHRcbn1cblxuXG5cbmV4cG9ydCB7QmluZGluZ30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
