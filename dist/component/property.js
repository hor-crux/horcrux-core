define(["require", "exports"], function (require, exports) {
    function Property(target, key) {
        target.properties = target.properties || [];
        target.properties.push(key);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Property;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9wcm9wZXJ0eS50cyJdLCJuYW1lcyI6WyJQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtJQUFBLGtCQUFpQyxNQUFVLEVBQUUsR0FBVTtRQUN0REEsTUFBTUEsQ0FBQ0EsVUFBVUEsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDNUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQzdCQSxDQUFDQTtJQUhEOzhCQUdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L3Byb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvcGVydHkodGFyZ2V0OmFueSwga2V5OnN0cmluZyk6IHZvaWQge1xyXG5cdHRhcmdldC5wcm9wZXJ0aWVzID0gdGFyZ2V0LnByb3BlcnRpZXMgfHwgW107XHJcblx0dGFyZ2V0LnByb3BlcnRpZXMucHVzaChrZXkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9