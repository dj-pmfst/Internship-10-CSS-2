document.addEventListener('DOMContentLoaded', function() {
    const scheduleLists = document.querySelectorAll('.schedule__list');
    
    scheduleLists.forEach(list => {
        const items = list.querySelectorAll('.schedule__item, .schedule__item--open');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        items.forEach(item => observer.observe(item));
    });
});