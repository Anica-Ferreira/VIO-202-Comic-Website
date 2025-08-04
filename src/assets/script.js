/*Anica Ferreira u24581802*/

/*Fade in text function*/
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.scroll_reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;

            if(elementBottom > 0 && elementTop < windowHeight){
                el.classList.add('visible');
            }else{
                el.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.scroll');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;

            if(elementBottom > 0 && elementTop < windowHeight){
                el.classList.add('visible');
            }else{
                el.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

//horisontal paralax scrolling
document.addEventListener("DOMContentLoaded", function () {
    const brush = document.querySelector(".paralx_brush");

    const updateBrushPosition = () => {
        if (!brush) return;

        const brushRect = brush.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (brushRect.bottom > 0 && brushRect.top < windowHeight) {
            const visibleRatio = 1 - (brushRect.top / windowHeight); 
            const clamped = Math.max(0, Math.min(visibleRatio, 1));

            const startLeft = 35;
            const endLeft = 0;
            const newLeft = startLeft + (endLeft - startLeft) * clamped;

            brush.style.left = `${newLeft}vw`;
        }
    };

    window.addEventListener('scroll', updateBrushPosition);
    updateBrushPosition();
});