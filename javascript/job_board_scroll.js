document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.job-board__container');
    
    containers.forEach(container => {
        const scrollContainer = container.querySelector('.job-board__scroll');
        const leftBtn = container.querySelector('.job-board__nav--left');
        const rightBtn = container.querySelector('.job-board__nav--right');
        
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        });
        
        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        });
    });
});