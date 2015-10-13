/**
 * @returns Promise of template
 */
export default function loadHtml(id:string):Promise<any>  {
	 return (function(id) {
            
		return new Promise(function(resolve, reject) {
			
			var selector = "link[rel='import']";
			var links = document.querySelectorAll(selector);
			var template = void 0;
			
			var promises = [].map.call(links, function(link) {
				if(!!link.import) {
					 return Promise.resolve(link);
					 //return extractTemplate(link, id);
				}
				else {
					return new Promise((resolve, reject) => {
						link.onload = () => {
							resolve(link);
							/*
							extractTemplate(link, id)
							.then(template => {
								resolve(template);
							})
							*/
						}
					})
				}
			});
			
			Promise.all(promises)
			.then(links => {
				return [].map.call(links, link => {
					return extractTemplate(link, id);
				})
			})
			.then(templates => {
				templates = templates.filter(template => {
					return template != void 0;
				});
				return templates[0];
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