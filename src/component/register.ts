import visit from "./visit";
import bindNode from "./bind";

function createProto(target:any): any {
	let proto = Object.create(HTMLElement.prototype);
	
	let t = new target();
	for (var key in t) {
		proto[key] = t[key];
	}
	
	return proto;
}

function createdCallback(template:any):void {
	if(!template)
		return;
	let shadow = this.createShadowRoot();
	let clone = document.importNode(template.content, true);
	shadow.appendChild(clone);
	
	visit(shadow, node => {bindNode(node, this);});
}

function assignCallback(target:any, key:string, cb:Function, args=[]): void {
	let original = target[key];
	target[key] = function() {
		cb.apply(this, args);
		typeof original === "function" ? original.apply(this, arguments) : '';
	}
}

export default function register (name: string, target:any, template:any):void {
	
	let prototype = createProto(target);
	
	assignCallback(prototype, "createdCallback", createdCallback, [template]);
	
	(<any> document).registerElement(name, {prototype});
}