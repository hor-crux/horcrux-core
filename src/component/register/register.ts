import {createPrototype, assignCallback, createdCallback} from "./prototype"

export default function register (name: string, target:any, template:any):void {
	
	let prototype = createPrototype(target);
	
	assignCallback(prototype, "createdCallback", createdCallback, [template]);
	
	(<any> document).registerElement(name, {prototype});
}