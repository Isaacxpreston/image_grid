<carousel>
  <div class="carousel">
    <leftarrow></leftarrow>
    <div style="margin-top: -7px; padding-left: 12px; padding-right: 12px;"><span class="fonts utility">{current} / {total}</span></div>
    <rightarrow></rightarrow>
  </div>
  <script>
    this.current = 1
    updateNumber (num) {
      this.current = num
      this.update()
    }
    updateTotal(num) {
      this.total = num
      this.update()
    }
  </script>
</carousel>