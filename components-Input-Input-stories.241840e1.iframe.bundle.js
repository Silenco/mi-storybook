"use strict";(self.webpackChunkmy_react_library=self.webpackChunkmy_react_library||[]).push([[115],{"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Input/Input.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* Input.module.css */\n.tBFgCCoM_qT4FHpAjOKA {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.sK7xnZYBWygpe8GFCfTn {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 200px;\n}\n\n.HdMMwpEkFu9qoryR4cfY {\n  background-color: #f8f8f8; /* Estilo específico para inputs de contraseña */\n}\n\n.iI3xkxnGo9AhV5sxvEm2 {\n  position: absolute;\n  right: 10px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  color: #422291;\n}\n\n/* Estilos adicionales para el contenedor cuando es password */\n.Z71qvmK3rjhep4tUmOME {\n  background-color: #f0f0f0;  /* Fondo diferente cuando es password */\n}\n","",{version:3,sources:["webpack://./src/components/Input/Input.module.css"],names:[],mappings:"AAAA,qBAAqB;AACrB;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB,EAAE,gDAAgD;AAC7E;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA,8DAA8D;AAC9D;EACE,yBAAyB,GAAG,uCAAuC;AACrE",sourcesContent:["/* Input.module.css */\r\n.input-container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.input-field {\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 200px;\r\n}\r\n\r\n.input-password {\r\n  background-color: #f8f8f8; /* Estilo específico para inputs de contraseña */\r\n}\r\n\r\n.toggle-password {\r\n  position: absolute;\r\n  right: 10px;\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n  color: #422291;\r\n}\r\n\r\n/* Estilos adicionales para el contenedor cuando es password */\r\n.password-container {\r\n  background-color: #f0f0f0;  /* Fondo diferente cuando es password */\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"input-container":"tBFgCCoM_qT4FHpAjOKA","input-field":"sK7xnZYBWygpe8GFCfTn","input-password":"HdMMwpEkFu9qoryR4cfY","toggle-password":"iI3xkxnGo9AhV5sxvEm2","password-container":"Z71qvmK3rjhep4tUmOME"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Input/Input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PasswordInput:()=>PasswordInput,TextInput:()=>TextInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Input/Input.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input",component:_Input__WEBPACK_IMPORTED_MODULE_1__.p,parameters:{layout:"centered"},tags:["autodocs"]},Template=args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__.p,{...args,value,onChange:setValue})},TextInput=Template.bind({});TextInput.args={type:"text",placeholder:"Enter text"};const PasswordInput=Template.bind({});PasswordInput.args={type:"password",placeholder:"Enter password",isPassword:!0};const __namedExportsOrder=["TextInput","PasswordInput"];TextInput.parameters={...TextInput.parameters,docs:{...TextInput.parameters?.docs,source:{originalSource:'args => {\n  const [value, setValue] = useState("");\n  return <Input {...args} value={value} onChange={setValue} />;\n}',...TextInput.parameters?.docs?.source}}},PasswordInput.parameters={...PasswordInput.parameters,docs:{...PasswordInput.parameters?.docs,source:{originalSource:'args => {\n  const [value, setValue] = useState("");\n  return <Input {...args} value={value} onChange={setValue} />;\n}',...PasswordInput.parameters?.docs?.source}}}},"./src/components/Input/Input.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),Visibility=__webpack_require__("./node_modules/@mui/icons-material/esm/Visibility.js"),VisibilityOff=__webpack_require__("./node_modules/@mui/icons-material/esm/VisibilityOff.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input_module=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Input/Input.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.A,options);const Input_Input_module=Input_module.A&&Input_module.A.locals?Input_module.A.locals:void 0,Input=({type,placeholder,value,onChange,isPassword,...props})=>{const[showPassword,setShowPassword]=(0,react.useState)(!1),inputType=isPassword&&!showPassword?"password":"text";return react.createElement("div",{className:(0,clsx.A)(Input_Input_module["input-container"],{[Input_Input_module["password-container"]]:isPassword})},react.createElement("input",{type:inputType,placeholder,value,onChange:e=>onChange(e.target.value),className:(0,clsx.A)(Input_Input_module["input-field"],{[Input_Input_module["input-password"]]:isPassword}),...props}),isPassword&&react.createElement("button",{type:"button",className:Input_Input_module["toggle-password"],onClick:()=>{setShowPassword((prev=>!prev))},"aria-label":showPassword?"Hide password":"Show password"},showPassword?react.createElement(VisibilityOff.A,null):react.createElement(Visibility.A,null)))};Input.propTypes={placeholder:prop_types_default().string.isRequired,value:prop_types_default().string.isRequired,onChange:prop_types_default().func.isRequired,isPassword:prop_types_default().bool},Input.defaultProps={isPassword:!1},Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isPassword:{defaultValue:{value:"false",computed:!1},description:"Whether the input is for a password",type:{name:"bool"},required:!1},placeholder:{description:"Placeholder for the input field",type:{name:"string"},required:!0},value:{description:"Value for the input field",type:{name:"string"},required:!0},onChange:{description:"Change handler",type:{name:"func"},required:!0}}}}}]);