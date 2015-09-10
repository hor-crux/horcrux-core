let map: {[className:string]:any} = {};

/*
function register(clazz: any): void {
	map[clazz.name] = new clazz();
}
*/

function get<T>(clazz:{new():T}): T {
	let clazzName = (<any>clazz).name;
	let instance = map[clazzName] || new clazz();
	
	return <T>instance;
}

/**
 * Creates an instance of this class via new() and registeres this instance for dependency injection.
 */
function register(target:any): void {
	map[target.name] = new target();
}

function inject(clazz:any): PropertyDecorator {
	return (target: Object, propertyKey: string) => {
		delete target[propertyKey];
		Object.defineProperty(target, propertyKey, {
			get: function() {
				return get(clazz);
			}
		});
	}
}

export {register, inject}