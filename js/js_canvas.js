window.onload=function(){
	init();
}
function init(){
	var mousePos;
	var lastx;
	var lasty;
	var x;
	var y;

	console.log('ready');
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	
		$('.mobileNavOption').click(function(e) {
		var navOption = $(this).data('nav');
		$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		
		if (navOption == 1) {
			document.getElementById("mobileNav").style.width="0%";
			document.getElementById("headerBar").scrollIntoView();
		}
		if (navOption == 2) {
			document.getElementById("mobileNav").style.width="0%";
			
		}
	});
	
	
	/*focuses window on respective element when menu option is clicked*/
	$('.navOption').click(function(e) {
		var navOption = $(this).data('nav');
		
		if (navOption == 1) {
			document.getElementById("headerBar").scrollIntoView();
		}
		if (navOption == 2) {
			document.getElementById("albumWrapper").scrollIntoView();
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
}