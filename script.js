function change() { 

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', change);
   mobileNav.classList.add('open');
}

document.addEventListener('click', change);
  
    







