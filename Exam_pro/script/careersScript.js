$(window).click(function() {
    
    closeDropdowns(-1);
    
    
    
    let dotes = document.getElementsByClassName("dot");
    for (let i = 0; i < dotes.length; i++) {
        dotes[i].style.border = '2px solid transparent';
    }

    let burgerMenu = document.getElementsByClassName('burgerMenu')[0];
    burgerMenu.classList.remove('active');
    var lines = $('#gamburger .gamburgerLine');
    lines[1].classList.remove('gamburgerLine2_Change');
    lines[0].classList.remove('gamburgerLine1_Change');
    lines[2].classList.remove('gamburgerLine3_Change');

  });

  function closeDropdowns(clickednBtnIndex){
    let dropdownList = document.getElementsByClassName('dropdownList');
    for (let i = 0; i < dropdownList.length; i++) {
        if(i == clickednBtnIndex){
            continue;
        }
        dropdownList[i].classList.add('m-hidden');
    }

    let dropdownBtn = document.getElementsByClassName('m-dropDownButton');
    for (let i = 0; i < dropdownBtn.length; i++) {
        if(i == clickednBtnIndex){
            continue;
        }
        dropdownBtn[i].classList.remove('clickedDropdown');
    }
  }
function dropdownBtnClicked(e, index){
    closeDropdowns(index)
    e.stopPropagation();
    let dropdownList = document.getElementsByClassName('dropdownList')[index];
    dropdownList.classList.toggle('m-hidden');
    e.currentTarget.classList.toggle('clickedDropdown');
    e.preventDefault();
}

let feedBackSelected = false;
function feedbackClicked(e, index){
    let btns = document.getElementsByClassName('hiddenDivFeedbackBtn');
    for (let i = 0; i < btns.length; i++) {
        if(i == index){
                btns[i].style.backgroundColor = '#007AC0';
                btns[i].style.color = 'white';
                feedBackSelected = true;
                continue;
            }
        btns[i].style.backgroundColor = '#F0F0F0';
        btns[i].style.color = 'black';
    }
    
}


function hiddenDivNextBtn1_Clicked(e){
   
    if(feedBackSelected == false){
        let label = document.getElementsByClassName('notAnsweredQuestion')[0];
        label.classList.remove('m-hidden');
    }
    else{
        let currePage = document.getElementsByClassName('hiddendivFirstPage')[0];
        currePage.classList.add('m-hidden');

        let newPage = document.getElementsByClassName('hiddendivIssueLastPage')[0];
        newPage.classList.remove('m-hidden');
    }
    e.preventDefault();
}

function hiddenDiveMoveBtn_Clicked(e){
    let feedbackDiv = document.getElementsByClassName('hiddenDiv')[0];
    feedbackDiv.classList.toggle('activeFeedbackDiv');
    e.preventDefault();
}


function selectImageListImage_Clicked(e, index){
    let imageDivs = document.getElementsByClassName('selectImageDiv');
    let selectImages = document.getElementsByClassName('selectImage');
    let imageInfoes = document.getElementsByClassName('imageInfo');
    let images = document.getElementsByClassName('selectImageContainerImg');
    
    for (let i = 0; i < imageDivs.length; i++) {
        if(i == index){
                imageDivs[i].classList.add('activeSelectImageDiv');
                selectImages[i].classList.add('activeSelectImage');
                imageInfoes[i].classList.remove('m-hidden');
                images[i].classList.remove('m-hidden');
                continue;
            }
            imageDivs[i].classList.remove('activeSelectImageDiv');
            selectImages[i].classList.remove('activeSelectImage');
            imageInfoes[i].classList.add('m-hidden');
            images[i].classList.add('m-hidden');
    }
    e.preventDefault();
}





function goToNextSlide(){

    let slides = $('.slide');
    let dotes = $('.dotInside')
    for (let i = 0; i < slides.length; i++) {
        if(window.getComputedStyle(slides[i], null).display == 'flex'){
            slides[i].style.display = 'none';
            dotes[i].style.backgroundColor = 'transparent';
            if(i + 1 < slides.length){
                slides[i + 1].style.display = 'flex';
                dotes[i + 1].style.backgroundColor = 'black';
                
            }
            else{
                slides[0].style.display = 'flex';
                dotes[0].style.backgroundColor = 'black';
                
            }
            break;
        }
        
    }
}

function goToPrevSlide(){
    let slides = $('.slide');
    let dotes = $('.dotInside')

    for (let i = 0; i < slides.length; i++) {
        if(window.getComputedStyle(slides[i], null).display == 'flex'){

            slides[i].style.display = 'none';
            dotes[i].style.backgroundColor = 'transparent';

            if(i - 1 >= 0){
                slides[i - 1].style.display = 'flex';
                dotes[i - 1].style.backgroundColor = 'black'
                
            }
            else{
                slides[slides.length - 1].style.display = 'flex';
                dotes[slides.length - 1].style.backgroundColor = 'black'
                
            }
            break;
        }
        
    }
}

function currentSlide(index, e){
    $(window).click();
    e.stopPropagation();
    let slides = $('.slide');
    let dotes = $('.dotInside')

    for (let i = 0; i < dotes.length; i++) {
        
        if(i == index){
            dotes[i].style.backgroundColor = 'black';
            e.currentTarget.style.border = "2px dashed black"
            
            slides[i].style.display = 'flex';
            continue;
        }
        dotes[i].style.backgroundColor = 'transparent';
        slides[i].style.display = 'none';
    }
    
}




$('#gamburger').click(function(event){
    event.stopPropagation()
    let burgerMenu = document.getElementsByClassName('burgerMenu')[0];
    burgerMenu.classList.toggle('active');
    var lines = $('#gamburger .gamburgerLine');
    lines[1].classList.toggle('gamburgerLine2_Change');
    lines[0].classList.toggle('gamburgerLine1_Change');
    lines[2].classList.toggle('gamburgerLine3_Change');

});





