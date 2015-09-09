export default function loadHtml(name:string):Promise<any>  {
	if(name) {
		let html = name + ".html!"
		return System.import(html);
	}
	else {
		return Promise.resolve("");
	}
	
}