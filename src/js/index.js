// import Swiper bundle with all modules installed
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

const buttonText = document.querySelector('.about__btn-more')
const contentText = document.querySelector('.about__text-wrapper')
const iconMoreText = document.querySelector('.about__btn-img')
const textButtonAbout = document.querySelector('.about__btn-text')

buttonText.addEventListener('click', () => {
  contentText.classList.toggle('about__text-wrapper--open')

  iconMoreText.classList.toggle('about__btn-img--rotate')

  if (!contentText.classList.contains('about__text-wrapper--open')) {
    textButtonAbout.textContent = 'Читать далее'
  } else {
    textButtonAbout.textContent = 'Скрыть'
  }
})

const button = document.querySelector('.brand-btn')
const content = document.querySelector('.slider-1__wrapper')
const iconMore = document.querySelector('.brand-btn__img')
const textButton = document.querySelector('.brand-btn__text')

button.addEventListener('click', () => {
  if (!content.classList.contains('slider-1__wrapper--open')) {
    content.classList.remove('slider-1__wrapper--close')
    content.classList.add('slider-1__wrapper--open')
  } else {
    content.classList.add('slider-1__wrapper--close')
    content.classList.remove('slider-1__wrapper--open')
  }

  iconMore.classList.toggle('brand-btn__img--rotate')

  if (!content.classList.contains('slider-1__wrapper--open')) {
    textButton.textContent = 'Показать все'
  } else {
    textButton.textContent = 'Скрыть'
  }
})

const buttonTechnics = document.querySelector('.technics-btn')
const contentTechnics = document.querySelector('.slider-technics__wrapper')
const iconMoreTechnics = document.querySelector('.technics-btn__img')
const textButtonTechnics = document.querySelector('.technics-btn__text')

buttonTechnics.addEventListener('click', () => {
  if (!contentTechnics.classList.contains('slider-technics__wrapper--open')) {
    contentTechnics.classList.remove('slider-technics__wrapper--close')
    contentTechnics.classList.add('slider-technics__wrapper--open')
  } else {
    contentTechnics.classList.add('slider-technics__wrapper--close')
    contentTechnics.classList.remove('slider-technics__wrapper--open')
  }

  iconMoreTechnics.classList.toggle('technics-btn__img--rotate')

  if (!contentTechnics.classList.contains('slider-technics__wrapper--open')) {
    textButtonTechnics.textContent = 'Показать все'
  } else {
    textButtonTechnics.textContent = 'Скрыть'
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 767px)', '.slider-1', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.slider-technics', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767px)', '.slider-price', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})

////////////Бургер

const BURGER_OPENED_CLASSNAME = 'aside--open'
const BODY_FIXED_CLASSNAME = 'body_fixed'

const bodyNode = document.querySelector('body')
const burgerNode = document.querySelector('.aside')
const burgerBtnOpen = document.querySelector('.menu-left__btn-burger')
const burgerBtnClose = document.querySelector('.top-content__btn')
const burgerContent = document.querySelector('.aside__wrapper')

burgerBtnOpen.addEventListener('click', openBurger)
burgerBtnClose.addEventListener('click', closeBurger)

burgerNode.addEventListener('click', (event) => {
  const isClickOutsideContent = !event.composedPath().includes(burgerContent)

  if (isClickOutsideContent) {
    closeBurger()
  }
})

function openBurger() {
  burgerNode.classList.add(BURGER_OPENED_CLASSNAME)
  bodyNode.classList.add(BODY_FIXED_CLASSNAME)
}

function closeBurger() {
  burgerNode.classList.remove(BURGER_OPENED_CLASSNAME)
  bodyNode.classList.remove(BODY_FIXED_CLASSNAME)
}

///////Модалка обратная связь

const MODAL_FEEDBACK_OPENED_CLASSNAME = 'feedback--open'

const feedbackBtnOpen = document.querySelectorAll('.js-feedback-btn')
const feedbackNode = document.querySelector('.feedback')
const feedbackContent = document.querySelector('.feedback__content')
const feedbackBtnClose = document.querySelector('.feedback__btn')

for (let i = 0; i < feedbackBtnOpen.length; i++) {
  feedbackBtnOpen[i].addEventListener('click', openFeedback)
}

feedbackBtnClose.addEventListener('click', closeFeedback)

feedbackNode.addEventListener('click', (event) => {
  const isClickOutsideContent = !event.composedPath().includes(feedbackContent)

  if (isClickOutsideContent) {
    closeFeedback()
  }
})

function openFeedback() {
  feedbackNode.classList.add(MODAL_FEEDBACK_OPENED_CLASSNAME)
  bodyNode.classList.add(BODY_FIXED_CLASSNAME)

  if (burgerNode.classList.contains(BURGER_OPENED_CLASSNAME)) {
    burgerNode.classList.remove(BURGER_OPENED_CLASSNAME)
  }
}

function closeFeedback() {
  feedbackNode.classList.remove(MODAL_FEEDBACK_OPENED_CLASSNAME)
  bodyNode.classList.remove(BODY_FIXED_CLASSNAME)
}

//////Модалка обратный звонок

const MODAL_CALLBACK_OPENED_CLASSNAME = 'callback--open'

const callbackBtnOpen = document.querySelectorAll('.js-callback-btn')
const callbackNode = document.querySelector('.callback')
const callbackContent = document.querySelector('.callback__content')
const callbackBtnClose = document.querySelector('.callback__btn')

for (let i = 0; i < callbackBtnOpen.length; i++) {
  callbackBtnOpen[i].addEventListener('click', openCallback)
}

callbackBtnClose.addEventListener('click', closeCallback)

callbackNode.addEventListener('click', (event) => {
  const isClickOutsideContent = !event.composedPath().includes(callbackContent)

  if (isClickOutsideContent) {
    closeCallback()
  }
})

function openCallback() {
  callbackNode.classList.add(MODAL_CALLBACK_OPENED_CLASSNAME)
  bodyNode.classList.add(BODY_FIXED_CLASSNAME)

  if (burgerNode.classList.contains(BURGER_OPENED_CLASSNAME)) {
    burgerNode.classList.remove(BURGER_OPENED_CLASSNAME)
  }
}

function closeCallback() {
  callbackNode.classList.remove(MODAL_CALLBACK_OPENED_CLASSNAME)
  bodyNode.classList.remove(BODY_FIXED_CLASSNAME)
}
