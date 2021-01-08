document.addEventListener('DOMContentLoaded', () => {
  window.Parsley.on('form:submit', function() {

    let Container = this.$element.closest('.form-section__form-content')[0];
    if (Container) {
      form = Container.querySelector('form'),
      modal = Container.querySelector('.form-section__form-modal');
      
      form.classList.add('form--hidden');
      modal.classList.remove('form-modal--hidden');
      
      window.setTimeout(()=>{
        form.classList.remove('form--hidden');
        modal.classList.add('form-modal--hidden');
        form.reset();
      }, 3000);

      return false;
    }
    
    Container = this.$element.closest('.blog__form-container')[0];

    if (Container) {
      Container.classList.add('blog__form-container--success');

      window.setTimeout(()=>{
        Container.classList.remove('blog__form-container--success');
      }, 3000);

      return false;
    }
  });
});