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
      var container = $("#" + this.parent.unique_id)

      container.on('scroll', function() {
        var left_border = el.offset().left

        if(left_border <= 128 && left_border > 0) {
          context.left_scroll = $("[index=" + (opts.index - 1) + "]")
          context.right_scroll = $("[index=" + (opts.index + 1) + "]")
        }
        if (!offscreen && left_border < -parseInt(el.css('width')) + 128) {
          offscreen = true
          context.current += 1
          context.update()
        }
        if (offscreen && left_border > -parseInt(el.css('width')) + 128) {
          offscreen = false
          context.current -=1
          context.update()
        }

      })
    })
  </script>
</linkbox>