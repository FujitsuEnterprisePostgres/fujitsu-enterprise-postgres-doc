function getBrowser(){
	ua = new Object();
	var useragent = navigator.userAgent;
	if ( useragent.match( /Opera[\/\s](\d+\.\d+)/ ) && RegExp.$1 >= 6 ){ ua.Opera = RegExp.$1;  return true; }
	if ( useragent.match( /MSIE (\d+\.\d+);/ ) && RegExp.$1 >= 5 ){ ua.InternetExplorer = RegExp.$1;  return true; }
	if ( useragent.match( /Netscape6\/(\d+\.\d+)/ ) ){ ua.Netscape = RegExp.$1;  return true; }
	if ( useragent.match( /Netscape\/(7\.\d+)/ ) ){ ua.Netscape = RegExp.$1;  return true; }
	if ( useragent.match( /^Mozilla\/5\.0.+rv:(\d+\.\d+).+Gecko/ ) && RegExp.$1 >= 1 ){ ua.Mozilla = RegExp.$1;  return true; }
	ua.other = 1;  return false;
}
function fncClearCurrentTitleColor(varNsinc) {
		var intTocAlength=document.getElementsByTagName("a").length-1;
		for (var i=0;i<=intTocAlength;i++){
			var objTocA=document.getElementsByTagName("a")[i];
			if (objTocA.className=="currenttitle"){
				objTocA.className="not_currenttitle";
				if (objTocA.parentNode.childNodes[0+varNsinc].className != "isExpanded1" &&
					 objTocA.parentNode.childNodes[0+varNsinc].className != "isExpanded2" &&
					 objTocA.childNodes[0].className != "single_topic"){
					objTocA.style.backgroundColor = "E6E6E6";
					objTocA.parentNode.parentNode.style.backgroundColor = "E6E6E6";
					objTocA.parentNode.className ="toc_isopen";
				}
				else{
					objTocA.style.backgroundColor = "#FFFFFF";
					objTocA.parentNode.parentNode.style.backgroundColor = "#FFFFFF";
					objTocA.parentNode.className ="toc_isnotopen";
				}
			}
		}
}

getBrowser();

