export default class CallbackHolder {

	protected prefix: string = 'ID_';
	protected lastID: number = 1;
	protected callbacks: {[key:string]:Function} = {};

	public register(callback: Function, self?: any): string {
		let id = this.prefix + this.lastID++;
		this.callbacks[id] = self ? callback.bind(self) : callback;
		return id;
	}

	public unregister(id) {
		if(!this.callbacks[id])
			throw 'Could not unregister callback for id ' + id;
		delete this.callbacks[id];
	};
}