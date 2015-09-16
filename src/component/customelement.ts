/*
let CE = window["CustomElement"] = function() {}

declare class CustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment;
	host: HTMLElement;
}
*/
declare var HTML5Element: {
	new(): HTMLElement
	prototype: HTMLElement
	createShadowRoot(): DocumentFragment
	host: HTMLElement
}
window["HTML5Element"] = function(){};


class CustomElement extends HTML5Element {}

export {CustomElement, HTML5Element}