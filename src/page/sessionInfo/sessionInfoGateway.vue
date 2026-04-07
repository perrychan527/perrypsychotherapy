<template>
  <div align="center" class="pt-md-8 pt-sm-8 pt-4 px-md-10 px-sm-9 px-4">
    <h1 class="sr-only">{{ $t('H1_SESSION') }}</h1>
    <div class="gateway-hero fade-up" style="transition-delay: 0.1s">
      <img
        src="@/assets/2birds.jpg"
        :alt="$t('ALT_THERAPY_COLLEGE')"
        class="gateway-img"
      />
      <div class="gateway-overlay" :style="overlayStyle">
        <div class="gateway-col">
          <h2 class="gateway-title fade-up" style="transition-delay: 0.15s">{{ $t('SESSION_GATEWAY_TITLE') }}</h2>

          <!-- UK: expandable -->
          <div class="gateway-item fade-up" style="transition-delay: 0.2s">
            <a href="#" class="gateway-btn gateway-btn-top" :class="{ 'line-hidden': ukOpen || ukClosing }" @click.prevent="toggleUk">
              <span class="gateway-btn-title">{{ $t('SESSION_CARD_UK_TITLE') }}</span>
              <transition name="desc-fade" @after-leave="ukOpen = true">
                <span v-if="!ukClosing && !ukOpen" class="gateway-btn-desc">{{ $t('SESSION_CARD_EDINBURGH_DESC') }} / {{ $t('SESSION_CARD_UK_OTHER_DESC') }}</span>
              </transition>
            </a>
            <transition
              @before-enter="branchBeforeEnter"
              @enter="branchEnter"
              @after-enter="branchAfterEnter"
              @before-leave="branchBeforeLeave"
              @leave="branchLeave"
              @after-leave="branchAfterLeave">
              <div v-if="ukOpen" class="gateway-branch">
                <div class="branch-line"></div>
                <div class="branch-children">
                  <router-link
                    :to="{ name: 'sessionEdinburgh', params: { locale: $route.params.locale || 'en' } }"
                    class="gateway-btn gateway-btn-child">
                    <span class="gateway-btn-title">{{ $t('SESSION_CARD_EDINBURGH_TITLE') }}</span>
                    <span class="gateway-btn-desc">{{ $t('SESSION_CARD_EDINBURGH_DESC') }}</span>
                  </router-link>
                  <router-link
                    :to="{ name: 'sessionOnlineUK', params: { locale: $route.params.locale || 'en' } }"
                    class="gateway-btn gateway-btn-child">
                    <span class="gateway-btn-title">{{ $t('SESSION_CARD_UK_OTHER_TITLE') }}</span>
                    <span class="gateway-btn-desc">{{ $t('SESSION_CARD_UK_OTHER_DESC') }}</span>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>

          <!-- Hong Kong: direct link -->
          <router-link
            :to="{ name: 'sessionHongKong', params: { locale: $route.params.locale || 'en' } }"
            class="gateway-btn gateway-btn-top fade-up"
            style="transition-delay: 0.3s">
            <span class="gateway-btn-title">{{ $t('SESSION_CARD_HK_TITLE') }}</span>
            <span class="gateway-btn-desc">{{ $t('SESSION_CARD_HK_DESC') }}</span>
          </router-link>

          <!-- International: direct link -->
          <router-link
            :to="{ name: 'sessionInternational', params: { locale: $route.params.locale || 'en' } }"
            class="gateway-btn gateway-btn-top fade-up"
            style="transition-delay: 0.4s">
            <span class="gateway-btn-title">{{ $t('SESSION_CARD_INTL_TITLE') }}</span>
            <span class="gateway-btn-desc">{{ $t('SESSION_CARD_INTL_DESC') }}</span>
          </router-link>
        </div>
      </div>
      <span class="gateway-caption">{{ $t('PIC6_BIRD') }}</span>
    </div>
    <div class="pt-md-10 pt-sm-6 pt-6 pb-md-8 pb-4">
      <p class="text-center subtitle-2 font-weight-regular grey--text">{{ $t('E3') }}</p>
      <p class="text-center subtitle-2 font-weight-regular grey--text">{{ $t('COPY1') }}</p>
    </div>
  </div>
