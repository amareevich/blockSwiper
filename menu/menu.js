export default function menu__action () {
    document.addEventListener('click', (e) => {
        const classList = e.target.classList;
        classList
            ? classList.forEach(el => {
                if (typeof clickMenu[el] === 'function') {
                    console.log('s')
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    clickMenu[el]();
                };
            })
            : null;
    });

    const clickMenu = {

        'menu': document.querySelector('.page__menu'),
        'modal': document.querySelector('.page__modal'),

        toggle() {
            if (this.menu.classList.contains('page__menu--action--open') || this.menu.classList.contains('page__menu--action--close')) {
                this.menu.classList.toggle('page__menu--action--close');
                this.menu.classList.toggle('page__menu--action--open');
                this.modal.classList.toggle('page__modal--action--open');
                this.modal.classList.toggle('page__modal--action--close');
            } else {
                this.menu.classList.toggle('page__menu--action--open');
                this.modal.classList.toggle('page__modal--action--open');
            };
        },

        'button--type--menu': function () { this.toggle() },
        'button--type--close': function () { this.toggle() },
        'page__modal--action--open': function () { this.toggle() }
    }
}