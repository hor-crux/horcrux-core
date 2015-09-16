/*
let CE = window["CustomElement"] = function() {}

declare class CustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment;
	host: HTMLElement;
}
*/

export default class CustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment {return void 0;}
	host: HTMLElement;
}

window["CustomElement"] = function() {};