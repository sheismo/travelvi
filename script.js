const open = document.querySelector('.bi-list')
const close = document.querySelector('.bi-x')
const mobileNav = document.querySelector('.mobile-nav-page')

open.addEventListener('click', () => {
    mobileNav.style.animation = "transition 500ms linear"
    mobileNav.style.display = "block"
    open.style.display = "none"
});

close.addEventListener('click', () => {
    mobileNav.style.animation = "fade 300ms linear"
    setTimeout(() => {
        mobileNav.style.display = "none"
        open.style.display = "block"
    }, 300)
    
});


