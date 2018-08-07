window.onload=function(){
	init();
}

var colorSwitch=localStorage.getItem('colorVal') || 0;


function init(){
	
	colorSwitchOnLoad();
	
	function colorSwitchOnLoad(){
		if (colorSwitch==1) {
			document.getElementById("headerBar").style.backgroundColor="#dc0014";
		}
	}
		$('.mobileNavOption').click(function(e) {
		var navOption = $(this).data('nav');
		$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		
		if (navOption == 1) {
			document.location.href = 'index.html';
		}
		if (navOption == 2) {
			document.location.href = 'customizer.html';
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
			document.location.href = 'customizer.html';
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