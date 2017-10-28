var EweiWebchatBox = {};
EweiWebchatBox.tools = {
  isMobile : function(){
    var userAgentInfo = window.navigator.userAgent;
    var Agents = ['Android', 'iPhone','SymbianOS', 'Windows Phone','iPad', 'iPod','BlackBerry','Opera Mini','IEMobile','UCBrowser'];
    var flag = false;
    for (var i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) > 0) {
        flag = true;
        break;
      }
    }
    return flag;
  },
  isIe: function(){
    if (!!window.ActiveXObject || "ActiveXObject" in window){
      return true;
    }else{
      return false;  
    } 
  },
  getCurrentScript : function() {
    if(document.currentScript){
      return document.currentScript;
    }
    var scripts = document.scripts || document.getElementsByTagName('script');
    
    for (var i=0; i < scripts.length; i++) {

      if (scripts[i].src.indexOf(scripts[i].getAttribute('ewei-domain') + '/source/scripts/eweiBox.new.js') !== -1) {
        return scripts[i];
      }
    }
  },
  getCookie : function(c_name){
    if (document.cookie.length>0){
      var c_start=document.cookie.indexOf(c_name + '=');
      var c_end = null;
      if (c_start != -1){
        c_start = c_start + c_name.length+1;
        c_end = document.cookie.indexOf(';',c_start);
        if (c_end == -1) {
          c_end = document.cookie.length;
        }
        return unescape(document.cookie.substring(c_start,c_end));
      }
      return '';
    }
  },
  setCookie : function(c_name,value,expiredays){
    var cookie = c_name + '=' + escape(value);
    if(expiredays > 0){
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      cookie += ';expires=' + exdate.toUTCString();
    }
    cookie += ';path=/';
    document.cookie = cookie;
  },
  isEmptyObject : function(obj){
    for(var attr in obj){
      return true;
    }
    return false;
  }
};
EweiWebchatBox.init = function(){  //外链初始化
  if (this.initialized) return;
  this.currentScript = this.tools.getCurrentScript();
  this.addEvent = window.addEventListener ? 'addEventListener' : 'attachEvent';
  this.click = window.addEventListener ? 'click' : 'onclick';
  this.message = window.addEventListener ? 'message' : 'onmessage';
  this.body = document.body || document.getElementsByTagName('body')[0];
  this.hasAppend = false;
  if(this.tools.isMobile()){
    this.click = 'touchstart';
    //this.createMobileTips();
    this.btn_element = document.getElementById('__ewei__box__webchat__button__Mobile__');
    var button_PC = document.getElementById('__ewei__box__webchat__button__');
    if(this.btn_element){
      this.btn_element.style.display = 'block';
    }
    if(button_PC){
      button_PC.style.display = 'none';
    }
    this.createTips('mobile');
  }
  else{
    this.btn_element = document.getElementById('__ewei__box__webchat__button__');
    this.createTips('pc');
    this.btn_element_drag();
  }
  this.el = document.createElement('div');
  this.option = { keyCode: this.currentScript.getAttribute('ewei-boxid'), pid: this.currentScript.getAttribute('ewei-pid'), domain: this.currentScript.getAttribute('ewei-domain') };
  if(window.isHelpCenterWebChat){ //当是帮助中心时的在线交谈
    if(window.location.host.indexOf('www.ewei.com') <= -1 && window.location.host.indexOf('www.ewei.org') <= -1){
      this.option.domain = window.location.protocol + '//' + window.location.host;
    }
  }
  if(!this.btn_element){
    return false;
  }
  if(window.Messenger && Object.prototype.toString.call(window.Messenger) === '[object Function]'){ //当有Message对象
    this.createWebChatIframe();
  }
  else{
    this.LoadWebChatMessage();
  }

  this.initialized = true;
};
EweiWebchatBox.btn_element_drag = function(){
  var disX=0;
  var disY=0;
  var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
  var clientHeight = document.documentElement.clientHeight|| document.body.clientHeight;
  var This = this;
  this.btn_element.onmousedown = function(e){
    This.isDragDown = new Date().getTime();
    var ev = e || window.event;
    disX = ev.clientX - this.offsetLeft;
    disY = ev.clientY - this.offsetTop;
    document.onmousemove = function(e){
      // if(!This.isDrag){
      //   This.isDrag = true;
      // }
      var ev = e || window.event;
      var l = ev.clientX - disX;
      var t = ev.clientY - disY;
      if(l < 0){
        l = 0;
      }
      else if( l > (clientWidth - This.btn_element.offsetWidth)){
        l = clientWidth - This.btn_element.offsetWidth;
      }
      if(t < 0){
        t = 0;
      }
      else if(t > (clientHeight - This.btn_element.offsetHeight)){
        t = clientHeight - This.btn_element.offsetHeight;
      }
      This.btn_element.style.right = '';
      This.btn_element.style.bottom = '';
      This.btn_element.style.left = l - 1 + 'px';
      This.btn_element.style.top = t + 'px';
    };
    document.onmouseup=function (e){
      This.isDragUp = new Date().getTime();
      document.onmousemove=null;
      document.onmouseup=null;
    };
    return false;
  };
};
EweiWebchatBox.createTips = function(type){
  var oDiv = document.createElement('div');
  var oDiv_num = document.createElement('div');
  var cssStr = '.tipbox:before,.tipbox:after{content: "";position: absolute;border-style:dashed dashed solid dashed;display: inline-block;}';
  var class_num = ''; 
  if(type == 'mobile'){
    cssStr += '.tipbox:after{right: 10px;bottom:-23px;border-color: #D7DADB transparent transparent;border-width: 11px;z-index:1080}' +
    '.tipbox:before{right: 11px;bottom:-20px;border-color: #fff transparent transparent;border-width: 10px;z-index:1081}' +
    ' .tipbox{box-shadow: -2px 2px 5px #ccc;position: absolute;bottom: 86px;right: 10px;width: 250px;border: 1px solid #D7DADB;display: block;padding: 5px;border-radius:3px;font-size:13px;color:#666;dashed;display:none;word-break:break-all;z-index:9999;background:#fff;';
    class_num = 'position:absolute;right:5px;bottom:60px;';
  }else{
    //圆角按钮
    if(this.btn_element.style.height != '60px' && this.btn_element.style.width != '60px'){
      //按钮在右侧底部
      if(this.btn_element.style.right ==  '10px' && this.btn_element.style.top !=  '40%'){
        cssStr += '.tipbox:after{right: 10px;bottom:-23px;border-color: #D7DADB transparent transparent;border-width: 11px;z-index:1080}' +
        '.tipbox:before{right: 11px;bottom:-20px;border-color: #fff transparent transparent;border-width: 10px;z-index:1081}' +
        ' .tipbox{box-shadow: -2px 2px 5px #ccc;position: absolute;bottom: 60px;right: 10px;width: 250px;border: 1px solid #D7DADB;display: block;padding: 5px;border-radius:3px;font-size:13px;color:#666;dashed;display:none;word-break:break-all;z-index:9999;background:#fff;';
        class_num = 'position:absolute;right:-6px;bottom:20px;';
      //按钮在左侧底部
      }else if(this.btn_element.style.left ==  '10px' && this.btn_element.style.top !=  '40%'){
        cssStr += '.tipbox:after{left: 10px;bottom:-23px;border-color: #D7DADB transparent transparent;border-width: 11px;z-index:1080}' +
        '.tipbox:before{left: 11px;bottom:-20px;border-color: #fff transparent transparent;border-width: 10px;z-index:1081}' +
        ' .tipbox{box-shadow: -2px 2px 5px #ccc;position: absolute;bottom: 60px;left: 10px;width: 250px;border: 1px solid #D7DADB;display: block;padding: 5px;border-radius:3px;font-size:13px;color:#666;dashed;display:none;word-break:break-all;z-index:9999;background:#fff;';
        class_num = 'position:absolute;left:-6px;bottom:20px;';
      //按钮在右侧浮动
      }else if(this.btn_element.style.right ==  '10px' && this.btn_element.style.top ==  '40%'){
        cssStr += '.tipbox:after{right: -22px;bottom:36px;border-color: transparent transparent transparent  #D7DADB;border-width: 11px;z-index:1080}' +
        '.tipbox:before{right: -18px;bottom:38px;border-color: transparent transparent transparent #fff;border-width: 9px;z-index:1081}' +
        ' .tipbox{box-shadow: -2px 2px 5px #ccc;position: absolute;top: 20px;right: 50px;width: 250px;border: 1px solid #D7DADB;display: block;padding: 5px;border-radius:3px;font-size:13px;color:#666;dashed;display:none;word-break:break-all;z-index:9999;background:#fff;';
        class_num = 'position:absolute;left:20px;top:-6px;';
      //按钮在左侧浮动
      }else{
        cssStr += '.tipbox:after{left: -22px;bottom:36px;border-color: transparent #D7DADB transparent transparent;border-width: 11px;z-index:1080}' +
        '.tipbox:before{left: -18px;bottom:38px;border-color: transparent #fff transparent transparent;border-width: 9px;z-index:1081}' +
        ' .tipbox{box-shadow: -2px 2px 5px #ccc;position: absolute;top: 20px;left: 50px;width: 250px;border: 1px solid #D7DADB;display: block;padding: 5px;border-radius:3px;font-size:13px;color:#666;dashed;display:none;word-break:break-all;z-index:9999;background:#fff;';
        class_num = 'position:absolute;left: 80px;top:-6px;';
      }
    }else{ //方形和圆形按钮
      //按钮在左侧
      if(this.btn_element.style.left ==  '10px'){
        cssStr += '.tipbox:after{left: 10px;bottom:-23px;border-color: #D7DADB transparent transparent;border-width: 11px;z-index:1080}' +
        '.tipbox:before{left: 11px;bottom:-20px;border-color: #fff transparent transparent;border-width: 10px;z-index:1081}' +
        ' .tipbox{box-shadow: -2px 2px 5px #ccc;position: absolute;bottom: 80px;left: 10px;width: 250px;border: 1px solid #D7DADB;display: block;padding: 5px;border-radius:3px;font-size:13px;color:#666;dashed;display:none;word-break:break-all;z-index:9999;background:#fff;';
        class_num = 'position:absolute;right:-3px;bottom:48px;';
      }else{
        //按钮在右侧
        cssStr += '.tipbox:after{right: 10px;bottom:-23px;border-color: #D7DADB transparent transparent;border-width: 11px;z-index:1080}' +
        '.tipbox:before{right: 11px;bottom:-20px;border-color: #fff transparent transparent;border-width: 10px;z-index:1081}' +
        ' .tipbox{box-shadow: -2px 2px 5px #ccc;position: absolute;bottom: 80px;right: 10px;width: 250px;border: 1px solid #D7DADB;display: block;padding: 5px;border-radius:3px;font-size:13px;color:#666;dashed;display:none;word-break:break-all;z-index:9999;background:#fff;';
        class_num = 'position:absolute;right:-3px;bottom:48px;';
      }
    }
  }
  class_num += 'width:20px;height:20px;background:red;border-radius:50%;z-index:100000;display:none;text-align:center;line-height:20px;color:#fff'; 
  var style = document.createElement('style');
  style.type = 'text/css';
  try{
    style.appendChild(document.createTextNode(cssStr));
  }catch(e){
    style.styleSheet.cssText = cssStr;
  }
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
  oDiv.className = 'tipbox';
  oDiv_num.style.cssText = class_num;
  this.showTipsBox = oDiv;
  this.showNumBox = oDiv_num;
  if(this.tools.isMobile()){
    this.body.appendChild(oDiv);
    this.body.appendChild(oDiv_num);  
  }else{
    var btn = document.getElementById('__ewei__box__webchat__button__');
    btn.appendChild(oDiv);
    btn.appendChild(oDiv_num); 
  }
  
  this.showTipsNum = 0;
  var This = this;
  this.showTipsBox.onclick = function(){
    if (!This.hasAppend) {
      This.body.appendChild(This.el);
      This.btn_element.style.display = 'none';
      This.hasAppend = true;
    } else {
      This.el.style.display = 'block';
      This.btn_element.style.display = 'none';
    }
    if(This.showTipsBox){
      This.showTipsBox.style.display = 'none';
    }
    This.showNumBox.style.display = 'none';
    This.showTipsNum = 0;
  };
  //如果是官网，不展示第一次消息通知
  if(!this.tools.isMobile() && window.location.href.indexOf("www.ewei.") < 0){
    if(document.getElementById('__ewei__box__webchat__message') && this.btn_element.style.display == ''){
      this.first_message = document.getElementById('__ewei__box__webchat__message').innerHTML;
      this.showTips({'title':'','content':this.first_message});
    }
  }
};
EweiWebchatBox.showTips = function(infObj){  //显示消息提示
  this.showTipsBox.style.display = 'block';
  this.showTipsBox.innerHTML = '';
  this.showTipsBox.innerHTML = '<p style="font-size:12px;height:12px;color:#999;text-align:left;margin: 0 0 10px;">' + infObj.title + '</P>'+
  '<div style="margin-bottom:12px;line-height:18px;text-align:left;">' + infObj.content + '</div>'+
  '<span onclick="EweiWebchatBox.closeMobileTips()" style="position:absolute;top:5px;right:5px;width:20px;height:20px;text-align:center;line-height:20px;">×</span>';
};
EweiWebchatBox.closeMobileTips = function(ev){
  var event = ev || window.event;
  this.showTipsBox.style.display = 'none';
  event.preventDefault();
  event.stopPropagation();
};
EweiWebchatBox.LoadWebChatMessage = function(){
  var webChatMessageScript = document.createElement('script');
  webChatMessageScript.src = this.option.domain + '/source/lib/messenger.js';
  webChatMessageScript.type = 'text/javascript';
  var This = this;
  webChatMessageScript.onload = webChatMessageScript.onreadystatechange = function() {
    if(window.Messenger && Object.prototype.toString.call(window.Messenger) === '[object Function]'){
      This.createWebChatIframe();
    }
  };
  this.body.appendChild(webChatMessageScript);
};
EweiWebchatBox.createWebChatIframe = function(){  //创建一个iframe
  var chatListStr = this.tools.getCookie('ewei_com_chat_ding');
  var chatList = [];
  var nowChatId = null;
  var token = null;
  var iframeUrl = this.option.domain + '/load_webchat_window/' + this.option.pid + '/' + this.option.keyCode ;
  // var iframeUrl = window.location.protocol + '//' + window.location.host + '/load_webchat_window/' + this.option.pid + '/' + this.option.keyCode;
  if (chatListStr) {
    try {
      chatList = JSON.parse(chatListStr);
    } catch (e) {
      chatList = [];
    }
    for (var i = 0, len = chatList.length; i < len; i++) {
      if (chatList[i].eweiBoxId == this.option.keyCode) {
        nowChatId = chatList[i].chatId;
        token = chatList[i].token;
        break;
      }
    }
  }

  if(nowChatId){  //有会话刷新直接拉取
    iframeUrl += '?chatId=' + nowChatId + '&token='+token+'&source=' + top.location.href.replace('#', '%23').replace('?', '&');
  }
  else{
    iframeUrl += '?source=' + top.location.href.replace('#', '%23').replace('?', '&');
    var urlParam = '';
    if(!EweiWebchatBox.tools.isMobile() && Object.prototype.toString.call(window._ewei_auto_fill_webchat_in_data_) === '[object Object]' && this.tools.isEmptyObject(window._ewei_auto_fill_webchat_in_data_)){
      //PC端通过连接传值
      for(var obj in window._ewei_auto_fill_webchat_in_data_){
        if(window._ewei_auto_fill_webchat_in_data_[obj]){
          urlParam += '&ewei_web_chat_' + obj +'=' + encodeURIComponent(window._ewei_auto_fill_webchat_in_data_[obj]);
        }
      }
      iframeUrl += urlParam;
    }
  }
  
  
  this.el.setAttribute('id', '__ewei__support__webchat__box__' + this.option.keyCode);

  if(this.tools.isMobile()){
    this.el.setAttribute('style', 'position:fixed;z-index: 99999;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-color:#fff;');
    iframeUrl += '&isMobile=true';
    if(!nowChatId){
      // this.showMobileTips({'title':'','content':'欢迎光临，请问有什么可以帮到你？'});  //暂时不展示欢迎语
    }
  }else{
    var styleStr = 'position:fixed;z-index: 99999;left:' + this.btn_element.style.left + ';right:' + this.btn_element.style.right + ';bottom:' + this.btn_element.style.bottom + ';width:330px;height:530px;border-right:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;box-shadow: -2px -2px 5px #888888;';
    if(this.btn_element.style.top == '50%' || this.btn_element.style.top === '40%'){
      styleStr += 'margin-top:-265px;';
      styleStr += 'top:50%;';
    }
    this.el.setAttribute('style', styleStr);
  }
  //var iframeHtml = "<iframe frameborder='0' scrolling='no' id='_ewei_box_webchat_iframe_" + this.option.keyCode + "' style='height:100%;width:100%;' src='" + iframeUrl + "' onload='EweiWebchatBox.iframeLoaded(\"" + this.option.keyCode + "\");'></iframe>";
  var iframeDom = document.createElement('iframe');
  iframeDom.setAttribute('frameborder', '0');
  iframeDom.setAttribute('scrolling', '0');
  iframeDom.setAttribute('id', '_ewei_box_webchat_iframe_'+this.option.keyCode);
  iframeDom.setAttribute('style', 'height:100%;width:100%');
  iframeDom.setAttribute('src', iframeUrl);
  iframeDom.setAttribute('onload', 'EweiWebchatBox.iframeLoaded("'+this.option.keyCode+'")');

  this.el.appendChild(iframeDom);
  if(nowChatId){
    this.body.appendChild(this.el);
    this.btn_element.style.display = 'none';
    this.hasAppend = true;
  }
  var This = this;
  this.btn_element[this.addEvent](this.click, function(event) {
    if(This.isDragUp - This.isDragDown > 300){
      return false;
    }
    if (!This.hasAppend) {
      This.body.appendChild(This.el);
      This.btn_element.style.display = 'none';
      This.hasAppend = true;
    } else {
      This.el.style.display = 'block';
      This.btn_element.style.display = 'none';
    }
    if(This.showTipsBox){
      This.showTipsBox.style.display = 'none';
    }
    if(This.showNumBox){
      This.showNumBox.style.display = 'none';
    }
    This.showTipsNum = 0;
    var ev = event || window.event;
    if(This.tools.isIe()){
      ev.cancelBubble=true;//阻止冒泡
    }else{
      ev.stopPropagation();//阻止冒泡
      ev.preventDefault();//阻止自身行为
    }
  });
};
EweiWebchatBox.iframeLoaded = function(keyCode){ 
  if(!this.messenger){
    this.messenger = new Messenger('EweiMessengerParent' + keyCode, 'EweiMessenger');
  }
  if (Object.prototype.toString.call(window._ewei_auto_fill_webchat_in_data_) === '[object Object]' && this.tools.isEmptyObject(window._ewei_auto_fill_webchat_in_data_)) {
    if(EweiWebchatBox.tools.isMobile()){
      //手机端通过messager传值
      var windowIframe = document.getElementById('_ewei_box_webchat_iframe_' + keyCode);
      var name = 'windowIframe' + keyCode;
      var msg = {'msgType': 'setUserInfo','user': window._ewei_auto_fill_webchat_in_data_};
    
      this.messenger.addTarget(windowIframe.contentWindow, name);
      this.messenger.targets[name].send(JSON.stringify(msg));
    }
  }
  this.initMessage();
};
EweiWebchatBox.initMessage = function(){
  var This = this;
  this.messenger.listen(function (msg) {
    var msgObj = msg;
    if (msgObj.length > 0) {
      msgObj = JSON.parse(msgObj);
    } else {
      msgObj = {};
    }
    switch (msgObj.msgType) {
    case 'hide':
      This.el.style.display = 'none';
      This.btn_element.style.display = 'block';
      This.showTipsBox.style.display = 'none';
      break;
    case 'recordChatId':
      /* 当会话接通后 */
      This.saveChatToCookie(msgObj);
      break;
    case 'removeChatId':
      /* 当会话结束后 */
      This.removeChatFromCookie(msgObj);
      break;
    case 'reset':
       /* 当提交表单后 */  
      var frame = document.getElementById('_ewei_box_webchat_iframe_' + msgObj.eweiBoxId);
      if (frame) {
        frame.src = frame.src;
      }
      This.el.style.display = 'none';
      This.btn_element.style.display = 'block';
      break;
    case 'showChatAD':
      This.el.style.width = '505px';
      break;
    case 'hideChatAD':
      This.el.style.width = '332px';
      break;
    case 'showModalWindow':
      /* 窗口放大  */
      This.el.style.display = 'none';
      This.btn_element.style.display = 'block';
      break;
    case 'showTips':
      /* 消息提醒 当会话收起并且后台配置显示提示框 */

      if(msgObj.data && This.el.style.display == 'none'){

        This.showNumBox.style.display = 'block';
        This.showTipsNum++;
        if(This.showTipsNum >= 99){
          This.showTipsNum = 99;
        }
        This.showNumBox.innerHTML = This.showTipsNum;
        if(msgObj.open){
          var name = msgObj.data.user ? (msgObj.data.user.nickname || msgObj.data.user.name) : '';
          if(msgObj.data.type == 'text'){
            if(msgObj.data.content.length > 45){
              msgObj.data.content = msgObj.data.content.substring(0,45) + '...';
            }
            This.showTips({'title':name + msgObj.time,'content':msgObj.data.content});
          }
          else if(msgObj.data.type == 'image'){
            This.showTips({'title':name + msgObj.time,'content':'你有新的图片消息'});
          }
          else if(msgObj.data.type == 'video'){
            This.showTips({'title':name + msgObj.time,'content':'你有新的视频消息'});
          }
          else if(msgObj.data.type == 'audio'){
            This.showTips({'title':name + msgObj.time,'content':'你有新的音频消息'});
          }
          else if(msgObj.data.type == 'file'){
            This.showTips({'title':name + msgObj.time,'content':'你有新的附件消息'});
          }else if(msgObj.data.type == 'knowledge'){
            This.showTips({'title':name + msgObj.time,'content': name+'给你推荐文章【'+msgObj.data.content+'】'});
          }else if(msgObj.data.type == 'remote_desk'){
            This.showTips({'title':name + msgObj.time,'content':'对方邀请远程协助'});
          }else if(msgObj.data.type == 'video_call'){
            This.showTips({'title':name + msgObj.time,'content':'对方邀请视频通话'});
          }else if(msgObj.data.type == 'close_chat'){
            if(!EweiWebchatBox.tools.isMobile()){
              This.showTips({'title':name + msgObj.time,'content':'会话结束，请对本次服务进行评价'});
            }
          }else if(msgObj.data.type == 'close_chat_no_evaluate'){
            if(!EweiWebchatBox.tools.isMobile()){
              This.showTips({'title':name + msgObj.time,'content':'会话结束'});
            }
          }
        }
      }
      break;
    }
  });
};
EweiWebchatBox.saveChatToCookie = function(msgObj){
  var chatListStr = this.tools.getCookie('ewei_com_chat_ding');
  var chatList = [];
  var isNewChat = true;//是否为新的会话
  if (chatListStr) {
    try {
      chatList = JSON.parse(chatListStr);
    } catch (e) {
      chatList = [];
    }
    for (var i = 0, len = chatList.length; i < len; i++) {
      if (chatList[i].eweiBoxId == msgObj.eweiBoxId) {
        isNewChat = false;
        break;
      }
    }
  }
  if(isNewChat){
    chatList.push({'eweiBoxId': msgObj.eweiBoxId,'chatId': msgObj.chatId,'userId': msgObj.userId,'token': msgObj.token});
  }
  this.tools.setCookie('ewei_com_chat_ding', JSON.stringify(chatList), 1);
};
EweiWebchatBox.removeChatFromCookie = function(msgObj){
  var chatListStr = this.tools.getCookie('ewei_com_chat_ding');
  var chatList = [];
  if (chatListStr) {
    try {
      chatList = JSON.parse(chatListStr);
    } catch (e) {
      chatList = [];
    }
    for (var i = 0, len = chatList.length; i < len; i++) {
      if (chatList[i].eweiBoxId == msgObj.eweiBoxId) {
        chatList.splice(i, 1);
        break;
      }
    }
  }
  if (chatList.length > 0) {
    this.tools.setCookie('ewei_com_chat_ding', JSON.stringify(chatList), 1);
  } 
  else {
    this.tools.setCookie('ewei_com_chat_ding', '', 1);
  }
};

(function(){
  if (window.addEventListener) { 
    window.addEventListener('load',function(){
      EweiWebchatBox.init();
    },false); 
  } 
  else { 
    window.attachEvent('onload',function(){
      EweiWebchatBox.init();
    },false); 
  } 
})();

