import Component from "./component/component"

@Component({
	namespace: "ho",
	template: false
})
export default class Import extends CustomElement {
	
	createdCallback() {
		let src = this.getAttribute("from") || this.innerHTML;
		System.import(src);
	}
	
	attachedCallback() {
		this.remove();
	}
}