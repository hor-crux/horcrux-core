var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "../callbackholder", "../dispatcher/dispatcher", "../../dependencyinjection/di"], function (require, exports, callbackholder_1, dispatcher_1, di_1) {
    var Store = (function (_super) {
        __extends(Store, _super);
        function Store() {
            _super.call(this);
            this.id = this.dispatcher.register(this.handle.bind(this));
        }
        Store.prototype.register = function (callback, self) {
            return _super.prototype.register.call(this, callback, self);
        };
        Store.prototype.handle = function (action) {
            var _this = this;
            var handlerMap = this.constructor.prototype.handlerMap;
            var handlers = handlerMap[action.type] || [];
            handlers.forEach(function (handler) {
                handler.call(_this, action.data);
            });
        };
        ;
        Store.prototype.changed = function () {
            for (var id in this.callbacks) {
                var cb = this.callbacks[id];
                if (cb)
                    cb(this.data);
            }
        };
        Store.handlerMap = {};
        __decorate([
            di_1.inject(dispatcher_1.Dispatcher)
        ], Store.prototype, "dispatcher");
        return Store;
    })(callbackholder_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Store;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXgvc3RvcmUvc3RvcmUudHMiXSwibmFtZXMiOlsiU3RvcmUiLCJTdG9yZS5jb25zdHJ1Y3RvciIsIlN0b3JlLnJlZ2lzdGVyIiwiU3RvcmUuaGFuZGxlIiwiU3RvcmUuY2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUFzQ0EseUJBQWNBO1FBVW5EQTtZQUNDQyxpQkFBT0EsQ0FBQ0E7WUFDUkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNURBLENBQUNBO1FBRU1ELHdCQUFRQSxHQUFmQSxVQUFnQkEsUUFBd0JBLEVBQUVBLElBQVNBO1lBQ2xERSxNQUFNQSxDQUFDQSxnQkFBS0EsQ0FBQ0EsUUFBUUEsWUFBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBO1FBRVNGLHNCQUFNQSxHQUFoQkEsVUFBaUJBLE1BQXdCQTtZQUF6Q0csaUJBT0NBO1lBTkFBLElBQUlBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQUFBO1lBQ3REQSxJQUFJQSxRQUFRQSxHQUFHQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUU3Q0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsT0FBT0E7Z0JBQ3ZCQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNqQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0E7O1FBR1NILHVCQUFPQSxHQUFqQkE7WUFDQ0ksR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxJQUFJQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDNUJBLEVBQUVBLENBQUFBLENBQUNBLEVBQUVBLENBQUNBO29CQUNMQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNoQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUE5Qk1KLGdCQUFVQSxHQUFRQSxFQUFFQSxDQUFDQTtRQUg1QkE7WUFBQ0EsV0FBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBO1dBQ1RBLDZCQUFVQSxFQUFZQTtRQWlDakNBLFlBQUNBO0lBQURBLENBcENBLEFBb0NDQSxFQXBDcUMsd0JBQWMsRUFvQ25EO0lBcENEOzJCQW9DQyxDQUFBIiwiZmlsZSI6ImZsdXgvc3RvcmUvc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsbGJhY2tIb2xkZXIgZnJvbSBcIi4uL2NhbGxiYWNraG9sZGVyXCJcclxuaW1wb3J0IHtEaXNwYXRjaGVyLCBEaXNwYXRjaGVyQWN0aW9ufSBmcm9tIFwiLi4vZGlzcGF0Y2hlci9kaXNwYXRjaGVyXCJcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gXCIuLi8uLi9kZXBlbmRlbmN5aW5qZWN0aW9uL2RpXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlPFQ+IGV4dGVuZHMgQ2FsbGJhY2tIb2xkZXIge1xyXG5cclxuXHRAaW5qZWN0KERpc3BhdGNoZXIpXHJcblx0cHJvdGVjdGVkIGRpc3BhdGNoZXI6IERpc3BhdGNoZXJcclxuXHJcblx0c3RhdGljIGhhbmRsZXJNYXA6IGFueSA9IHt9O1xyXG5cdFxyXG5cdHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cdHByb3RlY3RlZCBkYXRhOiBUO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaWQgPSB0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIodGhpcy5oYW5kbGUuYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyByZWdpc3RlcihjYWxsYmFjazogKGRhdGE6VCk9PnZvaWQsIHNlbGY/OmFueSk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gc3VwZXIucmVnaXN0ZXIoY2FsbGJhY2ssIHNlbGYpO1xyXG5cdH1cclxuXHRcdFxyXG5cdHByb3RlY3RlZCBoYW5kbGUoYWN0aW9uOiBEaXNwYXRjaGVyQWN0aW9uKTogdm9pZCB7XHJcblx0XHRsZXQgaGFuZGxlck1hcCA9IHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlLmhhbmRsZXJNYXBcclxuXHRcdGxldCBoYW5kbGVycyA9IGhhbmRsZXJNYXBbYWN0aW9uLnR5cGVdIHx8IFtdO1xyXG5cdFx0XHJcblx0XHRoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG5cdFx0XHRoYW5kbGVyLmNhbGwodGhpcywgYWN0aW9uLmRhdGEpO1xyXG5cdFx0fSlcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xyXG5cdFx0Zm9yIChsZXQgaWQgaW4gdGhpcy5jYWxsYmFja3MpIHtcclxuXHRcdFx0bGV0IGNiID0gdGhpcy5jYWxsYmFja3NbaWRdO1xyXG5cdFx0XHRpZihjYilcclxuXHRcdFx0XHRjYih0aGlzLmRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==