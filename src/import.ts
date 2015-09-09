import Component from "./component/component"

@Component({
	namespace: "ho",
	template: false
})
class Import extends CustomElement {
	
	createdCallback() {
		let src = super.getAttribute("from") || super.innerHTML;
		System.import(src);
	}
	
	attachedCallback() {
		super.remove();
	}
}