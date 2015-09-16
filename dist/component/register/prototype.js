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
        if (!template)
            return;
        var shadow = this.createShadowRoot();
        var clone = document.importNode(template.content, true);
        shadow.appendChild(clone);
        var wc = window["WebComponents"];
        if (wc && wc.ShadowCSS)
            wc.ShadowCSS.shimStyling(template.content, target.selector, "");
        bind_1.bindDom(shadow, [this]);
        if (typeof this['createdCallback'] === 'function')
            this.createdCallback();
    }
    exports.createdCallback = createdCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7SUFFQTs7T0FFRztJQUNILHlCQUF5QixNQUFVO1FBQ2xDQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUVqREE7Ozs7O1VBS0VBO1FBRUZBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2RBLENBQUNBO0lBdUNPLHVCQUFlLG1CQXZDdEI7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsTUFBVSxFQUFFLEdBQVUsRUFBRSxFQUFXLEVBQUUsSUFBTztRQUFQQyxvQkFBT0EsR0FBUEEsU0FBT0E7UUFDbkVBLElBQUlBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQTtZQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sUUFBUSxLQUFLLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkUsQ0FBQyxDQUFBQTtJQUNGQSxDQUFDQTtJQTJCd0Isc0JBQWMsa0JBM0J0QztJQUVEOztPQUVHO0lBQ0gseUJBQXlCLFFBQVksRUFBRSxNQUFVO1FBQ2hEQyxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNyQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNaQSxNQUFNQSxDQUFDQTtRQUNSQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN4REEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFFMUJBLElBQUlBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ2pDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFakVBLGNBQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBRXhCQSxFQUFFQSxDQUFBQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLEtBQUtBLFVBQVVBLENBQUNBO1lBQ2hEQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFd0MsdUJBQWUsbUJBRnZEO0lBRXdEIiwiZmlsZSI6ImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmREb219IGZyb20gXCIuLi8uLi9iaW5kL2JpbmRcIlxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBhc3NpZ25zIGFsbCBwcm9wZXJ0aWVzIG9mICduZXcgdGFyZ2V0KCknIHRvIGl0IGFuZCByZXR1cm5zIGl0OyBcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3RvdHlwZSh0YXJnZXQ6YW55KTogYW55IHtcclxuXHRsZXQgcHJvdG8gPSBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XHJcblx0XHJcblx0LypcclxuXHRsZXQgdCA9IG5ldyB0YXJnZXQoKTtcclxuXHRmb3IgKHZhciBrZXkgaW4gdCkge1xyXG5cdFx0cHJvdG9ba2V5XSA9IHRba2V5XTtcclxuXHR9XHJcblx0Ki9cclxuXHRcclxuXHRyZXR1cm4gcHJvdG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgZnVuY3Rpb24gbmFtZWQgJ2tleScgdG8gJ3RhcmdldCcsIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyAnY2InIHdpdGggZ2l2ZW4gJ2FyZ3MnXHJcbiAqIGFuZCB0aGVuIGNhbGxzIHRoZSBwcmV2aW91cyAndGFyZ2V0W2tleV0nIGlmIGl0IHdhcyBhIGZ1bmN0aW9uIHdpdGggJ2FyZ3MnLiBcclxuICovXHJcbmZ1bmN0aW9uIGFzc2lnbkNhbGxiYWNrKHRhcmdldDphbnksIGtleTpzdHJpbmcsIGNiOkZ1bmN0aW9uLCBhcmdzPVtdKTogdm9pZCB7XHJcblx0bGV0IG9yaWdpbmFsID0gdGFyZ2V0W2tleV07XHJcblx0dGFyZ2V0W2tleV0gPSBmdW5jdGlvbigpIHtcclxuXHRcdGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0dHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIgPyBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogJyc7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogRGVmYXVsdCAnY3JlYXRlZENhbGxiYWNrJyBmb3IgYSBDdXN0b21lbGVtZW50LiBBcHBlbmRzIHRoZSAndGVtcGxhdGUnIGNvbnRlbnQgdG8gc2hhZG93cm9vdCwgaWYgISF0ZW1wbGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlZENhbGxiYWNrKHRlbXBsYXRlOmFueSwgdGFyZ2V0OmFueSk6dm9pZCB7XHJcblx0bGV0IHQgPSBuZXcgdGFyZ2V0KCk7XHJcblx0Zm9yICh2YXIga2V5IGluIHQpIHtcclxuXHRcdHRoaXNba2V5XSA9IHRba2V5XTtcclxuXHR9XHJcblx0XHJcblx0aWYoIXRlbXBsYXRlKVxyXG5cdFx0cmV0dXJuO1xyXG5cdGxldCBzaGFkb3cgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcclxuXHRsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG5cdHNoYWRvdy5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblx0XHJcblx0bGV0IHdjID0gd2luZG93W1wiV2ViQ29tcG9uZW50c1wiXTtcclxuXHRpZih3YyAmJiB3Yy5TaGFkb3dDU1MpXHJcblx0XHR3Yy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFyZ2V0LnNlbGVjdG9yLCBcIlwiKTtcclxuXHRcclxuXHRiaW5kRG9tKHNoYWRvdywgW3RoaXNdKTtcclxuXHRcclxuXHRpZih0eXBlb2YgdGhpc1snY3JlYXRlZENhbGxiYWNrJ10gPT09ICdmdW5jdGlvbicpXHJcblx0XHR0aGlzLmNyZWF0ZWRDYWxsYmFjaygpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVByb3RvdHlwZSwgYXNzaWduQ2FsbGJhY2ssIGNyZWF0ZWRDYWxsYmFja30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=