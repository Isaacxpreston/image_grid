<subscribe-form>
  <div class="subscribe-form" id='{unique_id}'>
    <input type="text" placeholder="Email address..."></input>
    <div class="subscribe-button"><div>Subscribe</div></div>
  </div>
  <script>
    unique_id(this)
    this.on('mount', function() {
      //remove later in favor of css media queries.
      if(opts.options) {
        $('#' + this.unique_id).addClass(opts.options)
      }
    })
  </script>
</subscribe-form>