define(["require", "exports"], function (require, exports) {
    function visit(node, cb) {
        if (node instanceof NodeList) {
            return Array.prototype.forEach.call(node, function (n) {
                visit(n, cb);
            });
        }
        else {
            if (node.dontVisit)
                return;
            cb(node);
            if (node.hasChildNodes()) {
                Array.prototype.forEach.call(node.childNodes, function (n) {
                    visit(n, cb);
                });
            }
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = visit;
});
//# sourceMappingURL=visit.js.map