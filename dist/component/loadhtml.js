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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9sb2FkaHRtbC50cyJdLCJuYW1lcyI6WyJsb2FkSHRtbCJdLCJtYXBwaW5ncyI6IjtJQUFBLGtCQUFpQyxJQUFXO1FBQzNDQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNUQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFBQTtZQUMxQkEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDNUJBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLENBQUNBO1lBQ0xBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQzVCQSxDQUFDQTtJQUVGQSxDQUFDQTtJQVREOzhCQVNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L2xvYWRodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEh0bWwobmFtZTpzdHJpbmcpOlByb21pc2U8YW55PiAge1xyXG5cdGlmKG5hbWUpIHtcclxuXHRcdGxldCBodG1sID0gbmFtZSArIFwiLmh0bWwhXCJcclxuXHRcdHJldHVybiBTeXN0ZW0uaW1wb3J0KGh0bWwpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoXCJcIik7XHJcblx0fVxyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9