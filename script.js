function processScript(form){
    var environ = form.envir.value;  
    var scriptInput = form.script.value;
    var arr = scriptInput.split("\"")
    var str1= "https://live-chat-static.sprinklr.com/test-html/index.html?appId="
    var str2= "&env="
    var str3= "&skin=MODERN"
    var finalUrl = str1.concat(arr[3],str2.concat(environ,str3))
    window.open(finalUrl);
}