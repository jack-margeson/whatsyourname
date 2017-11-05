//disables enter key
function stopRKey(evt) { 
	var evt = (evt) ? evt : ((event) ? event : null); 
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
	if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
	} 
	document.onkeypress = stopRKey; 

// oof
function setname() {
	var name
	name = document.getElementById('userinput').value;

	document.getElementById("hide").style.display = "none";
	
	document.getElementById('name').innerHTML = ('Hello,\xa0' +name+'!')
}
	// alert(name+'-setname')
