
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
        }
    });
}, observerOptions);

document.querySelectorAll('.lectures__block:nth-child(1) .lecture').forEach(lecture => {
    lecture.dataset.animation = 'animate-left';
    observer.observe(lecture);
});

document.querySelectorAll('.lectures__block:nth-child(2) .lecture').forEach(lecture => {
    lecture.dataset.animation = 'animate-right';
    observer.observe(lecture);
});