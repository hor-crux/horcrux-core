import {bindDom} from "../../bind/bind"

/**
 * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it; 
 */
function createPrototype(target:any): any {
	let proto = Object.create(HTMLElement.prototype);
	
	for(let key in target.prototype)
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
		
		bindDom(shadow, [this]);
	}
	
	this.onCreated.forEach(method => {
		method.call(this, this);
	})
	
	this.created();
}

function attachedCallback(): void {
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

export {createPrototype, assignCallback, createdCallback, attachedCallback, detachedCallback}