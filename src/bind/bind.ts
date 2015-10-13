import {Dom} from "../util/types"
import Model from "./model"
import visit from "../util/visit"
import bindAttribute from "./bindattribute"
import bindNode from "./bindnode"

let regex = /\{\{(.+)\}\}/gm;


function bind(node:Node, model:Model): boolean {
	if(node.attributes) {
		Array.prototype.forEach.call(node.attributes, attr => {
			bindAttribute(node, attr, model);
		});
	}
	if(!!node.dontVisit)
		return false;
	else {
		bindNode(node, model);
		return true;
	}
}

function bindDom(dom:Dom, models:Array<any>): void {
	let model = new Model(models);
	visit(dom, node=>{
		return bind(node, model)
	});
}

export {regex, bindDom}