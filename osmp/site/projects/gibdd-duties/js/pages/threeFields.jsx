"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _slicedToArray=function(){function t(t,e){var i=[],r=!0,n=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);r=!0);}catch(l){n=!0,o=l}finally{try{!r&&a["return"]&&a["return"]()}finally{if(n)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),_get=function t(e,i,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,i,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)};define(["jsx!pages/page","validators","../model/gibddDuty","payment"],function(t,e,i,r){var n=function(t){function n(){_classCallCheck(this,n);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(n).call(this,"threeFields"));return t.submitted=[!1,!1,!1],t.fieldMap=[["surname","name","patronym"],["region","city","street"],["house_number","bldg","flat"]],t.fields={surname:{title:qiwi.i18n("user.surname"),validator:new e.LengthValidator(2,25),maxSymbols:25},name:{title:qiwi.i18n("user.name"),validator:new e.LengthValidator(2,25),maxSymbols:25},patronym:{title:qiwi.i18n("user.patronym"),validator:new e.LengthValidator(0,25),maxSymbols:25},region:{title:qiwi.i18n("user.region"),validator:new e.LengthValidator(2,60),maxSymbols:60},city:{title:qiwi.i18n("user.city"),validator:new e.LengthValidator(2,60),maxSymbols:60},street:{title:qiwi.i18n("user.street"),validator:new e.LengthValidator(2,60),maxSymbols:60},house_number:{title:qiwi.i18n("user.house"),isNumeric:!0,validator:new e.LengthValidator(1,7),maxSymbols:7},bldg:{title:qiwi.i18n("user.bldg"),isNumeric:!0,validator:new e.LengthValidator(0,7),maxSymbols:7},flat:{title:qiwi.i18n("user.flat"),isNumpad:!0,validator:new e.LengthValidator(0,4),maxSymbols:4}},t}return _inherits(n,t),_createClass(n,[{key:"performBackward",value:function(){var t=this;this.submitted=this.submitted.map(function(e,i){return i<t.stage-1}),_get(Object.getPrototypeOf(n.prototype),"performBackward",this).call(this)}},{key:"performForward",value:function(){this.submitted[this.stage]=!0,this.submitted.every(function(t){return t})&&(i.user=qiwi.utils.mapObject(this.fields,function(t,e){return t.text})),_get(Object.getPrototypeOf(n.prototype),"performForward",this).call(this)}},{key:"onShow",value:function(){var t=this;_get(Object.getPrototypeOf(n.prototype),"onShow",this).call(this),this.setLogo(r.state.logo),this.updateNavigation({nextButton:{visible:!0}}),this.submitted.every(function(t){return t})&&(this.submitted[this.submitted.length-1]=!1),this.showPreloader(),(this.fields.name.autocomplete&&this.fields.surname.autocomplete&&this.fields.patronym.autocomplete?Promise.resolve():qiwi.utils.require("text!../../res/names_first.txt","text!../../res/names_middle.txt","text!../../res/names_second.txt","autocomplete").then(function(e){var i=_slicedToArray(e,4),r=i[0],n=i[1],o=i[2],s=i[3],a=new RegExp("\r?\n");t.fields.name.autocomplete=new s(r.split(a)),t.fields.surname.autocomplete=new s(o.split(a)),t.fields.patronym.autocomplete=new s(n.split(a))},function(){throw new qiwi.errors.Warning("Ошибка загрузки саджестов")})).done(function(){t.hidePreloader(),t.update()})}},{key:"disabledForward",value:function(){var t=this;_get(Object.getPrototypeOf(n.prototype),"disabledForward",this).call(this),this.update({highlight:!0}),setTimeout(function(){return t.update({highlight:!1})})}},{key:"onUpdate",value:function(t){this.updateNavigation({nextButton:{enabled:0===t}})}},{key:"createClass",value:function(){var t=this;return this.loadElements(["fieldBlock","keyboard","numpad","pageHeader"]).then(function(e){var i=_slicedToArray(e,4),r=i[0],o=i[1],s=i[2],a=i[3];return _get(Object.getPrototypeOf(n.prototype),"createClass",t).call(t,{getDefaultProps:function(){return{onUpdate:function(){},fields:{}}},componentWillReceiveProps:function(t){t.highlight&&this.fieldFunctions.highlight(this.failFields)},getInitialState:function(){return{shift:!0,numeric:!1,numpad:!1}},onUpdate:function(t){var e=this;this.failFields=[],qiwi.utils.forEach(this.props.fields,function(t,i){e.props.fields[i].validator&&!e.props.fields[i].validator.validate(t.text)&&e.failFields.push(i)});var i=this.failFields[0]||qiwi.utils.findKey(this.props.fields,function(t){return!t.text})||Object.keys(this.props.fields)[0];i&&this.setState({shift:!this.props.fields[t||i].text||0===this.props.fields[t||i].text.length,numeric:!!this.props.fields[t||i].isNumeric,numpad:!!this.props.fields[t||i].isNumpad}),this.props.onUpdate(this.failFields.length)},fieldFunctions:{addSymbol:function(){},removeAll:function(){},highlight:function(){}},render:function(){var t=this;return React.createElement("div",{className:"three-fields"},React.createElement(a,{provider:this.props.providerName,title:qiwi.i18n("gibdd_duties.threeField.header."+this.props.stage)}),Object.keys(this.props.fields).length?React.createElement(r,{fields:this.props.fields,onUpdate:this.onUpdate,fieldFunctions:this.fieldFunctions}):null,this.state.numpad?React.createElement(s,{onClick:function(e){return t.fieldFunctions.addSymbol(e)}}):React.createElement(o,{onClick:function(e){return t.fieldFunctions.addSymbol(e)},onEraseAll:this.fieldFunctions.removeAll,controlOptions:{shiftDisabled:!0,languageDisabled:!0},showOptions:{alwaysCaps:!0},shift:this.state.shift,numeric:this.state.numeric}))}})})}},{key:"stage",get:function(){return this.submitted.indexOf(!1)}},{key:"state",get:function(){var t=this;return{fields:Object.keys(this.fields).filter(function(e){return-1!==t.fieldMap[t.stage].indexOf(e)}).reduce(function(e,i){return e[i]=t.fields[i],e[i].className="textfield-temporary",e},{}),stage:this.stage,providerName:r.state.provider.fullName}}}]),n}(t);return n});