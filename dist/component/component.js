define(["require", "exports", "../util/loadhtml", "./register/register"], function (require, exports, loadhtml_1, register_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = function (target) {
        loadhtml_1.default(target.selector)
            .then(function (template) {
            return register_1.default(name, target, template);
        });
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUtBO3NCQUFlLFVBQUMsTUFBTTtRQUVyQixrQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDeEIsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNiLE1BQU0sQ0FBQyxrQkFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L2NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkaHRtbCBmcm9tIFwiLi4vdXRpbC9sb2FkaHRtbFwiXHJcbmltcG9ydCByZWdpc3RlciBmcm9tIFwiLi9yZWdpc3Rlci9yZWdpc3RlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudE9wdGlvbnMsIElDb21wb25lbnRPcHRpb25zfSBmcm9tIFwiLi9vcHRpb25zXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAodGFyZ2V0KSA9PiB7XHJcblx0XHRcclxuXHRsb2FkaHRtbCh0YXJnZXQuc2VsZWN0b3IpXHJcblx0LnRoZW4odGVtcGxhdGUgPT4ge1xyXG5cdFx0cmV0dXJuIHJlZ2lzdGVyKG5hbWUsIHRhcmdldCwgdGVtcGxhdGUpXHJcblx0fSk7XHJcbn1cclxuIFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=