$( document ).ready(function(){
	/*waits for the document to load then calls the main body of js*/
	init();
});

/*youtube video ids for music videos, used in the track on-click function*/
var videoIdArray = ["nL0DRvKaThw","AV50dBPO2ow","0a3Wlk8jVo0","osg9PmkfTB0","","","","","","","","","","","","","","","","",""];

/*names of songs in albums, split into groups of 7, when album an album is clicked, song names displayed are changed 0-6:album1 7-13:album2 14-20:album3*/
var trackNames = ["Technology","Stay Ignorant","Come Out To La","Pretty","The Blues","TightRope","Everybody","SuperLove","Automatic","Money Power Fame","Fire","Nerve","You Wanna Know","Wrong Place Wrong Time","Priorities","Hold On","Whole Truth","Back In The Day","Actors","Here's The Thing","Fancy Dress"];

/*used to change src of video player corresponding to selected song*/
var currentTrack;

function init() {
	
	
	
	/*focuses window on respective element when mobile menu option is clicked*/
	$('.mobileNavOption').click(function(e) {
		var navOption = $(this).data('nav');
		$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		
		if (navOption == 1) {
			document.getElementById("mobileNav").style.width="0%";
			document.getElementById("headerBar").scrollIntoView();
		}
		if (navOption == 2) {
			document.getElementById("mobileNav").style.width="0%";
			document.getElementById("albumWrapper").scrollIntoView();
		}
		if (navOption == 3) {
			document.getElementById("mobileNav").style.width="0%";
			document.getElementById("customizerWrapper").scrollIntoView();
		}
		if (navOption == 4) {
			document.getElementById("mobileNav").style.width="0%";
			document.getElementById("reportWrapper").scrollIntoView();
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
		if (navOption == 3) {
			document.getElementById("customizerWrapper").scrollIntoView();
		}
		if (navOption == 4) {
			document.getElementById("reportWrapper").scrollIntoView();
		}
		if (navOption ==5)
		{
			
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
	
	
	/*when an album is clicked, changes the text in the track buttons*/
	$('.album').click(function(e) {
		var id = this.id;
		
		/*iterates through .track class elements chaning the data-track value of each effectivly changing the links*/
		$('.track').each(function(i, obj) {
			if (id=="album1") {
				$(this).data('track',i);
				var currentTrack = $(this).data('track');
				$(this).html(trackNames[currentTrack]);
			}
			if (id=="album2") {
				$(this).data('track',(i+7));
				var currentTrack = $(this).data('track');
				$(this).html(trackNames[currentTrack]);
			}
			if (id=="album3") {
				$(this).data('track',(i+14));
				var currentTrack = $(this).data('track');
				$(this).html(trackNames[currentTrack]);
			}
		});
	});
	
	/*fetches video id  of selected track and changes src of video player to display the video*/
	$('.track').click(function(e) {	
		console.log($(this).data('track'));
		var currentTrack = $(this).data('track');
		document.getElementById("albumVideo").src="https://www.youtube-nocookie.com/embed/"+videoIdArray[currentTrack]+"?rel=0&amp;showmedia=0";
	});
	
	$('.navDot').click(function(e) {
		var dotid=$(this).data('dot');
		if (dotid == 1) {
			console.log('background1');
			$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		}		
		if (dotid == 2) {
			console.log('background2');
			$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		}	
		if (dotid == 3) {
			console.log('background3');
			$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		}	
		if (dotid == 4) {
			console.log('background4');
			$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		}		
		if (dotid == 5) {
			console.log('background5');
			$('#imageSlideShow').css('background-image','url(../images/automaticCover.jpeg)');
		}
	});
};

