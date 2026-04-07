<template>
  <v-app>
    <div class="washi-bg"></div>
    <div class="washi-gradient"></div>
    <div class="app-content">
    <v-card flat color="transparent" ref="navCard">
	
	  <v-card-title class="justify-center font-weight-light pt-12 fade-up" style="transition-delay: 0.1s">
        <router-link
         style="text-decoration: none; color: inherit;"
         :to="{ name: 'about', params: { locale: $i18n.locale || 'en' } }">
           <span class="text-h4 font-weight-light">
			  <img
				  v-if="$i18n.locale === 'hk'"
				  src="@/assets/calligraphy_name.png"
				  alt="陳渭東"
				  style="height: 4rem; vertical-align: bottom;"
				/>
			  <template v-else>{{ $t('HEADING_NAME') }}</template>
			</span>
           <span class="ml-1 align-self-end font-weight-light">{{ $t('HEADING_TITLE') }}</span>
        </router-link>
      </v-card-title>

      <v-card-subtitle class="overline text-capitalize text-center font-weight-regular fade-up desktop-subtitle" style="transition-delay: 0.2s">{{ $t('SUBHEADING') }}</v-card-subtitle>

      <div v-if="isMobile" class="mobile-top fade-up" style="transition-delay: 0.1s">
        <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'about', params: { locale: $i18n.locale || 'en' } }">
          <span class="mobile-top-name">
            <img v-if="$i18n.locale === 'hk'" src="@/assets/calligraphy_name.png" alt="陳渭東" class="mobile-top-calligraphy" />
            <template v-else>{{ $t('HEADING_NAME') }}</template>
            <span class="mobile-top-degree">{{ $t('HEADING_TITLE') }}</span>
          </span>
        </router-link>
        <div :style="{ opacity: subsExposed ? 0 : 1, transition: 'opacity 2s ease' }">
          <div class="mobile-top-sub">{{ $t('INTRO_SUB1') }} · {{ $t('INTRO_SUB2') }} · {{ $t('INTRO_SUB3') }}</div>
          <div class="mobile-top-where">{{ $t('SUBHEADING').split(' - ')[1] }}</div>
        </div>
      </div>

      <div class="text-center fade-up nav-bar-wrap" style="transition-delay: 0.3s" ref="navBar">
        <router-link
        v-for="tab in tabs"
        :key="tab.name"
        style="text-decoration: none; color: inherit;"
        :ref="'nav-' + tab.name"
        :to="{ name: tab.name, params: { locale: $i18n.locale || 'en' }}">
          <v-btn
          class="overline text-capitalize"
          color="grey darken-4"
          plain
        >
          {{ $t(tab.label) }}
          </v-btn>
        </router-link>
        <div class="nav-indicator" :style="indicatorStyle"></div>
		
      </div>
    </v-card>


	<intro-screen></intro-screen>
	<div class="page-content">
	  <router-view></router-view>
	</div>
    </div>

  <!-- Desktop: floating language switcher + hamburger (top-right) -->
<div v-if="!isMobile" v-show="!introActive" class="float-lang float-lang-enter">
  <div class="float-lang-right">
    <button
      v-for="lang in languages"
      :key="lang.locale"
      @click="changeLocale(lang.locale)"
      :class="['lang-btn', { active: languageSelected.locale === lang.locale }]"
    >
      {{ lang.text }}
    </button>
    <div class="contact-wrap">
      <span class="lang-divider">|</span>
      <contact-form></contact-form>
    </div>
    <div class="hamburger-wrap" :class="{ 'hamburger-visible': navHidden }">
      <span class="lang-divider">|</span>
      <button class="hamburger-btn" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</div>



<!-- Floating heading when nav is hidden (desktop) -->
<transition name="heading-slide">
  <div v-if="!isMobile && navHidden && !introActive" class="float-heading">
    <span class="float-heading-name">{{ $t('HEADING_NAME') }}</span>
    <span class="float-heading-sub">{{ $t('INTRO_SUB1') }}</span>
    <span class="float-heading-sub">{{ $t('INTRO_SUB2') }}</span>
    <span class="float-heading-sub">{{ $t('INTRO_SUB3') }}</span>
  </div>
</transition>



