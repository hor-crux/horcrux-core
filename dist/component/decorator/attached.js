define(["require", "exports"], function (require, exports) {
    function attached(target, key, descriptor) {
        target['attachedCallback'] = target[key];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = attached;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9kZWNvcmF0b3IvYXR0YWNoZWQudHMiXSwibmFtZXMiOlsiYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7SUFBQSxrQkFBaUMsTUFBVSxFQUFFLEdBQVUsRUFBRSxVQUFjO1FBQ3RFQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQzFDQSxDQUFDQTtJQUZEOzhCQUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L2RlY29yYXRvci9hdHRhY2hlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFjaGVkKHRhcmdldDphbnksIGtleTpzdHJpbmcsIGRlc2NyaXB0b3I6YW55KTogdm9pZCB7XHJcblx0dGFyZ2V0WydhdHRhY2hlZENhbGxiYWNrJ10gPSB0YXJnZXRba2V5XTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==