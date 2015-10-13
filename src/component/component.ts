import loadhtml from "../util/loadhtml"
import {register} from "./register/register";
import {ComponentOptions, IComponentOptions} from "./options"

//TODO Wrap Decorator in Function - possible properties: template:boolean
export default function Component(target) {
		
	loadhtml(target.selector)
	.then(template => {
		return register(target.selector, target, template)
	});
}
 
