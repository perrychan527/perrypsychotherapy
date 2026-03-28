<template>
  <div align="left" >
					<v-card flat max-width="1084" elevation="0" style="
					background: #FFFFFF;
					background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					">
					  <v-card-text class="text-left">
						<v-container class="px-md-10 px-5 py-md-10 py-5">
						  <v-layout row wrap>
						  <v-flex xs1 sm2 md3>
							</v-flex>
							<v-flex xs10 sm8 md6>
							<v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.1s">{{ $t('ullmanQuote') }}</v-list-item-subtitle>
							<v-list-item-subtitle class="text-right font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-12 pr-sm-8 pr-8 pb-md-3 pb-3 pb-sm-3 text-wrap fade-up" style="transition-delay: 0.15s">{{ $t('ullmanName') }}</v-list-item-subtitle>
							</v-flex>
							<v-flex xs1 sm2 md3>
							</v-flex>
							<v-flex xs12 sm12 md12>
							  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.2s">{{ $t('whatIsSDM') }}
							  </h2>
							</v-flex>
							<v-flex xs12 sm12 md6>
							  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('whatIsSDM_P1') }}
							  </p>
							  <p class="subtitle-1 fade-up" style="transition-delay: 0.3s">{{ $t('whatIsSDM_P2') }}
							  </p>
							</v-flex>
							<v-flex xs12 sm12 md6 class="fade-up" style="transition-delay: 0.2s">
							<v-img class="mx-auto"
								  src="@/assets/mushroom2.png"
								  :alt="$t('ALT_SD_MUSHROOM')"
								  max-width="520"
								  max-height="400"
							></v-img>
							<p class="pt-md-0 pt-sm-3 pt- subtitle-3">{{ $t('dreamingMushrooms2') }}
							</p>
						  </v-flex>
						  </v-layout>

						  <v-layout row wrap>
							<v-flex xs12 sm12 md6 pt-md-8 pt-sm-5 class="fade-up" style="transition-delay: 0.1s">
							<v-img class="mx-auto"
								  src="@/assets/dreamingfish.png"
								  :alt="$t('ALT_SD_FISH')"
								  max-width="600"
								  max-height="800"
							></v-img>
							<p class="pt-md-3 pt-sm-3 pt-3 pl-md-12 pl-12 pl-sm-12 subtitle-3">{{ $t('dreamingFishes') }}
							</p>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
							  <h2 class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.15s">{{ $t('APPTITLE2') }}
							  </h2>
							  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">COMING SOON</p>
							</v-flex>
						  </v-layout>
						  <v-layout row wrap>
							<v-flex sm0 xs0 md1>
							</v-flex>
							<v-flex xs12 sm12 md5 pt-md-2 pt-sm-5>
							  <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-5 fade-up" style="transition-delay: 0.1s">{{ $t('SocialDreamingAbout_ref') }}
							  </h2>
							  <p class="caption fade-up" style="transition-delay: 0.15s">Lawrence, W. Gordon. "The contribution of social dreaming to socio-analysis." Socio-Analysis 1, no. 1 (1999): 18-33.</p>
							  <p class="caption fade-up" style="transition-delay: 0.2s">Ullman, Montague. "Psi communication through dream sharing." Parapsychology Review 12, no. 2 (1981): 1-8.</p>
							</v-flex>
						  </v-layout>
						  <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
							<v-flex xs12 md12 class="d-flex flex-column-reverse fade-up" style="transition-delay: 0.1s">
							  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY1') }}</p>
							  <p class="text-center subtitle-2 font-weight-regular">{{ $t('E2') }}</p>
							</v-flex>
						  </v-layout>
						</v-container>
					  </v-card-text>
					</v-card>
  </div>
</template>

<script>
export default {
  metaInfo: function() {
    return {
      title: this.$t('META_SD_TITLE'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('META_SD_DESC') }
      ]
    }
  }
}
</script>
