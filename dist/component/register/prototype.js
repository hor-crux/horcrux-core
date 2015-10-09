define(["require", "exports", "../../bind/bind"], function (require, exports, bind_1) {
    /**
     * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it;
     */
    function createPrototype(target) {
        var proto = Object.create(HTMLElement.prototype);
        for (var key in target.prototype)
            proto[key] = target.prototype[key];
        /*
        ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback']
        .forEach(cb=>{
            if(typeof target.prototype[cb] === "function")
            proto[cb] = target.prototype[cb];
        });
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
        target.call(this);
        if (!!template) {
            var shadow = this.createShadowRoot();
            var clone = document.importNode(template.content, true);
            shadow.appendChild(clone);
            var wc = window["WebComponents"];
            if (wc && wc.ShadowCSS)
                wc.ShadowCSS.shimStyling(template.content, target.selector, "");
            bind_1.bindDom(shadow, [this]);
        }
        this.created();
    }
    exports.createdCallback = createdCallback;
    function attachedCallback() {
        this.attached();
    }
    exports.attachedCallback = attachedCallback;
    function detachedCallback() {
        this.detached();
    }
    exports.detachedCallback = detachedCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siLCJhdHRhY2hlZENhbGxiYWNrIiwiZGV0YWNoZWRDYWxsYmFjayJdLCJtYXBwaW5ncyI6IjtJQUVBOztPQUVHO0lBQ0gseUJBQXlCLE1BQVU7UUFDbENBLElBQUlBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBRWpEQSxHQUFHQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUMvQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFcENBOzs7Ozs7VUFNRUE7UUFFRkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUE2Q08sdUJBQWUsbUJBN0N0QjtJQUVEOzs7T0FHRztJQUNILHdCQUF3QixNQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVcsRUFBRSxJQUFPO1FBQVBDLG9CQUFPQSxHQUFQQSxTQUFPQTtRQUNuRUEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxDQUFDLENBQUFBO0lBQ0ZBLENBQUNBO0lBaUN3QixzQkFBYyxrQkFqQ3RDO0lBRUQ7O09BRUc7SUFDSCx5QkFBeUIsUUFBWSxFQUFFLE1BQVU7UUFFaERDLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBRWxCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1lBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFMUJBLElBQUlBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1lBQ2pDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDckJBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1lBRWpFQSxjQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7SUFFaEJBLENBQUNBO0lBVXdDLHVCQUFlLG1CQVZ2RDtJQUVEO1FBQ0NDLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0lBQ2pCQSxDQUFDQTtJQU15RCx3QkFBZ0Isb0JBTnpFO0lBRUQ7UUFDQ0MsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7SUFDakJBLENBQUNBO0lBRTJFLHdCQUFnQixvQkFGM0Y7SUFFNEYiLCJmaWxlIjoiY29tcG9uZW50L3JlZ2lzdGVyL3Byb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZERvbX0gZnJvbSBcIi4uLy4uL2JpbmQvYmluZFwiXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBIVE1MRWxlbWVudC5wcm90b3R5cGUsIGFzc2lnbnMgYWxsIHByb3BlcnRpZXMgb2YgJ25ldyB0YXJnZXQoKScgdG8gaXQgYW5kIHJldHVybnMgaXQ7IFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvdG90eXBlKHRhcmdldDphbnkpOiBhbnkge1xyXG5cdGxldCBwcm90byA9IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHRcclxuXHRmb3IobGV0IGtleSBpbiB0YXJnZXQucHJvdG90eXBlKVxyXG5cdFx0cHJvdG9ba2V5XSA9IHRhcmdldC5wcm90b3R5cGVba2V5XTtcclxuXHRcclxuXHQvKlxyXG5cdFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXVxyXG5cdC5mb3JFYWNoKGNiPT57XHJcblx0XHRpZih0eXBlb2YgdGFyZ2V0LnByb3RvdHlwZVtjYl0gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHByb3RvW2NiXSA9IHRhcmdldC5wcm90b3R5cGVbY2JdO1xyXG5cdH0pO1xyXG5cdCovXHJcblx0XHJcblx0cmV0dXJuIHByb3RvO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhIGZ1bmN0aW9uIG5hbWVkICdrZXknIHRvICd0YXJnZXQnLCB3aGljaCBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FsbHMgJ2NiJyB3aXRoIGdpdmVuICdhcmdzJ1xyXG4gKiBhbmQgdGhlbiBjYWxscyB0aGUgcHJldmlvdXMgJ3RhcmdldFtrZXldJyBpZiBpdCB3YXMgYSBmdW5jdGlvbiB3aXRoICdhcmdzJy4gXHJcbiAqL1xyXG5mdW5jdGlvbiBhc3NpZ25DYWxsYmFjayh0YXJnZXQ6YW55LCBrZXk6c3RyaW5nLCBjYjpGdW5jdGlvbiwgYXJncz1bXSk6IHZvaWQge1xyXG5cdGxldCBvcmlnaW5hbCA9IHRhcmdldFtrZXldO1xyXG5cdHRhcmdldFtrZXldID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjYi5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdHR5cGVvZiBvcmlnaW5hbCA9PT0gXCJmdW5jdGlvblwiID8gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6ICcnO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgJ2NyZWF0ZWRDYWxsYmFjaycgZm9yIGEgQ3VzdG9tZWxlbWVudC4gQXBwZW5kcyB0aGUgJ3RlbXBsYXRlJyBjb250ZW50IHRvIHNoYWRvd3Jvb3QsIGlmICEhdGVtcGxhdGVcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZWRDYWxsYmFjayh0ZW1wbGF0ZTphbnksIHRhcmdldDphbnkpOnZvaWQge1xyXG5cdFxyXG5cdHRhcmdldC5jYWxsKHRoaXMpO1xyXG5cdFxyXG5cdGlmKCEhdGVtcGxhdGUpIHtcclxuXHRcdGxldCBzaGFkb3cgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcclxuXHRcdGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XHJcblx0XHRzaGFkb3cuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG5cdFx0XHJcblx0XHRsZXQgd2MgPSB3aW5kb3dbXCJXZWJDb21wb25lbnRzXCJdO1xyXG5cdFx0aWYod2MgJiYgd2MuU2hhZG93Q1NTKVxyXG5cdFx0XHR3Yy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFyZ2V0LnNlbGVjdG9yLCBcIlwiKTtcclxuXHRcdFxyXG5cdFx0YmluZERvbShzaGFkb3csIFt0aGlzXSk7XHJcblx0fVxyXG5cdFxyXG5cdHRoaXMuY3JlYXRlZCgpO1xyXG5cdFxyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hlZENhbGxiYWNrKCk6IHZvaWQge1xyXG5cdHRoaXMuYXR0YWNoZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0YWNoZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuXHR0aGlzLmRldGFjaGVkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlUHJvdG90eXBlLCBhc3NpZ25DYWxsYmFjaywgY3JlYXRlZENhbGxiYWNrLCBhdHRhY2hlZENhbGxiYWNrLCBkZXRhY2hlZENhbGxiYWNrfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==