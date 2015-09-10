import Store from "./store"

export default function handle(type:string): MethodDecorator {
	return (target: typeof Store, propertyKey: string | symbol, descriptor: any) => {
		target.handlerMap = target.handlerMap || {};
		target.handlerMap[type] = target.handlerMap[type] || [];
		target.handlerMap[type].push(target[propertyKey]);
	}
}