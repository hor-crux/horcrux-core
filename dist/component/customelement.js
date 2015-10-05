var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var CustomElement = (function (_super) {
        __extends(CustomElement, _super);
        function CustomElement() {
            _super.apply(this, arguments);
        }
        CustomElement.prototype.createShadowRoot = function () { return void 0; };
        ;
        CustomElement.prototype.canActivate = function () { return void 0; };
        ;
        CustomElement.prototype.canDeactivate = function () { return void 0; };
        ;
        CustomElement.prototype.created = function () { };
        CustomElement.prototype.attached = function () { };
        CustomElement.prototype.detached = function () { };
        return CustomElement;
    })(HTMLElement);
    exports.CustomElement = CustomElement;
    function CustomElementDummy() { }
    exports.CustomElementDummy = CustomElementDummy;
    CustomElementDummy.prototype.canActivate = function () {
        return Promise.resolve('');
    };
    CustomElementDummy.prototype.canDeactivate = function () {
        return Promise.resolve('');
    };
    CustomElementDummy.prototype.created = function () { };
    CustomElementDummy.prototype.attached = function () { };
    CustomElementDummy.prototype.detached = function () { };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jdXN0b21lbGVtZW50LnRzIl0sIm5hbWVzIjpbIkN1c3RvbUVsZW1lbnQiLCJDdXN0b21FbGVtZW50LmNvbnN0cnVjdG9yIiwiQ3VzdG9tRWxlbWVudC5jcmVhdGVTaGFkb3dSb290IiwiQ3VzdG9tRWxlbWVudC5jYW5BY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY2FuRGVhY3RpdmF0ZSIsIkN1c3RvbUVsZW1lbnQuY3JlYXRlZCIsIkN1c3RvbUVsZW1lbnQuYXR0YWNoZWQiLCJDdXN0b21FbGVtZW50LmRldGFjaGVkIiwiQ3VzdG9tRWxlbWVudER1bW15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTtRQUE0QkEsaUNBQVdBO1FBQXZDQTtZQUE0QkMsOEJBQVdBO1FBVXZDQSxDQUFDQTtRQU5BRCx3Q0FBZ0JBLEdBQWhCQSxjQUFzQ0UsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0E7O1FBQ3BERixtQ0FBV0EsR0FBWEEsY0FBNkJHLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBOztRQUMzQ0gscUNBQWFBLEdBQWJBLGNBQStCSSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQTs7UUFDN0NKLCtCQUFPQSxHQUFQQSxjQUFpQkssQ0FBQ0E7UUFDbEJMLGdDQUFRQSxHQUFSQSxjQUFrQk0sQ0FBQ0E7UUFDbkJOLGdDQUFRQSxHQUFSQSxjQUFrQk8sQ0FBQ0E7UUFDcEJQLG9CQUFDQTtJQUFEQSxDQVZBLEFBVUNBLEVBVjJCLFdBQVcsRUFVdEM7SUFpQk8scUJBQWEsaUJBakJwQjtJQUVELGdDQUErQlEsQ0FBQ0E7SUFlVCwwQkFBa0Isc0JBZlQ7SUFDaEMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFDRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsY0FBWSxDQUFDLENBQUE7SUFFcEQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxjQUFZLENBQUMsQ0FBQTtJQUVyRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO0lBR1giLCJmaWxlIjoiY29tcG9uZW50L2N1c3RvbWVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRob3N0OiBIVE1MRWxlbWVudDtcblx0c2hhZG93Um9vdDogRG9jdW1lbnRGcmFnbWVudDtcblx0cHJvcGVydGllczogQXJyYXk8c3RyaW5nPjtcblx0Y3JlYXRlU2hhZG93Um9vdCgpOiBEb2N1bWVudEZyYWdtZW50IHtyZXR1cm4gdm9pZCAwfTtcblx0Y2FuQWN0aXZhdGUoKTogUHJvbWlzZTxhbnk+IHtyZXR1cm4gdm9pZCAwfTtcblx0Y2FuRGVhY3RpdmF0ZSgpOiBQcm9taXNlPGFueT4ge3JldHVybiB2b2lkIDB9O1xuXHRjcmVhdGVkKCk6IHZvaWQge31cblx0YXR0YWNoZWQoKTogdm9pZCB7fVxuXHRkZXRhY2hlZCgpOiB2b2lkIHt9XHRcbn1cblxuZnVuY3Rpb24gQ3VzdG9tRWxlbWVudER1bW15KCkge31cbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY2FuQWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XG59XG5DdXN0b21FbGVtZW50RHVtbXkucHJvdG90eXBlLmNhbkRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyk7XG59XG5cbkN1c3RvbUVsZW1lbnREdW1teS5wcm90b3R5cGUuY3JlYXRlZCA9IGZ1bmN0aW9uKCkge31cblxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5hdHRhY2hlZCA9IGZ1bmN0aW9uKCkge31cblxuQ3VzdG9tRWxlbWVudER1bW15LnByb3RvdHlwZS5kZXRhY2hlZCA9IGZ1bmN0aW9uKCkge31cblxuXG5leHBvcnQge0N1c3RvbUVsZW1lbnQsIEN1c3RvbUVsZW1lbnREdW1teX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
