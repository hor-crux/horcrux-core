import {EventBus, Event} from "horcrux-event";
import {get} from "horcrux-di";

import {createPrototype, assignCallback, createdCallback, attachedCallback, detachedCallback} from "./prototype"

let eventBus = get(EventBus);

function register(name: string, target:any, template:any):void {
	
	let prototype = createPrototype(target);
	
	assignCallback(prototype, "createdCallback", createdCallback, [template, target]);
	assignCallback(prototype, "attachedCallback", attachedCallback, []);
	assignCallback(prototype, "detachedCallback", detachedCallback, []);
	
	(<any> document).registerElement(name, {prototype});
	eventBus.dispatch(new ElementRegistered(name));
}

class ElementRegistered extends Event<string> {}

export {register, ElementRegistered}