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
}

function CustomElementDummy() {}
CustomElementDummy.prototype.canActivate = function() {
	return Promise.resolve('');
}
CustomElementDummy.prototype.canDeactivate = function() {
	return Promise.resolve('');
}

CustomElementDummy.prototype.created = function() {}

CustomElementDummy.prototype.attached = function() {}

CustomElementDummy.prototype.detached = function() {}


export {CustomElement, CustomElementDummy}