<!-- Slide-down nav menu (desktop: top-right, mobile: bottom-right) -->
<transition name="menu-slide">
  <div v-if="(navHidden || isMobile) && menuOpen" class="float-menu" :class="{ 'float-menu-mobile': isMobile }">
    <router-link
      v-for="tab in tabs"
      :key="tab.name"
      :to="{ name: tab.name, params: { locale: $i18n.locale || 'en' } }"
      :class="['float-menu-item', { 'menu-active': isTabActive(tab.name) }]"
      @click.native="menuOpen = false"
    >
      {{ $t(tab.label) }}
    </router-link>
  </div>
</transition>

  <!-- Mobile: bottom-right icon pill -->
  <div v-if="isMobile" v-show="!introActive" class="mobile-pill" :class="{ 'mobile-pill-visible': pillVisible }" ref="mobilePill">
    <button class="pill-menu-btn" @click="menuOpen = !menuOpen; langOpen = false" aria-label="Menu">
      <span class="pill-page-title">{{ activeTabLabel }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <span class="pill-divider"></span>
    <button class="pill-icon" @click="langOpen = !langOpen; menuOpen = false" aria-label="Language">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
    </button>
    <span class="pill-divider"></span>
    <contact-form></contact-form>
    <transition name="pill-pop">
      <div v-if="langOpen" class="pill-lang-pop">
        <button
          v-for="lang in languages"
          :key="lang.locale"
          @click="changeLocale(lang.locale); langOpen = false"
          :class="['pill-lang-btn', { active: languageSelected.locale === lang.locale }]"
        >
          {{ lang.text }}
        </button>
      </div>
    </transition>
  </div>

  </v-app>
</template>

<script>
import ContactForm from './ContactForm.vue'
import IntroScreen from './IntroScreen.vue'

export default {
  components: { ContactForm, IntroScreen },
  data: function() {
    return {
      languageSelected: { text: 'Eng', locale: 'en' },
      languages: [
        { text: 'Eng', locale: 'en' },
        { text: '繁中', locale: 'hk' },
      ],
      navHidden: false,
      menuOpen: false,
      langOpen: false,
      pillVisible: false,
      introActive: true,
      washiLoaded: false,
      windowWidth: window.innerWidth,
      scrolledDown: false,
      subsExposed: false,
      titleStuck: false,
      indicatorStyle: { left: '0px', width: '0px', opacity: 0 },
      tabs: [
        { name: 'about', label: 'TAB1' },
        { name: 'therapy', label: 'TAB2' },
        { name: 'sessioninfo', label: 'TAB3' },
        { name: 'memories', label: 'TAB4' },
        { name: 'socialDreamingAbout', label: 'TAB5' },
      ],
    }
  },
  computed: {
    isMobile: function() {
      return this.windowWidth <= 600
    },
    activeTabLabel: function() {
      var self = this
      var active = this.tabs.find(function(t) { return self.isTabActive(t.name) })
      return active ? this.$t(active.label) : ''
    }
  },
  methods: {
    isTabActive: function(tabName) {
      var routeName = this.$route.name
      if (tabName === 'about') {
        return routeName === 'default' || routeName === 'about'
      }
      if (tabName === 'sessioninfo') {
        return this.$route.path.indexOf('/sessioninfo') !== -1
      }
      return routeName === tabName
    },
    changeLocale: function(locale) {
      this.$i18n.locale = locale
      var routeLocale = this.$route.params.locale
      if (routeLocale && routeLocale !== locale) {
        var newPath = '/' + locale + this.$route.fullPath.slice(1 + routeLocale.length)
        this.$router.push({ path: newPath })
      } else if (!routeLocale) {
        this.$router.push({ name: 'about', params: { locale: locale } })
      }
    },
    updateIndicator: function() {
      var self = this
      self.$nextTick(function() {
        var activeTab = self.tabs.find(function(t) { return self.isTabActive(t.name) })
        if (!activeTab) { self.indicatorStyle = { opacity: 0 }; return }
        var ref = self.$refs['nav-' + activeTab.name]
        var el = ref && (ref[0] ? ref[0].$el || ref[0] : ref.$el || ref)
        var bar = self.$refs.navBar
        if (!el || !bar) return
        var textEl = el.querySelector('.v-btn__content') || el
        var textRect = textEl.getBoundingClientRect()
        var barRect = bar.getBoundingClientRect()
        self.indicatorStyle = {
          left: (textRect.left - barRect.left) + 'px',
          top: (textRect.bottom - barRect.top + 2) + 'px',
          width: textRect.width + 'px',
          opacity: 1
        }
      })
    },
    $_setupMobileWelcomeFade: function() {
      if (!this.isMobile) return
      var routeName = this.$route.name
      if (routeName !== 'default' && routeName !== 'about') {
        this.pillVisible = true
        return
      }
      if (this._pillShownOnce || !this.introActive) { this.pillVisible = true; return }
      var self = this
      if (self._welcomeScrollHandler) {
        window.removeEventListener('scroll', self._welcomeScrollHandler)
        self._welcomeScrollHandler = null
      }
      self.$nextTick(function() {
        var contentEl = document.querySelector('.v-card__text')
        if (!contentEl) { self.pillVisible = true; return }
        var firstImage = contentEl.querySelector('.v-image')
        if (!firstImage) { self.pillVisible = true; return }
        var imageFlex = firstImage.closest('.flex')
        if (!imageFlex) { self.pillVisible = true; return }
        var textFlex = imageFlex.nextElementSibling
        while (textFlex && textFlex.querySelectorAll('.fade-up').length === 0) {
          textFlex = textFlex.nextElementSibling
        }
        if (!textFlex) { self.pillVisible = true; return }
        var allFadeUps = Array.prototype.slice.call(textFlex.querySelectorAll('.fade-up'))
        if (allFadeUps.length === 0) { self.pillVisible = true; return }
        var welcomeTargets = []
        var laterTargets = []
        var foundFirstH2 = false
        var foundFirstP = false
        allFadeUps.forEach(function(el) {
          if (!foundFirstH2 && el.tagName === 'H2') {
            welcomeTargets.push(el)
            foundFirstH2 = true
          } else if (foundFirstH2 && !foundFirstP && el.tagName === 'P') {
            welcomeTargets.push(el)
            foundFirstP = true
          } else {
            laterTargets.push(el)
          }
        })
        allFadeUps.forEach(function(t) {
          self.$_observer.unobserve(t)
          t.classList.remove('visible')
        })
        self.pillVisible = false
        var welcomeDone = false
        var laterDone = false
        self._welcomeScrollHandler = function() {
          var trigger = window.innerHeight * 0.5
          var imgRect = firstImage.getBoundingClientRect()
          // Welcome fades in when image bottom reaches halfway on screen
          if (!welcomeDone && imgRect.bottom <= trigger) {
            welcomeTargets.forEach(function(t, i) {
              t.style.transitionDelay = (i * 0.15) + 's'
              t.classList.add('visible')
            })
            self.pillVisible = true
            self._pillShownOnce = true
            welcomeDone = true
          }
          // Core values etc fade in when welcome text bottom reaches halfway
          if (welcomeDone && !laterDone && welcomeTargets.length > 0) {
            var lastWelcome = welcomeTargets[welcomeTargets.length - 1]
            var wRect = lastWelcome.getBoundingClientRect()
            if (wRect.bottom <= trigger) {
              laterTargets.forEach(function(t, i) {
                t.style.transitionDelay = (i * 0.15) + 's'
                t.classList.add('visible')
              })
              laterDone = true
            }
          }
          if (welcomeDone && laterDone) {
            window.removeEventListener('scroll', self._welcomeScrollHandler)
          }
        }
        window.addEventListener('scroll', self._welcomeScrollHandler, { passive: true })
      })
    },
    $_observeElements: function() {
      var self = this
      self.$nextTick(function() {
        document.querySelectorAll('.fade-up').forEach(function(el) {
          self.$_observer.observe(el)
        })
      })
    },
  },
  watch: {
    '$i18n.locale': function() {
      this.updateIndicator()
    },
    navHidden: function(val) {
      var self = this
      if (val && self.isMobile) {
        clearTimeout(self._subFadeTimer)
        self._subFadeTimer = setTimeout(function() { self.subsExposed = true }, 1000)
      } else {
        clearTimeout(self._subFadeTimer)
        self.subsExposed = false
      }
    },
    $route: function(to, from) {
      if (to.name !== from.name) {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        var appWrap = document.querySelector('.v-application--wrap')
        if (appWrap) appWrap.scrollTop = 0
        this.$nextTick(function() {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        })
      }
      var locale = this.$route.params.locale
      if (locale) {
        for (var i = 0; i < this.languages.length; i++) {
          if (this.languages[i].locale === locale) {
            this.languageSelected = this.languages[i]
            this.$i18n.locale = locale
            break
          }
        }
      }
      var self = this
      setTimeout(function() {
        self.$_observeElements()
        self.$_setupMobileWelcomeFade()
        self.updateIndicator()
      }, 100)
    }
  },
  mounted: function() {
    var self = this
    this._onResize = function() {
      self.windowWidth = window.innerWidth
      clearTimeout(self._resizeTimer)
      self._resizeTimer = setTimeout(function() { self.updateIndicator() }, 100)
    }
    window.addEventListener('resize', this._onResize)
    this._onScroll = function() {
      self.scrolledDown = window.scrollY > 20
    }
    window.addEventListener('scroll', this._onScroll, { passive: true })
    var hasRedirected = localStorage.getItem('geoRedirected')
    var currentLocale = this.$route.params.locale

    if (!hasRedirected && (!currentLocale || currentLocale === 'en')) {
      fetch('https://ipapi.co/json/')
        .then(function(res) { return res.json() })
        .then(function(data) {
          if (data.country === 'HK') {
            localStorage.setItem('geoRedirected', 'true')
            var path = self.$route.fullPath
            if (!path.match(/^\/(en|hk)/)) {
              path = '/hk' + path
            } else {
              path = path.replace(/^\/en/, '/hk')
            }
            self.$router.replace(path)
          }
        })
        .catch(function() {})
    }

    self.$_observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          self.$_observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    // Mobile: text content fades in later (element must reach top half of screen)
    self.$_mobileTextObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          self.$_mobileTextObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -50% 0px' })

    self.$_navObserver = new IntersectionObserver(function(entries) {
      if (self.introActive) return
      self.navHidden = !entries[0].isIntersecting
      if (!self.navHidden) self.menuOpen = false
    }, { threshold: 0 })
    self.$_navObserver.observe(self.$refs.navCard.$el)

    self.$root.$on('intro-done', function() {
      self.introActive = false
      var locale = self.$i18n.locale || 'en'
      for (var i = 0; i < self.languages.length; i++) {
        if (self.languages[i].locale === locale) {
          self.languageSelected = self.languages[i]
          break
        }
      }
      var rect = self.$refs.navCard.$el.getBoundingClientRect()
      self.navHidden = rect.bottom < 0
    })

    self.$_observeElements()
    self.$_setupMobileWelcomeFade()
    self.updateIndicator()

    // Effect B: parallax slow-scroll images on mobile (disabled)
    if (false && self.isMobile) {
      var ticking = false
      var fixedVh = window.innerHeight
      self._parallaxScrollHandler = function() {
        if (!ticking) {
          requestAnimationFrame(function() {
            var images = document.querySelectorAll('.parallax-slow')
            var vh = fixedVh
            var scrollY = window.scrollY
            for (var i = 0; i < images.length; i++) {
              var img = images[i]
              // Use offsetTop (unaffected by transforms) to get true position
              var parent = img.offsetParent
              var top = img.offsetTop
              while (parent && parent !== document.body) {
                top += parent.offsetTop
                parent = parent.offsetParent
              }
              var posInViewport = top - scrollY
              if (posInViewport > -100 && posInViewport < vh + 100) {
                var progress = posInViewport / vh
                var offset = (progress - 0.5) * 50
                img.style.transform = 'translateY(' + offset + 'px)'
              }
            }
            ticking = false
          })
          ticking = true
        }
      }
      window.addEventListener('scroll', self._parallaxScrollHandler, { passive: true })
    }

    var washiImg = new Image()
    washiImg.onload = function() { self.washiLoaded = true }
    washiImg.src = require('@/assets/washi.png')
    if (washiImg.complete) self.washiLoaded = true
  }
}
</script>




<style>
.v-ripple__container {
  opacity: 0 !important;
}

.v-application {
  background: transparent !important;
}

@media (max-width: 600px) {
  .v-application--wrap {
    min-height: auto !important;
  }
  .page-content {
    padding-bottom: 5rem;
  }
}


html, body {
  overscroll-behavior: none;
}

@media (pointer: fine) {
  html {
    overflow-y: scroll;
  }
  html.intro-active::-webkit-scrollbar {
    background: transparent;
  }
  html.intro-active::-webkit-scrollbar-thumb {
    background: transparent;
  }
  html.intro-active {
    scrollbar-color: transparent transparent;
  }
}


.float-lang {
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 4px;
  background: white;
  border: 0.5px solid #ddd;
  border-radius: 20px;
  padding: 4px 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  left: auto;
  width: auto;
  max-width: none;
}

.float-lang-enter {
  animation: floatLangIn 0.7s ease 0.7s both;
}

@keyframes floatLangIn {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.float-lang-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.contact-wrap {
  display: flex;
  align-items: center;
  gap: 4px;
}

.float-lang-left {
  display: none;
}

.lang-btn {
  background: none;
  border: none;
  font-size: 13px;
  color: #888;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 12px;
  font-family: inherit;
  transition: all 0.2s;
}

.lang-btn:hover { color: #333; }

.lang-btn.active {
  color: #333;
  font-weight: 500;
  background: #f0f0f0;
}

.app-content {
  position: relative;
  z-index: 2;
}

.washi-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  z-index: 0;
  background: url('~@/assets/washi.png') center top / cover no-repeat;
  pointer-events: none;
}

.washi-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
  opacity: 0;
  animation: washiGradientIn 0.8s ease 1.5s forwards;
}

@keyframes washiGradientIn {
  to { opacity: 1; }
}

.lang-divider {
  color: #ddd;
  font-size: 13px;
  padding: 0 2px;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 2px 4px;
}

.hamburger-btn span {
  display: block;
  width: 16px;
  height: 1.5px;
  background: #888;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-btn.open span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
.hamburger-btn.open span:nth-child(2) { opacity: 0; }
.hamburger-btn.open span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

.float-heading {
  position: fixed;
  top: 3.8rem;
  right: 1.5rem;
  z-index: 999;
  text-align: right;
  transform: translateZ(0);
  will-change: transform, opacity;
}

@media (max-width: 1400px) {
  .float-heading {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: none;
    box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 5px 10px;
  }

  .float-heading-name {
    font-size: 11px;
  }

  .float-heading-sub {
    font-size: 8px;
  }
}

@media (max-width: 960px) {
  .float-heading {
    display: none !important;
  }
}


.float-heading-name {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: #444;
}

.float-heading-sub {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: #888;
  margin-top: 1px;
}


.heading-slide-enter-active, .heading-slide-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.heading-slide-enter, .heading-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.float-menu {
  position: fixed;
  top: 5.5rem;
  right: 1.5rem;
  z-index: 999;
  background: rgba(255, 255, 255, 0.97);
  border: 0.5px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  will-change: transform;
  transform: translateZ(0);
  min-width: 160px;
}

a.float-menu-item,
a.float-menu-item:visited,
a.float-menu-item:active,
a.float-menu-item:focus {
  padding: 12px 24px;
  font-size: 15px;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  color: #888 !important;
  text-decoration: none !important;
  font-family: 'Montserrat', sans-serif;
  transition: color 0.2s, background 0.2s;
}

a.float-menu-item:hover {
  color: #222 !important;
  background: rgba(0,0,0,0.04);
}

a.float-menu-item.menu-active {
  text-decoration: underline !important;
  text-underline-offset: 2px;
}

.nav-bar-wrap {
  position: relative;
}

.nav-indicator {
  position: absolute;
  height: 1px;
  background: #424242;
  transition: left 0.3s ease, width 0.3s ease, top 0.3s ease;
}

.menu-slide-enter-active, .menu-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.menu-slide-enter, .menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.float-menu-mobile.menu-slide-enter-active, .float-menu-mobile.menu-slide-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.float-menu-mobile.menu-slide-enter, .float-menu-mobile.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.hamburger-wrap {
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  max-width: 0;
  overflow: hidden;
  pointer-events: none;
  transition: opacity 0.8s ease, max-width 0.8s ease;
}

.hamburger-wrap.hamburger-visible {
  opacity: 1;
  max-width: 60px;
  pointer-events: auto;
}


@media (max-width: 600px) {
  .v-application .v-card__title.justify-center.pt-12 {
    display: none !important;
  }
  .desktop-subtitle {
    display: none !important;
  }
  .nav-bar-wrap {
    display: none !important;
  }
  .float-lang {
    display: none !important;
  }

  /* Remove grey card background on mobile */
  .v-application .v-card {
    background: transparent !important;
  }

  /* Images: full width on mobile, fully visible (no crop) */
  .v-application .v-image {
    max-width: 100% !important;
    max-height: none !important;
    width: 100%;
  }
  .v-application .v-image .v-image__image {
    background-size: contain !important;
    background-position: center !important;
  }
  /* Tighter padding on mobile */
  .v-application .v-card__text .v-container {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    padding-top: 0 !important;
  }
  /* Reduce top spacing between header and content on all pages */
  .v-application .pt-4 {
    padding-top: 0px !important;
  }
  .v-application .py-5 {
    padding-top: 0 !important;
  }
  /* Remove top margin on first image so it sits right below header */
  .v-application .v-image.mt-3 {
    margin-top: 0 !important;
  }
  /* More breathing room after image, before text sections */
  .v-application .v-card__text h2.overline {
    margin-top: 4rem;
  }

  /* Effect A: fixed heading, content scrolls over it */
  .mobile-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 1.5rem 1.5rem 1rem;
  }

  .page-content {
    position: relative;
    z-index: 2;
    margin-top: 6.5rem;
    min-height: 100vh;
  }

  /* Parallax images: contain the shift */
  .parallax-slow {
    will-change: transform;
  }
  .parallax-slow-wrap {
    overflow: hidden;
  }
}

/* Mobile top section — clean, centered, Tawaraya-inspired */
.mobile-top {
  text-align: center;
  padding: 1rem 1.5rem 0;
}

.mobile-top-name {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: #333;
}

.mobile-top-degree {
  font-size: 0.65em;
  font-weight: 300;
  color: #333;
}

.mobile-top-calligraphy {
  height: 2.8rem;
  vertical-align: bottom;
}

.mobile-top-sub {
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #555;
  margin-top: 0.3rem;
}

.mobile-top-where {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: #666;
  margin-top: 0.1rem;
  margin-bottom: 0;
  text-transform: uppercase;
}

/* Mobile bottom-right pill */
.mobile-pill {
  position: fixed;
  bottom: 1.5rem;
  right: 1.2rem;
  z-index: 100000;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  border: 0.5px solid #ddd;
  border-radius: 28px;
  padding: 8px 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.mobile-pill {
  opacity: 0;
  transition: opacity 0.7s ease;
  pointer-events: none;
}

.mobile-pill.mobile-pill-visible {
  opacity: 1;
  pointer-events: auto;
}

.pill-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.2s;
  -webkit-tap-highlight-color: transparent;
}

.pill-icon svg {
  width: 20px;
  height: 20px;
}

.pill-icon:hover,
.pill-icon:active {
  color: #333;
}

.pill-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  color: #888;
  transition: color 0.2s;
  -webkit-tap-highlight-color: transparent;
}

.pill-menu-btn:hover,
.pill-menu-btn:active {
  color: #333;
}

.pill-page-title {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  color: #01579B;
  white-space: nowrap;
}

.pill-divider {
  width: 0.5px;
  height: 20px;
  background: #ddd;
}

/* Language popover from pill */
.pill-lang-pop {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  border: 0.5px solid #ddd;
  border-radius: 12px;
  padding: 6px 4px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  min-width: 80px;
}

.pill-lang-btn {
  background: none;
  border: none;
  font-size: 13px;
  color: #888;
  cursor: pointer;
  padding: 8px 14px;
  font-family: inherit;
  text-align: left;
  border-radius: 8px;
  transition: all 0.2s;
}

.pill-lang-btn:hover { background: rgba(0,0,0,0.04); color: #333; }

.pill-lang-btn.active {
  color: #333;
  font-weight: 500;
}

.pill-pop-enter-active, .pill-pop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.pill-pop-enter, .pill-pop-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* Mobile float-menu — opens from bottom-right */
.float-menu-mobile {
  top: auto !important;
  bottom: 5rem;
  right: 1.2rem;
}

.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

</style>



