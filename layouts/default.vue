<template>
  <div>
    <div class="header-container">
      <div class="header-left">
        <nuxt-link tag="div" v-scroll-to="'#top'" to>
          <img src="\img\Steg-logo.png" class="steg-logo" alt="Steg">
        </nuxt-link>
      </div>
      <div class="header-right">
        <nuxt-link tag="div" v-scroll-to="'#news'" to>
          <div class="header-right-contents">
            <p class="header-right-contents-en">NEWS</p>
            <p class="header-right-contents-jp">お知らせ</p>
          </div>
        </nuxt-link>

        <nuxt-link tag="div" v-scroll-to="'#about'" to>
          <div class="header-right-contents">
            <p class="header-right-contents-en">ABOUT</p>
            <p class="header-right-contents-jp">団体概要</p>
          </div>
        </nuxt-link>
          
        <nuxt-link tag="div" v-scroll-to="'#partners'" to>
          <div class="header-right-contents">
            <p class="header-right-contents-en">PARTNERS</p>
            <p class="header-right-contents-jp">協力団体</p>
          </div>
        </nuxt-link>

        <nuxt-link tag="div" v-scroll-to="'#works'" to>
          <div class="header-right-contents">
            <p class="header-right-contents-en">WORKS</p>
            <p class="header-right-contents-jp">制作実績</p>
          </div>
        </nuxt-link>

        <nuxt-link tag="div" v-scroll-to="'#blog'" to>
          <div class="header-right-contents">
            <p class="header-right-contents-en">BLOG</p>
            <p class="header-right-contents-jp">ブログ</p>
          </div>
        </nuxt-link>

        <nuxt-link tag="div" v-scroll-to="'#members'" to>
          <div class="header-right-contents">
            <p class="header-right-contents-en">MEMBERS</p>
            <p class="header-right-contents-jp">メンバー</p>
          </div>
        </nuxt-link>

        <nuxt-link tag="div" v-scroll-to="'#contact'" to>
          <div class="header-right-contents">
            <p class="header-right-contents-en">CONTACT</p>
            <p class="header-right-contents-jp">お問い合わせ</p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="header-responsive">
      <div class="header-left">
        <nuxt-link tag="div" v-scroll-to="'#top'" to>
          <img src="\img\Steg-logo.png" class="steg-logo" alt="Steg">
        </nuxt-link>
      </div>
      <input id="toggle" type="checkbox" />
      <label class="hamburger" for="toggle">
        <div class="top"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
      <div class="nav">
        <div class="nav-wrapper">
          <nav>
            <nuxt-link tag="a" v-scroll-to="'#top'" to><label class="pointer" for="toggle">HOME</label></nuxt-link>
            <nuxt-link tag="a" v-scroll-to="'#news'" to><label class="pointer" for="toggle">NEWS</label></nuxt-link>
            <nuxt-link tag="a" v-scroll-to="'#about'" to><label class="pointer" for="toggle">ABOUT</label></nuxt-link>
            <nuxt-link tag="a" v-scroll-to="'#partners'" to><label class="pointer" for="toggle">PARTNERS</label></nuxt-link>
            <nuxt-link tag="a" v-scroll-to="'#works'" to><label class="pointer" for="toggle">WORKS</label></nuxt-link>
            <nuxt-link tag="a" v-scroll-to="'#blog'" to><label class="pointer" for="toggle">BLOG</label></nuxt-link>
            <nuxt-link tag="a" v-scroll-to="'#members'" to><label class="pointer" for="toggle">MEMBERS</label></nuxt-link>
            <nuxt-link tag="a" v-scroll-to="'#contact'" to><label class="pointer" for="toggle">CONTACT</label></nuxt-link>
          </nav>
        </div>
      </div>
    </div>

    <Nuxt />
    
  </div>
</template>

<style lang="scss">
.header-container {
  width: 100%;
  height: 75px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
}
@media screen and (max-width: 1024px) {
  .header-container {
    display: none;
  }
}
.header-left {
  margin-left: 60px;
}
.steg-logo{
  width: auto;
  height: 70px;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .header-left{
    margin-left: 20px;
  }
  .steg-logo{
    height: 50px;
    position: fixed;
    top: 7.5px;
  }
}
.header-right {
  display: flex;
}
.header-right-contents {
  margin-right: 35px;
  text-align: center;
  cursor: pointer;
}

.header-right-contents-en{
  font-size: 0.8rem;
  color: $subColor;
}

.header-right-contents-jp{
  font-size: 1rem;
  color: $textColor;
}

.header-responsive{
  position: fixed;
  width: 100%;
  height: 65px;
  background: rgba(255, 255, 255, 0.85);
  z-index: 100;
}

@media screen and (min-width: 1025px) {
  .header-responsive {
    display: none;
  }
}

.hamburger {
  position: fixed;
  width: 50px;
  height: 45px;
  top: 10px;
  right: 20px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.hamburger div {
  width: 35px;
  height: 5px;
  border-radius: 3px;
  background-color: $textColor;
  margin-top: 7px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#toggle {
  display: none;
}
#toggle:checked + .hamburger .top {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin-top: 22.5px;
}
#toggle:checked + .hamburger .meat {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-top: -5px;
}
#toggle:checked + .hamburger .bottom {
  -webkit-transform: scale(0);
  transform: scale(0);
}
#toggle:checked + .hamburger + .nav {
  top: 0;
}
.nav {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  top: -100%;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.nav .nav-wrapper {
  position: relative;
  overflow-y: auto;
  height: 100%;
}
nav {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
nav a {
  margin-top: 1.25rem;
  color: $textColor;
  opacity: 0;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 3px;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}
nav a:first-child {
  margin-top: 0;
}
#toggle:checked + .hamburger + .nav .nav-wrapper nav a {
  opacity: 0.9;
  -webkit-transform: scale(1);
  transform: scale(1);
}
#toggle:checked + .hamburger + .nav .nav-wrapper nav a:hover {
  opacity: 1;
  color: #9696AA;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.pointer{
  cursor: pointer;
}
</style>
