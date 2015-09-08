interface ICustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment;
	host: HTMLElement;
}

declare var CustomElement: {
	new(): ICustomElement;
	prototype: ICustomElement;
}
