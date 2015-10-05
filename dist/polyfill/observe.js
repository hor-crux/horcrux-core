define(["require", "exports", "observejs"], function (require, exports) {
    if (typeof Object.observe !== "function") {
        setInterval(function () {
            Platform.performMicrotaskCheckpoint();
        }, 1);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbHlmaWxsL29ic2VydmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUlBLEVBQUUsQ0FBQSxDQUFDLE9BQWEsTUFBTyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hELFdBQVcsQ0FBQztZQUNYLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUMiLCJmaWxlIjoicG9seWZpbGwvb2JzZXJ2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm9ic2VydmVqc1wiXG5cbmRlY2xhcmUgdmFyIFBsYXRmb3JtO1xuXG5pZih0eXBlb2YgKDxhbnk+T2JqZWN0KS5vYnNlcnZlICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFBsYXRmb3JtLnBlcmZvcm1NaWNyb3Rhc2tDaGVja3BvaW50KCk7XG5cdH0sMSlcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
