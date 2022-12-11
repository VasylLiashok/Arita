const init = () => {
    window.addEventListener('loaded', preloaderStart())

    const showNextSlide = () => {
        
        bgSlides('down');
        imagesSlides('down');
        shapeSlides('down');
        textSlides('down');
    };

    const showPrevSlide = () => {
        
        bgSlides('up');
        imagesSlides('up');
        shapeSlides('up');
        textSlides('up');
    };
    if (window.innerWidth >= 768) {
        window.addEventListener('wheel', (e) => {
            let delta = -e.deltaY;
            if (delta > 0) {
                if (helperInput.value == 1) {
                    
                    helperInput.value = 0;
                    showPrevSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            } else {
                if (helperInput.value == 1) {
                    
                    helperInput.value = 0;
                    showNextSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            }
        })
    }
    else {
        document.addEventListener("swiped-left", () => {
            showNextSlide();
        });
        document.addEventListener("swiped-right", () => {
            showPrevSlide();
        } );
    }
};

init();

function preloaderStart() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
        preloader.classList.remove('preloader-animation');
        preloader.classList.add('preloader-hidden');
    }, 3000);

    setTimeout(() => {
        startAnimation();
        preloader.classList.add('preloader-none');
    }, 3200);
}