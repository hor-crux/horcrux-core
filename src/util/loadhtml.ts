/**
 * @returns Promise of template
 */
export default function loadHtml(id:string):Promise<any>  {
	 return (function(id) {
            
		return new Promise(function(resolve, reject) {
			
			var template = void 0;
			
			getImports()
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

function getImports(): Promise<HTMLLinkElement[]> {
	var selector = "link[rel='import']";
	var links = document.querySelectorAll(selector);
	
	return Promise.all([].map.call(links, function(link) {
			if(!!link.import) {
				return Promise.resolve(link);
			}
			else {
				return new Promise((resolve, reject) => {
					let onload = (link.onload || function(){}).bind(link);
					link.onload = () => {
						onload();
						resolve(link);
					}
				})
			}
		})
	);
}

function extractTemplate(link:any, id: string): Promise<any> {
	var template = link.import.querySelector("template#" + id);
	/*
	if(!!template)
		return Promise.resolve(template)
	else
		return Promise.resolve(void 0);
	*/
	
	return !!template ? template : void 0;
}