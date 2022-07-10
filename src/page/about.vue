<template>
  <div align="center" class="pt-md-8 pt-sm-8 pt-4 px-md-10 px-sm-9 px-4">
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
						alt="an image of Perry WT Chan, counsellor, psychotherapist and Social Dreaming host. He provides in-person/online counselling & psychotherapy in English, Cantonese or Mandarin mainly for clients based in the UK and HK."
                        max-width="240"
                        max-height="450"
                  ></v-img>
                  <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PROPIC') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm7 md8>
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('WELCOMETITLE') }}
                  </p>
                  <p class="subtitle-1">{{ $t('WELCOME') }}
                  </p>
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('CORETITLE') }}
                  </p>
                  <p class="subtitle-1">{{ $t('CORE') }}
                  </p>
                  
                </v-flex>
              </v-layout>
              
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-md-5 pt-sm-5">{{ $t('NAME') }}
                  </p>
                  <p class="body-2">{{ $t('QUALI1') }}
                  </p>
                  <p class="body-2">{{ $t('QUALI2') }}
                  </p>
                  <p class="body-2">{{ $t('QUALI3') }}
                  </p>
                  <p class="body-2">{{ $t('QUALI4') }}
                  </p>
                  <p class="body-2">{{ $t('QUALI5') }}
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md4 pt-md-10 pt-sm-5>
                <v-img class="mx-auto"
                      src="@/assets/dark.jpg"
					  alt="depression, anxiety, anger, stress, relationship difficulties, LGBT+ issues, sleeping problems, bereavement, loneliness, self-esteem, cross-cultural issuess"
                      max-width="320"
                      max-height="550"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC2') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md7>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-md-8 pt-sm-5">{{ $t('EXPTITLE') }}
                  </p>
                  <p class="subtitle-1">{{ $t('EXP') }}</p>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP1') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP2') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP3') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP4') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP5') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP6') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP7') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP8') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP9') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP10') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP11') }}s</v-list-item-subtitle>
                </v-flex>
                <v-flex sm0 md2>
                </v-flex>
              </v-layout>
              <p class="text-center subtitle-2 font-weight-regular pt-md-10 pt-sm-5 pt-5">{{ $t('GET1') }}</p>
              <p class="text-center subtitle-2 font-weight-regular">{{ $t('E1') }}</p>
              <v-layout row wrap justify-space-around pt-md-10 pt-sm-5>
                <v-flex xs6 md3 class="d-flex flex-column-reverse">
                <v-img  class="mx-auto"
						src="@/assets/cosca1.jpg"
						alt="COSCA registered counsellor/psychotherapist"
                        max-width="150"
                        max-height="150"
                ></v-img>
                </v-flex>
                <v-flex xs6 md3 class="d-flex flex-column-reverse">
                <v-img  src="@/assets/cosca2.jpg"
						alt="COSCA registered counsellor/psychotherapist"
                        max-width="250"
                        max-height="150"
                ></v-img>
                </v-flex>
                <v-flex xs6 md4 class="d-flex flex-column-reverse pb-md-6">
                <v-img  src="@/assets/bacp.jpg"
						alt="BACP registered counsellor/psychotherapist"
                        max-width="230"
                        max-height="100"
                ></v-img>
                </v-flex>
                <v-flex xs12 md12 pt-10 pt-sm-10 pt-md-10 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY1') }}</p>
                </v-flex>
              </v-layout>
            </v-container> 
          </v-card-text>
        </v-card>
  </div>
</template>







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