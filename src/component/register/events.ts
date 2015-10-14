import {Event} from "horcrux-event";
import {CustomElement} from "../customelement";

class ComponentCreatedEvent extends Event<CustomElement> {}
class ComponentReadyEvent extends Event<CustomElement> {}
class ComponentCanBindEvent extends Event<any[]> {}

export {ComponentCreatedEvent, ComponentReadyEvent, ComponentCanBindEvent}