declare module "horcrux-core" {
export {	Attribute,	CustomAttribute,	Attributes,	ComponentDecorator as Component}
function loadHtml(name: string): Promise<any>;
 function visit(node: Node, cb: (node: Node) => void): void;
 function visit(node: NodeList, cb: (node: Node) => void): void;
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
function bindNode(node: Node, model: any): void;
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
 let CE: () => void;
 let PropertyDecorator: PropertyDecorator;
}