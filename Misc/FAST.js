var constBottomFrameLeft_Width_Minimum =   0;
var constBottomFrameLeft_Width_Medium  = 368;
var constBottomFrameLeft_Width_Ideal   = 586;

function fncGetBrowser(){
    varUserAgent = new Object();
    var useragent = navigator.userAgent;
    if ( useragent.match( /Opera[\/\s](\d+\.\d+)/ ) && RegExp.$1 >= 6 ){ varUserAgent.Opera = RegExp.$1;  return true; }
    if ( useragent.match( /MSIE (\d+\.\d+);/ ) && RegExp.$1 >= 5 ){ varUserAgent.InternetExplorer = RegExp.$1;  return true; }
    if ( useragent.match( /Netscape6\/(\d+\.\d+)/ ) ){ varUserAgent.Netscape = RegExp.$1;  return true; }
    if ( useragent.match( /Chrome\/(\d+)/ ) && RegExp.$1 >= 1 ){ varUserAgent.Chrome = RegExp.$1;  return true; }
    if ( useragent.match( /C\/(7\.\d+)/ ) ){ varUserAgent.Netscape = RegExp.$1;  return true; }
    if ( useragent.match( /^Mozilla\/5\.0.+rv:(\d+\.\d+).+Gecko/ ) && RegExp.$1 >= 1 ){ varUserAgent.Mozilla = RegExp.$1;  return true; }
    varUserAgent.other = 1;  return false;
}

fncGetBrowser();

