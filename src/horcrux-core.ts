/// <reference path="../typings/tsd" />

//------- general import. Modules expose to the global object e.g. 'window'
import "./customelement"
import "observer"

//------- imports for export of modules main file
import {Attribute, CustomAttribute, Attributes} from "./attribute/attribute";
import ComponentDecorator from "./component/component"

export {
	Attribute,
	CustomAttribute,
	Attributes,
	ComponentDecorator as Component
}