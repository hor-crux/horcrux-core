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
define(["require", "exports", "./component/component", "./component/visit", "./component/bind"], function (require, exports, component_1, visit_1, bind_1) {
    var Repeat = (function (_super) {
        __extends(Repeat, _super);
        function Repeat() {
            _super.apply(this, arguments);
            this.dontVisit = true;
        }
        Repeat.prototype.attachedCallback = function () {
            var path = this.getAttribute("data").replace(/\{/gm, "").replace(/\}/gm, "");
            var host = this.getHost();
            var data = host[path];
            var contents = this.childNodes;
            var shadow = this.createShadowRoot();
            data.forEach(function (row) {
                Array.prototype.forEach.call(contents, function (node) {
                    var model = {
                        item: row
                    };
                    var cloned = node.cloneNode(true);
                    visit_1.default(cloned, function (node) { bind_1.default(node, model); });
                    shadow.appendChild(cloned);
                });
            });
        };
        Repeat.prototype.getHost = function () {
            var parent = this.parentNode;
            while (!parent.host)
                parent = parent.parentNode;
            return parent.host;
        };
        Repeat = __decorate([
            component_1.default({
                namespace: "ho",
                template: false
            })
        ], Repeat);
        return Repeat;
    })(CustomElement);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdC50cyJdLCJuYW1lcyI6WyJSZXBlYXQiLCJSZXBlYXQuY29uc3RydWN0b3IiLCJSZXBlYXQuYXR0YWNoZWRDYWxsYmFjayIsIlJlcGVhdC5nZXRIb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBSXFCQSwwQkFBYUE7UUFKbENBO1lBSXFCQyw4QkFBYUE7WUFFakNBLGNBQVNBLEdBQUdBLElBQUlBLENBQUNBO1FBOEJsQkEsQ0FBQ0E7UUE1QkFELGlDQUFnQkEsR0FBaEJBO1lBQ0NFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1lBQzdFQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtZQUMxQkEsSUFBSUEsSUFBSUEsR0FBU0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFNUJBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1lBQy9CQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1lBRXJDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxHQUFHQTtnQkFDZkEsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBQ0EsSUFBU0E7b0JBQ2hEQSxJQUFJQSxLQUFLQSxHQUFHQTt3QkFDWEEsSUFBSUEsRUFBRUEsR0FBR0E7cUJBQ1RBLENBQUFBO29CQUNEQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDbENBLGVBQUtBLENBQUNBLE1BQU1BLEVBQUVBLFVBQUFBLElBQUlBLElBQUtBLGNBQVFBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUFBLENBQUNBLENBQUNBLENBQUNBO29CQUNoREEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUE7Z0JBQzNCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNKQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUVIQSxDQUFDQTtRQUVTRix3QkFBT0EsR0FBakJBO1lBQ0NHLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1lBQzdCQSxPQUFNQSxDQUFPQSxNQUFPQSxDQUFDQSxJQUFJQTtnQkFDeEJBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO1lBQzVCQSxNQUFNQSxDQUFPQSxNQUFPQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFsQ0ZIO1lBQUNBLG1CQUFTQSxDQUFDQTtnQkFDVkEsU0FBU0EsRUFBRUEsSUFBSUE7Z0JBQ2ZBLFFBQVFBLEVBQUVBLEtBQUtBO2FBQ2ZBLENBQUNBO21CQWlDREE7UUFBREEsYUFBQ0E7SUFBREEsQ0FwQ0EsQUFvQ0NBLEVBaENvQixhQUFhLEVBZ0NqQyIsImZpbGUiOiJyZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudC9jb21wb25lbnRcIlxyXG5pbXBvcnQgdmlzaXQgZnJvbSBcIi4vY29tcG9uZW50L3Zpc2l0XCJcclxuaW1wb3J0IGJpbmROb2RlIGZyb20gXCIuL2NvbXBvbmVudC9iaW5kXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG5hbWVzcGFjZTogXCJob1wiLFxyXG5cdHRlbXBsYXRlOiBmYWxzZVxyXG59KVxyXG5jbGFzcyBSZXBlYXQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHRcclxuXHRkb250VmlzaXQgPSB0cnVlO1xyXG5cdFxyXG5cdGF0dGFjaGVkQ2FsbGJhY2soKSB7XHJcblx0XHRsZXQgcGF0aCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKS5yZXBsYWNlKC9cXHsvZ20sIFwiXCIpLnJlcGxhY2UoL1xcfS9nbSwgXCJcIik7XHJcblx0XHRsZXQgaG9zdCA9IHRoaXMuZ2V0SG9zdCgpO1xyXG5cdFx0bGV0IGRhdGE6YW55W10gPSBob3N0W3BhdGhdO1xyXG5cdFx0XHJcblx0XHRsZXQgY29udGVudHMgPSB0aGlzLmNoaWxkTm9kZXM7XHJcblx0XHRsZXQgc2hhZG93ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcblx0XHRcclxuXHRcdGRhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbnRlbnRzLCAobm9kZTpOb2RlKSA9PiB7XHJcblx0XHRcdFx0bGV0IG1vZGVsID0ge1xyXG5cdFx0XHRcdFx0aXRlbTogcm93XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBjbG9uZWQgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdFx0XHR2aXNpdChjbG9uZWQsIG5vZGUgPT4ge2JpbmROb2RlKG5vZGUsIG1vZGVsKTt9KTtcclxuXHRcdFx0XHRzaGFkb3cuYXBwZW5kQ2hpbGQoY2xvbmVkKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGdldEhvc3QoKTogTm9kZSB7XHJcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0d2hpbGUoISg8YW55PnBhcmVudCkuaG9zdClcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XHJcblx0XHRyZXR1cm4gKDxhbnk+cGFyZW50KS5ob3N0O1xyXG5cdH1cclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==