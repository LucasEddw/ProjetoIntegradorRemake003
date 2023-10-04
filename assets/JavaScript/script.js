

const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');
const body = document.getElementsByTagName('body');
const menuInput = document.getElementById('MostrarMenu');

navMenu.addEventListener('click', function(){
    menuInput.checked = false;
})

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
})

function search(){
    let input = document.getElementById('SearchBar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('content_card');
    
    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input) ){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "flex"
        }
    }
}