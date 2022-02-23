<template>
 <v-app>
  <v-card>
    <v-card>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="8" sm="9" md="10">
          </v-col>
          <v-col cols="4" sm="3" md="2">
            <v-select
              v-model="e1"
              :items="languages"
              menu-props="auto"
              label="Language"
              hide-details
              prepend-icon="mdi-earth"
              single-line
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <v-card-title class="justify-center font-weight-light display-1 pt-0"> Perry W.T. Chan</v-card-title>
      <v-card-subtitle class="overline text-capitalize text-center font-weight-regular">Psychotherapist & Counsellor</v-card-subtitle>
    </v-card>
    
    <v-tabs 
    centered
    center-active
    >
      <v-tab class="overline text-capitalize fixed">
        hi
      </v-tab>
      <v-tab class="overline text-capitalize">
        Approach
      </v-tab>
      <v-tab class="overline text-capitalize">
        practicalities
      </v-tab>
      <v-tab class="overline text-capitalize">
        bio
      </v-tab>
      <v-tab-item align="center" class="px-10 py-3">
        <v-card flat max-width="1100" elevation="0" style="
        background: #FFFFFF;
        background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-sm-10 px-5 py-md-10 py-sm-10 py-5"> 
              <v-layout row wrap>
                <v-flex xs12 sm4 md3 pt-md-4>
                  <v-img class="mx-auto"
                        src="@/assets/perrybio2.jpg"
                        max-width="240"
                        max-height="450"
                  ></v-img>
                  <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">When I was working in Malaysia
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm7 md8>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Welcome
                  </p>
                  <p class="subtitle-1">Hi, you can call me Perry. I'm based in Edinburgh, Scotland. I provide counselling & psychotherapy in English, Cantonese or Mandarin mainly for clients based in the UK and HK. I'm also a counselling tutor and a researcher (writing up my doctoral thesis at this moment) at the University of Edinburgh.
                  </p>
                  <p class="overline text-capitalize light-blue--text text--darken-4">my core value
                  </p>
                  <p class="subtitle-1">As I find labels such as xx disorder or xx syndrome pathologising and over-powering, I see each person as an individual with unique stories, experiences, personalities, behavioural patterns, complexes, psyches, souls......which are all meaningful, whether or not they're making sense at this moment. I'm committed to creating this safe space for us to explore together on a deeper level. 
                  </p>
                  
                </v-flex>
              </v-layout>
              
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-md-5 pt-sm-5">Perry W.T. Chan, MCOSCA, MBACP
                  </p>
                  <p class="body-2">•	Doctorate in Psychotherapy & Counselling (DPsych; The University of Edinburgh) (In progress)
                  </p>
                  <p class="body-2">•	Postgraduate Diploma in Psychotherapy & Counselling (PGDip; The University of Edinburgh)
                  </p>
                  <p class="body-2">•	Registered in Counselling and Psychotherapy in Scotland (COSCA; Registration no. 4804)
                  </p>
                  <p class="body-2">•	Registered member of British Association for Counselling and Psychotherapy (BACP; Registration no. 388438)
                  </p>
                  <p class="body-2">•	Certificate in Focusing Skills (The British Focusing Association)
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md4 pt-md-10 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/dark.jpg"
                      max-width="320"
                      max-height="550"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Edinburgh, 2020 winter
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md7>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-md-8 pt-sm-5">My Experience
                  </p>
                  <p class="subtitle-1">I specialise in early relational trauma (i.e. childhood abuse, neglect, and suffering). I work extensively with clients who had a difficult childhood, especially in relation to their family. Besides, I also have experience working with clients with a wide range of issues such as:</p>
                  <v-list-item-subtitle class="subtitle-1">•	depression</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	anxiety</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	anger</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	stress</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	relationship difficulties</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	LGBT+ issues</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	sleeping problems</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	bereavement</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	loneliness</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	self-esteem</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	cross-cultural issues</v-list-item-subtitle>
                </v-flex>
                <v-flex sm0 md2>
                </v-flex>
              </v-layout>
              <p class="text-center subtitle-2 font-weight-regular pt-md-10 pt-sm-5 pt-5">Get in Touch</p>
              <p class="text-center subtitle-2 font-weight-regular">perrywtchan@protonmail.com</p>
              <v-layout row wrap justify-space-around pt-md-10 pt-sm-5>
                <v-flex xs6 md3 class="d-flex flex-column-reverse">
                <v-img  class="mx-auto"
                src="@/assets/cosca1.jpg"
                        max-width="150"
                        max-height="150"
                ></v-img>
                </v-flex>
                <v-flex xs6 md3 class="d-flex flex-column-reverse">
                <v-img  src="@/assets/cosca2.jpg"
                        max-width="250"
                        max-height="150"
                ></v-img>
                </v-flex>
                <v-flex xs6 md4 class="d-flex flex-column-reverse pb-md-6">
                <v-img  src="@/assets/bacp.jpg"
                        max-width="230"
                        max-height="100"
                ></v-img>
                </v-flex>
                <v-flex xs12 md12 pt-10 pt-sm-10 pt-md-10 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">© 2021, Perry W.T. Chan. All Rights Reserved.</p>
                </v-flex>
              </v-layout>
            </v-container> 
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item align="center" class="px-10 py-3">
        <v-card flat max-width="1100" elevation="0" style="
        background: #FFFFFF;
        background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-5 py-md-10 py-5">
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <p class="overline text-capitalize light-blue--text text--darken-4">My Approach
                  </p>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="subtitle-1">My approach is relational, grounded in psychodynamic and person-centred theories. It's a process of identifying early/primitive conflicts and defences, which hinder us from developing a fuller sense of self. This happens through intersubjective communication (at times unconscious) in a confidential, safe, empathic and relational space between you and me.
                  </p>
                  <p class="subtitle-1">Therefore, psychotherapy, in my opinion, isn't about fixing something. It's two people sitting together in dialogue trying to discover who we really are, what is perpetuating our dysfunctional thoughts or behaviours, and what is hindering us from self-actualisation and feeling fulfilled. It is simple......but deep......
                  </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5>
                <v-img class="mx-auto"
                      src="@/assets/2people2.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Two people navigating in the mist, Yellowcraig, 2021 summer
                </p>
              </v-flex>
              </v-layout>
              
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/oldcollege.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Old College, 2020 winter 
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">How it works
                  </p>
                  <p class="subtitle-1">Instead of someone who solves your problems, I'll be your companion being together in the chaotic and overwhelming space, indwelling ourselves in the experiences. We together try to process and hopefully come to terms with something painful and unbearable.</p>
                  <p class="subtitle-1">My years of meditation practice and my training of focusing skills have allowed me and my clients to dwell in the experiences on a deeper level. When things start making sense and becoming meaningful, psychic transformation will be experienced. What might potentially happen are having higher self-awareness, bigger capacity to embrace the not-knowing in life and more ability to make better decisions without repeating unhealthy patterns.
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex sm0 xs0 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-2 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">The Not-knowing
                  </p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-8 pr-sm-8 pr-8 text-wrap"> . . . if you gaze for long into an abyss, the abyss gazes back into you.</v-list-item-subtitle>
                  <v-list-item-subtitle class="text-right font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-12 pr-sm-8 pr-8 pb-md-3 pb-3 pb-sm-3 text-wrap">Nietzsche</v-list-item-subtitle>
                  <p class="subtitle-1">Imagine both of us trying to map a dark misty city together with a compass and find the way out. It could be an abyss of darkness, a fathomless realm, way beyond our capacity to understand.</p>
                  <p class="subtitle-1">Yet, if we together explore long enough, our psyche will respond and it could end up a transformative journey. In our work, this is a safe space for us to let this alchemical reaction happen.</p>

                  
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7>
                <v-img
                      src="@/assets/foggycity.jpg"
                      max-width="570"
                      max-height="450"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Misty Edinburgh, 2020 spring 
                </p>
              </v-flex>

              </v-layout>

              <v-layout row wrap>
              <v-flex sm0 xs0 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7>
                <v-img
                      src="@/assets/2birds.jpg"
                      max-width="570"
                      max-height="450"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Bird, Tokyo 2018 spring
                </p>
              </v-flex>
                
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md4 pt-md-8 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">Therapeutic Process
                  </p>
                  <p class="subtitle-1"> This is a poem I wrote at the beginning of my training.</p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Two tiny eggs in the bird's nest</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Dream the undreamable</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Speak the unspeakable</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Feel the "unfeelable"</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Formulate the unformulated</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Experience the understandable</v-list-item-subtitle>
                </v-flex>
                <v-flex sm0 xs0 md1>
                </v-flex>
                
              </v-layout>
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">© 2021, Perry W.T. Chan. All Rights Reserved.</p>
                  <p class="text-center subtitle-2 font-weight-regular">Get in Touch: perrywtchan@protonmail.com</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item align="center" class="px-10 py-3">
        <v-card flat max-width="1100" elevation="0" style="
            background: #FFFFFF;
            background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
            background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
            ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-5 py-md-10 py-5">
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/mistyforest.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">A misty forest, Yellowcraig 2021 summer
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-1">Fees
                  </p>
                  <p class="subtitle-1">I provide service mainly for clients based in the UK (in-person/online/phone) and in Hong Kong (online only) at the rate as follows:
                  </p>
                  <v-data-table
                    :headers="headers"
                    :items="fees"
                    :items-per-page="2"
                    hide-default-footer
                    class="elevation-1"
                  ></v-data-table>
                </v-flex>
                
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-7">First & Following Sessions</p>
                  <p class="subtitle-1">In our first meeting, we will get to know each other, talk about policies and how we can work together, and most importantly, see whether it feels right for you to work with me.
                  </p>
                  <p class="subtitle-1">When we agree to work together and on a mutually suitable time to meet, I undertake our work by providing regular weekly sessions.
                  </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5 pt-5>
                <v-img class="mx-auto"
                      src="@/assets/lighthouse2.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">A floating lighthouse, Yellowcraig 2021 summer
                </p>
                </v-flex>
                
                <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5 pt-5>
                <v-img class="mx-auto"
                      src="@/assets/map.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Google Map: https://goo.gl/maps/ontWZEiHSm22P3Cc6
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">Where?</p>
                  <p class="subtitle-1">I offer face-to-face, online (Skype) or phone counselling session.
                  </p>
                  <p class="subtitle-1">For face-to-face session, I practice at:</p>
                  <v-list-item-subtitle class="subtitle-1 font-weight-bold">South Side Centre</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">86 Causewayside</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">Edinburgh</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">EH9 1PY</v-list-item-subtitle>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">© 2021, Perry W.T. Chan. All Rights Reserved.</p>
                  <p class="text-center subtitle-2 font-weight-regular">Get in Touch: perrywtchan@protonmail.com</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      
      <v-tab-item align="center" class="px-10 py-3">
        <v-card flat max-width="1100" elevation="0" style="
        background: #FFFFFF;
        background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-5 py-md-10 py-5">
              <v-layout row wrap>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Lost
                  </p>
                  <p class="subtitle-1">Born and grew up in Hong Kong, I later moved to the UK for higher education in my teenage years. Done my undergrad, done my master’s, feeling lost and disturbed, hit the road, spent several years working and travelling around the world, looked for my soul, started personal therapy…….my journey started from here…
                  </p>
                  <p class="subtitle-1">“Perhaps one day you don’t need to go anywhere because you have the whole world in you?” A Jungian analyst spoke to me.
                  </p>
                  </p>
                  <p class="subtitle-1">“What do you mean?”
                  </p>
                  </p>
                  <p class="subtitle-1">“Like a monk meditating on a Mandala which encapsulates the whole universe.”
                  </p>
                  </p>
                  <p class="subtitle-1">"......I think I’m escaping from something......”
                  </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md4 pt-md-4>
                <v-img class="mx-auto"
                      src="@/assets/fishexplore.jpg"
                      max-width="300"
                      max-height="800"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Koi fish, Tokyo 2018 spring
                </p>
              </v-flex>
              <v-flex sm1 md1>
                </v-flex>
              </v-layout>
              
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-7 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/perryfish.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">When you brush past your dark side it goes so quickly yet enlightens you
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Encountering
                  </p>
                  <p class="subtitle-1">This exchange occurred years ago.
                  </p>
                  <p class="subtitle-1">It was the time I started looking into myself, my inner process.
                  </p>
                  <p class="subtitle-1">Encountering my shadows, the dark sides of myself, my vulnerabilities…painful yet insightful.
                  </p>
                  <p class="subtitle-1">Digging deep, peeling off my wound, layer by layer......excoriating and excruciating......</p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md6 pt-md-3 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Koans
                  </p>
                  <p class="subtitle-1">“Yea I know I'm disturbed. What can I do?”</p>
                  <p class="subtitle-1">“I don’t know” the analyst answered immediately.</p>
                  <p class="subtitle-1">“…can you tell me what to do?”</p>
                  <p class="subtitle-1">“Stop asking this question. When the right time has come, you will know what to do. Now stay reflective and curious.”</p>
                  <p class="subtitle-1">Like a koan, solving it in our head is pointless. Indwelling ourselves in it is the way to understand it. This was the time when I learnt to indwell in my painful experience and started this life-long commitment to looking into my psyche and developing my self-awareness, as well as staying reflective on the tensions with any other beings.</p>
                  <p class="subtitle-1"></p>
                  
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7>
                <v-img
                      src="@/assets/fishdiscover.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Self-discovery, making the unconscious conscious
                </p>
              </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-7 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/mindfulness.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Meditation has become my daily practice. (Meditation in Japan, 2018)
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">My Ways of Being
                  </p>
                  <p class="subtitle-1">Personal therapy and meditation are practices which keep me alive, reflective, creative and grounded and thus shapes my ways of being. This has thus allowed me to work with my clients ethically and professionally.
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">© 2021, Perry W.T. Chan. All Rights Reserved.</p>
                  <p class="text-center subtitle-2 font-weight-regular">Get in Touch: perrywtchan@protonmail.com</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>

      
    </v-tabs>
    
  </v-card>
 </v-app> 
 
</template>



<script>
  export default {
    data () {
      return {
        e1: 'English',
        languages: [
          'English', '中文', '日本語',
        ],
      }
    },
  }
</script>


<script>
export default {
    data () {
      return {
      
              e1: 'Eng',
        languages: [
          'Eng', '中 (繁)', '中 (简)', '日',
        ],
      
        headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'First session (50-min)', value: 'first', sortable: false},
          { text: 'Following sessions (50-min)', value: 'following', sortable: false},
        ],
        fees: [
          {
            name: 'Clients based in the UK (£)',
            first: 30,
            following: 50,
          },
          {
            name: 'Clients based in HK (HK$)',
            first: 500,
            following: 800,
          },
        ],

      }
    },
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
</style>
