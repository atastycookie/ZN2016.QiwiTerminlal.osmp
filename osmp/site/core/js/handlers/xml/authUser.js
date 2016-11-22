"use strict";System.register(["handlers/xml/baseXml"],function(_export,_context){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var BaseXml,_createClass,_get,AuthUser;return{setters:[function(_handlersXmlBaseXml){BaseXml=_handlersXmlBaseXml["default"]}],execute:function(){_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},AuthUser=function(_BaseXml){function AuthUser(){return _classCallCheck(this,AuthUser),_possibleConstructorReturn(this,Object.getPrototypeOf(AuthUser).apply(this,arguments))}return _inherits(AuthUser,_BaseXml),_createClass(AuthUser,[{key:"parse",value:function(xml){_get(Object.getPrototypeOf(AuthUser.prototype),"parse",this).call(this,xml);var resultCodes=this.filterData("/response/balances/balance"),actual=resultCodes.iterateNext();for(this.result.balances=[];actual;)this.result.balances.push({currency:actual.attributes.code.textContent,sum:actual.textContent}),actual=resultCodes.iterateNext();return this.result.ussdEnabled="1"==this.getData("/response/lk-status").textContent.substr(2,1),this.result}}]),AuthUser}(BaseXml),_export("default",new AuthUser)}}});