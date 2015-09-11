define(["require", "exports", "observejs"], function (require, exports) {
    if (typeof Object.observe !== "function") {
        setInterval(function () {
            Platform.performMicrotaskCheckpoint();
        });
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbHlmaWxsL29ic2VydmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUlBLEVBQUUsQ0FBQSxDQUFDLE9BQWEsTUFBTyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hELFdBQVcsQ0FBQztZQUNYLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyIsImZpbGUiOiJwb2x5ZmlsbC9vYnNlcnZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwib2JzZXJ2ZWpzXCJcclxuXHJcbmRlY2xhcmUgdmFyIFBsYXRmb3JtO1xyXG5cclxuaWYodHlwZW9mICg8YW55Pk9iamVjdCkub2JzZXJ2ZSAhPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0UGxhdGZvcm0ucGVyZm9ybU1pY3JvdGFza0NoZWNrcG9pbnQoKTtcclxuXHR9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9