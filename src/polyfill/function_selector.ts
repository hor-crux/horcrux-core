if(typeof (<any>Function.prototype).selector === "undefined") {
	Object.defineProperty(Function.prototype, "selector", {
		get: function() {
			var r = /function\s+(.+)\(/;
			try {
				let name = r.exec(this.prototype.constructor.toString())[1];
				let selector = name.replace("_", "-").replace(/([a-z])(A-Z)/g, function(group) {return group[1] + "-" + group[2]});
				return selector.toLowerCase();
			} catch(e) {
				return void 0;
			}
		}
	});
}