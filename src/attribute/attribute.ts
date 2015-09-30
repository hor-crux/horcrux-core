let Attributes: {[key:string]:typeof CustomAttribute} = {}

function Attribute(target:any):void {
	Attributes[target.selector.toLowerCase()] = target;
}

class CustomAttribute {
	constructor(protected node?:Node, protected attr?:{name:string, value:string}, protected model?:any, protected path?:string) {}
	newJSValue(value:any): void {}
	newDOMValue(value:any): void {}
}

export {Attribute, CustomAttribute, Attributes};