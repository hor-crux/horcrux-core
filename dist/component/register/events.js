var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "horcrux-event"], function (require, exports, horcrux_event_1) {
    var ComponentCreatedEvent = (function (_super) {
        __extends(ComponentCreatedEvent, _super);
        function ComponentCreatedEvent() {
            _super.apply(this, arguments);
        }
        return ComponentCreatedEvent;
    })(horcrux_event_1.Event);
    exports.ComponentCreatedEvent = ComponentCreatedEvent;
    var ComponentReadyEvent = (function (_super) {
        __extends(ComponentReadyEvent, _super);
        function ComponentReadyEvent() {
            _super.apply(this, arguments);
        }
        return ComponentReadyEvent;
    })(horcrux_event_1.Event);
    exports.ComponentReadyEvent = ComponentReadyEvent;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9ldmVudHMudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50Q3JlYXRlZEV2ZW50IiwiQ29tcG9uZW50Q3JlYXRlZEV2ZW50LmNvbnN0cnVjdG9yIiwiQ29tcG9uZW50UmVhZHlFdmVudCIsIkNvbXBvbmVudFJlYWR5RXZlbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdBO1FBQW9DQSx5Q0FBb0JBO1FBQXhEQTtZQUFvQ0MsOEJBQW9CQTtRQUFFQSxDQUFDQTtRQUFERCw0QkFBQ0E7SUFBREEsQ0FBMUQsQUFBMkRBLEVBQXZCLHFCQUFLLEVBQWtCO0lBR25ELDZCQUFxQix5QkFIOEI7SUFDM0Q7UUFBa0NFLHVDQUFvQkE7UUFBdERBO1lBQWtDQyw4QkFBb0JBO1FBQUVBLENBQUNBO1FBQURELDBCQUFDQTtJQUFEQSxDQUF4RCxBQUF5REEsRUFBdkIscUJBQUssRUFBa0I7SUFFMUIsMkJBQW1CLHVCQUZPO0lBRU4iLCJmaWxlIjoiY29tcG9uZW50L3JlZ2lzdGVyL2V2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnR9IGZyb20gXCJob3JjcnV4LWV2ZW50XCI7XHJcbmltcG9ydCB7Q3VzdG9tRWxlbWVudH0gZnJvbSBcIi4uL2N1c3RvbWVsZW1lbnRcIjtcclxuXHJcbmNsYXNzIENvbXBvbmVudENyZWF0ZWRFdmVudCBleHRlbmRzIEV2ZW50PEN1c3RvbUVsZW1lbnQ+IHt9XHJcbmNsYXNzIENvbXBvbmVudFJlYWR5RXZlbnQgZXh0ZW5kcyBFdmVudDxDdXN0b21FbGVtZW50PiB7fVxyXG5cclxuZXhwb3J0IHtDb21wb25lbnRDcmVhdGVkRXZlbnQsIENvbXBvbmVudFJlYWR5RXZlbnR9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9