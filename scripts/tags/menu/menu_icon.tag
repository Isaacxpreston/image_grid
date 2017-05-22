<menuicon>
  <div class="menu-icon" id='{unique_id}'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <script>
    unique_id(this)
    var context = this
    
    this.on('mount', function() {
      $(document).ready(function(){
        $('#' + context.unique_id).click(function(){
          $('#' + context.unique_id).toggleClass('open');
        });
      })
    })
  </script>
</menuicon>