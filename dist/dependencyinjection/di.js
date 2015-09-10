define(["require", "exports"], function (require, exports) {
    var map = {};
    /*
    function register(clazz: any): void {
        map[clazz.name] = new clazz();
    }
    */
    function get(clazz) {
        var instance = map[clazz.name] || new clazz();
        return instance;
    }
    /**
     * Creates an instance of this class via new() and registeres this instance for dependency injection.
     */
    function register(target) {
        map[target.name] = new target();
    }
    exports.register = register;
    function inject(clazz) {
        return function (target, propertyKey) {
            delete target[propertyKey];
            Object.defineProperty(target, propertyKey, {
                get: function () {
                    return get(clazz);
                }
            });
        };
    }
    exports.inject = inject;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3lpbmplY3Rpb24vZGkudHMiXSwibmFtZXMiOlsiZ2V0IiwicmVnaXN0ZXIiLCJpbmplY3QiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFJLEdBQUcsR0FBNkIsRUFBRSxDQUFDO0lBRXZDOzs7O01BSUU7SUFFRixhQUFnQixLQUFlO1FBQzlCQSxJQUFJQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQTtRQUU5Q0EsTUFBTUEsQ0FBSUEsUUFBUUEsQ0FBQ0E7SUFDcEJBLENBQUNBO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0IsTUFBVTtRQUMzQkMsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7SUFDakNBLENBQUNBO0lBYU8sZ0JBQVEsWUFiZjtJQUVELGdCQUFnQixLQUFTO1FBQ3hCQyxNQUFNQSxDQUFDQSxVQUFDQSxNQUFjQSxFQUFFQSxXQUE0QkE7WUFDbkRBLE9BQU9BLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1lBQzNCQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxFQUFFQSxXQUFXQSxFQUFFQTtnQkFDMUNBLEdBQUdBLEVBQUVBO29CQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7YUFDREEsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0EsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFFaUIsY0FBTSxVQUZ2QjtJQUV3QiIsImZpbGUiOiJkZXBlbmRlbmN5aW5qZWN0aW9uL2RpLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG1hcDoge1tjbGFzc05hbWU6c3RyaW5nXTphbnl9ID0ge307XHJcblxyXG4vKlxyXG5mdW5jdGlvbiByZWdpc3RlcihjbGF6ejogYW55KTogdm9pZCB7XHJcblx0bWFwW2NsYXp6Lm5hbWVdID0gbmV3IGNsYXp6KCk7XHJcbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGdldDxUPihjbGF6ejp7bmV3KCk6VH0pOiBUIHtcclxuXHRsZXQgaW5zdGFuY2UgPSBtYXBbY2xhenoubmFtZV0gfHwgbmV3IGNsYXp6KCk7XHJcblx0XHJcblx0cmV0dXJuIDxUPmluc3RhbmNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHZpYSBuZXcoKSBhbmQgcmVnaXN0ZXJlcyB0aGlzIGluc3RhbmNlIGZvciBkZXBlbmRlbmN5IGluamVjdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyKHRhcmdldDphbnkpOiB2b2lkIHtcclxuXHRtYXBbdGFyZ2V0Lm5hbWVdID0gbmV3IHRhcmdldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmplY3QoY2xheno6YW55KTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG5cdHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcclxuXHRcdGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ2V0KGNsYXp6KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge3JlZ2lzdGVyLCBpbmplY3R9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9