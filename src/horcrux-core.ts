/// <reference path="../typings/tsd" />

//------- general import. Modules expose to the global object e.g. 'window'
import "./polyfill/all"
import "observejs"

//------- imports for export of modules main file
import {Attribute, CustomAttribute} from "./attribute/attribute"
import {CustomElement} from "./component/customelement"
import Component from "./component/component"
import {IComponentOptions, ComponentOptions} from "./component/options"
import created from "./component/decorator/created"
import attached from "./component/decorator/attached"
import detached from "./component/decorator/detached"
import attributeChanged from "./component/decorator/attributechanged"
import register from "./component/register/register"
import {bindDom} from "./bind/bind"
import Model from "./bind/model"
import {Dom, ObjectAndValue} from "./util/types"

export {
	Attribute,
	CustomAttribute,
	CustomElement,
	Component,
	IComponentOptions,
	ComponentOptions,
	created, attached, detached, attributeChanged,
	register,
	bindDom,
	Model,
	Dom,
	ObjectAndValue
}