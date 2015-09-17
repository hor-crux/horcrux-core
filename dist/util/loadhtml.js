define(["require", "exports"], function (require, exports) {
    function loadHtml(id) {
        return (function (id) {
            return new Promise(function (resolve, reject) {
                var selector = "link[rel='import']";
                var links = document.querySelectorAll(selector);
                var template = void 0;
                [].forEach.call(links, function (link) {
                    template = link.import.querySelector("template#" + id);
                    if (!!template)
                        return resolve(template);
                });
                if (!template)
                    resolve(void 0);
            });
        })(id);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = loadHtml;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9hZGh0bWwudHMiXSwibmFtZXMiOlsibG9hZEh0bWwiXSwibWFwcGluZ3MiOiI7SUFBQSxrQkFBaUMsRUFBUztRQUN4Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBU0EsRUFBRUE7WUFFbkIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07Z0JBRTFDLElBQUksUUFBUSxHQUFHLG9CQUFvQixDQUFDO2dCQUNwQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBUyxJQUFJO29CQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDO29CQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFBQTtJQUVQQSxDQUFDQTtJQWxCRDs4QkFrQkMsQ0FBQSIsImZpbGUiOiJ1dGlsL2xvYWRodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEh0bWwoaWQ6c3RyaW5nKTpQcm9taXNlPGFueT4gIHtcclxuXHQgcmV0dXJuIChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICBcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBzZWxlY3RvciA9IFwibGlua1tyZWw9J2ltcG9ydCddXCI7XHJcblx0XHRcdHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0XHR2YXIgdGVtcGxhdGUgPSB2b2lkIDA7XHJcblx0XHRcdFtdLmZvckVhY2guY2FsbChsaW5rcywgZnVuY3Rpb24obGluaykge1xyXG5cdFx0XHRcdHRlbXBsYXRlID0gbGluay5pbXBvcnQucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlI1wiICsgaWQpO1xyXG5cdFx0XHRcdGlmKCEhdGVtcGxhdGUpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh0ZW1wbGF0ZSkgXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZighdGVtcGxhdGUpXHJcblx0XHRcdFx0cmVzb2x2ZSh2b2lkIDApO1xyXG5cdFx0fSlcclxuXHR9KShpZClcclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==