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
                  <p class="overline text-capitalize light-blue--text text--darken-4"><span class="handwritten-strike">{{ $t('APPTITLE1') }}</span>
                  </p>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <p class="subtitle-1">{{ $t('APP1') }}
                  </p>
                  <p class="subtitle-1">{{ $t('APP2_1') }}
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
				  <p class="subtitle-1">{{ $t('APP2_6') }}
                  </p>
                </v-flex>
				
				
                <v-flex sm1 md1>
                </v-flex>
                <v-flex xs12 sm12 md5>
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
                <v-flex xs12 sm12 md6 pt-md-2 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('APPTITLE3') }}
                  </p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-9 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('APP5_1') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-9 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('APP5_2') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-9 pl-sm-8 pl-9 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('APP5_3') }}</v-list-item-subtitle>
				  <p></p>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-15 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('APP5_4') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-15 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('APP5_5') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-15 pl-sm-14 pl-15 pr-md-8 pr-sm-8 pr-8 text-wrap">{{ $t('APP5_6') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="text-right subtitle-1 pb-md-3 pb-3 pb-sm-3 pt-md-2 pt-2 pt-sm-2 text-wrap">{{ $t('APP6') }}</v-list-item-subtitle>
                  <p class="subtitle-1">{{ $t('APP7') }}</p>
                  
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
                <v-flex xs12 sm12 md5 pt-md-16 pt-sm-8 pt-7>
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
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('APPTITLE4') }}
                  </p>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-8 pl-sm-8 pl-8 pb-md-2 pb-sm-2 pb-2">{{ $t('APP9') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8">{{ $t('APP10') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8">{{ $t('APP11') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8">{{ $t('APP12') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8">{{ $t('APP13') }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-13 pl-sm-8 pl-8 pb-md-2 pb-sm-2 pb-2">{{ $t('APP14') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-16 pl-sm-8 pl-8">{{ $t('APP15') }}</v-list-item-subtitle>
				  <v-list-item-subtitle class="font-italic subtitle-1 pl-md-16 pl-sm-8 pl-8">{{ $t('APP16') }}</v-list-item-subtitle>
                  <p></p>
				  <p class="subtitle-1">{{ $t('APP17') }}</p>
				</v-flex>

              </v-layout>
			  
              <v-layout row wrap>
                <v-flex sm0 xs0 md1>
                </v-flex>
                <v-flex xs12 sm12 md5 pt-md-2 pt-sm-5>
                  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">{{ $t('APPTITLE5') }}
                  </p>
                  <p class="subtitle-1">{{ $t('APP18') }}</p>
                  <p class="subtitle-1">{{ $t('APP19') }}</p>
                  
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
			  
              <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                <v-flex xs12 md12 class="d-flex flex-column-reverse">
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY2') }}</p>
                  <p class="text-center subtitle-2 font-weight-regular">{{ $t('E2') }}</p>
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
  left: -24%;
  right: -10%;
  top: 50%;
  height: 22px;
  transform: translateY(-62%) rotate(-8deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 310 24'%3E%3Cpath d='M2 22 L24 8' stroke='%23131313' stroke-opacity='0.72' stroke-width='2.7' fill='none' stroke-linecap='round'/%3E%3Cpath d='M16 16 L306 8' stroke='%23131313' stroke-opacity='0.78' stroke-width='2.8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M14 13 L300 11' stroke='%23131313' stroke-opacity='0.56' stroke-width='1.9' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20 18 L296 10' stroke='%23131313' stroke-opacity='0.40' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}

/* secondary pass for messy hand-written layering */
.handwritten-strike::after {
  left: -16%;
  right: -14%;
  top: calc(50% + 1px);
  height: 20px;
  transform: translateY(-60%) rotate(-6deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 20'%3E%3Cpath d='M8 14 L274 9' stroke='%23131313' stroke-opacity='0.36' stroke-width='1.7' fill='none' stroke-linecap='round'/%3E%3Cpath d='M10 16 L270 11' stroke='%23131313' stroke-opacity='0.24' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}


.term-tooltip {
  text-decoration: underline dotted;
  text-underline-offset: 3px;
  cursor: help;
  font-weight: 500;
}
</style>