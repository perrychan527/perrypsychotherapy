<template>
  <v-app>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">
          Perry W. T. Chan
        </h1>
        <p1>Psychotherapist & Counsellor (How can I put this below my name?)</p1>
        
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card
            color="basil"
            flat
          >
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    
    <p1>The coding of this website is still in progress. I am a therapist, not a web developer. Please give me some time :D</p1>
    
    <p2>You can call me Perry. I am a qualified psychotherapist and counsellor based in Edinburgh, Scotland (*At this moment, I only work online with clients based in the UK and Hong Kong). We can talk in either English, Cantonese or Mandarin. My approach is psychodynamic and person-centred. In fact, I don’t like to categorise. So more accurately speaking, my approach is relational. It is two people sitting together trying to discover who we really are, what is perpepuating our dysfunctional thoughts or behaviours, and what is hindering us from self-actualisation and feeling fulfilled. Psychotherapy, in my opinion, is not about fixing something. It’s all about developing our self-awareness, the capacity to reflect on ourselves and to make better decisions in life, without repeating our unhealthy patterns.

        We together try to make sense of something painful and unbearable, create meanings out of it, and thus experience psychic transformation. Hmmm.....it might sound vague. To give you an analogy, imagine both of us trying to map a dark foggy city together with a compass and find the way out. Though it might be scary, it is a transformative journey. In our work, this is a safe space for us to let this exquisite alchemical reaction happen. It is simple......but deep…...very deep......

        This is a poem I wrote at the beginning of my training. It basically sums up what is possibly going on in our relational space.

        𝘛𝘸𝘰 𝘵𝘪𝘯𝘺 𝘦𝘨𝘨𝘴 𝘪𝘯 𝘵𝘩𝘦 𝘣𝘪𝘳𝘥’𝘴 𝘯𝘦𝘴𝘵 
        𝘋𝘳𝘦𝘢𝘮 𝘵𝘩𝘦 𝘶𝘯𝘥𝘳𝘦𝘢𝘮𝘢𝘣𝘭𝘦 
        𝘚𝘱𝘦𝘢𝘬 𝘵𝘩𝘦 𝘶𝘯𝘴𝘱𝘦𝘢𝘬𝘢𝘣𝘭𝘦 
        𝘍𝘦𝘦𝘭 𝘵𝘩𝘦 “𝘶𝘯𝘧𝘦𝘦𝘭𝘢𝘣𝘭𝘦” 
        𝘍𝘰𝘳𝘮𝘶𝘭𝘢𝘵𝘦 𝘵𝘩𝘦 𝘶𝘯𝘧𝘰𝘳𝘮𝘶𝘭𝘢𝘵𝘦𝘥
        𝘌𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘵𝘩𝘦 𝘶𝘯𝘥𝘦𝘳𝘴𝘵𝘢𝘯𝘥𝘢𝘣𝘭𝘦 

        My usual fee is £50 per session (50 mins), but it is negotiable depending on your financial circumstances. I offer a free first meeting where we can explore different possibilities. 

        At the moment, I am also working on my doctoral research at the University of Edinburgh. My study is to explore and discover, in a social dreaming matrix, unconscious complex ideas which remained hidden as a result of traumatic retention in the context of Hong Kong’s collective trauma. How has this ongoing collective trauma been shaping our (I'm from HK btw) sense of identity, psyche, social and cultural complex, and so on?
     </p2>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Home', 'About', 'Our Work', 'Fee', 'Resources', 'Contact',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
<style>
  /* Helper classes */
  .basil {
    background-color: #FFFBE6 !important;
  }
  .basil--text {
    color: #356859 !important;
  }
</style>