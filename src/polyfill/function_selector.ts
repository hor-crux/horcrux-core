if(typeof (<any>Function.prototype).selector === "undefined") {
	Object.defineProperty(Function.prototype, "selector", {
		get: function() {
			var r = /function\s+(.+)\(/;
			try {
				let name = r.exec(this.prototype.constructor.toString())[1];
				var selector = name.replace("_", "-").replace(/([a-z\d])([A-Z])/g, "$1-$2");
				return selector.toLowerCase();
			} catch(e) {
				return void 0;
			}
		}
	});
}