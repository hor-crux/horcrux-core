define(["require", "exports", "../../bind/bind"], function (require, exports, bind_1) {
    /**
     * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it;
     */
    function createPrototype(target) {
        var proto = Object.create(HTMLElement.prototype);
        ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback']
            .forEach(function (cb) {
            if (typeof target[cb] === "function")
                proto[cb] = target[cb];
        });
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
        /*
        if(typeof this['createdCallback'] === 'function')
            this.createdCallback();
        */
    }
    exports.createdCallback = createdCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7SUFFQTs7T0FFRztJQUNILHlCQUF5QixNQUFVO1FBQ2xDQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUdqREEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxrQkFBa0JBLEVBQUVBLGtCQUFrQkEsRUFBRUEsMEJBQTBCQSxDQUFDQTthQUN0RkEsT0FBT0EsQ0FBQ0EsVUFBQUEsRUFBRUE7WUFDVkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsS0FBS0EsVUFBVUEsQ0FBQ0E7Z0JBQ3BDQSxLQUFLQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUF5Q08sdUJBQWUsbUJBekN0QjtJQUVEOzs7T0FHRztJQUNILHdCQUF3QixNQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVcsRUFBRSxJQUFPO1FBQVBDLG9CQUFPQSxHQUFQQSxTQUFPQTtRQUNuRUEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxDQUFDLENBQUFBO0lBQ0ZBLENBQUNBO0lBNkJ3QixzQkFBYyxrQkE3QnRDO0lBRUQ7O09BRUc7SUFDSCx5QkFBeUIsUUFBWSxFQUFFLE1BQVU7UUFDaERDLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO1FBQ3JCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLENBQUNBO1FBRURBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2ZBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7WUFDckNBLElBQUlBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hEQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUUxQkEsSUFBSUEsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLEVBQUVBLENBQUFBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO2dCQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFFakVBLGNBQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQTtRQUVEQTs7O1VBR0VBO0lBQ0hBLENBQUNBO0lBRXdDLHVCQUFlLG1CQUZ2RDtJQUV3RCIsImZpbGUiOiJjb21wb25lbnQvcmVnaXN0ZXIvcHJvdG90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kRG9tfSBmcm9tIFwiLi4vLi4vYmluZC9iaW5kXCJcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50LnByb3RvdHlwZSwgYXNzaWducyBhbGwgcHJvcGVydGllcyBvZiAnbmV3IHRhcmdldCgpJyB0byBpdCBhbmQgcmV0dXJucyBpdDsgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm90b3R5cGUodGFyZ2V0OmFueSk6IGFueSB7XHJcblx0bGV0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xyXG5cdFxyXG5cdFxyXG5cdFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXVxyXG5cdC5mb3JFYWNoKGNiPT57XHJcblx0XHRpZih0eXBlb2YgdGFyZ2V0W2NiXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cHJvdG9bY2JdID0gdGFyZ2V0W2NiXTtcclxuXHR9KTtcclxuXHRcclxuXHRyZXR1cm4gcHJvdG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgZnVuY3Rpb24gbmFtZWQgJ2tleScgdG8gJ3RhcmdldCcsIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyAnY2InIHdpdGggZ2l2ZW4gJ2FyZ3MnXHJcbiAqIGFuZCB0aGVuIGNhbGxzIHRoZSBwcmV2aW91cyAndGFyZ2V0W2tleV0nIGlmIGl0IHdhcyBhIGZ1bmN0aW9uIHdpdGggJ2FyZ3MnLiBcclxuICovXHJcbmZ1bmN0aW9uIGFzc2lnbkNhbGxiYWNrKHRhcmdldDphbnksIGtleTpzdHJpbmcsIGNiOkZ1bmN0aW9uLCBhcmdzPVtdKTogdm9pZCB7XHJcblx0bGV0IG9yaWdpbmFsID0gdGFyZ2V0W2tleV07XHJcblx0dGFyZ2V0W2tleV0gPSBmdW5jdGlvbigpIHtcclxuXHRcdGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0dHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIgPyBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogJyc7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogRGVmYXVsdCAnY3JlYXRlZENhbGxiYWNrJyBmb3IgYSBDdXN0b21lbGVtZW50LiBBcHBlbmRzIHRoZSAndGVtcGxhdGUnIGNvbnRlbnQgdG8gc2hhZG93cm9vdCwgaWYgISF0ZW1wbGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlZENhbGxiYWNrKHRlbXBsYXRlOmFueSwgdGFyZ2V0OmFueSk6dm9pZCB7XHJcblx0bGV0IHQgPSBuZXcgdGFyZ2V0KCk7XHJcblx0Zm9yICh2YXIga2V5IGluIHQpIHtcclxuXHRcdHRoaXNba2V5XSA9IHRba2V5XTtcclxuXHR9XHJcblx0XHJcblx0aWYoISF0ZW1wbGF0ZSkge1xyXG5cdFx0bGV0IHNoYWRvdyA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG5cdFx0bGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuXHRcdHNoYWRvdy5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblx0XHRcclxuXHRcdGxldCB3YyA9IHdpbmRvd1tcIldlYkNvbXBvbmVudHNcIl07XHJcblx0XHRpZih3YyAmJiB3Yy5TaGFkb3dDU1MpXHJcblx0XHRcdHdjLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YXJnZXQuc2VsZWN0b3IsIFwiXCIpO1xyXG5cdFx0XHJcblx0XHRiaW5kRG9tKHNoYWRvdywgW3RoaXNdKTtcclxuXHR9XHJcblx0XHJcblx0LypcclxuXHRpZih0eXBlb2YgdGhpc1snY3JlYXRlZENhbGxiYWNrJ10gPT09ICdmdW5jdGlvbicpXHJcblx0XHR0aGlzLmNyZWF0ZWRDYWxsYmFjaygpO1xyXG5cdCovXHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlUHJvdG90eXBlLCBhc3NpZ25DYWxsYmFjaywgY3JlYXRlZENhbGxiYWNrfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==