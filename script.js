document.addEventListener('DOMContentLoaded', () => {
    let flag__module__swiper = false;
    let flag__module__desktop = false;
    let module__swiper;
    let module__desktop;

    async function setListener() {
        if (window.innerWidth < 767 && flag__module__swiper === false) {
            flag__module__swiper = true;
            flag__module__desktop = false;
 
            module__desktop
                ? module__desktop(flag__module__desktop)
                : null;

            module__swiper = (await (import('./brends/swiper.js'))).default();

        } else if (window.innerWidth > 767 && flag__module__desktop === false) {
            module__swiper
                ? module__swiper.destroy()
                : null;

            flag__module__desktop = true;
            flag__module__swiper = false;
            module__desktop = (await (import('./brends/viewElement.js'))).default;
            module__desktop(flag__module__desktop);
        };
    };
    setListener();
    window.addEventListener('resize', setListener);
});


document.addEventListener('click', (e) => {
    const classList = e.target.classList;
    classList
        ? classList.forEach(el => {
            if (typeof clickMenu[el] === 'function') {
                e.preventDefault();
                e.stopImmediatePropagation();
                clickMenu[el]();
            };
        })
        : null;
});

const clickMenu = {

    'menu': document.querySelector('.menu'),
    'modal': document.querySelector('.modal'),

    toggle() {
        if (this.menu.classList.contains('menu--open') || this.menu.classList.contains('menu--close')) {
            this.menu.classList.toggle('menu--close');
            this.menu.classList.toggle('menu--open');
            this.modal.classList.toggle('modal--open');
            this.modal.classList.toggle('modal--close');
        } else {
            this.menu.classList.toggle('menu--open');
            this.modal.classList.toggle('modal--open');
        };
    },

    'button--type--menu': function () { this.toggle() },
    'button--type--close': function () { this.toggle() },
    'modal--open': function () { this.toggle() }
}

