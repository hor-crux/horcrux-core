import {bindDom} from "../../bind/bind"

/**
 * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it; 
 */
function createPrototype(target:any): any {
	let proto = Object.create(HTMLElement.prototype);
	
	let t = new target();
	for (var key in t) {
		proto[key] = t[key];
	}
	
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
function createdCallback(template:any):void {
	if(!template)
		return;
	let shadow = this.createShadowRoot();
	let clone = document.importNode(template.content, true);
	shadow.appendChild(clone);
	
	bindDom(shadow, [this]);
}

export {createPrototype, assignCallback, createdCallback}