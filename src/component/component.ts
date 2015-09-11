import loadhtml from "../util/loadhtml"
import register from "./register/register";
import {ComponentOptions, IComponentOptions} from "./options"

export default function Component(opt: IComponentOptions): ClassDecorator {
	opt = new ComponentOptions(opt);
	
	return (target) => {
		
		let html = opt.template ? target.name : void 0;;
		let name = ((opt.namespace ? opt.namespace + "-" : "") + target.name).toLowerCase();
		
		loadhtml(html)
		.then(dom => {
			return register(name, target, dom.template)
		});
	}
}; 
