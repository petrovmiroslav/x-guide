import Choices from 'choices.js';

const SearchToursForm = document.querySelector('.search-tours-form');

function init () {
  const SearchToursFormSelectInputs = Array.from(SearchToursForm.querySelectorAll('.search-tours-form__input--select'));

  SearchToursFormSelectInputs.forEach(input => {
    const choices = new Choices(input, {
      position: 'bottom',
      searchEnabled: false,
      itemSelectText: '',
      classNames: {
        containerOuter: 'choices search-tours-form__input--select',
        containerInner: 'choices__inner search-tours-form__input--select-inner',
        list: 'choices__list search-tours-form__select-option-list',
        item: 'choices__item search-tours-form__select-option',
      },
    });

    input.addEventListener(
      'change',
      event => {
        const input = event.target;
        const formGroup = input.closest('.search-tours-form__group');
        const placeholder = formGroup.querySelector('.search-tours-form__input-placeholder');

        placeholder.classList.toggle('search-tours-form__input-placeholder--hidden', event.detail.value !== "");
      },
      false,
    );
  });
}

export default {
  init,
};