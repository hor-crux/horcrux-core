import Model from "./model"
import {regex} from "./bind"
import {PathObserver} from "observejs"

export default function bindNode(node:Node, model:Model): void {
	let isTextNode = node.nodeType === 3;
	let hasOnlyTextNodes =  ((<any>node).shadowRoot && (<any>node).shadowRoot.childElementCount === 0) || (<Element>node).childElementCount === 0 
	if(isTextNode || hasOnlyTextNodes) {
		bindTextNode(node, model);
	}
	
}

function bindTextNode(node:Node, model:Model): void {
	regex.lastIndex = 0;
	let match = regex.exec(node.textContent);
	if(match) {
		let path = match[1];
		let r = new RegExp("\{\{" + path + "\}\}", "g")
		
		
		let originalText = node.textContent;
		
		let {object, value} = model.get(path);
		let observer = new PathObserver(object, path);
		
		let cb = (newVal, oldVal) => {
			node.textContent = originalText.replace(r, newVal);
		};
		observer.open(cb);
		cb(value, null);
	}
}