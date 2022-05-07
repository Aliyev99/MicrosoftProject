$(window).click(function() {
    closeDropdowns(-1);
    
    
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
    let allWindowsDropBtn = document.getElementById('m-allWindwosWropDownBtn');
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


$('#gamburger').click(function(event){
    event.stopPropagation();
    let menuList = document.getElementsByClassName('menuList')[0];
    menuList.classList.toggle('active');
    var lines = $('#gamburger .gamburgerLine');
    lines[1].classList.toggle('gamburgerLine2_Change');
    lines[0].classList.toggle('gamburgerLine1_Change');
    lines[2].classList.toggle('gamburgerLine3_Change');

});

