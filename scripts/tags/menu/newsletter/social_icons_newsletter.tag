<social-icons-newsletter>
  <div class="social-icons" id="{unique_id}">
    <facebookicon></facebookicon>
    <instagramicon></instagramicon>
    <twittericon></twittericon>
    <pinteresticon></pinteresticon>
    <houzzicon></houzzicon>
    <dicon></dicon>
  </div>
  <script>
    unique_id(this)
    this.on('mount', function() {
      if (opts.options) {
        $('#' + this.unique_id).addClass(opts.options)
      }
    })
  </script>
</social-icons-newsletter>