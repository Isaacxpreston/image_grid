<app>
  <!-- ATOMS DESKTOP -->
  <menubar title="Brooks & Falotico"></menubar>
  <div style="background: #f5f5f5; color: white; width: calc(100%-96px); height: 800px; padding-left: 96px; display: flex;">
    <dropdown subcategory="Kitchens" category="A Closer Look: Interiors"></dropdown>

    <div style="margin-top: 24px; margin-left: 24px;">
      <linkbox text="Label" img="./assets/images/img3.jpg" url="#"></linkbox>
      <div style="height: 72px;"></div>
      <carousel current="1" total="4"></carousel>
      <social-icons-newsletter></social-icons-newsletter>
      <div style="height: 36px;"></div>
      <subscribe-form></subscribe-form>
    </div>
  </div>

  <!-- ATOMS TABLET -->
  <div style="width: 100%; background: #f0f0f0; height: 800px; display: flex;">
    <div style="width: 768px; height: 500px; background: #f7f7f7; border: 1px solid lightgrey; position: relative; margin: auto;">

      <linkbox text="Label" img="./assets/images/img3.jpg" url="#" options="linkbox-tablet"></linkbox>
      <div style="height: 72px;"></div>

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
    </div>
    
    <div style="background: #F8F8F8; border: 1px solid lightgrey; width: 320px; height: 513px; position: relative; margin: auto; overflow: hidden;">
      <linkbox text="Label" img="./assets/images/img3.jpg" url="#" options="linkbox-mobile"></linkbox>
    </div>

    <div style="background: #F8F8F8; border: 1px solid lightgrey; width: 320px; height: 513px; position: relative; margin: auto;">
      
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