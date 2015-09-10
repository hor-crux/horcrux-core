import {Dom} from "../util/types"
import Model from "./model"
import visit from "../util/visit"
import bindAttribute from "./bindattribute"
import bindNode from "./bindnode"

let regex = /\{\{(.+)\}\}/gm;


function bind(node:Node, model:Model): void {
	if(node.attributes) {
		Array.prototype.forEach.call(node.attributes, attr => {
			bindAttribute(node, attr, model);
		});
	}
	
	bindNode(node, model);
	
}

function bindDom(dom:Dom, models:Array<any>): void {
	let model = new Model(models);
	visit(dom, node=>{
		bind(node, model)
	});
}

export {regex, bindDom}