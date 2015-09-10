import CallbackHolder from "../callbackholder"
import {Dispatcher, DispatcherAction} from "../dispatcher/dispatcher"
import {inject} from "../../dependencyinjection/di"

export default class Store<T> extends CallbackHolder {

	@inject(Dispatcher)
	protected dispatcher: Dispatcher

	static handlerMap: any = {};
	
	public id: string;
	protected data: T;
	
	constructor() {
		super();
		this.id = this.dispatcher.register(this.handle.bind(this));
	}
	
	public register(callback: (data:T)=>void, self?:any): string {
		return super.register(callback, self);
	}
		
	protected handle(action: DispatcherAction): void {
		let handlerMap = this.constructor.prototype.handlerMap
		let handlers = handlerMap[action.type] || [];
		
		handlers.forEach(handler => {
			handler.call(this, action.data);
		})
	};
	
	
	protected changed(): void {
		for (let id in this.callbacks) {
			let cb = this.callbacks[id];
			if(cb)
				cb(this.data);
		}
	}
}