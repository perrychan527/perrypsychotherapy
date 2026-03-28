<template>
  <div>
    <!-- Floating button -->
    <button class="float-btn" @click="open = !open" :aria-label="$t('getInTouch')">
      <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>

    <!-- Sliding form panel -->
    <transition name="slide">
      <div class="float-form" v-if="open">
        <p class="float-title">{{ $t('getInTouch') }}</p>

        <p v-if="submitted" class="form-success">{{ $t('formSuccess') }}</p>
        <p v-if="error" class="form-error">{{ $t('formError') }}</p>

        <form v-if="!submitted" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input v-model="form.name" type="text" :placeholder="$t('formName')" required />
          </div>
          <div class="form-group">
            <input v-model="form.email" type="email" :placeholder="$t('formEmail')" required />
          </div>
          <div class="form-group">
            <textarea v-model="form.message" :placeholder="$t('formMessage')" required></textarea>
          </div>
          <button type="submit" class="send-btn" :disabled="sending">
            {{ sending ? '...' : $t('formSend') }}
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      open: false,
      form: { name: '', email: '', message: '' },
      sending: false,
      submitted: false,
      error: false,
    }
  },
  methods: {
    async handleSubmit() {
      this.sending = true
      this.error = false
      try {
        const res = await fetch('https://formspree.io/f/mgonbyey', {  // ← replace with your Formspree URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(this.form),
        })
        if (res.ok) {
          this.submitted = true
        } else {
          this.error = true
        }
      } catch {
        this.error = true
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<style scoped>
.float-btn {
  background: none;
  color: #888;
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  display: flex;
  align-items: center;
}

.float-btn:hover { color: #333; }

.float-form {
  position: fixed;
  top: 3.2rem;
  right: 1.5rem;
  z-index: 999;
  width: 280px;
  background: white;
  border: 0.5px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.float-title {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 1.2rem;
}

.form-group { margin-bottom: 1rem; }
.form-group input,
.form-group textarea {
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  padding: 6px 0;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group textarea:focus { border-bottom-color: #333; }
.form-group textarea { resize: none; min-height: 70px; }

.send-btn {
  background: none;
  border: none;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: #666;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-family: inherit;
  margin-top: 0.5rem;
}
.send-btn:hover { color: #111; }
.send-btn:disabled { opacity: 0.4; cursor: default; }

.form-success { color: #555; font-size: 13px; }
.form-error { color: #a33; font-size: 13px; }

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>