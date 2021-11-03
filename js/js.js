'use strict';
const overlay = document.querySelector('.overlay'),
    oveerlay = document.querySelector('.overlay'),
    fancyboxBlock = document.querySelectorAll('.fancybox-block'),
    buttonFancybox = document.querySelectorAll('a'),
    fancyboxLogin = document.querySelector('.fancybox-login'),
    fancyboxRegistration = document.querySelector('.fancybox-registration'),
    fancyboxRecoverAccount = document.querySelector('.fancybox-recover-account'),
    fancyboxFeedback = document.querySelector('.fancybox-feedback'),
    fancyboxCart = document.querySelector('.fancybox-cart'),
    fancyboxFeedbackCard = document.querySelector('.fancybox-feedback-card'),
    buttonFeedbackCard = document.querySelectorAll('.tabs-card button');

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
            fancyboxCart.classList.add('active');
        });
    } else if (href === '#feedback') {
        item.addEventListener('click', event => {
            event.preventDefault();
            overlay.classList.add('active');
            fancyboxFeedback.classList.add('active');
        });
    }
});
function buttonFeedbackCardNone () {
    overlay.classList.remove('active');
    fancyboxFeedbackCard.classList.remove('active');
}
buttonFeedbackCard.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        overlay.classList.add('active');
        fancyboxFeedbackCard.classList.add('active');
        setTimeout(buttonFeedbackCardNone, 2000);
    });
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

/* --- Категории блюд --- */
const tabsLink = document.querySelectorAll('.tabs-link'),
    tabsContant = document.querySelectorAll('.tabs-contant'),
    buttonCategory = document.querySelector('.button-category');


//Показать больше блюд
buttonCategory.addEventListener('click', event => {
    event.preventDefault();
    let attribute = document.querySelector('.tabs-link--active').getAttribute('href').replace(/^#/,'');
    
    let activeCategore = document.querySelectorAll('.tabs-contant-' + attribute + '.hidden');

    if (activeCategore) {
        activeCategore[0].classList.remove('hidden');
    }
    if (activeCategore.length <= 1) {
        buttonCategory.style.display = 'none';
    }
});

//переключение категорий
function activeTabsContent (active) {
    tabsContant.forEach(item => {
        item.classList.add('hidden');
    });
    const activeTabs = document.querySelector('.tabs-contant-' + active);
    activeTabs.classList.remove('hidden');
}
//Активная категория блюд
function CleanTabsAxtive () {
    tabsLink.forEach(item => {
        item.classList.remove('tabs-link--active');
    });
    buttonCategory.style.display = 'block';
}
tabsLink.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        if(!target.classList.contains('tabs-link--active')){
            CleanTabsAxtive();
            target.classList.add('tabs-link--active');
            let attribute = target.getAttribute('href').replace(/^#/,'');
            activeTabsContent(attribute);
        }
    });
});


