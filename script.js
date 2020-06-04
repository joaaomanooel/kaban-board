const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

const dragstart = ({ target }) => {
  dropzones.forEach(dropzone => dropzone.classList.add('hightlight'))
  target.classList.add('dragIn')
};
const dragend = ({ target }) => {
  dropzones.forEach(dropzone => dropzone.classList.remove('hightlight'))
  target.classList.remove('dragIn');
};

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart, false);
  card.addEventListener('dragend', dragend, false);
});


const dragenter = ({ target }) => {
  if (target.classList.contains('dropzone')) {
    target.classList.add('over');
  }
};
const dragleave = ({ target }) => {
  if (target.classList.contains('dropzone')) {
    target.classList.remove('over');
  }
};
const dragover = ({ target }) => {
  if (target.classList.contains('dropzone')) {
    const cardBeigDragged = document.querySelector('.dragIn');
    cardBeigDragged.parentNode.removeChild(cardBeigDragged);
    target.appendChild(cardBeigDragged)
  }
};

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter, false);
  dropzone.addEventListener('dragover', dragover, false);
  dropzone.addEventListener('dragleave', dragleave, false);
})
