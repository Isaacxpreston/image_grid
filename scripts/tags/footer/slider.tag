<slider>
  <div class="footer-carousel">
    <carousel current="{current}" total="{total}"></carousel>
  </div>

  <section class="image-slider-container dragscroll" id='{unique_id}'>
    <div class="image-slider-flexbox">
      <linkbox each="{photos}" text="{text}" img="{img}" url="{url}"></linkbox>
      <div class="footer-image last-footer-image"></div>
    </div>
  </section>

  <script>
    unique_id(this)
    this.photos = placeholder_json
    this.total = placeholder_json.length
    this.current = 1

    this.on('mount', function() {
      $(document).ready(function() {
        $('.last-footer-image').css('width', window.innerWidth - 692)
        $(window).on('resize', function() {
          $('.last-footer-image').css('width', window.innerWidth - 692)
        })
      })
    })
  </script>
</slider>