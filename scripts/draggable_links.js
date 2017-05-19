var ismoving = false, ismousedown = false;
window.addEventListener('mousedown', function() {
  ismousedown = true
})
window.addEventListener('mouseup', function() {
  ismousedown = false
})
window.addEventListener('mousemove', function() {
  ismoving = true
})
var clearmoving = setInterval(function() {
  if(!ismousedown) {
    ismoving = false
  }
}, 0)
window.onload = function () {
  var selector = document.getElementsByTagName("a")
  for(var i = 0; i < selector.length; i++) {
    selector[i].addEventListener('click', function(e) {
      if (ismoving) {
        e.preventDefault()
      }
    })
  }
}