function fncShowOrHideContent(parmClickedNode){
    var source;
    if (varUserAgent.InternetExplorer && varUserAgent.InternetExplorer >= 6.0) { source = event.srcElement; } else { source = parmClickedNode.target; }
    //if (source.nodeName=="A") { source = source.parentNode; } // Function may have been triggered because user clicked on text (in which case 'e' is the <a> node) or around it (in which case 'e' is the 'button' object ) - we need to set 'source' to the 'button' node to ensure code below works
    if (source.className=="") { return; }
    if (source.nodeName=="BUTTON" || source.className=="home-button") { // If user clicked a button
       var arrButtonObjs = document.getElementsByTagName("button"); // Toggle off whichever button is currently pressed (if any)
       intCountButtonObjs = arrButtonObjs.length;
       for (var intIdx=0; intIdx<intCountButtonObjs; intIdx++) {
           if (arrButtonObjs[intIdx].classList.contains("btnPressed") && arrButtonObjs[intIdx] != source) { 
             arrButtonObjs[intIdx].classList.remove("btnPressed"); arrButtonObjs[intIdx].classList.add("btnNotPressed");
            }
       }
      if (source.className != "home-button") {
        if (source.classList.contains("btnNotPressed")) { // Toggle clicked button
          source.classList.remove("btnNotPressed"); source.classList.add("btnPressed"); source.parentNode.href=source.parentNode.id;
        } else {
          source.classList.remove("btnPressed"); source.classList.add("btnNotPressed"); source.parentNode.href="bottomFrame_Right_Bottom.html";
        }
      }
    } // End 'If user clicked a button'
    if (source.className=="verSelection" || source.className=="verSelV13SP1" || source.className=="verSelV13" || source.className=="verSelV13onZ" || source.className=="verSelV13forK8s" || source.className=="verSelV12onZSP1" || source.className=="verSelV12onZ" || source.className=="verSelV12SP1" || source.className=="verSelV12forK8s" || source.className=="verSelV12" || source.className=="verSelV11" || source.className=="verSelV10" || source.className=="verSel9_6" || source.className=="verSel9_5" || source.className=="verSel9_4"){
        if (source.id=="V13SP1"    ||source.className=="verSelV13SP1"    ) { document.getElementById("V13SP1").checked    ="true"; }
        if (source.id=="V13"       ||source.className=="verSelV13"       ) { document.getElementById("V13").checked       ="true"; }
        if (source.id=="V13onZ"    ||source.className=="verSelV13onZ"    ) { document.getElementById("V13onZ").checked    ="true"; }
        if (source.id=="V13forK8s" ||source.className=="verSelV13forK8s" ) { document.getElementById("V13forK8s").checked ="true"; }
        if (source.id=="V12onZSP1" ||source.className=="verSelV12onZSP1" ) { document.getElementById("V12onZSP1").checked ="true"; }
        if (source.id=="V12onZ"    ||source.className=="verSelV12onZ"    ) { document.getElementById("V12onZ").checked    ="true"; }
        if (source.id=="V12SP1"    ||source.className=="verSelV12SP1"    ) { document.getElementById("V12SP1").checked       ="true"; }
        if (source.id=="V12forK8s" ||source.className=="verSelV12forK8s" ) { document.getElementById("V12forK8s").checked ="true"; }
        if (source.id=="V12"       ||source.className=="verSelV12"       ) { document.getElementById("V12").checked       ="true"; }
        if (source.id=="V11"       ||source.className=="verSelV11"       ) { document.getElementById("V11").checked       ="true"; }
        if (source.id=="V10"       ||source.className=="verSelV10"       ) { document.getElementById("V10").checked       ="true"; }
        if (source.id=="9_6"       ||source.className=="verSel9_6"       ) { document.getElementById("9_6").checked       ="true"; }
        if (source.id=="9_5"       ||source.className=="verSel9_5"       ) { document.getElementById("9_5").checked       ="true"; }
        if (source.id=="9_4"       ||source.className=="verSel9_4"       ) { document.getElementById("9_4").checked       ="true"; }
        fncShowOrHideFormatButtonsAccordingToSeldVersion();
    } else if (source.className=="img_resize_left"){
        if (top.bottomFrame.bottomFrame_Left.innerWidth > constBottomFrameLeft_Width_Ideal-3) {
          top.bottomFrame.document.getElementById('bottomFrameset').setAttribute("cols",constBottomFrameLeft_Width_Ideal+",*",0);
        } else if (top.bottomFrame.bottomFrame_Left.innerWidth > constBottomFrameLeft_Width_Medium-3 && top.bottomFrame.bottomFrame_Left.innerWidth <= constBottomFrameLeft_Width_Ideal-3 ) {
          top.bottomFrame.document.getElementById('bottomFrameset').setAttribute("cols",constBottomFrameLeft_Width_Medium+",*",0);
        } else if (top.bottomFrame.bottomFrame_Left.innerWidth <= constBottomFrameLeft_Width_Medium-3) {
          top.bottomFrame.document.getElementById('bottomFrameset').setAttribute("cols",constBottomFrameLeft_Width_Minimum+",*",0);
        }
    } else if (source.className=="img_resize_right"){
        if (top.bottomFrame.bottomFrame_Left.innerWidth < constBottomFrameLeft_Width_Medium-3 ) {
          top.bottomFrame.document.getElementById('bottomFrameset').setAttribute("cols",constBottomFrameLeft_Width_Medium+",*",0);
        } else if (top.bottomFrame.bottomFrame_Left.innerWidth < constBottomFrameLeft_Width_Ideal-3 ) {
          top.bottomFrame.document.getElementById('bottomFrameset').setAttribute("cols",constBottomFrameLeft_Width_Ideal+",*",0);
        }
    } else if (source.className=="btn-html-show-off"){
        source.className="btn-html-show-on";
        source.src="btn-html-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-html-show-on"){
        source.className="btn-html-show-off";
        source.src="btn-html-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-pdf-show-off"){
        if (source.parentNode.type == "portfolio" && varUserAgent.Chrome) { alert ("Please use Internet Explorer to open PDF porfolios such as this - Google Chrome does not open PDF portfolios.\n\nNote that singleton PDF files can be opened normally using Chrome."); return; }
        source.className="btn-pdf-show-on";
        source.src="btn-pdf-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-pdf-show-on"){
        source.className="btn-pdf-show-off";
        source.src="btn-pdf-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    }
    else { return; }
}
function fncToggleAllOtherTrainingMasterButtons(parmSource) {
    var arrImgObjs = top.bottomFrame.bottomFrame_Right_Bottom.trainingFrame_Modules_Top.document.getElementsByTagName("img");
    intCountImgObjs = arrImgObjs.length;
    for (var intIdx=0; intIdx<intCountImgObjs; intIdx++) {
      if (arrImgObjs[intIdx].parentNode.id!=parmSource.parentNode.id) {
        if (arrImgObjs[intIdx].className=="btn-training-modules-html-master-show-on") {
            arrImgObjs[intIdx].className="btn-training-modules-html-master-show-off";
            arrImgObjs[intIdx].src="btn-training-modules-html-master-show-off.png";
            arrImgObjs[intIdx].parentNode.href="trainingFrame_Modules_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-modules-word-master-show-on") {
            arrImgObjs[intIdx].className="btn-training-modules-word-master-show-off";
            arrImgObjs[intIdx].src="btn-training-modules-word-master-show-off.png";
            arrImgObjs[intIdx].parentNode.href="trainingFrame_Modules_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-modules-html-test-show-on") {
            arrImgObjs[intIdx].className="btn-training-modules-html-test-show-off";
            arrImgObjs[intIdx].src="btn-training-modules-html-test-show-off.png";
            arrImgObjs[intIdx].parentNode.href="trainingFrame_Modules_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-modules-html-aya-show-on") {
            arrImgObjs[intIdx].className="btn-training-modules-html-aya-show-off";
            arrImgObjs[intIdx].src="btn-training-modules-html-aya-show-off.png";
            arrImgObjs[intIdx].parentNode.href="trainingFrame_Modules_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-modules-html-marcelo-show-on") {
            arrImgObjs[intIdx].className="btn-training-modules-html-marcelo-show-off";
            arrImgObjs[intIdx].src="btn-training-modules-html-marcelo-show-off.png";
            arrImgObjs[intIdx].parentNode.href="trainingFrame_Modules_Right_Bottom.html";
        }
      }
    }
}
function fncToggleAllOtherButtons(parmSource) {
    var arrImgObjs = top.bottomFrame.bottomFrame_Left.document.getElementsByTagName("img");
    intCountImgObjs = arrImgObjs.length;
    for (var intIdx=0; intIdx<intCountImgObjs; intIdx++) {
      if (arrImgObjs[intIdx].parentNode.id!=parmSource.parentNode.id) {
        if (arrImgObjs[intIdx].className=="btn-html-show-on") {
            arrImgObjs[intIdx].className="btn-html-show-off";
            arrImgObjs[intIdx].src="btn-html-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-pdf-show-on") {
            arrImgObjs[intIdx].className="btn-pdf-show-off";
            arrImgObjs[intIdx].src="btn-pdf-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
      }
    }
}
function fncShowOrHideFormatButtonsAccordingToSeldVersion(){
    var strVersToShow=(document.getElementById("V13SP1").checked?"V13SP1":
                       document.getElementById("V13").checked?"V13":
                       document.getElementById("V13onZ").checked?"V13onZ":
                       document.getElementById("V13forK8s").checked?"V13forK8s":
                       document.getElementById("V12onZSP1").checked?"V12onZSP1":
                       document.getElementById("V12onZ").checked?"V12onZ":
                       document.getElementById("V12forK8s").checked?"V12forK8s":
                       document.getElementById("V12SP1").checked?"V12SP1":
                       document.getElementById("V12").checked?"V12":
                       document.getElementById("V11").checked?"V11":
                       document.getElementById("V10").checked?"V10":
                       document.getElementById("9_6").checked?"9_6":
                       document.getElementById("9_5").checked?"9_5":
                       document.getElementById("9_4").checked?"9_4":"V13SP1");
    var SpanToShow=strVersToShow;
    var arrSpanObjs = document.getElementsByTagName("span");
    intCountSpanObjs = arrSpanObjs.length;
    for (var intIdx=0; intIdx<intCountSpanObjs; intIdx++) {
        if (arrSpanObjs[intIdx].className=="V13SP1")    { arrSpanObjs[intIdx].style.display=(SpanToShow=="V13SP1"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V13")       { arrSpanObjs[intIdx].style.display=(SpanToShow=="V13"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V13onZ")    { arrSpanObjs[intIdx].style.display=(SpanToShow=="V13onZ"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V13forK8s") { arrSpanObjs[intIdx].style.display=(SpanToShow=="V13forK8s"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V12onZSP1") { arrSpanObjs[intIdx].style.display=(SpanToShow=="V12onZSP1"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V12onZ")    { arrSpanObjs[intIdx].style.display=(SpanToShow=="V12onZ"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V12SP1")    { arrSpanObjs[intIdx].style.display=(SpanToShow=="V12SP1"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V12forK8s") { arrSpanObjs[intIdx].style.display=(SpanToShow=="V12forK8s"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V12")       { arrSpanObjs[intIdx].style.display=(SpanToShow=="V12"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V11")       { arrSpanObjs[intIdx].style.display=(SpanToShow=="V11"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V10")       { arrSpanObjs[intIdx].style.display=(SpanToShow=="V10"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="9_6")       { arrSpanObjs[intIdx].style.display=(SpanToShow=="9_6"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="9_5")       { arrSpanObjs[intIdx].style.display=(SpanToShow=="9_5"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="9_4")       { arrSpanObjs[intIdx].style.display=(SpanToShow=="9_4"?"inline":"none"); }
    }
}

function bntChangeStyle(parmBtnPressed) { // Toggles the style of the button
  var btn = document.getElementById(parmBtnPressed);
  if (btn.classList.contains("btnNotPressed")) {
    btn.classList.remove("btnNotPressed"); btn.classList.add("btnPressed");
  } else {
    btn.classList.remove("btnPressed"); btn.classList.add("btnNotPressed");
  }
  if (parmBtnPressed === 'play-pause') { play(); } else if (parmBtnPressed === 'shuffle-btn') { shuffle(); }
}
function play() { // Toggles the visibility of the play/pause icon
  var playBtn = document.getElementById('play');
  var pauseBtn = document.getElementById('pause');
  if (playBtn.style.display === 'none') { 
    playBtn.style.display = 'block'; pauseBtn.style.display = 'none';
  } else {
    playBtn.style.display = 'none';  pauseBtn.style.display = 'block';
  }
}
function shuffle() { // Toggles the style of the shuffle indicator
  var shuffleBtn = document.getElementById('shuffle-btn');
  if (shuffleBtn.style.color == 'white' || shuffleBtn.style.color == '') { shuffleBtn.style.color = '#143664'; } else {  shuffleBtn.style.color = 'white';}
}

/*function fncChangeBackgroundColor(parmClickedNode){
    var source;
    if (varUserAgent.InternetExplorer && varUserAgent.InternetExplorer >= 6.0) { source = event.srcElement; } else { source = parmClickedNode.target; }
    //if (source.nodeName=="A") { source = source.parentNode; } // Function may have been triggered because user clicked on text (in which case 'e' is the <a> node) or around it (in which case 'e' is the 'button' object ) - we need to set 'source' to the 'button' node to ensure code below works
    if (source.className=="") { return; }
    if (source.className=="bkgcolor-white" || source.className=="bkgcolor-silver" || source.className=="bkgcolor-black" || source.className=="bkgcolor-black-light" || source.className=="bkgcolor-black-lighter") {
        if (source.id=="bkgcolor-white" ||source.className=="bkgcolor-white" ) { document.getElementById("bkgcolor-white").checked ="true"; }
        if (source.id=="bkgcolor-silver"    ||source.className=="bkgcolor-silver"    ) { document.getElementById("bkgcolor-silver").checked    ="true"; }
        if (source.id=="bkgcolor-black"    ||source.className=="bkgcolor-black"    ) { document.getElementById("bkgcolor-black").checked    ="true"; }
        if (source.id=="bkgcolor-black-light"    ||source.className=="bkgcolor-black-light"    ) { document.getElementById("bkgcolor-black-light").checked    ="true"; }
        if (source.id=="bkgcolor-black-lighter"    ||source.className=="bkgcolor-black-lighter"    ) { document.getElementById("bkgcolor-black-lighter").checked   ="true"; }
        var varWindow = top.bottomFrame.bottomFrame_Right_Bottom.diagramcreation_bottom.window;
        var varBody   = top.bottomFrame.bottomFrame_Right_Bottom.diagramcreation_bottom.document.getElementsByTagName("BODY")[0];
		varBody.style.backgroundColor = "red";
    }
}*/