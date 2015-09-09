define(["require", "exports"], function (require, exports) {
    function loadHtml(name) {
        if (name) {
            var html = name + ".html!";
            return System.import(html);
        }
        else {
            return Promise.resolve("");
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = loadHtml;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9hZGh0bWwudHMiXSwibmFtZXMiOlsibG9hZEh0bWwiXSwibWFwcGluZ3MiOiI7SUFBQSxrQkFBaUMsSUFBVztRQUMzQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVEEsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQUE7WUFDMUJBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzVCQSxDQUFDQTtRQUNEQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNMQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7SUFFRkEsQ0FBQ0E7SUFURDs4QkFTQyxDQUFBIiwiZmlsZSI6InV0aWwvbG9hZGh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSHRtbChuYW1lOnN0cmluZyk6UHJvbWlzZTxhbnk+ICB7XHJcblx0aWYobmFtZSkge1xyXG5cdFx0bGV0IGh0bWwgPSBuYW1lICsgXCIuaHRtbCFcIlxyXG5cdFx0cmV0dXJuIFN5c3RlbS5pbXBvcnQoaHRtbCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShcIlwiKTtcclxuXHR9XHJcblx0XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=