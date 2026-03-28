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
                <v-flex xs12 sm4 md4 class="fade-up" style="transition-delay: 0.4s">
                  <v-img class="mx-auto mt-md-3 mt-sm-4 mt-3 mr-md-10"
                        src="@/assets/forestshell.jpeg"
						:alt="$t('ALT_ABOUT_PHOTO')"
                        max-width="300"
                        max-height="1050"
                  ></v-img>
                </v-flex>
				
				
                <v-flex xs12 sm7 md8>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.45s">{{ $t('WELCOMETITLE') }}
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.5s">{{ $t('WELCOME') }}
                  </p>
				  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.55s">{{ $t('CORETITLE') }}
                  </h2>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.6s">{{ $t('CORE1') }}
                  </p>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.65s" v-html="$t('CORE2')">
                  </p>  
                </v-flex>
              </v-layout>
              
			  <v-layout row wrap>
                <v-flex xs12 sm12 md7>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-md-8 pt-sm-5 fade-up" style="transition-delay: 0.1s">{{ $t('EXPTITLE') }}
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.15s">{{ $t('EXP') }}</p>
                    <v-layout row wrap ml-md-5 class="fade-up" style="transition-delay: 0.2s">
						<v-flex xs12 sm6 md5>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP1') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP2') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP3') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP4') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP5') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP6') }}</v-list-item-subtitle>
						</v-flex>
						<v-flex xs12 sm6 md5>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP7') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP8') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP9') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP10') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP11') }}</v-list-item-subtitle>
						  <v-list-item-subtitle class="subtitle-1">{{ $t('EXP12') }}</v-list-item-subtitle>
						</v-flex>
					</v-layout>
				  <p class="subtitle-1 pt-md-5 pt-sm-4 pt-5 fade-up" style="transition-delay: 0.25s">{{ $t('EXP_01') }}</p>
                </v-flex>
				
				<v-flex sm1 md1>
                </v-flex>
				
				<v-flex xs12 sm4 md4 pt-md-10 class="fade-up" style="transition-delay: 0.3s">
                  <v-img class="mr-auto"
                        src="@/assets/mountfuji.jpg"
						:alt="$t('ALT_ABOUT_PHOTO')"
                        max-width="300"
                        max-height="500"
                  ></v-img>
                  <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('JOURNEYPIC') }}
                </p>
                </v-flex>
              </v-layout>
			  
              <v-layout row wrap>
                <v-flex xs12 sm4 md3 pt-md-4 class="fade-up" style="transition-delay: 0.1s">
                  <v-img class="mx-auto mt-md-2 mt-sm-4 mt-3"
                        src="@/assets/perrybio2.jpg"
						:alt="$t('ALT_ABOUT_PHOTO')"
                        max-width="265"
                        max-height="450"
                  ></v-img>
                </v-flex>
				
                <v-flex sm1 md1>
                </v-flex>
				
				<v-flex xs12 sm12 md7>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-md-5 pt-sm-5 fade-up" style="transition-delay: 0.15s">{{ $t('NAME') }}
                  </h2>
                  <p class="body-2 fade-up" style="transition-delay: 0.2s">{{ $t('QUALI1') }}
                  </p>
                  <p class="body-2 fade-up" style="transition-delay: 0.25s">{{ $t('QUALI4') }}
                  </p>
                  <p class="body-2 fade-up" style="transition-delay: 0.3s">{{ $t('QUALI6') }}
                  </p>
                  <p class="body-2 fade-up" style="transition-delay: 0.35s">{{ $t('QUALI3') }}
                  </p>
                
				<v-img  src="@/assets/bacp.png"
						:alt="$t('ALT_ABOUT_BACP')"
                        max-width="230"
                        max-height="100"
                        class="ml-md-1 mt-md-6 fade-up"
						style="transition-delay: 0.4s"
                ></v-img>
				</v-flex>
              </v-layout>
			  
              <v-layout row wrap>
				<v-flex xs12 sm7 md7 pt-md-5>
                  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-7 fade-up" style="transition-delay: 0.1s">{{ $t('JOURNEYTITLE') }}
                  </h2>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.15s" v-html="$t('JOURNEY1')">
                  </p>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('JOURNEY2') }}
                  </p>
                </v-flex>
				
				<v-flex sm1 md1>
                </v-flex>

				<v-flex xs12 sm12 md4 pt-md-10 pt-sm-5 class="fade-up" style="transition-delay: 0.25s">
					<v-img class="mx-auto"
						  src="@/assets/dark.jpg"
						  :alt="$t('ALT_ABOUT_CONDITIONS')"
						  max-width="320"
						  max-height="550"
					></v-img>
					<p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC2') }}
					</p>
                </v-flex>
              </v-layout>
			  
			  
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
				<v-flex xs12 md12 class="d-flex flex-column-reverse">
				  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.15s">{{ $t('COPY1') }}</p>
				  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.2s">{{ $t('E3') }}</p>
				</v-flex>
			  </v-layout>


            </v-container> 
          </v-card-text>
        </v-card>
  </div>
</template>



<script>
import ContactForm from '@/page/ContactForm.vue'

export default {
  components: { ContactForm },
  metaInfo: function() {
    return {
      title: this.$t('META_ABOUT_TITLE'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('META_ABOUT_DESC') }
      ]
    }
  }
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