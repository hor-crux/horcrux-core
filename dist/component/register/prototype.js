define(["require", "exports", "../../bind/bind"], function (require, exports, bind_1) {
    /**
     * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it;
     */
    function createPrototype(target) {
        var proto = Object.create(HTMLElement.prototype);
        /*
        let t = new target();
        for (var key in t) {
            proto[key] = t[key];
        }
        */
        return proto;
    }
    exports.createPrototype = createPrototype;
    /**
     * Adds a function named 'key' to 'target', which is a function that calls 'cb' with given 'args'
     * and then calls the previous 'target[key]' if it was a function with 'args'.
     */
    function assignCallback(target, key, cb, args) {
        if (args === void 0) { args = []; }
        var original = target[key];
        target[key] = function () {
            cb.apply(this, args);
            typeof original === "function" ? original.apply(this, arguments) : '';
        };
    }
    exports.assignCallback = assignCallback;
    /**
     * Default 'createdCallback' for a Customelement. Appends the 'template' content to shadowroot, if !!template
     */
    function createdCallback(template, target) {
        var t = new target();
        for (var key in t) {
            this[key] = t[key];
        }
        if (!!template) {
            var shadow = this.createShadowRoot();
            var clone = document.importNode(template.content, true);
            shadow.appendChild(clone);
            var wc = window["WebComponents"];
            if (wc && wc.ShadowCSS)
                wc.ShadowCSS.shimStyling(template.content, target.selector, "");
            bind_1.bindDom(shadow, [this]);
        }
        if (typeof this['createdCallback'] === 'function')
            this.createdCallback();
    }
    exports.createdCallback = createdCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7SUFFQTs7T0FFRztJQUNILHlCQUF5QixNQUFVO1FBQ2xDQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUVqREE7Ozs7O1VBS0VBO1FBRUZBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2RBLENBQUNBO0lBdUNPLHVCQUFlLG1CQXZDdEI7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsTUFBVSxFQUFFLEdBQVUsRUFBRSxFQUFXLEVBQUUsSUFBTztRQUFQQyxvQkFBT0EsR0FBUEEsU0FBT0E7UUFDbkVBLElBQUlBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQTtZQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sUUFBUSxLQUFLLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkUsQ0FBQyxDQUFBQTtJQUNGQSxDQUFDQTtJQTJCd0Isc0JBQWMsa0JBM0J0QztJQUVEOztPQUVHO0lBQ0gseUJBQXlCLFFBQVksRUFBRSxNQUFVO1FBQ2hEQyxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNyQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1lBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFMUJBLElBQUlBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1lBQ2pDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDckJBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1lBRWpFQSxjQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxLQUFLQSxVQUFVQSxDQUFDQTtZQUNoREEsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRXdDLHVCQUFlLG1CQUZ2RDtJQUV3RCIsImZpbGUiOiJjb21wb25lbnQvcmVnaXN0ZXIvcHJvdG90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kRG9tfSBmcm9tIFwiLi4vLi4vYmluZC9iaW5kXCJcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50LnByb3RvdHlwZSwgYXNzaWducyBhbGwgcHJvcGVydGllcyBvZiAnbmV3IHRhcmdldCgpJyB0byBpdCBhbmQgcmV0dXJucyBpdDsgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm90b3R5cGUodGFyZ2V0OmFueSk6IGFueSB7XHJcblx0bGV0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xyXG5cdFxyXG5cdC8qXHJcblx0bGV0IHQgPSBuZXcgdGFyZ2V0KCk7XHJcblx0Zm9yICh2YXIga2V5IGluIHQpIHtcclxuXHRcdHByb3RvW2tleV0gPSB0W2tleV07XHJcblx0fVxyXG5cdCovXHJcblx0XHJcblx0cmV0dXJuIHByb3RvO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhIGZ1bmN0aW9uIG5hbWVkICdrZXknIHRvICd0YXJnZXQnLCB3aGljaCBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FsbHMgJ2NiJyB3aXRoIGdpdmVuICdhcmdzJ1xyXG4gKiBhbmQgdGhlbiBjYWxscyB0aGUgcHJldmlvdXMgJ3RhcmdldFtrZXldJyBpZiBpdCB3YXMgYSBmdW5jdGlvbiB3aXRoICdhcmdzJy4gXHJcbiAqL1xyXG5mdW5jdGlvbiBhc3NpZ25DYWxsYmFjayh0YXJnZXQ6YW55LCBrZXk6c3RyaW5nLCBjYjpGdW5jdGlvbiwgYXJncz1bXSk6IHZvaWQge1xyXG5cdGxldCBvcmlnaW5hbCA9IHRhcmdldFtrZXldO1xyXG5cdHRhcmdldFtrZXldID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjYi5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdHR5cGVvZiBvcmlnaW5hbCA9PT0gXCJmdW5jdGlvblwiID8gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6ICcnO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgJ2NyZWF0ZWRDYWxsYmFjaycgZm9yIGEgQ3VzdG9tZWxlbWVudC4gQXBwZW5kcyB0aGUgJ3RlbXBsYXRlJyBjb250ZW50IHRvIHNoYWRvd3Jvb3QsIGlmICEhdGVtcGxhdGVcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZWRDYWxsYmFjayh0ZW1wbGF0ZTphbnksIHRhcmdldDphbnkpOnZvaWQge1xyXG5cdGxldCB0ID0gbmV3IHRhcmdldCgpO1xyXG5cdGZvciAodmFyIGtleSBpbiB0KSB7XHJcblx0XHR0aGlzW2tleV0gPSB0W2tleV07XHJcblx0fVxyXG5cdFxyXG5cdGlmKCEhdGVtcGxhdGUpIHtcclxuXHRcdGxldCBzaGFkb3cgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcclxuXHRcdGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XHJcblx0XHRzaGFkb3cuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG5cdFx0XHJcblx0XHRsZXQgd2MgPSB3aW5kb3dbXCJXZWJDb21wb25lbnRzXCJdO1xyXG5cdFx0aWYod2MgJiYgd2MuU2hhZG93Q1NTKVxyXG5cdFx0XHR3Yy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFyZ2V0LnNlbGVjdG9yLCBcIlwiKTtcclxuXHRcdFxyXG5cdFx0YmluZERvbShzaGFkb3csIFt0aGlzXSk7XHJcblx0fVxyXG5cdFxyXG5cdGlmKHR5cGVvZiB0aGlzWydjcmVhdGVkQ2FsbGJhY2snXSA9PT0gJ2Z1bmN0aW9uJylcclxuXHRcdHRoaXMuY3JlYXRlZENhbGxiYWNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlUHJvdG90eXBlLCBhc3NpZ25DYWxsYmFjaywgY3JlYXRlZENhbGxiYWNrfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==