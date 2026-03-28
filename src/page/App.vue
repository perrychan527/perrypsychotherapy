<template>
  <v-app>
    <div class="washi-bg"></div>
    <div class="washi-gradient"></div>
    <div class="app-content">
    <v-card flat color="transparent" ref="navCard">
	
	  <v-card-title class="justify-center font-weight-light pt-12 fade-up" style="transition-delay: 0.1s">
        <router-link 
         style="text-decoration: none; color: inherit;" 
         :to="{ name: 'about', params: { locale: $route.params.locale || 'en' } }">
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
	  
      <v-card-subtitle class="overline text-capitalize text-center font-weight-regular fade-up" style="transition-delay: 0.2s">{{ $t('SUBHEADING') }}</v-card-subtitle>
      
      <div class="text-center fade-up" style="transition-delay: 0.3s">
        <router-link
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'default', params: { locale: $route.params.locale }}">
          <v-btn
          :class="['overline', 'text-capitalize', { 'nav-active': isTabActive('default') }]"
		  color="grey darken-4"
          plain
        >
          {{ $t('TAB1') }}
          </v-btn>
        </router-link>

        <router-link
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'therapy', params: { locale: $route.params.locale || 'en' }}">
          <v-btn
          :class="['overline', 'text-capitalize', { 'nav-active': isTabActive('therapy') }]"
          color="grey darken-4"
          plain
        >
          {{ $t('TAB2') }}
          </v-btn>
        </router-link>

        <router-link
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'sessioninfo', params: { locale: $route.params.locale || 'en' }}">
          <v-btn
          :class="['overline', 'text-capitalize', { 'nav-active': isTabActive('sessioninfo') }]"
          color="grey darken-4"
          plain
        >
          {{ $t('TAB3') }}
          </v-btn>
        </router-link>

        <router-link
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'memories', params: { locale: $route.params.locale || 'en' }}">
          <v-btn
          :class="['overline', 'text-capitalize', { 'nav-active': isTabActive('memories') }]"
          color="grey darken-4"
          plain
        >
          {{ $t('TAB4') }}
          </v-btn>
        </router-link>

        <router-link
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'socialDreamingAbout', params: { locale: $route.params.locale || 'en' }}">
          <v-btn
          :class="['overline', 'text-capitalize', { 'nav-active': isTabActive('socialDreamingAbout') }]"
          color="grey darken-4"
          plain
        >
          {{ $t('TAB5') }}
          </v-btn>
        </router-link>
		
      </div>
    </v-card>


	<intro-screen></intro-screen>
	<router-view></router-view>
    </div>

  <!-- Floating language switcher + hamburger -->
<div class="float-lang fade-up" style="transition-delay: 0.7s">
  <button
    v-for="lang in languages"
    :key="lang.locale"
    @click="changeLocale(lang.locale)"
    :class="['lang-btn', { active: languageSelected.locale === lang.locale }]"
  >
    {{ lang.text }}
  </button>
  <span class="lang-divider">|</span>
  <contact-form></contact-form>
  <div class="hamburger-wrap" :class="{ 'hamburger-visible': navHidden }">
    <span class="lang-divider">|</span>
    <button class="hamburger-btn" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
      <span></span><span></span><span></span>
    </button>
  </div>
</div>

<!-- Slide-down nav menu -->
<transition name="menu-slide">
  <div v-if="navHidden && menuOpen" class="float-menu">
    <router-link
      v-for="tab in tabs"
      :key="tab.name"
      :to="{ name: tab.name, params: { locale: $route.params.locale || 'en' } }"
      :class="['float-menu-item', { 'menu-active': isTabActive(tab.name) }]"
      @click.native="menuOpen = false"
    >
      {{ $t(tab.label) }}
    </router-link>
  </div>
</transition>

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
      introActive: true,
      tabs: [
        { name: 'default', label: 'TAB1' },
        { name: 'therapy', label: 'TAB2' },
        { name: 'sessioninfo', label: 'TAB3' },
        { name: 'memories', label: 'TAB4' },
        { name: 'socialDreamingAbout', label: 'TAB5' },
      ],
    }
  },
  methods: {
    isTabActive: function(tabName) {
      var routeName = this.$route.name
      if (tabName === 'default') {
        return routeName === 'default' || routeName === 'about'
      }
      return routeName === tabName
    },
    changeLocale: function(locale) {
      this.$i18n.locale = locale
      var routeLocale = this.$route.params.locale
      if (routeLocale != '' && routeLocale != locale) {
        var newPath = '/' + locale + this.$route.fullPath.slice(3)
        this.$router.push({ path: newPath })
      }
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
    $route: function(to, from) {
      var locale = this.$route.params.locale
      if (locale != '') {
        for (var i = 0; i < this.languages.length; i++) {
          if (this.languages[i].locale == locale) {
            this.languageSelected = this.languages[i]
            this.$i18n.locale = locale
            break
          }
        }
      }
      var self = this
      setTimeout(function() {
        self.$_observeElements()
      }, 100)
    }
  },
  mounted: function() {
    var self = this
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

    self.$_navObserver = new IntersectionObserver(function(entries) {
      if (self.introActive) return
      self.navHidden = !entries[0].isIntersecting
      if (!self.navHidden) self.menuOpen = false
    }, { threshold: 0 })
    self.$_navObserver.observe(self.$refs.navCard.$el)

    self.$root.$on('intro-done', function() {
      self.introActive = false
      var rect = self.$refs.navCard.$el.getBoundingClientRect()
      self.navHidden = rect.bottom < 0
    })

    self.$_observeElements()
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
  gap: 4px;
  background: white;
  border: 0.5px solid #ddd;
  border-radius: 20px;
  padding: 4px 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
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
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background: url('~@/assets/washi.png') center top / cover no-repeat;
  pointer-events: none;
}

.washi-gradient {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

.float-menu {
  position: fixed;
  top: 3.2rem;
  right: 1.5rem;
  z-index: 999;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 0.5px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  min-width: 160px;
}

a.float-menu-item,
a.float-menu-item:visited,
a.float-menu-item:active,
a.float-menu-item:focus {
  padding: 10px 20px;
  font-size: 12px;
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
  text-underline-offset: 4px;
}

.nav-active .v-btn__content {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.menu-slide-enter-active, .menu-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-slide-enter, .menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
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

.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

</style>



