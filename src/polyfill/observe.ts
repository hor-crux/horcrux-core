import "observejs"

declare var Platform;

if(typeof (<any>Object).observe !== "function") {
	setInterval(() => {
		Platform.performMicrotaskCheckpoint();
	},1)
}