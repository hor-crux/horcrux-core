export default function Property(target:any, key:string): void {
	target.properties = target.properties || [];
	target.properties.push(key);
}