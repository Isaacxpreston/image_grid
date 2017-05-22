riot.tag2('carousel', '<div class="carousel"> <leftarrow unique="{left_tag}"></leftarrow> <div style="margin-top: -7px; padding-left: 12px; padding-right: 12px;"><span class="fonts utility" style="user-select: none;">{opts.current} / {opts.total}</span></div> <rightarrow unique_id="{right_tag}"></rightarrow> </div>', '', '', function(opts) {
    this.left_tag = unique_id()
    this.right_tag = unique_id()

    this.on('mount', function() {
      var container = $("#" + this.parent.unique_id)
      var left_arrow = $('#'+ this.left_tag)
      var right_arrow = $('#'+ this.right_tag)
      var context = this.parent

      left_arrow.on('click', function () {
        if(context.current > 1) {
          container.scrollTo((524 * (context.current)) - 1048, 400);
        }
      })

      right_arrow.on('click', function () {
        if(context.current < context.total) {
          container.scrollTo(524 * (context.current), 400);
        }
      })

    })
});
riot.tag2('footer', '<div class="footer"> <div class="footer-title"> <highlighter img="./assets/images/highlighter.png" title="More in Portfolio"></highlighter> </div> <div class="view-all"> <a href="#" class="fonts utility">View All</a> </div> <slider></slider> </div>', '', '', function(opts) {
});
riot.tag2('highlighter', '<div class="highlighter"> <img riot-src="{opts.img}"> <h1 class="fonts header-2">{opts.title}</h1> </div>', '', '', function(opts) {
});
riot.tag2('leftarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="leftarrow" id="{opts.unique}" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(1.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow-copy"> <g transform="translate(8.000000, 6.000000) scale(-1, 1) translate(-8.000000, -6.000000) "> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('linkbox', '<a href="{opts.url}"> <div class="footer-image" id="{unique_id}"> <div class="footer-background" riot-style="background: url(\'{opts.img}\'); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div> <div class="label fonts utility"><p>{opts.text}</p></div> </div> </a>', '', '', function(opts) {
    unique_id(this)
    this.on('mount', function() {
      var offscreen = false
      var context = this.parent
      var el = $("#" + this.unique_id)
      var container = $("#" + this.parent.unique_id)

      container.on('scroll', function() {
        var left_border = el.offset().left

        if (!offscreen && left_border < -parseInt(el.css('width')) + 128) {
          offscreen = true
          context.current += 1
          context.update()
        }
        if (offscreen && left_border > -parseInt(el.css('width')) + 128) {
          offscreen = false
          context.current -=1
          context.update()
        }

      })
    })
});
riot.tag2('rightarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="rightarrow" id="{opts.unique_id}" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(-72.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow"> <g transform="translate(73.000000, 0.000000)"> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('slider', '<div class="footer-carousel"> <carousel current="{current}" total="{total}"></carousel> </div> <section class="image-slider-container dragscroll" id="{unique_id}"> <div class="image-slider-flexbox"> <linkbox each="{photos}" text="{text}" img="{img}" url="{url}"></linkbox> <div class="footer-image last-footer-image"></div> </div> </section>', '', '', function(opts) {
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
});