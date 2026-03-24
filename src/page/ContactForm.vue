<template>
  <div>
    <!-- Floating button -->
    <button class="float-btn" @click="open = !open" :aria-label="$t('getInTouch')">
      <span v-if="!open">✉</span>
      <span v-else>✕</span>
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
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #546e7a;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  opacity: 0;
  transform: translateY(10px);
  animation: btnEntrance 0.8s ease 0.9s forwards;
}

.float-btn:hover { background: #37474f; }

@keyframes btnEntrance {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.float-form {
  position: fixed;
  bottom: 5.5rem;
  right: 2rem;
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