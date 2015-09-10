declare module "horcrux-core" {
/* class CustomElement extends HTMLElement {	createShadowRoot(): DocumentFragment;	host: HTMLElement;}*/
export {	Attribute,	CustomAttribute,	Attributes,	ComponentDecorator as Component,	IComponentOptions,	ComponentOptions,	registerComponent,	bindDom as bind,	Model,	Dom,	ObjectAndValue,	dependency,	inject,	Dispatcher,	DispatcherAction,	Store,	handle}
 class System {	static import(name:string): Promise<any>;}
 let CE: () => void;
 class CustomElement extends HTMLElement {
    createShadowRoot(): DocumentFragment;
    host: HTMLElement;
}
 let Attributes: {
    [key: string]: typeof CustomAttribute;
};
 function Attribute(target: any): void;
 class CustomAttribute {
    protected node: Node;
    protected attr: {
        name: string;
        value: string;
    };
    protected model: any;
    protected path: string;
    constructor(node?: Node, attr?: {
        name: string;
        value: string;
    }, model?: any, path?: string);
    newJSValue(value: any): void;
    newDOMValue(value: any): void;
}
function loadHtml(name: string): Promise<any>;
 type Dom = Node | NodeList | Array<Node>;
 type ObjectAndValue = {
    object: any;
    value: any;
};
class Model {
    protected objects: Array<any>;
    constructor(objects: Array<any>);
    get(path: string): ObjectAndValue;
    findObject(path: string): any;
    static has(object: any, path: string): any;
    static get(object: any, path: string): any;
}
 function visit(node: Dom, cb: (node: Node) => void): void;
function bindAttribute(node: Node, attr: Attr, model: Model): void;
function bindNode(node: Node, model: Model): void;
 let regex: RegExp;
 function bindDom(dom: Dom, models: Array<any>): void;
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
 function createdCallback(template: any): void;
function register(name: string, target: any, template: any): void;
interface IComponentOptions {
    namespace?: string;
    template?: boolean;
}
 class ComponentOptions implements IComponentOptions {
    private opt;
    constructor(opt: IComponentOptions);
    private setValue(key, defaultValue);
}
 function ComponentDecorator(opt: IComponentOptions): ClassDecorator;
/**
 * Creates an instance of this class via new() and registeres this instance for dependency injection.
 */
 function register(target: any): void;
 function inject(clazz: any): PropertyDecorator;
class CallbackHolder {
    protected prefix: string;
    protected lastID: number;
    protected callbacks: {
        [key: string]: Function;
    };
    register(callback: Function, self?: any): string;
    unregister(id: any): void;
}
 class Store<T> extends CallbackHolder {
    protected dispatcher: Dispatcher;
    static handlerMap: any;
    id: string;
    protected data: T;
    constructor();
    register(callback: (data: T) => void, self?: any): string;
    protected handle(action: DispatcherAction): void;
    protected changed(): void;
}
 function handle(type: string): MethodDecorator;
}