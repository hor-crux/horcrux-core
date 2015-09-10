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
define(["require", "exports", "../callbackholder", "../../dependencyinjection/di"], function (require, exports, callbackholder_1, di_1) {
    var Dispatcher = (function (_super) {
        __extends(Dispatcher, _super);
        function Dispatcher() {
            _super.apply(this, arguments);
            this.isPending = {};
            this.isHandled = {};
            this.isDispatching = false;
            this.pendingPayload = null;
        }
        Dispatcher.prototype.waitFor = function () {
            var ids = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ids[_i - 0] = arguments[_i];
            }
            if (!this.isDispatching)
                throw 'Dispatcher.waitFor(...): Must be invoked while dispatching.';
            for (var ii = 0; ii < ids.length; ii++) {
                var id = ids[ii];
                if (this.isPending[id]) {
                    if (!this.isHandled[id])
                        throw "waitFor(...): Circular dependency detected while wating for " + id;
                    continue;
                }
                if (!this.callbacks[id])
                    throw "waitFor(...): " + id + " does not map to a registered callback.";
                this.invokeCallback(id);
            }
        };
        ;
        Dispatcher.prototype.dispatch = function (action) {
            if (this.isDispatching)
                throw 'Cannot dispatch in the middle of a dispatch.';
            this.startDispatching(action);
            try {
                for (var id in this.callbacks) {
                    if (this.isPending[id]) {
                        continue;
                    }
                    this.invokeCallback(id);
                }
            }
            finally {
                this.stopDispatching();
            }
        };
        ;
        Dispatcher.prototype.invokeCallback = function (id) {
            this.isPending[id] = true;
            this.callbacks[id](this.pendingPayload);
            this.isHandled[id] = true;
        };
        Dispatcher.prototype.startDispatching = function (payload) {
            for (var id in this.callbacks) {
                this.isPending[id] = false;
                this.isHandled[id] = false;
            }
            this.pendingPayload = payload;
            this.isDispatching = true;
        };
        Dispatcher.prototype.stopDispatching = function () {
            this.pendingPayload = null;
            this.isDispatching = false;
        };
        Dispatcher = __decorate([
            di_1.register
        ], Dispatcher);
        return Dispatcher;
    })(callbackholder_1.default);
    exports.Dispatcher = Dispatcher;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXgvZGlzcGF0Y2hlci9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbIkRpc3BhdGNoZXIiLCJEaXNwYXRjaGVyLmNvbnN0cnVjdG9yIiwiRGlzcGF0Y2hlci53YWl0Rm9yIiwiRGlzcGF0Y2hlci5kaXNwYXRjaCIsIkRpc3BhdGNoZXIuaW52b2tlQ2FsbGJhY2siLCJEaXNwYXRjaGVyLnN0YXJ0RGlzcGF0Y2hpbmciLCJEaXNwYXRjaGVyLnN0b3BEaXNwYXRjaGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFRQTtRQUN5QkEsOEJBQWNBO1FBRHZDQTtZQUN5QkMsOEJBQWNBO1lBRTlCQSxjQUFTQSxHQUEyQkEsRUFBRUEsQ0FBQ0E7WUFDdkNBLGNBQVNBLEdBQTJCQSxFQUFFQSxDQUFDQTtZQUN2Q0Esa0JBQWFBLEdBQVlBLEtBQUtBLENBQUNBO1lBQy9CQSxtQkFBY0EsR0FBcUJBLElBQUlBLENBQUNBO1FBMkRqREEsQ0FBQ0E7UUF6RE9ELDRCQUFPQSxHQUFkQTtZQUFlRSxhQUFxQkE7aUJBQXJCQSxXQUFxQkEsQ0FBckJBLHNCQUFxQkEsQ0FBckJBLElBQXFCQTtnQkFBckJBLDRCQUFxQkE7O1lBQ25DQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDdEJBLE1BQU1BLDZEQUE2REEsQ0FBQ0E7WUFFckVBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUN4Q0EsSUFBSUEsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDeEJBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO3dCQUN0QkEsTUFBTUEsaUVBQStEQSxFQUFJQSxDQUFDQTtvQkFDM0VBLFFBQVFBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkFFREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3RCQSxNQUFNQSxtQkFBaUJBLEVBQUVBLDRDQUF5Q0EsQ0FBQ0E7Z0JBRXBFQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUN6QkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7O1FBRU1GLDZCQUFRQSxHQUFmQSxVQUFnQkEsTUFBd0JBO1lBQ3ZDRyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDckJBLE1BQU1BLDhDQUE4Q0EsQ0FBQ0E7WUFFdERBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFOUJBLElBQUlBLENBQUNBO2dCQUNKQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDL0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4QkEsUUFBUUEsQ0FBQ0E7b0JBQ1ZBLENBQUNBO29CQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDekJBLENBQUNBO1lBQ0ZBLENBQUNBO29CQUFTQSxDQUFDQTtnQkFDVkEsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7WUFDeEJBLENBQUNBO1FBQ0ZBLENBQUNBOztRQUVPSCxtQ0FBY0EsR0FBdEJBLFVBQXVCQSxFQUFVQTtZQUNoQ0ksSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDMUJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1lBQ3hDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFFT0oscUNBQWdCQSxHQUF4QkEsVUFBeUJBLE9BQXlCQTtZQUNqREssR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDM0JBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO1lBQzVCQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxPQUFPQSxDQUFDQTtZQUM5QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBRU9MLG9DQUFlQSxHQUF2QkE7WUFDQ00sSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDM0JBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUtBLENBQUNBO1FBQzVCQSxDQUFDQTtRQWhFRk47WUFBQ0EsYUFBUUE7dUJBaUVSQTtRQUFEQSxpQkFBQ0E7SUFBREEsQ0FqRUEsQUFpRUNBLEVBaEV3Qix3QkFBYyxFQWdFdEM7SUFFTyxrQkFBVSxjQUZqQjtJQUVvQyIsImZpbGUiOiJmbHV4L2Rpc3BhdGNoZXIvZGlzcGF0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxsYmFja0hvbGRlciBmcm9tIFwiLi4vY2FsbGJhY2tob2xkZXJcIlxyXG5pbXBvcnQge3JlZ2lzdGVyfSBmcm9tIFwiLi4vLi4vZGVwZW5kZW5jeWluamVjdGlvbi9kaVwiXHJcblxyXG5pbnRlcmZhY2UgRGlzcGF0Y2hlckFjdGlvbiB7XHJcblx0dHlwZTpzdHJpbmc7XHJcblx0ZGF0YT86YW55O1xyXG59XHJcblxyXG5AcmVnaXN0ZXJcclxuY2xhc3MgRGlzcGF0Y2hlciBleHRlbmRzIENhbGxiYWNrSG9sZGVyIHtcclxuXHJcblx0cHJpdmF0ZSBpc1BlbmRpbmc6IHtba2V5OnN0cmluZ106Ym9vbGVhbn0gPSB7fTtcclxuXHRwcml2YXRlIGlzSGFuZGxlZDoge1trZXk6c3RyaW5nXTpib29sZWFufSA9IHt9O1xyXG5cdHByaXZhdGUgaXNEaXNwYXRjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgcGVuZGluZ1BheWxvYWQ6IERpc3BhdGNoZXJBY3Rpb24gPSBudWxsO1xyXG5cclxuXHRwdWJsaWMgd2FpdEZvciguLi5pZHM6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcclxuXHRcdGlmKCF0aGlzLmlzRGlzcGF0Y2hpbmcpXHJcblx0XHRcdHRocm93ICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogTXVzdCBiZSBpbnZva2VkIHdoaWxlIGRpc3BhdGNoaW5nLic7XHJcblxyXG5cdFx0Zm9yIChsZXQgaWkgPSAwOyBpaSA8IGlkcy5sZW5ndGg7IGlpKyspIHtcclxuXHRcdFx0bGV0IGlkID0gaWRzW2lpXTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmlzUGVuZGluZ1tpZF0pIHtcclxuXHRcdFx0XHRpZighdGhpcy5pc0hhbmRsZWRbaWRdKVxyXG5cdFx0XHRcdFx0dGhyb3cgYHdhaXRGb3IoLi4uKTogQ2lyY3VsYXIgZGVwZW5kZW5jeSBkZXRlY3RlZCB3aGlsZSB3YXRpbmcgZm9yICR7aWR9YDtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoIXRoaXMuY2FsbGJhY2tzW2lkXSlcclxuXHRcdFx0XHR0aHJvdyBgd2FpdEZvciguLi4pOiAke2lkfSBkb2VzIG5vdCBtYXAgdG8gYSByZWdpc3RlcmVkIGNhbGxiYWNrLmA7XHJcblxyXG5cdFx0XHR0aGlzLmludm9rZUNhbGxiYWNrKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgZGlzcGF0Y2goYWN0aW9uOiBEaXNwYXRjaGVyQWN0aW9uKSB7XHJcblx0XHRpZih0aGlzLmlzRGlzcGF0Y2hpbmcpXHJcblx0XHRcdHRocm93ICdDYW5ub3QgZGlzcGF0Y2ggaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLic7XHJcblxyXG5cdFx0dGhpcy5zdGFydERpc3BhdGNoaW5nKGFjdGlvbik7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Zm9yIChsZXQgaWQgaW4gdGhpcy5jYWxsYmFja3MpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1BlbmRpbmdbaWRdKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5pbnZva2VDYWxsYmFjayhpZCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuc3RvcERpc3BhdGNoaW5nKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBpbnZva2VDYWxsYmFjayhpZDogbnVtYmVyKTogdm9pZCB7XHJcblx0XHR0aGlzLmlzUGVuZGluZ1tpZF0gPSB0cnVlO1xyXG5cdFx0dGhpcy5jYWxsYmFja3NbaWRdKHRoaXMucGVuZGluZ1BheWxvYWQpO1xyXG5cdFx0dGhpcy5pc0hhbmRsZWRbaWRdID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhcnREaXNwYXRjaGluZyhwYXlsb2FkOiBEaXNwYXRjaGVyQWN0aW9uKTogdm9pZCB7XHJcblx0XHRmb3IgKGxldCBpZCBpbiB0aGlzLmNhbGxiYWNrcykge1xyXG5cdFx0XHR0aGlzLmlzUGVuZGluZ1tpZF0gPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc0hhbmRsZWRbaWRdID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBlbmRpbmdQYXlsb2FkID0gcGF5bG9hZDtcclxuXHRcdHRoaXMuaXNEaXNwYXRjaGluZyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0b3BEaXNwYXRjaGluZygpOiB2b2lkIHtcclxuXHRcdHRoaXMucGVuZGluZ1BheWxvYWQgPSBudWxsO1xyXG5cdFx0dGhpcy5pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge0Rpc3BhdGNoZXIsIERpc3BhdGNoZXJBY3Rpb259Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9