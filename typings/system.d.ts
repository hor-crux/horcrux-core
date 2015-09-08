/// <reference path="es6-promise/es6-promise.d.ts" />


declare class System {
	static import(name:string): Promise<any>;
}