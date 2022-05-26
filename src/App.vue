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
              v-model="languageSelected"
              :items="languages"
              item-text="text"
              item-value="locale"
              @change="changeLocale" 
              menu-props="auto"
              label="Language"
              hide-details
              prepend-icon="mdi-earth"
              single-line
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <v-card-title class="justify-center font-weight-light display-1 pt-0">{{ $t('HEADING') }}</v-card-title>
      <v-card-subtitle class="overline text-capitalize text-center font-weight-regular">{{ $t('SUBHEADING') }}</v-card-subtitle>
    </v-card>

    <v-tabs 
    centered
    center-active
    >
      <v-tab class="overline text-capitalize fixed">
        {{ $t('TAB1') }}
      </v-tab>
      <v-tab class="overline text-capitalize">
        {{ $t('TAB2') }}
      </v-tab>
      <v-tab class="overline text-capitalize">
        {{ $t('TAB3') }}
      </v-tab>
      <v-tab class="overline text-capitalize">
        {{ $t('TAB4') }}
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
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY1') }}</p>
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
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('APPTITLE1') }}
                  </p>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="subtitle-1">{{ $t('APP1') }}
                  </p>
                  <p class="subtitle-1">{{ $t('APP2') }}
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC3') }}
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC4') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('APPTITLE2') }}
                  </p>
                  <p class="subtitle-1">{{ $t('APP3') }}</p>
                  <p class="subtitle-1">{{ $t('APP4') }}
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex sm0 xs0 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-2 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('APPTITLE3') }}
                  </p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('APP5') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="text-right font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-12 pr-sm-8 pr-8 pb-md-3 pb-3 pb-sm-3 text-wrap">{{ $t('APP6') }}</v-list-item-subtitle>
                  <p class="subtitle-1">{{ $t('APP7') }}</p>
                  <p class="subtitle-1">{{ $t('APP8') }}</p>

                  
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7>
                <v-img
                      src="@/assets/foggycity.jpg"
                      max-width="570"
                      max-height="450"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC5') }}
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC6') }}
                </p>
              </v-flex>
                
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md4 pt-md-8 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('APPTITLE4') }}
                  </p>
                  <p class="subtitle-1">{{ $t('APP9') }}</p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">{{ $t('APP10') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">{{ $t('APP11') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">{{ $t('APP12') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">{{ $t('APP13') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">{{ $t('APP14') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8">{{ $t('APP15') }}</v-list-item-subtitle>
                </v-flex>
                <v-flex sm0 xs0 md1>
                </v-flex>
                
              </v-layout>
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY2') }}</p>
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('E2') }}</p>
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC7') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-1">{{ $t('PRACTITLE1') }}
                  </p>
                  <p class="subtitle-1">{{ $t('PRAC1') }}
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
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-7">{{ $t('PRACTITLE2') }}</p>
                  <p class="subtitle-1">{{ $t('PRAC2') }}
                  </p>
                  <p class="subtitle-1">{{ $t('PRAC3') }}
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
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC8') }}
                </p>
                </v-flex>
                
                <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5 pt-5>
                <v-img class="mx-auto"
                      src="@/assets/map.jpg"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC9') }}
                </p>
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('PRACTITLE3') }}</p>
                  <p class="subtitle-1">{{ $t('PRAC4') }}
                  </p>
                  <p class="subtitle-1">{{ $t('PRAC5') }}</p>
                  <v-list-item-subtitle class="subtitle-1 font-weight-bold">{{ $t('PRAC6') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('PRAC7') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('PRAC8') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-1">{{ $t('PRAC9') }}</v-list-item-subtitle>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY3') }}</p>
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('E3') }}</p>
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
      </v-tab-item>

      
    </v-tabs>
    
  </v-card>
 </v-app> 
 
</template>

<script>
export default {
    data () {
      return {
        languageSelected: {
          text: 'Eng',
          locale: 'en'
        },
        languages: [
          {
            text: 'Eng',
            locale: 'en'
          },
          {
            text: '中',
            locale: 'tc'
          },
          {
            text: '日',
            locale: 'ja'
          },
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
    methods : {
      changeLocale: function(locale){
          this.$i18n.locale = locale
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
