shapes.forEach(element => { element.style.backgroundColor = `${element.dataset.bg}` });
bgItems.forEach(element => { element.style.backgroundImage = `url('${element.dataset.bg}')` });

const bgSlides = (direction) => {
    let itemClass = `slide-${slideCounter}`;
    if (direction === 'down') {
        if (slideCounter < slidesCount) {
            mainSection.classList.remove(itemClass);
            slideCounter++;
            itemClass = `slide-${slideCounter}`;
            mainSection.classList.add(itemClass);
        }
    }
    else if (direction === 'up') {
        if (slideCounter > 1) {
            mainSection.classList.remove(itemClass);
            slideCounter--;
            itemClass = `slide-${slideCounter}`;
            mainSection.classList.add(itemClass);
        }
    }
}