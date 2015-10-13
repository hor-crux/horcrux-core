import {Dom} from "./types"

function visit(node:Dom, cb:(node:Node)=>boolean): void {
	
	if(node instanceof NodeList) {
		return Array.prototype.forEach.call(node, n => {
			visit(n, cb);
		});
	}
	else if(node instanceof Array) {
		return node.forEach(n => {
			visit(n, cb);
		});
	}
	else if(node instanceof Node) {
			
		if(!cb(<Node>node))
			return;
			
		if((<Node>node).hasChildNodes()) {
			Array.prototype.forEach.call((<Node>node).childNodes, n => {
				visit(n, cb);
			});
		}
	}
}

export default visit;