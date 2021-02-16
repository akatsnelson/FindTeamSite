$(document).ready(function () {
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    alScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: true,
  })
  $('.owl-carousel').owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })

})

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Есть крутая идея, но нет команды?',
  'Есть желание,  но нет крутого проекта?',
  'А может,  просто хочешь поделиться идеей?',
  'В любом из этих вариантов,  тебе сюда!',
  'Пиши сюда idea@fndteam.info',
  'Листай ниже!'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = function next () {
  fx.setText(phrases[counter]).then(function () {
    setTimeout(next, 1000)
  })
  counter = (counter + 1) % phrases.length
}

next()

let spans = document.querySelectorAll('.word span')
spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active')
  })
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active')
  })

  // Initial animation
  setTimeout(() => {
    span.classList.add('active')
  }, 750 * (idx + 1))
})

/*
exampleModalLabel
modalText
955
*/

const findMe = 'Ты нашёл нас! Напиши нам. \nС уважением, автор.\n Email: akatsnelson@findteam.info'
new Egg('a,k', function () {
  swal(findMe, {
    button: false,
    icon: 'info'
  })
}).listen()
let counterEgg = 0
$('.author').on('click', function () {
  counterEgg++
  if (counterEgg >= 5) {
    swal(findMe, {
      button: false,
      icon: 'info'
    })
  }
})

$(function () {

  var Page = (function () {

    var $navArrows = $('#nav-arrows'),
      $nav = $('#nav-dots > span'),
      slitslider = $('#slider').slitslider({
        onBeforeChange: function (slide, pos) {

          $nav.removeClass('nav-dot-current')
          $nav.eq(pos).addClass('nav-dot-current')

        }
      }),

      init = function () {

        initEvents()

      },
      initEvents = function () {

        // add navigation events
        $navArrows.children(':last').on('click', function () {

          slitslider.next()
          return false

        })

        $navArrows.children(':first').on('click', function () {

          slitslider.previous()
          return false

        })

        $nav.each(function (i) {

          $(this).on('click', function (event) {

            var $dot = $(this)

            if (!slitslider.isActive()) {

              $nav.removeClass('nav-dot-current')
              $dot.addClass('nav-dot-current')

            }

            slitslider.jump(i + 1)
            return false

          })

        })

      }

    return {init: init}

  })()

  Page.init()

  /**
   * Notes:
   *
   * example how to add items:
   */

  /*

  var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

  // call the plugin's add method
  ss.add($items);

  */

})