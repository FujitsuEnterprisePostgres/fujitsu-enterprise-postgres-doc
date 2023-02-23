
var IS_IEXPLORE = !!document.all;
var OPERA = !!window.opera;


function init(){
	adjustLayerPosition("topButton0" ,-220 ,-45);
}

function adjustLayerPosition(name ,offset_x ,offset_y){

	if(!window.adjustLayerPosition[name]){
		if(IS_IEXPLORE || OPERA){
			window.onscroll = init;
			window.onresize = init;
		}else{
			window.onresize = init;
		}
	}

	var point = getLayerPoint(offset_x ,offset_y);
	setLayerPosition(name ,point[0] ,point[1]);

	if(!IS_IEXPLORE){
		clearTimeout(adjustLayerPosition[name]);
		var script = "adjustLayerPosition('" + name + "'," + offset_x + "," + offset_y + ")";
		adjustLayerPosition[name] = setTimeout(script ,100);
	}

}

function getLayerPoint(offset_x ,offset_y){

	var point_x = 0;
	var point_y = 0;
	var Root = /BackCompat/i.test(document.compatMode) ? document.body : document.documentElement;
	point_x = offset_x + Root.clientWidth + (window.pageXOffset || Root.scrollLeft);
	point_y = offset_y + Root.clientHeight + (window.pageYOffset || Root.scrollTop);

	return new Array(point_x ,point_y);

}

function setLayerPosition(name ,point_x ,point_y){

	var object = document.getElementById(name);
	object.style.left = point_x + 'px';
	object.style.top = point_y + 'px';

}
