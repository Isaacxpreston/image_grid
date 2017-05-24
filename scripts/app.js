riot.tag2('app', '<div style="background: #f5f5f5; padding-top: 72px; padding-bottom: 72px; width: 100%; display: flex; justify-content: space-around;"> <div style="width: 150px; height: 150px; background: #DAE4EE;"></div> <div style="width: 150px; height: 150px; background: #EEDBBF;"></div> <div style="width: 150px; height: 150px; background: #E1D6EB;"></div> <div style="width: 150px; height: 150px; background: #E7F2DC;"></div> </div> <div style="background: #f5f5f5; width: 100%; padding-bottom: 72px; display: flex;"> <div style="width: 75%; margin: auto"> <p class="fonts header-1">Header 1 Desktop</p> <p class="fonts header-1 header-1-mobile">Header 1 Mobile</p> <p class="fonts header-2">Header 2 Desktop</p> <p class="fonts header-2 header-2-mobile">Header 2 Mobile</p> <p class="fonts subheader" style="color: #454545;">Subheader</p> <p class="fonts utility">Utility/Button</p> <div style="height: 24px;"></div> <p class="fonts paragraph-small">Paragraph Small</p> <p class="fonts paragraph-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p> <p class="fonts paragraph">Paragraph</p> <p class="fonts paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p> <p class="fonts paragraph-large">Paragraph Large Desktop</p> <p class="fonts paragraph-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p> <p class="fonts paragraph-large paragraph-large-mobile">Paragraph Large Mobile</p> <p class="fonts paragraph-large paragraph-large-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p> </div> </div> <menubar title="Brooks & Falotico"></menubar> <div style="background: #f5f5f5; color: white; width: calc(100%-96px); height: 1000px; padding-left: 96px; display: flex;"> <dropdown subcategory="Kitchens" category="A Closer Look: Interiors"></dropdown> <div style="margin-top: 24px; margin-left: 24px;"> <linkbox text="Label" img="./assets/images/img3.jpg" url="#"></linkbox> <div style="height: 72px;"></div> <linkbox text="Label" img="./assets/images/img3.jpg" url="#" options="linkbox-tablet"></linkbox> <div style="height: 72px;"></div> <carousel current="1" total="4"></carousel> <social-icons-newsletter></social-icons-newsletter> <div style="height: 36px;"></div> <subscribe-form></subscribe-form> <div style="height: 36px;"></div> <mainlink text="Desktop Menu Link" href="#"></mainlink> </div> </div> <div style="background: #f0f0f0; color: white; width: 100%; height: 600px; text-align: center; display: flex; justify-content: space-around;"> <div style="background: #F8F8F8; border: 1px solid lightgrey; width: 320px; height: 513px; position: relative; margin: auto;"> <mobile-menubar></mobile-menubar> <div style="height: 40px;"></div> <dropdown subcategory="Kitchens" category="A Closer Look: Interiors" mobile="true"></dropdown> <div style="height: 24px;"></div> <subscribe-form options="subscribe-form-mobile"></subscribe-form> <social-icons-newsletter options="social-icons-mobile"></social-icons-newsletter> <div style="height: 24px;"></div> <back-button></back-button> <div style="height: 24px;"></div> <mobilelink text="Mobile Menu Link" href="#"></mobilelink> </div> <div style="background: #F8F8F8; border: 1px solid lightgrey; width: 320px; height: 513px; position: relative; margin: auto; overflow: hidden;"> <linkbox text="Label" img="./assets/images/img3.jpg" url="#" options="linkbox-mobile"></linkbox> </div> </div> <menubar title="Brooks & Falotico"></menubar> <mainmenu></mainmenu> <div style="background: #f8f8f8; color: white; width: 100%; height: 800px; text-align: center; display: flex;"> <h1 style="font-size: 60px; font-family: \'Portrait-Regular\'; margin: auto;">Placeholder</h1> </div> <footer background="#DAE4EE"></footer>', '', '', function(opts) {
});
riot.tag2('carousel', '<div class="carousel"> <leftarrow unique="{left_tag}"></leftarrow> <div style="margin-top: -7px; padding-left: 12px; padding-right: 12px;"><span class="fonts utility" style="user-select: none;">{opts.current} / {opts.total}</span></div> <rightarrow unique_id="{right_tag}"></rightarrow> </div>', '', '', function(opts) {
    this.left_tag = unique_id()
    this.right_tag = unique_id()

    this.on('mount', function() {
      if(this.parent) {
        var container = $("#" + this.parent.unique_id)
        var left_arrow = $('#'+ this.left_tag)
        var right_arrow = $('#'+ this.right_tag)
        var context = this.parent

        left_arrow.on('click', function () {
          if(context.current > 1) {
            container.scrollTo((524 * (context.current)) - 1048, 400)
          }
        })

        right_arrow.on('click', function () {
          if(context.current < context.total) {
            container.scrollTo(524 * (context.current), 400)
          }
        })
      }
    })
});
riot.tag2('leftarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="leftarrow" id="{opts.unique}" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(1.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow-copy"> <g transform="translate(8.000000, 6.000000) scale(-1, 1) translate(-8.000000, -6.000000) "> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('rightarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="rightarrow" id="{opts.unique_id}" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(-72.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow"> <g transform="translate(73.000000, 0.000000)"> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('dropdown', '<div class="dropdown-wrapper" id="{unique_id}"> <div class="dropdown"> <p class="fonts utility">{opts.category}</p> <div class="dropdown-header"> <div class="fonts header-1 dropdown-title" id="{mobile_id}">{opts.subcategory}</div> <div class="chevron-container"> <chevron></chevron> </div> </div> </div> <div class="options-container"> <div class="options"> <a class="fonts utility" href="#"><p>Bathrooms</p></a> <a class="fonts utility" href="#"><p>Entries</p></a> <a class="fonts utility" href="#"><p>Libraries</p></a> <a class="fonts utility" href="#"><p>Bars & Wine Cellars</p></a> <a class="fonts utility" href="#"><p>Fireplaces</p></a> <a class="fonts utility" href="#"><p>Details</p></a> </div> </div> </div>', '', '', function(opts) {
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
});
riot.tag2('footer', '<div class="footer"> <div class="footer-title"> <highlighter img="./assets/images/highlighter.png" title="More in Portfolio"></highlighter> </div> <div class="view-all"> <a href="#" class="fonts utility">View All</a> </div> <slider></slider> </div>', '', '', function(opts) {
    this.on('mount', function() {
      $(document).ready(function() {
        $('.image-slider-container').css('background', opts.background)
      })
    })
});
riot.tag2('linkbox', '<a href="{opts.url}" class="linkbox"> <div class="linkbox-image" id="{unique_id}"> <div class="linkbox-background" riot-style="background: url(\'{opts.img}\'); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div> <div class="label fonts utility"><p>{opts.text}</p></div> </div> </a>', '', '', function(opts) {
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

      if(opts.options) {
        $('#' + this.unique_id).addClass(opts.options)
      }
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
riot.tag2('back-chevron', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="10px" height="16px" viewbox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Mobile-Menu-News" transform="translate(-22.000000, -112.000000)" stroke-width="2" stroke="#CCC9C7"> <polyline id="Line" transform="translate(27.000000, 120.000000) scale(-1, 1) rotate(-360.000000) translate(-27.000000, -120.000000) " points="24 114 30 120 24 126"></polyline> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('back-button', '<div class="mobile-back-button"> <div><back-chevron></back-chevron></div> <div class="fonts utility back-button-text">Main Menu</div> </div>', '', '', function(opts) {
});
riot.tag2('chevron', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="chevron" width="21px" height="12px" viewbox="0 0 21 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Header-Dropdown" transform="translate(-456.000000, -54.000000)" stroke-width="2" stroke="#454545"> <g id="Line"> <polyline transform="translate(466.500000, 60.000000) rotate(-270.000000) translate(-466.500000, -60.000000) " points="462 51 471 60 462 69"></polyline> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('mainmenu', '<div style="height: 672px; width: 1151px; display: flex; background: white; box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10); position: absolute; z-index: 2; margin-top: 24px;"> <div style="width: 50%"> <div style="margin-left: 128px; margin-top: 120px;"> <mainlink text="Portfolio" href="#"></mainlink> <mainlink text="A Closer Look"></mainlink> <mainlink text="About"></mainlink> <mainlink text="News"></mainlink> <a href="#"><p class="fonts utility">Contact Us</p></a> <a href="#"><p class="fonts utility">Newsletter</p></a> </div> </div> <div style="width: 50%; background: white"> <div> <newsletter></newsletter> </div> </div> </div>', '', '', function(opts) {
});
riot.tag2('logo', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="44px" height="17px" viewbox="0 0 44 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Menu" transform="translate(-18.000000, -24.000000)" fill="#4A4A4A"> <g id="B&amp;F"> <path d="M30.5187926,35.4926036 C30.5187926,39.1893491 27.2027264,40.647929 24.400779,40.647929 L18,40.647929 L18,40.4970414 L19.696592,39.2899408 L19.696592,25.3579882 L18,24.1508876 L18,24 L23.9123661,24 C26.8685492,24 28.9764362,25.056213 28.9764362,27.5207101 C28.9764362,29.2810651 27.3312561,30.7899408 25.9174294,31.2677515 C28.230964,31.443787 30.5187926,32.8269231 30.5187926,35.4926036 Z M23.9123661,31.9970414 L21.9844206,31.9970414 L21.9844206,39.4156805 C22.5242454,39.6420118 23.3725414,39.8934911 24.4778968,39.8934911 C26.3544304,39.8934911 28.1795521,38.3594675 28.1795521,35.8698225 C28.1795521,33.204142 26.3544304,31.9970414 23.9123661,31.9970414 Z M23.4753651,24.7795858 L21.9844206,24.7795858 L21.9844206,31.2174556 L24.2208374,31.2174556 C25.5061344,31.2174556 26.8171373,29.658284 26.8171373,27.8224852 C26.8171373,25.8106509 25.5061344,24.7795858 23.4753651,24.7795858 Z M49.6782863,30.4881657 C47.4418695,31.7707101 47.0562804,32.5 45.4111003,35.4926036 C45.128335,35.9955621 44.8455696,36.4985207 44.5628043,36.9511834 C45.4882181,38.2840237 46.6449854,39.6671598 48.6757546,39.6671598 C49.3441091,39.6671598 49.8839338,39.5162722 50.0638754,39.4408284 L50.1409932,39.5414201 C49.6782863,40.0443787 48.6757546,40.8491124 47.236222,40.8491124 C45.5139241,40.8491124 44.3057449,39.9689349 43.2775073,38.6612426 C42.0436222,40.0946746 40.5269718,41 38.4447907,41 C34.8459591,41 32.6095424,38.8372781 32.6095424,36.2721893 C32.6095424,33.8579882 34.5374878,31.8964497 36.7739046,30.9659763 C35.4629017,29.7085799 35.0516066,28.6775148 35.0516066,27.6213018 C35.0516066,26.0872781 36.4654333,24.6035503 38.6247322,24.6035503 C40.2185005,24.6035503 42.0693281,25.408284 42.0693281,27.2189349 C42.0693281,28.9792899 40.3984421,29.7588757 39.138851,30.4378698 C40.9125609,32.147929 42.1721519,33.556213 44.0229796,36.1715976 L44.4085686,35.5177515 C45.3339825,33.8579882 45.950925,32.6760355 46.5421616,31.8210059 L44.7684518,30.4881657 L44.7684518,30.3372781 L49.6782863,30.3372781 L49.6782863,30.4881657 Z M42.7376826,37.9068047 C40.6297955,34.8890533 39.4987342,33.6316568 37.2366115,31.4186391 C35.8227848,32.3239645 34.7688413,33.8076923 34.7688413,35.6183432 C34.7688413,37.9319527 36.3369036,39.6923077 38.9332035,39.6923077 C40.5526777,39.6923077 41.7608569,38.9881657 42.7376826,37.9068047 Z M36.7996105,27.1183432 C36.7996105,28.1494083 37.4679649,28.8032544 38.70185,30.035503 C39.4216164,29.5576923 40.3213242,28.7529586 40.3213242,27.3195266 C40.3213242,26.112426 39.575852,25.3328402 38.6247322,25.3328402 C37.5707887,25.3328402 36.7996105,26.112426 36.7996105,27.1183432 Z M60.303408,31.3431953 L54.750925,31.3431953 L54.750925,24.8298817 L60.0977605,24.8298817 L61.8457644,27.1183432 L62,27.1183432 L62,24 L50.7665044,24 L50.7665044,24.1508876 L52.4630964,25.3579882 L52.4630964,39.2899408 L50.7665044,40.4970414 L50.7665044,40.647929 L57.2444012,40.647929 L57.2444012,40.4970414 L54.750925,39.2647929 L54.750925,32.1982249 L60.303408,32.1982249 L61.4601753,33.908284 L61.588705,33.908284 L61.588705,29.6331361 L61.4601753,29.6331361 L60.303408,31.3431953 Z"></path> </g> </g> </g> </svg>', '', '', function(opts) {
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
riot.tag2('mobile-menubar', '<div style="position: absolute; top: 0; display: flex; background: white; width: 100%; height: 40px; box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);"> <div style="margin: auto; margin-left: 24px;"> <logo></logo> </div> <div style="margin: auto; margin-top: 11px; margin-right: 24px;"> <menuicon></menuicon> </div> </div>', '', '', function(opts) {
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
riot.tag2('mobilelink', '<div class="mobile-menu-link" id="{unique_id}"> <div class="fonts header-1 header-1-mobile">{opts.text}</div> <div class="nav-chevron"><right-chevron></right-chevron></div> </div>', '', '', function(opts) {
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
riot.tag2('right-chevron', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="13px" height="22px" viewbox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Mobile-Menu" transform="translate(-285.000000, -139.000000)" stroke-width="2" stroke="#B4B0AD"> <polyline id="Line" transform="translate(291.500000, 150.000000) rotate(-360.000000) translate(-291.500000, -150.000000) " points="287 141 296 150 287 159"></polyline> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('newsletter', '<div style="height: 324px; width: 100%; background: url(\'./assets/images/sub_image.png\'); background-position: center center; background-repeat: no-repeat; background-size: cover; margin-bottom: 36px;"></div> <p class="fonts utility">Newsletter</p> <subscribe-form></subscribe-form> <social-icons-newsletter></social-icons-newsletter>', '', '', function(opts) {
});
riot.tag2('social-icons-newsletter', '<div class="social-icons" id="{unique_id}"> <facebookicon></facebookicon> <instagramicon></instagramicon> <twittericon></twittericon> <pinteresticon></pinteresticon> <houzzicon></houzzicon> <dicon></dicon> </div>', '', '', function(opts) {
    unique_id(this)
    this.on('mount', function() {
      if (opts.options) {
        $('#' + this.unique_id).addClass(opts.options)
      }
    })
});
riot.tag2('subscribe-form', '<div class="subscribe-form" id="{unique_id}"> <input type="text" placeholder="Email address..."></input> <div class="subscribe-button"><div>Subscribe</div></div> </div>', '', '', function(opts) {
    unique_id(this)
    this.on('mount', function() {

      if(opts.options) {
        $('#' + this.unique_id).addClass(opts.options)
      }
    })
});
riot.tag2('dicon', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-Menu-Newsletter" transform="translate(-1022.000000, -492.000000)" fill="#454545"> <g id="Menu" transform="translate(0.000000, 24.000000)"> <path d="M1034,492 C1027.37258,492 1022,486.627417 1022,480 C1022,473.372583 1027.37258,468 1034,468 C1040.62742,468 1046,473.372583 1046,480 C1046,486.627417 1040.62742,492 1034,492 Z M1037.84091,476.295455 C1037.00757,475.431814 1035.80809,475 1034.24242,475 L1030,475 L1030,485 L1034.24242,485 C1035.80809,485 1037.00757,484.568186 1037.84091,483.704545 C1038.67425,482.840905 1039.09091,481.606069 1039.09091,480 C1039.09091,478.393931 1038.67425,477.159095 1037.84091,476.295455 Z M1035.83333,482.272727 C1035.43939,482.77778 1034.82324,483.030303 1033.98485,483.030303 L1032.60606,483.030303 L1032.60606,476.969697 L1033.98485,476.969697 C1034.82324,476.969697 1035.43939,477.22222 1035.83333,477.727273 C1036.22727,478.232326 1036.42424,478.989894 1036.42424,480 C1036.42424,481.010106 1036.22727,481.767674 1035.83333,482.272727 Z" id="Combined-Shape"></path> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('facebookicon', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-Menu-Newsletter" transform="translate(-576.000000, -492.000000)" fill="#454545"> <g id="Menu" transform="translate(0.000000, 24.000000)"> <path d="M576,480 C576,473.372583 581.372583,468 588,468 C594.627417,468 600,473.372583 600,480 C600,486.627417 594.627417,492 588,492 C581.372583,492 576,486.627417 576,480 Z M588.850778,486.655738 L588.850778,480.127105 L590.652966,480.127105 L590.891795,477.877302 L588.850778,477.877302 L588.853839,476.751253 C588.853839,476.16447 588.909592,475.850058 589.752382,475.850058 L590.879037,475.850058 L590.879037,473.6 L589.076593,473.6 C586.911569,473.6 586.149536,474.691397 586.149536,476.526783 L586.149536,477.877556 L584.8,477.877556 L584.8,480.12736 L586.149536,480.12736 L586.149536,486.655738 L588.850778,486.655738 Z" id="Combined-Shape"></path> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('houzzicon', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-Menu-Newsletter" transform="translate(-933.000000, -492.000000)" fill="#454545"> <g id="Menu" transform="translate(0.000000, 24.000000)"> <path d="M945,492 C938.372583,492 933,486.627417 933,480 C933,473.372583 938.372583,468 945,468 C951.627417,468 957,473.372583 957,480 C957,486.627417 951.627417,492 945,492 Z M945,487.281702 L949,484.860304 L948.999016,480.051064 L945.005606,482.484565 L945,487.281702 Z M941,480.051064 L945,477.629666 L944.999016,472.820426 L941.005606,475.253927 L941,480.051064 Z M941,484.871489 L945,482.438336 L941.005606,480.051064 L941,484.871489 Z M949,480.051064 L948.994394,475.230638 L945,477.617911 L949,480.051064 Z" id="Houzz"></path> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('instagramicon', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-Menu-Newsletter" transform="translate(-665.000000, -492.000000)" fill="#454545"> <g id="Menu" transform="translate(0.000000, 24.000000)"> <path d="M665,480 C665,473.372583 670.372583,468 677,468 C683.627417,468 689,473.372583 689,480 C689,486.627417 683.627417,492 677,492 C670.372583,492 665,486.627417 665,480 Z M677.0006,473.6 C675.262449,473.6 675.044313,473.6076 674.361639,473.638667 C673.680299,473.669867 673.215227,473.777735 672.80829,473.936004 C672.387352,474.099472 672.030282,474.318141 671.674545,474.674011 C671.318541,475.029748 671.099872,475.386819 670.93587,475.807623 C670.777202,476.214694 670.669201,476.679899 670.638534,477.360973 C670.608,478.043646 670.6,478.261915 670.6,480.000067 C670.6,481.738218 670.607733,481.955687 670.638667,482.638361 C670.670001,483.319701 670.777869,483.784773 670.936004,484.19171 C671.099605,484.612648 671.318274,484.969718 671.674145,485.325455 C672.029748,485.681459 672.386819,485.900661 672.80749,486.06413 C673.214694,486.222398 673.679899,486.330266 674.361106,486.361466 C675.04378,486.392533 675.261782,486.400133 676.9998,486.400133 C678.738085,486.400133 678.955554,486.392533 679.638227,486.361466 C680.319568,486.330266 680.785173,486.222398 681.192377,486.06413 C681.613181,485.900661 681.969718,485.681459 682.325322,485.325455 C682.681326,484.969718 682.899995,484.612648 683.063996,484.191844 C683.221331,483.784773 683.329333,483.319568 683.361333,482.638494 C683.392,481.95582 683.4,481.738218 683.4,480.000067 C683.4,478.261915 683.392,478.04378 683.361333,477.361106 C683.329333,476.679765 683.221331,476.214694 683.063996,475.807756 C682.899995,475.386819 682.681326,475.029748 682.325322,474.674011 C681.969318,474.318007 681.613315,474.099339 681.191977,473.936004 C680.783973,473.777735 680.318635,473.669867 679.637294,473.638667 C678.95462,473.6076 678.737285,473.6 676.9986,473.6 L677.0006,473.6 Z M676.426461,474.753345 C676.596862,474.753079 676.786998,474.753345 677.0006,474.753345 C678.709418,474.753345 678.911953,474.759479 679.58676,474.790146 C680.210767,474.818679 680.549437,474.922947 680.775039,475.010548 C681.073709,475.126549 681.286645,475.265217 681.510514,475.48922 C681.734516,475.713222 681.873184,475.926558 681.989452,476.225227 C682.077053,476.450563 682.181454,476.789233 682.209854,477.41324 C682.240521,478.087913 682.247188,478.290582 682.247188,479.9986 C682.247188,481.706618 682.240521,481.909287 682.209854,482.58396 C682.181321,483.207967 682.077053,483.546637 681.989452,483.771973 C681.873451,484.070642 681.734516,484.283311 681.510514,484.50718 C681.286511,484.731183 681.073842,484.869851 680.775039,484.985852 C680.549704,485.073853 680.210767,485.177854 679.58676,485.206388 C678.912087,485.237055 678.709418,485.243721 677.0006,485.243721 C675.291649,485.243721 675.089113,485.237055 674.41444,485.206388 C673.790433,485.177587 673.451763,485.07332 673.226027,484.985719 C672.927358,484.869717 672.714022,484.731049 672.49002,484.507047 C672.266017,484.283045 672.127349,484.070242 672.011081,483.771439 C671.92348,483.546104 671.819079,483.207433 671.790679,482.583427 C671.760012,481.908753 671.753879,481.706084 671.753879,479.997 C671.753879,478.287915 671.760012,478.086313 671.790679,477.41164 C671.819213,476.787633 671.92348,476.448963 672.011081,476.223361 C672.127083,475.924691 672.266017,475.711355 672.49002,475.487353 C672.714022,475.263351 672.927358,475.124683 673.226027,475.008415 C673.45163,474.920414 673.790433,474.816413 674.41444,474.787746 C675.004846,474.761079 675.233648,474.753079 676.426461,474.751745 L676.426461,474.753345 Z M680.416902,475.816023 C679.992898,475.816023 679.648894,476.159627 679.648894,476.583764 C679.648894,477.007769 679.992898,477.351772 680.416902,477.351772 C680.840907,477.351772 681.18491,477.007769 681.18491,476.583764 C681.18491,476.15976 680.840907,475.815756 680.416902,475.815756 L680.416902,475.816023 Z M677.0006,476.713366 C675.185514,476.713366 673.713899,478.184981 673.713899,480.000067 C673.713899,481.815152 675.185514,483.286101 677.0006,483.286101 C678.815686,483.286101 680.286768,481.815152 680.286768,480.000067 C680.286768,478.184981 678.815552,476.713366 677.000467,476.713366 L677.0006,476.713366 Z M677.0006,477.866711 C678.178746,477.866711 679.133956,478.821788 679.133956,480.000067 C679.133956,481.178212 678.178746,482.133422 677.0006,482.133422 C675.822321,482.133422 674.867244,481.178212 674.867244,480.000067 C674.867244,478.821788 675.822321,477.866711 677.0006,477.866711 L677.0006,477.866711 Z" id="Combined-Shape"></path> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('pinteresticon', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-Menu-Newsletter" transform="translate(-844.000000, -492.000000)" fill="#454545"> <g id="Menu" transform="translate(0.000000, 24.000000)"> <path d="M856,492 C849.372583,492 844,486.627417 844,480 C844,473.372583 849.372583,468 856,468 C862.627417,468 868,473.372583 868,480 C868,486.627417 862.627417,492 856,492 Z M853.716824,485.228973 C853.739034,485.383457 853.915009,485.556898 854.145475,485.383457 C854.400148,484.957868 854.782158,484.260415 854.923561,483.703816 C854.999815,483.403934 855.313715,482.180931 855.313715,482.180931 C855.518046,482.579259 856.114751,482.917005 856.749954,482.917005 C858.638534,482.917005 860,481.139674 860,478.931453 C860,476.814863 858.311309,475.230638 856.138442,475.230638 C853.435499,475.230638 852,477.087483 852,479.108656 C852,480.04768 852.488617,481.218431 853.270405,481.591012 C853.389598,481.64705 853.453267,481.62206 853.480659,481.504682 C853.501388,481.416081 853.607255,480.980646 853.654636,480.778453 C853.669443,480.713327 853.66204,480.658046 853.610957,480.594435 C853.351842,480.273349 853.14529,479.682673 853.14529,479.132132 C853.14529,477.719052 854.191375,476.351409 855.973348,476.351409 C857.512493,476.351409 858.589672,477.423714 858.589672,478.957958 C858.589672,480.691366 857.733852,481.892408 856.620396,481.892408 C856.005923,481.892408 855.545438,481.372916 855.692763,480.734531 C855.869702,479.97271 856.211734,479.151064 856.211734,478.60128 C856.211734,478.10905 855.953359,477.698606 855.419582,477.698606 C854.790302,477.698606 854.286137,478.363495 854.286137,479.254811 C854.286137,479.822012 854.473441,480.205951 854.473441,480.205951 C854.473441,480.205951 853.852304,482.8905 853.739034,483.390303 C853.613178,483.94463 853.66204,484.722354 853.716824,485.228973 Z" id="Pinterest"></path> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('twittericon', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-Menu-Newsletter" transform="translate(-754.000000, -492.000000)" fill="#454545"> <g id="Menu" transform="translate(0.000000, 24.000000)"> <path d="M754,480 C754,473.372583 759.372583,468 766,468 C772.627417,468 778,473.372583 778,480 C778,486.627417 772.627417,492 766,492 C759.372583,492 754,486.627417 754,480 Z M765.640601,477.75375 L765.665783,478.168977 L765.246095,478.118133 C763.718432,477.923231 762.383826,477.262257 761.250669,476.15216 L760.696681,475.601349 L760.553988,476.008102 C760.251813,476.914822 760.444869,477.872387 761.0744,478.516412 C761.41015,478.872321 761.334607,478.923165 760.755438,478.711315 C760.553988,478.643523 760.377719,478.592678 760.360931,478.618101 C760.302175,478.677419 760.503625,479.448555 760.663106,479.753619 C760.881344,480.177321 761.326213,480.592548 761.81305,480.838294 L762.224344,481.033197 L761.737507,481.041671 C761.267457,481.041671 761.250669,481.050145 761.301032,481.228099 C761.468907,481.778911 762.132013,482.363618 762.870663,482.617839 L763.391076,482.795793 L762.937813,483.066962 C762.266313,483.456767 761.4773,483.677092 760.688288,483.69404 C760.310569,483.702514 760,483.73641 760,483.761832 C760,483.846572 761.024038,484.321117 761.619994,484.507546 C763.407863,485.058357 765.531483,484.821085 767.126295,483.880468 C768.259452,483.21102 769.392608,481.880599 769.921415,480.592548 C770.206802,479.906152 770.49219,478.651997 770.49219,478.050341 C770.49219,477.660536 770.517371,477.609692 770.987421,477.143621 C771.264415,476.872452 771.524621,476.575861 771.574984,476.491121 C771.658921,476.330115 771.650528,476.330115 771.222446,476.474173 C770.508977,476.728394 770.408252,476.694498 770.76079,476.313167 C771.020996,476.041998 771.331565,475.550505 771.331565,475.406446 C771.331565,475.381024 771.205659,475.423394 771.062965,475.49966 C770.911878,475.584401 770.576127,475.711511 770.324315,475.787777 L769.871052,475.931836 L769.459758,475.652193 C769.233127,475.49966 768.914165,475.33018 768.74629,475.279336 C768.318208,475.1607 767.663496,475.177648 767.277383,475.313232 C766.228164,475.694563 765.565058,476.67755 765.640601,477.75375 Z" id="Combined-Shape"></path> </g> </g> </g> </svg>', '', '', function(opts) {
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