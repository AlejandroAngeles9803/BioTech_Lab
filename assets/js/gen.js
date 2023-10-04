const nav = document.querySelector('#nav');
const btn = document.querySelector('#btn');

const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');


const text1 = document.querySelector('#text-1');
const text2 = document.querySelector('#text-2');
const text3 = document.querySelector('#text-3');

const paragraph = document.querySelector('.paragraph_main');
const paragraph2 = document.querySelector('#paragraph2');
const paragraph3 = document.querySelector('#paragraph3');

const cerrar = document.querySelector('#cerrar');
const abrir = document.querySelector('#abrir');


abrir.addEventListener('click', () => {
    nav.classList.add('visible');
    abrir.classList.add('cerrar-menu');
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})

btn.addEventListener('click', () => {
    if (text1.classList.contains('show')) {
        text1.classList.remove('show');
        paragraph.classList.remove('show');
        gsap.from('#text-3',{
            yPercent: 5,
            ease: Bounce.easeIn,
            duration: 2,
        })

    } else {
        text1.classList.add('show');
        paragraph.classList.add('show');
        gsap.from('#text-3',{
            yPercent: 5,
            ease: Bounce.easeIn,
            duration: 2,
        })

    }


})

btn2.addEventListener('click', () => {
    if (text2.classList.contains('show')) {
        text2.classList.remove('show');
        paragraph2.classList.remove('show');
        gsap.from('#text-3',{
            yPercent: 5,
            ease: Bounce.easeIn,
            duration: 2,
        })

    } else {
        text2.classList.add('show');
        paragraph2.classList.add('show');
        gsap.from('#text-3',{
            yPercent: 5,
            ease: Bounce.easeIn,
            duration: 2,
        })

    }


})

btn3.addEventListener('click', () => {
    if (text3.classList.contains('show')) {
        text3.classList.remove('show');
        paragraph3.classList.remove('show');
        gsap.from('#text-3',{
            yPercent: 5,
            ease: Bounce.easeIn,
            duration: 2,
        })


    } else {
        text3.classList.add('show');
        paragraph3.classList.add('show');
        gsap.from('#text-3',{
            yPercent: 5,
            ease: Bounce.easeIn,
            duration: 2,
        })

    }


})