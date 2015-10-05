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
        //TODO call 'this.created' here. do analog for attached, detached, etc...
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siLCJhdHRhY2hlZENhbGxiYWNrIiwiZGV0YWNoZWRDYWxsYmFjayJdLCJtYXBwaW5ncyI6IjtJQUVBOztPQUVHO0lBQ0gseUJBQXlCLE1BQVU7UUFDbENBLElBQUlBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBRWpEQSxHQUFHQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUMvQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFcENBOzs7Ozs7VUFNRUE7UUFFRkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUE2Q08sdUJBQWUsbUJBN0N0QjtJQUVEOzs7T0FHRztJQUNILHdCQUF3QixNQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVcsRUFBRSxJQUFPO1FBQVBDLG9CQUFPQSxHQUFQQSxTQUFPQTtRQUNuRUEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxDQUFDLENBQUFBO0lBQ0ZBLENBQUNBO0lBaUN3QixzQkFBYyxrQkFqQ3RDO0lBRUQ7O09BRUc7SUFDSCx5QkFBeUIsUUFBWSxFQUFFLE1BQVU7UUFFaERDLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBRWxCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1lBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFMUJBLElBQUlBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1lBQ2pDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDckJBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1lBRWpFQSxjQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFFREEseUVBQXlFQTtJQUUxRUEsQ0FBQ0E7SUFVd0MsdUJBQWUsbUJBVnZEO0lBRUQ7UUFDQ0MsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7SUFDakJBLENBQUNBO0lBTXlELHdCQUFnQixvQkFOekU7SUFFRDtRQUNDQyxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtJQUNqQkEsQ0FBQ0E7SUFFMkUsd0JBQWdCLG9CQUYzRjtJQUU0RiIsImZpbGUiOiJjb21wb25lbnQvcmVnaXN0ZXIvcHJvdG90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kRG9tfSBmcm9tIFwiLi4vLi4vYmluZC9iaW5kXCJcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50LnByb3RvdHlwZSwgYXNzaWducyBhbGwgcHJvcGVydGllcyBvZiAnbmV3IHRhcmdldCgpJyB0byBpdCBhbmQgcmV0dXJucyBpdDsgXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb3RvdHlwZSh0YXJnZXQ6YW55KTogYW55IHtcblx0bGV0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXHRcblx0Zm9yKGxldCBrZXkgaW4gdGFyZ2V0LnByb3RvdHlwZSlcblx0XHRwcm90b1trZXldID0gdGFyZ2V0LnByb3RvdHlwZVtrZXldO1xuXHRcblx0Lypcblx0WydjcmVhdGVkQ2FsbGJhY2snLCAnYXR0YWNoZWRDYWxsYmFjaycsICdkZXRhY2hlZENhbGxiYWNrJywgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayddXG5cdC5mb3JFYWNoKGNiPT57XG5cdFx0aWYodHlwZW9mIHRhcmdldC5wcm90b3R5cGVbY2JdID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0cHJvdG9bY2JdID0gdGFyZ2V0LnByb3RvdHlwZVtjYl07XG5cdH0pO1xuXHQqL1xuXHRcblx0cmV0dXJuIHByb3RvO1xufVxuXG4vKipcbiAqIEFkZHMgYSBmdW5jdGlvbiBuYW1lZCAna2V5JyB0byAndGFyZ2V0Jywgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzICdjYicgd2l0aCBnaXZlbiAnYXJncydcbiAqIGFuZCB0aGVuIGNhbGxzIHRoZSBwcmV2aW91cyAndGFyZ2V0W2tleV0nIGlmIGl0IHdhcyBhIGZ1bmN0aW9uIHdpdGggJ2FyZ3MnLiBcbiAqL1xuZnVuY3Rpb24gYXNzaWduQ2FsbGJhY2sodGFyZ2V0OmFueSwga2V5OnN0cmluZywgY2I6RnVuY3Rpb24sIGFyZ3M9W10pOiB2b2lkIHtcblx0bGV0IG9yaWdpbmFsID0gdGFyZ2V0W2tleV07XG5cdHRhcmdldFtrZXldID0gZnVuY3Rpb24oKSB7XG5cdFx0Y2IuYXBwbHkodGhpcywgYXJncyk7XG5cdFx0dHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIgPyBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogJyc7XG5cdH1cbn1cblxuLyoqXG4gKiBEZWZhdWx0ICdjcmVhdGVkQ2FsbGJhY2snIGZvciBhIEN1c3RvbWVsZW1lbnQuIEFwcGVuZHMgdGhlICd0ZW1wbGF0ZScgY29udGVudCB0byBzaGFkb3dyb290LCBpZiAhIXRlbXBsYXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZWRDYWxsYmFjayh0ZW1wbGF0ZTphbnksIHRhcmdldDphbnkpOnZvaWQge1xuXHRcblx0dGFyZ2V0LmNhbGwodGhpcyk7XG5cdFxuXHRpZighIXRlbXBsYXRlKSB7XG5cdFx0bGV0IHNoYWRvdyA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xuXHRcdGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG5cdFx0c2hhZG93LmFwcGVuZENoaWxkKGNsb25lKTtcblx0XHRcblx0XHRsZXQgd2MgPSB3aW5kb3dbXCJXZWJDb21wb25lbnRzXCJdO1xuXHRcdGlmKHdjICYmIHdjLlNoYWRvd0NTUylcblx0XHRcdHdjLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YXJnZXQuc2VsZWN0b3IsIFwiXCIpO1xuXHRcdFxuXHRcdGJpbmREb20oc2hhZG93LCBbdGhpc10pO1xuXHR9XG5cdFxuXHQvL1RPRE8gY2FsbCAndGhpcy5jcmVhdGVkJyBoZXJlLiBkbyBhbmFsb2cgZm9yIGF0dGFjaGVkLCBkZXRhY2hlZCwgZXRjLi4uXG5cdFxufVxuXG5mdW5jdGlvbiBhdHRhY2hlZENhbGxiYWNrKCk6IHZvaWQge1xuXHR0aGlzLmF0dGFjaGVkKCk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaGVkQ2FsbGJhY2soKTogdm9pZCB7XG5cdHRoaXMuZGV0YWNoZWQoKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVQcm90b3R5cGUsIGFzc2lnbkNhbGxiYWNrLCBjcmVhdGVkQ2FsbGJhY2ssIGF0dGFjaGVkQ2FsbGJhY2ssIGRldGFjaGVkQ2FsbGJhY2t9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
