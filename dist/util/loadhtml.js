define(["require", "exports"], function (require, exports) {
    /**
     * @returns Promise of template
     */
    function loadHtml(id) {
        return (function (id) {
            return new Promise(function (resolve, reject) {
                var selector = "link[rel='import']";
                var links = document.querySelectorAll(selector);
                var template = void 0;
                var promises = [].map.call(links, function (link) {
                    if (!!link.import) {
                        return Promise.resolve(link);
                    }
                    else {
                        return new Promise(function (resolve, reject) {
                            var onload = link.onload.bind(link);
                            link.onload = function () {
                                onload();
                                resolve(link);
                                /*
                                extractTemplate(link, id)
                                .then(template => {
                                    resolve(template);
                                })
                                */
                            };
                        });
                    }
                });
                Promise.all(promises)
                    .then(function (links) {
                    return [].map.call(links, function (link) {
                        return extractTemplate(link, id);
                    });
                })
                    .then(function (templates) {
                    templates = templates.filter(function (template) {
                        return template != void 0;
                    });
                    return templates[0];
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
        /*
        if(!!template)
            return Promise.resolve(template)
        else
            return Promise.resolve(void 0);
        */
        return !!template ? template : void 0;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9hZGh0bWwudHMiXSwibmFtZXMiOlsibG9hZEh0bWwiLCJleHRyYWN0VGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7SUFBQTs7T0FFRztJQUNILGtCQUFpQyxFQUFTO1FBQ3hDQSxNQUFNQSxDQUFDQSxDQUFDQSxVQUFTQSxFQUFFQTtZQUVuQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtnQkFFMUMsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3BDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRXRCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFTLElBQUk7b0JBQzlDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRS9CLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0wsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07NEJBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHO2dDQUNiLE1BQU0sRUFBRSxDQUFDO2dDQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDZDs7Ozs7a0NBS0U7NEJBQ0gsQ0FBQyxDQUFBO3dCQUNGLENBQUMsQ0FBQyxDQUFBO29CQUNILENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUk7d0JBQzdCLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsQ0FBQTtnQkFDSCxDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUEsU0FBUztvQkFDZCxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7d0JBQ3BDLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUNiLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUE7WUFFSCxDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQUE7SUFFUEEsQ0FBQ0E7SUFsREQ7OEJBa0RDLENBQUE7SUFFRCx5QkFBeUIsSUFBUSxFQUFFLEVBQVU7UUFDNUNDLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLFdBQVdBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBO1FBQzNEQTs7Ozs7VUFLRUE7UUFFRkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBIiwiZmlsZSI6InV0aWwvbG9hZGh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHJldHVybnMgUHJvbWlzZSBvZiB0ZW1wbGF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEh0bWwoaWQ6c3RyaW5nKTpQcm9taXNlPGFueT4gIHtcclxuXHQgcmV0dXJuIChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICBcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBzZWxlY3RvciA9IFwibGlua1tyZWw9J2ltcG9ydCddXCI7XHJcblx0XHRcdHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0XHR2YXIgdGVtcGxhdGUgPSB2b2lkIDA7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcHJvbWlzZXMgPSBbXS5tYXAuY2FsbChsaW5rcywgZnVuY3Rpb24obGluaykge1xyXG5cdFx0XHRcdGlmKCEhbGluay5pbXBvcnQpIHtcclxuXHRcdFx0XHRcdCByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxpbmspO1xyXG5cdFx0XHRcdFx0IC8vcmV0dXJuIGV4dHJhY3RUZW1wbGF0ZShsaW5rLCBpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IG9ubG9hZCA9IGxpbmsub25sb2FkLmJpbmQobGluayk7XHJcblx0XHRcdFx0XHRcdGxpbmsub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9ubG9hZCgpO1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUobGluayk7XHJcblx0XHRcdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdFx0XHRleHRyYWN0VGVtcGxhdGUobGluaywgaWQpXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4odGVtcGxhdGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHRcdFx0LnRoZW4obGlua3MgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBbXS5tYXAuY2FsbChsaW5rcywgbGluayA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZXh0cmFjdFRlbXBsYXRlKGxpbmssIGlkKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbih0ZW1wbGF0ZXMgPT4ge1xyXG5cdFx0XHRcdHRlbXBsYXRlcyA9IHRlbXBsYXRlcy5maWx0ZXIodGVtcGxhdGUgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlICE9IHZvaWQgMDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGVzWzBdO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbih0ZW1wbGF0ZSA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0fSlcclxuXHR9KShpZClcclxuXHRcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdFRlbXBsYXRlKGxpbms6YW55LCBpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHR2YXIgdGVtcGxhdGUgPSBsaW5rLmltcG9ydC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGUjXCIgKyBpZCk7XHJcblx0LypcclxuXHRpZighIXRlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0ZW1wbGF0ZSlcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZvaWQgMCk7XHJcblx0Ki9cclxuXHRcclxuXHRyZXR1cm4gISF0ZW1wbGF0ZSA/IHRlbXBsYXRlIDogdm9pZCAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9