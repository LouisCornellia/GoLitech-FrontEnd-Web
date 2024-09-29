document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputFields = form.querySelectorAll('.input-member');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        alert('Membership successfully added!');
        form.reset();
      }
    });

    function validateForm() {
      let isValid = true;

      inputFields.forEach(function(field) {
        if (field.value.trim() === '') {
          isValid = false;
          field.classList.add('error');
          field.setAttribute('placeholder', 'This field is required');
        } else {
          field.classList.remove('error');
        }
      });

      return isValid;
    }
  });