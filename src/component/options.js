define(["require", "exports"], function (require, exports) {
    var ComponentOptions = (function () {
        function ComponentOptions(opt) {
            this.opt = opt;
            this.setValue("namespace", undefined);
            this.setValue("template", true);
        }
        ComponentOptions.prototype.setValue = function (key, def) {
            if (this.opt.hasOwnProperty(key))
                this[key] = this.opt[key];
            else
                this[key] = def;
        };
        return ComponentOptions;
    })();
    exports.ComponentOptions = ComponentOptions;
});
//# sourceMappingURL=options.js.map