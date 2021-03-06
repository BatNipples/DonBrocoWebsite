window.onload=function(){
	init();
}

var colorSwitch=localStorage.getItem('colorVal') || 0;

function init(){
	var mousePos;
	var lastx;
	var lasty;
	var x;
	var y;
	
	colorSwitchOnLoad();
	
	function colorSwitchOnLoad(){
		if (colorSwitch==1) {
			document.getElementById("headerBar").style.backgroundColor="#dc0014";
		}
	}
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	
		$('.mobileNavOption').click(function(e) {
		var navOption = $(this).data('nav');
		$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		
		if (navOption == 1) {
			document.location.href = 'index.html';
		}
		if (navOption == 2) {
			document.location.href = 'report.html';
		}
		if (navOption == 3) {
			toggle();
		}
	});
	
	/*switches to another webpage when menu option is clicked*/
	$('.navOption').click(function(e) {
		var navOption = $(this).data('nav');
		
		if (navOption == 1) {
			document.location.href = 'index.html';
		}
		if (navOption == 2) {
			document.location.href = 'report.html';
		}
		if (navOption == 3) {
			toggle();
		}
	});
	
	/*opens the mobileNav overlay*/
	$('#mobileButton').click(function(e) {	
		document.getElementById("mobileNav").style.width="100%";
	});
	
	/*closes the mobileNav menu overlay*/
	$('#closebtn').click(function(e) {	
		document.getElementById("mobileNav").style.width="0%";
	});
	
	
	canvas.addEventListener("click",function(e) {
		mousePos = false;
	});
	
	canvas.addEventListener("mousedown",function(e) {
		lastx = e.pageX - this.offsetLeft;
		lasty = e.pageY - this.offsetTop;
		mousePos = true;
	});

	canvas.addEventListener("mousemove",function(e) {
		x = e.pageX - this.offsetLeft;
		y = e.pageY - this.offsetTop;
		if (mousePos == true) {draw(x,y);}
		lastx=x;
		lasty=y;

	});
	
	canvas.addEventListener("mouseleave",function(e) {
		x = e.pageX - this.offsetLeft;
		y = e.pageY - this.offsetTop;
		mousePressed = false;
	});
	
	
	function draw (newx,newy) {
		ctx.beginPath();
		ctx.strokeStyle = (document.getElementById('line_color').value);
		ctx.lineWidth = (document.getElementById('line_size').value);
		ctx.moveTo(lastx,lasty);
		ctx.lineTo(newx,newy);
		ctx.stroke();
		ctx.closePath();
	}
	
	document.getElementById('eraser').addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, false);
	
	function toggle() {
		if (colorSwitch==0) {
			colorSwitch=1;
			console.log('Switch to red');
			localStorage.setItem('colorVal',1);
			document.getElementById("headerBar").style.backgroundColor="#dc0014";
		}
		else {
			colorSwitch=0;
			console.log('Switch to yellow');
			localStorage.setItem('colorVal',0);
			document.getElementById("headerBar").style.backgroundColor="#ffcb5b";
		}
	}	
}