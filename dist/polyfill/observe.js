define(["require", "exports", "observejs"], function (require, exports) {
    if (typeof Object.observe !== "function") {
        setInterval(function () {
            Platform.performMicrotaskCheckpoint();
        }, 1);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbHlmaWxsL29ic2VydmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUlBLEVBQUUsQ0FBQSxDQUFDLE9BQWEsTUFBTyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hELFdBQVcsQ0FBQztZQUNYLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUMiLCJmaWxlIjoicG9seWZpbGwvb2JzZXJ2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm9ic2VydmVqc1wiXHJcblxyXG5kZWNsYXJlIHZhciBQbGF0Zm9ybTtcclxuXHJcbmlmKHR5cGVvZiAoPGFueT5PYmplY3QpLm9ic2VydmUgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFBsYXRmb3JtLnBlcmZvcm1NaWNyb3Rhc2tDaGVja3BvaW50KCk7XHJcblx0fSwxKVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9