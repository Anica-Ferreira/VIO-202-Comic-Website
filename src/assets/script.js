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