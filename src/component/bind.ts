import {PathObserver} from "observer";
import {Attributes} from "../attribute/attribute"

let regex = /\{\{(.+)\}\}/gm;

function bindTextNode(node:Node, model:any): void {
	regex.lastIndex = 0;
	let match = regex.exec(node.textContent);
	if(match) {
		let path = match[1];
		let originalText = node.textContent;
		let observer = new PathObserver(model, path);
		let r = new RegExp("\{\{" + path + "\}\}", "g")
		
		let cb = (newVal, oldVal) => {
			node.textContent = originalText.replace(r, newVal);
		};
		observer.open(cb);
		cb(model[path], null);
	}
}

function bindAttribute(node:Node, attr:{name:string, value:string}, model:any): void {
	let match = regex.exec(attr.value);
	if(match) {
		let path = match[1];
		
		if(Attributes[attr.name.toLowerCase()] !== undefined) {
			bindCustomAttribute(node, attr, model, path);
		}
		else if(typeof model[path] === "function") {
			bindFunctionAttribute(node, attr, model, path);
		}
		else {
			bindTextAttribute(node, attr, model, path);
		}
	}
}

function bindTextAttribute(node:Node, attr:{name:string, value:string}, model:any, path:string): void {
	let originalValue = attr.value;
	let observer = new PathObserver(model, path);
	let r = new RegExp("\{\{" + path + "\}\}", "g")
	
	let cb = (newVal, oldVal) => {
		attr.value = originalValue.replace(r, newVal);
	};
	observer.open(cb);
	cb(model[path], null);
}

function bindFunctionAttribute(node:Node, attr:{name:string, value:string}, model:any, path:string): void {
	node[attr.name.toLocaleLowerCase()] = event => {
		model[path](event);
	}
}


function bindCustomAttribute(node:Node, attr:{name:string, value:string}, model:any, path:string): void {
	let customAttr = new Attributes[attr.name](node, attr, model, path);
	
	let observer = new PathObserver(model, path);
	let cb = (newVal, oldVal) => {
		customAttr.newJSValue(newVal);
	};
	observer.open(cb);
	cb(model[path], null);
	
}


export default function bindNode(node:Node, model:any): void {
	let isTextNode = node.nodeType === 3;
	let hasOnlyTextNodes = (<Element>node).childElementCount === 0 
	if(isTextNode || hasOnlyTextNodes) {
		bindTextNode(node, model);
	}
	
	if(node.attributes)
		Array.prototype.forEach.call(node.attributes, attr => {
			bindAttribute(node, attr, model);
		})
}