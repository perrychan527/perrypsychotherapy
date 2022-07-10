<template>
  <div align="center" class="pt-md-8 pt-sm-8 pt-4 px-md-10 px-sm-9 px-4">
    <v-card flat max-width="1100" elevation="0" style="
        background: #FFFFFF;
        background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
        ">
          <v-card-text class="text-left">
            <v-container class="px-md-10 px-5 py-md-10 py-5">
              <v-layout row wrap>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('METITLE1') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME1') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME2') }}
                  </p>
                  </p>
                  <p class="subtitle-1">{{ $t('ME3') }}
                  </p>
                  </p>
                  <p class="subtitle-1">“{{ $t('ME4') }}
                  </p>
                  </p>
                  <p class="subtitle-1">{{ $t('ME5') }}
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC10') }}
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC11') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('METITLE2') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME6') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME7') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME8') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME9') }}</p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md6 pt-md-3 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('METITLE3') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME10') }}</p>
                  <p class="subtitle-1">{{ $t('ME11') }}</p>
                  <p class="subtitle-1">{{ $t('ME12') }}</p>
                  <p class="subtitle-1">{{ $t('ME13') }}</p>
                  <p class="subtitle-1">{{ $t('ME14') }}</p>
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC12') }}
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC13') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('METITLE4') }}
                  </p>
                  <p class="subtitle-1">{{ $t('ME15') }}
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY4') }}</p>
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('E4') }}</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
    </v-card>
  </div>
</template>