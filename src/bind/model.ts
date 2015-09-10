import {ObjectAndValue} from "../util/types"

export default class Model {
	
	protected objects:Array<any>;
	
	constructor(objects:Array<any>) {
		this.objects = objects;
	}
	
	public get(path:string): ObjectAndValue {
		let ret = void 0;
		
		this.objects.forEach(obj => {
			if(Model.has(obj, path))
				return ret = {
					object: obj,
					value: Model.get(obj,path)
				}
		})
		
		return ret;
	}
	
	public findObject(path:string): any {
		let ret = void 0;
		this.objects.forEach(obj => {
			if(!!Model.has(obj, path))
				return ret = obj;
		})
		
		return ret;
	}
	
	static has(object:any, path:string): any {
		let ret = true;
		
		path.split('.')
		.forEach((part, index, parts) => {
			if(typeof object[part] === 'undefined' && index+1 < parts.length)
				return ret = false;
			else {
				object = object[part]
			}
		})
		
		return ret;
	}
	
	static get(object:any, path:string): any {
		path.split('.')
		.forEach(part => {
			object = object[part]
		})
		
		return object;
	}
	
}