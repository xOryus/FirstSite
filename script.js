function createHearts() {
    const buttonContainer = document.querySelector('.button-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    buttonContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
