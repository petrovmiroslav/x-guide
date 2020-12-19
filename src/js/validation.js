import 'parsleyjs';
import dayjs from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)

window.Parsley.addValidator('phone', {
    requirementType: 'string',
    validateString: function(value) {
        return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(value);
    },
    messages: {
        en: 'This value should be a mobile number',
        ru: 'Введите правильный номер мобильного телефона'
    }
});
window.Parsley.addValidator('date', {
    requirementType: 'string',
    validateString: function(value) {
        console.log('Получаем дату', dayjs(value, 'DD.MM.YYYY', true))
        return dayjs(value, 'DD.MM.YYYY', true).isValid();
    },
    messages: {
        en: 'This value should be a valid date',
        ru: 'Введите правильную дату'
    }
});

Parsley.addMessages('ru', {
    defaultMessage: 'Некорректное значение.',
    type: {
        email: 'В данном поле может быть только E-mail',
        url: 'Адрес сайта введен неверно.',
        number: 'Введите число.',
        integer: 'Введите целое число.',
        digits: 'Введите только цифры.',
        alphanum: 'Введите буквенно-цифровое значение.'
    },
    notblank: 'Это поле должно быть заполнено.',
    required: 'Обязательное поле',
    pattern: 'Это значение некорректно.',
    min: 'Это значение должно быть не менее чем %s.',
    max: 'Это значение должно быть не более чем %s.',
    range: 'Это значение должно быть от %s до %s.',
    minlength: 'Это значение должно содержать не менее %s символов.',
    maxlength: 'Это значение должно содержать не более %s символов.',
    length: 'Это значение должно содержать от %s до %s символов.',
    mincheck: 'Выберите не менее %s значений.',
    maxcheck: 'Выберите не более %s значений.',
    check: 'Выберите от %s до %s значений.',
    equalto: 'Это значение должно совпадать.'
});

Parsley.setLocale('ru');

export default function Validation() {
    const formsToValidate = Array.from(document.querySelectorAll('form[data-need-validation]'));

    formsToValidate.forEach(form => {
        $(form).parsley({

        });
    });
}