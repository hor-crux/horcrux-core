define(["require", "exports"], function (require, exports) {
    function visit(node, cb) {
        if (node instanceof NodeList) {
            return Array.prototype.forEach.call(node, function (n) {
                visit(n, cb);
            });
        }
        else if (node instanceof Array) {
            return node.forEach(function (n) {
                visit(n, cb);
            });
        }
        else {
            if (node.dontVisit)
                return;
            cb(node);
            if (node.hasChildNodes()) {
                Array.prototype.forEach.call(node.childNodes, function (n) {
                    visit(n, cb);
                });
            }
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = visit;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvdmlzaXQudHMiXSwibmFtZXMiOlsidmlzaXQiXSwibWFwcGluZ3MiOiI7SUFFQSxlQUFlLElBQVEsRUFBRSxFQUFvQjtRQUM1Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsWUFBWUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLFVBQUFBLENBQUNBO2dCQUMxQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDZEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsWUFBWUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLENBQUNBO2dCQUNwQkEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDZEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTEEsRUFBRUEsQ0FBQUEsQ0FBT0EsSUFBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQ3hCQSxNQUFNQSxDQUFDQTtZQUNSQSxFQUFFQSxDQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNmQSxFQUFFQSxDQUFBQSxDQUFRQSxJQUFLQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDakNBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQVFBLElBQUtBLENBQUNBLFVBQVVBLEVBQUVBLFVBQUFBLENBQUNBO29CQUN0REEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2RBLENBQUNBLENBQUNBLENBQUNBO1lBQ0pBLENBQUNBO1FBQ0ZBLENBQUNBO0lBQ0ZBLENBQUNBO0lBRUQ7c0JBQWUsS0FBSyxDQUFDIiwiZmlsZSI6InV0aWwvdmlzaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvbX0gZnJvbSBcIi4vdHlwZXNcIlxyXG5cclxuZnVuY3Rpb24gdmlzaXQobm9kZTpEb20sIGNiOihub2RlOk5vZGUpPT52b2lkKTogdm9pZCB7XHJcblx0aWYobm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlLCBuID0+IHtcclxuXHRcdFx0dmlzaXQobiwgY2IpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGVsc2UgaWYobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRyZXR1cm4gbm9kZS5mb3JFYWNoKG4gPT4ge1xyXG5cdFx0XHR2aXNpdChuLCBjYik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpZigoPGFueT5ub2RlKS5kb250VmlzaXQpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGNiKDxOb2RlPm5vZGUpO1xyXG5cdFx0aWYoKDxOb2RlPm5vZGUpLmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCg8Tm9kZT5ub2RlKS5jaGlsZE5vZGVzLCBuID0+IHtcclxuXHRcdFx0XHR2aXNpdChuLCBjYik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlzaXQ7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9