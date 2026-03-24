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
                <v-flex xs12 sm12 md12>
                  <p class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.1s"><span class="handwritten-strike">{{ $t('APPTITLE1') }}</span>
                  </p>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('APP1') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('APP2_1') }}
				  <v-tooltip bottom max-width="320" open-on-hover open-on-focus open-on-click>
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          class="term-tooltip"
                          v-bind="attrs"
                          v-on="on"
                          tabindex="0"
                        >{{ $t('APP2_2') }}</span>
					  </template>
                      <span>
                        {{ $t('JUNGINTRO') }}
                      </span>
					</v-tooltip>
					
					{{ $t('APP2_3') }}
					
				    <v-tooltip bottom max-width="320" open-on-hover open-on-focus open-on-click>
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          class="term-tooltip"
                          v-bind="attrs"
                          v-on="on"
                          tabindex="0"
                        >{{ $t('APP2_4') }}</span>
                      </template>
                      <span>
                        {{ $t('DELEUZEINTRO') }}
                      </span>
                    </v-tooltip>
					
					{{ $t('APP2_5') }}
					
                  </p>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.3s">{{ $t('APP2_6') }}
                  </p>
                </v-flex>
				
				
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 class="fade-up" style="transition-delay: 0.35s">
                <v-img class="mx-auto"
                      src="@/assets/2people2.jpg"
					  alt="Two people navigating in the mist, exploring the not-knowing, like what happens in a therapy session"
                      max-width="520"
                      max-height="400"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC3') }}
                </p>
              </v-flex>
              </v-layout>
              
              <v-layout row wrap>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-5 class="fade-up" style="transition-delay: 0.1s">
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
                  <p class="overline text-capitalize light-blue--text text--darken-4 fade-up" style="transition-delay: 0.2s">{{ $t('APPTITLE2') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('APP3') }}</p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.3s">{{ $t('APP4') }}
                  </p>
                </v-flex>
              </v-layout>
			  
			  
              <v-layout row wrap>
                <v-flex xs12 sm12 md6 pt-md-2 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5 fade-up" style="transition-delay: 0.1s">{{ $t('APPTITLE3') }}
                  </p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-9 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.2s">{{ $t('APP5_1') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-9 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.225s">{{ $t('APP5_2') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-9 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.3s">{{ $t('APP5_3') }}</v-list-item-subtitle>
				  <p></p>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-15 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.325s">{{ $t('APP5_4') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-15 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.35s">{{ $t('APP5_5') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-15 pr-md-8 pr-sm-8 pr-8 text-wrap fade-up" style="transition-delay: 0.375s">{{ $t('APP5_6') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="text-right subtitle-1 pb-md-3 pb-3 pb-sm-3 pt-md-2 pt-2 pt-sm-2 text-wrap fade-up" style="transition-delay: 0.4s">{{ $t('APP6') }}</v-list-item-subtitle>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.425s">{{ $t('APP7') }}</p>
                </v-flex>
				
                <v-flex sm1 md1>
                </v-flex>
				
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7 class="fade-up" style="transition-delay: 0.5s">
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
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7 class="fade-up" style="transition-delay: 0.1s">
                <v-img
                      src="@/assets/2birds.jpg"
					  alt="Therapeutic Process"
                      max-width="570"
                      max-height="450"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC6') }}
                </p>
              </v-flex>
                
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md6 pt-md-8 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5 fade-up" style="transition-delay: 0.2s">{{ $t('APPTITLE4') }}
                  </p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pb-md-2 pb-sm-2 pb-2 fade-up" style="transition-delay: 0.225s">{{ $t('APP9') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8 fade-up" style="transition-delay: 0.25s">{{ $t('APP10') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8 fade-up" style="transition-delay: 0.275s"">{{ $t('APP11') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8 fade-up" style="transition-delay: 0.3s">{{ $t('APP12') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8 fade-up" style="transition-delay: 0.325s">{{ $t('APP13') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8 pb-md-2 pb-sm-2 pb-2 fade-up" style="transition-delay: 0.35s">{{ $t('APP14') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-16 pl-sm-8 pl-8 fade-up" style="transition-delay: 0.375s">{{ $t('APP15') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-16 pl-sm-8 pl-8 fade-up" style="transition-delay: 0.4s">{{ $t('APP16') }}</v-list-item-subtitle>
                  <p></p>
				  <p class="subtitle-1 fade-up" style="transition-delay: 0.45s">{{ $t('APP17') }}</p>
				</v-flex>

              </v-layout>
			  
              <v-layout row wrap>
                <v-flex sm0 xs0 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-2 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5 fade-up" style="transition-delay: 0.1s">{{ $t('APPTITLE5') }}
                  </p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('APP18') }}</p>
                  <p class="subtitle-1 fade-up" style="transition-delay: 0.25s">{{ $t('APP19') }}</p>
                  
                </v-flex>
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7 class="fade-up" style="transition-delay: 0.3s">
                <v-img
                      src="@/assets/foggycity.jpg"
                      max-width="570"
                      max-height="450"
                ></v-img>
                <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC5') }}
                </p>
              </v-flex>
              </v-layout>
			  
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.15s">{{ $t('COPY1') }}</p>
                  <p class="text-center subtitle-2 font-weight-regular fade-up" style="transition-delay: 0.2s">{{ $t('E2') }}</p>
                </v-flex>
              </v-layout>
			  
            </v-container>
          </v-card-text>
        </v-card>
  </div>
</template>

<style scoped>
.handwritten-strike {
  position: relative;
  display: inline-block;
  padding: 0 4px;
}

.handwritten-strike::before,
.handwritten-strike::after {
  content: "";
  position: absolute;
  pointer-events: none;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* primary rough strike group: multiple uneven straight-ish strokes */
.handwritten-strike::before {
  left: -5%;
  right: -5%;
  top: 50%;
  height: 20px;
  transform: translateY(-50%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M2 17 C15 16 35 14 65 11 C95 8 150 6 198 3' stroke='%23222' stroke-opacity='0.7' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3Cpath d='M5 18 C30 17 70 14 110 12 C150 10 180 8 196 5' stroke='%23222' stroke-opacity='0.3' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}

.handwritten-strike::after {
  left: -5%;
  right: -5%;
  top: 50%;
  height: 20px;
  transform: translateY(-20%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M4 16 C50 15 100 13 150 11 C175 10 190 9 197 7' stroke='%23222' stroke-opacity='0.15' stroke-width='1.0' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}


.term-tooltip {
  text-decoration: underline dotted;
  text-underline-offset: 3px;
  cursor: help;
  font-weight: 500;
}
</style>