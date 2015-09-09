interface IComponentOptions {
	namespace?:string;
	template?:boolean;
}

class ComponentOptions implements IComponentOptions {
	constructor(private opt: IComponentOptions) {
		this.setValue("namespace", undefined);
		this.setValue("template", true);
	}
	
	private setValue(key:string, defaultValue:any):void {
		if(this.opt.hasOwnProperty(key))
			this[key] = this.opt[key];
		else
			this[key] = defaultValue;
	}
}

export {IComponentOptions, ComponentOptions}