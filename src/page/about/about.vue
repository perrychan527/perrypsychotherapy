<template>
  <div align="center" :class="['about-page', 'pt-md-8', 'pt-sm-8', 'pt-4', 'px-md-10', 'px-sm-9', 'px-4', { 'locale-hk': $i18n.locale === 'hk' }]">
   <v-card flat max-width="1100" elevation="0" style="
        background: #FFFFFF;
        background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-sm-10 px-5 py-md-10 py-sm-10 py-5">
              <h1 class="sr-only">{{ $t('H1_ABOUT') }}</h1>
              <v-layout row wrap>
                <v-flex xs12 sm4 md4 class="fade-up" style="transition-delay: 0.4s">
                  <div class="shell-img-wrap">
                    <v-img class="mx-auto mt-md-9 mt-sm-4 mt-3 mr-md-10"
                          :src="shellImage"
                          :alt="$t('ALT_ABOUT_PHOTO')"
                          max-width="300"
                          max-height="1150"
                    ></v-img>
                    <span class="shell-caption d-sm-none">{{ $t('PIC_SHELL') }}</span>
                  </div>
                </v-flex>


                <v-flex xs12 sm7 md8 class="mt-16 mt-sm-0">
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.45s">{{ $t('WELCOMETITLE') }}<span class="sr-only">{{ $t('H2_WELCOME_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.5s">{{ $t('WELCOME') }}
                  </p>
				  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.55s">{{ $t('CORETITLE') }}<span class="sr-only">{{ $t('H2_CORE_SEO') }}</span>
                  </h2>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.6s">{{ $t('CORE1') }}
                  </p>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.65s" v-html="$t('CORE2')">
                  </p>  
                </v-flex>
              </v-layout>
              
			  <v-layout row wrap>
                <v-flex xs12 sm5 md5 pt-md-12 pl-md-8 order-xs1 order-md3 class="fade-up" style="transition-delay: 0.3s">
                  <v-img class="mx-auto parallax-slow"
                        src="@/assets/mountfuji.jpg"
						:alt="$t('ALT_ABOUT_PHOTO')"
                        max-width="680"
                        max-height="800"
                  ></v-img>
                  <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('JOURNEYPIC') }}
                </p>
                </v-flex>

                <v-flex xs12 sm7 md7 order-xs2 order-md1>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-md-8 pt-sm-5 fade-up" style="transition-delay: 0.1s">{{ $t('EXPTITLE') }}<span class="sr-only">{{ $t('H2_EXP_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.15s">{{ $t('EXP') }}</p>
                    <v-layout row wrap ml-md-5 class="fade-up" style="transition-delay: 0.2s">
						<v-flex xs12 sm6 md5>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP1') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP2') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP3') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP4') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP5') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP6') }}</v-list-item-subtitle>
						</v-flex>
						<v-flex xs12 sm6 md5>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP7') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP8') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP9') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP10') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP11') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP12') }}</v-list-item-subtitle>
						</v-flex>
					</v-layout>
				  <p class="subtitle-1 pt-md-5 pt-sm-4 pt-5 fade-up" style="transition-delay: 0.25s">{{ $t('EXP_01') }}</p>
                </v-flex>
              </v-layout>
			  
              <v-layout row wrap>
                <v-flex xs12 sm4 md3 pt-md-4 class="fade-up" style="transition-delay: 0.1s">
                  <v-img class="mx-auto mt-md-2 mt-sm-4 mt-3"
                        src="@/assets/perrybio2.jpg"
						:alt="$t('ALT_ABOUT_PHOTO')"
                        max-width="300"
                        max-height="450"
                  ></v-img>
                </v-flex>

                <v-flex sm1 md1>
                </v-flex>

				<v-flex xs12 sm12 md7>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-md-5 pt-sm-5 fade-up" style="transition-delay: 0.15s">{{ $t('NAME') }}<span class="sr-only">{{ $t('H2_QUALI_SEO') }}</span>
                  </h2>
                  <p class="body-2 fade-up" style="transition-delay: 0.2s">{{ $t('QUALI1') }}
                  </p>
                  <p class="body-2 fade-up" style="transition-delay: 0.25s">{{ $t('QUALI4') }}
                  </p>
                  <p class="body-2 fade-up" style="transition-delay: 0.3s">{{ $t('QUALI6') }}
                  </p>
                  <p class="body-2 fade-up" style="transition-delay: 0.35s">{{ $t('QUALI3') }}
                  </p>

				<v-img  src="@/assets/bacp.png"
						:alt="$t('ALT_ABOUT_BACP')"
                        max-width="230"
                        max-height="100"
                        class="ml-md-1 mt-md-6 fade-up"
						style="transition-delay: 0.4s"
                ></v-img>
				</v-flex>
              </v-layout>

              <v-layout row wrap>
				<v-flex xs12 sm12 md4 pt-md-10 pt-sm-5 order-xs3 order-md3 class="fade-up" style="transition-delay: 0.25s">
					<v-img class="mx-auto"
						  src="@/assets/dark.jpg"
						  :alt="$t('ALT_ABOUT_CONDITIONS')"
						  max-width="320"
						  max-height="550"
					></v-img>
					<p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC2') }}
					</p>
                </v-flex>

				<v-flex sm1 md1 order-xs4 order-md2>
                </v-flex>

				<v-flex xs12 sm7 md7 pt-md-5 order-xs1 order-md1 class="about-journey-text">
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-7 fade-up" style="transition-delay: 0.1s">{{ $t('JOURNEYTITLE') }}<span class="sr-only">{{ $t('H2_JOURNEY_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.15s" v-html="$t('JOURNEY1')">
                  </p>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('JOURNEY2') }}
                  </p>
                </v-flex>
              </v-layout>
			  
			  
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
				<v-flex xs12 md12 class="d-flex flex-column-reverse">
				  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.15s">{{ $t('COPY1') }}</p>
				  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.2s">{{ $t('E3') }}</p>
				</v-flex>
			  </v-layout>


            </v-container> 
          </v-card-text>
        </v-card>
  </div>
