var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){!function(Controls){!function(System){var _a,_TcHmiPopup_tchmiFQN;class TcHmiPopup extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__restoreBounds=!1,this.__movable=!1,this.__modal=void 0,this.__popupSize={top:null,left:null,width:null,height:null},this.__onResolverForTargetFileWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("targetFile"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__targetFile)||(this.__targetFile=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetFile"}),this.__processTargetFile()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiPopup,_a,"f",_TcHmiPopup_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiPopup,_a,"f",_TcHmiPopup_tchmiFQN):"")+", Id="+this.getId()+", Attribute=TargetFile] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__openInProgress=!1}__previnit(){let templateRoot=this.__element.find(".TcHmi_Controls_System_TcHmiPopup-template");if(0===templateRoot.length)throw new Error("Invalid Template.html");this.__elementTemplateRoot=templateRoot[0],super.__previnit()}__init(){super.__init(),this.__targetFileHostPreload&&this.__buildFileHost()}__attach(){super.__attach();const updateBound=(evt,ctrl,options)=>{this.__modal&&evt.name===this.__id+".onMoved"||this.__popup?.setBounds({width:this.getRenderedWidth(),height:this.getRenderedHeight(),left:this.__renderedSizeCache.viewportLeft,top:this.__renderedSizeCache.viewportTop})};this.__resizeDestroyFnc=TcHmi.EventProvider.register(this.__id+".onResized",updateBound),this.__moveDestroyFnc=TcHmi.EventProvider.register(this.__id+".onMoved",updateBound)}__detach(){super.__detach(),this.__resizeDestroyFnc?.(),this.__resizeDestroyFnc=void 0,this.__moveDestroyFnc?.(),this.__moveDestroyFnc=void 0}destroy(){this.__keepAlive||(this.__popup?.abort(),this.__popup?.destroy(),this.__popup=void 0,this.__fileHost&&(this.__fileHost.destroy(),this.__fileHost=null),super.destroy())}__buildFileHost(){if(this.__fileHost&&(this.__fileHost.destroy(),this.__fileHost=null),!this.__targetFile)return;let path=this.__targetFile.path,attributes=null;if(this.__targetFile.attributes&&(attributes=tchmi_clone_object(this.__targetFile.attributes)),path)if(path.toLowerCase().endsWith(".content")){let attributesExtended={"data-tchmi-target-content":path,"data-tchmi-left":0,"data-tchmi-top":0,"data-tchmi-width":100,"data-tchmi-height":100,"data-tchmi-width-unit":"%","data-tchmi-height-unit":"%"};this.__fileHost=TcHmi.ControlFactory.createEx("TcHmi.Controls.System.TcHmiRegion",this.getId()+".Region",{...attributes,...attributesExtended},this)}else if(path?.toLowerCase().endsWith(".usercontrol")){let attributesExtended={"data-tchmi-target-user-control":path,"data-tchmi-left":0,"data-tchmi-top":0,"data-tchmi-width":100,"data-tchmi-height":100,"data-tchmi-width-unit":"%","data-tchmi-height-unit":"%"};this.__fileHost=TcHmi.ControlFactory.createEx("TcHmi.Controls.System.TcHmiUserControlHost",this.getId()+".UserControlHost",{...attributes,...attributesExtended},this)}}setTargetFile(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetFile"));let resolverInfo=this.__objectResolvers.get("targetFile");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("targetFile",{resolver:resolver,watchCallback:this.__onResolverForTargetFileWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTargetFileWatchCallback)})}getTargetFile(){return this.__targetFile}__processTargetFile(){if(this.__attributesInitialized&&((this.__targetFileHostPreload||this.__popup?.isShowing())&&this.__buildFileHost(),this.__popup?.isShowing())){let fileHostElement=this.__fileHost?.getElement()[0];fileHostElement?this.__popup.setContentElement(fileHostElement):this.__popup.setContentElement(document.createElement("div"))}}setHeaderText(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("HeaderText")),convertedValue=tchmi_path(convertedValue),convertedValue!==this.__headerText&&(this.__headerText=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeaderText"}),this.__processHeaderText())}getHeaderText(){return this.__headerText}__processHeaderText(){this.__popup?.setTexts({headerText:this.__headerText?this.__headerText:""})}setRestoreBounds(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("RestoreBounds")),convertedValue=tchmi_path(convertedValue),convertedValue!==this.__restoreBounds&&(this.__restoreBounds=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RestoreBounds"}),this.__processRestoreBounds())}getRestoreBounds(){return this.__restoreBounds}__processRestoreBounds(){this.__popup?.setStorageSettings({name:this.getId()+".Popup",restoreBounds:this.__restoreBounds})}setMovable(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Movable")),convertedValue=tchmi_path(convertedValue),convertedValue!==this.__movable&&(this.__movable=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Movable"}),this.__processMovable())}getMovable(){return this.__movable}__processMovable(){this.__setPopupOptions()}setModal(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Modal")),convertedValue=tchmi_path(convertedValue),convertedValue!==this.__modal&&(this.__modal=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Modal"}),this.__processModal())}getModal(){return this.__modal}__processModal(){this.__setPopupOptions()}__setPopupOptions(){this.__popup&&(this.__popup.setCloseButton(!0),this.__popup.setStorageSettings({name:this.getId()+".Popup",restoreBounds:this.__restoreBounds}),this.__popup.setBackgroundAction({close:!0,result:!1}),this.__modal?(this.__popup.setBackgroundMode(TcHmi.UiProvider.PopupProvider.BackgroundMode.Dimmed),this.__popup.setPositioningMode(TcHmi.UiProvider.PopupProvider.PositioningMode.Centered),this.__popup.setMovable(!1)):(this.__popup.setBackgroundMode(TcHmi.UiProvider.PopupProvider.BackgroundMode.None),this.__popup.setPositioningMode(TcHmi.UiProvider.PopupProvider.PositioningMode.Floating),this.__popup.setMovable(this.__movable)))}open(){if(!this.getIsEnabled()||!TcHmi.Access.checkAccess(this,"operate"))return;if(this.__popup?.isShowing())return;if(this.__fileHost||this.__buildFileHost(),this.__openInProgress=!0,this.__popup)this.__fileHost&&this.__popup.setContentElement(this.__fileHost.getElement()[0]);else{let popupUiProvider,element;try{popupUiProvider=TcHmi.UiProvider.getPreferredProvider("popup")}catch(ex){return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiPopup,_a,"f",_TcHmiPopup_tchmiFQN)!==this.__type?`, Origin=${__classPrivateFieldGet(TcHmiPopup,_a,"f",_TcHmiPopup_tchmiFQN)}`:"")}, Id=${this.getId()}] Could not open popup. An exception occured while loading popup ui provider.`,ex))}if(!popupUiProvider)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiPopup,_a,"f",_TcHmiPopup_tchmiFQN)!==this.__type?`, Origin=${__classPrivateFieldGet(TcHmiPopup,_a,"f",_TcHmiPopup_tchmiFQN)}`:"")}, Id=${this.getId()}] Could not open popup. Missing popup ui provider. Please check tchmiconfig.json and make sure that systemPopups property exists, is configured correctly and that the configured provider is loaded.`));element=this.__fileHost?this.__fileHost.getElement()[0]:document.createElement("div"),this.__popup=popupUiProvider.createHtmlElementBox(this.__headerText??"",element,{},this),this.__boundsChangedDestroy||(this.__boundsChangedDestroy=this.__popup.onBoundsChange.add((({bounds:bounds})=>{if(!bounds||!this.__popup?.isShowing()&&!this.__openInProgress)return;const propertyCandidates=["top","left","width","height"],changedProperties=[];for(const currentStyleName of propertyCandidates)this.__popupSize[currentStyleName]!==bounds[currentStyleName]&&(this.__popupSize[currentStyleName]=bounds[currentStyleName]??null,changedProperties.push(currentStyleName));if(this.__popup?.isShowing())for(const currentStyleName of changedProperties){const propertyName="Popup"+currentStyleName.charAt(0).toUpperCase()+currentStyleName.slice(1);TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:propertyName})}})))}this.__popup.setBounds({width:this.getRenderedWidth(),height:this.getRenderedHeight(),left:this.__renderedSizeCache.viewportLeft,top:this.__renderedSizeCache.viewportTop}),this.__setPopupOptions(),this.__openInProgress=!1,this.__popup.prompt().then((result=>{!this.__fileHost||this.__targetFileHostPreload||this.__targetFileHostKeepAlive||(this.__fileHost.destroy(),this.__fileHost=void 0),TcHmi.EventProvider.raise(this.__id+".onClosed",{result:result}),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IsOpen"});const changedProperties=["top","left","width","height"];for(const currentStyleName of changedProperties)this.__popupSize[currentStyleName]=null;for(const currentStyleName of changedProperties){const propertyName="Popup"+currentStyleName.charAt(0).toUpperCase()+currentStyleName.slice(1);TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:propertyName})}})),TcHmi.EventProvider.raise(this.__id+".onOpened"),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IsOpen"});const changedProperties=["top","left","width","height"];for(const currentStyleName of changedProperties){const propertyName="Popup"+currentStyleName.charAt(0).toUpperCase()+currentStyleName.slice(1);TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:propertyName})}}close(){this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&(!this.__popup||this.__popup&&!this.__popup.isShowing()||(this.__popup?.abort(),this.__boundsChangedDestroy?.(),this.__boundsChangedDestroy=void 0,!this.__fileHost||this.__targetFileHostPreload||this.__targetFileHostKeepAlive||(this.__fileHost.destroy(),this.__fileHost=void 0)))}resetBounds(){this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&(this.__modal||(this.__popup?.resetBounds(),this.__popup?.setBounds({width:this.getRenderedWidth(),height:this.getRenderedHeight(),left:this.__renderedSizeCache.viewportLeft,top:this.__renderedSizeCache.viewportTop})))}getPopupLeft(){return this.__popupSize.left}getPopupTop(){return this.__popupSize.top}getPopupHeight(){return this.__popupSize.height}getPopupWidth(){return this.__popupSize.width}setTargetFileHostPreload(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetFileHostPreload")),convertedValue=tchmi_path(convertedValue),convertedValue!==this.__targetFileHostPreload&&(this.__targetFileHostPreload=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetFileHostPreload"}),this.__processTargetFileHostPreload())}getTargetFileHostPreload(){return this.__targetFileHostPreload}__processTargetFileHostPreload(){this.__targetFileHostPreload&&!this.__popup?.isShowing()&&this.__isAttached&&this.__buildFileHost()}setTargetFileHostKeepAlive(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetFileHostKeepAlive")),convertedValue=tchmi_path(convertedValue),convertedValue!==this.__targetFileHostKeepAlive&&(this.__targetFileHostKeepAlive=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetFileHostKeepAlive"}))}getTargetFileHostKeepAlive(){return this.__targetFileHostKeepAlive}getIsOpen(){return this.__popup?.isShowing()??!1}}_TcHmiPopup_tchmiFQN={value:"TcHmi.Controls.System."+(_a=TcHmiPopup).name},System.TcHmiPopup=TcHmiPopup}(Controls.System||(Controls.System={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiPopup","TcHmi.Controls.System",TcHmi.Controls.System.TcHmiPopup);