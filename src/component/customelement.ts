window["CustomElement"] = function() {}

declare class CustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment;
	host: HTMLElement;
}
/*
let HTML5Element = {
	new: ()=>{return void 0;},
	
}
class CustomElement extends HTML5Element {}

export {CustomElement, HTML5Element}
*/