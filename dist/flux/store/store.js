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
    exports.Store = Store;
    function handle(type) {
        return function (target, propertyKey, descriptor) {
            target.handlerMap = target.handlerMap || {};
            target.handlerMap[type] = target.handlerMap[type] || [];
            target.handlerMap[type].push(target[propertyKey]);
        };
    }
    exports.handle = handle;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXgvc3RvcmUvc3RvcmUudHMiXSwibmFtZXMiOlsiU3RvcmUiLCJTdG9yZS5jb25zdHJ1Y3RvciIsIlN0b3JlLnJlZ2lzdGVyIiwiU3RvcmUuaGFuZGxlIiwiU3RvcmUuY2hhbmdlZCIsImhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUF1QkEseUJBQWNBO1FBVXBDQTtZQUNDQyxpQkFBT0EsQ0FBQ0E7WUFDUkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNURBLENBQUNBO1FBRU1ELHdCQUFRQSxHQUFmQSxVQUFnQkEsUUFBd0JBLEVBQUVBLElBQVNBO1lBQ2xERSxNQUFNQSxDQUFDQSxnQkFBS0EsQ0FBQ0EsUUFBUUEsWUFBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBO1FBRVNGLHNCQUFNQSxHQUFoQkEsVUFBaUJBLE1BQXdCQTtZQUF6Q0csaUJBT0NBO1lBTkFBLElBQUlBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQUFBO1lBQ3REQSxJQUFJQSxRQUFRQSxHQUFHQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUU3Q0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsT0FBT0E7Z0JBQ3ZCQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNqQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0E7O1FBR1NILHVCQUFPQSxHQUFqQkE7WUFDQ0ksR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxJQUFJQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDNUJBLEVBQUVBLENBQUFBLENBQUNBLEVBQUVBLENBQUNBO29CQUNMQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNoQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUE5Qk1KLGdCQUFVQSxHQUFRQSxFQUFFQSxDQUFDQTtRQUg1QkE7WUFBQ0EsV0FBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBO1dBQ1RBLDZCQUFVQSxFQUFZQTtRQWlDakNBLFlBQUNBO0lBQURBLENBcENBLEFBb0NDQSxFQXBDc0Isd0JBQWMsRUFvQ3BDO0lBVU8sYUFBSyxTQVZaO0lBRUQsZ0JBQWdCLElBQVc7UUFDMUJLLE1BQU1BLENBQUNBLFVBQUNBLE1BQW9CQSxFQUFFQSxXQUE0QkEsRUFBRUEsVUFBZUE7WUFDMUVBLE1BQU1BLENBQUNBLFVBQVVBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1lBQzVDQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRWMsY0FBTSxVQUZwQjtJQUVxQiIsImZpbGUiOiJmbHV4L3N0b3JlL3N0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGxiYWNrSG9sZGVyIGZyb20gXCIuLi9jYWxsYmFja2hvbGRlclwiXHJcbmltcG9ydCB7RGlzcGF0Y2hlciwgRGlzcGF0Y2hlckFjdGlvbn0gZnJvbSBcIi4uL2Rpc3BhdGNoZXIvZGlzcGF0Y2hlclwiXHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tIFwiLi4vLi4vZGVwZW5kZW5jeWluamVjdGlvbi9kaVwiXHJcblxyXG5jbGFzcyBTdG9yZTxUPiBleHRlbmRzIENhbGxiYWNrSG9sZGVyIHtcclxuXHJcblx0QGluamVjdChEaXNwYXRjaGVyKVxyXG5cdHByb3RlY3RlZCBkaXNwYXRjaGVyOiBEaXNwYXRjaGVyXHJcblxyXG5cdHN0YXRpYyBoYW5kbGVyTWFwOiBhbnkgPSB7fTtcclxuXHRcclxuXHRwdWJsaWMgaWQ6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgZGF0YTogVDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmlkID0gdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKHRoaXMuaGFuZGxlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgcmVnaXN0ZXIoY2FsbGJhY2s6IChkYXRhOlQpPT52b2lkLCBzZWxmPzphbnkpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHN1cGVyLnJlZ2lzdGVyKGNhbGxiYWNrLCBzZWxmKTtcclxuXHR9XHJcblx0XHRcclxuXHRwcm90ZWN0ZWQgaGFuZGxlKGFjdGlvbjogRGlzcGF0Y2hlckFjdGlvbik6IHZvaWQge1xyXG5cdFx0bGV0IGhhbmRsZXJNYXAgPSB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5oYW5kbGVyTWFwXHJcblx0XHRsZXQgaGFuZGxlcnMgPSBoYW5kbGVyTWFwW2FjdGlvbi50eXBlXSB8fCBbXTtcclxuXHRcdFxyXG5cdFx0aGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcclxuXHRcdFx0aGFuZGxlci5jYWxsKHRoaXMsIGFjdGlvbi5kYXRhKTtcclxuXHRcdH0pXHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRwcm90ZWN0ZWQgY2hhbmdlZCgpOiB2b2lkIHtcclxuXHRcdGZvciAobGV0IGlkIGluIHRoaXMuY2FsbGJhY2tzKSB7XHJcblx0XHRcdGxldCBjYiA9IHRoaXMuY2FsbGJhY2tzW2lkXTtcclxuXHRcdFx0aWYoY2IpXHJcblx0XHRcdFx0Y2IodGhpcy5kYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZSh0eXBlOnN0cmluZyk6IE1ldGhvZERlY29yYXRvciB7XHJcblx0cmV0dXJuICh0YXJnZXQ6IHR5cGVvZiBTdG9yZSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvcjogYW55KSA9PiB7XHJcblx0XHR0YXJnZXQuaGFuZGxlck1hcCA9IHRhcmdldC5oYW5kbGVyTWFwIHx8IHt9O1xyXG5cdFx0dGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0gPSB0YXJnZXQuaGFuZGxlck1hcFt0eXBlXSB8fCBbXTtcclxuXHRcdHRhcmdldC5oYW5kbGVyTWFwW3R5cGVdLnB1c2godGFyZ2V0W3Byb3BlcnR5S2V5XSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1N0b3JlLCBoYW5kbGV9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9