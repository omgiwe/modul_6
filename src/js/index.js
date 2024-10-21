// import Swiper bundle with all modules installed
import Swiper from '../../node_modules/swiper/swiper-bundle'
import '../scss/style.scss'

const buttonText = document.querySelector('.about__btn-more')
const contentText = document.querySelector('.about__text-wrapper')
const iconMoreText = document.querySelector('.about__btn-img')
const textButtonAbout = document.querySelector('.about__btn-text')

buttonText.addEventListener('click', () => {
  contentText.classList.toggle('about__text-wrapper--open')

  iconMoreText.classList.toggle('about__btn-img--rotate')

  if (!content.classList.contains('about__text-wrapper--open')) {
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
