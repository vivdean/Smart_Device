'use strict';

(function () {
  var accordionToggles = document.querySelectorAll('.footer__toggle');
  var accordions = document.querySelectorAll('.footer__accordion');

  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('footer__accordion--nojs');
  }

  var showMenu = function (j) {
    return function () {
      var accordionBlock = accordionToggles[j].closest('.footer__accordion');
      var accordionContent = accordionToggles[j].nextElementSibling;
      accordionBlock.classList.toggle('footer__accordion--hide');
      if (accordionContent.classList.contains('footer__accordion-content--show')) {
        accordionContent.classList.remove('footer__accordion-content--show');
      } else {
        accordionContent.classList.add('footer__accordion-content--show');
      }
    };
  };


  for (var j = 0; j < accordionToggles.length; j++) {
    accordionToggles[j].addEventListener('click', showMenu(j));
  }

})();

/* eslint-disable */
(function () {

  var inputs = document.querySelectorAll('[type=tel]');

  for (var i = 0; i < inputs.length; i++) {
    Inputmask({'mask': '+7(999) 999-99-99'}).mask(inputs[i]);
  }

})();

/* eslint-enable */

(function () {

  var ESC = 27;
  var modalOpenbtn = document.querySelector('.header__button');
  var modal = document.querySelector('.modal');
  var modalCloseBtn = modal.querySelector('.modal__close');
  var form = modal.querySelector('form');
  var username = modal.querySelector('[name=username]');
  var tel = modal.querySelector('[name=tel]');
  var question = modal.querySelector('[name=letter]');
  var isStorageSupport = true;
  var storage = {
    username: '',
    tel: '',
    question: ''
  };

  try {
    storage.username = localStorage.getItem('username');
    storage.tel = localStorage.getItem('tel');
    storage.question = localStorage.getItem('letter');
  } catch (err) {
    isStorageSupport = false;
  }

  var openModal = function () {
    modal.classList.add('modal--show');
    window.addEventListener('keydown', onModalEcsPress);
    modalCloseBtn.addEventListener('click', function () {
      closeModal();
    });
    checkLocalStorage();
    username.focus();
  };

  var closeModal = function () {
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    }
    window.removeEventListener('keydown', onModalEcsPress);
  };

  var onModalEcsPress = function (evt) {
    if (evt.keyCode === ESC) {
      evt.preventDefault();
      closeModal();
    }
  };

  modalOpenbtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
  });

  modal.addEventListener('click', function (evt) {
    var modalContent = modal.querySelector('.modal__content');
    if (!modalContent.contains(evt.target)) {
      closeModal();
    }
  });

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('tel', tel.value);
      localStorage.setItem('letter', question.value);
    }
  });


  var checkLocalStorage = function () {

    if (username.value !== null) {
      username.value = storage.username;
    }

    if (question.value !== null) {
      question.value = storage.question;
    }
  };
})();
