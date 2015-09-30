export default function Property(target:any, key:string): void {
	target.prototype.properties = target.prototype.properties || [];
	target.prototype.properties.push(key); 
}