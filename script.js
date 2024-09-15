const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <span class="close">&times;</span>
    `;
    document.body.appendChild(modal);
    
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      modal.remove();
    });
  });
});

