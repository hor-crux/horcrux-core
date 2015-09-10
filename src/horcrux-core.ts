/// <reference path="../typings/tsd" />

//------- general import. Modules expose to the global object e.g. 'window'
import "./component/customelement"
import "observejs"

//------- imports for export of modules main file
import {Attribute, CustomAttribute, Attributes} from "./attribute/attribute";
import ComponentDecorator from "./component/component"
import {IComponentOptions, ComponentOptions} from "./component/options"
import registerComponent from "./component/register/register"
import {bindDom} from "./bind/bind"
import Model from "./bind/model"
import {Dom, ObjectAndValue} from "./util/types"
import {register as dependency, inject} from "./dependencyinjection/di"
import {Dispatcher, DispatcherAction} from "./flux/dispatcher/dispatcher"
import {Store, handle} from "./flux/store/store"

export {
	Attribute,
	CustomAttribute,
	Attributes,
	ComponentDecorator as Component,
	IComponentOptions,
	ComponentOptions,
	registerComponent,
	bindDom as bind,
	Model,
	Dom,
	ObjectAndValue,
	dependency,
	inject,
	Dispatcher,
	DispatcherAction,
	Store,
	handle
}