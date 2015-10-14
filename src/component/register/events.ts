import {Event} from "horcrux-event";
import {CustomElement} from "../customelement";

class ComponentCreatedEvent extends Event<CustomElement> {}
class ComponentReadyEvent extends Event<CustomElement> {}

export {ComponentCreatedEvent, ComponentReadyEvent}