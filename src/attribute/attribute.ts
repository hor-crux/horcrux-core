import { Binding, ModelBinding } from '../bind/binding'
import Model from '../bind/model'

let Attributes: {[key:string]:typeof CustomAttribute} = {}

function Attribute(target:any):void {
	Attributes[target.selector.toLowerCase()] = target;
}

class CustomAttributeBase {
	constructor(protected node:Node, protected attr:Attr, protected model:Model) {}
	
}

class CustomAttribute extends CustomAttributeBase {
	protected binding: Binding;
	
	constructor(node:Node, attr:Attr, model:Model) {
		super(node, attr, model);
		this.createBinding();
		this.init();
	}
	
	protected createBinding(): void {
		this.binding = new ModelBinding(this.attr, this.model).getCounterBinding();
	}
	
	protected init(): any {};
}

export {Attribute, CustomAttribute, Attributes};