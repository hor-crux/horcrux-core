var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "./component/component"], function (require, exports, component_1) {
    var Greeting = (function () {
        function Greeting() {
            this.list = [1, 2, 3];
        }
        Greeting = __decorate([
            component_1.default({
                namespace: "my",
            })
        ], Greeting);
        return Greeting;
    })();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyZWV0aW5nLnRzIl0sIm5hbWVzIjpbIkdyZWV0aW5nIiwiR3JlZXRpbmcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUVBO1FBQUFBO1lBSUNDLFNBQUlBLEdBQUdBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQUxERDtZQUFDQSxtQkFBU0EsQ0FBQ0E7Z0JBQ1ZBLFNBQVNBLEVBQUNBLElBQUlBO2FBQ2RBLENBQUNBO3FCQUdEQTtRQUFEQSxlQUFDQTtJQUFEQSxDQUxBLEFBS0NBLElBQUEiLCJmaWxlIjoiZ3JlZXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudC9jb21wb25lbnRcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bmFtZXNwYWNlOlwibXlcIixcclxufSlcclxuY2xhc3MgR3JlZXRpbmcge1xyXG5cdGxpc3QgPSBbMSwyLDNdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9