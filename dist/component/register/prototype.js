define(["require", "exports", "../../bind/bind"], function (require, exports, bind_1) {
    /**
     * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it;
     */
    function createPrototype(target) {
        var proto = Object.create(HTMLElement.prototype);
        ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback']
            .forEach(function (cb) {
            if (typeof target.prototype[cb] === "function")
                proto[cb] = target.prototype[cb];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7SUFFQTs7T0FFRztJQUNILHlCQUF5QixNQUFVO1FBQ2xDQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUdqREEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxrQkFBa0JBLEVBQUVBLGtCQUFrQkEsRUFBRUEsMEJBQTBCQSxDQUFDQTthQUN0RkEsT0FBT0EsQ0FBQ0EsVUFBQUEsRUFBRUE7WUFDVkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsS0FBS0EsVUFBVUEsQ0FBQ0E7Z0JBQzlDQSxLQUFLQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUF5Q08sdUJBQWUsbUJBekN0QjtJQUVEOzs7T0FHRztJQUNILHdCQUF3QixNQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVcsRUFBRSxJQUFPO1FBQVBDLG9CQUFPQSxHQUFQQSxTQUFPQTtRQUNuRUEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxDQUFDLENBQUFBO0lBQ0ZBLENBQUNBO0lBNkJ3QixzQkFBYyxrQkE3QnRDO0lBRUQ7O09BRUc7SUFDSCx5QkFBeUIsUUFBWSxFQUFFLE1BQVU7UUFDaERDLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO1FBQ3JCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLENBQUNBO1FBRURBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2ZBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7WUFDckNBLElBQUlBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hEQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUUxQkEsSUFBSUEsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLEVBQUVBLENBQUFBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO2dCQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFFakVBLGNBQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQTtRQUVEQTs7O1VBR0VBO0lBQ0hBLENBQUNBO0lBRXdDLHVCQUFlLG1CQUZ2RDtJQUV3RCIsImZpbGUiOiJjb21wb25lbnQvcmVnaXN0ZXIvcHJvdG90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kRG9tfSBmcm9tIFwiLi4vLi4vYmluZC9iaW5kXCJcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50LnByb3RvdHlwZSwgYXNzaWducyBhbGwgcHJvcGVydGllcyBvZiAnbmV3IHRhcmdldCgpJyB0byBpdCBhbmQgcmV0dXJucyBpdDsgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm90b3R5cGUodGFyZ2V0OmFueSk6IGFueSB7XHJcblx0bGV0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xyXG5cdFxyXG5cdFxyXG5cdFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXVxyXG5cdC5mb3JFYWNoKGNiPT57XHJcblx0XHRpZih0eXBlb2YgdGFyZ2V0LnByb3RvdHlwZVtjYl0gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHByb3RvW2NiXSA9IHRhcmdldC5wcm90b3R5cGVbY2JdO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHJldHVybiBwcm90bztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBmdW5jdGlvbiBuYW1lZCAna2V5JyB0byAndGFyZ2V0Jywgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzICdjYicgd2l0aCBnaXZlbiAnYXJncydcclxuICogYW5kIHRoZW4gY2FsbHMgdGhlIHByZXZpb3VzICd0YXJnZXRba2V5XScgaWYgaXQgd2FzIGEgZnVuY3Rpb24gd2l0aCAnYXJncycuIFxyXG4gKi9cclxuZnVuY3Rpb24gYXNzaWduQ2FsbGJhY2sodGFyZ2V0OmFueSwga2V5OnN0cmluZywgY2I6RnVuY3Rpb24sIGFyZ3M9W10pOiB2b2lkIHtcclxuXHRsZXQgb3JpZ2luYWwgPSB0YXJnZXRba2V5XTtcclxuXHR0YXJnZXRba2V5XSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2IuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHR0eXBlb2Ygb3JpZ2luYWwgPT09IFwiZnVuY3Rpb25cIiA/IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAnJztcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0ICdjcmVhdGVkQ2FsbGJhY2snIGZvciBhIEN1c3RvbWVsZW1lbnQuIEFwcGVuZHMgdGhlICd0ZW1wbGF0ZScgY29udGVudCB0byBzaGFkb3dyb290LCBpZiAhIXRlbXBsYXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVkQ2FsbGJhY2sodGVtcGxhdGU6YW55LCB0YXJnZXQ6YW55KTp2b2lkIHtcclxuXHRsZXQgdCA9IG5ldyB0YXJnZXQoKTtcclxuXHRmb3IgKHZhciBrZXkgaW4gdCkge1xyXG5cdFx0dGhpc1trZXldID0gdFtrZXldO1xyXG5cdH1cclxuXHRcclxuXHRpZighIXRlbXBsYXRlKSB7XHJcblx0XHRsZXQgc2hhZG93ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcblx0XHRsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG5cdFx0c2hhZG93LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcdFxyXG5cdFx0bGV0IHdjID0gd2luZG93W1wiV2ViQ29tcG9uZW50c1wiXTtcclxuXHRcdGlmKHdjICYmIHdjLlNoYWRvd0NTUylcclxuXHRcdFx0d2MuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhcmdldC5zZWxlY3RvciwgXCJcIik7XHJcblx0XHRcclxuXHRcdGJpbmREb20oc2hhZG93LCBbdGhpc10pO1xyXG5cdH1cclxuXHRcclxuXHQvKlxyXG5cdGlmKHR5cGVvZiB0aGlzWydjcmVhdGVkQ2FsbGJhY2snXSA9PT0gJ2Z1bmN0aW9uJylcclxuXHRcdHRoaXMuY3JlYXRlZENhbGxiYWNrKCk7XHJcblx0Ki9cclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVQcm90b3R5cGUsIGFzc2lnbkNhbGxiYWNrLCBjcmVhdGVkQ2FsbGJhY2t9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9