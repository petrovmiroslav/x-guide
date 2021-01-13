import Choices from 'choices.js';
import $ from "jquery";
import moment from 'moment';
import daterangepicker from 'daterangepicker';
import accordionsFactory from './accordionsFactory';

moment.locale('ru');

const SearchToursForm = document.querySelector('.search-tours-form');
const DateRangeInput = SearchToursForm.querySelector('.search-tours-form__input--date-range');
const SearchToursFormSelectInputs = Array.from(SearchToursForm.querySelectorAll('.search-tours-form__input--select'));
let applyButton;

let DatePickerIsShown = false;

function init () {
  let date = new Date();
  date.setDate(date.getDate() + 7);

  const PickerOption = {
    // showDropdowns: true,
    endDate: date,
    minDate: new Date(),
    buttonClasses: 'search-tours-form__date-button',
    applyButtonClasses: 'search-tours-form__date-button--apply',
    cancelButtonClasses: 'search-tours-form__date-button--cancel',
    "locale": {
      "lang": 'fr',
      "format": "D MMMM",
      "separator": " - ",
      "applyLabel": "Применить",
      "cancelLabel": "Сбросить",
      "fromLabel": "From",
      "toLabel": "To",
      "customRangeLabel": "Custom",
      "weekLabel": "W",
      "daysOfWeek": [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
      ],
      "monthNames": [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ],
      "firstDay": 1
    },
  };

  $(DateRangeInput).daterangepicker(PickerOption);

  $(DateRangeInput).on('show.daterangepicker', toggleDateRangeInput);
  $(DateRangeInput).on('hide.daterangepicker', toggleDateRangeInput);

  applyButton = document.querySelector('.search-tours-form__date-button--apply');

  DateRangeInput.addEventListener('click', clickHandler);

  function clickHandler (e) {
    if (!DatePickerIsShown) {
      return DatePickerIsShown = !DatePickerIsShown;
    }

    applyButton.click();
  }

  function toggleDateRangeInput (ev, picker) {
    DatePickerIsShown = picker.isShowing;
    DateRangeInput.classList.toggle('calendar-shown');
  }



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

  SearchToursAccordion();

  date = null;
}

function SearchToursAccordion() {
  let factory = null;
  const initializeMainAccordion = () => {
      if (factory) {
          factory.destroy();
          factory = null;
      }
      factory = accordionsFactory(Array.from(document.querySelectorAll('.search-tours-form__accordion')));
      
      factory.init();
  };

  window.initializeMainAccordion = initializeMainAccordion;

  initializeMainAccordion();
}

export default {
  init,
};