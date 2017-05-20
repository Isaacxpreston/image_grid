<carousel>
  <div class="carousel">
    <leftarrow unique='{left_tag}'></leftarrow>
    <div style="margin-top: -7px; padding-left: 12px; padding-right: 12px;"><span class="fonts utility" style="user-select: none;">{opts.current} / {opts.total}</span></div>
    <rightarrow unique_id='{right_tag}'></rightarrow>
  </div>

  <script>
    this.left_tag = unique_id()
    this.right_tag = unique_id()
    this.on('mount', function() {
      var left_arrow = document.getElementById(this.left_tag)
      var right_arrow = document.getElementById(this.right_tag)
      var context = this.parent

      left_arrow.addEventListener('click', function () {
        if(context.current > 1) {
          context.current -=1
          context.update()
        }
      })

      right_arrow.addEventListener('click', function () {
        if(context.current < context.total) {
          context.current += 1
          context.update()
        }
      })

    })
  </script>
</carousel>