import {ObjectAndValue} from "../util/types"

export default class Model {
	
	protected objects:Array<any>;
	
	constructor(objects:Array<any>) {
		this.objects = objects;
	}
	
	public get(path:string): ObjectAndValue {
		this.objects.forEach(obj => {
			if(Model.has(obj, path))
				return {
					object: obj,
					value: Model.get(obj,path)
				}
		})
		
		return void 0;
	}
	
	public findObject(path:string): any {
		this.objects.forEach(obj => {
			if(!!Model.has(obj, path))
				return obj;
		})
		
		return void 0;
	}
	
	static has(object:any, path:string): any {
		path.split('.')
		.forEach(part => {
			if(typeof object[part] === 'undefined')
				return false;
			else
				object = object[part]
		})
		
		return true;
	}
	
	static get(object:any, path:string): any {
		path.split('.')
		.forEach(part => {
			object = object[part]
		})
		
		return object;
	}
	
}