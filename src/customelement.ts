let CE = window["CustomElement"] = function() {}

declare class CustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment;
	host: HTMLElement;
}