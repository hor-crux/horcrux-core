let map: {[className:string]:any} = {};

/*
function register(clazz: any): void {
	map[clazz.name] = new clazz();
}
*/

function get<T>(clazz:{new():T}): T {
	register(clazz);
	
	let clazzName = (<any>clazz).name;
	let instance = map[clazzName];
	
	return <T>instance;
}

/**
 * Creates an instance of this class via new() and registeres this instance for dependency injection.
 */
function register(target:any): void {
	map[target.name] = map[target.name] || new target();
}

function inject(clazz:any): PropertyDecorator {
	return (target: Object, propertyKey: string) => {
		target[propertyKey] = get(clazz);
	}
}

export {register, inject}