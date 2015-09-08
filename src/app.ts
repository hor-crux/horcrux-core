import Component from "./component/component"


@Component({
	namespace: "my",
})
class App extends CustomElement {
	
	foo = "hello";
	
	
	attachedCallback() {
		document.body.removeAttribute("unresolved");
	}
	
	alert(): void {
		window.alert(this.foo);
	}
	
}
