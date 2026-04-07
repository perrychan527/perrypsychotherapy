<template>
  <div align="center" class="pt-md-8 pt-sm-8 pt-4 px-md-10 px-sm-9 px-4">
    <v-card flat max-width="1100" elevation="0" style="
        background: #FFFFFF;
        background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-5 py-md-10 py-5">
              <h1 class="sr-only">{{ $t('H1_MEMORIES') }}</h1>
              <v-layout row wrap>
                <v-flex xs12 sm12 md4 pt-md-4 order-xs1 order-md3 class="fade-up" style="transition-delay: 0.2s">
                <v-img class="mx-auto parallax-slow"
                      src="@/assets/fishexplore.jpg"
                      :alt="$t('ALT_MEMORIES_EXPLORE')"
                      max-width="300"
                      max-height="800"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC10') }}
                </p>
              </v-flex>
                <v-flex sm1 md1 order-xs3 order-md2>
                </v-flex>
                <v-flex xs12 sm12 md6 order-xs2 order-md1>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.1s">{{ $t('METITLE1') }}<span class="sr-only">{{ $t('H2_LOST_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.15s">{{ $t('ME1') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('ME2') }}
                  </p>
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('ME3') }}
                  </p>
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.3s">"{{ $t('ME4') }}
                  </p>
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.35s">{{ $t('ME5') }}
                  </p>
                </v-flex>
              <v-flex sm1 md1 order-xs4 order-md4>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-7 pt-sm-5 class="fade-up" style="transition-delay: 0.1s">
                <v-img class="mx-auto"
                      src="@/assets/perryfish.jpg"
                      :alt="$t('ALT_MEMORIES_PERRY')"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC11') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.15s">{{ $t('METITLE2') }}<span class="sr-only">{{ $t('H2_ENCOUNTER_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('ME6') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('ME7') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.3s">{{ $t('ME8') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.35s">{{ $t('ME9') }}</p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7 order-xs1 order-md3 class="fade-up" style="transition-delay: 0.2s">
                <v-img
                      src="@/assets/fishdiscover.jpg"
                      :alt="$t('ALT_MEMORIES_DISCOVER')"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC12') }}
                </p>
              </v-flex>
                <v-flex sm1 md1 order-xs3 order-md2>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-3 pt-sm-5 order-xs2 order-md1>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.1s">{{ $t('METITLE3') }}<span class="sr-only">{{ $t('H2_KOANS_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.15s">{{ $t('ME10') }}</p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('ME11') }}</p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('ME12') }}</p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.3s">{{ $t('ME13') }}</p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.35s">{{ $t('ME14') }}</p>
                  <p class="subtitle-1"></p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-7 pt-sm-5 class="fade-up" style="transition-delay: 0.1s">
                <v-img class="mx-auto"
                      src="@/assets/mindfulness.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC13') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.15s">{{ $t('METITLE4') }}<span class="sr-only">{{ $t('H2_WAYS_SEO') }}</span>
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('ME15') }}
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse fade-up" style="transition-delay: 0.1s">
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY4') }}</p>
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('E4') }}</p>
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
      title: this.$t('META_MEMORIES_TITLE'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('META_MEMORIES_DESC') }
      ]
    }
  },
  mounted: function() {
    if (window.innerWidth > 600) return
    var self = this
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
  }
}
</script>