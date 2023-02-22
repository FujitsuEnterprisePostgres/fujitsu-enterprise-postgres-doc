var constBottomFrameLeft_Width_Minimum =   0;
var constBottomFrameLeft_Width_Medium  = 368;
var constBottomFrameLeft_Width_Ideal   = 586;

function fncGetBrowser(){
    ua = new Object();
    var useragent = navigator.userAgent;
    if ( useragent.match( /Opera[\/\s](\d+\.\d+)/ ) && RegExp.$1 >= 6 ){ ua.Opera = RegExp.$1;  return true; }
    if ( useragent.match( /MSIE (\d+\.\d+);/ ) && RegExp.$1 >= 5 ){ ua.InternetExplorer = RegExp.$1;  return true; }
    if ( useragent.match( /Netscape6\/(\d+\.\d+)/ ) ){ ua.Netscape = RegExp.$1;  return true; }
    if ( useragent.match( /Chrome\/(\d+)/ ) && RegExp.$1 >= 1 ){ ua.Chrome = RegExp.$1;  return true; }
    if ( useragent.match( /C\/(7\.\d+)/ ) ){ ua.Netscape = RegExp.$1;  return true; }
    if ( useragent.match( /^Mozilla\/5\.0.+rv:(\d+\.\d+).+Gecko/ ) && RegExp.$1 >= 1 ){ ua.Mozilla = RegExp.$1;  return true; }
    ua.other = 1;  return false;
}

fncGetBrowser();

