function processScript(form){
    var scriptInput = form.script.value;
    var arr = scriptInput.split("\"")
    var str1= "https://live-chat-static.sprinklr.com/test-html/index.html?appId="
    var str2= "&env=prod12&skin=MODERN"
    var finalUrl = str1.concat(arr[3],str2)
    window.open(finalUrl);
}