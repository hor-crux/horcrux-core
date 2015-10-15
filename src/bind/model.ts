import {ObjectAndValue} from "../util/types"

export default class Model {
	
	protected _objects:Array<any>;
	protected pathCache: {[path:string]:any} = {};
	
	constructor(objects:Array<any>) {
		this._objects = objects;
	}
	
	get objects(): Array<any> {
		return this._objects;
	}
	
	public get(path:string, strict=false): ObjectAndValue {
		/*
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
		*/
		let object = Model.highestOrder(this.objects, path);
		let value = Model.get(object, path);
		let ov = {object, value};
		
		//no value found - strict mode
		if(typeof value === "undefined" && !!strict) {
			return {object: void 0, value: value};
		}
		//value found || no value found && !strict mode
		else {
			this.pathCache[path] = object;
			return ov;
		}
	}
	
	public set(path:string, value:any): void {
		if(typeof this.pathCache[path] !== "undefined") {
			Model.set(this.pathCache[path], path, value);
		}
		else {
			let object = Model.highestOrder(this.objects, path);
			Model.set(object, path, value);
		}
		
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
		return Model.order(object, path) === path.split('.').length;
		/*
		let ret = true;
		
		path.split('.')
		.forEach((part, index, parts) => {
			if(typeof object[part] === 'undefined')
				return ret = false;
			else {
				object = object[part]
			}
		})
		
		return ret;
		*/
	}
	
	static order(object:any, path:string): number {
		let order = 0;
		
		path.split('.')
		.every((part, index, parts) => {
			if(typeof object[part] === 'undefined')
				return false;
			else {
				object = object[part]
				order++;
				return true;
			}
		})
		
		return order;
	}
	
	static highestOrder(objects:any[], path:string): any {
		return objects
		.map(obj => {
			return {order: Model.order(obj, path), object: obj};
		})
		.reduce((prev, curr) => {
			return curr.order > prev.order ? curr : prev;
		}).object;
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