export default function loadHtml(id:string):Promise<any>  {
	 return (function(id) {
            
		return new Promise(function(resolve, reject) {
			
			var selector = "link[rel='import']";
			var links = document.querySelectorAll(selector);
			var template = void 0;
			
			var promises = [].map.call(links, function(link) {
				if(!!link.import) {
					 return extractTemplate(link, id);
				}
				else {
					return new Promise((resolve, reject) => {
						link.onload = () => {
							extractTemplate(link, id)
							.then(template => {
								resolve(template);
							})
						}
					})
				}
			});
			
			Promise.all(promises)
			.then(templates => {
				return templates.filter(template => {
					return template != void 0;
				})[0]
			})
			.then(template => {
				resolve(template);
			})
			
		})
	})(id)
	
}

function extractTemplate(link:any, id: string): Promise<any> {
	var template = link.import.querySelector("template#" + id);
	if(!!template)
		return Promise.resolve(template)
	else
		return Promise.resolve(void 0);
}