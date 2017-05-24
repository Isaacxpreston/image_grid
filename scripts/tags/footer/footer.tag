<footer>
  <div class="footer">
    <div class="footer-title">
      <highlighter img='./assets/images/highlighter.png' title='More in Portfolio'></highlighter>
    </div>

    <div class="view-all">
      <a href="#" class="fonts utility">View All</a>
    </div>

    <slider></slider>
  </div>
  <script>
    this.on('mount', function() {
      $(document).ready(function() {
        $('.image-slider-container').css('background', opts.background)
      })
    })
  </script>
</footer>