(function () {
   
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let isFixed = false;
    let windowPos;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {
        updatePos();

        if(windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');
            isFixed = true;
            navbar.classList.add('navbar-fixed');
            main.style.cssText = 'margin-top: ' + navbar + 'px';
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            isFixed = false;
            main.style.cssText = 'margin-top: ' + 0 + 'px';
        }
    }

    document.addEventListener('scroll', onScroll);
})()