define(["require", "exports", 'observejs'], function (require, exports, observejs_1) {
    var watch = function (property, args) {
        return function (target, key) {
            target.onCreated = target.onCreated || [];
            target.onCreated.push(function (self) {
                new observejs_1.PathObserver(self, property)
                    .open(function (_) {
                    self[key].apply(self, args);
                });
            });
        };
    };
    exports.watch = watch;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC93YXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBR0EsSUFBSSxLQUFLLEdBQUcsVUFBQyxRQUFlLEVBQUUsSUFBVztRQUN4QyxNQUFNLENBQUMsVUFBQyxNQUFVLEVBQUUsR0FBVTtZQUM3QixNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDMUIsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7cUJBQy9CLElBQUksQ0FBQyxVQUFBLENBQUM7b0JBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLENBQUE7SUFDRixDQUFDO0lBRU8sYUFBSyxTQUZaO0lBRWEiLCJmaWxlIjoiY29tcG9uZW50L3dhdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQYXRoT2JzZXJ2ZXJ9IGZyb20gJ29ic2VydmVqcydcclxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCdcclxuXHJcbmxldCB3YXRjaCA9IChwcm9wZXJ0eTpzdHJpbmcsIGFyZ3M/OmFueVtdKTogTWV0aG9kRGVjb3JhdG9yID0+IHtcclxuXHRyZXR1cm4gKHRhcmdldDphbnksIGtleTpzdHJpbmcpOiB2b2lkID0+IHtcclxuXHRcdHRhcmdldC5vbkNyZWF0ZWQgPSB0YXJnZXQub25DcmVhdGVkIHx8IFtdO1xyXG5cdFx0dGFyZ2V0Lm9uQ3JlYXRlZC5wdXNoKChzZWxmKSA9PiB7XHJcblx0XHRcdG5ldyBQYXRoT2JzZXJ2ZXIoc2VsZiwgcHJvcGVydHkpXHJcblx0XHRcdC5vcGVuKF8gPT4ge1xyXG5cdFx0XHRcdHNlbGZba2V5XS5hcHBseShzZWxmLCBhcmdzKTtcclxuXHRcdFx0fSlcclxuXHRcdH0pIFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHt3YXRjaH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=