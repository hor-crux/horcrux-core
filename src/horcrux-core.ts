/// <reference path="../typings/tsd" />

//------- general import. Modules expose to the global object e.g. 'window'
import "./polyfill/all"
import "observejs"
import "html"

//------- imports for export of modules main file
import {Attribute, CustomAttribute} from "./attribute/attribute"
import {CustomElementDummy as CustomElement} from "./component/customelement"

import Component from "./component/component"
import {IComponentOptions, ComponentOptions} from "./component/options"

import {Binding, ModelBinding} from "./bind/binding";

import Property from "./component/property"

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
	Binding, ModelBinding,
	Property,
	register,
	bindDom,
	Model,
	Dom,
	ObjectAndValue
}