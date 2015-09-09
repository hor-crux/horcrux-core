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
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
            this.foo = "hello";
        }
        App.prototype.attachedCallback = function () {
            document.body.removeAttribute("unresolved");
        };
        App.prototype.alert = function () {
            window.alert(this.foo);
        };
        App = __decorate([
            component_1.default({
                namespace: "my",
            })
        ], App);
        return App;
    })(CustomElement);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuYXR0YWNoZWRDYWxsYmFjayIsIkFwcC5hbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFFQTtRQUdrQkEsdUJBQWFBO1FBSC9CQTtZQUdrQkMsOEJBQWFBO1lBRTlCQSxRQUFHQSxHQUFHQSxPQUFPQSxDQUFDQTtRQVdmQSxDQUFDQTtRQVJBRCw4QkFBZ0JBLEdBQWhCQTtZQUNDRSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtRQUM3Q0EsQ0FBQ0E7UUFFREYsbUJBQUtBLEdBQUxBO1lBQ0NHLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3hCQSxDQUFDQTtRQWRGSDtZQUFDQSxtQkFBU0EsQ0FBQ0E7Z0JBQ1ZBLFNBQVNBLEVBQUVBLElBQUlBO2FBQ2ZBLENBQUNBO2dCQWNEQTtRQUFEQSxVQUFDQTtJQUFEQSxDQWhCQSxBQWdCQ0EsRUFiaUIsYUFBYSxFQWE5QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudC9jb21wb25lbnRcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bmFtZXNwYWNlOiBcIm15XCIsXHJcbn0pXHJcbmNsYXNzIEFwcCBleHRlbmRzIEN1c3RvbUVsZW1lbnQge1xyXG5cdFxyXG5cdGZvbyA9IFwiaGVsbG9cIjtcclxuXHRcclxuXHRcclxuXHRhdHRhY2hlZENhbGxiYWNrKCkge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoXCJ1bnJlc29sdmVkXCIpO1xyXG5cdH1cclxuXHRcclxuXHRhbGVydCgpOiB2b2lkIHtcclxuXHRcdHdpbmRvdy5hbGVydCh0aGlzLmZvbyk7XHJcblx0fVxyXG5cdFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==