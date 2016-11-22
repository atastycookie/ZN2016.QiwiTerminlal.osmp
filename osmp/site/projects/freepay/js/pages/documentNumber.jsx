"use strict";System.register(["jsx!pages/page","payment","model/freepay"],function(_export,_context){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Page,Payment,Model,_slicedToArray,_createClass,_get,_class;return{setters:[function(_jsxPagesPage){Page=_jsxPagesPage["default"]},function(_payment){Payment=_payment["default"]},function(_modelFreepay){Model=_modelFreepay["default"]}],execute:function(){_slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i["return"]&&_i["return"]()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_class=function(_Page){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,Object.getPrototypeOf(_class).call(this))}return _inherits(_class,_Page),_createClass(_class,[{key:"onShow",value:function(){_get(Object.getPrototypeOf(_class.prototype),"onShow",this).call(this),this.setLogo(Payment.state.logo),this.updateNavigation({nextButton:{enabled:!1}}),this.update()}},{key:"onUpdate",value:function(_ref){var number=_ref.number,valid=_ref.valid;Model.user.document={value:number,type:Model.documentType.id,name:Model.documentType.nameExtra,"static":Model.documentType.extras},this.updateNavigation({nextButton:{enabled:valid}})}},{key:"createClass",value:function(){var _this2=this;return this.loadElements(["animatedTextField","field","numpad","keyboard","button","pageHeader"]).then(function(_ref2){var _ref3=_slicedToArray(_ref2,6),AnimatedTextField=_ref3[0],Field=_ref3[1],Numpad=_ref3[2],Keyboard=_ref3[3],PageHeader=(_ref3[4],_ref3[5]);return _get(Object.getPrototypeOf(_class.prototype),"createClass",_this2).call(_this2,{componentWillMount:function(){var state={number:this.props.savedNumber.toString(),valid:this.props.field.validator.validate(this.props.savedNumber.toString())};this.setState(state),this.props.onUpdate(state)},shouldComponentUpdate:function(props,state){return state.number===this.state.number?!1:(this.props.onUpdate(state),!0)},removeSymbol:function(){var newValue=this.state.number.slice(0,-1);this.setState({number:newValue,valid:this.props.field.validator.validate(newValue)})},removeAll:function(){var newValue="";this.setState({number:newValue,valid:this.props.field.validator.validate(newValue)})},addSymbol:function(value){if(this.state.number.length<this.props.field.maxLength){var field=this.props.field,number=this.state.number+value;this.setState({number:number,valid:field.validator.validate(number)})}},getInitialState:function(){return{number:""}},getDefaultProps:function(){return{savedNumber:"",field:{}}},render:function(){var _this3=this;return React.createElement("div",{className:"document-number-page"},React.createElement(PageHeader,{provider:this.props.providerName,title:this.props.title,subtitle:qiwi.i18n("documentNumberPage.subtitle")}),this.props.field.mask?React.createElement(AnimatedTextField,{onEraseClick:function(){return _this3.removeSymbol()},text:this.state.number,mask:this.props.field.mask,width:Math.min(100*this.props.field.maxLength,1e3),eraseWidth:"133",className:"textfield-temporary"}):React.createElement(Field,{onEraseClick:function(){return _this3.removeSymbol()},text:this.state.number,width:Math.min(100*this.props.field.maxLength,1e3),eraseWidth:"133",className:"textfield-temporary"}),this.props.isNumpad?React.createElement(Numpad,{onClick:function(value){return _this3.addSymbol(value.toString())}}):React.createElement(Keyboard,{onClick:function(value){return _this3.addSymbol(value.toString())},onEraseAll:this.removeAll,controlOptions:{shiftDisabled:!1,languageDisabled:!1},showOptions:{alwaysCaps:!0},shift:this.state.shift,numeric:!0}))}})})}},{key:"props",get:function(){return{savedNumber:Model.user.document&&Model.user.document.type==Model.documentType.id?Model.user.document.value:"",title:Model.documentType.prompt,isNumpad:Model.documentType.isNumpad,field:{mask:Model.documentType.mask,maxLength:Model.documentType.maxLength,validator:Model.documentType.validator},providerName:Payment.state.provider.fullName}}}]),_class}(Page),_export("default",_class)}}});