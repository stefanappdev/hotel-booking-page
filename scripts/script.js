let dropdownMenuBtn=document.querySelector('#dropdown-menu-icon')


function openMenu(){
    let dropDownContent=document.querySelector('#dropdown-content');
    if(dropDownContent.classList.contains('hide')){
        dropDownContent.classList.replace('hide','show')
    } 
}

function closeMenu(){
     
     let dropDownContent=document.querySelector('#dropdown-content');
    if(dropDownContent.classList.contains('show')){
         dropDownContent.classList.replace('show','hide')
            
    }
}