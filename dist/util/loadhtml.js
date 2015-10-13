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
                            link.onload = function () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9hZGh0bWwudHMiXSwibmFtZXMiOlsibG9hZEh0bWwiLCJleHRyYWN0VGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7SUFBQTs7T0FFRztJQUNILGtCQUFpQyxFQUFTO1FBQ3hDQSxNQUFNQSxDQUFDQSxDQUFDQSxVQUFTQSxFQUFFQTtZQUVuQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtnQkFFMUMsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3BDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRXRCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFTLElBQUk7b0JBQzlDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRS9CLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0wsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07NEJBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUc7Z0NBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNkOzs7OztrQ0FLRTs0QkFDSCxDQUFDLENBQUE7d0JBQ0YsQ0FBQyxDQUFDLENBQUE7b0JBQ0gsQ0FBQztnQkFDRixDQUFDLENBQUMsQ0FBQztnQkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztxQkFDcEIsSUFBSSxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUEsSUFBSTt3QkFDN0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFBO2dCQUNILENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQSxTQUFTO29CQUNkLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTt3QkFDcEMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ2IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQTtZQUVILENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFBQTtJQUVQQSxDQUFDQTtJQWhERDs4QkFnREMsQ0FBQTtJQUVELHlCQUF5QixJQUFRLEVBQUUsRUFBVTtRQUM1Q0MsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsV0FBV0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDM0RBOzs7OztVQUtFQTtRQUVGQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0EiLCJmaWxlIjoidXRpbC9sb2FkaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcmV0dXJucyBQcm9taXNlIG9mIHRlbXBsYXRlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSHRtbChpZDpzdHJpbmcpOlByb21pc2U8YW55PiAge1xyXG5cdCByZXR1cm4gKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIFxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHNlbGVjdG9yID0gXCJsaW5rW3JlbD0naW1wb3J0J11cIjtcclxuXHRcdFx0dmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRcdHZhciB0ZW1wbGF0ZSA9IHZvaWQgMDtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBwcm9taXNlcyA9IFtdLm1hcC5jYWxsKGxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XHJcblx0XHRcdFx0aWYoISFsaW5rLmltcG9ydCkge1xyXG5cdFx0XHRcdFx0IHJldHVybiBQcm9taXNlLnJlc29sdmUobGluayk7XHJcblx0XHRcdFx0XHQgLy9yZXR1cm4gZXh0cmFjdFRlbXBsYXRlKGxpbmssIGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsaW5rLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGxpbmspO1xyXG5cdFx0XHRcdFx0XHRcdC8qXHJcblx0XHRcdFx0XHRcdFx0ZXh0cmFjdFRlbXBsYXRlKGxpbmssIGlkKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKHRlbXBsYXRlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUodGVtcGxhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0Ki9cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcblx0XHRcdC50aGVuKGxpbmtzID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gW10ubWFwLmNhbGwobGlua3MsIGxpbmsgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGV4dHJhY3RUZW1wbGF0ZShsaW5rLCBpZCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4odGVtcGxhdGVzID0+IHtcclxuXHRcdFx0XHR0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMuZmlsdGVyKHRlbXBsYXRlID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB0ZW1wbGF0ZSAhPSB2b2lkIDA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlc1swXTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4odGVtcGxhdGUgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUodGVtcGxhdGUpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdH0pXHJcblx0fSkoaWQpXHJcblx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RUZW1wbGF0ZShsaW5rOmFueSwgaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblx0dmFyIHRlbXBsYXRlID0gbGluay5pbXBvcnQucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlI1wiICsgaWQpO1xyXG5cdC8qXHJcblx0aWYoISF0ZW1wbGF0ZSlcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGVtcGxhdGUpXHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh2b2lkIDApO1xyXG5cdCovXHJcblx0XHJcblx0cmV0dXJuICEhdGVtcGxhdGUgPyB0ZW1wbGF0ZSA6IHZvaWQgMDtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==