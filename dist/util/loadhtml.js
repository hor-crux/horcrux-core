define(["require", "exports"], function (require, exports) {
    function loadHtml(id) {
        return (function (id) {
            return new Promise(function (resolve, reject) {
                var selector = "link[rel='import']";
                var links = document.querySelectorAll(selector);
                var template = void 0;
                var promises = [].map.call(links, function (link) {
                    if (!!link.import) {
                        return extractTemplate(link, id);
                    }
                    else {
                        return new Promise(function (resolve, reject) {
                            link.onload = function () {
                                extractTemplate(link, id)
                                    .then(function (template) {
                                    resolve(template);
                                });
                            };
                        });
                    }
                });
                Promise.all(promises)
                    .then(function (templates) {
                    return templates.filter(function (template) {
                        return template != void 0;
                    })[0];
                })
                    .then(function (template) {
                    resolve(template);
                });
            });
        })(id);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = loadHtml;
    function extractTemplate(link, id) {
        var template = link.import.querySelector("template#" + id);
        if (!!template)
            return Promise.resolve(template);
        else
            return Promise.resolve(void 0);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9hZGh0bWwudHMiXSwibmFtZXMiOlsibG9hZEh0bWwiLCJleHRyYWN0VGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7SUFBQSxrQkFBaUMsRUFBUztRQUN4Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBU0EsRUFBRUE7WUFFbkIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07Z0JBRTFDLElBQUksUUFBUSxHQUFHLG9CQUFvQixDQUFDO2dCQUNwQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUV0QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBUyxJQUFJO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNuQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNMLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNOzRCQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHO2dDQUNiLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO3FDQUN4QixJQUFJLENBQUMsVUFBQSxRQUFRO29DQUNiLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDbkIsQ0FBQyxDQUFDLENBQUE7NEJBQ0gsQ0FBQyxDQUFBO3dCQUNGLENBQUMsQ0FBQyxDQUFBO29CQUNILENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxVQUFBLFNBQVM7b0JBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO3dCQUMvQixNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDYixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO1lBRUgsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUFBO0lBRVBBLENBQUNBO0lBdENEOzhCQXNDQyxDQUFBO0lBRUQseUJBQXlCLElBQVEsRUFBRSxFQUFVO1FBQzVDQyxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxXQUFXQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMzREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDYkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQUE7UUFDakNBLElBQUlBO1lBQ0hBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO0lBQ2pDQSxDQUFDQSIsImZpbGUiOiJ1dGlsL2xvYWRodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEh0bWwoaWQ6c3RyaW5nKTpQcm9taXNlPGFueT4gIHtcblx0IHJldHVybiAoZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIFxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFxuXHRcdFx0dmFyIHNlbGVjdG9yID0gXCJsaW5rW3JlbD0naW1wb3J0J11cIjtcblx0XHRcdHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdFx0dmFyIHRlbXBsYXRlID0gdm9pZCAwO1xuXHRcdFx0XG5cdFx0XHR2YXIgcHJvbWlzZXMgPSBbXS5tYXAuY2FsbChsaW5rcywgZnVuY3Rpb24obGluaykge1xuXHRcdFx0XHRpZighIWxpbmsuaW1wb3J0KSB7XG5cdFx0XHRcdFx0IHJldHVybiBleHRyYWN0VGVtcGxhdGUobGluaywgaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRsaW5rLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0ZXh0cmFjdFRlbXBsYXRlKGxpbmssIGlkKVxuXHRcdFx0XHRcdFx0XHQudGhlbih0ZW1wbGF0ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0ZW1wbGF0ZSk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4odGVtcGxhdGVzID0+IHtcblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlcy5maWx0ZXIodGVtcGxhdGUgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0ZW1wbGF0ZSAhPSB2b2lkIDA7XG5cdFx0XHRcdH0pWzBdXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4odGVtcGxhdGUgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHRlbXBsYXRlKTtcblx0XHRcdH0pXG5cdFx0XHRcblx0XHR9KVxuXHR9KShpZClcblx0XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUZW1wbGF0ZShsaW5rOmFueSwgaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG5cdHZhciB0ZW1wbGF0ZSA9IGxpbmsuaW1wb3J0LnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZSNcIiArIGlkKTtcblx0aWYoISF0ZW1wbGF0ZSlcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRlbXBsYXRlKVxuXHRlbHNlXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh2b2lkIDApO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