function change(e){
	var source;
	var nsinc=0;
	var rendaringMode = document.documentMode;
	if ( ua.InternetExplorer && ua.InternetExplorer >= 6.0 ){
		source = event.srcElement;
		if ( rendaringMode >= 9 ){ nsinc=1; }
	} else if (ua.Netscape && ua.Netscape > 7.0 ){ source = e.target; nsinc=1;
	} else if (ua.Mozilla && ua.Mozilla > 1.0 ){ 		source = e.target; nsinc=1;
	} else { source = e.target; nsinc=1; }

	if (source.className==""){ return; }

    if (source.className=="not_currenttitle") { // (Marcelo 26-11-20) We re-set 'source' here in case user clicked text of chapter so that it can expand/collapse as if he had clicked the expand/collapse image 
       if (source.parentNode.parentNode.className=="toclevel1_isnotopen"|source.parentNode.parentNode.className=="toclevel2_isnotopen"|source.parentNode.parentNode.className=="toclevel3_isnotopen") {
           source = source.parentNode.getElementsByTagName("img")[0];
       }
    }
    if (source.className=="toc_isnotopen" || source.className=="toc_isopen") { // (Marcelo 27-11-20) We re-set 'source' here in case user clicked the empty area next to the manual name
		if (source.parentNode.className!="toclevel0_isnotopen" && source.parentNode.className!="toclevel0_isopen") { return; } // We do not proceed if user clicked empty area next to chapter name
        source = source.parentNode.getElementsByTagName("img")[0];
    }
    if (source.className=="spanExpandCollapse") { // (Marcelo 27-11-20) We re-set 'source' here in case user clicked text 'Expand all' or 'Collapse all'
        source = source.parentNode.getElementsByTagName("img")[0];
    }
    if (source.className=="tocExpandCollapse") { // (Marcelo 27-11-20) We re-set 'source' here in case user clicked the empty area next to text 'Expand all' or 'Collapse all'
        source = source.getElementsByTagName("img")[0];
    }

	if (source.className=="isCollapsed0"|(source.className=="not_currenttitle" && source.parentNode.parentNode.className=="toclevel0_isnotopen")){
		var source2 = source.parentNode.childNodes;
		var count = source2.length;
		for(var i=0;i<count;i++){
			if (source2[i]&&(source2[i].className!=undefined)) {
				if (source2[i]&&(source2[i].className=="toclevel1"|source2[i].className=="toclevel1_isopen"|source2[i].className=="toclevel1_isnotopen"|source2[i].className=="tocExpandCollapse")) {
				source2[i].style.display = "block";
				}
			}
		}
		var source3 = source.parentNode.childNodes;
		source3[0+nsinc].src = "image/imgTocIsExpanded.gif";
		source.className="isExpanded0";
		if (source3[2+nsinc].className != "currenttitle"){ source.parentNode.className ="toc_isopen"; }
	}
	else if (source.className=="isExpanded0"){
		var source2 = source.parentNode.childNodes;
		var count = source2.length;
		for(var i=0;i<count;i++){
				if (source2[i]&&(source2[i].className=="toclevel1"|source2[i].className=="toclevel1_isopen"|source2[i].className=="toclevel1_isnotopen"|source2[i].className=="tocExpandCollapse")) {
				source2[i].style.display = "none";
			}
		}
		var source3 = source.parentNode.childNodes;
		source3[0+nsinc].src = "image/imgTocIsCollapsed.gif";
		source.className="isCollapsed0";
		if (source3[2+nsinc].className != "currenttitle"){ source.parentNode.className ="toc_isnotopen"; }
	}
	else if (source.className=="isCollapsed1"|(source.className=="not_currenttitle" && source.parentNode.parentNode.className=="toclevel1_isnotopen")){
		var source2 = source.parentNode.parentNode.childNodes;
		var count = source2.length;
		for(var i=0;i<count;i++){
			if (source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel2"|source2[i].childNodes[0+nsinc].className=="toclevel2_isopen"|source2[i].childNodes[0+nsinc].className=="toclevel2_isnotopen")){
				source2[i].childNodes[0+nsinc].style.display = "block";
			}
		}
		var source3 = source.parentNode.childNodes;
		source3[0+nsinc].src = "image/imgTocIsExpanded.gif";
		source.className="isExpanded1";
		if (source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "E6E6E6";
			source.parentNode.parentNode.style.backgroundColor = "E6E6E6";
			source.parentNode.className ="toc_isopen";
		}
	}
	else if (source.className=="isExpanded1"){
		var source2 = source.parentNode.parentNode.childNodes;
		var count = source2.length;
		for(var i=0;i<count;i++){
			if (source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel2"|source2[i].childNodes[0+nsinc].className=="toclevel2_isopen"|source2[i].childNodes[0+nsinc].className=="toclevel2_isnotopen")){
				source2[i].childNodes[0+nsinc].style.display = "none";
			}
		}
		var source3 = source.parentNode.childNodes;
		source3[0+nsinc].src = "image/imgTocIsCollapsed.gif";
		source.className="isCollapsed1";
		if (source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "#FFFFFF";
			source.parentNode.parentNode.style.backgroundColor = "#FFFFFF";
			source.parentNode.className ="toc_isnotopen";
		}
	}

	else if (source.className=="isCollapsed2"|(source.className=="not_currenttitle" && source.parentNode.parentNode.className=="isCollapsed2")){
		var source2 = source.parentNode.parentNode.childNodes;
		var count = source2.length;
		for(var i=0;i<count;i++){
			if (source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel3")){
				source2[i].childNodes[0+nsinc].style.display = "block";
			}
		}
		var source3 = source.parentNode.childNodes;
		source3[0+nsinc].src = "image/imgTocIsExpanded.gif";
		source.className="isExpanded2";
		if (source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "E6E6E6";
			source.parentNode.parentNode.style.backgroundColor = "E6E6E6";
			source.parentNode.className ="toc_isopen";
		}
	}
	else if (source.className=="isExpanded2"){
		var source2 = source.parentNode.parentNode.childNodes;
		var count = source2.length;
		for(var i=0;i<count;i++){
			if (source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel3")){
				source2[i].childNodes[0+nsinc].style.display = "none";
			}
		}
		var source3 = source.parentNode.childNodes;
		source3[0+nsinc].src = "image/imgTocIsCollapsed.gif";
		source.className="isCollapsed2";
		if (source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "#FFFFFF";
			source.parentNode.parentNode.style.backgroundColor = "#FFFFFF";
			source.parentNode.className ="toc_isnotopen";
		}
	}
	else if (source.className=="actionExpandAll"){
		var oElements = source.parentNode.parentNode.getElementsByTagName("img");
		var count = oElements.length;
		for(var i=0;i<count;i++){
			if (oElements[i]&&(oElements[i].className == "isCollapsed1")){
				oElements[i].className = "isExpanded1";
				oElements[i].src = "image/imgTocIsExpanded.gif";
				if (oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "E6E6E6";
					oElements[i].parentNode.parentNode.style.backgroundColor = "E6E6E6";
					oElements[i].parentNode.className ="toc_isopen";
				}
			}
			else if (oElements[i]&&(oElements[i].className == "isCollapsed2")){
				oElements[i].className = "isExpanded2";
				oElements[i].src = "image/imgTocIsExpanded.gif";
				if (oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "E6E6E6";
					oElements[i].parentNode.parentNode.style.backgroundColor = "E6E6E6";
					oElements[i].parentNode.className ="toc_isopen";
				}
			}
		}
		oElements = source.parentNode.parentNode.getElementsByTagName("div");
		count = oElements.length;
		for(var i=0;i<count;i++){
			if (oElements[i]&&(oElements[i].className == "toclevel1" || oElements[i].className == "toclevel2" || oElements[i].className == "toclevel2_isnotopen" || oElements[i].className == "toclevel3" || oElements[i].className == "toclevel3_isnotopen")){
				oElements[i].style.display = "block";
			}
		}
		source.src = "image/imgTocActionCollapseAll.gif";
		var source2 = source.parentNode.childNodes;
                source2[2+nsinc].firstChild.nodeValue=CONTENTS_COLLAPSE;
       		source.className="actionCollapseAll";
	}
	else if (source.className=="actionCollapseAll"){
		var oElements = source.parentNode.parentNode.getElementsByTagName("img");
		var count = oElements.length;
		for(var i=0;i<count;i++){
			if (oElements[i]&&(oElements[i].className == "isExpanded1")){
				oElements[i].className = "isCollapsed1";
				oElements[i].src = "image/imgTocIsCollapsed.gif";
				if (oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.parentNode.style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.className ="toc_isnotopen";
				}
			}
			else if (oElements[i]&&(oElements[i].className == "isExpanded2")){
				oElements[i].className = "isCollapsed2";
				oElements[i].src = "image/imgTocIsCollapsed.gif";
				if (oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.parentNode.style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.className ="toc_isnotopen";
				}
			}
		}
		oElements = source.parentNode.parentNode.getElementsByTagName("div");
		count = oElements.length;
		for(var i=0;i<count;i++){
			if (oElements[i]&&(oElements[i].className == "toclevel2" || oElements[i].className == "toclevel2_isnotopen" || oElements[i].className == "toclevel3" || oElements[i].className == "toclevel3_isnotopen")){
				oElements[i].style.display = "none";
			}
		}
		source.src = "image/imgTocActionExpandAll.gif";
		var source2 = source.parentNode.childNodes;
           	source2[2+nsinc].firstChild.nodeValue=CONTENTS_EXPAND;
  		source.className="actionExpandAll";
	}
	else if (source.className=="not_currenttitle" || source.className=="single_topic" || source.className=="open_title"){
        fncClearCurrentTitleColor(nsinc);
		if (source.className=="not_currenttitle" || source.className=="open_title"){
			source.className="currenttitle";
			source.style.backgroundColor = "#BFBFBF";
			source.parentNode.parentNode.style.backgroundColor = "#BFBFBF";
			source.parentNode.className ="toc_current";
		}
		else{
			source.parentNode.className="currenttitle";
			source.parentNode.style.backgroundColor = "#BFBFBF";
			source.parentNode.parentNode.parentNode.style.backgroundColor = "#BFBFBF";
			source.parentNode.parentNode.className ="toc_current";
		}
	}
}
