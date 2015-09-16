class CustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment {return void 0};
	host: HTMLElement;
}

function CustomElementDummy() {}

export {CustomElement, CustomElementDummy}