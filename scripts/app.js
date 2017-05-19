riot.tag2('highlighter', '<div class="highlighter"> <img riot-src="{opts.img}"> <h1 class="fonts header-2">{opts.title}</h1> </div>', '', '', function(opts) {
});
riot.tag2('linkbox', '<a href="{opts.url}"> <div class="footer-image"> <div class="footer-background" riot-style="background: url(\'{opts.img}\'); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div> <div class="label fonts utility"><p>{opts.text}</p></div> </div> </a>', '', '', function(opts) {
    console.log(opts.img)
    console.log(opts.text)
});