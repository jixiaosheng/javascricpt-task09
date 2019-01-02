function money(){
	var ins=document.createElement('span');
	var dd=document.getElementById('dd');
	var m=document.getElementById('s').value;
	ins.innerHTML="<span>"+"￥"+m+"</span>";
	dd.appendChild(ins);
	dd.replaceChild(ins,dd.childNodes[0]);
}
window.onload=function () {  
	var sA=document.getElementsByClassName('sA')[0];
	var box=document.getElementById('box');
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if (st>165) {
			sA.style.position='fixed';
		}else{
			sA.style.position='static';
		}   
	}
	function getStylee(obj,style) {  
		if(obj.currentStyle) {  
			return obj.currentStyle[style];  
		} else {  
			return getComputedStyle(obj)[style];  
		}  
	}  
	var four=document.getElementById('four');
	var bo1=document.getElementById('bo1');
	var bo2=document.getElementById('bo2');
	var bo3=document.getElementById('bo3');
	var bo4=document.getElementById('bo4');
	var timer,timer1,timera,timer1a,timerb,timer1b,timerc,timer1c;
	function fun(a){
		a.onmouseover=function(){
			timer=setInterval(function(){
				if(parseInt(getStylee(a,'left'))>=1142){
					a.style.left=parseInt(getStylee(a,'left'))-5+'px';
				}
			},30)
			clearInterval(timer1);
		}
		a.onmouseout=function(){
			timer1=setInterval(function(){
				if(parseInt(getStylee(a,'left'))!=1220){
					a.style.left=parseInt(getStylee(a,'left'))+5+'px';
				}
			},10)
			clearInterval(timer);
		}
	}
	fun(bo1);
	bo2.onmouseover=function(){
		timera=setInterval(function(){
			if(parseInt(getStylee(bo2,'left'))>1142){
				bo2.style.left=parseInt(getStylee(bo2,'left'))-5+'px';
			}
		},30)
		clearInterval(timer1a);
	}
	bo2.onmouseout=function(){
		timer1a=setInterval(function(){
			if(parseInt(getStylee(bo2,'left'))!=1220){
				bo2.style.left=parseInt(getStylee(bo2,'left'))+5+'px';
			}
		},10)
		clearInterval(timera);
	}
	var bi=document.getElementById('bi');
	bo3.onmouseover=function(){
		timerb=setInterval(function(){
			if(parseInt(getStylee(bo3,'left'))>1142){
				bo3.style.left=parseInt(getStylee(bo3,'left'))-5+'px';
			}
		},30)
		clearInterval(timer1b);
		bi.style.backgroundImage="url('imgs/erwei.png')";
		bi.style.backgroundPosition='10px 10px';
	}
	bo3.onmouseout=function(){
		timer1b=setInterval(function(){
			if(parseInt(getStylee(bo3,'left'))!=1220){
				bo3.style.left=parseInt(getStylee(bo3,'left'))+5+'px';
			}
		},10)
		clearInterval(timerb);
		bi.style.backgroundImage="url('imgs/serwei.png')";
		bi.style.backgroundPosition='10px 40px';
	}
	fun(bo4);
	var oNavlist = document.getElementById('nav').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var index = 1;
	var timer;
	var isMoving = false;
	box.onmouseover = function(){
		animate(left,{opacity:50})
		animate(right,{opacity:50})
		clearInterval(timer)
	}

	box.onmouseout = function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer = setInterval(next, 3000);
	}
	right.onclick = next;
	left.onclick = prev;
	for( var i=0; i<oNavlist.length; i++ ){
		(function(i){
			oNavlist[i].onclick = function(){
				index = i+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		})(i);
	}
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index++;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==7){
				slider.style.left = '-800px';
				index = 1;
			}
			isMoving = false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index--;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==0){
				slider.style.left = '-4800px';
				index = 6;
			}
			isMoving = false;
		});
	}
	function navmove(){
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].className = "";
		}
		if(index >6 ){
			oNavlist[0].className = "active";
		}else if(index<=0){
			oNavlist[5].className = "active";
		}else {
			oNavlist[index-1].className = "active";
		}
	}
	timer = setInterval(next, 3000);
	var box = document.getElementById('box');
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}
	function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				var now = 0;
				if(attr == 'opacity'){
					now = parseInt(getStyle(obj,attr)*100);
				}else{
					now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr] - now) / 8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				var cur = now + speed;
				if(attr == 'opacity'){
					obj.style[attr] = cur / 100;
				}else{
					obj.style[attr] = cur + 'px';
				}
				if(json[attr] !== cur){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		}, 30)		
	}
}

