</template>


<script>
export default {
  metaInfo: function() {
    return {
      title: this.$t('META_SESSION_TITLE'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('META_SESSION_DESC') }
      ]
    }
  },
  data: function() {
    return {
      ukOpen: false,
      ukClosing: false,
      windowWidth: window.innerWidth
    }
  },
  computed: {
    overlayStyle: function() {
      if (this.windowWidth <= 600) {
        return { paddingLeft: '1rem' }
      }
      return { paddingLeft: '22%' }
    }
  },
  methods: {
    toggleUk: function() {
      if (this.ukOpen) {
        // closing: collapse branch first, subtitle reappears after
        this.ukOpen = false
        this.ukClosing = false
      } else {
        // opening: fade out subtitle first, then @after-leave triggers ukOpen = true
        this.ukClosing = true
      }
    },
    branchBeforeEnter: function(el) {
      el.style.overflow = 'hidden'
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.marginTop = '0'
    },
    branchEnter: function(el, done) {
      el.offsetHeight // force reflow
      el.style.transition = 'height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease'
      el.style.height = el.scrollHeight + 'px'
      el.style.opacity = '1'
      el.style.marginTop = '0.5rem'
      el.addEventListener('transitionend', function handler() {
        el.removeEventListener('transitionend', handler)
        done()
      })
    },
    branchAfterEnter: function(el) {
      el.style.height = ''
      el.style.overflow = ''
      el.style.transition = ''
    },
    branchBeforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
      el.offsetHeight // force reflow
    },
    branchLeave: function(el, done) {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease'
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.marginTop = '0'
      el.addEventListener('transitionend', function handler() {
        el.removeEventListener('transitionend', handler)
        done()
      })
    },
    branchAfterLeave: function(el) {
      el.style.height = ''
      el.style.overflow = ''
      el.style.transition = ''
      this.ukClosing = false
    }
  },
  mounted: function() {
    var self = this
    this._onResize = function() { self.windowWidth = window.innerWidth }
    window.addEventListener('resize', this._onResize)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this._onResize)
  }
}
</script>


<style scoped>
.gateway-hero {
  position: relative;
  max-width: 1100px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.gateway-img {
  width: 100%;
  display: block;
  object-fit: cover;
  min-height: 360px;
  max-height: 700px;
}

.gateway-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: left;
}

.gateway-col {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  text-align: left;
}

.gateway-title {
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.4rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.gateway-item {
  display: flex;
  flex-direction: column;
}

.gateway-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  padding: 0.4rem 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.gateway-btn:hover {
  opacity: 0.7;
}

.gateway-btn-title {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
}

.gateway-btn-desc {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

/* Branch animation */
.gateway-branch {
  display: flex;
  margin-top: 0.5rem;
  margin-left: 0.4rem;
}

.branch-line {
  width: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin-right: 1rem;
  flex-shrink: 0;
}

.branch-children {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.gateway-btn-top {
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  padding-left: 0.8rem;
  transition: opacity 0.3s ease, border-color 0.3s ease;
}

.gateway-btn-top.line-hidden {
  border-color: transparent;
}

.gateway-btn-child {
  padding: 0.2rem 0;
}

.gateway-btn-child .gateway-btn-title {
  font-size: 11px;
  font-weight: 300;
}

/* Desc fade transition */
.desc-fade-enter-active, .desc-fade-leave-active {
  transition: opacity 0.3s ease;
}
.desc-fade-enter, .desc-fade-leave-to {
  opacity: 0;
}


.gateway-caption {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 0.5em;
  color: rgba(255, 255, 255, 0.65);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transform: scaleY(0.95);
}

@media (max-width: 600px) {
  .gateway-hero {
    border-radius: 0;
    margin-top: 3rem;
  }
  .gateway-img {
    min-height: 360px;
  }
  .gateway-overlay {
    align-items: flex-start;
    padding-top: 15%;
  }
  .gateway-title {
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }
  .gateway-btn-title {
    font-size: 11px;
  }
  .gateway-btn-desc {
    font-size: 11px;
  }
  .gateway-btn-child .gateway-btn-title {
    font-size: 11px;
  }
  .gateway-caption {
    font-size: 10px;
    font-weight: 300;
  }
}
</style>
