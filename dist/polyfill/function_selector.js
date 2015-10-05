if (typeof Function.prototype.selector === "undefined") {
    Object.defineProperty(Function.prototype, "selector", {
        get: function () {
            var r = /function\s+(.+)\(/;
            try {
                var name_1 = r.exec(this.prototype.constructor.toString())[1];
                var selector = name_1.replace("_", "-").replace(/([a-z\d])([A-Z])/g, "$1-$2");
                return selector.toLowerCase();
            }
            catch (e) {
                return void 0;
            }
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbHlmaWxsL2Z1bmN0aW9uX3NlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQSxDQUFDLE9BQWEsUUFBUSxDQUFDLFNBQVUsQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFO1FBQ3JELEdBQUcsRUFBRTtZQUNKLElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDO1lBQzVCLElBQUksQ0FBQztnQkFDSixJQUFJLE1BQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELElBQUksUUFBUSxHQUFHLE1BQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDNUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixDQUFFO1lBQUEsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDO1FBQ0YsQ0FBQztLQUNELENBQUMsQ0FBQztBQUNKLENBQUMiLCJmaWxlIjoicG9seWZpbGwvZnVuY3Rpb25fc2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZih0eXBlb2YgKDxhbnk+RnVuY3Rpb24ucHJvdG90eXBlKS5zZWxlY3RvciA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCBcInNlbGVjdG9yXCIsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHIgPSAvZnVuY3Rpb25cXHMrKC4rKVxcKC87XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgbmFtZSA9IHIuZXhlYyh0aGlzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpKVsxXTtcblx0XHRcdFx0dmFyIHNlbGVjdG9yID0gbmFtZS5yZXBsYWNlKFwiX1wiLCBcIi1cIikucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZywgXCIkMS0kMlwiKTtcblx0XHRcdFx0cmV0dXJuIHNlbGVjdG9yLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
