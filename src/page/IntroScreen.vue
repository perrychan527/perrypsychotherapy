<template>
  <div v-if="visible" class="intro-overlay" :class="{ 'fade-out': fadingOut, 'washi-visible': washiVisible }">
    <div class="intro-title" :class="{ 'intro-visible': showTitle }">
      <span class="intro-title-name">
        <img
          v-if="$i18n.locale === 'hk'"
          src="@/assets/calligraphy_name.png"
          alt="陳渭東"
          class="intro-title-calligraphy"
        />
        <template v-else>{{ $t('HEADING_NAME') }}</template>
        <span class="intro-title-degree">{{ $t('HEADING_TITLE') }}</span>
      </span>
      <span class="intro-title-sub">{{ $t('INTRO_SUB1') }}</span>
      <span class="intro-title-sub">{{ $t('INTRO_SUB2') }}</span>
      <span class="intro-title-sub">{{ $t('INTRO_SUB3') }}</span>
    </div>
    <div class="img-container">
      <div class="img-slot">
        <img v-if="show3" src="@/assets/calligraphy3.png" :alt="$t('ALT_INTRO_1')" class="intro-img" />
      </div>
      <div class="img-slot">
        <img v-if="show2" src="@/assets/calligraphy2.png" :alt="$t('ALT_INTRO_2')" class="intro-img" />
      </div>
      <div class="img-slot">
        <img v-if="show1" src="@/assets/calligraphy1.png" :alt="$t('ALT_INTRO_3')" class="intro-img" />
      </div>
      <p v-if="show3" class="intro-text line-1">{{ $t('INTRO_LINE1') }}</p>
      <p v-if="show3" class="intro-text line-2">{{ $t('INTRO_LINE2') }}</p>
    </div>
    <div v-if="show2" class="scroll-hint">
      <div class="intro-lang">
        <button :class="['intro-lang-btn', { active: $i18n.locale === 'en' }]" @click="setLocale('en')">Eng</button>
        <span class="intro-lang-divider">|</span>
        <button :class="['intro-lang-btn', { active: $i18n.locale === 'hk' }]" @click="setLocale('hk')">繁中</button>
      </div>
      <span class="scroll-hint-text">{{ $t('INTRO_SCROLL') }}</span>
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
        <path d="M1 1L10 10L19 1" stroke="#888" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroScreen',
  data: function() {
    return {
      visible: true,
      fadingOut: false,
      show1: false,
      show2: false,
      show3: false,
      showTitle: false,
      washiVisible: false,
    }
  },
  mounted: function() {
    document.body.style.overflow = 'hidden'
    document.documentElement.classList.add('intro-active')

    var self = this
    var started = false
    var dismissing = false

    var washiFadeDuration = 1000

    function startAnimations() {
      if (started) return
      started = true
      self.washiVisible = true
      setTimeout(function() { self.show1 = true; self.showTitle = true }, 500)
      setTimeout(function() { self.show2 = true }, 1200)
      setTimeout(function() { self.show3 = true }, 1900)
    }

    function removeListeners() {
      window.removeEventListener('wheel', self._onWheel)
      document.removeEventListener('touchstart', self._onTouchStart)
      document.removeEventListener('touchmove', self._onTouchMove)
      document.removeEventListener('keydown', self._onKeyDown)
    }

    self._lockScroll = function() { window.scrollTo(0, 0) }

    function preventScroll(e) { e.preventDefault() }

    function dismiss() {
      if (dismissing) return
      dismissing = true
      removeListeners()

      // Block all scrolling during fade
      window.addEventListener('wheel', preventScroll, { passive: false })
      document.addEventListener('touchmove', preventScroll, { passive: false })
      window.scrollTo(0, 0)
      var scrollLock = setInterval(self._lockScroll, 16)

      var locale = self.$i18n.locale || 'en'

      requestAnimationFrame(function() {
        self.fadingOut = true
      })

      setTimeout(function() {
        clearInterval(scrollLock)
        window.removeEventListener('wheel', preventScroll)
        document.removeEventListener('touchmove', preventScroll)
        window.scrollTo(0, 0)
        self.visible = false
        document.body.style.overflow = ''
        document.documentElement.classList.remove('intro-active')
        var viewport = document.querySelector('meta[name=viewport]')
        if (viewport) viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
        self.$root.$emit('intro-done')
      }, 1200)

      if (self.$route.name === 'default') {
        self.$router.push({ name: 'about', params: { locale: locale } }).catch(function() {})
      }
    }

    var scrollTotal = 0
    var scrollThreshold = 1500

    self._onWheel = function(e) {
      e.preventDefault()
      window.scrollTo(0, 0)
      if (e.deltaY > 0) scrollTotal += e.deltaY
      if (scrollTotal >= scrollThreshold) dismiss()
    }
    self._onTouchStart = function(e) {
      self._touchStartY = e.touches[0].clientY
    }
    self._onTouchMove = function(e) {
      e.preventDefault()
      var dy = self._touchStartY - e.touches[0].clientY
      if (dy > 120) dismiss()
    }
    self._onKeyDown = function(e) {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        dismiss()
      }
    }

    window.addEventListener('wheel', self._onWheel, { passive: false })
    document.addEventListener('touchstart', self._onTouchStart, { passive: true })
    document.addEventListener('touchmove', self._onTouchMove, { passive: false })
    document.addEventListener('keydown', self._onKeyDown)

    var img = new Image()
    img.onload = startAnimations
    img.onerror = startAnimations
    img.src = require('@/assets/washi.png')
    if (img.complete) startAnimations()
  },
  beforeDestroy: function() {
    window.removeEventListener('wheel', this._onWheel)
    document.removeEventListener('touchstart', this._onTouchStart)
    document.removeEventListener('touchmove', this._onTouchMove)
    document.removeEventListener('keydown', this._onKeyDown)
  },
  methods: {
    setLocale: function(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: #f0ebe4;
  background-image: url('@/assets/washi.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  opacity: 1;
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.intro-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f0ebe4;
  transition: opacity 1.5s ease;
  z-index: -1;
}

.intro-overlay.washi-visible::before {
  opacity: 0;
}

.intro-overlay.fade-out {
  opacity: 0;
  transform: translateY(-100px);
}

.img-container {
  position: relative;
  width: 98vw;
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-slot {
  flex: 0 0 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  animation: imgFade 1.8s ease forwards;
}

@keyframes imgFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.intro-text {
  position: absolute;
  left: 50%;
  transform: translateX(-10%);
  font-family: Georgia, serif;
  font-style: italic;
  letter-spacing: 0.1em;
  color: #555;
  opacity: 0;
  white-space: nowrap;
  margin: 0;
}

.line-1 {
  top: 72%;
  font-size: clamp(11px, 1.2vw, 15px);
  animation: textFade 1.2s ease forwards;
  animation-delay: 0.7s;
}

.line-2 {
  top: 76%;
  font-size: clamp(10px, 1vw, 13px);
  animation: textFade 1.2s ease forwards;
  animation-delay: 1.4s;
}

.scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  opacity: 0;
  animation: scrollHintFade 1.2s ease forwards;
  animation-delay: 0.4s;
}

.intro-title {
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 1.2s ease;
}

.intro-title.intro-visible {
  opacity: 1;
}

.intro-title-name {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: clamp(22px, 2.4vw, 32px);
  font-weight: 300;
  letter-spacing: 0.04em;
  color: #444;
}

.intro-title-degree {
  font-size: 0.75em;
  font-weight: 300;
  color: #333;
}

.intro-title-calligraphy {
  height: 3.5rem;
  vertical-align: bottom;
  margin-left: -3px;
}

.intro-title-sub {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: clamp(11px, 1vw, 15px);
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: none;
  color: #555;
  margin-top: 2px;
}

.intro-lang {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
}

.intro-lang-btn {
  background: none;
  border: none;
  font-family: Georgia, serif;
  font-size: clamp(10px, 1vw, 13px);
  letter-spacing: 0.14em;
  color: #888;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.intro-lang-btn:hover { color: #444; }

.intro-lang-btn.active {
  color: #444;
  font-weight: 600;
}

.intro-lang-divider {
  color: #ccc;
  font-size: 13px;
}

.scroll-hint-text {
  display: block;
  font-family: Georgia, serif;
  font-size: clamp(10px, 1vw, 13px);
  letter-spacing: 0.14em;
  color: #888;
  margin-bottom: 6px;
}

.scroll-hint svg {
  animation: bounceDown 1.8s ease-in-out infinite;
}

@keyframes scrollHintFade {
  from { opacity: 0; transform: translateX(-50%) translateY(6px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes bounceDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

@keyframes textFade {
  from { opacity: 0; transform: translateX(-10%) translateY(6px); }
  to { opacity: 1; transform: translateX(-10%) translateY(0); }
}

@keyframes textFadeMobile {
  from { opacity: 0; transform: translateX(-50%) translateY(6px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes textFadeMobileRight {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .img-container {
    width: 100vw;
  }

  .img-slot {
    flex: 1 1 0;
  }

  .intro-text {
    white-space: normal;
    text-align: right;
    left: auto;
    right: 8vw;
    width: auto;
    max-width: 55vw;
    transform: none;
    animation-name: textFadeMobileRight;
  }

  .line-1 {
    top: 68%;
  }

  .line-2 {
    top: 71%;
  }

  .intro-title {
    top: 1.2rem;
    left: 1.2rem;
  }

  .intro-title-calligraphy {
    height: 2.4rem;
  }

  .scroll-hint {
    bottom: 1.5rem;
  }
}
</style>
