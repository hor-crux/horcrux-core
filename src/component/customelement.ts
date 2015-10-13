class CustomElement extends HTMLElement {
	host: HTMLElement;
	shadowRoot: DocumentFragment;
	properties: Array<string>;
	createShadowRoot(): DocumentFragment {return void 0};
	canActivate(): Promise<any> {return void 0};
	canDeactivate(): Promise<any> {return void 0};
	created(): void {}
	attached(): void {}
	detached(): void {}	
	onCreated: Array<(self:CustomElement)=>any>;
	onAttached: Array<(self:CustomElement)=>any>;
	onDetached: Array<(self:CustomElement)=>any>;
	beforeBinding: Array<Promise<any>>;
	get parentComponent(): CustomElement {return void 0}
}

function CustomElementDummy() {
	this.properties = this.properties || [];
	this.onCreated = this.onCreated || [];
	this.onAttached = this.onAttached || [];
	this.onDetached = this.onDetached || [];
	this.beforeBinding = this.beforeBinding || [];
}
CustomElementDummy.prototype.canActivate = function() {
	return Promise.resolve('');
}
CustomElementDummy.prototype.canDeactivate = function() {
	return Promise.resolve('');
}

CustomElementDummy.prototype.created = function() {}
CustomElementDummy.prototype.attached = function() {}
CustomElementDummy.prototype.detached = function() {}

Object.defineProperty(CustomElement.prototype, "parentComponent", {
	get: function () {
		let parent = void 0;
		while(!(parent instanceof CustomElementDummy)) {
			parent = parent.host || parent.parentNode
		}
		
		return parent;
	}
});


export {CustomElement, CustomElementDummy}