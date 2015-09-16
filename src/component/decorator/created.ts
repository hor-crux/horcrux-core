export default function created(target:any, key:string, descriptor:any): void {
	target['createdCallback'] = target[key];
}