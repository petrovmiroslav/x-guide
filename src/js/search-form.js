export default function Searchform () {
  const SearchForm = document.querySelector('.page-header__form');
  const SearchFormToggleButtons = Array.from(document.querySelectorAll('.js-header-search-form-button'));

  SearchFormToggleButtons.forEach(button => {
    button.addEventListener('click', toggleSearchForm);
  });

  function toggleSearchForm () {
    SearchForm.classList.toggle('page-header__form--shown');
  }
}