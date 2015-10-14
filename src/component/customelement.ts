import { EventBus } from "horcrux-event";

class CustomElement extends HTMLElement {
	host: HTMLElement;
	shadowRoot: DocumentFragment;
	properties: Array<string>;
	lazy: boolean;
	eventBus: EventBus;
	createShadowRoot(): DocumentFragment {return void 0};
	canActivate(): Promise<any> {return void 0};
	canDeactivate(): Promise<any> {return void 0};
	created(): void {}
	attached(): void {}
	detached(): void {}	
	onCreated: Array<(self:CustomElement)=>any>;
	onAttached: Array<(self:CustomElement)=>any>;
	onDetached: Array<(self:CustomElement)=>any>;
	get parentComponent(): CustomElement {return void 0}
}

function CustomElementDummy() {
	this.lazy = false;
	this.properties = this.properties || [];
	this.onCreated = this.onCreated || [];
	this.onAttached = this.onAttached || [];
	this.onDetached = this.onDetached || [];
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

Object.defineProperty(CustomElementDummy.prototype, "parentComponent", {
	get: function () {
		let parent = this.host || this.parentNode;
		while (!!parent && !("parentComponent" in parent)) {
			parent = parent.host || parent.parentNode
		}
		
		return parent;
	},
	enumerable: true
});

Object.defineProperty(CustomElementDummy.prototype, "eventBus", {
	get: function () {
		return this._eventBus || (this._eventBus = new EventBus());
	},
	enumerable: true
});


export {CustomElement, CustomElementDummy}