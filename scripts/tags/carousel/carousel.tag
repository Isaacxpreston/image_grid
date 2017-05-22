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
      var container = $("#" + this.parent.unique_id)
      var left_arrow = $('#'+ this.left_tag)
      var right_arrow = $('#'+ this.right_tag)
      var context = this.parent

      left_arrow.on('click', function () {
        if(context.current > 1) {
          container.scrollTo((524 * (context.current)) - 1048, 400);
        }
      })

      right_arrow.on('click', function () {
        if(context.current < context.total) {
          container.scrollTo(524 * (context.current), 400);
        }
      })

    })
  </script>
</carousel>