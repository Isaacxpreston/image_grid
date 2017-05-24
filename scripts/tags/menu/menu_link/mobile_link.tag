<mobilelink>
  <div class="mobile-menu-link" id='{unique_id}'>
    <div class="fonts header-1 header-1-mobile">{opts.text}</div>
    <div class="nav-chevron"><right-chevron></right-chevron></div>
  </div>
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
</mobilelink>