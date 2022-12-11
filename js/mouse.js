function moveMouse(e) {
    if (e.clientX < 5 || e.clientY < 5 || e.clientX > (window.innerWidth - 5) || e.clientY > (window.innerHeight - 5)) {
        mouse.style.opacity = 0;
    }
    else {
        mouse.style.opacity = 1;
        mouse.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
        
    }
}

if (window.innerWidth >= 768) {
    addEventListener('mousemove', moveMouse);

    slideBg.addEventListener('mouseover', () => { mouse.classList.add('view-visible') });
    slideBg.addEventListener('mouseleave', () => { mouse.classList.remove('view-visible') });

    document.addEventListener('mouseover', (e) => {
        links.forEach(link => {
            if (e.target === link) {
                mouse.classList.add('links-visible');
            }
        })
    })
    links.forEach(link => {
        link.addEventListener('mouseleave', (e) => {
            mouse.classList.remove('links-visible');
        })
    });
}