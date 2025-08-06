var homeSlidesWrap = document.getElementById("home-slides");
var homeNumberOfSlides = 2;
for(var i=0;i<homeNumberOfSlides;i++){
	var dot = document.createElement("DIV");
	dot.setAttribute("class","dot");
	if(i==0){
		dot.classList.add("dotActive");
	}
	document.getElementById("home-dots-wrap").appendChild(dot);
}
var currentHomeSlide = 0;
var homeSlideWidth = homeSlidesWrap.getBoundingClientRect().width;
var slideWrap = document.createElement("DIV");
slideWrap.setAttribute("class","slide");
slideWrap.setAttribute("style","background-image:url("+bucket+"/images/home-"+eval(homeNumberOfSlides-1)+".jpeg);left:-"+homeSlideWidth+"px");
homeSlidesWrap.appendChild(slideWrap);
for(var i=0;i<2;i++){
	var slideWrap = document.createElement("DIV");
	slideWrap.setAttribute("class","slide");
	slideWrap.setAttribute("style","background-image:url("+bucket+"/images/home-"+i+".jpeg);left:"+i*homeSlideWidth+"px");
	homeSlidesWrap.appendChild(slideWrap);
}


function moveHomeSlide(){
	currentHomeSlide++;
	if(currentHomeSlide>homeNumberOfSlides-1){
		currentHomeSlide=0;
	}
	homeSlideWidth = homeSlidesWrap.getBoundingClientRect().width;
	var homeSlides = homeSlidesWrap.getElementsByClassName("slide");
	homeSlides[0].remove();
	var lastLeft = Number(homeSlides[homeSlides.length-1].style.left.split("p")[0]);
	var slideWrap = document.createElement("DIV");
	slideWrap.setAttribute("class","slide");
	var nextHomeSlide = currentHomeSlide+1>=homeNumberOfSlides ? 0 : currentHomeSlide+1;
	slideWrap.setAttribute("style","background-image:url("+bucket+"/images/home-"+nextHomeSlide+".jpeg);left:"+eval(lastLeft+homeSlideWidth)+"px");
	homeSlidesWrap.appendChild(slideWrap);
	for(var i=0;i<homeSlides.length;i++){
		homeSlides[i].style.left = Number(homeSlides[i].style.left.split("p")[0])-homeSlideWidth+"px";
	}

	var dots = document.getElementById("home-dots-wrap").getElementsByClassName("dot");
	for(var i=0;i<dots.length;i++){
		dots[i].classList.remove("dotActive")
	}
	dots[currentHomeSlide].classList.add("dotActive");
}
setInterval(moveHomeSlide,7000);


var arrivalSlides = document.getElementById("new-arrivals").getElementsByClassName("slide");
for(var i=0;i<arrivalSlides.length;i++){
	var navItem = document.createElement("DIV");
	navItem.setAttribute("class","navItem");
	document.getElementById("arrivals-line-nav").appendChild(navItem);
}
var arrivalSlidesLines = document.getElementById("arrivals-line-nav").getElementsByClassName("navItem");
function initializeArrivalSlides(){
	var activeSlideIndex = -1;
	for(var i=0;i<arrivalSlides.length;i++){
		if(arrivalSlides[i].dataset.active == 1){
			activeSlideIndex = i;
			break;
		}
	}
	if(activeSlideIndex>=0){
		for(var i=0;i<arrivalSlides.length;i++){
			arrivalSlides[i].style.left = (i-activeSlideIndex)*vw+"px";
		}
	}else{
		arrivalSlides[0].dataset.active = 1;
		arrivalSlidesLines[0].classList.add("navItemActive")
		for(var i=0;i<arrivalSlides.length;i++){
			if(i!=0){
				arrivalSlides[i].dataset.active = 0;
			}
			arrivalSlides[i].style.left = eval(i*vw)+"px";

		}
	}
}

initializeArrivalSlides()

function navArrivals(dir){
	var currentIndex = -1;
	for(var i=0;i<arrivalSlides.length;i++){
		if(arrivalSlides[i].dataset.active==1){
			currentIndex = i;
			arrivalSlides[i].dataset.active = 0;
			arrivalSlidesLines[i].classList.remove("navItemActive")
			break;
		}
	}
	if(currentIndex>=0){
		var nextIndex = currentIndex + dir;
		if(nextIndex<0){
			//show last slide
			for(var i=0;i<arrivalSlides.length;i++){
				arrivalSlides[i].style.left = -1*vw*(arrivalSlides.length-1-i)+"px";
			};
			arrivalSlides[arrivalSlides.length-1].dataset.active = 1;
			arrivalSlidesLines[arrivalSlides.length-1].classList.add("navItemActive")
		}else if(nextIndex>arrivalSlides.length-1){
			//show first slide
			for(var i=0;i<arrivalSlides.length;i++){
				arrivalSlides[i].style.left = i*vw+"px";
			};
			arrivalSlides[0].dataset.active = 1;
			arrivalSlidesLines[0].classList.add("navItemActive")
		}else{
			//show next slide
			for(var i=0;i<arrivalSlides.length;i++){
				arrivalSlides[i].style.left = Number(arrivalSlides[i].style.left.split("p")[0])-dir*vw + "px";
			}
			arrivalSlides[nextIndex].dataset.active = 1;
			arrivalSlidesLines[nextIndex].classList.add("navItemActive")
		}
	}else{
		console.log("Couldnt figure out slide index");
	}
}

function handleTouchStartArrivals(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMoveArrivals(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
           navArrivals(1)
        } else {
            /* left swipe */
           navArrivals(-1)
        }                       
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
document.getElementById("new-arrivals").addEventListener('touchstart', handleTouchStartArrivals, false);        
document.getElementById("new-arrivals").addEventListener('touchmove', handleTouchMoveArrivals, false);