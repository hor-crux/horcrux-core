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
import {ComponentRegistry} from "./component/componentregistry"

import {ComponentCanBindEvent} from "./component/register/events"

import {Binding, ModelBinding} from "./bind/binding";

import {Property, IProperty} from "./component/property"

import {register, ElementRegistered} from "./component/register/register"
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
	ComponentRegistry,
	ComponentCanBindEvent,
	Binding, ModelBinding,
	Property, IProperty,
	register,
	ElementRegistered,
	bindDom,
	Model,
	Dom,
	ObjectAndValue
}