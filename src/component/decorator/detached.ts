export default function detached(target:any, key:string, descriptor:any): void {
	target['detachedCallback'] = target[key];
}