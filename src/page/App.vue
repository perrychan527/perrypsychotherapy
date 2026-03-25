<template>
  <v-app>
    <v-card flat>
	
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
          class="overline text-capitalize"
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
          class="overline text-capitalize"
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
          class="overline text-capitalize"
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
          class="overline text-capitalize"
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
          class="overline text-capitalize"
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
	<contact-form></contact-form>
  
  <!-- Floating language switcher -->
<div class="float-lang fade-up" style="transition-delay: 0.7s">
  <button
    v-for="lang in languages"
    :key="lang.locale"
    @click="changeLocale(lang.locale)"
    :class="['lang-btn', { active: languageSelected.locale === lang.locale }]"
  >
    {{ lang.text }}
  </button>
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
    }
  },
  methods: {
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

    self.$_observeElements()
  }
}
</script>




<style>
.v-ripple__container {
  opacity: 0 !important;
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



