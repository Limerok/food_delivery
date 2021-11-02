'use strict';
const overlay = document.querySelector('.overlay'),
    oveerlay = document.querySelector('.overlay'),
    fancyboxBlock = document.querySelectorAll('.fancybox-block'),
    buttonFancybox = document.querySelectorAll('a'),
    fancyboxLogin = document.querySelector('.fancybox-login'),
    fancyboxRegistration = document.querySelector('.fancybox-registration'),
    fancyboxRecoverAccount = document.querySelector('.fancybox-recover-account'),
    fancyboxFeedback = document.querySelector('.fancybox-feedback');

buttonFancybox.forEach(item => {
    const href = item.getAttribute('href');
    if (href === '#login') {
        item.addEventListener('click', event => {
            event.preventDefault();
            overlay.classList.add('active');
            fancyboxRegistration.classList.remove('active');
            fancyboxLogin.classList.add('active');
        });
    } else if (href === '#registration') {
        item.addEventListener('click', event => {
            event.preventDefault();
            fancyboxLogin.classList.remove('active');
            overlay.classList.add('active');
            fancyboxRegistration.classList.add('active');
        });
    } else if (href === '#recover-account') {
        item.addEventListener('click', event => {
            event.preventDefault();
            fancyboxLogin.classList.remove('active');
            overlay.classList.add('active');
            fancyboxRecoverAccount.classList.add('active');
        });
    } else if (href === '#cart') {
        item.addEventListener('click', event => {
            event.preventDefault();
            overlay.classList.add('active');
        });
    } else if (href === '#feedback') {
        item.addEventListener('click', event => {
            event.preventDefault();
            overlay.classList.add('active');
            fancyboxFeedback.classList.add('active');
        });
    }
});
oveerlay.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    console.log(target);
    if (target.classList.contains('fancybox-close') || target.classList.contains('fancybox-container')) {
        overlay.classList.remove('active');
        fancyboxBlock.forEach(item => {
            item.classList.remove('active');
        });
    }
});

