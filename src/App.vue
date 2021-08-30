<template>
 <v-app>
  <v-card>
    <v-card>
      <v-card-title class="justify-center font-weight-light display-1 pt-10"> Perry W.T. Chan</v-card-title>
      <v-card-subtitle class="overline text-capitalize text-center">Psychotherapist / Counsellor</v-card-subtitle>
    </v-card>
   
    <v-tabs 
    centered
    center-active
    >
      <v-tab class="overline text-capitalize">
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
            <v-container class="px-md-10 px-sm-10 px-xs-5 py-md-10 py-sm-10 py-xs-5"> 
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
                  <p class="subtitle-1">Hello. Welcome to my page. You can call me Perry.
                  </p>
                  <p class="overline text-capitalize pt-md-5 pt-sm-5">my core value
                  </p>
                  <p class="subtitle-1">I never like labels such as xx disorder or xx syndrome as I find them pathologising and over-powering. I see each person as an individual with unique stories, experiences, personalities, behavioural patterns, complexes, psyches, souls......which are all meaningful, whether or not they're making sense at this moment. I'm committed to create this safe space for us to explore together on a deeper level. 
                  </p>
                  
                </v-flex>
              </v-layout>
              
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <p class="overline text-capitalize pt-md-5 pt-sm-5">Perry W.T. Chan, MCOSCA, MBACP
                  </p>
                  <p class="subtitle-1">•	PGDip in Counselling (The University of Edinburgh)
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
                <v-flex xs12 sm12 md5 pt-md-12 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/foggycity.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-xs-3 subtitle-3">Foggy Edinburgh, 2020 Spring
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize pt-md-5 pt-sm-5">My Experience
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
              
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5>
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
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2">© 2021, Perry W.T. Chan. All Rights Reserved.</p>
                  <p class="text-center subtitle-2">Get in Touch: perrywtchan@gmail.com</p>
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
            <v-container class="px-md-10 px-xs-5 py-md-10 py-xs-5">
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <p class="overline text-capitalize">My Approach
                  </p>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="subtitle-1">I trained in psychodynamic and person-centred approach. In fact, I don’t like to categorise. So more accurately speaking, my approach is relational. It is two people sitting together trying to discover who we really are, what is perpepuating our dysfunctional thoughts or behaviours, and what is hindering us from self-actualisation and feeling fulfilled. Psychotherapy, in my opinion, is not about fixing something. It’s all about making sense of painful experience, developing self-awareness. As a result, we can have higher capacity to embrace more not-knowing in life and to make better decisions without repeating our unhealthy patterns.
                  </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5>
                <v-img class="mx-auto"
                      src="@/assets/perryfish.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-xs-3 subtitle-3">Encountering our shadow, taken in Tokyo 2018
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
                <p class="pt-md-3 pt-sm-3 pt-xs-3 subtitle-3">Foggy Edinburgh, 2020 Spring
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize">In Our Work
                  </p>
                  <p class="subtitle-1">We together try to make sense of something painful and unbearable, create meanings out of it, and thus experience psychic transformation. Hmmm.....it might sound vague. To give you an analogy, imagine both of us trying to map a dark foggy city together with a compass and find the way out. Though it might be scary, it is a transformative journey. In our work, this is a safe space for us to let this exquisite alchemical reaction happen. It is simple......but deep…...very deep......
                  </p>
                </v-flex>
              </v-layout>

              
              
              <v-layout row wrap>
                <v-flex xs8 sm6 md4>
                  <v-container class="white">
                  <v-list-item-subtitle class="font-italic">Two tiny eggs in the bird's nest</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic">Dream the undreamable</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic">Speak the unspeakable</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic">Feel the "unfeelable"</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic">Formulate the unformulated</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic">Experience the understandable</v-list-item-subtitle>
                  <p>(A poem written by myself, 2018)</p>
                  </v-container>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2">© 2021, Perry W.T. Chan. All Rights Reserved.</p>
                  <p class="text-center subtitle-2">Get in Touch: perrywtchan@gmail.com</p>
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
            <v-container class="px-md-10 px-xs-5 py-md-10 py-xs-5">
              <v-layout row wrap>
                <v-flex xs12 sm12 md5>
                <v-img class="mx-auto"
                      src="@/assets/foggycity.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-xs-3 subtitle-3">Foggy Edinburgh, 2020 Spring
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize">First Meeting
                  </p>
                  <p class="subtitle-1">we will get to know each other, talk about policies and how we can work together, and most importantly, to see whether it feels right for you to work with me.
                  </p>
                </v-flex>
              </v-layout>

            <p class="mb-0">
              I offer face to face, online or phone counselling session
            </p>
             
            The rate of our first meeting (50 mins each session) is £25. If we decide to continue working together, it will be £50 per session. 
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
            <v-container class="px-md-10 px-xs-5 py-md-10 py-xs-5">

            <p class="mb-0">
              Born in Hong Kong, educated in the UK.
            </p>
            </v-container>

          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs>
    
  </v-card>
 </v-app> 
 
</template>
