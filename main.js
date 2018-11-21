var circleEl = document.getElementById('circle');

var soundsArr = ['sounds/bubbles.mp3','sounds/confetti.mp3','sounds/clay.mp3','sounds/corona.mp3','sounds/flash-1.mp3','sounds/flash-2.mp3'
,'sounds/flash-3.mp3','sounds/glimmer.mp3','sounds/moon.mp3','sounds/pinwheel.mp3','sounds/piston-1.mp3','sounds/piston-2.mp3','sounds/piston-3.mp3','sounds/prism-1.mp3'
,'sounds/prism-2.mp3','sounds/prism-3.mp3','sounds/splits.mp3','sounds/strike.mp3','sounds/timer.mp3'];


const randomColors = ()=>{
	document.getElementById('title').style.display = 'none';
	var soundurl =  Math.floor(Math.random()*20);
	var sound = new Howl({
     src: [soundsArr[soundurl]]
    });
	circleEl.style.display = 'block';
		var num1  = Math.floor(Math.random()*256);
		var num2  = Math.floor(Math.random()*256);
		var num3  = Math.floor(Math.random()*256);
		var color = `rgb(${num1}, ${num2}, ${num3})`;
		var width = Math.floor(Math.random()*500);
		var top = Math.floor(Math.random()*510);
		var left = Math.floor(Math.random()*1090);
		if(width<50)width=50;
		var height = width;
	circleEl.style.left = left+'px'	
	circleEl.style.top = top+'px';
	circleEl.style.height = height+'px';
	circleEl.style.width = width+'px';	
	circleEl.style.backgroundColor = color;
	sound.play();
	$('#circle').fadeOut(650); 	
}		

