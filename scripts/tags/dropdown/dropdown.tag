<dropdown>
  <div class="dropdown-wrapper" id='{unique_id}'> 
    <div class="dropdown">
      <p class="fonts utility">{opts.category}</p>
      <div class="dropdown-header">
        <div class="fonts header-1 dropdown-title" id='{mobile_id}'>{opts.subcategory}</div>
        <div class="chevron-container">
          <chevron></chevron>
        </div>
      </div>
    </div>
    <div class="options-container">
      <div class="options">
        <a class="fonts utility" href="#"><p>Bathrooms</p></a>
        <a class="fonts utility" href="#"><p>Entries</p></a>
        <a class="fonts utility" href="#"><p>Libraries</p></a>
        <a class="fonts utility" href="#"><p>Bars & Wine Cellars</p></a>
        <a class="fonts utility" href="#"><p>Fireplaces</p></a>
        <a class="fonts utility" href="#"><p>Details</p></a>
      </div>
    </div>
  </div>
  <script>
    unique_id(this)
    this.mobile_id = unique_id()
    var context = this
    this.on('mount', function() {
      $(document).ready(function() {
        if(opts.mobile) {
          $('#' + context.unique_id).addClass('dropdown-mobile')
          $('#' + context.mobile_id).addClass('header-1-mobile')
        }
      })
    })
  </script>
</dropdown>