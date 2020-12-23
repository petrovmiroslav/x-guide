document.addEventListener('DOMContentLoaded', () => {
  window.Parsley.on('form:submit', function() {
    let Container = this.$element.closest('.form-section__form-content')[0],
    form = Container.querySelector('form'),
    modal = Container.querySelector('.form-section__form-modal');
    

    form.classList.add('form--hidden');
    modal.classList.remove('form-modal--hidden');
    
    window.setTimeout(()=>{
      form.classList.remove('form--hidden');
      modal.classList.add('form-modal--hidden');
      form.reset();
    }, 3000)
    return false;
  });
});