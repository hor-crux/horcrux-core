export default function atached(target:any, key:string, descriptor:any): void {
	target['attachedCallback'] = target[key];
}