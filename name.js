//disables enter key
function stopRKey(evt) { 
	var evt = (evt) ? evt : ((event) ? event : null); 
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
	if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
	} 
	document.onkeypress = stopRKey; 

// sets function for name and displays adjective
function setnamegood() {
	var name
	name = document.getElementById('userinput').value;

	document.getElementById("hide").style.display = "none";
	
	document.getElementById('name').innerHTML = ('Hello,\xa0' +name+'!')
	
	var adjectives = ['adaptable','adventurous','affable','affectionate','agreeable','ambitious','amiable','amicable','amusing','brave','bright','broad-minded','calm','careful','charming','communicative','compassionate','conscientious','considerate','convivial','courageous','courteous','creative','decisive','determined','diligent','diplomatic','discreet','dynamic','easygoing','emotional','energetic','enthusiastic','exuberant','fair-minded','faithful','fearless','forceful','frank','friendly','funny','generous','gentle','good','gregarious','hard-working','helpful','honest','humorous','imaginative','impartial','independent','intellectual','intelligent','intuitive','inventive','kind','loving','loyal','modest','neat','nice','optimistic','passionate','patient','persistent','pioneering','philosophical','placid','plucky','polite','powerful','practical','pro-active','quick-witted','quiet','rational','reliable','reserved','resourceful','romantic','self-confident','self-disciplined','sensible','sensitive','shy','sincere','sociable','straightforward','sympathetic','thoughtful','tidy','tough','unassuming','understanding','versatile','warmhearted','willing','witty'];  
	var random = adjectives[Math.floor(Math.random() * adjectives.length)];
	
	document.getElementById('adjective').innerHTML = ('You are a very\xa0' +random+'\xa0person.')
}

function setnamebad() {
	var name
	name = document.getElementById('userinput').value;

	document.getElementById("hide").style.display = "none";
	
	document.getElementById('name').innerHTML = ('Ugh. It\'s\xa0' +name+'.')
	
	var adjectives = ['aggressive','aloof','arrogant','belligerent','big-headed','boastful','bone-idle','boring','bossy','callous','cantankerous','careless','changeable','clinging','compulsive','conservative','cowardly','cruel','cunning','cynical','deceitful','detached','dishonest','dogmatic','domineering','finicky','flirtatious','foolish','foolhardy','fussy','greedy','grumpy','gullible','harsh','impatient','impolite','impulsive','inconsiderate','inconsistent','indecisive','indiscreet','inflexible','interfering','intolerant','irresponsible','jealous','lazy','Machiavellian','materialistic','mean','miserly','moody','narrow-minded','nasty','naughty','nervous','obsessive','obstinate','overcritical','overemotional','parsimonious','patronizing','perverse','pessimistic','pompous','possessive','pusillanimous','quarrelsome','quick-tempered','resentful','rude','ruthless','sarcastic','secretive','selfish','self-centred','self-indulgent','silly','sneaky','stingy','stubborn','stupid','superficial','tactless','timid','touchy','thoughtless','truculent','unkind','unpredictable','unreliable','untidy','untrustworthy','vague','vain','vengeful','vulgar','weak-willed']
	var random = adjectives[Math.floor(Math.random() * adjectives.length)];
	
	document.getElementById('adjective').innerHTML = ('You are sooooo\xa0' +random+'.')
}
