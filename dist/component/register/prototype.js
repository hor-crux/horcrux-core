define(["require", "exports", "./events", "../../bind/bind"], function (require, exports, events_1, bind_1) {
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
        templating: if (!!template) {
            var shadow = this.createShadowRoot();
            var clone = document.importNode(template.content, true);
            shadow.appendChild(clone);
            var wc = window["WebComponents"];
            if (wc && wc.ShadowCSS)
                wc.ShadowCSS.shimStyling(template.content, target.selector, "");
            if (!!this.dontVisit || this.hasAttribute("dontVisit"))
                break templating;
            if (template.hasAttribute("lazy"))
                this.lazy = true;
            if (!this.lazy && !(this.parentComponent && this.parentComponent.lazy))
                bind_1.bindDom(shadow, [this].concat(this.ancestors));
            else if (this.lazy) {
                var uncreated = [].filter.call(shadow.querySelectorAll("*"), function (element) { return element.nodeName.indexOf("-") > -1; });
                var id = this.eventBus.addEventListener(events_1.ComponentCreatedEvent, function (e) {
                    var index = uncreated.indexOf(e.data);
                    if (index > -1)
                        uncreated.splice(index, 1);
                    if (uncreated.length == 0) {
                        bind_1.bindDom(shadow, [_this].concat(_this.ancestors));
                        _this.eventBus.removeEventListener(events_1.ComponentCreatedEvent, id);
                        _this.eventBus.dispatch(new events_1.ComponentReadyEvent(_this));
                    }
                });
            }
            else if (this.parentComponent && this.parentComponent.lazy) {
                var id = this.parentComponent.eventBus.addEventListener(events_1.ComponentReadyEvent, function (e) {
                    bind_1.bindDom(shadow, [_this].concat(_this.ancestors));
                    _this.parentComponent.eventBus.removeEventListener(events_1.ComponentReadyEvent, id);
                });
            }
            else if (!this.parentComponent && hasLazyParent(this)) {
                var id = this.eventBus.addEventListener(events_1.ComponentCanBindEvent, function (e) {
                    bind_1.bindDom(shadow, [_this].concat(_this.ancestors));
                    _this.eventBus.removeEventListener(events_1.ComponentReadyEvent, id);
                });
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
        if (this.parentComponent && this.parentComponent.lazy)
            this.parentComponent.eventBus.dispatch(new events_1.ComponentCreatedEvent(this));
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
    function hasLazyParent(node) {
        while (node = node.parentNode) {
            if (node.hasAttribute && node.hasAttribute("lazy"))
                return true;
        }
        return false;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9yZWdpc3Rlci9wcm90b3R5cGUudHMiXSwibmFtZXMiOlsiY3JlYXRlUHJvdG90eXBlIiwiY3JlYXRlUHJvdG90eXBlLmciLCJhc3NpZ25DYWxsYmFjayIsImNyZWF0ZWRDYWxsYmFjayIsImF0dGFjaGVkQ2FsbGJhY2siLCJkZXRhY2hlZENhbGxiYWNrIiwiaGFzTGF6eVBhcmVudCJdLCJtYXBwaW5ncyI6IjtJQVFBOztPQUVHO0lBQ0gseUJBQXlCLE1BQVU7UUFDbENBLElBQUlBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBRWpEQSxXQUFXQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUNQQyxHQUFHQSxDQUFDQTtnQkFBQUEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUFDQSxJQUFJQTtvQkFBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUE7WUFBQUEsQ0FBQ0EsUUFBT0EsSUFBSUEsRUFBQ0E7UUFDekZBLENBQUNBO1FBQ1JELEdBQUdBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pDQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFFQSxNQUFNQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBQ25HQSxDQUFDQTtRQUVEQTs7Ozs7Ozs7Ozs7O1VBWUVBO1FBQ0ZBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2RBLENBQUNBO0lBOEhPLHVCQUFlLG1CQTlIdEI7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsTUFBVSxFQUFFLEdBQVUsRUFBRSxFQUFXLEVBQUUsSUFBTztRQUFQRSxvQkFBT0EsR0FBUEEsU0FBT0E7UUFDbkVBLElBQUlBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQTtZQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sUUFBUSxLQUFLLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkUsQ0FBQyxDQUFBQTtJQUNGQSxDQUFDQTtJQWtId0Isc0JBQWMsa0JBbEh0QztJQUdEOztPQUVHO0lBQ0gseUJBQXlCLFFBQVksRUFBRSxNQUFVO1FBQWpEQyxpQkFnRkNBO1FBOUVBQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUVsQkEsVUFBVUEsRUFBRUEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7WUFDckNBLElBQUlBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hEQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUUxQkEsSUFBSUEsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLEVBQUVBLENBQUFBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO2dCQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFFakVBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLElBQUlBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUNyREEsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFFbEJBLEVBQUVBLENBQUFBLENBQUNBLFFBQVFBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNoQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFFbEJBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLElBQUlBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNyRUEsY0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaERBLElBQUlBLENBQUNBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUFBLENBQUNBO2dCQUNsQkEsSUFBSUEsU0FBU0EsR0FBR0EsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxVQUFBQSxPQUFPQSxJQUFLQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckhBLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsOEJBQXFCQSxFQUFFQSxVQUFBQSxDQUFDQTtvQkFDL0RBLElBQUlBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUN0Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUMxQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzFCQSxjQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDL0NBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsOEJBQXFCQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTt3QkFDN0RBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLDRCQUFtQkEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxDQUFDQTtnQkFDRkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFDSEEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsSUFBSUEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNEQSxJQUFJQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxnQkFBZ0JBLENBQUNBLDRCQUFtQkEsRUFBRUEsVUFBQUEsQ0FBQ0E7b0JBQzdFQSxjQUFPQSxDQUFDQSxN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dGVudCI6WyJpbXBvcnQge0V2ZW50QnVzfSBmcm9tIFwiaG9yY3J1eC1ldmVudFwiXHJcbmltcG9ydCB7Z2V0fSBmcm9tIFwiaG9yY3J1eC1kaVwiXHJcblxyXG5pbXBvcnQge0NvbXBvbmVudENyZWF0ZWRFdmVudCwgQ29tcG9uZW50UmVhZHlFdmVudCwgQ29tcG9uZW50Q2FuQmluZEV2ZW50fSBmcm9tIFwiLi9ldmVudHNcIlxyXG5pbXBvcnQge0NvbXBvbmVudFJlZ2lzdHJ5fSBmcm9tIFwiLi4vY29tcG9uZW50cmVnaXN0cnlcIlxyXG5pbXBvcnQge0VsZW1lbnRSZWdpc3RlcmVkfSBmcm9tIFwiLi9yZWdpc3RlclwiXHJcbmltcG9ydCB7YmluZERvbX0gZnJvbSBcIi4uLy4uL2JpbmQvYmluZFwiXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBIVE1MRWxlbWVudC5wcm90b3R5cGUsIGFzc2lnbnMgYWxsIHByb3BlcnRpZXMgb2YgJ25ldyB0YXJnZXQoKScgdG8gaXQgYW5kIHJldHVybnMgaXQ7IFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvdG90eXBlKHRhcmdldDphbnkpOiBhbnkge1xyXG5cdGxldCBwcm90byA9IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHRcclxuXHRmdW5jdGlvbiBnKHAsIGspIHtcclxuICAgICAgICBcdGRvIHtpZihwLmhhc093blByb3BlcnR5KGspKSByZXR1cm4gcDsgZWxzZSBwID0gKHAucHJvdG90eXBlIHx8IHAuX19wcm90b19fKX0gd2hpbGUodHJ1ZSlcclxuICAgICAgICB9XHJcblx0Zm9yKHZhciBrZXkgaW4gdGFyZ2V0LnByb3RvdHlwZSkge1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZyh0YXJnZXQucHJvdG90eXBlLCBrZXkpLCBrZXkpKTtcclxuXHR9XHJcblx0XHJcblx0LypcclxuXHRsZXQgdCA9IHRhcmdldDtcclxuXHRkbyB7XHJcblx0XHR0ID0gdC5wcm90b3R5cGUgfHwgdC5fX3Byb3RvX187XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KVxyXG5cdFx0LmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwga2V5KSk7XHJcblx0XHR9KVxyXG5cdH0gd2hpbGUoISEodC5wcm90b3R5cGUgfHwgdC5fX3Byb3RvX18pKVxyXG5cdFxyXG5cdGZvcihsZXQga2V5IGluIHRhcmdldC5wcm90b3R5cGUpXHJcblx0XHRwcm90b1trZXldID0gdGFyZ2V0LnByb3RvdHlwZVtrZXldO1xyXG5cdCovXHJcblx0cmV0dXJuIHByb3RvO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhIGZ1bmN0aW9uIG5hbWVkICdrZXknIHRvICd0YXJnZXQnLCB3aGljaCBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FsbHMgJ2NiJyB3aXRoIGdpdmVuICdhcmdzJ1xyXG4gKiBhbmQgdGhlbiBjYWxscyB0aGUgcHJldmlvdXMgJ3RhcmdldFtrZXldJyBpZiBpdCB3YXMgYSBmdW5jdGlvbiB3aXRoICdhcmdzJy4gXHJcbiAqL1xyXG5mdW5jdGlvbiBhc3NpZ25DYWxsYmFjayh0YXJnZXQ6YW55LCBrZXk6c3RyaW5nLCBjYjpGdW5jdGlvbiwgYXJncz1bXSk6IHZvaWQge1xyXG5cdGxldCBvcmlnaW5hbCA9IHRhcmdldFtrZXldO1xyXG5cdHRhcmdldFtrZXldID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjYi5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdHR5cGVvZiBvcmlnaW5hbCA9PT0gXCJmdW5jdGlvblwiID8gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6ICcnO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0ICdjcmVhdGVkQ2FsbGJhY2snIGZvciBhIEN1c3RvbWVsZW1lbnQuIEFwcGVuZHMgdGhlICd0ZW1wbGF0ZScgY29udGVudCB0byBzaGFkb3dyb290LCBpZiAhIXRlbXBsYXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVkQ2FsbGJhY2sodGVtcGxhdGU6YW55LCB0YXJnZXQ6YW55KTp2b2lkIHtcclxuXHRcclxuXHR0YXJnZXQuY2FsbCh0aGlzKTtcclxuXHRcclxuXHR0ZW1wbGF0aW5nOiBpZighIXRlbXBsYXRlKSB7XHJcblx0XHRsZXQgc2hhZG93ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcblx0XHRsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG5cdFx0c2hhZG93LmFwcGVuZENoaWxkKGNsb25lKTtcclxuXHRcdFxyXG5cdFx0bGV0IHdjID0gd2luZG93W1wiV2ViQ29tcG9uZW50c1wiXTtcclxuXHRcdGlmKHdjICYmIHdjLlNoYWRvd0NTUylcclxuXHRcdFx0d2MuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhcmdldC5zZWxlY3RvciwgXCJcIik7XHJcblx0XHRcdFxyXG5cdFx0aWYoISF0aGlzLmRvbnRWaXNpdCB8fCB0aGlzLmhhc0F0dHJpYnV0ZShcImRvbnRWaXNpdFwiKSlcclxuXHRcdFx0YnJlYWsgdGVtcGxhdGluZztcclxuXHRcdFx0XHJcblx0XHRpZih0ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoXCJsYXp5XCIpKVxyXG5cdFx0XHR0aGlzLmxhenkgPSB0cnVlO1xyXG5cdFx0XHJcblx0XHRpZighdGhpcy5sYXp5ICYmICEodGhpcy5wYXJlbnRDb21wb25lbnQgJiYgdGhpcy5wYXJlbnRDb21wb25lbnQubGF6eSkpXHJcblx0XHRcdGJpbmREb20oc2hhZG93LCBbdGhpc10uY29uY2F0KHRoaXMuYW5jZXN0b3JzKSk7XHJcblx0XHRlbHNlIGlmKHRoaXMubGF6eSl7XHJcblx0XHRcdGxldCB1bmNyZWF0ZWQgPSBbXS5maWx0ZXIuY2FsbChzaGFkb3cucXVlcnlTZWxlY3RvckFsbChcIipcIiksIGVsZW1lbnQgPT4ge3JldHVybiBlbGVtZW50Lm5vZGVOYW1lLmluZGV4T2YoXCItXCIpID4gLTF9KTtcclxuXHRcdFx0bGV0IGlkID0gdGhpcy5ldmVudEJ1cy5hZGRFdmVudExpc3RlbmVyKENvbXBvbmVudENyZWF0ZWRFdmVudCwgZSA9PiB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gdW5jcmVhdGVkLmluZGV4T2YoZS5kYXRhKTtcclxuXHRcdFx0XHRpZihpbmRleCA+IC0xKSB1bmNyZWF0ZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRpZih1bmNyZWF0ZWQubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdGJpbmREb20oc2hhZG93LCBbdGhpc10uY29uY2F0KHRoaXMuYW5jZXN0b3JzKSk7XHJcblx0XHRcdFx0XHR0aGlzLmV2ZW50QnVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoQ29tcG9uZW50Q3JlYXRlZEV2ZW50LCBpZCk7XHJcblx0XHRcdFx0XHR0aGlzLmV2ZW50QnVzLmRpc3BhdGNoKG5ldyBDb21wb25lbnRSZWFkeUV2ZW50KHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHRoaXMucGFyZW50Q29tcG9uZW50ICYmIHRoaXMucGFyZW50Q29tcG9uZW50LmxhenkpIHtcclxuXHRcdFx0bGV0IGlkID0gdGhpcy5wYXJlbnRDb21wb25lbnQuZXZlbnRCdXMuYWRkRXZlbnRMaXN0ZW5lcihDb21wb25lbnRSZWFkeUV2ZW50LCBlID0+IHtcclxuXHRcdFx0XHRiaW5kRG9tKHNoYWRvdywgW3RoaXNdLmNvbmNhdCh0aGlzLmFuY2VzdG9ycykpO1xyXG5cdFx0XHRcdHRoaXMucGFyZW50Q29tcG9uZW50LmV2ZW50QnVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoQ29tcG9uZW50UmVhZHlFdmVudCwgaWQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZighdGhpcy5wYXJlbnRDb21wb25lbnQgJiYgaGFzTGF6eVBhcmVudCh0aGlzKSkge1xyXG5cdFx0XHRsZXQgaWQgPSB0aGlzLmV2ZW50QnVzLmFkZEV2ZW50TGlzdGVuZXIoQ29tcG9uZW50Q2FuQmluZEV2ZW50LCBlID0+IHtcclxuXHRcdFx0XHRiaW5kRG9tKHNoYWRvdywgW3RoaXNdLmNvbmNhdCh0aGlzLmFuY2VzdG9ycykpO1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRCdXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihDb21wb25lbnRSZWFkeUV2ZW50LCBpZCk7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qXHJcblx0XHRsZXQgdW5yZXNvbHZlZCA9IFtdLmZpbHRlci5jYWxsKHNoYWRvdy5xdWVyeVNlbGVjdG9yQWxsKFwiKlt3YWl0XVwiKSwgZWxlbWVudCA9PiB7XHJcblx0XHRcdHJldHVybiAhKGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBpbiBDb21wb25lbnRSZWdpc3RyeSk7XHJcblx0XHR9KS5tYXAoZWxlbWVudCA9PiB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9KVxyXG5cdFx0LnNvcnQoKVxyXG5cdFx0LnJlZHVjZSgoYSwgYikgPT4geyBpZiAoYiAhPSBhWzBdKSBhLnVuc2hpZnQoYik7IHJldHVybiBhIH0sIFtdKTtcclxuXHRcdFxyXG5cdFx0aWYodW5yZXNvbHZlZC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGxldCBlYiA9IGdldChFdmVudEJ1cyk7XHJcblx0XHRcdGxldCBpZCA9IGViLmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudFJlZ2lzdGVyZWQsIGUgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IHVucmVzb2x2ZWQuaW5kZXhPZihlLmRhdGEpO1xyXG5cdFx0XHRcdGlmKGluZGV4ID09PSAtMSkgcmV0dXJuO1xyXG5cdFx0XHRcdHVucmVzb2x2ZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRpZih1bnJlc29sdmVkLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0ZWIucmVtb3ZlRXZlbnRMaXN0ZW5lcihFbGVtZW50UmVnaXN0ZXJlZCwgaWQpO1xyXG5cdFx0XHRcdFx0YmluZERvbShzaGFkb3csIFt0aGlzXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJpbmREb20oc2hhZG93LCBbdGhpc10pO1xyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHR0aGlzLm9uQ3JlYXRlZC5mb3JFYWNoKG1ldGhvZCA9PiB7XHJcblx0XHRtZXRob2QuY2FsbCh0aGlzLCB0aGlzKTtcclxuXHR9KVxyXG5cdFxyXG5cdHRoaXMuY3JlYXRlZCgpO1xyXG5cdFxyXG5cdFxyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hlZENhbGxiYWNrKCk6IHZvaWQge1xyXG5cdGlmKHRoaXMucGFyZW50Q29tcG9uZW50ICYmIHRoaXMucGFyZW50Q29tcG9uZW50LmxhenkpXHJcblx0XHR0aGlzLnBhcmVudENvbXBvbmVudC5ldmVudEJ1cy5kaXNwYXRjaChuZXcgQ29tcG9uZW50Q3JlYXRlZEV2ZW50KHRoaXMpKTtcclxuXHRcclxuXHR0aGlzLm9uQXR0YWNoZWQuZm9yRWFjaChtZXRob2QgPT4ge1xyXG5cdFx0bWV0aG9kLmNhbGwodGhpcywgdGhpcyk7XHJcblx0fSlcclxuXHRcclxuXHR0aGlzLmF0dGFjaGVkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGFjaGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcblx0dGhpcy5vbkRldGFjaGVkLmZvckVhY2gobWV0aG9kID0+IHtcclxuXHRcdG1ldGhvZC5jYWxsKHRoaXMsIHRoaXMpO1xyXG5cdH0pXHJcblx0dGhpcy5kZXRhY2hlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNMYXp5UGFyZW50KG5vZGU6YW55KTogYm9vbGVhbiB7XHJcblx0d2hpbGUobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xyXG5cdFx0aWYobm9kZS5oYXNBdHRyaWJ1dGUgJiYgbm9kZS5oYXNBdHRyaWJ1dGUoXCJsYXp5XCIpKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVByb3RvdHlwZSwgYXNzaWduQ2FsbGJhY2ssIGNyZWF0ZWRDYWxsYmFjaywgYXR0YWNoZWRDYWxsYmFjaywgZGV0YWNoZWRDYWxsYmFja30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=