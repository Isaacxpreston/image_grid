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
riot.tag2('leftarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="leftarrow" id="{opts.unique}" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(1.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow-copy"> <g transform="translate(8.000000, 6.000000) scale(-1, 1) translate(-8.000000, -6.000000) "> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('rightarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="rightarrow" id="{opts.unique_id}" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(-72.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow"> <g transform="translate(73.000000, 0.000000)"> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('dropdown', '<div class="dropdown"> <p class="fonts utility">A Closer Look: Interiors</p> <div class="dropdown-header"> <div class="fonts header-1 dropdown-title">Kitchens</div> <div class="chevron-container"> <chevron></chevron> </div> </div> </div>', '', '', function(opts) {
});
riot.tag2('footer', '<div class="footer"> <div class="footer-title"> <highlighter img="./assets/images/highlighter.png" title="More in Portfolio"></highlighter> </div> <div class="view-all"> <a href="#" class="fonts utility">View All</a> </div> <slider></slider> </div>', '', '', function(opts) {
});
riot.tag2('linkbox', '<a href="{opts.url}" class="linkbox"> <div class="footer-image" id="{unique_id}"> <div class="footer-background" riot-style="background: url(\'{opts.img}\'); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div> <div class="label fonts utility"><p>{opts.text}</p></div> </div> </a>', '', '', function(opts) {
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
riot.tag2('highlighter', '<div class="highlighter"> <img riot-src="{opts.img}"> <h1 class="fonts header-2">{opts.title}</h1> </div>', '', '', function(opts) {
});
riot.tag2('chevron', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="21px" height="12px" viewbox="0 0 21 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Header-Dropdown" transform="translate(-456.000000, -54.000000)" stroke-width="2" stroke="#454545"> <g id="Line"> <polyline transform="translate(466.500000, 60.000000) rotate(-270.000000) translate(-466.500000, -60.000000) " points="462 51 471 60 462 69"></polyline> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('logo', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="44px" height="17px" viewbox="0 0 44 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Menu" transform="translate(-18.000000, -24.000000)" fill="#4A4A4A"> <g id="B&amp;F"> <path d="M30.5187926,35.4926036 C30.5187926,39.1893491 27.2027264,40.647929 24.400779,40.647929 L18,40.647929 L18,40.4970414 L19.696592,39.2899408 L19.696592,25.3579882 L18,24.1508876 L18,24 L23.9123661,24 C26.8685492,24 28.9764362,25.056213 28.9764362,27.5207101 C28.9764362,29.2810651 27.3312561,30.7899408 25.9174294,31.2677515 C28.230964,31.443787 30.5187926,32.8269231 30.5187926,35.4926036 Z M23.9123661,31.9970414 L21.9844206,31.9970414 L21.9844206,39.4156805 C22.5242454,39.6420118 23.3725414,39.8934911 24.4778968,39.8934911 C26.3544304,39.8934911 28.1795521,38.3594675 28.1795521,35.8698225 C28.1795521,33.204142 26.3544304,31.9970414 23.9123661,31.9970414 Z M23.4753651,24.7795858 L21.9844206,24.7795858 L21.9844206,31.2174556 L24.2208374,31.2174556 C25.5061344,31.2174556 26.8171373,29.658284 26.8171373,27.8224852 C26.8171373,25.8106509 25.5061344,24.7795858 23.4753651,24.7795858 Z M49.6782863,30.4881657 C47.4418695,31.7707101 47.0562804,32.5 45.4111003,35.4926036 C45.128335,35.9955621 44.8455696,36.4985207 44.5628043,36.9511834 C45.4882181,38.2840237 46.6449854,39.6671598 48.6757546,39.6671598 C49.3441091,39.6671598 49.8839338,39.5162722 50.0638754,39.4408284 L50.1409932,39.5414201 C49.6782863,40.0443787 48.6757546,40.8491124 47.236222,40.8491124 C45.5139241,40.8491124 44.3057449,39.9689349 43.2775073,38.6612426 C42.0436222,40.0946746 40.5269718,41 38.4447907,41 C34.8459591,41 32.6095424,38.8372781 32.6095424,36.2721893 C32.6095424,33.8579882 34.5374878,31.8964497 36.7739046,30.9659763 C35.4629017,29.7085799 35.0516066,28.6775148 35.0516066,27.6213018 C35.0516066,26.0872781 36.4654333,24.6035503 38.6247322,24.6035503 C40.2185005,24.6035503 42.0693281,25.408284 42.0693281,27.2189349 C42.0693281,28.9792899 40.3984421,29.7588757 39.138851,30.4378698 C40.9125609,32.147929 42.1721519,33.556213 44.0229796,36.1715976 L44.4085686,35.5177515 C45.3339825,33.8579882 45.950925,32.6760355 46.5421616,31.8210059 L44.7684518,30.4881657 L44.7684518,30.3372781 L49.6782863,30.3372781 L49.6782863,30.4881657 Z M42.7376826,37.9068047 C40.6297955,34.8890533 39.4987342,33.6316568 37.2366115,31.4186391 C35.8227848,32.3239645 34.7688413,33.8076923 34.7688413,35.6183432 C34.7688413,37.9319527 36.3369036,39.6923077 38.9332035,39.6923077 C40.5526777,39.6923077 41.7608569,38.9881657 42.7376826,37.9068047 Z M36.7996105,27.1183432 C36.7996105,28.1494083 37.4679649,28.8032544 38.70185,30.035503 C39.4216164,29.5576923 40.3213242,28.7529586 40.3213242,27.3195266 C40.3213242,26.112426 39.575852,25.3328402 38.6247322,25.3328402 C37.5707887,25.3328402 36.7996105,26.112426 36.7996105,27.1183432 Z M60.303408,31.3431953 L54.750925,31.3431953 L54.750925,24.8298817 L60.0977605,24.8298817 L61.8457644,27.1183432 L62,27.1183432 L62,24 L50.7665044,24 L50.7665044,24.1508876 L52.4630964,25.3579882 L52.4630964,39.2899408 L50.7665044,40.4970414 L50.7665044,40.647929 L57.2444012,40.647929 L57.2444012,40.4970414 L54.750925,39.2647929 L54.750925,32.1982249 L60.303408,32.1982249 L61.4601753,33.908284 L61.588705,33.908284 L61.588705,29.6331361 L61.4601753,29.6331361 L60.303408,31.3431953 Z"></path> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('mainlink', '<div class="main-menu-link" id="{unique_id}"> <div class="fonts header-1">{opts.text}</div> <div class="header-underline"></div> </div> <br>', '', '', function(opts) {
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
});
riot.tag2('mainmenu', '<div style="height: 672px; width: 1151px; display: flex; background: white; box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10); position: absolute; z-index: 2; margin-top: 24px;"> <div style="width: 50%"> <div style="margin-left: 128px; margin-top: 120px;"> <mainlink text="Portfolio" href="#"></mainlink> <mainlink text="A Closer Look"></mainlink> <mainlink text="About"></mainlink> <mainlink text="News"></mainlink> <a href="#"><p class="fonts utility">Contact Us</p></a> <a href="#"><p class="fonts utility">Newsletter</p></a> </div> </div> <div style="width: 50%; background: #EEDBBF"> <div style="margin-left: 76px; margin-top: 120px;"> <sublink text="Exteriors" href="#"></sublink> <sublink text="Interiors"></sublink> </div> </div> </div>', '', '', function(opts) {
});
riot.tag2('menubar', '<div class="menu-bar"> <div class="menu-bar-inner"> <div class="menu-logo"> <logo></logo> </div> <div class="menu-title fonts subheader"> {title} </div> <div class="menu-icon-container"> <menuicon></menuicon> </div> </div> </div>', '', '', function(opts) {
    this.title = opts.title
});
riot.tag2('menuicon', '<div class="menu-icon" id="{unique_id}"> <span></span> <span></span> <span></span> <span></span> </div>', '', '', function(opts) {
    unique_id(this)
    var context = this

    this.on('mount', function() {
      $(document).ready(function(){
        $('#' + context.unique_id).click(function(){
          $('#' + context.unique_id).toggleClass('open');
        });
      })
    })
});
riot.tag2('sublink', '<h2 class="fonts header-2 sub-link" id="{unique_id}">{opts.text}</h2>', '', '', function(opts) {
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
});