<template>
  <div align="left">
<v-card flat max-width="1084" elevation="0" style="
					background: #FFFFFF;
					background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					">
					  <v-card-text class="text-left">
						<v-container class="px-md-10 px-5 py-md-10 py-5">
						  <v-layout row wrap>
							<v-flex xs12 sm12 md12>
							  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('londonJuly_EventName') }}
							  </p>
							</v-flex>
							<v-flex xs12 sm12 md6>
							  <p class="overline font-italic font-weight-regular text-capitalize light-blue--text text--darken-4">{{ $t('londonJuly_sdDate') }}
							  </p>
							</v-flex>
							<v-flex md6>
							</v-flex>
							<v-flex xs1 sm2 md3>
							</v-flex>
							<v-flex xs10 sm8 md6>
							<v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('ullmanQuote') }}</v-list-item-subtitle>
							<v-list-item-subtitle class="text-right font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-12 pr-sm-8 pr-8 pb-md-3 pb-3 pb-sm-3 text-wrap">{{ $t('ullmanFullName') }}</v-list-item-subtitle>
							</v-flex>
							<v-flex xs1 sm2 md3>
							</v-flex>
							<v-flex xs12 sm12 md6>
							  <p class="subtitle-1">{{ $t('londonJuly_eventIntro') }}
							  </p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md5 pt-md-1>
								<v-card
								class="mx-auto"
								max-width="280"
								>
									<v-card-text>
									  <div>{{ $t('londonJuly_freeEvent') }}</div>
									  <p></p>
									  <div>{{ $t('londonJuly_contact') }}</div>
									  <div class="text--primary">
										{{ $t('londonJuly_email') }}
									  </div>
									</v-card-text>
								</v-card>
						  </v-flex>
						  </v-layout>
						  
						  <v-layout row wrap>
							<v-flex xs12 sm12 md5 pt-md-7 pt-sm-5>
							<v-img class="mx-auto"
								  src="@/assets/mushroom.png"
								  alt="an image of dreaming mushrooms. Social Dreaming in London for Hong Kong people Hongkongers, to explore the Hong Kong's collective trauma. Welcome to join us."
								  max-width="520"
								  max-height="400"
							></v-img>
							<p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('dreamingMushrooms') }}
							</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('whatIsSDM') }}
							  </p>
							  <p class="subtitle-1">{{ $t('refer') }}
								<router-link style="color: inherit;"
             					   :to="{ name: 'socialDreamingAbout', params: { locale: $route.params.locale || 'en' }}"> 
								   {{ $t('tabAboutSdm') }}</router-link> {{ $t('learnMore') }}
							  </p>
							  <p class="subtitle-1">{{ $t('whatIsSDM_intro') }}
							  </p>
							</v-flex>
						  </v-layout>
						  <v-layout row wrap>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-2 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('CanIParticipate') }}
							  </p>
							  <p class="subtitle-1">{{ $t('londonJuly_participate_invite') }}</p>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">{{ $t('londonJuly_Participate_c1') }}</v-list-item-subtitle>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">{{ $t('londonJuly_Participate_c3') }}</v-list-item-subtitle>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">{{ $t('londonJuly_Participate_c4') }}</v-list-item-subtitle>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">{{ $t('londonJuly_Participate_c5') }}</v-list-item-subtitle>
							  <p></p>
							  <p class="subtitle-1">{{ $t('sdmNotTherapy') }}</p>
							<p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('londonJuly_venue') }}
							</p>
							<v-list-item-subtitle class="subtitle-1 font-weight-bold">Institute of Group Analysis</v-list-item-subtitle>
							<v-list-item-subtitle class="subtitle-1">1 Daleham Gardens</v-list-item-subtitle>
							<v-list-item-subtitle class="subtitle-1">London, NW3 5BY</v-list-item-subtitle>
							<v-list-item-subtitle class="subtitle-1">{{ $t('londonJuly_venueDistance') }}</v-list-item-subtitle>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md4 pt-md-2 pt-sm-8 pt-7>
									<p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('londonJuly_agenda') }}
									</p>
									<v-row>
									  <v-col sm="9">
										<v-card
										  class="pa-2"
										  outlined
										  tile
										>
										  July 30 (Sat) & Aug 6 (Sat)
										</v-card>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  11:00-11:20
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  Intro
											</v-card>
										  </v-col>
										</v-row>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  11:20-12:05
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  SDM 1
											</v-card>
										  </v-col>
										</v-row>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  12:05-12:15
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  Break
											</v-card>
										  </v-col>
										</v-row>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  12:15-12:40
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  DRD
											</v-card>
										  </v-col>
										</v-row>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  12:40-13:40
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  Lunch Break
											</v-card>
										  </v-col>
										</v-row>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  13:40-14:25
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  SDM 2
											</v-card>
										  </v-col>
										</v-row>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  14:25-14:35
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  Break
											</v-card>
										  </v-col>
										</v-row>
										<v-row no-gutters>
										  <v-col
											cols="8"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  14:35-15:00
											</v-card>
										  </v-col>
										  <v-col
											cols="4"
											sm="6"
										  >
											<v-card
											  class="pa-2"
											  outlined
											  style="background-color: #FFECB3;"
											  tile
											>
											  DRD
											</v-card>
										  </v-col>
										</v-row>
									  </v-col>
									</v-row>
									<p class="pt-md-3 pt-sm-3 pt-3 caption">
									{{ $t('londonJuly_agendaNote1') }}
										<router-link style="color: inherit;"
										:to="{ name: 'socialDreamingAbout', params: { locale: $route.params.locale || 'en' }}"> 
										{{ $t('tabAboutSdm') }}</router-link>
									{{ $t('londonJuly_agendaNote2') }}
									</p>
						    </v-flex>

						  </v-layout>

						  <v-layout row wrap>
							<v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7>
							<v-img
								  src="@/assets/fire.jpg"
								  max-width="570"
								  max-height="450"
							></v-img>
							<p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Campfire, 2022 spring
							</p>
						  </v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-8 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('londonJuly_confidentiality') }}
							  </p>
							  <p class="subtitle-1">{{ $t('londonJuly_confidentiality_p1') }}</p>
							  <p class="subtitle-1">{{ $t('londonJuly_confidentiality_p2') }}</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md11 pt-md-8 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('londonJuly_AboutHost') }}
							  </p>
							  </v-flex>
							  <v-flex sm1 md1>
							  </v-flex>
							  <v-flex xs12 sm12 md4 pt-sm-5>
							  <p class="subtitle-1">{{ $t('londonJuly_AboutHost_perry') }}</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md4 pt-sm-5>
							  <p class="subtitle-1">{{ $t('londonJuly_AboutHost_claire') }}</p>
							</v-flex>
							<v-flex sm1 md3>
							</v-flex>
						  </v-layout>
						  <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
							<v-flex xs12 md12 class="d-flex flex-column-reverse">
							  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY2') }}</p>
							</v-flex>
						  </v-layout>
						</v-container>
					  </v-card-text>
					</v-card>
            </v-container>
          </v-card-text>
        </v-card>
          </div>
</template>