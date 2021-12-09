const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu');
const body =document.querySelector('body');

btnHamburger.addEventListener('click', () => {
    console.log("Button Clicked Bro")

    

    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
        
        if(overlay.classList.contains('fade-in')) {
            overlay.classList.remove('fade-in');
            overlay.classList.add('fade-out');

        }
        
        
    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        if(overlay.classList.contains('fade-out')){
            overlay.classList.remove('fade-out');

        }

        overlay.classList.add('fade-in');
        menu.classList.add('fade-in');
        menu.classList.remove('fade-out');
        
    }
});