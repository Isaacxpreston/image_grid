<app>
  <!-- COLORS -->
  <div style="background: #f5f5f5; padding-top: 72px; padding-bottom: 72px; width: 100%; display: flex; justify-content: space-around;">
    <div style="width: 150px; height: 150px; background: #DAE4EE;"></div>
    <div style="width: 150px; height: 150px; background: #EEDBBF;"></div>
    <div style="width: 150px; height: 150px; background: #E1D6EB;"></div>
    <div style="width: 150px; height: 150px; background: #E7F2DC;"></div>
  </div>
  <!-- FONTS -->
  <div style="background: #f5f5f5; width: 100%; padding-bottom: 72px; display: flex;">  
    <div style="width: 75%; margin: auto">
      <p class="fonts header-1">Header 1 Desktop</p>
      <p class="fonts header-1 header-1-mobile">Header 1 Mobile</p>
      <p class="fonts header-2">Header 2 Desktop</p>
      <p class="fonts header-2 header-2-mobile">Header 2 Mobile</p>
      <p class="fonts subheader" style="color: #454545;">Subheader</p>
      <p class="fonts utility">Utility/Button</p>
      <div style="height: 24px;"></div>
      <p class="fonts paragraph-small">Paragraph Small</p>
      <p class="fonts paragraph-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p>
      <p class="fonts paragraph">Paragraph</p>
      <p class="fonts paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p>
      <p class="fonts paragraph-large">Paragraph Large Desktop</p>
      <p class="fonts paragraph-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p>
      <p class="fonts paragraph-large paragraph-large-mobile">Paragraph Large Mobile</p>
      <p class="fonts paragraph-large paragraph-large-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien ex. Ut rhoncus purus at enim hendrerit elementum. Mauris venenatis lacus a nibh rutrum, sed euismod orci mollis. Suspendisse laoreet condimentum nulla. Suspendisse posuere, magna varius mollis congue, mauris tortor blandit dui, a tempor sem leo vitae urna. Pellentesque vitae egestas arcu, et posuere velit. Vestibulum in ipsum lacinia diam suscipit ullamcorper nec ac sapien. Sed in enim eget tortor tempus eleifend nec vitae augue. Suspendisse potenti. Nunc pulvinar lectus bibendum vehicula molestie. Maecenas vel porta dolor.</p>
    </div>
  </div>

  <!-- ATOMS DESKTOP -->
  <menubar title="Brooks & Falotico"></menubar>
  <div style="background: #f5f5f5; color: white; width: calc(100%-96px); height: 1000px; padding-left: 96px; display: flex;">
    <dropdown subcategory="Kitchens" category="A Closer Look: Interiors"></dropdown>

    <div style="margin-top: 24px; margin-left: 24px;">
      <linkbox text="Label" img="./assets/images/img3.jpg" url="#"></linkbox>
      <div style="height: 72px;"></div>
      <linkbox text="Label" img="./assets/images/img3.jpg" url="#" options="linkbox-tablet"></linkbox>
      <div style="height: 72px;"></div>
      <carousel current="1" total="4"></carousel>
      <social-icons-newsletter></social-icons-newsletter>
      <div style="height: 36px;"></div>
      <subscribe-form></subscribe-form>
      <div style="height: 36px;"></div>
      <!-- <highlighter img='./assets/images/highlighter.png' title='More in Portfolio'></highlighter> -->
      <mainlink text="Desktop Menu Link" href="#"></mainlink>
    </div>

  </div>

  <!-- ATOMS MOBILE -->
  <div style="background: #f0f0f0; color: white; width: 100%; height: 600px; text-align: center; display: flex; justify-content: space-around;">

    <div style="background: #F8F8F8; border: 1px solid lightgrey; width: 320px; height: 513px; position: relative; margin: auto;">
      <mobile-menubar></mobile-menubar>
      <div style="height: 40px;"></div>
      <dropdown subcategory="Kitchens" category="A Closer Look: Interiors" mobile="true"></dropdown>
      <div style="height: 24px;"></div>
      <subscribe-form options="subscribe-form-mobile"></subscribe-form>
      <social-icons-newsletter options="social-icons-mobile"></social-icons-newsletter>
      <div style="height: 24px;"></div>
      <back-button></back-button>
      <div style="height: 24px;"></div>
      <mobilelink text="Mobile Menu Link" href="#"></mobilelink>
    </div>
    
    <div style="background: #F8F8F8; border: 1px solid lightgrey; width: 320px; height: 513px; position: relative; margin: auto; overflow: hidden;">
      <linkbox text="Label" img="./assets/images/img3.jpg" url="#" options="linkbox-mobile"></linkbox>
    </div>
  </div>

  <!-- MOLECULES DESKTOP -->
  <menubar title="Brooks & Falotico"></menubar>
  <mainmenu></mainmenu>
  <div style="background: #f8f8f8; color: white; width: 100%; height: 800px; text-align: center; display: flex;">
    <h1 style="font-size: 60px; font-family: 'Portrait-Regular'; margin: auto;">Placeholder</h1>
  </div>
  <footer background="#DAE4EE"></footer>
  
</app>