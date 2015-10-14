import {ObjectAndValue} from "../util/types"

export default class Model {
	
	protected _objects:Array<any>;
	
	constructor(objects:Array<any>) {
		this.objects = objects;
	}
	
	get objects(): Array<any> {
		return this._objects;
	}
	
	public get(path:string): ObjectAndValue {
		let ret: ObjectAndValue = {object: void 0, value: void 0};
		
		this.objects.some(obj => {
			if(Model.has(obj, path)) {
				ret = {
					object: obj,
					value: Model.get(obj,path)
				}
				return true;
			}
		})
		
		return ret;
	}
	
	public set(path:string, value:any): void {
		this.objects.forEach(obj => {
			if(Model.has(obj, path)) {
				return Model.set(obj, path, value);
			}
		})
	}
	
	public findObject(path:string): any {
		let ret = void 0;
		this.objects.forEach(obj => {
			if(!!Model.has(obj, path))
				return ret = obj;
		})
		
		return ret;
	}
	
	static has(object:any, path:string): boolean {
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
			object = object && object[part]
		})
		
		return object;
	}
	
	static set(object:any, path:string, value:any): void {
		let parts = path.split('.');
		let key = parts.pop();
		
		parts.forEach(part => {
			object = object[part]
		})
		
		object[key] = value;
	}
	
}