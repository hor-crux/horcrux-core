declare module "observer" {
	interface Observable {
		open(cb:Function, receiver?:any): any;
		deliver(): any;
		discardChanges():any;
		close():void;
	}
	
	export class PathObserver implements Observable {
		constructor(obj:any, path:string, defaultValue?:any);
		open(cb:Function, receiver?:any): any;
		deliver(): any;
		discardChanges():any;
		close():void;
	}
}