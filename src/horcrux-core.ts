/// <reference path="../typings/tsd" />

//------- general import. Modules expose to the global object e.g. 'window'
import "./polyfill/all"
import "observejs"

//------- imports for export of modules main file
import {Attribute, CustomAttribute} from "./attribute/attribute";
import Component from "./component/component"
import {IComponentOptions, ComponentOptions} from "./component/options"
import register from "./component/register/register"
import {bindDom} from "./bind/bind"
import Model from "./bind/model"
import {Dom, ObjectAndValue} from "./util/types"

export {
	Attribute,
	CustomAttribute,
	Component,
	IComponentOptions,
	ComponentOptions,
	register,
	bindDom,
	Model,
	Dom,
	ObjectAndValue
}