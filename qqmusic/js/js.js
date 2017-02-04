// JavaScript Document
var arr = [
			"img/jsImg/img1.gif",
			"img/jsImg/img2.jpg",
			"img/jsImg/img3.jpg",
			"img/jsImg/img4.jpg",
			"img/jsImg/img5.jpg",
			"img/jsImg/img6.jpg",
			"img/jsImg/img7.jpg"
		]
window.onload = function(){
	var fix = document.getElementById("fixed");
	var delite = fix.querySelector(".qx a");
	delite.onclick = function(){
		fix.style.display = "none";
	};
	var top = document.querySelector("#left .top");
	var p = top.getElementsByTagName("p")[0];
	//var a = p.getElementsByTagName("a");
	var prev = top.querySelector(".lt");
	var next = top.querySelector(".rt");
	var img = top.getElementsByTagName("a")[0];
	var pics = img.getElementsByTagName("img");
	img.innerHTML = '<img class="img1" src="'+arr[0]+'"/><img class="img1" src="'+arr[1]+'"/>';
	var n = 0;
	var timer = 0;
	top.onmouseover = function(){
		clearInterval(timer);
	};	
	top.onmouseout = function(){
		timer = setInterval(fn,2000);
	};	
	prev.onclick = function() {
		pics[1].src = arr[n];
		img.style.left = -700 + 'px';
		pics[0].src = arr[n = n > 0 ? --n : arr.length - 1];
		mTween(img,{left: 0},600,"linear");
	};

	next.onclick = fn;
	timer = setInterval(fn,2000);
	function fn(){
		pics[0].src = arr[n]; 
		img.style.left = 0;
		pics[1].src = arr[n = n < arr.length - 1 ? ++n : 0];
		mTween(img,{left:-700},600,"linear");		
	}
	//top.innerHTML += '<p></p>';
	//console.log(p)
	//for(var i = 0;i<arr.length;i++){	
		//p.innerHTML = '<a href="#"></a>'
		//console.log(a);
	//}
}; 