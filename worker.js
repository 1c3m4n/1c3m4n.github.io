self.addEventListener('message', function(e) {
directionLeft = 1;
directionTop = 1;  	
x = e.data.x;
y = e.data.y;
modx = (Math.random()*2)+1;
mody = (Math.random()*2)+1;
setInterval(function(){
			
			x += modx * directionLeft;
  			y += mody * directionTop;
  			if (x < -400) {directionLeft= 1; x = -400;}
			if (x > 400) {directionLeft = -1; x = 400;}
			if (y < -300) {directionTop = 1;y = -300;}
			if (y > 300) {directionTop = -1; y = 300;}
  			e.data.x = x;
  			e.data.y = y;
			self.postMessage(e.data);}
			,5);
}, false);