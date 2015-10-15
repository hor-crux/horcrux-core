interface IProperty {
	(target:any, key:string): void | PropertyDecorator;
	types?: {[selector:string]:{[key:string]:any}};
	setProperty?: (object:any, key:string, value:any) => void;
}

let Property: IProperty = (target:any, key:string) => {
	function decorator(target, key) {
		target.properties = target.properties || [];
		target.properties.push(key);
	}
	
	if(!!key && typeof key === "string")
		decorator(target, key);
	else {
		let type = target;		
		return (target:any, key:string) => {
			let selector = target.constructor.selector;
			Property.types[selector] = Property.types[selector] || {};
			Property.types[selector][key] = type;
			decorator(target, key);
		};
	}
}

Property.types = {};

Property.setProperty = (object:any, key:string, value:any) => {
	let selector = object.constructor.selector;
	let type = Property.types[selector] && Property.types[selector][key];
	if(type === Number)
		object[key] = Number.parseFloat(value);
	else if(type === Boolean)
		object[key] = !!value;
	else
		object[key] = value;
}

export {Property, IProperty}