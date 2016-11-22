"use strict";System.register(["jsx!pages/sinapPage","../sinap/widget","jsx!elements/fieldBlock","jsx!elements/keyboard","jsx!elements/numpad","jsx!elements/infoBubble"],function(_export,_context){function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Page,Widget,FieldBlock,Keyboard,Numpad,InfoBubble,_createClass,_get,InputField;return{setters:[function(_jsxPagesSinapPage){Page=_jsxPagesSinapPage["default"]},function(_sinapWidget){Widget=_sinapWidget["default"]},function(_jsxElementsFieldBlock){FieldBlock=_jsxElementsFieldBlock["default"]},function(_jsxElementsKeyboard){Keyboard=_jsxElementsKeyboard["default"]},function(_jsxElementsNumpad){Numpad=_jsxElementsNumpad["default"]},function(_jsxElementsInfoBubble){InfoBubble=_jsxElementsInfoBubble["default"]}],execute:function(){_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},InputField=function(_Page){function InputField(){return _classCallCheck(this,InputField),_possibleConstructorReturn(this,Object.getPrototypeOf(InputField).apply(this,arguments))}return _inherits(InputField,_Page),_createClass(InputField,[{key:"onShow",value:function(){var _this2=this;return _get(Object.getPrototypeOf(InputField.prototype),"onShow",this).call(this).then(function(){return _this2.updateNavigation({nextButton:{enabled:!1}})}).then(function(){return _this2.update()})}},{key:"update",value:function(){this.inputFields=this.fields.reduce(function(o,_ref){var name=_ref.name,innerValue=_ref.innerValue,title=_ref.title,widget=_ref.widget,sideInfo=_ref.sideInfo;if(!widget)return o;var mask=widget.mask,keyboard=widget.keyboard,autocomplete=widget.autocomplete,layout=widget.layout;if(layout!==Widget.LAYOUT.TEXT)throw new qiwi.errors.UserError(qiwi.i18n("pages.common.error"),"Incorrect widget on inputField",qiwi.errors.ACTIONS.EXIT);return o[name]={text:innerValue,sideInfo:keyboard===Widget.KEYBOARD.NUMERIC&&sideInfo,title:title,mask:mask,keyboard:keyboard,autocomplete:autocomplete},o},{}),_get(Object.getPrototypeOf(InputField.prototype),"update",this).call(this)}},{key:"createClass",value:function(){return _get(Object.getPrototypeOf(InputField.prototype),"createClass",this).call(this,{fieldFunctions:{addSymbol:function(){},removeAll:function(){}},getDefaultProps:function(){return{onUpdate:function(){},fields:{}}},getInitialState:function(){return{shift:!0,numeric:!1,keyboard:Widget.KEYBOARD.QWERTY}},onUpdate:function onUpdate(current){var _props=this.props,fields=_props.fields,onUpdate=_props.onUpdate;current||(current=qiwi.utils.findKey(fields,function(field){return!field.text})||Object.keys(fields)[0]);var _fields$current=fields[current],text=_fields$current.text,mask=_fields$current.mask,keyboard=_fields$current.keyboard,numeric=this.state.numeric;if(mask){var nextMask=mask.real[qiwi.utils.mask(text+"*",mask.inner).length-1];"d"===nextMask&&(numeric=!0),"w"===nextMask&&(numeric=!1)}this.setState({shift:!text||0===text.length,numeric:numeric,keyboard:keyboard}),onUpdate(_defineProperty({},current,text))},render:function(prepended,appended){var _this3=this,fields=this.props.fields,_state=this.state,keyboard=_state.keyboard,shift=_state.shift,numeric=_state.numeric,customKeyboards=[Widget.KEYBOARD.EMAIL],sideInfo=Object.values(fields).map(function(field){return field.sideInfo}).filter(function(a){return a}),fieldsElement=void 0,keyboardElement=void 0,infoBubbleElement=void 0;return Object.keys(fields).length&&(fieldsElement=React.createElement(FieldBlock,{fields:fields,onUpdate:this.onUpdate,fieldFunctions:this.fieldFunctions})),keyboardElement=keyboard===Widget.KEYBOARD.NUMERIC?React.createElement(Numpad,{onClick:function(code){return _this3.fieldFunctions.addSymbol(code)}}):React.createElement(Keyboard,{onClick:function(code){return _this3.fieldFunctions.addSymbol(code)},onEraseAll:this.fieldFunctions.removeAll,language:customKeyboards.includes(keyboard)?keyboard:void 0,shift:shift,numeric:numeric,controlOptions:customKeyboards.includes(keyboard)?{eraseDisabled:!0,spaceDisabled:!0,shiftDisabled:!0}:{}}),sideInfo.length>0&&(infoBubbleElement=React.createElement(InfoBubble,{text:sideInfo})),React.createElement("div",{className:"sinap-field input-field"},prepended(),fieldsElement,keyboardElement,infoBubbleElement,appended())}})}},{key:"props",get:function(){return Object.assign({},_get(Object.getPrototypeOf(InputField.prototype),"props",this),{fields:this.inputFields})}}]),InputField}(Page),_export("default",InputField)}}});