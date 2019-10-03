var slide=0;
var index=0;
var sliderwrapper=document.getElementById("wrap");
var containerwrapper=document.getElementById("container");

var width=0;
var totalimagesize=document.querySelectorAll('#wrap>img');
console.log(totalimagesize);
for(var i =0;i<totalimagesize.length;i++){
	width=width+totalimagesize[i].clientWidth;
}
var imageWidth=width/totalimagesize.length;
console.log(imageWidth);
sliderwrapper.style.width=width+'px';

var leftButton=document.createElement("BUTTON");
leftButton.innerHTML="left";
containerwrapper.appendChild(leftButton);
leftButton.setAttribute("id","xyz");

leftButton.style.position="absolute";
leftButton.style.top="50%";
leftButton.style.left="0%";

var rightButton = document.createElement("Button");
rightButton.innerHTML="right";
containerwrapper.appendChild(rightButton);
rightButton.setAttribute("id","abc");
rightButton.style.position="absolute";
rightButton.style.top="50%";
rightButton.style.right="0%";

var indicator = document.createElement("div");


containerwrapper.appendChild(indicator);
indicator.setAttribute("id","indicator");
indicator.style.position="absolute";
indicator.style.bottom="0%";
indicator.style.left="50%";
for(var i=0;i<totalimagesize.length;i++){
	console.log("test");
	var test =document.createElement("Button");
	test.innerHTML="test";
	if(i==0){
		test.style.backgroundColor="green";
	}else{
	test.style.backgroundColor="blue";
}
	test.setAttribute("id","test"+i)
	indicator.appendChild(test);

}


leftButton.onclick=function(){
	slide-=imageWidth;
	console.log(slide);
	slide=slide%width;
	console.log(slide);

sliderwrapper.style.marginLeft=slide+'px';
	changeActive();

	};


rightButton.onclick=function(){
	slide=width-slide;
	slide-=imageWidth;
	slide=-slide;
	slide=slide%width;
	sliderwrapper.style.marginLeft= slide+'px';
	changeActive();

/*	var internalSlide=width-slide;
	internalSlide-=imageWidth;
	internalSlide=-internalSlide;
	internalSlide=internalSlide%width;
	transition(internalSlide);
	changeActive();*/

}

//changes the active indicator
function changeActive(){
	
	var activeButtons=document.querySelectorAll("#indicator>button");
	activeButtons[index].style.backgroundColor="blue";
	index=slide/imageWidth;
	index*=-1;
	activeButtons[index].style.backgroundColor="green";
}

//this assigns all the indicator buttons with a onclick function with a index parsed out from its id
var activeButtons=document.querySelectorAll("#indicator>button");
for( var i=0;i<activeButtons.length;i++){
	activeButtons[i].onclick=function(){checkcolor(this.id)}
}

//This helps in changing the value by the help of indicators
	function checkcolor(ev){
		var index=ev[ev.length-1];
		index=parseInt(index);
		console.log(index);
		var slide=imageWidth*index;
		slide*=-1;
		
		transition(slide);

		
		/*sliderwrapper.style.marginLeft=slide+"px";*/
		
	
	}

function transition(newSlide){
var slideperiod =slide;
console.log(slideperiod);
if(slideperiod>newSlide){
	var id = setInterval(function(){
		slideperiod--;
		if(slideperiod>=newSlide){
		sliderwrapper.style.marginLeft=slideperiod+"px";
		slide=slideperiod;

	}
	else{
		
		clearInterval(id);
		changeActive();
	}

	},1);

}
else{
		var id = setInterval(function(){
			slideperiod++;
		if(slideperiod<=newSlide){
		sliderwrapper.style.marginLeft=slideperiod+"px";
		slide=slideperiod;
	}
	else{
		
		clearInterval(id);
		changeActive();
	}

	},1);
	
}

/*	function frame(){
		if(slideperiod<=newSlide){
			sliderwrapper.style.marginLeft=slideperiod+"px";
		}
		else{
			slideperiod--;
			console.log(slideperiod);
		}
		
		

}
*/


}