</template>



<script>
import ContactForm from '@/page/ContactForm.vue'
import imgFull from '@/assets/forestshell.jpeg'
import imgCrop from '@/assets/forestshellcrop.jpeg'

export default {
  components: { ContactForm },
  data: function() {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isMobile: function() {
      return this.windowWidth <= 600
    },
    shellImage: function() {
      return this.isMobile ? imgCrop : imgFull
    }
  },
  metaInfo: function() {
    return {
      title: this.$t('META_ABOUT_TITLE'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('META_ABOUT_DESC') }
      ]
    }
  },
  mounted: function() {
    var self = this
    this._onResize = function() { self.windowWidth = window.innerWidth }
    window.addEventListener('resize', this._onResize)

    if (window.innerWidth > 600) return
    self.$nextTick(function() {
      var fadeEls = Array.prototype.slice.call(self.$el.querySelectorAll('.fade-up'))
      if (fadeEls.length === 0) return
      fadeEls.forEach(function(el) {
        if (self.$parent && self.$parent.$_observer) {
          self.$parent.$_observer.unobserve(el)
        }
        el.classList.remove('visible')
      })
      self._fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      }, {
        threshold: 0
      })
      fadeEls.forEach(function(el) {
        self._fadeObserver.observe(el)
      })
    })
  },
  beforeDestroy: function() {
    if (this._fadeObserver) {
      this._fadeObserver.disconnect()
    }
    if (this._onResize) {
      window.removeEventListener('resize', this._onResize)
    }
  }
}
</script>



<style>
ul {
  list-style-type: square;
}
.v-card__title {
  font-style: italicc;
}
.v-card__text {
  color: greenn!important;
}

.sticky {
    position: fixed;
}

@media (min-width: 600px) {
  .about-page p.subtitle-1 {
    line-height: 2 !important;
  }
  .about-page.locale-hk p.subtitle-1 {
    line-height: 2.5 !important;
  }
  .about-page:not(.locale-hk) .about-journey-text p.subtitle-1 {
    line-height: 2.3 !important;
  }
  .about-page p.body-2 {
    padding-left: 0.6em;
    text-indent: -0.6em;
  }
}

@media (max-width: 599px) {
  .about-page p.subtitle-1 {
    line-height: 2.2 !important;
  }
  .about-page h2.overline {
    margin-bottom: 16px !important;
  }
  .about-page p.body-2 {
    padding-left: 0.6em;
    text-indent: -0.6em;
  }
  .shell-img-wrap {
    position: relative;
  }
  .shell-caption {
    position: absolute;
    bottom: -2px;
    right: 8px;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.06em;
    color: rgba(255, 255, 255, 0.90);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    transform: scaleY(0.80);
  }
}
</style>