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
                  <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5>
                  <v-img class="mx-auto"
                        src="@/assets/mistyforest.jpg"
                        alt="psychotherapy and counselling service mainly for clients based in Edinburgh, in the UK (in-person/online/phone) and in Hong Kong (online only), in English, Cantonese and Mandarin Chinese"
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
                        alt="I offer counselling/psychotherapy face-to-face (South Side Centre), online (Skype) or phone counselling session, in Edinburgh, UK, Hong Kong"
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
  </div>
</template>


<script>
export default {
    data () {
      return {
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