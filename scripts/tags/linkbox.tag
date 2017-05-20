<linkbox>
  <a href="{opts.url}">
    <div class="footer-image" id='{unique_id}'>
      <div class="footer-background" style="background: url('{opts.img}');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;"></div>
      <div class="label fonts utility"><p>{opts.text}</p></div>
    </div>
  </a>
  <script>
    unique_id(this)
    this.on('mount', function() {
      var offscreen = false
      var context = this.parent
      var el = $("#" + this.unique_id)
      var container = document.getElementById(this.parent.unique_id)
      container.addEventListener('scroll', function() {
        var left_border = el.offset().left
        //var right_border = parseInt(el.css('width')) + el.offset().left
        //128 hard border, 256 to make transition point earlier
        if (!offscreen && left_border < -parseInt(el.css('width')) + 192) {
          offscreen = true
          context.current += 1
          context.update()
        } 
        if (offscreen && left_border > -parseInt(el.css('width')) + 192) {
          offscreen = false
          context.current -=1
          context.update()
        }
      })
    })
  </script>
</linkbox>