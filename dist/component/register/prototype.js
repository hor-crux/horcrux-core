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
        //visit(shadow, node => {bindNode(node, this);});
        bind_1.bindDom(shadow, this);
    }
    exports.createdCallback = createdCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7SUFFQTs7T0FFRztJQUNILHlCQUF5QixNQUFVO1FBQ2xDQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUVqREEsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDckJBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ25CQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUE0Qk8sdUJBQWUsbUJBNUJ0QjtJQUVEOzs7T0FHRztJQUNILHdCQUF3QixNQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVcsRUFBRSxJQUFPO1FBQVBDLG9CQUFPQSxHQUFQQSxTQUFPQTtRQUNuRUEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxDQUFDLENBQUFBO0lBQ0ZBLENBQUNBO0lBZ0J3QixzQkFBYyxrQkFoQnRDO0lBRUQ7O09BRUc7SUFDSCx5QkFBeUIsUUFBWTtRQUNwQ0MsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDWkEsTUFBTUEsQ0FBQ0E7UUFDUkEsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDeERBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBRTFCQSxpREFBaURBO1FBQ2pEQSxjQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFFd0MsdUJBQWUsbUJBRnZEO0lBRXdEIiwiZmlsZSI6ImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmREb219IGZyb20gXCIuLi8uLi9iaW5kL2JpbmRcIlxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBhc3NpZ25zIGFsbCBwcm9wZXJ0aWVzIG9mICduZXcgdGFyZ2V0KCknIHRvIGl0IGFuZCByZXR1cm5zIGl0OyBcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3RvdHlwZSh0YXJnZXQ6YW55KTogYW55IHtcclxuXHRsZXQgcHJvdG8gPSBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XHJcblx0XHJcblx0bGV0IHQgPSBuZXcgdGFyZ2V0KCk7XHJcblx0Zm9yICh2YXIga2V5IGluIHQpIHtcclxuXHRcdHByb3RvW2tleV0gPSB0W2tleV07XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBwcm90bztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBmdW5jdGlvbiBuYW1lZCAna2V5JyB0byAndGFyZ2V0Jywgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzICdjYicgd2l0aCBnaXZlbiAnYXJncydcclxuICogYW5kIHRoZW4gY2FsbHMgdGhlIHByZXZpb3VzICd0YXJnZXRba2V5XScgaWYgaXQgd2FzIGEgZnVuY3Rpb24gd2l0aCAnYXJncycuIFxyXG4gKi9cclxuZnVuY3Rpb24gYXNzaWduQ2FsbGJhY2sodGFyZ2V0OmFueSwga2V5OnN0cmluZywgY2I6RnVuY3Rpb24sIGFyZ3M9W10pOiB2b2lkIHtcclxuXHRsZXQgb3JpZ2luYWwgPSB0YXJnZXRba2V5XTtcclxuXHR0YXJnZXRba2V5XSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2IuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHR0eXBlb2Ygb3JpZ2luYWwgPT09IFwiZnVuY3Rpb25cIiA/IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAnJztcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0ICdjcmVhdGVkQ2FsbGJhY2snIGZvciBhIEN1c3RvbWVsZW1lbnQuIEFwcGVuZHMgdGhlICd0ZW1wbGF0ZScgY29udGVudCB0byBzaGFkb3dyb290LCBpZiAhIXRlbXBsYXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVkQ2FsbGJhY2sodGVtcGxhdGU6YW55KTp2b2lkIHtcclxuXHRpZighdGVtcGxhdGUpXHJcblx0XHRyZXR1cm47XHJcblx0bGV0IHNoYWRvdyA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG5cdGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XHJcblx0c2hhZG93LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcclxuXHQvL3Zpc2l0KHNoYWRvdywgbm9kZSA9PiB7YmluZE5vZGUobm9kZSwgdGhpcyk7fSk7XHJcblx0YmluZERvbShzaGFkb3csIHRoaXMpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVByb3RvdHlwZSwgYXNzaWduQ2FsbGJhY2ssIGNyZWF0ZWRDYWxsYmFja30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=