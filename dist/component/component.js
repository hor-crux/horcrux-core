define(["require", "exports", "../util/loadhtml", "./register/register", "./options"], function (require, exports, loadhtml_1, register_1, options_1) {
    function Component(opt) {
        opt = new options_1.ComponentOptions(opt);
        return function (target) {
            var html = opt.template ? target.name : void 0;
            ;
            var name = ((opt.namespace ? opt.namespace + "-" : "") + target.name).toLowerCase();
            loadhtml_1.default(html)
                .then(function (dom) {
                return register_1.default(name, target, dom.template);
            });
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Component;
    ;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0lBSUEsbUJBQWtDLEdBQXNCO1FBQ3ZEQSxHQUFHQSxHQUFHQSxJQUFJQSwwQkFBZ0JBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBRWhDQSxNQUFNQSxDQUFDQSxVQUFDQSxNQUFNQTtZQUViQSxJQUFJQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUFBQSxDQUFDQTtZQUNoREEsSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsR0FBR0EsR0FBR0EsQ0FBQ0EsU0FBU0EsR0FBR0EsR0FBR0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFFcEZBLGtCQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTtpQkFDYkEsSUFBSUEsQ0FBQ0EsVUFBQUEsR0FBR0E7Z0JBQ1JBLE1BQU1BLENBQUNBLGtCQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFBQTtZQUM1Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0EsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFiRDsrQkFhQyxDQUFBO0lBQUEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnQvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRodG1sIGZyb20gXCIuLi91dGlsL2xvYWRodG1sXCJcclxuaW1wb3J0IHJlZ2lzdGVyIGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50T3B0aW9ucywgSUNvbXBvbmVudE9wdGlvbnN9IGZyb20gXCIuL29wdGlvbnNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KG9wdDogSUNvbXBvbmVudE9wdGlvbnMpOiBDbGFzc0RlY29yYXRvciB7XHJcblx0b3B0ID0gbmV3IENvbXBvbmVudE9wdGlvbnMob3B0KTtcclxuXHRcclxuXHRyZXR1cm4gKHRhcmdldCkgPT4ge1xyXG5cdFx0XHJcblx0XHRsZXQgaHRtbCA9IG9wdC50ZW1wbGF0ZSA/IHRhcmdldC5uYW1lIDogdm9pZCAwOztcclxuXHRcdGxldCBuYW1lID0gKChvcHQubmFtZXNwYWNlID8gb3B0Lm5hbWVzcGFjZSArIFwiLVwiIDogXCJcIikgKyB0YXJnZXQubmFtZSkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFxyXG5cdFx0bG9hZGh0bWwoaHRtbClcclxuXHRcdC50aGVuKGRvbSA9PiB7XHJcblx0XHRcdHJldHVybiByZWdpc3RlcihuYW1lLCB0YXJnZXQsIGRvbS50ZW1wbGF0ZSlcclxuXHRcdH0pO1xyXG5cdH1cclxufTsgXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==