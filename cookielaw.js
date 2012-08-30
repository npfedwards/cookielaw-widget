function cookieWidget(position){
	//Add the div at the end of the body tag
	document.body.innerHTML+="<div id='clw_hold'></div>";
	
	//Get our holding div
	var holddiv=document.getElementById('clw_hold');
	
	var width = 940; //width of holddiv
	var padding = 10;
	
	//Style the holding div
	holddiv.style.position = 'fixed';
	holddiv.style.background = '#A00';
	holddiv.style.color = '#FFF';
	holddiv.style.padding = padding+'px';
	holddiv.style.width = width+'px';
	holddiv.style.textAlign = 'center';
	
	
	var vert = position.slice(0,3);
	var hor = position.slice(3,6);

	if(vert==='top'){
		holddiv.style.top = '0';
	}else if(vert==='mid'){
		holddiv.style.top = '50%';
	}else{
		holddiv.style.bottom = '0';	
	}
	if(hor==='lef'){
		holddiv.style.left = '0';	
	}else if(hor==='cen'){
		holddiv.style.left = '50%';
		holddiv.style.marginLeft = '-'+(width+padding)/2+'px';	
	}else{
		holddiv.style.right = '0';	
	}
	
	
	//Put the message inside the holddiv
	holddiv.innerHTML="This website uses cookies! By using this website you are agreeing to our use of them. Find out more <a href='cookiepolicy.html'>here</a><span id='clw_exit' onclick='cookieWidgetHide()'>x</span>";
}

function cookieWidgetHide(){
	var holddiv=document.getElementById('clw_hold');
	holddiv.style.display = 'none';	
}