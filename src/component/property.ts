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
			Property.types[target.selector] = Property.types[target.selector] || {};
			Property.types[target.selector][key] = type;
			decorator(target, key);
		};
	}
}

Property.types = {};

Property.setProperty = (object:any, key:string, value:any) => {
	let type = Property.types[object.selector] && Property.types[object.selector][key];
	if(type === Number)
		object[key] = Number.parseFloat(value);
	else if(type === Boolean)
		object[key] = !!value;
	else
		object[key] = value;
}

export {Property, IProperty}