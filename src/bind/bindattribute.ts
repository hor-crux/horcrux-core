import {regex} from "./bind"
import {Attributes} from "../attribute/attribute"
import Model from "./model"
import {PathObserver} from "observejs"

export default function bindAttribute(node:Node, attr:Attr, model:Model): void {
	
	//TODO use Bindings
	//TODO also detect CustomAttribute with non-{{}} Values
	//TODO call Alternative if {{.*}} does not match: setProperty
	
	if(Attributes[attr.name.toLowerCase()] !== undefined) {
		return bindCustomAttribute(node, attr, model);
	}
	regex.lastIndex = 0;
	let match = regex.exec(attr.value);
	if(match) {
		let path = match[1];
		
		if(!!/\(.*\)/.exec(attr.value)) {
			bindFunctionWithParamAttribute(node, attr, model, path);
		}
		else if(typeof model.get(path).value === "function") {
			bindFunctionAttribute(node, attr, model, path);
		}
		
		else if(!!(<any>attr.ownerElement).properties && (<any>attr.ownerElement).properties.indexOf(attr.name) > -1) {
			bindProperty(node, attr, model, path);
		}
		/*
		else if(attr.name[0] === '#') {
			bindProperty(node, attr, model, path);
		}
		*/
		else {
			bindTextAttribute(node, attr, model, path);
		}
	}
}

function bindTextAttribute(node:Node, attr:Attr, model:Model, path:string): void {
	let originalValue = attr.value;
	
	let {object, value} = model.get(path);
	
	let observer = new PathObserver(object, path);
	let r = new RegExp("\{\{" + path + "\}\}", "g")
	
	let cb = (newVal, oldVal) => {
		attr.value = originalValue.replace(r, newVal);
	};
	observer.open(cb);
	cb(value, null);
}

function bindProperty(node:Node, attr:Attr, model:Model, path:string): void {
	(function(node, attr, model, path) {
		let {object, value} = model.get(path);
		
		let observer = new PathObserver(object, path);
		let cb = (newVal, oldVal) => {
			node[attr.name] = newVal;
		};
		observer.open(cb);
		cb(value, null);
		attr.ownerElement.removeAttribute(attr.name);
	})(node, attr, model, path)
	
}

let regex_params = /\((.+)\)/;
let regex_function = /(.*)\(/;

function bindFunctionWithParamAttribute(node:Node, attr:Attr, model:Model, path:string): void {
	regex_params.lastIndex = 0;
	regex_function.lastIndex = 0;
	
	let params = regex_params.exec(path)[1]
		.split(",")
		.map(param => {return param.trim()})
		.map(param => {
			let value = model.get(param).value;
			return typeof value === "undefined" ? param : value;
		});
		
	//TODO map params to types e.g. 'true' to boolean, 1.2 to number...
		
	let functionName = regex_function.exec(path)[1];
	
	let {object, value} = model.get(functionName);
	
	attr.ownerElement.removeAttribute(attr.name);
	node[attr.name.toLocaleLowerCase()] = event => {
		value.apply(object, params);
	}
}

function bindFunctionAttribute(node:Node, attr:Attr, model:Model, path:string): void {
	let {object, value} = model.get(path);
	
	attr.ownerElement.removeAttribute(attr.name);
	node[attr.name.toLocaleLowerCase()] = event => {
		value.call(object, event);
	}
}


function bindCustomAttribute(node:Node, attr:Attr, model:Model): void {
	let customAttr = new Attributes[attr.name](node, attr, model);
	
	/*
	let {object, value} = model.get(path);
	
	let observer = new PathObserver(object, path);
	let cb = (newVal, oldVal) => {
		customAttr.newJSValue(newVal);
	};
	observer.open(cb);
	cb(value, null);
	*/
}