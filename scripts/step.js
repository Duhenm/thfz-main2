  const button = document.querySelector('.menu__burger-button');
  const aside = document.querySelector('.menu__nav')
     
  button.addEventListener('click', (e) => {
    button.classList.toggle('menu__burger-button_active');
    aside.classList.toggle('menu__nav_active')
  });
  

document.querySelector('.content').addEventListener('click', function (evt) {
  if (evt.target.classList.contains('spoiler__header')) {
    const spoilerContent = evt.target.nextElementSibling;
    const spoilerIcon = evt.target.querySelector('.spoiler__icon');
    spoilerIcon.classList.toggle('spoiler__icon_opened');
    spoilerContent.classList.toggle('spoiler__content_opened');
  }
  if (evt.target.classList.contains('spoiler__icon')) {
    const spoilerHeader = evt.target.parentElement;
    const spoilerContent = spoilerHeader.nextElementSibling;
    evt.target.classList.toggle('spoiler__icon_opened');
    spoilerContent.classList.toggle('spoiler__content_opened');
  }
  if (evt.target.classList.contains('spoiler__title-container')) {
    const spoilerHeader = evt.target.parentElement;
    const spoilerIcon = spoilerHeader.querySelector('.spoiler__icon');
    const spoilerContent = spoilerHeader.nextElementSibling;
    spoilerIcon.classList.toggle('spoiler__icon_opened');
    spoilerContent.classList.toggle('spoiler__content_opened');
  }
  if (evt.target.classList.contains('spoiler__title')) {
    const spoilerTitleContainer = evt.target.parentElement;
    const spoilerHeader = spoilerTitleContainer.parentElement;
    const spoilerIcon = spoilerHeader.querySelector('.spoiler__icon');
    const spoilerContent = spoilerHeader.nextElementSibling;
    spoilerIcon.classList.toggle('spoiler__icon_opened');
    spoilerContent.classList.toggle('spoiler__content_opened');
  }
}); 