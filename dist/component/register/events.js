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
    var ComponentCanBindEvent = (function (_super) {
        __extends(ComponentCanBindEvent, _super);
        function ComponentCanBindEvent() {
            _super.apply(this, arguments);
        }
        return ComponentCanBindEvent;
    })(horcrux_event_1.Event);
    exports.ComponentCanBindEvent = ComponentCanBindEvent;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9ldmVudHMudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50Q3JlYXRlZEV2ZW50IiwiQ29tcG9uZW50Q3JlYXRlZEV2ZW50LmNvbnN0cnVjdG9yIiwiQ29tcG9uZW50UmVhZHlFdmVudCIsIkNvbXBvbmVudFJlYWR5RXZlbnQuY29uc3RydWN0b3IiLCJDb21wb25lbnRDYW5CaW5kRXZlbnQiLCJDb21wb25lbnRDYW5CaW5kRXZlbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdBO1FBQW9DQSx5Q0FBb0JBO1FBQXhEQTtZQUFvQ0MsOEJBQW9CQTtRQUFFQSxDQUFDQTtRQUFERCw0QkFBQ0E7SUFBREEsQ0FBMUQsQUFBMkRBLEVBQXZCLHFCQUFLLEVBQWtCO0lBSW5ELDZCQUFxQix5QkFKOEI7SUFDM0Q7UUFBa0NFLHVDQUFvQkE7UUFBdERBO1lBQWtDQyw4QkFBb0JBO1FBQUVBLENBQUNBO1FBQURELDBCQUFDQTtJQUFEQSxDQUF4RCxBQUF5REEsRUFBdkIscUJBQUssRUFBa0I7SUFHMUIsMkJBQW1CLHVCQUhPO0lBQ3pEO1FBQW9DRSx5Q0FBWUE7UUFBaERBO1lBQW9DQyw4QkFBWUE7UUFBRUEsQ0FBQ0E7UUFBREQsNEJBQUNBO0lBQURBLENBQWxELEFBQW1EQSxFQUFmLHFCQUFLLEVBQVU7SUFFQyw2QkFBcUIseUJBRnRCO0lBRXVCIiwiZmlsZSI6ImNvbXBvbmVudC9yZWdpc3Rlci9ldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50fSBmcm9tIFwiaG9yY3J1eC1ldmVudFwiO1xyXG5pbXBvcnQge0N1c3RvbUVsZW1lbnR9IGZyb20gXCIuLi9jdXN0b21lbGVtZW50XCI7XHJcblxyXG5jbGFzcyBDb21wb25lbnRDcmVhdGVkRXZlbnQgZXh0ZW5kcyBFdmVudDxDdXN0b21FbGVtZW50PiB7fVxyXG5jbGFzcyBDb21wb25lbnRSZWFkeUV2ZW50IGV4dGVuZHMgRXZlbnQ8Q3VzdG9tRWxlbWVudD4ge31cclxuY2xhc3MgQ29tcG9uZW50Q2FuQmluZEV2ZW50IGV4dGVuZHMgRXZlbnQ8YW55W10+IHt9XHJcblxyXG5leHBvcnQge0NvbXBvbmVudENyZWF0ZWRFdmVudCwgQ29tcG9uZW50UmVhZHlFdmVudCwgQ29tcG9uZW50Q2FuQmluZEV2ZW50fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==