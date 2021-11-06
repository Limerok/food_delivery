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
//закрытие на крест или мимо
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

/*----Slider----*/
const slider = () => {
    const slider = document.querySelector('.slider'),
        slide = document.querySelectorAll('.slide');
    let currentSlide = 0,
    interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlay = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlay, time);
    };
    startSlide(4000);
    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click', event => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.button-item')){
            return;
        }

        prevSlide(slide, currentSlide, 'slide-active');

        if (target.matches('.button-item-left')){
            
            currentSlide--;
        } else if (target.matches('.button-item-right')) {
            currentSlide++;
        } 

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'slide-active');
    });
    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.button-item')){
            stopSlide(4000);
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.button-item')) {
            startSlide(4000);
        }
    });
};
slider();

/*const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        portfolioDot = document.querySelector('.portfolio-dots'),
        slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlay = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlay, time);
    };
    startSlide(1500);

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-left')){
            currentSlide--;
        } else if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if(elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
        
    });
    
};*/

