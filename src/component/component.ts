import loadhtml from "../util/loadhtml"
import register from "./register/register";
import {ComponentOptions, IComponentOptions} from "./options"


export default function Component(target) {
		
	loadhtml(target.selector)
	.then(template => {
		return register(name, target, template)
	});
}
 
