import events from './actionsEvents.js';
import element from './createElement.js';

// edit

const openCard = (ev, data) => {
  const cardSelectList = events.getCard(ev, data);
  toggleEdit(ev);
  rendeCard(cardSelectList);
};

const rendeCard = (card) => {
  const titleCardElement = document.querySelector('.app-edit-title');
  titleCardElement.value = card.title;
  const descriptionCardElement = document.querySelector('.app-edit-textarea');
  descriptionCardElement.value = card.description;

  renderTags(card.tags);
};
const renderTags = (tags) => {
  const containerTags = document.querySelector('.js-tags');
  containerTags.innerHTML = '';
  tags.forEach((tag) => {
    const spanTag = element.elementHtml('span', containerTags);
    Object.assign(spanTag, {
      className: 'mr-1 badge badge-secondary bg-success',
    });
    spanTag.appendChild(element.textElementInner(tag));
  });
};

const toggleEdit = (ev) => {
  ev.stopPropagation();
  document.querySelector('.js-edit').classList.toggle('show');
  document.querySelector('.js-edit').classList.remove('d-none');
};

document.querySelectorAll('.js-card, .js-edit-close').forEach((card) => {
  card.addEventListener('click', toggleEdit);
});

const preventEditClosing = (ev) => {
  ev.stopPropagation();
};

document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);

export default {
  openCard,
};
