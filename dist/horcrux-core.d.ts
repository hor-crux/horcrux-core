declare module "horcrux-core" {
 class System {	static import(name:string): Promise<any>;}
export {	Attribute,	CustomAttribute,	Component,	IComponentOptions,	ComponentOptions,	register,	bindDom,	Model,	Dom,	ObjectAndValue}
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
function Component(opt: IComponentOptions): ClassDecorator;
}