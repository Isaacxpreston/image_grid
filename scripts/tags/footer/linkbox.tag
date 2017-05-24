<linkbox>
  <a href="{opts.url}" class="linkbox">
    <div class="linkbox-image" id='{unique_id}'>
      <div class="linkbox-background" style="background: url('{opts.img}');
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

      //remove later in favor of css media queries.
      if(opts.options) {
        $('#' + this.unique_id).addClass(opts.options)
      }
    })
  </script>
</linkbox>