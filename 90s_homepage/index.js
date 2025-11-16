document.addEventListener('DOMContentLoaded', function() {
    const cover = document.getElementById('cover');
    if (!cover) return;

    
    const lines = Math.min(120, Math.round(window.innerHeight / 6)); 
    const delayStep = 25;
    const lineHeight = Math.ceil(window.innerHeight / lines);


    for (let i = 0; i < lines; i++) {
        const line = document.createElement('div');
        line.className = 'cover-line';
        line.style.top = (i * lineHeight) + 'px';
        line.style.height = lineHeight + 'px';
        line.style.animationDelay = (i * delayStep) + 'ms';
        cover.appendChild(line);
        requestAnimationFrame(() => line.classList.add('revealing'));
    }

    
    const totalDuration = 360 + (lines - 1) * delayStep; 
    setTimeout(() => {
        cover.style.transition = 'opacity 250ms ease-out';
        cover.style.opacity = '0';
        setTimeout(() => { if (cover.parentNode) cover.parentNode.removeChild(cover); }, 300);
    }, totalDuration + 50);
    setTimeout(() => {}, 3000);

});

