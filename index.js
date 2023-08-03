const heart = document.querySelector('.corazon');
const imagesDiv = document.querySelector('.images')
const mainDiv = document.querySelector('.main')

heart.addEventListener('click', () => {
 imagesDiv.style.display = 'flex';
 mainDiv.style.display = 'none';
})