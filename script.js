function processScript(form){
    var scriptInput = form.script.value;
    var arr = scriptInput.split("\"")
    var str1= "https://live-chat-static.sprinklr.com/test-html/index.html?appId="
    var str2= "&env=prod12&skin=MODERN"
    var finalUrl = str1.concat(arr[3],str2)
    window.open(finalUrl);
}

  function initFreshChat() {
    window.fcWidget.init({
      token: "124fc8a4-e7f2-42de-b17d-c62261d4e935",
      host: "https://wchat.freshchat.com"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
