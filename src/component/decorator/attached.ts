export default function attached(target:any, key:string, descriptor:any): void {
	target['attachedCallback'] = target[key];
}