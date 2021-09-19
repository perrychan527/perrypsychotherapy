<template>
 <v-app>
  <v-card>
    <v-card>
      <v-card-title class="justify-center font-weight-light display-1 pt-10"> Perry W.T. Chan</v-card-title>
      <v-card-subtitle class="overline text-capitalize text-center font-weight-regular">Psychotherapist / Counsellor</v-card-subtitle>
    </v-card>
    
    <v-tabs 
    centered
    center-active
    show-arrows
    >
      <v-tab class="overline text-capitalize fixed">
        hi
      </v-tab>
      <v-tab class="overline text-capitalize">
        Work Together
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
                <v-flex xs12 sm4 md3>
                  <v-img class="mx-auto"
                        src="@/assets/perrybio.jpg"
                        max-width="240"
                        max-height="450"

                  ></v-img>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm7 md8>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Hi
                  </p>
                  <p class="subtitle-1">Welcome to my page. You can call me Perry. I'm based in Edinburgh, Scotland. I provide professional service mainly for clients based in the UK and HK. I work with clients in English, Cantonese or Mandarin.
                  </p>
                  <p class="overline text-capitalize light-blue--text text--darken-4">my core value
                  </p>
                  <p class="subtitle-1">As I find labels such as xx disorder or xx syndrome pathologising and over-powering, I see each person as an individual with unique stories, experiences, personalities, behavioural patterns, complexes, psyches, souls......which are all meaningful, whether or not they're making sense at this moment. I'm committed to create this safe space for us to explore together on a deeper level. 
                  </p>
                  
                </v-flex>
              </v-layout>
              
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-md-5 pt-sm-5">Perry W.T. Chan, MCOSCA, MBACP
                  </p>
                  <p class="subtitle-1">•	PGDip in Psychotherapy & Counselling (The University of Edinburgh)
                  </p>
                  <p class="subtitle-1">•	Registered in Counselling and Psychotherapy in Scotland (COSCA), membership no. 4804
                  </p>
                  <p class="subtitle-1">•	Registered member of British Association for Counselling and Psychotherapy (BACP), membership no. 00973613
                  </p>
                  <p class="subtitle-1">•	Certificate in Focusing Skills (The British Focusing Association)
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
                  <p class="subtitle-1">I have experience working with clients with a wide range of issues such as:</p>
                  <v-list-item-subtitle class="subtitle-1">•	depression</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	anxiety</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	anger</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	stress</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	relationship difficulties</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	sexuality</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	sleeping problems</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	trauma</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	bereavement</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	loneliness</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">•	self-esteem</v-list-item-subtitle>
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
                  <p class="subtitle-1">I trained in psychodynamic and person-centred approach. In fact, I don’t like to categorise. So more accurately speaking, my approach is relational. It is two people sitting together trying to discover who we really are, what is perpepuating our dysfunctional thoughts or behaviours, and what is hindering us from self-actualisation and feeling fulfilled.
                  </p>
                  <p class="subtitle-1">Psychotherapy, in my opinion, is not about fixing something. It’s more about making sense of painful experience, developing self-awareness. As a result, we can have higher capacity to embrace more not-knowing in life and to make better decisions without repeating our unhealthy patterns.
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
                <v-flex xs12 sm12 md5 pt-md-7 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/foggycity.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Misty Edinburgh, 2020 spring
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">In Our Work
                  </p>
                  <p class="subtitle-1">Instead of someone who solve your problems, I'll be your companion being together in the confusing and chaotic space. We together try to make sense of something painful and unbearable, create meanings out of it, and thus experience psychic transformation. Hmmm.....it might sound vague. To give you an analogy, imagine both of us trying to map a dark misty city together with a compass and find the way out. Though it might be scary, it is a transformative journey. In our work, this is a safe space for us to let this exquisite alchemical reaction happen. It is simple......but deep......
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex sm0 xs0 md1>
                </v-flex>
                <v-flex xs12 sm12 md4 pt-md-8 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Therapeutic Process
                  </p>
                  <p class="subtitle-1"> This is a poem I wrote at the beginning of my training.</p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Two tiny eggs in the bird's nest</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Dream the undreamable</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Speak the unspeakable</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Feel the "unfeelable"</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Formulate the unformulated</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">Experience the understandable</v-list-item-subtitle>
                  
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-10 pt-sm-8 pt-7>
                <v-img
                      src="@/assets/oldcollege.jpg"
                      max-width="570"
                      max-height="450"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Old College, 2020 winter
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
                      src="@/assets/fishdiscover.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Self-discovery, making the unconscious conscious, Tokyo 2018 spring
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Fees
                  </p>
                  <p class="subtitle-1">I provide service mainly for clients based in the UK and HK. The rate of our first meeting (50 mins each session) is £25 (HK$275). If we decide to continue working together, it will be <bold>£50 (HK$550)</bold> per session.
                  </p>
                  <p class="overline text-capitalize light-blue--text text--darken-4">First Meeting
                  </p>
                  <p class="subtitle-1">We will get to know each other, talk about policies and how we can work together, and most importantly, to see whether it feels right for you to work with me.
                  </p>
                  
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4">Where?</p>
                  <p class="subtitle-1">I offer face-to-face, online (Skype) or phone counselling session.
                  </p>
                  <p class="subtitle-1">For face-to-face session, I practice at:</p>
                  <v-list-item-subtitle class="subtitle-1 font-weight-bold">South Side Centre</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">86 Causewayside</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">Edinburgh</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">EH9 1PY</v-list-item-subtitle>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5 pt-5>
                <v-img class="mx-auto"
                      src="@/assets/fishintegration.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Integration, Tokyo 2018 spring
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
      <v-tab-item align="center" class="px-10 py-3">
        <v-card flat max-width="1100" elevation="0" style="
            background: #FFFFFF;
            background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
            background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
            ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-5 py-md-10 py-5">

            <p class="mb-0">
              Born in Hong Kong, trained in the UK (typing......)
            </p>
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
  name: 'HomePage'
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
