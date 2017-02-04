
(function(){
	function music(){
		this.musics = document.getElementById('music');
		this.run = this.musics.querySelector('.run');
		this.singLi = this.musics.querySelectorAll('.lists li');
		
		//canvas相关参数 audio
		this.audo = document.getElementById('audio');
		this.canvas = document.getElementById('canvasVoice');
		this.cxt = this.canvas.getContext('2d');
		this.audioC = new AudioContext();
		this.analyser = this.audioC.createAnalyser();
		this.audiosrc = this.audioC.createMediaElementSource(this.audo);
		
		this.onOff = false;
		this.timer = null;//实时监测播放进度
		
		//进度条参数
		//播放进度条相关
		this.curnow = this.musics.querySelector('.curnow');
		this.dotbtn = this.musics.querySelector('.dotBtn');
		this.totalTime = this.musics.querySelector('.totalTime');
		this.nowTime = this.musics.querySelector('.nowTime');		
		this.disX = 0;
		
		//歌曲切换
		this.arr = ['msc/薛之谦 - 来日方长.mp3','msc/薛之谦 - 演员.mp3','msc/薛之谦 - 一半.mp3']
		this.numb = 0;
		
		//是否静音
		this.muted = this.musics.querySelector('.muted');
		this.mutedB = this.musics.querySelector('.mutedB');
		this.mutedW = this.musics.querySelector('.mutedW');
		
		//关闭音乐
		this.close = this.musics.querySelector('.close');
	};
	music.prototype.init = function(){
		this.num = Math.floor(this.canvas.width/8);
		this.audo.src = this.arr[this.numb];
		for(var i=0;i<this.singLi.length;i++){
			this.singLi[i].style.backgroundColor = '';
		}
		this.singLi[this.numb].style.backgroundColor = "#52c68f";
		this.play();
		this.drag(); //拖拽小点
		this.muteds(); //是否静音
		this.stop();
		this.click();
		this.audo.volume = 0.6;
	};
	music.prototype.play = function(){
		var _this = this;
		this.run.onclick = function () {
			if ( _this.audo.paused ) {
				_this.musicPlay();
				this.className = 'running';
			} else {
				clearInterval(_this.timer);
				_this.audo.pause();
				this.className = '';
			}
		};
	};
	music.prototype.musicPlay = function(){
		var _this = this;
		this.onOff = true;
		this.canvasCreate();
		this.audo.play();
		//没有找到音频src跳转的预加载，用定时器代替	
		this.timer = setInterval(function () {
			_this.totalT();
			_this.nowT();
		},1000);
	};
	music.prototype.canvasCreate = function () {
		var _this = this;
		this.cxt.clearRect(0,0,600,300);
		
		this.audiosrc.connect(this.analyser);//将提取到的数据放入analyserNode
		this.analyser.connect(this.audioC.destination);//与外部硬件连接
		
		gradient = this.cxt.createLinearGradient(0,0,0,150);
		gradient.addColorStop(1, '#ff009c');
		gradient.addColorStop(0.5, '#ff009c'); //#f00
		gradient.addColorStop(0, '#f00');
		gradientT = this.cxt.createLinearGradient(0,150,0,300);
		gradientT.addColorStop(0,"rgba(125,225,133,0.8)");
		gradientT.addColorStop(.5,"rgba(225,225,0,0.6)"); //#f00
		gradientT.addColorStop(1,"rgba(125,0,133,0.4)");
		var Ymaotou = [];
		
		
		var fn = function (){
			//获得音频中所有个频率的能量值
			var voiceHeight = new Uint8Array(_this.analyser.frequencyBinCount);
			_this.analyser.getByteFrequencyData(voiceHeight);
			
			//获取步长
			var step = Math.round(voiceHeight.length/_this.num);
			
			
			
			_this.cxt.clearRect(0,0,_this.canvas.width,_this.canvas.height);
			
			_this.cxt.beginPath();
			for ( var i = 0; i < _this.num; i++ ) {
				var val = voiceHeight[step*i];
				
				if ( Ymaotou.length < _this.num ) {
					Ymaotou.push(val);
				}
				
				_this.cxt.fillStyle = 'lightblue';
				
				if ( val < Ymaotou[i] ) {
					_this.cxt.fillRect((i+1)*8+320,178 -(--Ymaotou[i]),7,2);
					_this.cxt.fillRect(320-i*8,178 -(--Ymaotou[i]),7,2);
				} else {
					_this.cxt.fillRect((i+1)*8+320,178 - val,7,2);
					_this.cxt.fillRect(320-i*8,178 - val,7,2);
					Ymaotou[i] = val;
				}
				_this.cxt.fillStyle = gradient;
				_this.cxt.fillRect((i+1)*8+320,180,7,-val+1);
				_this.cxt.fillRect(320-i*8,180,7,-val+1);
				_this.cxt.fillStyle = gradientT;
				_this.cxt.fillRect((i+1)*8+320,180,7,val+1);
				_this.cxt.fillRect(320-i*8,180,7,val+1);
			}
			
			_this.cxt.stroke();
			if(_this.onOff){
				requestAnimationFrame(fn);
			}	
		};
		requestAnimationFrame(fn);
		//fn();
	};
	//播放总的时间
	music.prototype.totalT = function () {
		var totalTime = this.audo.duration;
		var m = this.tbD(Math.floor(totalTime/60));
		var s = this.tbD(Math.round(totalTime % 60));
		var str = m + ':' + s;
		this.totalTime.innerHTML = str;
	};
	//播放了多少，进度条怎么走
	music.prototype.nowT = function () {
		var nowTime = this.audo.currentTime;
		var totalTime = this.audo.duration;
		var m = this.tbD(Math.floor(nowTime/60));
		var s = this.tbD(Math.round(nowTime % 60));
		var str = '';
		str = m + ':' + s;
		var scale = nowTime / totalTime;
		this.nowTime.innerHTML = str;
		this.curnow.style.width = scale * 400 + 'px';
		this.dotbtn.style.left = -5+scale * 400 + 'px';
		this.over();
	};
	music.prototype.tbD = function (num) {
		return num = num <= 9 ? '0' + num : '' + num; 
	};
	
	//拖拽
	music.prototype.drag = function () {
		var _this = this;
		this.dotbtn.onmousedown = function (ev) {
			_this.totalT();
			_this.disX = ev.pageX - this.offsetLeft;
			_this.musics.onmousemove = function (ev) {
				_this.fnMove(ev);
			};
			_this.musics.onmouseup = function () {
				_this.fnUp();
			};
			ev.cancelBubble = true;
			ev.preventDefault();
		};
	};
	//移动
	music.prototype.fnMove = function (ev) {
		clearInterval(this.timer);
		this.audo.pause();
		var l = ev.pageX - this.disX;
		if ( l <= 0 ) {
			l = 0;
		}
		if ( l >= 400) {
			l = 400;
		}
		this.dotbtn.style.left = -5+l + 'px';
		this.curnow.style.width = l + 'px';
		this.audo.currentTime = l/400 * this.audo.duration;
		this.nowT();
	};
	
	//抬起
	music.prototype.fnUp = function () {
		this.musics.onmousemove = this.musics.onmouseup = null;
		if(this.audo.paused){
			this.run.className = '';
		}
	};
	//播放完后跳到下一首
	music.prototype.over = function(){
		if ( this.audo.ended ) {
			this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height);
			this.audo.currentTime = 0;
			clearInterval(this.timer);
			this.numb++;
			if(this.numb>this.arr.length-1){
				this.numb = 0;
			}
			for(var i=0;i<this.singLi.length;i++){
				this.singLi[i].style.backgroundColor = '';
			}
			this.singLi[this.numb].style.backgroundColor = "#52c68f";
			this.audo.src = this.arr[this.numb];
			this.musicPlay();
		}
	};
	//点击播放
	// 运用let声明变量，不确定是否兼容
	music.prototype.click = function(){
		var _this = this;
		for(let i=0;i<this.singLi.length;i++){
			this.singLi[i].onclick = function(){
				_this.singLi[_this.numb].style.backgroundColor = "";
				_this.singLi[i].style.backgroundColor = "#52c68f";
				_this.audo.src = _this.arr[i];
				_this.numb = i;
				_this.musicPlay();
				_this.run.className = 'running';
			};
		}
	};
	//是否静音
	music.prototype.muteds = function(){
		var _this = this;
		this.muted.onclick = function(){
			if( _this.audo.muted ){		
				_this.audo.volume = 0.6;			
				_this.audo.muted = false;
				_this.mutedT();
			}
			else{			
				_this.audo.volume = 0;
				_this.audo.muted = true;
				_this.mutedT();
			}
		};
	};
	music.prototype.mutedT = function () {
		var scale = this.audo.volume / 1;
		this.mutedW.style.width = scale * 100 + 'px';
		this.mutedB.style.left = -5+scale * 100 + 'px';
	};
	//关闭播放器
	music.prototype.stop = function () {
		var _this = this;
		this.close.onclick = function(){
			if(!_this.audo.paused){
				clearInterval(_this.timer);
				_this.audo.pause();
				_this.run.className = '';
			};
			_this.musics.style.display = 'none';
			_this.musics.style.left = '';
			_this.musics.style.margin = '';
		};
	};
	
	var m1 = new music();
	m1.init();
	m1.canvasCreate();
})();