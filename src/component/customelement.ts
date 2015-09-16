class CustomElement extends HTMLElement {
	createShadowRoot(): DocumentFragment {return void 0};
	host: HTMLElement;
}

function CustomElementDummy() {}

export {CustomElement, CustomElementDummy}
/*
let HTML5Element = {
	new: ()=>{return void 0;},
	
}
class CustomElement extends HTML5Element {}

export {CustomElement, HTML5Element}
*/