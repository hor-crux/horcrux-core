import {PathObserver} from 'observejs'
import { CustomElement } from './customelement'

let watch = (property:string, args?:any[]): MethodDecorator => {
	return (target:any, key:string): void => {
		target.onCreated = target.onCreated || [];
		target.onCreated.push((self) => {
			new PathObserver(self, property)
			.open(_ => {
				self[key].apply(self, args);
			})
		}) 
	}
}

export {watch}