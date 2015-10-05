define(["require", "exports"], function (require, exports) {
    function Property(target, key) {
        target.prototype.properties = target.prototype.properties || [];
        target.prototype.properties.push(key);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Property;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9wcm9wZXJ0eS50cyJdLCJuYW1lcyI6WyJQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtJQUFBLGtCQUFpQyxNQUFVLEVBQUUsR0FBVTtRQUN0REEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBVUEsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDaEVBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQUhEOzhCQUdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50L3Byb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvcGVydHkodGFyZ2V0OmFueSwga2V5OnN0cmluZyk6IHZvaWQge1xuXHR0YXJnZXQucHJvdG90eXBlLnByb3BlcnRpZXMgPSB0YXJnZXQucHJvdG90eXBlLnByb3BlcnRpZXMgfHwgW107XG5cdHRhcmdldC5wcm90b3R5cGUucHJvcGVydGllcy5wdXNoKGtleSk7IFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
