
let btnNext = document.getElementById('btn-next');
let btnNextAll = document.getElementById('btn-next-all');
let pageNumber = document.getElementById('page-number');
let btnPrev = document.getElementById('btn-prev');
let btnPrevAll = document.getElementById('btn-prev-all');




let slider = document.getElementById('sliderPets');

btnPrev.addEventListener('click',moveNext);

btnNext.addEventListener('click',movePrev);
let margin = 0;
active();

function active(){
    if(margin === 0){
        btnPrev.style.border = 'solid 2px #CDCDCD';
        btnPrev.style.hover = 'none';
        
        btnPrevAll.style.border = 'solid 2px #CDCDCD';
        btnPrevAll.style.color = '#CDCDCD';
    }else{
        btnPrev.style.border = 'solid 2px #f1cdb3';
        
        btnPrevAll.style.border = 'solid 2px #f1cdb3';
       
        
    }

    if(margin === -930){
        btnNext.style.border = 'solid 2px #CDCDCD';
        btnNextAll.style.border = 'solid 2px #CDCDCD';
    }else{
        btnNext.style.border = 'solid 2px #f1cdb3';
        btnNextAll.style.border = 'solid 2px #f1cdb3';
    }
}


function moveNext(){
    
    if(margin===0){

    }else{
        margin += 930;
    slider.style.marginLeft = `${margin}px`
    pageNumber.innerHTML = "<h4>1</h4>"  
    active();  
    console.log(margin)
    
}
}

function movePrev(){
    if(margin===-930){

    }else{
        margin -= 930;
    slider.style.marginLeft = `${margin}px`
    pageNumber.innerHTML = "<h4>2</h4>"
    active();
    console.log(margin)
    }

    
   
}