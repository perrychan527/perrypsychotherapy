<template>
  <div align="center" class="therapy-page pt-md-8 pt-sm-8 pt-4 px-md-10 px-sm-9 px-4">
    <v-card flat max-width="1100" elevation="0" style="
        background: #FFFFFF;
        background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-5 py-md-10 py-5">
              <h1 class="sr-only">{{ $t('H1_THERAPY') }}</h1>
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 order-xs1 order-md4 class="fade-up therapy-mist-wrap pt-md-5" style="transition-delay: 0.35s">
                <div class="mist-img-wrap">
                  <v-img class="mx-auto parallax-slow"
                        src="@/assets/oldcollegecrop.jpg"
                        :alt="$t('ALT_THERAPY_MIST')"
                        max-width="350"
                        max-height="550"
                  ></v-img>
                  <span class="mist-caption d-sm-none">{{ $t('PIC3') }}</span>
                </div>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3 d-none d-sm-block">{{ $t('PIC3') }}
                </p>
              </v-flex>
                <v-flex sm1 md1 order-xs4 order-md3>
                </v-flex>
                <v-flex xs12 sm12 md6 order-xs3 order-md2 class="therapy-approach-text mt-16 mt-sm-0">
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.1s"><span class="handwritten-strike">{{ $t('APPTITLE1') }}</span><span class="sr-only">{{ $t('H2_APPROACH_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('APP1') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('APP2_1') }}
				  <v-tooltip bottom max-width="320" open-on-hover open-on-focus open-on-click>
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          class="term-tooltip"
                          v-bind="attrs"
                          v-on="on"
                          tabindex="0"
                        >{{ $t('APP2_2') }}</span>
					  </template>
                      <span>
                        {{ $t('JUNGINTRO') }}
                      </span>
					</v-tooltip>

					{{ $t('APP2_3') }}

				    <v-tooltip bottom max-width="320" open-on-hover open-on-focus open-on-click>
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          class="term-tooltip"
                          v-bind="attrs"
                          v-on="on"
                          tabindex="0"
                        >{{ $t('APP2_4') }}</span>
                      </template>
                      <span>
                        {{ $t('DELEUZEINTRO') }}
                      </span>
                    </v-tooltip>

					{{ $t('APP2_5') }}

                  </p>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.3s">{{ $t('APP2_6') }}
                  </p>
                </v-flex>
              </v-layout>
              
              <!-- How it works: mobile layout (image between paragraphs) -->
              <template v-if="isMobile">
                <v-layout row wrap>
                  <v-flex xs12>
                    <h2 class="overline text-capitalize light-blue--text text--darken-4 mb-4 fade-up" style="transition-delay: 0.2s">{{ $t('APPTITLE2') }}<span class="sr-only">{{ $t('H2_HOWWORKS_SEO') }}</span>
                    </h2>
                    <p class="subtitle-1 mb-6 fade-up howworks-para" style="transition-delay: 0.25s">{{ $t('APP3') }}</p>
                  </v-flex>
                  <v-flex xs12 class="fade-up" style="transition-delay: 0.1s">
                    <v-img class="mx-auto"
                          src="@/assets/dogu.jpeg"
                          :alt="$t('ALT_THERAPY_COLLEGE')"
                          max-width="370"
                          max-height="550"
                    ></v-img>
                    <p class="pt-3 subtitle-3">{{ $t('PIC4') }}</p>
                  </v-flex>
                  <v-flex xs12>
                    <p class="subtitle-1 mb-6 fade-up howworks-para" style="transition-delay: 0.3s">{{ $t('APP4') }}</p>
                  </v-flex>
                </v-layout>
              </template>

              <!-- How it works: desktop layout (image left, text right) -->
              <v-layout v-else row wrap align-center>
                <v-flex sm1 md1>
                </v-flex>
				<v-flex xs12 sm12 md4 pt-md-16 pt-sm-5 class="fade-up" style="transition-delay: 0.1s">
                <v-img class="mx-auto"
                      src="@/assets/dogu.jpeg"
                      :alt="$t('ALT_THERAPY_COLLEGE')"
                      max-width="370"
                      max-height="550"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC4') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 mb-4 fade-up" style="transition-delay: 0.2s">{{ $t('APPTITLE2') }}<span class="sr-only">{{ $t('H2_HOWWORKS_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 mb-6 fade-up howworks-para" style="transition-delay: 0.25s">{{ $t('APP3') }}</p>
                  <p class="subtitle-1 mb-6 fade-up howworks-para" style="transition-delay: 0.3s">{{ $t('APP4') }}
                  </p>
                </v-flex>
              </v-layout>
			  
			  
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-sm-8 pt-7 order-xs2 order-md3 class="fade-up" style="transition-delay: 0.5s">
                <v-img
                      src="@/assets/clock.jpg"
                      :alt="$t('ALT_THERAPY_CITY1')"
                      max-width="370"
                      max-height="650"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC5') }}
                </p>
              </v-flex>

                <v-flex sm1 md1 order-xs3 order-md2>
                </v-flex>

                <v-flex xs12 sm12 md6 pt-md-10 pt-sm-5 order-xs1 order-md1>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-5 notknowing-title fade-up" style="transition-delay: 0.1s">{{ $t('APPTITLE3') }}<span class="sr-only">{{ $t('H2_NOTKNOWING_SEO') }}</span>
                  </h2>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-1 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.2s">{{ $t('APP5_1') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-4 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.225s">{{ $t('APP5_2') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-7 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.3s">{{ $t('APP5_3') }}</v-list-item-subtitle>
				  <p></p>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-12 pr-md-8 pr-sm-8 pr-8 pt-2 text-wrap fade-up" style="transition-delay: 0.325s">{{ $t('APP5_4') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-14 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.35s">{{ $t('APP5_5') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-16 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.375s">{{ $t('APP5_6') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="text-right subtitle-1 pb-md-3 pb-3 pb-sm-3 pt-md-2 pt-2 pt-sm-2 text-wrap fade-up" style="transition-delay: 0.4s">{{ $t('APP6') }}</v-list-item-subtitle>
                  <p class="subtitle-1 fade-up notknowing-para" style="transition-delay: 0.425s">{{ $t('APP7') }}</p>
                </v-flex>

              </v-layout>

              <v-layout row wrap>
				
				<v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7 pl-sm-8 order-xs2 order-md1 class="fade-up" style="transition-delay: 0.1s">
                <v-img
                      src="@/assets/fisterra.jpeg"
					  :alt="$t('ALT_THERAPY_PROCESS')"
                      max-width="470"
                      max-height="750"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC6') }}
                </p>
              </v-flex>
                
                <v-flex sm1 md1 order-xs3 order-md2>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-8 pt-sm-5 order-xs1 order-md3>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-5 poem-title fade-up" style="transition-delay: 0.2s">{{ $t('APPTITLE4') }}<span class="sr-only">{{ $t('H2_POEM_SEO') }}</span>
                  </h2>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-1 pb-md-2 pb-sm-2 pb-2 text-wrap fade-up" style="transition-delay: 0.225s">{{ $t('APP9') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-5 pt-2 text-wrap fade-up" style="transition-delay: 0.25s">{{ $t('APP10') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-5 text-wrap fade-up" style="transition-delay: 0.275s">{{ $t('APP11') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-5 text-wrap fade-up" style="transition-delay: 0.3s">{{ $t('APP12') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-5 text-wrap fade-up" style="transition-delay: 0.325s">{{ $t('APP13') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-5 pb-md-2 pb-sm-2 pb-2 text-wrap fade-up" style="transition-delay: 0.35s">{{ $t('APP14') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-16 pl-sm-8 pl-9 pt-2 text-wrap fade-up" style="transition-delay: 0.375s">{{ $t('APP15') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-16 pl-sm-8 pl-11 text-wrap fade-up" style="transition-delay: 0.4s">{{ $t('APP16') }}</v-list-item-subtitle>
                  <p></p>
				  <p class="subtitle-1 fade-up poem-para" style="transition-delay: 0.45s">{{ $t('APP17') }}</p>
				</v-flex>

              </v-layout>
			  
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7 order-xs3 order-md4 class="fade-up" style="transition-delay: 0.3s">
                <v-img
                      src="@/assets/sandplay.jpeg"
                      :alt="$t('ALT_THERAPY_CITY2')"
                      max-width="270"
                      max-height="350"
                ></v-img>
              </v-flex>
                <v-flex sm0 xs0 md1 order-xs4 order-md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-2 pt-sm-5 order-xs1 order-md2>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-5 sandplay-title fade-up" style="transition-delay: 0.1s">{{ $t('APPTITLE5') }}<span class="sr-only">{{ $t('H2_SANDPLAY_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up sandplay-para" style="transition-delay: 0.2s">{{ $t('APP18') }}</p>
                  <p class="subtitle-1 fade-up sandplay-para" style="transition-delay: 0.25s">{{ $t('APP19') }}</p>
                </v-flex>
                <v-flex sm1 md1 order-xs2 order-md3>
                </v-flex>
              </v-layout>
			  
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.15s">{{ $t('COPY1') }}</p>
                  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.2s">{{ $t('E2') }}</p>
                </v-flex>
              </v-layout>
			  
            </v-container>
          </v-card-text>
        </v-card>
  </div>
</template>

<script>

export default {
  metaInfo: function() {
    return {
      title: this.$t('META_THERAPY_TITLE'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('META_THERAPY_DESC') }
      ]
    }
  },
  data: function() {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isMobile: function() {
      return this.windowWidth <= 600
    },
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

<style scoped>
.handwritten-strike {
  position: relative;
  display: inline-block;
  padding: 0 4px;
}

.handwritten-strike::before,
.handwritten-strike::after {
  content: "";
  position: absolute;
  pointer-events: none;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* primary rough strike group: multiple uneven straight-ish strokes */
.handwritten-strike::before {
  left: -5%;
  right: -5%;
  top: 50%;
  height: 20px;
  transform: translateY(-50%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M2 17 C15 16 35 14 65 11 C95 8 150 6 198 3' stroke='%23222' stroke-opacity='0.7' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3Cpath d='M5 18 C30 17 70 14 110 12 C150 10 180 8 196 5' stroke='%23222' stroke-opacity='0.3' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}

.handwritten-strike::after {
  left: -5%;
  right: -5%;
  top: 50%;
  height: 20px;
  transform: translateY(-20%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M4 16 C50 15 100 13 150 11 C175 10 190 9 197 7' stroke='%23222' stroke-opacity='0.15' stroke-width='1.0' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}


.term-tooltip {
  text-decoration: underline dotted;
  text-underline-offset: 3px;
  cursor: help;
  font-weight: 500;
}

.mist-img-wrap {
  position: relative;
}

@media (min-width: 601px) {
  .howworks-para {
    line-height: 2.3;
  }
  .therapy-approach-text p.subtitle-1 {
    line-height: 2.2;
  }
  .notknowing-para {
    line-height: 2.4;
  }
  .notknowing-title {
    margin-bottom: 25px;
  }
  .poem-title {
    margin-bottom: 25px;
  }
  .poem-para {
    line-height: 2.4;
  }
  .sandplay-title {
    margin-bottom: 25px;
  }
  .sandplay-para {
    line-height: 2.4;
  }
}

@media (max-width: 599px) {
  .therapy-mist-wrap {
    padding-top: 55px;
  }
  .therapy-approach-text {
    margin-top: 150px !important;
  }
  .mist-caption {
    position: absolute;
    bottom: -2px;
    right: 8px;
    font-family: 'Roboto', sans-serif;
    font-size: 8px;
    font-weight: 300;
    letter-spacing: 0.07em;
    color: rgba(255, 255, 255, 0.65);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	transform: scaleY(0.80);
  }
}
</style>

<style>
@media (max-width: 599px) {
  .therapy-page p.subtitle-1 {
    line-height: 2.2 !important;
  }
  .therapy-page h2.overline {
    margin-bottom: 16px !important;
  }
}
</style>