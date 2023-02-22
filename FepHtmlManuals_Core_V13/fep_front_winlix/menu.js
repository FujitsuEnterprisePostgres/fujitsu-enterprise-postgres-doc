
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

getBrowser();

function init(){

	var nsinc=0;
	var rendaringMode = document.documentMode;

	if( ua.InternetExplorer && ua.InternetExplorer >= 6.0 ){
		if( rendaringMode >= 9 ){
			nsinc=1;
		}
	}
	else if(ua.Netscape && ua.Netscape > 7.0 ){
		nsinc=1;
	}
	else if(ua.Mozilla && ua.Mozilla > 1.0 ){
		nsinc=1;
	}
	else{
		nsinc=1;
	}

	var oElements = document.getElementsByTagName("img");

	var count = oElements.length;
	for(var i=0;i<count;i++){
		if(oElements[i]&&(oElements[i].className == "open1")){
			oElements[i].className = "folding1";
			oElements[i].src = "image/menufold.gif";
			if(oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
				oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#FFFFFF";
				oElements[i].parentNode.parentNode.style.backgroundColor = "#FFFFFF";
				oElements[i].parentNode.className ="toc_notopen";
			}
		}else if(oElements[i]&&(oElements[i].className == "open2")){
			oElements[i].className = "folding2";
			oElements[i].src = "image/menufold.gif";

			if(oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
				oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#FFFFFF";
				oElements[i].parentNode.parentNode.style.backgroundColor = "#FFFFFF";
				oElements[i].parentNode.className ="toc_notopen";
				oElements[i].parentNode.parentNode.className ="toclevel2";
			}
		}else if(oElements[i]&&(oElements[i].className == "openall")){
			oElements[i].className="foldingall";
			oElements[i].src = "image/menu-openall.gif";

			oElements[i].parentNode.childNodes[2+nsinc].firstChild.nodeValue=CONTENTS_EXPAND;

		}
	}

	oElements = document.getElementsByTagName("div");

	count = oElements.length;
	for(var i=0;i<count;i++){
		if(oElements[i]&&(oElements[i].className == "toclevel2" || oElements[i].className == "toclevel3")){
			oElements[i].style.display = "none";
		}
	}
}


