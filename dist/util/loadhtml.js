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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9hZGh0bWwudHMiXSwibmFtZXMiOlsibG9hZEh0bWwiLCJleHRyYWN0VGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7SUFBQSxrQkFBaUMsRUFBUztRQUN4Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBU0EsRUFBRUE7WUFFbkIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07Z0JBRTFDLElBQUksUUFBUSxHQUFHLG9CQUFvQixDQUFDO2dCQUNwQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUV0QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBUyxJQUFJO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNuQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNMLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNOzRCQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHO2dDQUNiLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO3FDQUN4QixJQUFJLENBQUMsVUFBQSxRQUFRO29DQUNiLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDbkIsQ0FBQyxDQUFDLENBQUE7NEJBQ0gsQ0FBQyxDQUFBO3dCQUNGLENBQUMsQ0FBQyxDQUFBO29CQUNILENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxVQUFBLFNBQVM7b0JBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO3dCQUMvQixNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDYixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO1lBRUgsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUFBO0lBRVBBLENBQUNBO0lBdENEOzhCQXNDQyxDQUFBO0lBRUQseUJBQXlCLElBQVEsRUFBRSxFQUFVO1FBQzVDQyxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxXQUFXQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMzREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDYkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQUE7UUFDakNBLElBQUlBO1lBQ0hBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO0lBQ2pDQSxDQUFDQSIsImZpbGUiOiJ1dGlsL2xvYWRodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEh0bWwoaWQ6c3RyaW5nKTpQcm9taXNlPGFueT4gIHtcclxuXHQgcmV0dXJuIChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICBcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBzZWxlY3RvciA9IFwibGlua1tyZWw9J2ltcG9ydCddXCI7XHJcblx0XHRcdHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0XHR2YXIgdGVtcGxhdGUgPSB2b2lkIDA7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcHJvbWlzZXMgPSBbXS5tYXAuY2FsbChsaW5rcywgZnVuY3Rpb24obGluaykge1xyXG5cdFx0XHRcdGlmKCEhbGluay5pbXBvcnQpIHtcclxuXHRcdFx0XHRcdCByZXR1cm4gZXh0cmFjdFRlbXBsYXRlKGxpbmssIGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsaW5rLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRleHRyYWN0VGVtcGxhdGUobGluaywgaWQpXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4odGVtcGxhdGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcblx0XHRcdC50aGVuKHRlbXBsYXRlcyA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlcy5maWx0ZXIodGVtcGxhdGUgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlICE9IHZvaWQgMDtcclxuXHRcdFx0XHR9KVswXVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbih0ZW1wbGF0ZSA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0fSlcclxuXHR9KShpZClcclxuXHRcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdFRlbXBsYXRlKGxpbms6YW55LCBpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHR2YXIgdGVtcGxhdGUgPSBsaW5rLmltcG9ydC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGUjXCIgKyBpZCk7XHJcblx0aWYoISF0ZW1wbGF0ZSlcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGVtcGxhdGUpXHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh2b2lkIDApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9