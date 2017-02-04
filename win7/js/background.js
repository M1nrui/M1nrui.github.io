(function(){
	var canvas = document.getElementById('canvas');
  	var ctx = canvas.getContext('2d');
  	var w = canvas.width = window.innerWidth;    
  	var h = canvas.height = window.innerHeight;
  	var stars = [];
  	var count = 0;
  	var maxStars = 2000;  //星星总数，不能超过2000
  	
  	var canvas2 = document.createElement('canvas');
  	var	ctx2 = canvas2.getContext('2d');
	canvas2.width = 100;
	canvas2.height = 100;
	var half = canvas2.width / 2;  //画圆的半径；
	// 用canvas绘制一个矩形，并用放射状/圆形渐变进行填充(x0,y0,r0,x1,y1,r1)开始时圆的半径和坐标，渐变结束圆的半径和坐标
  	var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  	//定义一个矩形的渐变(stop,color) 表示渐变中开始与结束之间的位置(及开始于结束的一半)和颜色
	gradient2.addColorStop(0.025, '#fff');  //最中间画一个白色的小圆
	gradient2.addColorStop(0.1, 'hsl(' + 217 + ', 61%, 33%)');  //色调，饱和度，亮度
	gradient2.addColorStop(0.25, 'hsl(' + 217 + ', 64%, 6%)');
	gradient2.addColorStop(1, 'transparent');  //透明
	
	//填充矩形
	ctx2.fillStyle = gradient2;
	//开始绘制
	ctx2.beginPath();
	//画圆(圆心x，圆心Y,半径，起始弧度，结束弧度)
	ctx2.arc(half, half, half, 0, Math.PI * 2); //给一个圆型，包裹上面画的渐变的圆
	//填充
	ctx2.fill();
	
	//随机数
	function random(min, max) {
	  if (arguments.length < 2) {
	    max = min;
	    min = 0;
	  }
	
	  if (min > max) {
	    var hold = max;
	    max = min;
	    min = hold;
	  }
	
	  return Math.floor(Math.random() * (max - min + 1)) + min; // 取min到max+1之间的随机数
	}
	//星星能在的最大的轨道（圆）
	function maxOrbit(x, y) {
		// 画一个铺满整个可视区的圆，返回的是圆的半径
	  var max = Math.max(x, y),  //取x，y的最大值
	    diameter = Math.round(Math.sqrt(max * max + max * max));  
	  return diameter / 2;
	}
	
	//用面向对象的原理画星星
	var Star = function() {
	// 随机一个星星应该在的轨道，获取它的半径
	  this.orbitRadius = random(maxOrbit(w, h));
	//半径  每一颗星星的大小
	  this.radius = random(60, this.orbitRadius) / 12;
	  
	// 设置星星移动速度
	  this.orbitX = w / 2;
	  this.orbitY = h / 2;
	  this.timePassed = random(0, maxStars);  //随机数，跟星星数没有关系，只是用了这个数字
	  this.speed = random(this.orbitRadius) / 800000;
	  // 随机一个透明度
	  this.alpha = random(2, 10) / 10;
	
	  count++;
	  stars[count] = this;  //把每一个星星放入数组中存起来
	}
	Star.prototype.draw = function() {
		//this.timePassed是一个随机数，加Math.sin后就是一个-1--1的随机数，乘上轨道半径，加上整个屏幕的一半，
		//及在屏幕的中间画一个半径小于轨道半径的圆，随机找一点，画星星
	  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
	    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
	    twinkle = random(10);
		
		//给每颗星星随机的闪烁
	  if (twinkle === 1 && this.alpha > 0) {
	    this.alpha -= 0.05;
	  } else if (twinkle === 2 && this.alpha < 1) {
	    this.alpha += 0.05;
	  }
	
	  ctx.globalAlpha = this.alpha;
	  //图片 圆心坐标，宽高，在这里指半径
	  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
	  this.timePassed += this.speed;   //通过角度的不断增加，让星星逆时针转动
	}
	
	for (var i = 0; i < maxStars; i++) {
	  new Star();
	}
	
	function animation() {
	  ctx.globalCompositeOperation = 'source-over';  //将星星绘制到已有的画布上
	  ctx.globalAlpha = 0.8;
	  ctx.fillStyle = 'hsla(' + 217+ ', 64%, 6%, 1)';  //模拟星空背景色
	  ctx.fillRect(0, 0, w, h)
	
	  ctx.globalCompositeOperation = 'lighter';   //在源图片上加目标图片
	  for (var i = 1, l = stars.length; i < l; i++) {
	    stars[i].draw();
	  };
	
	  window.requestAnimationFrame(animation);  //执行回调函数，时间间隔根据浏览器的间隔绘制
	}
	window.onresize = function (){
		animation();
	};
	animation();
})()