function change(e){
	var source;
	var nsinc=0;
	var rendaringMode = document.documentMode;

	if( ua.InternetExplorer && ua.InternetExplorer >= 6.0 ){
		
		source = event.srcElement;
		if( rendaringMode >= 9 ){
			nsinc=1;
		}
	}
	else if(ua.Netscape && ua.Netscape > 7.0 ){

		source = e.target;
		nsinc=1;
	}
	else if(ua.Mozilla && ua.Mozilla > 1.0 ){

		source = e.target;
		nsinc=1;
	}
	else{
		source = e.target;
		nsinc=1;
	}


	if(source.className==""){
		return;
	}

	if(source.className=="folding1"){

		var source2 = source.parentNode.parentNode.childNodes;

		var count = source2.length;
		for(var i=0;i<count;i++){
			if(source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel2")){
				source2[i].childNodes[0+nsinc].style.display = "block";
			}
		}

		var source3 = source.parentNode.childNodes;

		source3[0+nsinc].src = "image/menuopen.gif";
		source.className="open1";

		if(source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "#CACAC7";
			source.parentNode.parentNode.style.backgroundColor = "#CACAC7";
			source.parentNode.className ="toc_open";
		}
	}
	else if(source.className=="open1"){

		var source2 = source.parentNode.parentNode.childNodes;

		var count = source2.length;
		for(var i=0;i<count;i++){
			if(source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel2")){
				source2[i].childNodes[0+nsinc].style.display = "none";
			}
		}

		var source3 = source.parentNode.childNodes;

		source3[0+nsinc].src = "image/menufold.gif";
		source.className="folding1";

		if(source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "#FFFFFF";
			source.parentNode.parentNode.style.backgroundColor = "#FFFFFF";
			source.parentNode.className ="toc_notopen";
		}
	}


	else if(source.className=="folding2"){

		var source2 = source.parentNode.parentNode.childNodes;

		var count = source2.length;
		for(var i=0;i<count;i++){
			if(source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel3")){
				source2[i].childNodes[0+nsinc].style.display = "block";
			}
		}

		var source3 = source.parentNode.childNodes;

		source3[0+nsinc].src = "image/menuopen.gif";
		source.className="open2";

		if(source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "#CACAC7";
			source.parentNode.parentNode.style.backgroundColor = "#CACAC7";
			source.parentNode.className ="toc_open";
		}
	}
	else if(source.className=="open2"){

		var source2 = source.parentNode.parentNode.childNodes;

		var count = source2.length;
		for(var i=0;i<count;i++){
			if(source2[i].childNodes[0]&&(source2[i].childNodes[0+nsinc].className=="toclevel3")){
				source2[i].childNodes[0+nsinc].style.display = "none";
			}
		}

		var source3 = source.parentNode.childNodes;
		source3[0+nsinc].src = "image/menufold.gif";
		source.className="folding2";

		if(source3[2+nsinc].className != "currenttitle"){
			source3[2+nsinc].style.backgroundColor = "#FFFFFF";
			source.parentNode.parentNode.style.backgroundColor = "#FFFFFF";
			source.parentNode.className ="toc_notopen";
		}
	}

	else if(source.className=="foldingall"){

		var oElements = document.getElementsByTagName("img");

		var count = oElements.length;
		for(var i=0;i<count;i++){

			if(oElements[i]&&(oElements[i].className == "folding1")){
				oElements[i].className = "open1";
				oElements[i].src = "image/menuopen.gif";

				if(oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#CACAC7";
					oElements[i].parentNode.parentNode.style.backgroundColor = "#CACAC7";
					oElements[i].parentNode.className ="toc_open";
				}
			}

			else if(oElements[i]&&(oElements[i].className == "folding2")){
				oElements[i].className = "open2";
				oElements[i].src = "image/menuopen.gif";

				if(oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#CACAC7";
					oElements[i].parentNode.parentNode.style.backgroundColor = "#CACAC7";
					oElements[i].parentNode.className ="toc_open";
				}
			}
		}

		oElements = document.getElementsByTagName("div");

		count = oElements.length;
		for(var i=0;i<count;i++){
			if(oElements[i]&&(oElements[i].className == "toclevel2" || oElements[i].className == "toclevel3")){
				oElements[i].style.display = "block";
			}
		}

		source.src = "image/menu-openall2.gif";
		var source2 = source.parentNode.childNodes;
                source2[2+nsinc].firstChild.nodeValue=CONTENTS_COLLAPSE;
       		source.className="openall";
	}
	else if(source.className=="openall"){
		var oElements = document.getElementsByTagName("img");

		var count = oElements.length;
		for(var i=0;i<count;i++){

			if(oElements[i]&&(oElements[i].className == "open1")){
				oElements[i].className = "folding1";
				oElements[i].src = "image/menufold.gif";
				if(oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.parentNode.style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.className ="toc_notopen";
				}
			}
			else if(oElements[i]&&(oElements[i].className == "open2")){

				oElements[i].className = "folding2";
				oElements[i].src = "image/menufold.gif";

				if(oElements[i].parentNode.childNodes[2+nsinc].className != "currenttitle"){
					oElements[i].parentNode.childNodes[2+nsinc].style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.parentNode.style.backgroundColor = "#FFFFFF";
					oElements[i].parentNode.className ="toc_notopen";
				}
			}
		}

		oElements = document.getElementsByTagName("div");

		count = oElements.length;
		for(var i=0;i<count;i++){
			if(oElements[i]&&(oElements[i].className == "toclevel2" || oElements[i].className == "toclevel3")){
				oElements[i].style.display = "none";
			}
		}

		source.src = "image/menu-openall.gif";
		var source2 = source.parentNode.childNodes;
           	source2[2+nsinc].firstChild.nodeValue=CONTENTS_EXPAND;
  		source.className="foldingall";
	}

	else if(source.className=="not_currenttitle" || source.className=="single_topic" || source.className=="open_title"){

		var intTocAlength=document.getElementsByTagName("a").length-1;

		for (var i=0;i<intTocAlength;i++){

			var objTocA=document.getElementsByTagName("a")[i];

			if(objTocA.className=="currenttitle"){
				objTocA.className="not_currenttitle";

				if(objTocA.parentNode.childNodes[0+nsinc].className != "folding1" &&
					 objTocA.parentNode.childNodes[0+nsinc].className != "folding2" &&
					 objTocA.childNodes[0].className != "single_topic"){

					objTocA.style.backgroundColor = "#CACAC7";
					objTocA.parentNode.parentNode.style.backgroundColor = "#CACAC7";
					objTocA.parentNode.className ="toc_open";
				}
				else{
					objTocA.style.backgroundColor = "#FFFFFF";
					objTocA.parentNode.parentNode.style.backgroundColor = "#FFFFFF";
					objTocA.parentNode.className ="toc_notopen";
				}
			}
		}


		if(source.className=="not_currenttitle" || source.className=="open_title"){

			source.className="currenttitle";
			source.style.backgroundColor = "#F8C6C5";
			source.parentNode.parentNode.style.backgroundColor = "#F8C6C5";
			source.parentNode.className ="toc_current";
		}
		else{
			source.parentNode.className="currenttitle";
			source.parentNode.style.backgroundColor = "#F8C6C5";
			source.parentNode.parentNode.parentNode.style.backgroundColor = "#F8C6C5";
			source.parentNode.parentNode.className ="toc_current";
		}
	}

}
