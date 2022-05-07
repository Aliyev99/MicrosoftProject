
$(window).click(function() {
    let dotes = document.getElementsByClassName("dot");
    for (let i = 0; i < dotes.length; i++) {
        dotes[i].style.border = '2px solid transparent';
    }
   
    let burgerMenu = document.getElementsByClassName('menuList')[0];
    if(burgerMenu.classList.contains('active')){
        burgerMenu.classList.remove('active');
        var lines = $('#gamburger .gamburgerLine');
        lines[1].classList.remove('gamburgerLine2_Change');
        lines[0].classList.remove('gamburgerLine1_Change');
        lines[2].classList.remove('gamburgerLine3_Change');
    }

    let allWindowsDrop = document.getElementById('m-dropDown');
    let allWindowsDropBtn = document.getElementsByClassName('m-dropDownButton')[0];
    if(!allWindowsDrop.classList.contains('m-hidden')){
        allWindowsDrop.classList.add('m-hidden');
        allWindowsDropBtn.classList.remove('clickedDropdown');
    }
});

function allWindowsDropedDown(e){
    e.stopPropagation()
    e.currentTarget.classList.toggle("clickedDropdown");
    $("#m-dropDown").toggleClass('m-hidden');

    e.preventDefault();
}


let autoplayIntervalCar_1 = setInterval(()=>goToNextSlide(1), 5000); 
let autoplayIntervalCar_2 = setInterval(()=>goToNextSlide(2), 5000);
let autoplayIntervals = [autoplayIntervalCar_1, autoplayIntervalCar_2];


function stopAutoplay(carouselNum) {
    clearInterval(autoplayIntervals[carouselNum - 1]);
    autoplayIntervals[carouselNum - 1] = null;
}

function restartAutoPlay(carouselNum){
    autoplayIntervals[carouselNum - 1] = setInterval(()=>goToNextSlide(carouselNum), 5000); 
}

function resetAutoplay(carouselNum){
    if(autoplayIntervals[carouselNum - 1] != null){
        clearInterval(autoplayIntervals[carouselNum - 1]);
        autoplayIntervals[carouselNum - 1] = setInterval(()=>goToNextSlide(carouselNum), 5000); 
    }
}


function goToNextSlide(carouselNum){
    let carousel = '.m-carousel'  + carouselNum;
    let slides = $(carousel + ' .slide');
    let dotes = $(carousel + ' .dotInside')
    for (let i = 0; i < slides.length; i++) {
        if(window.getComputedStyle(slides[i], null).display == 'flex'){
            slides[i].style.display = 'none';
            dotes[i].style.backgroundColor = 'transparent';
            if(i + 1 < slides.length){
                slides[i + 1].style.display = 'flex';
                carouselNum == 1 ? dotes[i + 1].style.backgroundColor = 'black' : dotes[i + 1].style.backgroundColor = 'white';
                
            }
            else{
                slides[0].style.display = 'flex';
                carouselNum == 1 ? dotes[0].style.backgroundColor = 'black' : dotes[0].style.backgroundColor = 'white';
                
            }
            break;
        }
        
    }
    resetAutoplay(carouselNum);
}

function goToPrevSlide(carouselNum){
    let carousel = '.m-carousel'  + carouselNum;
    let slides = $(carousel + ' .slide');
    let dotes = $(carousel + ' .dotInside')

    for (let i = 0; i < slides.length; i++) {
        if(window.getComputedStyle(slides[i], null).display == 'flex'){

            slides[i].style.display = 'none';
            dotes[i].style.backgroundColor = 'transparent';

            if(i - 1 >= 0){
                slides[i - 1].style.display = 'flex';
                carouselNum == 1 ? dotes[i - 1].style.backgroundColor = 'black' : dotes[i - 1].style.backgroundColor = 'white';
                
            }
            else{
                slides[slides.length - 1].style.display = 'flex';
                carouselNum == 1 ? dotes[slides.length - 1].style.backgroundColor = 'black' : dotes[slides.length - 1].style.backgroundColor = 'white';
                
            }
            break;
        }
        
    }
    resetAutoplay(carouselNum);
}

function currentSlide(carouselNum, index, e){
    $(window).click();
    e.stopPropagation();
    let carousel = '.m-carousel'  + carouselNum;
    let slides = $(carousel + ' .slide');
    let dotes = $(carousel + ' .dotInside')

    for (let i = 0; i < dotes.length; i++) {
        
        if(i == index){
            if(carouselNum == 1){
                dotes[i].style.backgroundColor = 'black';
                e.currentTarget.style.border = "2px solid black"
            }
            else{
                dotes[i].style.backgroundColor = 'white';
                e.currentTarget.style.border = "2px solid white";
            }
            
            slides[i].style.display = 'flex';
            continue;
        }
        dotes[i].style.backgroundColor = 'transparent';
        slides[i].style.display = 'none';
    }
    resetAutoplay(carouselNum);
    
}



function stopSlideBtnClicked(carouselNum, e){
    let pauseIcon = document.getElementsByClassName('pauseIcon')[carouselNum - 1];
    let playIcon = document.getElementsByClassName('playIcon')[carouselNum - 1];
    let label = document.getElementsByClassName('playPauseBtnLabel')[carouselNum - 1];

    if(window.getComputedStyle(pauseIcon, null).display != 'none'){
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'block';
        label.innerText = 'Play slide';
        stopAutoplay(carouselNum);       
    }
    else{
        pauseIcon.style.display = 'block';
        playIcon.style.display = 'none';
        restartAutoPlay(carouselNum)
        label.innerText = 'Pause slide';
    }
    

}



$('#gamburger').click(function(event){
    event.stopPropagation();
    let menuList = document.getElementsByClassName('menuList')[0];
    menuList.classList.toggle('active');
    var lines = $('#gamburger .gamburgerLine');
    lines[1].classList.toggle('gamburgerLine2_Change');
    lines[0].classList.toggle('gamburgerLine1_Change');
    lines[2].classList.toggle('gamburgerLine3_Change');

});


$('#linksNextBtn').click(()=>{
    let nextBtn = document.getElementsByClassName('linkIconsMoveToRightBtn')[0];
    let prevBtn = document.getElementsByClassName('linkIconsMoveToLeftBtn')[0];
    let container = document.getElementsByClassName('linkIconsDivContainer')[0];
    if (window.getComputedStyle(container, null).right != '0') {
        container.classList.add('movedToRight');
        container.classList.remove('movedToLeft');

        nextBtn.classList.toggle('m-state');
        prevBtn.classList.toggle('m-state');

        console.log("Next: " + nextBtn.style.display + "  Prev: " + prevBtn.style.display);
    }
});

$('#linksPrevBtn').click(()=>{
    let nextBtn = document.getElementsByClassName('linkIconsMoveToRightBtn')[0]
    let prevBtn = document.getElementsByClassName('linkIconsMoveToLeftBtn')[0];
    let container = document.getElementById('underSliderIconsList');
    if (window.getComputedStyle(container, null).left != '0') {
        container.classList.add('movedToLeft');
        container.classList.remove('movedToRight');

        nextBtn.classList.toggle('m-state');
        prevBtn.classList.toggle('m-state');

        console.log("Next: " + nextBtn.style.display + "  Prev: " + prevBtn.style.display);
    }
});
