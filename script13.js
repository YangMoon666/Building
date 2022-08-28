window.onload = function () {
    document.querySelector('.load').classList.add('_un_active');
}
// Меню
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.navbar');
const loginBody = document.querySelector('.header__body_login_box');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        loginBody.classList.toggle('_active');
    });
}
//Навигатор
const menuLinks = document.querySelectorAll('.navigator_system[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

//слайдер jq
const owl = $('.owl-carousel');
owl.owlCarousel({
    margin: 30,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
        580: {
            items: 2
        },
        893: {
            items: 3
        }
    }
});



// Попап
let menuArrows = document.querySelectorAll('.page__popup_title_img');
if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
        });
    }
}

//значение инпута
function getValue(event){
    let a = event.id
    let d = document.getElementById(a + '_2');
    d.innerHTML = event.innerHTML;
    document.getElementById(a + '_block').classList.toggle('_active')
}

const animItems = document.querySelectorAll('.lite_2__contant_block');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_look');
            } else {
                animItem.classList.remove('_look');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

