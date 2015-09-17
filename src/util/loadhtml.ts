export default function loadHtml(id:string):Promise<any>  {
	 return (function(id) {
            
		return new Promise(function(resolve, reject) {
			
			var selector = "link[rel='import']";
			var links = document.querySelectorAll(selector);
			var template = void 0;
			[].forEach.call(links, function(link) {
				template = link.import.querySelector("template#" + id);
				if(!!template)
					return resolve(template) 
			});
			if(!template)
				resolve(void 0);
		})
	})(id)
	
}