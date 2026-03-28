<template>
  <div v-if="visible" class="intro-overlay" :class="{ 'fade-out': fadingOut, 'washi-visible': washiVisible }">
    <div class="img-container">
      <div class="img-slot">
        <img v-if="show3" src="@/assets/calligraphy3.png" alt="" class="intro-img" />
      </div>
      <div class="img-slot">
        <img v-if="show2" src="@/assets/calligraphy2.png" alt="" class="intro-img" />
      </div>
      <div class="img-slot">
        <img v-if="show1" src="@/assets/calligraphy1.png" alt="" class="intro-img" />
      </div>
      <p v-if="show3" class="intro-text line-1">Soul to soul, dream to dream</p>
      <p v-if="show3" class="intro-text line-2">A space to speak, to dream, to feel, and to transmute</p>
      <div v-if="show3" class="enter-btn-wrap">
        <button class="enter-btn" @click="goTo('en')">Enter</button>
        <span class="enter-divider">|</span>
        <button class="enter-btn" @click="goTo('hk')">進入</button>
      </div>
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
      washiVisible: false,
    }
  },
  mounted: function() {
    document.body.style.overflow = 'hidden'
    document.documentElement.classList.add('intro-active')
    document.addEventListener('touchmove', this.preventScroll, { passive: false })

    var self = this
    var started = false

    var washiFadeDuration = 1500

    function startAnimations() {
      if (started) return
      started = true
      self.washiVisible = true
      setTimeout(function() { self.show1 = true }, washiFadeDuration + 300)
      setTimeout(function() { self.show2 = true }, washiFadeDuration + 1000)
      setTimeout(function() { self.show3 = true }, washiFadeDuration + 1700)
    }

    var img = new Image()
    img.onload = startAnimations
    img.onerror = startAnimations
    img.src = require('@/assets/washi.png')
    if (img.complete) startAnimations()
  },
  beforeDestroy: function() {
    document.removeEventListener('touchmove', this.preventScroll)
  },
  methods: {
    preventScroll: function(e) { e.preventDefault() },
    goTo: function(locale) {
      var self = this
      self.fadingOut = true
      self.$i18n.locale = locale

      var fadeComplete = false
      var navComplete = false

      function tryHide() {
        if (fadeComplete && navComplete) {
          self.visible = false
          document.body.style.overflow = ''
          document.documentElement.classList.remove('intro-active')
          document.removeEventListener('touchmove', self.preventScroll)
          var viewport = document.querySelector('meta[name=viewport]')
          if (viewport) viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
          self.$root.$emit('intro-done')
        }
      }

      setTimeout(function() { fadeComplete = true; tryHide() }, 1200)

      self.$router.push({ name: 'about', params: { locale: locale } })
        .then(function() { navComplete = true; tryHide() })
        .catch(function() { navComplete = true; tryHide() })
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
  transition: opacity 1.2s ease;
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

.enter-btn-wrap {
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translateX(-10%);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  opacity: 0;
  animation: textFade 1.2s ease forwards;
  animation-delay: 2.1s;
}

.enter-btn {
  background: none;
  border: none;
  font-family: Georgia, serif;
  font-size: 13px;
  letter-spacing: 0.14em;
  color: #888;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.enter-btn:hover { color: #222; }

.enter-divider {
  color: #ccc;
  font-size: 13px;
}

@keyframes textFade {
  from { opacity: 0; transform: translateX(-10%) translateY(6px); }
  to { opacity: 1; transform: translateX(-10%) translateY(0); }
}

@keyframes textFadeMobile {
  from { opacity: 0; transform: translateX(-50%) translateY(6px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
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
    text-align: center;
    left: 50%;
    width: 80vw;
    animation-name: textFadeMobile;
  }

  .enter-btn-wrap {
    left: 50%;
    animation-name: textFadeMobile;
  }
}
</style>