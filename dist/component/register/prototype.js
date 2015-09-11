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
            wc.ShadowCSS.shimStyling(template.content, "my-app", "");
        bind_1.bindDom(shadow, [this]);
    }
    exports.createdCallback = createdCallback;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiYXNzaWduQ2FsbGJhY2siLCJjcmVhdGVkQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7SUFFQTs7T0FFRztJQUNILHlCQUF5QixNQUFVO1FBQ2xDQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUVqREE7Ozs7O1VBS0VBO1FBRUZBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2RBLENBQUNBO0lBb0NPLHVCQUFlLG1CQXBDdEI7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsTUFBVSxFQUFFLEdBQVUsRUFBRSxFQUFXLEVBQUUsSUFBTztRQUFQQyxvQkFBT0EsR0FBUEEsU0FBT0E7UUFDbkVBLElBQUlBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQTtZQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sUUFBUSxLQUFLLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkUsQ0FBQyxDQUFBQTtJQUNGQSxDQUFDQTtJQXdCd0Isc0JBQWMsa0JBeEJ0QztJQUVEOztPQUVHO0lBQ0gseUJBQXlCLFFBQVksRUFBRSxNQUFVO1FBQ2hEQyxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNyQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNaQSxNQUFNQSxDQUFDQTtRQUNSQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN4REEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFFMUJBLElBQUlBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ2pDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFMURBLGNBQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUV3Qyx1QkFBZSxtQkFGdkQ7SUFFd0QiLCJmaWxlIjoiY29tcG9uZW50L3JlZ2lzdGVyL3Byb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZERvbX0gZnJvbSBcIi4uLy4uL2JpbmQvYmluZFwiXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBIVE1MRWxlbWVudC5wcm90b3R5cGUsIGFzc2lnbnMgYWxsIHByb3BlcnRpZXMgb2YgJ25ldyB0YXJnZXQoKScgdG8gaXQgYW5kIHJldHVybnMgaXQ7IFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvdG90eXBlKHRhcmdldDphbnkpOiBhbnkge1xyXG5cdGxldCBwcm90byA9IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHRcclxuXHQvKlxyXG5cdGxldCB0ID0gbmV3IHRhcmdldCgpO1xyXG5cdGZvciAodmFyIGtleSBpbiB0KSB7XHJcblx0XHRwcm90b1trZXldID0gdFtrZXldO1xyXG5cdH1cclxuXHQqL1xyXG5cdFxyXG5cdHJldHVybiBwcm90bztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBmdW5jdGlvbiBuYW1lZCAna2V5JyB0byAndGFyZ2V0Jywgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzICdjYicgd2l0aCBnaXZlbiAnYXJncydcclxuICogYW5kIHRoZW4gY2FsbHMgdGhlIHByZXZpb3VzICd0YXJnZXRba2V5XScgaWYgaXQgd2FzIGEgZnVuY3Rpb24gd2l0aCAnYXJncycuIFxyXG4gKi9cclxuZnVuY3Rpb24gYXNzaWduQ2FsbGJhY2sodGFyZ2V0OmFueSwga2V5OnN0cmluZywgY2I6RnVuY3Rpb24sIGFyZ3M9W10pOiB2b2lkIHtcclxuXHRsZXQgb3JpZ2luYWwgPSB0YXJnZXRba2V5XTtcclxuXHR0YXJnZXRba2V5XSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2IuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHR0eXBlb2Ygb3JpZ2luYWwgPT09IFwiZnVuY3Rpb25cIiA/IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiAnJztcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0ICdjcmVhdGVkQ2FsbGJhY2snIGZvciBhIEN1c3RvbWVsZW1lbnQuIEFwcGVuZHMgdGhlICd0ZW1wbGF0ZScgY29udGVudCB0byBzaGFkb3dyb290LCBpZiAhIXRlbXBsYXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVkQ2FsbGJhY2sodGVtcGxhdGU6YW55LCB0YXJnZXQ6YW55KTp2b2lkIHtcclxuXHRsZXQgdCA9IG5ldyB0YXJnZXQoKTtcclxuXHRmb3IgKHZhciBrZXkgaW4gdCkge1xyXG5cdFx0dGhpc1trZXldID0gdFtrZXldO1xyXG5cdH1cclxuXHRcclxuXHRpZighdGVtcGxhdGUpXHJcblx0XHRyZXR1cm47XHJcblx0bGV0IHNoYWRvdyA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG5cdGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XHJcblx0c2hhZG93LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcclxuXHRsZXQgd2MgPSB3aW5kb3dbXCJXZWJDb21wb25lbnRzXCJdO1xyXG5cdGlmKHdjICYmIHdjLlNoYWRvd0NTUylcclxuXHRcdHdjLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCBcIm15LWFwcFwiLCBcIlwiKTtcclxuXHRcclxuXHRiaW5kRG9tKHNoYWRvdywgW3RoaXNdKTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVQcm90b3R5cGUsIGFzc2lnbkNhbGxiYWNrLCBjcmVhdGVkQ2FsbGJhY2t9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9