define(["require", "exports"], function (require, exports) {
    function detached(target, key, descriptor) {
        target['detachedCallback'] = target[key];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = detached;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9kZWNvcmF0b3IvZGV0YWNoZWQudHMiXSwibmFtZXMiOlsiZGV0YWNoZWQiXSwibWFwcGluZ3MiOiI7SUFBQSxrQkFBaUMsTUFBVSxFQUFFLEdBQVUsRUFBRSxVQUFjO1FBQ3RFQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQzFDQSxDQUFDQTtJQUZEOzhCQUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L2RlY29yYXRvci9kZXRhY2hlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFjaGVkKHRhcmdldDphbnksIGtleTpzdHJpbmcsIGRlc2NyaXB0b3I6YW55KTogdm9pZCB7XG5cdHRhcmdldFsnZGV0YWNoZWRDYWxsYmFjayddID0gdGFyZ2V0W2tleV07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
