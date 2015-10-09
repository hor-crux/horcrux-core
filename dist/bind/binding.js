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
        Binding.prototype.onNewValue = function (callback) {
            var _this = this;
            this.changed = function (value) {
                callback.call(void 0, value);
                _this.value = value;
            };
            callback(this.value);
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
                });
            }
            else {
                this.setNewValue(attribute.value);
            }
        }
        return ModelBinding;
    })(Binding);
    exports.ModelBinding = ModelBinding;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQvYmluZGluZy50cyJdLCJuYW1lcyI6WyJCaW5kaW5nIiwiQmluZGluZy5jb25zdHJ1Y3RvciIsIkJpbmRpbmcuc2V0TmV3VmFsdWUiLCJCaW5kaW5nLm9uTmV3VmFsdWUiLCJCaW5kaW5nLmdldHZhbHVlIiwiQmluZGluZy5nZXRDb3VudGVyQmluZGluZyIsIk1vZGVsQmluZGluZyIsIk1vZGVsQmluZGluZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUE7UUFNQ0EsaUJBQVlBLGNBQXVCQTtZQUNsQ0MsRUFBRUEsQ0FBQUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQTtnQkFDNUJBLGNBQWNBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBQzdCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVNRCw2QkFBV0EsR0FBbEJBLFVBQW1CQSxLQUFTQTtZQUMzQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLENBQUNBO1FBRU1GLDRCQUFVQSxHQUFqQkEsVUFBa0JBLFFBQXlCQTtZQUEzQ0csaUJBT0NBO1lBTkFBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQUFBLEtBQUtBO2dCQUNuQkEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0EsQ0FBQ0E7WUFFRkEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdEJBLENBQUNBO1FBRU1ILDBCQUFRQSxHQUFmQTtZQUNDSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNuQkEsQ0FBQ0E7UUFFTUosbUNBQWlCQSxHQUF4QkE7WUFDQ0ssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDeENBLENBQUNBO1FBQ0ZMLGNBQUNBO0lBQURBLENBakNBLEFBaUNDQSxJQUFBO0lBcUNPLGVBQU8sV0FyQ2Q7SUFFRDtRQUEyQk0sZ0NBQU9BO1FBRWpDQSx5QkFBeUJBO1FBRXpCQSxzQkFBWUEsU0FBY0EsRUFBRUEsS0FBV0E7WUFKeENDLGlCQStCQ0E7WUExQkNBLGlCQUFPQSxDQUFDQTtZQUVSQSxZQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNwQkEsSUFBSUEsS0FBS0EsR0FBR0EsWUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDeENBLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUNWQSxJQUFJQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDcEJBLElBQUlBLEtBQWtCQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFoQ0EsTUFBTUEsY0FBRUEsS0FBS0EsV0FBbUJBLENBQUNBO2dCQUN0Q0EsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsd0JBQVlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUU5Q0EseUNBQXlDQTtnQkFDekNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLE1BQU1BLEVBQUVBLE1BQU1BO29CQUM1QkEsS0FBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFSEEseUNBQXlDQTtnQkFDekNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFVBQUFBLEdBQUdBO29CQUNsQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUNIQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDTEEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLENBQUNBO1FBR0ZBLENBQUNBO1FBRUZELG1CQUFDQTtJQUFEQSxDQS9CQSxBQStCQ0EsRUEvQjBCLE9BQU8sRUErQmpDO0lBSWdCLG9CQUFZLGdCQUo1QjtJQUk2QiIsImZpbGUiOiJiaW5kL2JpbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCdcclxuaW1wb3J0IHsgcmVnZXggfSBmcm9tICcuL2JpbmQnXHJcbmltcG9ydCB7IFBhdGhPYnNlcnZlciB9IGZyb20gJ29ic2VydmVqcydcclxuXHJcbmNsYXNzIEJpbmRpbmcge1xyXG5cdFxyXG5cdHByaXZhdGUgb3RoZXI6QmluZGluZztcclxuXHRwcml2YXRlIGNoYW5nZWQ6KHZhbHVlOmFueSk9PmFueTtcclxuXHRwcml2YXRlIHZhbHVlOiBhbnk7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoY291bnRlckJpbmRpbmc/OkJpbmRpbmcpIHtcclxuXHRcdGlmKGNvdW50ZXJCaW5kaW5nKSB7XHJcblx0XHRcdHRoaXMub3RoZXIgPSBjb3VudGVyQmluZGluZztcclxuXHRcdFx0Y291bnRlckJpbmRpbmcub3RoZXIgPSB0aGlzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgc2V0TmV3VmFsdWUodmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHR0aGlzLm90aGVyICYmIHRoaXMub3RoZXIuY2hhbmdlZCh2YWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbk5ld1ZhbHVlKGNhbGxiYWNrOih2YWx1ZTphbnkpPT5hbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMuY2hhbmdlZCA9IHZhbHVlID0+IHtcclxuXHRcdFx0Y2FsbGJhY2suY2FsbCh2b2lkIDAsIHZhbHVlKTtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0Y2FsbGJhY2sodGhpcy52YWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXR2YWx1ZSgpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXRDb3VudGVyQmluZGluZygpOiBCaW5kaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLm90aGVyIHx8IG5ldyBCaW5kaW5nKHRoaXMpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgTW9kZWxCaW5kaW5nIGV4dGVuZHMgQmluZGluZyB7XHJcblx0XHJcblx0Ly9UT0RPIGFkZCBUcmFuc2Zvcm1hdG9yc1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKGF0dHJpYnV0ZTpBdHRyLCBtb2RlbDpNb2RlbCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0cmVnZXgubGFzdEluZGV4ID0gMDtcclxuXHRcdGxldCBtYXRjaCA9IHJlZ2V4LmV4ZWMoYXR0cmlidXRlLnZhbHVlKTtcclxuXHRcdGlmKG1hdGNoKSB7XHJcblx0XHRcdGxldCBwYXRoID0gbWF0Y2hbMV07XHJcblx0XHRcdGxldCB7b2JqZWN0LCB2YWx1ZX0gPSBtb2RlbC5nZXQocGF0aCk7XHJcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBQYXRoT2JzZXJ2ZXIob2JqZWN0LCBwYXRoKTtcclxuXHRcclxuXHRcdFx0Ly8gdXBkYXRlIENvdW50ZXItQmluZGluZyBvbiBNb2RlbC1DaGFuZ2VcclxuXHRcdFx0b2JzZXJ2ZXIub3BlbigobmV3VmFsLCBvbGRWYWwpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gdXBkYXRlIE1vZGVsIG9uIENvdW50ZXItQmluZGluZy1DaGFuZ2VcclxuXHRcdFx0dGhpcy5vbk5ld1ZhbHVlKHZhbCA9PiB7XHJcblx0XHRcdFx0bW9kZWwuc2V0KHBhdGgsIHZhbCk7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5zZXROZXdWYWx1ZShhdHRyaWJ1dGUudmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7QmluZGluZywgTW9kZWxCaW5kaW5nfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==