var init = function () {
  var footer_carousel = riot.mount('carousel')[0]
  footer_carousel.updateTotal(document.getElementsByClassName('footer-image').length)

  var updateCount = function() {
    footer_carousel.updateNumber(footer_carousel.current + 1)
  }

  document.getElementsByClassName('image-slider-container')[0].addEventListener('scroll', updateCount)
}