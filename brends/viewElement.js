const changeable__element = document.querySelector('.swiper-wrapper');
const span = document.querySelector('.unwrap-btn__text');
const img = document.querySelector('.unwrap-btn__arrow-img');

const changing__elements__btn = {
    'open': "Показать все",
    'close': "Скрыть",
};

function default__style() {
    changeable__element.classList.remove('brends__ul-names--action--open');
    changeable__element.removeAttribute('style');
    span.classList.add('unwrap-btn__text--action--open');
    span.textContent = changing__elements__btn['open'];
    span.classList.remove('unwrap-btn__text--action--close');
    img.classList.add('unwrap-btn__arrow-img--action--open');
}

export default function viewElement(flag) {
    const btn = document.querySelector('.unwrap-btn--action--changes-width');
    if (flag) {
        btn.addEventListener('click', changingElements);
        window.addEventListener('resize', default__style);
    } else {
        btn.removeEventListener('click', changingElements);
        window.removeEventListener('resize', default__style);
    }
}

function changingElements() {
    changeable__element.classList.toggle('brends__ul-names--action--open');
    changeable__element.classList.contains('brends__ul-names--action--open')
        ? changeable__element.style.height = changeable__element.scrollHeight + "px"
        : changeable__element.removeAttribute('style');

    img.classList.toggle('unwrap-btn__arrow-img--action--open');
    span.classList.toggle('unwrap-btn__text--action--open');
    span.classList.toggle('unwrap-btn__text--action--close');

    span.classList.contains('unwrap-btn__text--action--open')
        ? span.textContent = changing__elements__btn['open']
        : span.textContent = changing__elements__btn['close'];
}



