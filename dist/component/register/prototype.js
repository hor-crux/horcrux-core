define(["require", "exports", "../../bind/bind"], function (require, exports, bind_1) {
    /**
     * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it;
     */
    function createPrototype(target) {
        var proto = Object.create(HTMLElement.prototype);
        var t = new target();
        for (var key in t) {
            proto[key] = t[key];
        }
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
    function createdCallback(template) {
        if (!template)
            return;
        var shadow = this.createShadowRoot();
        var clone = document.importNode(template.content, true);
        shadow.appendChild(clone);
        bind_1.bindDom(shadow, [this]);
    }
    exports.createdCallback = createdCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7SUFFQTs7T0FFRztJQUNILHlCQUF5QixNQUFVO1FBQ2xDQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUVqREEsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDckJBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ25CQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUEyQk8sdUJBQWUsbUJBM0J0QjtJQUVEOzs7T0FHRztJQUNILHdCQUF3QixNQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVcsRUFBRSxJQUFPO1FBQVBDLG9CQUFPQSxHQUFQQSxTQUFPQTtRQUNuRUEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxDQUFDLENBQUFBO0lBQ0ZBLENBQUNBO0lBZXdCLHNCQUFjLGtCQWZ0QztJQUVEOztPQUVHO0lBQ0gseUJBQXlCLFFBQVk7UUFDcENDLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBO1lBQ1pBLE1BQU1BLENBQUNBO1FBQ1JBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDckNBLElBQUlBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3hEQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUUxQkEsY0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRXdDLHVCQUFlLG1CQUZ2RDtJQUV3RCIsImZpbGUiOiJjb21wb25lbnQvcmVnaXN0ZXIvcHJvdG90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kRG9tfSBmcm9tIFwiLi4vLi4vYmluZC9iaW5kXCJcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50LnByb3RvdHlwZSwgYXNzaWducyBhbGwgcHJvcGVydGllcyBvZiAnbmV3IHRhcmdldCgpJyB0byBpdCBhbmQgcmV0dXJucyBpdDsgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm90b3R5cGUodGFyZ2V0OmFueSk6IGFueSB7XHJcblx0bGV0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xyXG5cdFxyXG5cdGxldCB0ID0gbmV3IHRhcmdldCgpO1xyXG5cdGZvciAodmFyIGtleSBpbiB0KSB7XHJcblx0XHRwcm90b1trZXldID0gdFtrZXldO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcHJvdG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgZnVuY3Rpb24gbmFtZWQgJ2tleScgdG8gJ3RhcmdldCcsIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyAnY2InIHdpdGggZ2l2ZW4gJ2FyZ3MnXHJcbiAqIGFuZCB0aGVuIGNhbGxzIHRoZSBwcmV2aW91cyAndGFyZ2V0W2tleV0nIGlmIGl0IHdhcyBhIGZ1bmN0aW9uIHdpdGggJ2FyZ3MnLiBcclxuICovXHJcbmZ1bmN0aW9uIGFzc2lnbkNhbGxiYWNrKHRhcmdldDphbnksIGtleTpzdHJpbmcsIGNiOkZ1bmN0aW9uLCBhcmdzPVtdKTogdm9pZCB7XHJcblx0bGV0IG9yaWdpbmFsID0gdGFyZ2V0W2tleV07XHJcblx0dGFyZ2V0W2tleV0gPSBmdW5jdGlvbigpIHtcclxuXHRcdGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0dHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIgPyBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogJyc7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogRGVmYXVsdCAnY3JlYXRlZENhbGxiYWNrJyBmb3IgYSBDdXN0b21lbGVtZW50LiBBcHBlbmRzIHRoZSAndGVtcGxhdGUnIGNvbnRlbnQgdG8gc2hhZG93cm9vdCwgaWYgISF0ZW1wbGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlZENhbGxiYWNrKHRlbXBsYXRlOmFueSk6dm9pZCB7XHJcblx0aWYoIXRlbXBsYXRlKVxyXG5cdFx0cmV0dXJuO1xyXG5cdGxldCBzaGFkb3cgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcclxuXHRsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG5cdHNoYWRvdy5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblx0XHJcblx0YmluZERvbShzaGFkb3csIFt0aGlzXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlUHJvdG90eXBlLCBhc3NpZ25DYWxsYmFjaywgY3JlYXRlZENhbGxiYWNrfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==