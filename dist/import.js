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
define(["require", "exports", "./component/component"], function (require, exports, component_1) {
    var Import = (function (_super) {
        __extends(Import, _super);
        function Import() {
            _super.apply(this, arguments);
        }
        Import.prototype.createdCallback = function () {
            var src = _super.prototype.getAttribute.call(this, "from") || _super.prototype.innerHTML;
            System.import(src);
        };
        Import.prototype.attachedCallback = function () {
            _super.prototype.remove.call(this);
        };
        Import = __decorate([
            component_1.default({
                namespace: "ho",
                template: false
            })
        ], Import);
        return Import;
    })(CustomElement);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC50cyJdLCJuYW1lcyI6WyJJbXBvcnQiLCJJbXBvcnQuY29uc3RydWN0b3IiLCJJbXBvcnQuY3JlYXRlZENhbGxiYWNrIiwiSW1wb3J0LmF0dGFjaGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRUE7UUFJcUJBLDBCQUFhQTtRQUpsQ0E7WUFJcUJDLDhCQUFhQTtRQVVsQ0EsQ0FBQ0E7UUFSQUQsZ0NBQWVBLEdBQWZBO1lBQ0NFLElBQUlBLEdBQUdBLEdBQUdBLGdCQUFLQSxDQUFDQSxZQUFZQSxZQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxnQkFBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDeERBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUVERixpQ0FBZ0JBLEdBQWhCQTtZQUNDRyxnQkFBS0EsQ0FBQ0EsTUFBTUEsV0FBRUEsQ0FBQ0E7UUFDaEJBLENBQUNBO1FBYkZIO1lBQUNBLG1CQUFTQSxDQUFDQTtnQkFDVkEsU0FBU0EsRUFBRUEsSUFBSUE7Z0JBQ2ZBLFFBQVFBLEVBQUVBLEtBQUtBO2FBQ2ZBLENBQUNBO21CQVdEQTtRQUFEQSxhQUFDQTtJQUFEQSxDQWRBLEFBY0NBLEVBVm9CLGFBQWEsRUFVakMiLCJmaWxlIjoiaW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnQvY29tcG9uZW50XCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG5hbWVzcGFjZTogXCJob1wiLFxyXG5cdHRlbXBsYXRlOiBmYWxzZVxyXG59KVxyXG5jbGFzcyBJbXBvcnQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHRcclxuXHRjcmVhdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRsZXQgc3JjID0gc3VwZXIuZ2V0QXR0cmlidXRlKFwiZnJvbVwiKSB8fCBzdXBlci5pbm5lckhUTUw7XHJcblx0XHRTeXN0ZW0uaW1wb3J0KHNyYyk7XHJcblx0fVxyXG5cdFxyXG5cdGF0dGFjaGVkQ2FsbGJhY2soKSB7XHJcblx0XHRzdXBlci5yZW1vdmUoKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=