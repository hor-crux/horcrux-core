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
//# sourceMappingURL=loadhtml.js.map