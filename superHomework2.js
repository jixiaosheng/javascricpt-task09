window.onload=function () {  
	var sA=document.getElementsByClassName('sA')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if (st>165) {
			sA.style.position='fixed';
			sA.zIndex=999;
		}else{
			sA.style.position='static';
		}   
	}
	var j1=document.getElementById('j1');
	var j2=document.getElementById('j2');
	var x1=document.getElementById('x1');
	j1.onmousedown=function(){		
		x1.innerHTML="<span>"+"''150ml''"+"</span>";
		j1.style.border="0.5px #ff0754 solid";
		j1.style.backgroundImage="url('imgs/duigou.png')";
		j2.style="none";
	}
	j2.onmousedown=function(){
		x1.innerHTML="<span>"+"''200ml''"+"</span>";
		j2.style.border="0.5px #ff0754 solid";
		j2.style.backgroundImage="url('imgs/duigou.png')";
		j1.style="none";
	}
	var pt1=document.getElementById('pt1');
	var pt2=document.getElementById('pt2');
	var sum=document.getElementById('sum');
	pt1.onmouseover=function () {
		pt1.style.cursor="pointer";
	}
	pt1.onclick=function () {
		if(sum.value<6&&sum.value>1){
			pt1.style.cursor="pointer";
			sum.value--;          
		}
		else if(sum.value==1){
			pt1.style.cursor="not-allowed";
		}
	}
	pt2.onmouseover=function () {
		pt2.style.cursor="pointer";
	}
	pt2.onclick=function () {
		if(sum.value<5){
			pt2.style.cursor="pointer";
			sum.value++;           
		}
		else if(sum.value==5){
			pt2.style.cursor="not-allowed";
		}
	}
	var bu2=document.getElementById('bu2');
	bu2.onmousedown=function () {
		var zhezhao=document.getElementById("zhezhao"); 
		var show=document.getElementById("show"); 
		var bre=document.getElementById("bre"); 

		bu2.onclick=function() 
		{ 
			zhezhao.style.display="block"; 
			show.style.display="block"; 
		} 
		bre.onclick=function() 
		{ 
			zhezhao.style.display="none"; 
			show.style.display="none";  
		} 
		bu3.onclick=function () {
			zhezhao.style.display="none"; 
			show.style.display="none";  
		}
	}
	var a2 = document.getElementById("a2");
	var bigger = document.getElementById("bigger");
	var slider = document.getElementById("slider");
	var Bimg = document.getElementById("Bimg");
	var a1 = document.getElementById('a1'); 
	a2.onmouseover=function(){
		slider.style.display='block';
		bigger.style.display='block';
	}
	a2.onmouseout=function(){
		slider.style.display='none';
		bigger.style.display='none';
	}

	a2.onmousemove=function(ev){
		var ev=ev||event;

		var oL=ev.clientX-a1.offsetLeft-22-slider.offsetWidth/2;//
		var oT=ev.clientY-a1.offsetTop-22-slider.offsetHeight/2;

		var oMaxw=a2.offsetWidth-slider.offsetWidth;
		var oMaxh=a2.offsetHeight-slider.offsetHeight;

		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;
		
		slider.style.left = oL+62+'px';
		slider.style.top = oT+220+'px' ;
		
		var oBmaxw = bigger.offsetWidth - Bimg.offsetWidth;
		var oBmaxh = bigger.offsetHeight - Bimg.offsetHeight;
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px' 
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
	}
	var h1=document.getElementById('h1');
	var h2=document.getElementById('h2');
	var Bi=document.getElementById('Bi');
	var pp=document.getElementById('pp');
	h1.onclick=function(){
		h1.style.border="1px #ff9003 solid";
		Bi.innerHTML="<img src='imgs/pbig0.jpg'>";
		pp.innerHTML="<img src='imgs/pp0.jpeg'>";
		h2.style.border="none";
	}
	h2.onclick=function(){
		h2.style.border="1px #ff9003 solid";
		Bi.innerHTML="<img src='imgs/pbig1.jpg'>";
		pp.innerHTML="<img src='imgs/pp1.jpeg'>";
		h1.style.border="none";
	}
}


