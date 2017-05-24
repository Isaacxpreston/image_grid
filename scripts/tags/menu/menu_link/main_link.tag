<mainlink>
  <div class="main-menu-link" id='{unique_id}'>
    <div class="fonts header-1">{opts.text}</div>
    <div class="header-underline"></div>
  </div>
  <br/>
  <script>
    unique_id(this)
    var context = this
    this.on('mount', function() {
      $(document).ready(function() {
        $('#' + context.unique_id).on('click', function() {
          if (opts.href) {
            window.location.href = opts.href
          } 
        })
      })
    })
  </script>
</mainlink>