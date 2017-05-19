riot.tag2('carousel', '<div class="carousel"> <leftarrow></leftarrow> <div style="margin-top: -7px; padding-left: 12px; padding-right: 12px;"><span class="fonts utility">{current} / {total}</span></div> <rightarrow></rightarrow> </div>', '', '', function(opts) {
    this.current = 1
    this.updateNumber = function (num) {
      this.current = num
      this.update()
    }.bind(this)
    this.updateTotal = function(num) {
      this.total = num
      this.update()
    }.bind(this)
});
riot.tag2('highlighter', '<div class="highlighter"> <img riot-src="{opts.img}"> <h1 class="fonts header-2">{opts.title}</h1> </div>', '', '', function(opts) {
});
riot.tag2('leftarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="leftarrow" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(1.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow-copy"> <g transform="translate(8.000000, 6.000000) scale(-1, 1) translate(-8.000000, -6.000000) "> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});
riot.tag2('linkbox', '<a href="{opts.url}"> <div class="footer-image"> <div class="footer-background" riot-style="background: url(\'{opts.img}\'); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div> <div class="label fonts utility"><p>{opts.text}</p></div> </div> </a>', '', '', function(opts) {

    document.getElementsByClassName('image-slider-container')[0].addEventListener('scroll', function() {

    })
});
riot.tag2('rightarrow', '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg class="rightarrow" width="18px" height="12px" viewbox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Carosuel" transform="translate(-72.000000, -7.000000)" stroke="#454545"> <g transform="translate(0.000000, 7.000000)" id="left-arrow"> <g transform="translate(73.000000, 0.000000)"> <polyline id="Line" points="10.1153846 0.461538462 15.6538462 6 10.1153846 11.5384615"></polyline> <path d="M15.2307692,6 L0.461538462,6" id="Line"></path> </g> </g> </g> </g> </svg>', '', '', function(opts) {
});