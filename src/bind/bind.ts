import {Dom} from "../util/types"
import Model from "./model"
import visit from "../util/visit"
import bindAttribute from "./bindattribute"
import bindNode from "./bindnode"

let regex = /\{\{(.+)\}\}/gm;


function bind(node:Node, model:Model): boolean {
	if(!!(<any>node).dontVisit || (typeof node["hasAttribute"] === "function" && (<Element>node).hasAttribute("dontVisit")))
		return false;
	
	if(node.attributes) {
		let names = [].map.call(node.attributes, function(a) {return a.name});
		names.forEach(function(name) {
			let attr = [].filter.call(node.attributes, function(a) {return a.name === name})[0];
			bindAttribute(node, attr, model);
		})
	}
	
	if(!!(<any>node).dontVisit || (typeof node["hasAttribute"] === "function" && (<Element>node).hasAttribute("dontVisit")))
		return false;
		
	if(node.nodeName.indexOf("-") > -1 && node.nodeName.indexOf("#") === -1)
		return false;
		
	bindNode(node, model);
	return true;
}

function bindDom(dom:Dom, models:Array<any>): void {
	let model = new Model(models);
	visit(dom, node=>{
		return bind(node, model)
	});
}

export {regex, bindDom}