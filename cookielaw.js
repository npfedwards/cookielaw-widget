function cookieWidget(){
	//Add the div at the end of the body tag
	document.body.innerHTML+="<div id='clw_hold'></div>";
	
	//Get our holding div
	var holddiv=document.getElementById('clw_hold');
	
	//Style the holding div
	holddiv.style.position = 'fixed';
	holddiv.style.bottom = '0';
	holddiv.style.left = '50%';
	holddiv.style.background = '#A00';
	holddiv.style.color = '#FFF';
	holddiv.style.padding = '10px';
	
	//Put the message inside the holddiv
	holddiv.innerHTML="This website uses cookies!";
}