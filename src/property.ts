let PropertyDecorator: PropertyDecorator = (target:Object, key:string) => {
	target[key] = null;
}

export default PropertyDecorator;