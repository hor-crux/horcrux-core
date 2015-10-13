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
        var _this = this;
        target.call(this);
        if (!!template) {
            var shadow = this.createShadowRoot();
            var clone = document.importNode(template.content, true);
            shadow.appendChild(clone);
            var wc = window["WebComponents"];
            if (wc && wc.ShadowCSS)
                wc.ShadowCSS.shimStyling(template.content, target.selector, "");
            Promise.all(this.beforeBinding || [])
                .then(function (_) {
                bind_1.bindDom(shadow, [_this]);
            });
        }
        this.onCreated.forEach(function (method) {
            method.call(_this, _this);
        });
        this.created();
    }
    exports.createdCallback = createdCallback;
    function attachedCallback() {
        var _this = this;
        this.onAttached.forEach(function (method) {
            method.call(_this, _this);
        });
        this.attached();
    }
    exports.attachedCallback = attachedCallback;
    function detachedCallback() {
        var _this = this;
        this.onDetached.forEach(function (method) {
            method.call(_this, _this);
        });
        this.detached();
    }
    exports.detachedCallback = detachedCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siLCJhdHRhY2hlZENhbGxiYWNrIiwiZGV0YWNoZWRDYWxsYmFjayJdLCJtYXBwaW5ncyI6IjtJQUVBOztPQUVHO0lBQ0gseUJBQXlCLE1BQVU7UUFDbENBLElBQUlBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBRWpEQSxHQUFHQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUMvQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFcENBOzs7Ozs7VUFNRUE7UUFFRkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUF5RE8sdUJBQWUsbUJBekR0QjtJQUVEOzs7T0FHRztJQUNILHdCQUF3QixNQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVcsRUFBRSxJQUFPO1FBQVBDLG9CQUFPQSxHQUFQQSxTQUFPQTtRQUNuRUEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxDQUFDLENBQUFBO0lBQ0ZBLENBQUNBO0lBNkN3QixzQkFBYyxrQkE3Q3RDO0lBRUQ7O09BRUc7SUFDSCx5QkFBeUIsUUFBWSxFQUFFLE1BQVU7UUFBakRDLGlCQXdCQ0E7UUF0QkFBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBRWxCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1lBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFMUJBLElBQUlBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1lBQ2pDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDckJBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1lBRWpFQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxJQUFHQSxFQUFFQSxDQUFDQTtpQkFDbkNBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBO2dCQUNOQSxjQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsTUFBTUE7WUFDNUJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUlBLEVBQUVBLEtBQUlBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUVGQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFnQndDLHVCQUFlLG1CQWhCdkQ7SUFFRDtRQUFBQyxpQkFLQ0E7UUFKQUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsTUFBTUE7WUFDN0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUlBLEVBQUVBLEtBQUlBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUNGQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtJQUNqQkEsQ0FBQ0E7SUFTeUQsd0JBQWdCLG9CQVR6RTtJQUVEO1FBQUFDLGlCQUtDQTtRQUpBQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxNQUFNQTtZQUM3QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsRUFBRUEsS0FBSUEsQ0FBQ0EsQ0FBQ0E7UUFDekJBLENBQUNBLENBQUNBLENBQUFBO1FBQ0ZBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0lBQ2pCQSxDQUFDQTtJQUUyRSx3QkFBZ0Isb0JBRjNGO0lBRTRGIiwiZmlsZSI6ImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmREb219IGZyb20gXCIuLi8uLi9iaW5kL2JpbmRcIlxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBhc3NpZ25zIGFsbCBwcm9wZXJ0aWVzIG9mICduZXcgdGFyZ2V0KCknIHRvIGl0IGFuZCByZXR1cm5zIGl0OyBcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3RvdHlwZSh0YXJnZXQ6YW55KTogYW55IHtcclxuXHRsZXQgcHJvdG8gPSBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XHJcblx0XHJcblx0Zm9yKGxldCBrZXkgaW4gdGFyZ2V0LnByb3RvdHlwZSlcclxuXHRcdHByb3RvW2tleV0gPSB0YXJnZXQucHJvdG90eXBlW2tleV07XHJcblx0XHJcblx0LypcclxuXHRbJ2NyZWF0ZWRDYWxsYmFjaycsICdhdHRhY2hlZENhbGxiYWNrJywgJ2RldGFjaGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ11cclxuXHQuZm9yRWFjaChjYj0+e1xyXG5cdFx0aWYodHlwZW9mIHRhcmdldC5wcm90b3R5cGVbY2JdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRwcm90b1tjYl0gPSB0YXJnZXQucHJvdG90eXBlW2NiXTtcclxuXHR9KTtcclxuXHQqL1xyXG5cdFxyXG5cdHJldHVybiBwcm90bztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBmdW5jdGlvbiBuYW1lZCAna2V5JyB0byAndGFyZ2V0Jywgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzICdjYicgd2l0aCBnaXZlbiAnYXJncydcclxuICogYW5kIHRoZW4gY2FsbHMgdGhlIHByZXZpb3VzICd0YXJnZXRba2V5XScgaWYgaXQgd2FzIGEgZnVuY3Rpb24gd2l0aCAnYXJncycuIFxyXG4gKi9cclxuZnVuY3Rpb24gYXNzaWduQ2FsbGJhY2sodGFyZ2V0OmFueSwga2V5OnN0cmluZywgY2I6RnVuY3Rpb24sIGFyZ3M9W10pOiB2b2lkIHtcclxuXHRsZXQgb3JpZ2luYWwgPSB0YXJnZXRba2V5XTtcclxuXHR0YXJnZXRba2V5XSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2IuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHR0eXBlb2Ygb3JpZ2luYWwgPT09IFwiZnVuY3Rpb25cIiA/IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAnJztcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0ICdjcmVhdGVkQ2FsbGJhY2snIGZvciBhIEN1c3RvbWVsZW1lbnQuIEFwcGVuZHMgdGhlICd0ZW1wbGF0ZScgY29udGVudCB0byBzaGFkb3dyb290LCBpZiAhIXRlbXBsYXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVkQ2FsbGJhY2sodGVtcGxhdGU6YW55LCB0YXJnZXQ6YW55KTp2b2lkIHtcclxuXHRcclxuXHR0YXJnZXQuY2FsbCh0aGlzKTtcclxuXHRcclxuXHRpZighIXRlbXBsYXRlKSB7XHJcblx0XHRsZXQgc2hhZG93ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcblx0XHRsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG5cdFx0c2hhZG93LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcdFxyXG5cdFx0bGV0IHdjID0gd2luZG93W1wiV2ViQ29tcG9uZW50c1wiXTtcclxuXHRcdGlmKHdjICYmIHdjLlNoYWRvd0NTUylcclxuXHRcdFx0d2MuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhcmdldC5zZWxlY3RvciwgXCJcIik7XHJcblx0XHRcclxuXHRcdFByb21pc2UuYWxsKHRoaXMuYmVmb3JlQmluZGluZyB8fFtdKVxyXG5cdFx0LnRoZW4oXyA9PiB7XHJcblx0XHRcdGJpbmREb20oc2hhZG93LCBbdGhpc10pO1xyXG5cdFx0fSlcclxuXHR9XHJcblx0XHJcblx0dGhpcy5vbkNyZWF0ZWQuZm9yRWFjaChtZXRob2QgPT4ge1xyXG5cdFx0bWV0aG9kLmNhbGwodGhpcywgdGhpcyk7XHJcblx0fSlcclxuXHRcclxuXHR0aGlzLmNyZWF0ZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuXHR0aGlzLm9uQXR0YWNoZWQuZm9yRWFjaChtZXRob2QgPT4ge1xyXG5cdFx0bWV0aG9kLmNhbGwodGhpcywgdGhpcyk7XHJcblx0fSlcclxuXHR0aGlzLmF0dGFjaGVkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGFjaGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcblx0dGhpcy5vbkRldGFjaGVkLmZvckVhY2gobWV0aG9kID0+IHtcclxuXHRcdG1ldGhvZC5jYWxsKHRoaXMsIHRoaXMpO1xyXG5cdH0pXHJcblx0dGhpcy5kZXRhY2hlZCgpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVByb3RvdHlwZSwgYXNzaWduQ2FsbGJhY2ssIGNyZWF0ZWRDYWxsYmFjaywgYXR0YWNoZWRDYWxsYmFjaywgZGV0YWNoZWRDYWxsYmFja30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=