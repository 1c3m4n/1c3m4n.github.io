var workers = 10;
var grp = 0;
var offsetLeft = 400;
var offsetTop = 300;
var sRed=8;
var sGreen=6;
var sBlue=16;
function spawnWorkers()
{

	for(var i=0; i<workers;i++)
	{
		worker = new Worker('worker.js');
		worker.addEventListener('message', function(e) {
			x = 0.0;
			x = offsetLeft + e.data.x;
			y = 0.0;
			y = offsetTop + e.data.y;
	  		document.getElementById(e.data.name).style.left  = x;
	  		document.getElementById(e.data.name).style.top  = y;
	  		var colorname = 'rgb(' + Math.floor((x/(sRed*100)*255)) + ',' + Math.floor((y/(sGreen*100)*255)) + ',' + Math.floor(((x+y)/(sBlue*100))*255) + ')';
	  		document.getElementById(e.data.name).style.backgroundColor  = colorname; 
		}, false);
		element = 'block'+(i+1)+"group"+grp;
		var iDiv = document.createElement('div');
		iDiv.id = element;
		iDiv.className = 'block';
		document.getElementById('box').appendChild(iDiv);
		worker.postMessage({name:element,x:0,y:0}); 
	}
	grp++;
	document.getElementById('Counter').innerText  = "Workers: "+(grp*workers);
}


function changeRed(val)
{
	document.getElementById('valRed').innerText = val;
	sRed=val;
}
function changeGreen(val)
{
	document.getElementById('valGreen').innerText= val;
	sGreen=val;
}
function changeBlue(val)
{
	document.getElementById('valBlue').innerText= val;
	sBlue=val;
}