define(["require", "exports"], function (require, exports) {
    var Property = function (target, key) {
        function decorator(target, key) {
            target.properties = target.properties || [];
            target.properties.push(key);
        }
        if (!!key && typeof key === "string")
            decorator(target, key);
        else {
            var type = target;
            return function (target, key) {
                Property.types[target.selector] = Property.types[target.selector] || {};
                Property.types[target.selector][key] = type;
                decorator(target, key);
            };
        }
    };
    exports.Property = Property;
    Property.types = {};
    Property.setProperty = function (object, key, value) {
        var type = Property.types[object.selector] && Property.types[object.selector][key];
        if (type === Number)
            object[key] = Number.parseFloat(value);
        else if (type === Boolean)
            object[key] = !!value;
        else
            object[key] = value;
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9wcm9wZXJ0eS50cyJdLCJuYW1lcyI6WyJkZWNvcmF0b3IiXSwibWFwcGluZ3MiOiI7SUFNQSxJQUFJLFFBQVEsR0FBYyxVQUFDLE1BQVUsRUFBRSxHQUFVO1FBQ2hELG1CQUFtQixNQUFNLEVBQUUsR0FBRztZQUM3QkEsTUFBTUEsQ0FBQ0EsVUFBVUEsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDNUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUM7WUFDTCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUM7WUFDbEIsTUFBTSxDQUFDLFVBQUMsTUFBVSxFQUFFLEdBQVU7Z0JBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEUsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztRQUNILENBQUM7SUFDRixDQUFDO0lBY08sZ0JBQVEsWUFkZjtJQUVELFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRXBCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBQyxNQUFVLEVBQUUsR0FBVSxFQUFFLEtBQVM7UUFDeEQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkYsRUFBRSxDQUFBLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztZQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJO1lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDLENBQUE7SUFFMkIiLCJmaWxlIjoiY29tcG9uZW50L3Byb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElQcm9wZXJ0eSB7XHJcblx0KHRhcmdldDphbnksIGtleTpzdHJpbmcpOiB2b2lkIHwgUHJvcGVydHlEZWNvcmF0b3I7XHJcblx0dHlwZXM/OiB7W3NlbGVjdG9yOnN0cmluZ106e1trZXk6c3RyaW5nXTphbnl9fTtcclxuXHRzZXRQcm9wZXJ0eT86IChvYmplY3Q6YW55LCBrZXk6c3RyaW5nLCB2YWx1ZTphbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmxldCBQcm9wZXJ0eTogSVByb3BlcnR5ID0gKHRhcmdldDphbnksIGtleTpzdHJpbmcpID0+IHtcclxuXHRmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBrZXkpIHtcclxuXHRcdHRhcmdldC5wcm9wZXJ0aWVzID0gdGFyZ2V0LnByb3BlcnRpZXMgfHwgW107XHJcblx0XHR0YXJnZXQucHJvcGVydGllcy5wdXNoKGtleSk7XHJcblx0fVxyXG5cdFxyXG5cdGlmKCEha2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpXHJcblx0XHRkZWNvcmF0b3IodGFyZ2V0LCBrZXkpO1xyXG5cdGVsc2Uge1xyXG5cdFx0bGV0IHR5cGUgPSB0YXJnZXQ7XHRcdFxyXG5cdFx0cmV0dXJuICh0YXJnZXQ6YW55LCBrZXk6c3RyaW5nKSA9PiB7XHJcblx0XHRcdFByb3BlcnR5LnR5cGVzW3RhcmdldC5zZWxlY3Rvcl0gPSBQcm9wZXJ0eS50eXBlc1t0YXJnZXQuc2VsZWN0b3JdIHx8IHt9O1xyXG5cdFx0XHRQcm9wZXJ0eS50eXBlc1t0YXJnZXQuc2VsZWN0b3JdW2tleV0gPSB0eXBlO1xyXG5cdFx0XHRkZWNvcmF0b3IodGFyZ2V0LCBrZXkpO1xyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcblByb3BlcnR5LnR5cGVzID0ge307XHJcblxyXG5Qcm9wZXJ0eS5zZXRQcm9wZXJ0eSA9IChvYmplY3Q6YW55LCBrZXk6c3RyaW5nLCB2YWx1ZTphbnkpID0+IHtcclxuXHRsZXQgdHlwZSA9IFByb3BlcnR5LnR5cGVzW29iamVjdC5zZWxlY3Rvcl0gJiYgUHJvcGVydHkudHlwZXNbb2JqZWN0LnNlbGVjdG9yXVtrZXldO1xyXG5cdGlmKHR5cGUgPT09IE51bWJlcilcclxuXHRcdG9iamVjdFtrZXldID0gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpO1xyXG5cdGVsc2UgaWYodHlwZSA9PT0gQm9vbGVhbilcclxuXHRcdG9iamVjdFtrZXldID0gISF2YWx1ZTtcclxuXHRlbHNlXHJcblx0XHRvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQge1Byb3BlcnR5LCBJUHJvcGVydHl9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9