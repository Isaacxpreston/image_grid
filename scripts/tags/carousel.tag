<carousel>
  <div class="carousel">
    <leftarrow></leftarrow>
    <div style="margin-top: -7px; padding-left: 12px; padding-right: 12px;"><span class="fonts utility">{current} / {opts.total}</span></div>
    <rightarrow></rightarrow>
  </div>
  <script>
    this.current = global.current
    var context = this
    updateNumber (num) {
      this.current = num
      this.update()
    }
    /*var testfunc = setInterval(() => {
      global.current = Math.random()
      context.current = global.current
      riot.update()
    })*/
  </script>
</carousel>