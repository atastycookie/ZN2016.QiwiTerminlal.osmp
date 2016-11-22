"use strict";System.register(["jsx!pages/page","../sinap","../sinap/widget","stores/provider","stores/terminal","markdown","../cardReader","jsx!elements/pageHeader","jsx!elements/checkbox","jsx!elements/button"],function(_export,_context){function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Page,Sinap,Widget,Provider,Terminal,markdown,CardReader,PageHeader,Checkbox,Button,_createClass,_get,SinapPage;return{setters:[function(_jsxPagesPage){Page=_jsxPagesPage["default"]},function(_sinap){Sinap=_sinap["default"]},function(_sinapWidget){Widget=_sinapWidget["default"]},function(_storesProvider){Provider=_storesProvider["default"]},function(_storesTerminal){Terminal=_storesTerminal["default"]},function(_markdown){markdown=_markdown["default"]},function(_cardReader){CardReader=_cardReader["default"]},function(_jsxElementsPageHeader){PageHeader=_jsxElementsPageHeader["default"]},function(_jsxElementsCheckbox){Checkbox=_jsxElementsCheckbox["default"]},function(_jsxElementsButton){Button=_jsxElementsButton["default"]}],execute:function(){_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},SinapPage=function(_Page){function SinapPage(){var _Object$getPrototypeO;_classCallCheck(this,SinapPage);for(var _len=arguments.length,args=Array(_len),_key=0;_len>_key;_key++)args[_key]=arguments[_key];var _this=_possibleConstructorReturn(this,(_Object$getPrototypeO=Object.getPrototypeOf(SinapPage)).call.apply(_Object$getPrototypeO,[this].concat(args)));return _this.onUpdateQueue={counter:0,queue:[]},_this}return _inherits(SinapPage,_Page),_createClass(SinapPage,[{key:"onShow",value:function(){var _this2=this;return _get(Object.getPrototypeOf(SinapPage.prototype),"onShow",this).call(this).then(function(){return Sinap.update()}).then(function(){if(!Sinap.currentPage)return _this2.performBackward(),Promise.reject();var _Sinap$currentPage=Sinap.currentPage,fields=_Sinap$currentPage.fields,title=_Sinap$currentPage.title;return _this2.page={fields:fields.filter(function(field){return field.widget}),title:title},_this2.title=null,_this2.name=_this2.page.fields.map(function(field){return field.name}).map(function(name){return name===Sinap.WELCOME_VALUE?"welcome":name}).join("&"),_this2.startReader()})}},{key:"update",value:function(){_get(Object.getPrototypeOf(SinapPage.prototype),"update",this).call(this),this.hidePreloader()}},{key:"validate",value:function(){return Promise.all(this.fields.map(function(field){return field.valid}))}},{key:"onUpdate",value:function(){var _this3=this,fields=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];qiwi.utils.each(fields,function(value,name){return Sinap.fieldNamed(name).value=value});var id=this.onUpdateQueue.counter++;return this.onUpdateQueue.queue.push(id),this.validate().surely(function(_ref){var successful=_ref.successful,index=_this3.onUpdateQueue.queue.indexOf(id);0>index||(_this3.onUpdateQueue.queue.splice(0,index+1),_this3.updateNavigation({nextButton:{enabled:successful}}))})}},{key:"startReader",value:function(){var _this4=this;this.readerField&&(CardReader.on(CardReader.EVENT.ABSTENCY,function(isAbsent){_this4.title=isAbsent?null:qiwi.i18n("pages.sinap.cardReader.title",{original:_this4.page.title}),_this4.update()}),CardReader.trigger(CardReader.EVENT.ABSTENCY,CardReader.isAbsent||void 0===CardReader.isAbsent),CardReader.on(CardReader.EVENT.CARD_MOVEMENT,function(){_this4._timer.reset(),_this4.hidePopup()}),CardReader.on(CardReader.EVENT.CARD_DATA_ERROR,function(_ref2){var message=_ref2.message;_this4.showReaderPopup(qiwi.i18n("pages.sinap.cardReader.inserted",{message:message}))}),CardReader.on(CardReader.EVENT.CARD_DATA,function(_ref3){var number=_ref3.number;_this4.showReaderPopup(qiwi.i18n("pages.sinap.cardReader.success"));var mask=_this4.readerField.widget.mask.inner.replace(/[^\*\d]/g,"");if(/\d/.test(mask))for(var index=0;index<mask.length;index++){var realChar=number[index],maskChar=mask[index];if("*"!==maskChar){if(maskChar!==realChar)return _this4.showReaderPopup(qiwi.i18n("pages.sinap.cardReader.fail"));number=number.slice(0,index)+"*"+number.slice(index+1,number.length)}}_this4.onUpdate(_defineProperty({},_this4.readerField.name,number.replace(/\*/g,""))),_this4.update()}),CardReader.start())}},{key:"showReaderPopup",value:function(){var message=arguments.length<=0||void 0===arguments[0]?qiwi.i18n("pages.sinap.cardReader.popupMessage"):arguments[0],popupOn=void 0;return CardReader.cardInserted?(popupOn=!0,this.showPopup({type:"attention",message:message,okHandler:function(){return popupOn=!1}}),new Promise(function(resolve,reject){CardReader.on(CardReader.EVENT.CARD_MOVEMENT,function(cardInserted){cardInserted||(popupOn?resolve():reject())})})):Promise.resolve(!0)}},{key:"checkReader",value:function(){return this.readerField?this.showReaderPopup():Promise.resolve()}},{key:"performExit",value:function(){var _this5=this;return this.checkReader().then(function(){return _get(Object.getPrototypeOf(SinapPage.prototype),"performExit",_this5).call(_this5)})}},{key:"performForward",value:function(){var _this6=this;return this.checkReader().then(function(){return _get(Object.getPrototypeOf(SinapPage.prototype),"performForward",_this6).call(_this6)})}},{key:"performBackward",value:function(){var _this7=this;return this.checkReader().then(function(){return _get(Object.getPrototypeOf(SinapPage.prototype),"performBackward",_this7).call(_this7)})}},{key:"onHide",value:function(){this.readerField&&CardReader.stop(),_get(Object.getPrototypeOf(SinapPage.prototype),"onHide",this).call(this)}},{key:"exit",value:function(){this.readerField&&CardReader.stop(),_get(Object.getPrototypeOf(SinapPage.prototype),"exit",this).call(this)}},{key:"disabledForward",value:function(){var _this8=this;return this.validate()["catch"](function(message){return _this8.showPopup({type:"error",message:message||qiwi.i18n("sinap.errors.incorrect_input")})}).then(function(){return _get(Object.getPrototypeOf(SinapPage.prototype),"disabledForward",_this8).call(_this8)})}},{key:"createClass",value:function(childClass){var childRender=childClass.render;return _get(Object.getPrototypeOf(SinapPage.prototype),"createClass",this).call(this,Object.assign({},childClass,{render:function(){var _props=this.props,title=_props.title,subtitle=_props.subtitle,switches=_props.switches,update=_props.update,showPopup=_props.showPopup,infos=_props.infos,providerName=_props.providerName;return childRender.call(this,function(){return React.createElement(PageHeader,{provider:providerName,title:title,subtitle:subtitle})},function(){var customInfo=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return switches.map(function(_ref4){var title=_ref4.title,value=_ref4.value,widget=_ref4.widget,name=_ref4.name;return React.createElement(Checkbox,{text:title,enabled:value===widget.onValue,onClick:function(){return update(_defineProperty({},name,widget.toggle(value)))}})}).concat([React.createElement(Button,{className:"info-button "+(0!==infos.length||customInfo?"":"hidden"),onClick:function(){return showPopup({type:"info",title:qiwi.i18n("pages.sinap.information.title"),message:React.createElement("div",{className:"markdown-info-popup",dangerouslySetInnerHTML:{__html:(customInfo?customInfo+"</br>":"")+markdown.toHTML(infos.join("\n"))}})})}})])})}}))}},{key:"fields",get:function(){return this.page.fields.filter(function(field){return field.widget.layout!==Widget.LAYOUT.SWITCH})}},{key:"switches",get:function(){return this.page.fields.filter(function(field){return field.widget.layout===Widget.LAYOUT.SWITCH})}},{key:"readerField",get:function(){return this.page.fields.find(function(field){return field.widget.features.some(function(feature){return feature===Widget.FEATURE.CARD})})}},{key:"props",get:function(){var _this9=this;return{title:this.page.fields.some(function(field){return field.widget&&field.widget.choices&&field.widget.choices.some(function(_ref5){var value=_ref5.value;return value===Sinap.WELCOME_VALUE})})?null:this.title||this.page.title,subtitle:this.page.fields.some(function(field){return field.name===Sinap.FIELDS.ACCOUNT})?qiwi.i18n("pages.sinap.account.subtitle",{sum:Math.min(Terminal.max,Provider.terminalLimit.max)}):null,switches:this.switches,infos:this.page.fields.map(function(field){return field.info}).filter(function(a){return a}),showPopup:function(config){return _this9.showPopup(config)},update:function(fields){return _this9.onUpdate(fields)},providerName:Provider.fullName}}}]),SinapPage}(Page),_export("default",SinapPage)}}});