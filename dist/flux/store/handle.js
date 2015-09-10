define(["require", "exports"], function (require, exports) {
    function handle(type) {
        return function (target, propertyKey, descriptor) {
            target.handlerMap = target.handlerMap || {};
            target.handlerMap[type] = target.handlerMap[type] || [];
            target.handlerMap[type].push(target[propertyKey]);
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = handle;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXgvc3RvcmUvaGFuZGxlLnRzIl0sIm5hbWVzIjpbImhhbmRsZSJdLCJtYXBwaW5ncyI6IjtJQUVBLGdCQUErQixJQUFXO1FBQ3pDQSxNQUFNQSxDQUFDQSxVQUFDQSxNQUFvQkEsRUFBRUEsV0FBNEJBLEVBQUVBLFVBQWVBO1lBQzFFQSxNQUFNQSxDQUFDQSxVQUFVQSxHQUFHQSxNQUFNQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUM1Q0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDeERBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1FBQ25EQSxDQUFDQSxDQUFBQTtJQUNGQSxDQUFDQTtJQU5EOzRCQU1DLENBQUEiLCJmaWxlIjoiZmx1eC9zdG9yZS9oYW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSBcIi4vc3RvcmVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlKHR5cGU6c3RyaW5nKTogTWV0aG9kRGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogdHlwZW9mIFN0b3JlLCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yOiBhbnkpID0+IHtcclxuXHRcdHRhcmdldC5oYW5kbGVyTWFwID0gdGFyZ2V0LmhhbmRsZXJNYXAgfHwge307XHJcblx0XHR0YXJnZXQuaGFuZGxlck1hcFt0eXBlXSA9IHRhcmdldC5oYW5kbGVyTWFwW3R5cGVdIHx8IFtdO1xyXG5cdFx0dGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0ucHVzaCh0YXJnZXRbcHJvcGVydHlLZXldKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=