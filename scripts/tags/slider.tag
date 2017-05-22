<slider>
  <div style="position: absolute; z-index: 2; bottom: 0; right: 0; margin-bottom: 99px; margin-right: 97px;">
    <carousel current="{current}" total="{total}"></carousel>
  </div>

  <section class="image-slider-container dragscroll" id='{unique_id}'>
    <div class="image-slider-flexbox">
      <linkbox each="{photos}" text="{text}" img="{img}" url="{url}" index="{index}"></linkbox>
    </div>
  </section>

  <script>
    unique_id(this)
    this.photos = placeholder_json
    this.total = placeholder_json.length
    this.current = 1
    alertCurrent () {
      console.log("current element is " + this.current_link)
    }
  </script>
</slider>