define(["require", "exports", "horcrux-event", "horcrux-di", "../componentregistry", "./register", "../../bind/bind"], function (require, exports, horcrux_event_1, horcrux_di_1, componentregistry_1, register_1, bind_1) {
    /**
     * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it;
     */
    function createPrototype(target) {
        var proto = Object.create(HTMLElement.prototype);
        function g(p, k) {
            do {
                if (p.hasOwnProperty(k))
                    return p;
                else
                    p = (p.prototype || p.__proto__);
            } while (true);
        }
        for (var key in target.prototype) {
            Object.defineProperty(proto, key, Object.getOwnPropertyDescriptor(g(target.prototype, key), key));
        }
        /*
        let t = target;
        do {
            t = t.prototype || t.__proto__;
            Object.getOwnPropertyNames(t)
            .forEach(key => {
                Object.defineProperty(proto, key, Object.getOwnPropertyDescriptor(t, key));
            })
        } while(!!(t.prototype || t.__proto__))
        
        for(let key in target.prototype)
            proto[key] = target.prototype[key];
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
            var unresolved = [].filter.call(shadow.querySelectorAll("*[wait]"), function (element) {
                return !(element.nodeName.toLowerCase() in componentregistry_1.ComponentRegistry);
            });
            if (unresolved.length > 0) {
                var eb = horcrux_di_1.get(horcrux_event_1.EventBus);
                var id = eb.addEventListener(register_1.ElementRegistered, function (e) {
                    var index = unresolved.indexOf(e.data);
                    if (index === -1)
                        return;
                    unresolved.splice(index, 1);
                    if (unresolved.length === 0) {
                        eb.removeEventListener(register_1.ElementRegistered, id);
                        bind_1.bindDom(shadow, [_this]);
                    }
                });
            }
            else {
                bind_1.bindDom(shadow, [this]);
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiY3JlYXRlUHJvdG90eXBlLmciLCJhc3NpZ25DYWxsYmFjayIsImNyZWF0ZWRDYWxsYmFjayIsImF0dGFjaGVkQ2FsbGJhY2siLCJkZXRhY2hlZENhbGxiYWNrIl0sIm1hcHBpbmdzIjoiO0lBT0E7O09BRUc7SUFDSCx5QkFBeUIsTUFBVTtRQUNsQ0EsSUFBSUEsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFFakRBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBO1lBQ1BDLEdBQUdBLENBQUNBO2dCQUFBQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQUNBLElBQUlBO29CQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFBQTtZQUFBQSxDQUFDQSxRQUFPQSxJQUFJQSxFQUFDQTtRQUN6RkEsQ0FBQ0E7UUFDUkQsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkdBLENBQUNBO1FBRURBOzs7Ozs7Ozs7Ozs7VUFZRUE7UUFDRkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZEEsQ0FB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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRCdXN9IGZyb20gXCJob3JjcnV4LWV2ZW50XCJcclxuaW1wb3J0IHtnZXR9IGZyb20gXCJob3JjcnV4LWRpXCJcclxuXHJcbmltcG9ydCB7Q29tcG9uZW50UmVnaXN0cnl9IGZyb20gXCIuLi9jb21wb25lbnRyZWdpc3RyeVwiXHJcbmltcG9ydCB7RWxlbWVudFJlZ2lzdGVyZWR9IGZyb20gXCIuL3JlZ2lzdGVyXCJcclxuaW1wb3J0IHtiaW5kRG9tfSBmcm9tIFwiLi4vLi4vYmluZC9iaW5kXCJcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50LnByb3RvdHlwZSwgYXNzaWducyBhbGwgcHJvcGVydGllcyBvZiAnbmV3IHRhcmdldCgpJyB0byBpdCBhbmQgcmV0dXJucyBpdDsgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm90b3R5cGUodGFyZ2V0OmFueSk6IGFueSB7XHJcblx0bGV0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIGcocCwgaykge1xyXG4gICAgICAgIFx0ZG8ge2lmKHAuaGFzT3duUHJvcGVydHkoaykpIHJldHVybiBwOyBlbHNlIHAgPSAocC5wcm90b3R5cGUgfHwgcC5fX3Byb3RvX18pfSB3aGlsZSh0cnVlKVxyXG4gICAgICAgIH1cclxuXHRmb3IodmFyIGtleSBpbiB0YXJnZXQucHJvdG90eXBlKSB7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihnKHRhcmdldC5wcm90b3R5cGUsIGtleSksIGtleSkpO1xyXG5cdH1cclxuXHRcclxuXHQvKlxyXG5cdGxldCB0ID0gdGFyZ2V0O1xyXG5cdGRvIHtcclxuXHRcdHQgPSB0LnByb3RvdHlwZSB8fCB0Ll9fcHJvdG9fXztcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpXHJcblx0XHQuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCBrZXkpKTtcclxuXHRcdH0pXHJcblx0fSB3aGlsZSghISh0LnByb3RvdHlwZSB8fCB0Ll9fcHJvdG9fXykpXHJcblx0XHJcblx0Zm9yKGxldCBrZXkgaW4gdGFyZ2V0LnByb3RvdHlwZSlcclxuXHRcdHByb3RvW2tleV0gPSB0YXJnZXQucHJvdG90eXBlW2tleV07XHJcblx0Ki9cclxuXHRyZXR1cm4gcHJvdG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgZnVuY3Rpb24gbmFtZWQgJ2tleScgdG8gJ3RhcmdldCcsIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyAnY2InIHdpdGggZ2l2ZW4gJ2FyZ3MnXHJcbiAqIGFuZCB0aGVuIGNhbGxzIHRoZSBwcmV2aW91cyAndGFyZ2V0W2tleV0nIGlmIGl0IHdhcyBhIGZ1bmN0aW9uIHdpdGggJ2FyZ3MnLiBcclxuICovXHJcbmZ1bmN0aW9uIGFzc2lnbkNhbGxiYWNrKHRhcmdldDphbnksIGtleTpzdHJpbmcsIGNiOkZ1bmN0aW9uLCBhcmdzPVtdKTogdm9pZCB7XHJcblx0bGV0IG9yaWdpbmFsID0gdGFyZ2V0W2tleV07XHJcblx0dGFyZ2V0W2tleV0gPSBmdW5jdGlvbigpIHtcclxuXHRcdGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0dHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIgPyBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogJyc7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogRGVmYXVsdCAnY3JlYXRlZENhbGxiYWNrJyBmb3IgYSBDdXN0b21lbGVtZW50LiBBcHBlbmRzIHRoZSAndGVtcGxhdGUnIGNvbnRlbnQgdG8gc2hhZG93cm9vdCwgaWYgISF0ZW1wbGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlZENhbGxiYWNrKHRlbXBsYXRlOmFueSwgdGFyZ2V0OmFueSk6dm9pZCB7XHJcblx0XHJcblx0dGFyZ2V0LmNhbGwodGhpcyk7XHJcblx0XHJcblx0aWYoISF0ZW1wbGF0ZSkge1xyXG5cdFx0bGV0IHNoYWRvdyA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG5cdFx0bGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuXHRcdHNoYWRvdy5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblx0XHRcclxuXHRcdGxldCB3YyA9IHdpbmRvd1tcIldlYkNvbXBvbmVudHNcIl07XHJcblx0XHRpZih3YyAmJiB3Yy5TaGFkb3dDU1MpXHJcblx0XHRcdHdjLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YXJnZXQuc2VsZWN0b3IsIFwiXCIpO1xyXG5cdFx0XHJcblx0XHRsZXQgdW5yZXNvbHZlZCA9IFtdLmZpbHRlci5jYWxsKHNoYWRvdy5xdWVyeVNlbGVjdG9yQWxsKFwiKlt3YWl0XVwiKSwgZWxlbWVudCA9PiB7XHJcblx0XHRcdHJldHVybiAhKGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBpbiBDb21wb25lbnRSZWdpc3RyeSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0aWYodW5yZXNvbHZlZC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGxldCBlYiA9IGdldChFdmVudEJ1cyk7XHJcblx0XHRcdGxldCBpZCA9IGViLmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudFJlZ2lzdGVyZWQsIGUgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IHVucmVzb2x2ZWQuaW5kZXhPZihlLmRhdGEpO1xyXG5cdFx0XHRcdGlmKGluZGV4ID09PSAtMSkgcmV0dXJuO1xyXG5cdFx0XHRcdHVucmVzb2x2ZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRpZih1bnJlc29sdmVkLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0ZWIucmVtb3ZlRXZlbnRMaXN0ZW5lcihFbGVtZW50UmVnaXN0ZXJlZCwgaWQpO1xyXG5cdFx0XHRcdFx0YmluZERvbShzaGFkb3csIFt0aGlzXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJpbmREb20oc2hhZG93LCBbdGhpc10pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHRoaXMub25DcmVhdGVkLmZvckVhY2gobWV0aG9kID0+IHtcclxuXHRcdG1ldGhvZC5jYWxsKHRoaXMsIHRoaXMpO1xyXG5cdH0pXHJcblx0XHJcblx0dGhpcy5jcmVhdGVkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcblx0dGhpcy5vbkF0dGFjaGVkLmZvckVhY2gobWV0aG9kID0+IHtcclxuXHRcdG1ldGhvZC5jYWxsKHRoaXMsIHRoaXMpO1xyXG5cdH0pXHJcblx0dGhpcy5hdHRhY2hlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRhY2hlZENhbGxiYWNrKCk6IHZvaWQge1xyXG5cdHRoaXMub25EZXRhY2hlZC5mb3JFYWNoKG1ldGhvZCA9PiB7XHJcblx0XHRtZXRob2QuY2FsbCh0aGlzLCB0aGlzKTtcclxuXHR9KVxyXG5cdHRoaXMuZGV0YWNoZWQoKTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVQcm90b3R5cGUsIGFzc2lnbkNhbGxiYWNrLCBjcmVhdGVkQ2FsbGJhY2ssIGF0dGFjaGVkQ2FsbGJhY2ssIGRldGFjaGVkQ2FsbGJhY2t9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9