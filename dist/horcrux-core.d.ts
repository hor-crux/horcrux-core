declare module "horcrux-core" {
export {	Attribute,	CustomAttribute,	CustomElement,	Component,	IComponentOptions,	ComponentOptions,	ComponentRegistry,	ComponentCanBindEvent,	Binding, ModelBinding,	Property,	register,	ElementRegistered,	bindDom,	Model,	Dom,	ObjectAndValue}
 class System {	static import(name:string): Promise<any>;}
 type Dom = Node | NodeList | Array<Node>;
 type ObjectAndValue = {
    object: any;
    value: any;
};
class Model {
    protected _objects: Array<any>;
    constructor(objects: Array<any>);
    objects: Array<any>;
    get(path: string): ObjectAndValue;
    set(path: string, value: any): void;
    findObject(path: string): any;
    static has(object: any, path: string): boolean;
    static get(object: any, path: string): any;
    static set(object: any, path: string, value: any): void;
}
 function visit(node: Dom, cb: (node: Node) => boolean): void;
function bindAttribute(node: Node, attr: Attr, model: Model): void;
function bindNode(node: Node, model: Model): void;
 let regex: RegExp;
 function bindDom(dom: Dom, models: Array<any>): void;
 class Binding {
    protected other: Binding;
    protected changed: (value: any) => any;
    protected value: any;
    constructor(counterBinding?: Binding);
    setNewValue(value: any): void;
    onNewValue(callback: (value: any) => any, callNow?: boolean): void;
    getvalue(): any;
    getCounterBinding(): Binding;
}
 class ModelBinding extends Binding {
    constructor(attribute: Attr, model: Model);
}
 let Attributes: {
    [key: string]: typeof CustomAttribute;
};
 function Attribute(target: any): void;
 class CustomAttribute {
    protected node: Node;
    protected attr: Attr;
    protected model: Model;
    protected binding: Binding;
    constructor(node: Node, attr: Attr, model: Model);
    protected createBinding(): void;
    protected init(): any;
}
 class CustomElement extends HTMLElement {
    host: HTMLElement;
    shadowRoot: DocumentFragment;
    properties: Array<string>;
    lazy: boolean;
    eventBus: EventBus;
    parentComponent: CustomElement;
    ancestors: Array<CustomElement>;
    createShadowRoot(): DocumentFragment;
    canActivate(): Promise<any>;
    canDeactivate(): Promise<any>;
    created(): void;
    attached(): void;
    detached(): void;
    onCreated: Array<(self: CustomElement) => any>;
    onAttached: Array<(self: CustomElement) => any>;
    onDetached: Array<(self: CustomElement) => any>;
}
 function CustomElementDummy(): void;
/**
 * @returns Promise of template
 */
function loadHtml(id: string): Promise<any>;
 let ComponentRegistry: {
    [selector: string]: any;
};
 class ComponentCreatedEvent extends Event<CustomElement> {
}
 class ComponentReadyEvent extends Event<CustomElement> {
}
 class ComponentCanBindEvent extends Event<void> {
}
/**
 * Creates a new HTMLElement.prototype, assigns all properties of 'new target()' to it and returns it;
 */
 function createPrototype(target: any): any;
/**
 * Adds a function named 'key' to 'target', which is a function that calls 'cb' with given 'args'
 * and then calls the previous 'target[key]' if it was a function with 'args'.
 */
 function assignCallback(target: any, key: string, cb: Function, args?: any[]): void;
/**
 * Default 'createdCallback' for a Customelement. Appends the 'template' content to shadowroot, if !!template
 */
 function createdCallback(template: any, target: any): void;
 function attachedCallback(): void;
 function detachedCallback(): void;
 function register(name: string, target: any, template: any): void;
 class ElementRegistered extends Event<string> {
}
interface IComponentOptions {
    namespace?: string;
    template?: boolean;
}
 class ComponentOptions implements IComponentOptions {
    private opt;
    constructor(opt: IComponentOptions);
    private setValue(key, defaultValue);
}
function Component(target: any): void;
function Property(target: any, key: string): void;
}