define(["require", "exports"], function (require, exports) {
    var map = {};
    /*
    function register(clazz: any): void {
        map[clazz.name] = new clazz();
    }
    */
    function get(clazz) {
        var clazzName = clazz.name;
        var instance = map[clazzName] || new clazz();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3lpbmplY3Rpb24vZGkudHMiXSwibmFtZXMiOlsiZ2V0IiwicmVnaXN0ZXIiLCJpbmplY3QiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFJLEdBQUcsR0FBNkIsRUFBRSxDQUFDO0lBRXZDOzs7O01BSUU7SUFFRixhQUFnQixLQUFlO1FBQzlCQSxJQUFJQSxTQUFTQSxHQUFTQSxLQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNsQ0EsSUFBSUEsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsS0FBS0EsRUFBRUEsQ0FBQ0E7UUFFN0NBLE1BQU1BLENBQUlBLFFBQVFBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQUVEOztPQUVHO0lBQ0gsa0JBQWtCLE1BQVU7UUFDM0JDLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQWFPLGdCQUFRLFlBYmY7SUFFRCxnQkFBZ0IsS0FBUztRQUN4QkMsTUFBTUEsQ0FBQ0EsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBO1lBQzFDQSxPQUFPQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUMzQkEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUE7Z0JBQzFDQSxHQUFHQSxFQUFFQTtvQkFDSixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2FBQ0RBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRWlCLGNBQU0sVUFGdkI7SUFFd0IiLCJmaWxlIjoiZGVwZW5kZW5jeWluamVjdGlvbi9kaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBtYXA6IHtbY2xhc3NOYW1lOnN0cmluZ106YW55fSA9IHt9O1xyXG5cclxuLypcclxuZnVuY3Rpb24gcmVnaXN0ZXIoY2xheno6IGFueSk6IHZvaWQge1xyXG5cdG1hcFtjbGF6ei5uYW1lXSA9IG5ldyBjbGF6eigpO1xyXG59XHJcbiovXHJcblxyXG5mdW5jdGlvbiBnZXQ8VD4oY2xheno6e25ldygpOlR9KTogVCB7XHJcblx0bGV0IGNsYXp6TmFtZSA9ICg8YW55PmNsYXp6KS5uYW1lO1xyXG5cdGxldCBpbnN0YW5jZSA9IG1hcFtjbGF6ek5hbWVdIHx8IG5ldyBjbGF6eigpO1xyXG5cdFxyXG5cdHJldHVybiA8VD5pbnN0YW5jZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB2aWEgbmV3KCkgYW5kIHJlZ2lzdGVyZXMgdGhpcyBpbnN0YW5jZSBmb3IgZGVwZW5kZW5jeSBpbmplY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3Rlcih0YXJnZXQ6YW55KTogdm9pZCB7XHJcblx0bWFwW3RhcmdldC5uYW1lXSA9IG5ldyB0YXJnZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5qZWN0KGNsYXp6OmFueSk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XHJcblx0XHRkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldChjbGF6eik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtyZWdpc3RlciwgaW5qZWN0fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==