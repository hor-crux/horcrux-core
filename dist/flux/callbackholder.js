define(["require", "exports"], function (require, exports) {
    var CallbackHolder = (function () {
        function CallbackHolder() {
            this.prefix = 'ID_';
            this.lastID = 1;
            this.callbacks = {};
        }
        CallbackHolder.prototype.register = function (callback, self) {
            var id = this.prefix + this.lastID++;
            this.callbacks[id] = self ? callback.bind(self) : callback;
            return id;
        };
        CallbackHolder.prototype.unregister = function (id) {
            if (!this.callbacks[id])
                throw 'Could not unregister callback for id ' + id;
            delete this.callbacks[id];
        };
        ;
        return CallbackHolder;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CallbackHolder;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXgvY2FsbGJhY2tob2xkZXIudHMiXSwibmFtZXMiOlsiQ2FsbGJhY2tIb2xkZXIiLCJDYWxsYmFja0hvbGRlci5jb25zdHJ1Y3RvciIsIkNhbGxiYWNrSG9sZGVyLnJlZ2lzdGVyIiwiQ2FsbGJhY2tIb2xkZXIudW5yZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtJQUFBO1FBQUFBO1lBRVdDLFdBQU1BLEdBQVdBLEtBQUtBLENBQUNBO1lBQ3ZCQSxXQUFNQSxHQUFXQSxDQUFDQSxDQUFDQTtZQUNuQkEsY0FBU0EsR0FBNEJBLEVBQUVBLENBQUNBO1FBYW5EQSxDQUFDQTtRQVhPRCxpQ0FBUUEsR0FBZkEsVUFBZ0JBLFFBQWtCQSxFQUFFQSxJQUFVQTtZQUM3Q0UsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7WUFDckNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBO1lBQzNEQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVNRixtQ0FBVUEsR0FBakJBLFVBQWtCQSxFQUFFQTtZQUNuQkcsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxNQUFNQSx1Q0FBdUNBLEdBQUdBLEVBQUVBLENBQUNBO1lBQ3BEQSxPQUFPQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7O1FBQ0ZILHFCQUFDQTtJQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtJQWpCRDtvQ0FpQkMsQ0FBQSIsImZpbGUiOiJmbHV4L2NhbGxiYWNraG9sZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIb2xkZXIge1xyXG5cclxuXHRwcm90ZWN0ZWQgcHJlZml4OiBzdHJpbmcgPSAnSURfJztcclxuXHRwcm90ZWN0ZWQgbGFzdElEOiBudW1iZXIgPSAxO1xyXG5cdHByb3RlY3RlZCBjYWxsYmFja3M6IHtba2V5OnN0cmluZ106RnVuY3Rpb259ID0ge307XHJcblxyXG5cdHB1YmxpYyByZWdpc3RlcihjYWxsYmFjazogRnVuY3Rpb24sIHNlbGY/OiBhbnkpOiBzdHJpbmcge1xyXG5cdFx0bGV0IGlkID0gdGhpcy5wcmVmaXggKyB0aGlzLmxhc3RJRCsrO1xyXG5cdFx0dGhpcy5jYWxsYmFja3NbaWRdID0gc2VsZiA/IGNhbGxiYWNrLmJpbmQoc2VsZikgOiBjYWxsYmFjaztcclxuXHRcdHJldHVybiBpZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1bnJlZ2lzdGVyKGlkKSB7XHJcblx0XHRpZighdGhpcy5jYWxsYmFja3NbaWRdKVxyXG5cdFx0XHR0aHJvdyAnQ291bGQgbm90IHVucmVnaXN0ZXIgY2FsbGJhY2sgZm9yIGlkICcgKyBpZDtcclxuXHRcdGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tpZF07XHJcblx0fTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==