import {createPrototype, assignCallback, createdCallback, attachedCallback, detachedCallback} from "./prototype"

export default function register(name: string, target:any, template:any):void {
	
	let prototype = createPrototype(target);
	
	assignCallback(prototype, "createdCallback", createdCallback, [template, target]);
	assignCallback(prototype, "attachedCallback", attachedCallback, []);
	assignCallback(prototype, "detachedCallback", detachedCallback, []);
	
	(<any> document).registerElement(name, {prototype});
}