function fncShowOrHideContent(e){
    var source;
    if (ua.InternetExplorer && ua.InternetExplorer >= 6.0) { source = event.srcElement; } else { source = e.target; }
    if (source.className=="") { return; }
    if (source.className=="versSelection" || source.className=="versSelV11" || source.className=="versSelV10" || source.className=="versSel9.6" || source.className=="versSel9.5" || source.className=="versSel9.4"){
        if (source.id=="V11"   ||source.className=="versSelV11"   ) { document.getElementById("V11").checked    ="true"; }
        if (source.id=="V10"   ||source.className=="versSelV10"   ) { document.getElementById("V10").checked    ="true"; }
        if (source.id=="9.6"   ||source.className=="versSel9.6"   ) { document.getElementById("9.6").checked    ="true"; }
        if (source.id=="9.5"   ||source.className=="versSel9.5"   ) { document.getElementById("9.5").checked    ="true"; }
        if (source.id=="9.4"   ||source.className=="versSel9.4"   ) { document.getElementById("9.4").checked    ="true"; }
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
        if (source.parentNode.type == "portfolio" && ua.Chrome) { alert ("Please use Internet Explorer to open PDF porfolios such as this - Google Chrome does not open PDF portfolios.\n\nNote that singleton PDF files can be opened normally using Chrome."); return; }
        source.className="btn-pdf-show-on";
        source.src="btn-pdf-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-pdf-show-on"){
        source.className="btn-pdf-show-off";
        source.src="btn-pdf-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-marketing-materials-show-off"){
        source.className="btn-marketing-materials-show-on";
        source.src="btn-marketing-materials-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-materials-show-on"){
        source.className="btn-marketing-materials-show-off";
        source.src="btn-marketing-materials-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-campaign-info-show-off"){
        source.className="btn-campaign-info-show-on";
        source.src="btn-campaign-info-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-campaign-info-show-on"){
        source.className="btn-campaign-info-show-off";
        source.src="btn-campaign-info-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-website-elements-show-off"){
        source.className="btn-website-elements-show-on";
        source.src="btn-website-elements-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-website-elements-show-on"){
        source.className="btn-website-elements-show-off";
        source.src="btn-website-elements-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-sharepoint-files-show-off"){
        source.className="btn-sharepoint-files-show-on";
        source.src="btn-sharepoint-files-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-sharepoint-files-show-on"){
        source.className="btn-sharepoint-files-show-off";
        source.src="btn-sharepoint-files-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-google-our-site-show-off"){
        source.className="btn-google-our-site-show-on";
        source.src="btn-google-our-site-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-google-our-site-show-on"){
        source.className="btn-google-our-site-show-off";
        source.src="btn-google-our-site-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-tasks-show-off"){
        source.className="btn-marketing-tasks-show-on";
        source.src="btn-marketing-tasks-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-tasks-show-on"){
        source.className="btn-marketing-tasks-show-off";
        source.src="btn-marketing-tasks-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-fep-ae-trial-show-off"){
        source.className="btn-fep-ae-trial-show-on";
        source.src="btn-fep-ae-trial-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-fep-ae-trial-show-on"){
        source.className="btn-fep-ae-trial-show-off";
        source.src="btn-fep-ae-trial-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-marketing-calendar-show-off"){
        source.className="btn-marketing-calendar-show-on";
        source.src="btn-marketing-calendar-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-calendar-show-on"){
        source.className="btn-marketing-calendar-show-off";
        source.src="btn-marketing-calendar-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-kb-show-off"){
        source.className="btn-marketing-kb-show-on";
        source.src="btn-marketing-kb-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-kb-show-on"){
        source.className="btn-marketing-kb-show-off";
        source.src="btn-marketing-kb-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-misc-show-off"){
        source.className="btn-marketing-misc-show-on";
        source.src="btn-marketing-misc-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-marketing-misc-show-on"){
        source.className="btn-marketing-misc-show-off";
        source.src="btn-marketing-misc-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-training-modules-show-off"){
        source.className="btn-training-modules-show-on";
        source.src="btn-training-modules-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-training-modules-show-on"){
        source.className="btn-training-modules-show-off";
        source.src="btn-training-modules-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-training-modules-html-master-show-off"){
        source.className="btn-training-modules-html-master-show-on";
        source.src="btn-training-modules-html-master-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-html-master-show-on"){
        source.className="btn-training-modules-html-master-show-off";
        source.src="btn-training-modules-html-master-show-off.png";
        source.parentNode.href="Talent_TrainingModules_NoneSelected.html";
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-word-master-show-off"){
        source.className="btn-training-modules-word-master-show-on";
        source.src="btn-training-modules-word-master-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-word-master-show-on"){
        source.className="btn-training-modules-word-master-show-off";
        source.src="btn-training-modules-word-master-show-off.png";
        source.parentNode.href="Talent_TrainingModules_NoneSelected.html";
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-html-test-show-off"){
        source.className="btn-training-modules-html-test-show-on";
        source.src="btn-training-modules-html-test-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-html-test-show-on"){
        source.className="btn-training-modules-html-test-show-off";
        source.src="btn-training-modules-html-test-show-off.png";
        source.parentNode.href="Talent_TrainingModules_NoneSelected.html";
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-html-aya-show-off"){
        source.className="btn-training-modules-html-aya-show-on";
        source.src="btn-training-modules-html-aya-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-html-aya-show-on"){
        source.className="btn-training-modules-html-aya-show-off";
        source.src="btn-training-modules-html-aya-show-off.png";
        source.parentNode.href="Talent_TrainingModules_NoneSelected.html";
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-html-marcelo-show-on"){
        source.className="btn-training-modules-html-marcelo-show-off";
        source.src="btn-training-modules-html-marcelo-show-off.png";
        source.parentNode.href="Talent_TrainingModules_NoneSelected.html";
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-modules-html-marcelo-show-off"){
        source.className="btn-training-modules-html-marcelo-show-on";
        source.src="btn-training-modules-html-marcelo-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherTrainingMasterButtons(source);
    } else if (source.className=="btn-training-images-and-animations-show-off"){
        source.className="btn-training-images-and-animations-show-on";
        source.src="btn-training-images-and-animations-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-training-images-and-animations-show-on"){
        source.className="btn-training-images-and-animations-show-off";
        source.src="btn-training-images-and-animations-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-training-walkthru-show-off"){
        source.className="btn-training-walkthru-show-on";
        source.src="btn-training-walkthru-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-training-walkthru-show-on"){
        source.className="btn-training-walkthru-show-off";
        source.src="btn-training-walkthru-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-training-tasks-show-off"){
        source.className="btn-training-tasks-show-on";
        source.src="btn-training-tasks-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-training-tasks-show-on"){
        source.className="btn-training-tasks-show-off";
        source.src="btn-training-tasks-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="html_ja_show_off"){
        source.className="html_ja_show_on";
        source.src="html_ja_show_on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="html_ja_show_on"){
        source.className="html_ja_show_off";
        source.src="html_ja_show_off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="pdf_ja_show_off"){
        if (source.parentNode.type == "portfolio" && ua.Chrome) { alert ("Google Chrome does not open PDF portfolios such as this - please use Internet Explorer to open PDF porfolios.\n\nNote that singleton PDF files can be opened normally using Chrome."); return; }
        source.className="pdf_ja_show_on";
        source.src="pdf_ja_show_on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="pdf_ja_show_on"){
        source.className="pdf_ja_show_off";
        source.src="pdf_ja_show_off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-manual-set-v11-show-off"){
        source.className="btn-manual-set-v11-show-on";
        source.src="btn-manual-set-v11-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-manual-set-v11-show-on"){
        source.className="btn-manual-set-v11-show-off";
        source.src="btn-manual-set-v11-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-manual-set-v10-show-off"){
        source.className="btn-manual-set-v10-show-on";
        source.src="btn-manual-set-v10-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-manual-set-v10-show-on"){
        source.className="btn-manual-set-v10-show-off";
        source.src="btn-manual-set-v10-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-manual-set-v9-6-show-off"){
        source.className="btn-manual-set-v9-6-show-on";
        source.src="btn-manual-set-v9.6-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-manual-set-v9-6-show-on"){
        source.className="btn-manual-set-v9-6-show-off";
        source.src="btn-manual-set-v9.6-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-manual-set-v9-5-show-off"){
        source.className="btn-manual-set-v9-5-show-on";
        source.src="btn-manual-set-v9.5-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-manual-set-v9-5-show-on"){
        source.className="btn-manual-set-v9-5-show-off";
        source.src="btn-manual-set-v9.5-show-off.png";
        source.parentNode.href="bottomFrame_Right_Bottom.html";
    } else if (source.className=="btn-manual-set-v9-4-show-off"){
        source.className="btn-manual-set-v9-4-show-on";
        source.src="btn-manual-set-v9.4-show-on.png";
        source.parentNode.href=source.parentNode.id;
        fncToggleAllOtherButtons(source);
    } else if (source.className=="btn-manual-set-v9-4-show-on"){
        source.className="btn-manual-set-v9-4-show-off";
        source.src="btn-manual-set-v9.4-show-off.png";
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
        if (arrImgObjs[intIdx].className=="btn-marketing-materials-show-on") {
            arrImgObjs[intIdx].className="btn-marketing-materials-show-off";
            arrImgObjs[intIdx].src="btn-marketing-materials-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-campaign-info-show-on") {
            arrImgObjs[intIdx].className="btn-campaign-info-show-off";
            arrImgObjs[intIdx].src="btn-campaign-info-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-website-elements-show-on") {
            arrImgObjs[intIdx].className="btn-website-elements-show-off";
            arrImgObjs[intIdx].src="btn-website-elements-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-sharepoint-files-show-on") {
            arrImgObjs[intIdx].className="btn-sharepoint-files-show-off";
            arrImgObjs[intIdx].src="btn-sharepoint-files-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-google-our-site-show-on") {
            arrImgObjs[intIdx].className="btn-google-our-site-show-off";
            arrImgObjs[intIdx].src="btn-google-our-site-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-marketing-tasks-show-on") {
            arrImgObjs[intIdx].className="btn-marketing-tasks-show-off";
            arrImgObjs[intIdx].src="btn-marketing-tasks-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-fep-ae-trial-show-on") {
            arrImgObjs[intIdx].className="btn-fep-ae-trial-show-off";
            arrImgObjs[intIdx].src="btn-fep-ae-trial-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-marketing-calendar-show-on") {
            arrImgObjs[intIdx].className="btn-marketing-calendar-show-off";
            arrImgObjs[intIdx].src="btn-marketing-calendar-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-marketing-kb-show-on") {
            arrImgObjs[intIdx].className="btn-marketing-kb-show-off";
            arrImgObjs[intIdx].src="btn-marketing-kb-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-marketing-misc-show-on") {
            arrImgObjs[intIdx].className="btn-marketing-misc-show-off";
            arrImgObjs[intIdx].src="btn-marketing-misc-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-modules-show-on") {
            arrImgObjs[intIdx].className="btn-training-modules-show-off";
            arrImgObjs[intIdx].src="btn-training-modules-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-images-and-animations-show-on") {
            arrImgObjs[intIdx].className="btn-training-images-and-animations-show-off";
            arrImgObjs[intIdx].src="btn-training-images-and-animations-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-walkthru-show-on") {
            arrImgObjs[intIdx].className="btn-training-walkthru-show-off";
            arrImgObjs[intIdx].src="btn-training-walkthru-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-training-tasks-show-on") {
            arrImgObjs[intIdx].className="btn-training-tasks-show-off";
            arrImgObjs[intIdx].src="btn-training-tasks-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="html_ja_show_on") {
            arrImgObjs[intIdx].className="html_ja_show_off";
            arrImgObjs[intIdx].src="html_ja_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="pdf_ja_show_on") {
            arrImgObjs[intIdx].className="pdf_ja_show_off";
            arrImgObjs[intIdx].src="pdf_ja_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-manual-set-v11-show-on") {
            arrImgObjs[intIdx].className="btn-manual-set-v11-show-off";
            arrImgObjs[intIdx].src="btn-manual-set-v11-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-manual-set-v10-show-on") {
            arrImgObjs[intIdx].className="btn-manual-set-v11-show-off";
            arrImgObjs[intIdx].src="btn-manual-set-v10-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-manual-set-v9-6-show-on") {
            arrImgObjs[intIdx].className="btn-manual-set-v9-6-show-off";
            arrImgObjs[intIdx].src="btn-manual-set-v9.6-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-manual-set-v9-5-show-on") {
            arrImgObjs[intIdx].className="btn-manual-set-v9-5-show-off";
            arrImgObjs[intIdx].src="btn-manual-set-v9.5-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="btn-manual-set-v9-4-show-on") {
            arrImgObjs[intIdx].className="btn-manual-set-v9-4-show-off";
            arrImgObjs[intIdx].src="btn-manual-set-v9.4-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="bl_show_on") {
            arrImgObjs[intIdx].className="bl_show_off";
            arrImgObjs[intIdx].src="bl_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="br_show_on") {
            arrImgObjs[intIdx].className="br_show_off";
            arrImgObjs[intIdx].src="br_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="cs_show_on") {
            arrImgObjs[intIdx].className="cs_show_off";
            arrImgObjs[intIdx].src="cs_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="ds_show_on") {
            arrImgObjs[intIdx].className="ds_show_off";
            arrImgObjs[intIdx].src="ds_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="eb_show_on") {
            arrImgObjs[intIdx].className="eb_show_off";
            arrImgObjs[intIdx].src="eb_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="gb_show_on") {
            arrImgObjs[intIdx].className="gb_show_off";
            arrImgObjs[intIdx].src="gb_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="ps_show_on") {
            arrImgObjs[intIdx].className="ps_show_off";
            arrImgObjs[intIdx].src="ps_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="sv_show_on") {
            arrImgObjs[intIdx].className="sv_show_off";
            arrImgObjs[intIdx].src="sv_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="ts_show_on") {
            arrImgObjs[intIdx].className="ts_show_off";
            arrImgObjs[intIdx].src="ts_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
        if (arrImgObjs[intIdx].className=="wp_show_on") {
            arrImgObjs[intIdx].className="wp_show_off";
            arrImgObjs[intIdx].src="wp_show_off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
      }
    }
/*var arrImgObjs = top.topFrame.document.getElementsByTagName("img");
    intCountImgObjs = arrImgObjs.length;
    for (var intIdx=0; intIdx<intCountImgObjs; intIdx++) {
      if (arrImgObjs[intIdx].parentNode.id!=parmSource.parentNode.id) {
        if (arrImgObjs[intIdx].className=="btn-fujitsu-site-global-show-on") {
            arrImgObjs[intIdx].className="btn-fujitsu-site-global-show-off";
            arrImgObjs[intIdx].src="btn-fujitsu-site-global-show-off.png";
            arrImgObjs[intIdx].parentNode.href="bottomFrame_Right_Bottom.html";
        }
      }
    } */
}
function fncShowOrHideFormatButtonsAccordingToSeldVersion(){
    var strVersToShow=(document.getElementById("V11").checked?"V11":
                       document.getElementById("V10").checked?"V10":
                       document.getElementById("9.6").checked?"9_6":
                       document.getElementById("9.5").checked?"9_5":
                       document.getElementById("9.4").checked?"9_4":"V11");
    var SpanToShow=strVersToShow;
    var arrSpanObjs = document.getElementsByTagName("span");
    intCountSpanObjs = arrSpanObjs.length;
    for (var intIdx=0; intIdx<intCountSpanObjs; intIdx++) {
        if (arrSpanObjs[intIdx].className=="V11") { arrSpanObjs[intIdx].style.display=(SpanToShow=="V11"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="V10") { arrSpanObjs[intIdx].style.display=(SpanToShow=="V10"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="9_6") { arrSpanObjs[intIdx].style.display=(SpanToShow=="9_6"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="9_5") { arrSpanObjs[intIdx].style.display=(SpanToShow=="9_5"?"inline":"none"); }
        if (arrSpanObjs[intIdx].className=="9_4") { arrSpanObjs[intIdx].style.display=(SpanToShow=="9_4"?"inline":"none"); }
    }
}
function fncShowOrHideCreationDate(parmShowOrHideCreationDate){
    var bolShowCreationDate=(parmShowOrHideCreationDate?"block":"none");
    var arrSpanObjs = document.getElementsByTagName("div");
    intCountSpanObjs = arrSpanObjs.length;
    for (var intIdx=0; intIdx<intCountSpanObjs; intIdx++) {
        if (arrSpanObjs[intIdx].className=="genDate" || arrSpanObjs[intIdx].className=="genDate_Just1Button" || arrSpanObjs[intIdx].className=="genDate_Just2ndButton") 
        { arrSpanObjs[intIdx].style.display=bolShowCreationDate; }
    }
}