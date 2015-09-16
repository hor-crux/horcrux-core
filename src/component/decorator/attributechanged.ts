export default function attributeChanged(target:any, key:string, descriptor:any): void {
	target['attributeChangedCallback'] = target[key];
}