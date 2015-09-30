import Model from './model'
import { regex } from './bind'
import { PathObserver } from 'observejs'

class Binding {
	
	private other:Binding;
	private changed:(value:any)=>any;
	private value: any;
	
	//TODO add Transformators
	
	constructor(counterBinding?:Binding) {
		if(counterBinding) {
			this.other = counterBinding;
			counterBinding.other = this;
		}
	}
	
	public setNewValue(value:any): void {
		this.other.changed(value);
	}
	
	public onNewValue(callback:(value:any)=>any): void {
		this.changed = value => {
			callback.call(void 0, value);
			this.value = value;
		};
	}
	
	public getvalue(): any {
		return this.value;
	}
	
	public getCounterBinding(): Binding {
		return this.other || new Binding(this);
	}
}

class ModelBinding extends Binding {
	
	constructor(attribute:Attr, model:Model) {
		super();
		
		regex.lastIndex = 0;
		let match = regex.exec(attribute.value);
		if(match) {
			let path = match[1];
			let {object, value} = model.get(path);
			let observer = new PathObserver(object, path);
	
			observer.open((newVal, oldVal) => {
				this.setNewValue(newVal);
			});
		}
		else {
			this.setNewValue(attribute.value);
		}
	
	}
	
}



export {Binding}