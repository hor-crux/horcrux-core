export default function Property(target:any, key:string): void {
	target._properties = target._properties || [];
	target._properties.push(key); 
}