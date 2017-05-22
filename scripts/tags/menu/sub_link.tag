<sublink>
  <h2 class="fonts header-2 sub-link" id="{unique_id}">{opts.text}</h2>
  <script>
    unique_id(this)
    var context = this
    this.on('mount', function() {
      $(document).ready(function() {
        $('#' + context.unique_id).on('click', function() {
          if(opts.href) {
            window.location.href = opts.href
          }
        })
      })
    })
  </script>
</sublink>