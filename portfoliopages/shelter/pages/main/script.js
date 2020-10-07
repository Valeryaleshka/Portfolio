
let btnNext = document.getElementById('btn-next');
let btnPrev = document.getElementById('btn-prev');
let slider = document.getElementById('slider');

btnPrev.addEventListener('click',moveNext);

btnNext.addEventListener('click',movePrev);
let margin = 0;

if(margin=0){

}

function moveNext(){
    
    if(margin===0){

    }else{
        margin += 360;
    slider.style.marginLeft = `${margin}px`
    console.log(margin)
    
}
}

function movePrev(){
    if(margin===-1440){

    }else{
        margin -= 360;
    slider.style.marginLeft = `${margin}px`
    console.log(margin)
    }

    
   
}










/*$(document).ready(function() {

    let position = 0;
    const slidesToShow = 5;
    const slidesToScroll = 3;
    const carholder = $('#cardHolder');
    const card = $('.card');
    const buttonNext = $('#bnt-next');
    const buttonPrev = $('#btn-prev');
    const cardWidth = carholder.width()/slidesToShow;
    
    buttonNext.click(function(){
        console.log("bntfrwrd")

       cardholder.css({
            transform: `translateX(${250}px)`
        });
    });
    
});*/