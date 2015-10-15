import {EventBus} from "horcrux-event"
import {get} from "horcrux-di"

import {ComponentCreatedEvent, ComponentReadyEvent, ComponentCanBindEvent} from "./events"
import {ComponentRegistry} from "../componentregistry"
import {ElementRegistered} from "./register"
import {bindDom} from "../../bind/bind"

/**
 * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it; 
 */
function createPrototype(target:any): any {
	let proto = Object.create(HTMLElement.prototype);
	
	function g(p, k) {
        	do {if(p.hasOwnProperty(k)) return p; else p = (p.prototype || p.__proto__)} while(true)
        }
	for(var key in target.prototype) {
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

/**
 * Adds a function named 'key' to 'target', which is a function that calls 'cb' with given 'args'
 * and then calls the previous 'target[key]' if it was a function with 'args'. 
 */
function assignCallback(target:any, key:string, cb:Function, args=[]): void {
	let original = target[key];
	target[key] = function() {
		cb.apply(this, args);
		typeof original === "function" ? original.apply(this, arguments) : '';
	}
}


/**
 * Default 'createdCallback' for a Customelement. Appends the 'template' content to shadowroot, if !!template
 */
function createdCallback(template:any, target:any):void {
	
	target.call(this);
	
	if(!!template) {
		let shadow = this.createShadowRoot();
		let clone = document.importNode(template.content, true);
		shadow.appendChild(clone);
		
		let wc = window["WebComponents"];
		if(wc && wc.ShadowCSS)
			wc.ShadowCSS.shimStyling(template.content, target.selector, "");
		
			
		if(template.hasAttribute("lazy") || this.hasAttribute("lazy"))
			this.lazy = true;
		
		if(!this.lazy && !(this.parentComponent && this.parentComponent.lazy) && !hasLazyParent(this))
			bindDom(shadow, [this].concat(this.ancestors));
		else if(this.lazy){
			let id1, id2;
			let uncreated = [].filter.call(shadow.querySelectorAll("*"), element => {return element.nodeName.indexOf("-") > -1});
			id1 = this.eventBus.addEventListener(ComponentCreatedEvent, e => {
				let index = uncreated.indexOf(e.data);
				if(index > -1) uncreated.splice(index, 1);
				if(uncreated.length == 0) {
					try {
						this.eventBus.removeEventListener(id1)
						this.eventBus.removeEventListener(id2);
					} catch(e) {}
					bindDom(shadow, [this].concat(this.ancestors));
					this.eventBus.dispatch(new ComponentReadyEvent(this));
				}
			})
			id2 = this.eventBus.addEventListener(ComponentCanBindEvent, e => {
				try {
					this.eventBus.removeEventListener(id1)
					this.eventBus.removeEventListener(id2);
				} catch(e) {}
				bindDom(shadow, [this].concat(this.ancestors).concat(!!e.data ? e.data : []));
			})
			
		}
		else if(this.parentComponent && this.parentComponent.lazy) {
			let id = this.parentComponent.eventBus.addEventListener(ComponentReadyEvent, e => {
				bindDom(shadow, [this].concat(this.ancestors));
				this.parentComponent && this.parentComponent.eventBus.removeEventListener(id);
			})
		}
		else if(!this.parentComponent && hasLazyParent(this)) {
			let id = this.eventBus.addEventListener(ComponentCanBindEvent, e => {
				bindDom(shadow, [this].concat(this.ancestors).concat(!!e.data ? e.data : []));
				this.eventBus.removeEventListener(id);
			})
		}
		
		/*
		let unresolved = [].filter.call(shadow.querySelectorAll("*[wait]"), element => {
			return !(element.nodeName.toLowerCase() in ComponentRegistry);
		}).map(element => {
			return element.nodeName.toLowerCase();
		})
		.sort()
		.reduce((a, b) => { if (b != a[0]) a.unshift(b); return a }, []);
		
		if(unresolved.length > 0) {
			let eb = get(EventBus);
			let id = eb.addEventListener(ElementRegistered, e => {
				let index = unresolved.indexOf(e.data);
				if(index === -1) return;
				unresolved.splice(index, 1);
				if(unresolved.length === 0) {
					eb.removeEventListener(ElementRegistered, id);
					bindDom(shadow, [this]);
				}
			});
		} else {
			bindDom(shadow, [this]);
		}
		*/
		
	}
	
	this.onCreated.forEach(method => {
		method.call(this, this);
	})
	
	this.created();
	
	
}

function attachedCallback(): void {
	if(!!this.lazy)
		this.eventBus.dispatch(new ComponentCreatedEvent(this));
	
	if(this.parentComponent && this.parentComponent.lazy)
		this.parentComponent.eventBus.dispatch(new ComponentCreatedEvent(this));
	
	this.onAttached.forEach(method => {
		method.call(this, this);
	})
	
	this.attached();
}

function detachedCallback(): void {
	this.onDetached.forEach(method => {
		method.call(this, this);
	})
	this.detached();
}

function hasLazyParent(node:any): boolean {
	while(node = node.parentNode) {
		if(node.hasAttribute && node.hasAttribute("lazy"))
			return true;
	}
	return false;
}

export {createPrototype, assignCallback, createdCallback, attachedCallback, detachedCallback}