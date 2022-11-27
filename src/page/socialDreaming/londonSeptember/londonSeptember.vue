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
							  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('londonDec_EventName1') }}
							  </p><p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('londonDec_EventName2') }}
							  </p>
							</v-flex>
							<v-flex xs12 sm12 md5>
							  <p class="overline font-italic font-weight-regular text-capitalize light-blue--text text--darken-4">{{ $t('londonDec_sdDate1') }}
							  </p>
							  <p class="overline font-italic font-weight-regular text-capitalize light-blue--text text--darken-4">{{ $t('londonDec_sdDate2') }}
							  </p>
							  <p class="overline font-italic font-weight-regular text-capitalize light-blue--text text--darken-4">{{ $t('londonDec_sdDate3') }}
							  </p>
							</v-flex>
							<v-flex md7 pt-md-4>
								<v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('ullmanQuote') }}</v-list-item-subtitle>
								<v-list-item-subtitle class="text-right font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pr-md-12 pr-sm-8 pr-8 pb-md-3 pb-3 pb-sm-3 text-wrap">{{ $t('ullmanFullName') }}</v-list-item-subtitle>
							</v-flex>

							<v-flex xs12 sm12 md6 pt-md-8>
							  <p class="subtitle-1">{{ $t('londonDec_eventIntro') }}
							  </p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md5 pt-md-11>
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
								src="@/assets/libraryFish.png"
								alt="alchemical river, fish, library, Social dreaming in a library"
								max-width="350"
								max-height="400"
							></v-img>
							<p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Alchemical River (Perry Chan 2022) 
							</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-12 pt-sm-5>
								<p class="subtitle-1">{{ $t('whatIsSDM_intro_londonDec') }}
								</p>
								<p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('londonJuly_venue') }}
								</p>
								<v-list-item-subtitle class="subtitle-1 font-weight-bold text-wrap">Belsize Community Library (Gathering Leaves Hong Kong『一頁舟』)</v-list-item-subtitle>
								<v-list-item-subtitle class="subtitle-1">Antrim Grove</v-list-item-subtitle>
								<v-list-item-subtitle class="subtitle-1">London, NW3 4XP</v-list-item-subtitle>
								<v-list-item-subtitle class="subtitle-1">{{ $t('londonJuly_venueDistance_londonDec') }}</v-list-item-subtitle>
								</v-flex>
						  </v-layout>

						  <v-layout row wrap>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md11 pt-md-1 pt-sm-5>
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