
(function(){
	var data = [{"h2":"删除"},
				{"h2":"新建"},
				{"h2":"刷新"},
				{"h2":"留言板"},
				{"h2":"web说明"},
				{"h2":"个人简介"},
				{"h2":"图形选项",
				"ul":[{"h2":"屏面适应",
						"ul":[{"h2":"保持显示缩放比"}]
						},
						{"h2":"快捷键",
						"ul":[{"h2":"启用"},
						{"h2":"禁用"}]
						},
						{"h2":"系统拖盘图标",
						"ul":[{"h2":"启用"},
						{"h2":"禁用"}]
						},
						{"h2":"气球通知",
						"ul":[{"h2":"图形属性通知",
							"ul":[{"h2":"启用"},
							{"h2":"禁用"}]
							},
							{"h2":"最佳分辨率通知",
							"ul":[{"h2":"启用"},
							{"h2":"禁用"}]
							}
							]
						},
						{"h2":"旋转",
						"ul":[{"h2":"旋转至正常"},
						{"h2":"旋转至90度"},
						{"h2":"旋转至180度"},
						{"h2":"旋转至270度"}]
						}
					]
				},
				{"h2":"个性化"}];
	var menu = document.getElementById('menu');
	function create(obj,arr){
		for(var i = 0; i < arr.length;i++){
			var li = document.createElement('li');
			var h2 = document.createElement('h2');
			h2.innerHTML = arr[i].h2;
			if(arr[i].ul){
				h2.innerHTML += '<span></span>';
				var uls = document.createElement('ul');
				li.appendChild(uls);
				create(uls,arr[i].ul);
			}
			li.appendChild(h2);
			obj.appendChild(li);
		}
	}
	create(menu,data);
	document.oncontextmenu = function(e){
		menu.style.display = 'block';
		menu.style.left = e.pageX +'px';
		menu.style.top = e.pageY +'px';
		return false;
	};
	var li = menu.getElementsByTagName('li') 
	for(var i = 0;i < li.length;i++){
		li[i].onmouseover = function(){
		  if(this.children.length >1 ){
		  	this.children[0].style.display = 'block';
		  	this.children[1].style.background = '#edf2f7';
		  	this.children[1].style.border = '1px solid #aecff7';
		  }else{
		  	this.children[0].style.background = '';
		  	this.children[0].style.border = '1px solid #aecff7';
		  }
	  	};
	  	li[i].onmouseout = function(){
		  if(this.children.length >1 ){
		  	this.children[0].style.display = 'none';
		  	this.children[1].style.background = '';
		  	this.children[1].style.border = '1px solid #eee';
		  }else{
		  	this.children[0].style.background = '';
		  	this.children[0].style.border = '1px solid #eee';
		  }
	  	};
	}
	document.onclick = function(){
		menu.style.display = 'none';
	}
})()
