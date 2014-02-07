/* https://github.com/tfrce/thedaywefightback.js */
var _tdwfb_config=typeof tdwfb_config!=="undefined"?tdwfb_config:{};(function(window,widgetConfig){widgetConfig.show_style=widgetConfig.show_style||"banner";widgetConfig.greeting=widgetConfig.greeting||"Dear Internet";widgetConfig.debug=widgetConfig.debug||false;widgetConfig.localAssets=widgetConfig.localAssets||false;widgetConfig.callOnly=widgetConfig.callOnly||false;widgetConfig.startAsMinimized=widgetConfig.startAsMinimized||false;widgetConfig.disableDate=widgetConfig.disableDate||false;widgetConfig.campaign=widgetConfig.campaign||"thedaywefightback";widgetConfig.cookieTimeout=widgetConfig.cookieTimeout||172800;widgetConfig.overrideLocation=widgetConfig.overrideLocation||false;function debug(){if(widgetConfig.debug){if(this.console){console.log.apply(console,arguments)}}}var activeCampaign;var ASSET_URL;if(widgetConfig.localAssets){ASSET_URL="../thedaywefightback/"}else{ASSET_URL="//d1agz031tafz8n.cloudfront.net/thedaywefightback.js"+"/thedaywefightback/"}function setCookie(c_name,value,seconds){var exdate=new Date((new Date).getTime()+seconds*1e3);var c_value=escape(value)+(seconds===null?"":"; expires="+exdate.toUTCString());document.cookie=c_name+"="+c_value}function getCookie(c_name){var c_value=document.cookie;var c_start=c_value.indexOf(" "+c_name+"=");if(c_start===-1){c_start=c_value.indexOf(c_name+"=")}if(c_start===-1){c_value=null}else{c_start=c_value.indexOf("=",c_start)+1;var c_end=c_value.indexOf(";",c_start);if(c_end===-1){c_end=c_value.length}c_value=unescape(c_value.substring(c_start,c_end))}return c_value}var checks={correctDate:function(callback){debug("correctDate()");window.tdwfbCheckDate=function(data){debug("tdwfbCheckDate()",data);callback(data)};var script=document.createElement("script");script.src="//dznh7un1y2etk.cloudfront.net/time?callback=tdwfbCheckDate";document.getElementsByTagName("head")[0].appendChild(script);window.tdwfbDateCallBackFailSafe=setTimeout(function(){if((new Date).getDate()===3){callback({thedaywefightback:true})}else{callback({thedaywefightback:false})}},5e3)},location:function(callback){debug("location()");window.tdwfbParseLocation=function(data){debug("tdwfbParseLocation()",data);callback(data)};var script=document.createElement("script");script.src="https://geoip.taskforce.is/?callback=tdwfbParseLocation";document.getElementsByTagName("head")[0].appendChild(script);window.tdwfbLocationCallBackFailSafe=setTimeout(function(){callback({country:{iso_code:"US"}})},5e3)}};var campaign={thedaywefightback:{cookieName:"thedaywefightback_hasseen",styles:{banner:{campaignContainer:"background: #000; position: fixed; "+"width: 100%; bottom: 0; left: 0; z-index: 100000; padding: 0; "+"-webkit-box-sizing: border-box; -moz-box-sizing: border-box;",iframeContainer:"position: relative; height: 350px; width: 100%; "+"margin: 0; background: #000; z-index: 1;",iframe:"width: 100%; height: 100%; border: 0; margin: 0; "+"padding: 0; background: #000;",footerOverlay:"cursor: pointer; position: absolute; bottom: 0; "+"height: 50px; width: 100%; margin: 0; background: none; "+"z-index: 2;",closeButton:"border: 0; height: 26px; width: 26px; "+"cursor: pointer; position: absolute; top: 20px; right: 20px; "+'background: url("'+ASSET_URL+'imgs/close-button.png");',mobileCloseButton:"border: 0; height: 20px; width: 20px; "+"cursor: pointer; position: absolute;top: 10px; right: 10px; "+'background: url("'+ASSET_URL+'imgs/close-button-mobile.png");',openButton:"border: 0; height: 26px; width: 26px; "+"cursor: pointer; position: absolute; bottom: 10px; "+'right: 20px; background: url("'+ASSET_URL+'imgs/open-button.png");'}},minimized:false,show:function(options){debug("show()",options);var cookie=getCookie(activeCampaign.cookieName);if(widgetConfig.startAsMinimized&&cookie===null){this.minimized=true}var style=activeCampaign.styles[activeCampaign.config.show_style];if(style.overlay){var overlay=document.createElement("div");overlay.style.cssText=style.overlay;document.body.appendChild(overlay)}var campaignContainer=document.createElement("div");window.tdwfbCampaignContainer=campaignContainer;campaignContainer.style.cssText=style.campaignContainer;var iframeContainer=document.createElement("div");iframeContainer.style.cssText=style.iframeContainer;var e=document.documentElement,g=document.getElementsByTagName("body")[0],x=window.innerWidth||e.clientWidth||g.clientWidth;if(x<767){if(!this.minimized){iframeContainer.style.height="100px"}else{iframeContainer.style.height="0px"}}else{if(this.minimized){iframeContainer.style.height="50px"}else{iframeContainer.style.height="350px"}}var footerOverlay=document.createElement("div");footerOverlay.style.cssText=style.footerOverlay;campaignContainer.appendChild(footerOverlay);campaignContainer.appendChild(iframeContainer);document.body.appendChild(campaignContainer);var isoCode=options.location&&options.location.country&&options.location.country.iso_code||"unknown";var firstTime=true;if(cookie!==null){firstTime=false}if(x<767){firstTime=false}var iframe=document.createElement("iframe");iframe.style.cssText=style.iframe;var us=iframe.src=ASSET_URL+activeCampaign.config.show_style+".html?firstTime="+firstTime+"&callOnly="+widgetConfig.callOnly+"&iso="+isoCode+"&greeting="+widgetConfig.greeting;if(isoCode==="US"&&!widgetConfig.overrideLocation||widgetConfig.overrideLocation==="usa"){iframe.src=us}else if(isoCode!=="US"&&!widgetConfig.overrideLocation||widgetConfig.overrideLocation==="international"){iframe.src=ASSET_URL+activeCampaign.config.show_style+"_international.html?firstTime="+firstTime+"&iso="+isoCode+"&greeting="+widgetConfig.greeting}iframeContainer.appendChild(iframe);var that=this;if(x>767){var closeButton=document.createElement("button");closeButton.style.cssText=style.closeButton;iframeContainer.appendChild(closeButton);var openButton=document.createElement("button");openButton.style.cssText=style.openButton;iframeContainer.appendChild(openButton);if(this.minimized){openButton.style.display="block";closeButton.style.display="none";footerOverlay.style.display="block"}else{openButton.style.display="none";closeButton.style.display="block";footerOverlay.style.display="none"}var toggleDisplay=function(){if(!that.minimized){iframeContainer.style.height="50px";that.minimized=true;footerOverlay.style.display="block";closeButton.style.display="none";openButton.style.display="block";setCookie(activeCampaign.cookieName,'{"minimized": true}',widgetConfig.cookieTimeout)}else{iframeContainer.style.height="350px";that.minimized=false;footerOverlay.style.display="none";openButton.style.display="none";closeButton.style.display="block";setCookie(activeCampaign.cookieName,'{"minimized": false}',widgetConfig.cookieTimeout)}};footerOverlay.onclick=toggleDisplay;closeButton.onclick=toggleDisplay}else{var mobileCloseButton=document.createElement("button");mobileCloseButton.style.cssText=style.mobileCloseButton;iframeContainer.appendChild(mobileCloseButton);mobileCloseButton.onclick=function(){setCookie(activeCampaign.cookieName,'{"minimized": true}',widgetConfig.cookieTimeout);document.body.removeChild(campaignContainer)}}},init:function(config){activeCampaign.config=config;var cookie=getCookie(activeCampaign.cookieName);if(cookie){this.minimized=JSON.parse(cookie).minimized}checks.correctDate(function(response){debug("correctDate() callback",response);clearTimeout(window.tdwfbDateCallBackFailSafe);if(response&&(response.thedaywefightback||widgetConfig.disableDate||widgetConfig.debug)){checks.location(function(location){debug("location() callback",location);window.tdwfbLocation=location;clearTimeout(window.tdwfbLocationCallBackFailSafe);activeCampaign.show({location:location,widgetConfig:widgetConfig})})}});var that=this;window.onresize=function(){debug("window.onresize()");if(window.tdwfbResizeCallback){clearTimeout(window.tdwfbResizeCallback)}window.tdwfbResizeCallback=setTimeout(function(){debug("tdwfbResizeCallback()");if(window.tdwfbCampaignContainer){document.body.removeChild(window.tdwfbCampaignContainer);that.show({location:window.tdwfbLocation,widgetConfig:widgetConfig})}},50)}}}};if(typeof campaign[widgetConfig.campaign]!=="undefined"){activeCampaign=campaign[widgetConfig.campaign];activeCampaign.init(widgetConfig)}else{return false}})(window,_tdwfb_config);