import Model from './model'
import { regex } from './bind'
import { PathObserver } from 'observejs'

class Binding {
	
	private other:Binding;
	private changed:(value:any)=>any;
	private value: any;
	
	constructor(counterBinding?:Binding) {
		if(counterBinding) {
			this.other = counterBinding;
			counterBinding.other = this;
		}
	}
	
	public setNewValue(value:any): void {
		this.other && this.other.changed(value);
	}
	
	public onNewValue(callback:(value:any)=>any, callNow=true): void {
		this.changed = value => {
			callback(value);
			this.value = value;
		};
		
		if(callNow)
			this.changed(this.value);
	}
	
	public getvalue(): any {
		return this.value;
	}
	
	public getCounterBinding(): Binding {
		return this.other || new Binding(this);
	}
}

class ModelBinding extends Binding {
	
	//TODO add Transformators
	
	constructor(attribute:Attr, model:Model) {
		super();
		
		regex.lastIndex = 0;
		let match = regex.exec(attribute.value);
		if(match) {
			let path = match[1];
			let {object, value} = model.get(path);
			let observer = new PathObserver(object, path);
	
			// update Counter-Binding on Model-Change
			observer.open((newVal, oldVal) => {
				this.setNewValue(newVal);
			});
			
			// update Model on Counter-Binding-Change
			this.onNewValue(val => {
				model.set(path, val);
			}, false)
		}
		else {
			this.setNewValue(attribute.value);
		}
		
	
	}
	
}



export {Binding, ModelBinding}