import Choices from 'choices.js';

export default function Selects () {
  const SelectsForChoices = document.querySelectorAll('.js-selects-for-choices').forEach(select => {
    const choices = new Choices(select, {
      position: 'bottom',
      searchEnabled: false,
      itemSelectText: '',
      classNames: {
        containerOuter: 'choices selects__choices',
        containerInner: 'choices__inner selects__choices-inner',
        list: 'choices__list selects__choices-list',
        item: 'choices__item selects__choices-item search-tours-form__select-option',
      },
    });

    select.addEventListener(
      'change',
      event => {
        const Choice = event.target.closest('.choices');
        Choice.classList.toggle('is-not-empty', event.detail.value !== "");
      },
      false,
    );
  });
}