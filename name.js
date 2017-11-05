//disables enter key
function stopRKey(evt) { 
	var evt = (evt) ? evt : ((event) ? event : null); 
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
	if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
	} 
	document.onkeypress = stopRKey; 

//sets user input as variable "name"
function setname() {
	var name
	name = document.getElementById('userinput').value;
	alert(name);
	}