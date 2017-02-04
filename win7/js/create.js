
(function(){
	function tag(){
		this.wrap = document.getElementById('wrap');
		this.div = this.wrap.getElementsByTagName('div');
		this.menu = document.getElementById('menu');
		this.musicWrap = document.getElementById('music');
		this.snake = document.getElementById('snake');
		this.arr = [0,1,2,3,4];
		this.arrName = ['游戏','回收站','云盘','音乐','文件'];
		this.disX = 0;
		this.disY = 0;
	};
	
	tag.prototype = {
		constructor:tag,
		createDiv:function(){   //创建元素，并让他们到该去的位置
			for(var i = 0;i<this.arr.length;i++){
				this.createDom(i);
				$('#wrap').find('div').eq(i).animate({   //此时还没有index，只能用数组定位置
					top: (this.arr[i%5]*Math.ceil(window.innerHeight/5.5))+40,
					left:  (this.arr[Math.floor(i/5)]*Math.ceil(window.innerHeight/5.5))+60
				});
			}
		},	
		init:function(obj){
			var _this = this;
			this.dblclick();
			if(obj){
				obj.addEventListener('click',click);
				function click(ev){
					if(this.className.includes('show')){
						this.className = '';
					}else{
						this.className = 'show';
					}
				};
				obj.addEventListener('mouseover',over);
				function over(ev){
					_this.mouseover(this);
				};
				obj.addEventListener('mouseout',out);
				function out(ev){
					_this.mouseout(this);
				};
				obj.addEventListener('mousedown',down);
				function down(ev){
					_this.fnDown(ev,down,this);
				};
			}else{
				for(var i = 0;i<this.div.length;i++){
					this.div[i].addEventListener('click',click);
					function click(ev){
						if(this.className.includes('show')){
							this.className = '';
						}else{
							this.className = 'show';
						}
					};
					this.div[i].addEventListener('mouseover',over);
					function over(ev){
						_this.mouseover(this);
					};
					this.div[i].addEventListener('mouseout',out);
					function out(ev){
						_this.mouseout(this);
					};
					this.div[i].addEventListener('mousedown',down);
					function down(ev){
						_this.fnDown(ev,down,this);
					};
				}	
			}
		},
	
		fnDown:function(ev,down,that){
			this.minObj = null;
			var oldIndex;
			var newIndex;
			var oldArr;
			var newArr;
			var _this = this;
			this.w = that.offsetLeft;
			this.h = that.offsetTop;
			that.style.zIndex = 999;
			this.disX = ev.pageX - that.offsetLeft;
			this.disY = ev.pageY - that.offsetTop;
			document.addEventListener('mousemove',move);
			document.addEventListener('mouseup',up);
			
			function move(ev){
				_this.fnMove(ev,that);
			};
			function up(ev){
				_this.fnUp(ev,down,move,up,that);
			};
			ev.preventDefault();
		
		},
	
		fnMove:function(ev,that){
			var _this = this;
			that.style.left = ev.pageX - this.disX +'px';
			that.style.top = ev.pageY - this.disY + 'px';
			
			//找到最近的
			this.minObj = this.minFn(that);
			for(var i = 0;i<this.div.length;i++){
				if(this.div[i] != that){
					this.mouseout(this.div[i]);
				}
			}
			if(this.minObj){
				this.mouseover(this.minObj);
			}
		},
	
	
		fnUp:function(ev,down,move,up,that){
			var _this = this;
			//   newIndex被碰撞，oldIndex拖拽的
			document.removeEventListener('mousemove',move);
			document.removeEventListener('mouseup',up);
			if(this.minObj != null && that!=this.minObj){
				this.minObj.style.zIndex = 999;
				oldIndex = that.index;
				newIndex = this.minObj.index;
				newArr = this.arr[newIndex];
				oldArr = this.arr[oldIndex];
				this.arr[oldIndex] = newArr; //this.arr[newIndex]; 
				this.arr[newIndex] = oldArr;  //this.arr[oldIndex] 
				$('#wrap').find('div').eq(oldIndex).animate({
					top: (newIndex%5*Math.ceil(window.innerHeight/5.5))+40,
					left: (Math.floor((newIndex)/5)*Math.ceil(window.innerHeight/5.5))+60
				});
				$('#wrap').find('div').eq(newIndex).animate({
					top: (oldIndex%5*Math.ceil(window.innerHeight/5.5))+40,
					left: (Math.floor((oldIndex)/5)*Math.ceil(window.innerHeight/5.5))+60
				});
				this.mouseout(this.minObj);
				var divN = Array.from(this.div);
				var oldD = divN[oldIndex];
				var newD = divN[newIndex];
				divN[oldIndex] = newD;
				divN[newIndex] = oldD;
				
				this.wrap.innerHTML = '';
				for(var i = 0;i <divN.length;i++){
					this.wrap.appendChild(divN[i]);
				}
				for(var i = 0;i<this.div.length;i++){
					this.div[i].index = i;
				}
				//that.style.zIndex = 1;
				this.minObj.style.zIndex = '';  
			}else{
				$(that).animate({
					left:this.w,
					top:this.h
				})
//				that.style.left = this.w + 'px';
//				that.style.top = this.h + 'px';					
			}
			that.style.zIndex = '';
			this.minObj = null;
			oldIndex = null;
			newIndex = null;
		},
		
		minFn:function(obj){   //找最近的节点
			var max = Infinity;  
			var objIndex = -1;
			for(var i=0;i<this.div.length;i++){
				if(obj != this.div[i]){
					if(duang(obj,this.div[i])){ //碰到的情况下，循环找最小的，记录index，方便查找
						var a = this.div[i].offsetLeft - obj.offsetLeft;
						var b = this.div[i].offsetTop - obj.offsetTop;
						var sqrt = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
						if(max > sqrt){
							max = sqrt;
							objIndex = i
						}
					}
				}	
			}
			if(objIndex == -1){
				return null;
			}else{
				return this.div[objIndex];
			}
		},
		createDom:function(i,n){   //生成节点，
			var _this = this;
			var div = document.createElement('div');
			var img = document.createElement('img');
			var p = document.createElement('p');
			var input = document.createElement('input');
			input.type = 'text';
			img.src = 'img/'+this.arr[i]+'.png';
			div.index = i;
			div.appendChild(img);
			div.appendChild(p);
			div.appendChild(input);
			wrap.appendChild(div);
			// 重绘问题
			if(n){
				this.init(div);
				p.style.display = 'none';
				input.value = '新建文件夹';
				input.focus();
				input.onblur = function(){
					_this.repeat(input);
				};
				div.style.top = ((this.arr.length-1)%5*Math.ceil(window.innerHeight/5.5))+40 + 'px';
				div.style.left = (Math.floor((this.arr.length-1)/5)*Math.ceil(window.innerHeight/5.5))+60 + 'px';
			}else{
				input.style.display = 'none';
				p.innerHTML = this.arrName[this.arr[i]];
				//第一次生成的时候，给有功能的div加id
				if(p.innerHTML == '音乐'){
					div.id = 'musicFile';
				};
				if(p.innerHTML == '游戏'){
					div.id = 'gameFile';
				};
				if(p.innerHTML == '云盘'){
					div.id = 'yunFile';
				};
				if(p.innerHTML == '回收站'){
					div.id = 'recycleFile';
				};
			}	
		},
		mouseover:function(obj){  //移入
			if(obj.className == ''){
				obj.className = 'active';
			}
		},
		mouseout:function(obj){   //移出
			if(obj.className.includes('active')){
				obj.className = obj.className.replace('active','');
			}
		},
		change:function(ev){   //改名字
			var _this = this;
			if(ev.target.nodeName == 'P'){
				ev.target.style.display = 'none';
				var input = ev.target.nextElementSibling;
				var text = ev.target.innerHTML;
				input.style.display = 'block';
				input.focus();
				input.value = text;
				input.onblur = function(){
					if(input.value == ''||input.value ==text){
						this.style.display = 'none';
						this.previousElementSibling.style.display = 'block';
						return;
					}
					_this.repeat(input);
				};
			}	
		},
		hasName:function(obj){    //判断命名是否重复
			for(var i = 0;i<this.arrName.length;i++){
				if(obj.value == this.arrName[i]){
					return false;
				}
			}
			return true;
		},
		repeat:function(obj){
			if(!this.hasName(obj)){
				obj.focus();
				alert('命名重复');
			}else{
				this.arrName.push(obj.value);
				obj.style.display = 'none';
				obj.previousElementSibling.innerHTML = obj.value;
				obj.previousElementSibling.style.display = 'block';
			}
		},
		rightList:function(ev){
			if(ev.target.innerHTML == '新建'){
				this.arr.push(4);   //
				this.createDom(this.arr.length-1,1);
			}
			if(ev.target.innerHTML == '刷新'){
				for(var i = 0;i<this.div.length;i++){
					if(this.div[i].className){
						this.div[i].className = '';
					}
				}
			}	
			//   ???
			if(ev.target.innerHTML == '删除'){
				for(var i = 0;i<this.div.length;i++){
					if(this.div[i].className == 'show'){
						this.div[i].parentNode.removeChild(this.div[i]);
						this.arr.splice(i,1);
						for(var i = 0;i<this.div.length;i++){
							this.div[i].index = i;
						}
						for(var i = 0;i<this.div.length;i++){
							$('#wrap').find('div').eq(i).css({
								top: (i%5*Math.ceil(window.innerHeight/5.5))+40,
								left:  (Math.floor(i/5)*Math.ceil(window.innerHeight/5.5))+60
							});
						};
					}
				}
			}
		},
		self:function(){    //自适应屏幕
			for(var i = 0;i<this.div.length;i++){
				$('#wrap').find('div').eq(i).css({
					top: (i%5*Math.ceil(window.innerHeight/5.5))+40,
					left:  (Math.floor(i/5)*Math.ceil(window.innerHeight/5.5))+60
				});
			};
		},
		dblclick:function(){
			var _this = this;
			this.wrap.ondblclick = function(ev){
				if(ev.target.parentNode.id == 'musicFile'){
					_this.musicWrap.style.display = 'block';
					_this.musicWrap.style.left = '50%';
					$('#music').animate({
						marginLeft: -450,
						marginRight: -450,
						marginTop: -240,
						marginBottom: -240
					});
				};
				if(ev.target.parentNode.id == 'gameFile'){
					if (_this.snake.style.display == 'block') {
						return;
					}
					_this.snake.style.display = 'block';
					mTween(_this.snake,{top: 30},2000,'bounceOut');
				}
				ev.preventDefault();
			}
		}
		
	}
	
	
	
	
	//碰撞检测
	function duang(obj,obj2){
		//console.log(this.div.length);
		var l1 = obj.offsetLeft;
		var t1 = obj.offsetTop;
		var r1 = l1 + obj.offsetWidth;
		var b1 = t1 + obj.offsetHeight;
		
		var l2 = obj2.offsetLeft;
		var t2 = obj2.offsetTop;
		var r2 = l2 + obj2.offsetWidth;
		var b2 = t2 + obj2.offsetHeight;
		
		if(r1 < l2 || t1 > b2 || l1 > r2 || b1 < t2){
			return false;
		}else{
			return true;
		}
	};
	
	
	var c1 = new tag();
	c1.createDiv();
	c1.init();
	c1.wrap.onclick = function(ev){
		c1.change(ev);
	};
	c1.menu.onclick = function(ev){
		c1.rightList(ev);
	}
	//屏幕大小改变的时候，从新获取位置，从新渲染数据
	window.onresize = function () {  //窗口变换的时候自适应
		c1.self();
	};
	
	
	
	
	
	
	
	
	
	//return arr;
})();
