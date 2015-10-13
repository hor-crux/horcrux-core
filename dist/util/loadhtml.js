define(["require", "exports"], function (require, exports) {
    /**
     * @returns Promise of template
     */
    function loadHtml(id) {
        return (function (id) {
            return new Promise(function (resolve, reject) {
                var template = void 0;
                getImports()
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
    function getImports() {
        var selector = "link[rel='import']";
        var links = document.querySelectorAll(selector);
        return Promise.all([].map.call(links, function (link) {
            if (!!link.import) {
                return Promise.resolve(link);
            }
            else {
                return new Promise(function (resolve, reject) {
                    var onload = (link.onload || function () { }).bind(link);
                    link.onload = function () {
                        onload();
                        resolve(link);
                    };
                });
            }
        }));
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9hZGh0bWwudHMiXSwibmFtZXMiOlsibG9hZEh0bWwiLCJnZXRJbXBvcnRzIiwiZXh0cmFjdFRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiO0lBQUE7O09BRUc7SUFDSCxrQkFBaUMsRUFBUztRQUN4Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBU0EsRUFBRUE7WUFFbkIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07Z0JBRTFDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUV0QixVQUFVLEVBQUU7cUJBQ1gsSUFBSSxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUEsSUFBSTt3QkFDN0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFBO2dCQUNILENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQSxTQUFTO29CQUNkLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTt3QkFDcEMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ2IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQTtZQUVILENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFBQTtJQUVQQSxDQUFDQTtJQTFCRDs4QkEwQkMsQ0FBQTtJQUVEO1FBQ0NDLElBQUlBLFFBQVFBLEdBQUdBLG9CQUFvQkEsQ0FBQ0E7UUFDcENBLElBQUlBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFFaERBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFVBQVNBLElBQUlBO1lBQ2pELEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNsQyxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksY0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUc7d0JBQ2IsTUFBTSxFQUFFLENBQUM7d0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQTtnQkFDRixDQUFDLENBQUMsQ0FBQTtZQUNILENBQUM7UUFDRixDQUFDLENBQUNBLENBQ0ZBLENBQUNBO0lBQ0hBLENBQUNBO0lBRUQseUJBQXlCLElBQVEsRUFBRSxFQUFVO1FBQzVDQyxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxXQUFXQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMzREE7Ozs7O1VBS0VBO1FBRUZBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3ZDQSxDQUFDQSIsImZpbGUiOiJ1dGlsL2xvYWRodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEByZXR1cm5zIFByb21pc2Ugb2YgdGVtcGxhdGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIdG1sKGlkOnN0cmluZyk6UHJvbWlzZTxhbnk+ICB7XHJcblx0IHJldHVybiAoZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgdGVtcGxhdGUgPSB2b2lkIDA7XHJcblx0XHRcdFxyXG5cdFx0XHRnZXRJbXBvcnRzKClcclxuXHRcdFx0LnRoZW4obGlua3MgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBbXS5tYXAuY2FsbChsaW5rcywgbGluayA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZXh0cmFjdFRlbXBsYXRlKGxpbmssIGlkKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbih0ZW1wbGF0ZXMgPT4ge1xyXG5cdFx0XHRcdHRlbXBsYXRlcyA9IHRlbXBsYXRlcy5maWx0ZXIodGVtcGxhdGUgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlICE9IHZvaWQgMDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGVzWzBdO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbih0ZW1wbGF0ZSA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0fSlcclxuXHR9KShpZClcclxuXHRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW1wb3J0cygpOiBQcm9taXNlPEhUTUxMaW5rRWxlbWVudFtdPiB7XHJcblx0dmFyIHNlbGVjdG9yID0gXCJsaW5rW3JlbD0naW1wb3J0J11cIjtcclxuXHR2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcclxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW10ubWFwLmNhbGwobGlua3MsIGZ1bmN0aW9uKGxpbmspIHtcclxuXHRcdFx0aWYoISFsaW5rLmltcG9ydCkge1xyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUobGluayk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGxldCBvbmxvYWQgPSAobGluay5vbmxvYWQgfHwgZnVuY3Rpb24oKXt9KS5iaW5kKGxpbmspO1xyXG5cdFx0XHRcdFx0bGluay5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdG9ubG9hZCgpO1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKGxpbmspO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdFRlbXBsYXRlKGxpbms6YW55LCBpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuXHR2YXIgdGVtcGxhdGUgPSBsaW5rLmltcG9ydC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGUjXCIgKyBpZCk7XHJcblx0LypcclxuXHRpZighIXRlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0ZW1wbGF0ZSlcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZvaWQgMCk7XHJcblx0Ki9cclxuXHRcclxuXHRyZXR1cm4gISF0ZW1wbGF0ZSA/IHRlbXBsYXRlIDogdm9pZCAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9