define(["require", "exports"], function (require, exports) {
    var map = {};
    /*
    function register(clazz: any): void {
        map[clazz.name] = new clazz();
    }
    */
    function get(clazz) {
        register(clazz);
        var clazzName = clazz.name;
        var instance = map[clazzName];
        return instance;
    }
    /**
     * Creates an instance of this class via new() and registeres this instance for dependency injection.
     */
    function register(target) {
        map[target.name] = map[target.name] || new target();
    }
    exports.register = register;
    function inject(clazz) {
        return function (target, propertyKey) {
            target[propertyKey] = get(clazz);
        };
    }
    exports.inject = inject;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3lpbmplY3Rpb24vZGkudHMiXSwibmFtZXMiOlsiZ2V0IiwicmVnaXN0ZXIiLCJpbmplY3QiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFJLEdBQUcsR0FBNkIsRUFBRSxDQUFDO0lBRXZDOzs7O01BSUU7SUFFRixhQUFnQixLQUFlO1FBQzlCQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUVoQkEsSUFBSUEsU0FBU0EsR0FBU0EsS0FBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDbENBLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBRTlCQSxNQUFNQSxDQUFJQSxRQUFRQSxDQUFDQTtJQUNwQkEsQ0FBQ0E7SUFFRDs7T0FFRztJQUNILGtCQUFrQixNQUFVO1FBQzNCQyxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUNyREEsQ0FBQ0E7SUFRTyxnQkFBUSxZQVJmO0lBRUQsZ0JBQWdCLEtBQVM7UUFDeEJDLE1BQU1BLENBQUNBLFVBQUNBLE1BQWNBLEVBQUVBLFdBQW1CQTtZQUMxQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRWlCLGNBQU0sVUFGdkI7SUFFd0IiLCJmaWxlIjoiZGVwZW5kZW5jeWluamVjdGlvbi9kaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBtYXA6IHtbY2xhc3NOYW1lOnN0cmluZ106YW55fSA9IHt9O1xyXG5cclxuLypcclxuZnVuY3Rpb24gcmVnaXN0ZXIoY2xheno6IGFueSk6IHZvaWQge1xyXG5cdG1hcFtjbGF6ei5uYW1lXSA9IG5ldyBjbGF6eigpO1xyXG59XHJcbiovXHJcblxyXG5mdW5jdGlvbiBnZXQ8VD4oY2xheno6e25ldygpOlR9KTogVCB7XHJcblx0cmVnaXN0ZXIoY2xhenopO1xyXG5cdFxyXG5cdGxldCBjbGF6ek5hbWUgPSAoPGFueT5jbGF6eikubmFtZTtcclxuXHRsZXQgaW5zdGFuY2UgPSBtYXBbY2xhenpOYW1lXTtcclxuXHRcclxuXHRyZXR1cm4gPFQ+aW5zdGFuY2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgdmlhIG5ldygpIGFuZCByZWdpc3RlcmVzIHRoaXMgaW5zdGFuY2UgZm9yIGRlcGVuZGVuY3kgaW5qZWN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVnaXN0ZXIodGFyZ2V0OmFueSk6IHZvaWQge1xyXG5cdG1hcFt0YXJnZXQubmFtZV0gPSBtYXBbdGFyZ2V0Lm5hbWVdIHx8IG5ldyB0YXJnZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5qZWN0KGNsYXp6OmFueSk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XHJcblx0XHR0YXJnZXRbcHJvcGVydHlLZXldID0gZ2V0KGNsYXp6KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVnaXN0ZXIsIGluamVjdH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=