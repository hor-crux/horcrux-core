if(typeof (<any>Function.prototype).name === "undefined") {
	Object.defineProperty(Function.prototype, "name", {
		get: function() {
			var r = /function\s+(.+)\(/;
			return r.exec(this.prototype.constructor.toString())[1];
		}
	});
}