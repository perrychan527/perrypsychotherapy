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
	touchless
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
	  <v-tab class="overline text-capitalize">
        {{ $t('TAB5') }}
      </v-tab>
      <v-tab-item align="center" class="px-10 py-3 pt-md-7">
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
      <v-tab-item align="center" class="px-10 py-3 pt-md-7">
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
      <v-tab-item align="center" class="px-10 py-3 pt-md-7">
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
      
      <v-tab-item align="center" class="px-10 py-3 pt-md-7">
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
	  <v-tab-item align="center" class="px-0 py-3 px-sm-0">
        <v-card flat max-width="1350" elevation="0">
          <v-card-text class="text-left">
            <v-container class="px-md-1 px-0 py-md-0 py-0">

			
			




				<v-tabs vertical>
				  <v-tab class="overline text-capitalize fixed">
					About SDM
				  </v-tab>
				  <v-tab disabled class="overline text-capitalize fixed light-blue--text text--darken-4">
					-2022-
				  </v-tab>
				  <v-tab class="overline text-capitalize fixed">
					July, London
				  </v-tab>
				  <v-tab class="overline text-capitalize fixed">
					Aug, Online
				  </v-tab>
				  <v-tab class="overline text-capitalize fixed">
					Sept, London
				  </v-tab>

				  <v-tab-item align="left" class="px-0 py-0">
					<v-card flat max-width="1100" elevation="0" style="
					background: #FFFFFF;
					background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					">
					  <v-card-text class="text-left">
						<v-container class="px-md-10 px-5 py-md-10 py-5">
						  <v-layout row wrap>
							<v-flex xs12 sm12 md12>
							  <p class="overline text-capitalize light-blue--text text--darken-4">What is a Social Dreaming Matrix (SDM)?
							  </p>
							</v-flex>
							<v-flex xs12 sm12 md6>
							  <p class="subtitle-1">Lawrence (1999) pioneered the use of dream materials to illuminate social processes. Participants in a dream Matrix are invited to share their night dreams and to associate to the dreams through free associations, e.g, images, feelings, gut reactions, memories, thoughts, another dream, fragments of dreams, books, films, poems, etc.  Through the dreams and associations, we find links, make connections and discover new thoughts. In a Matrix, it’s about the dream, not the dreamer. And no dream is more important than any other.
							  </p>
							  <p class="subtitle-1">A Matrix is usually followed by a Dream Reflection Dialogue (DRD) where we explore and identify emotions, thoughts and themes that emerged in the Matrix, and thus underlying issues of social systems can be explored.
							  </p>
							</v-flex>
							<v-flex xs12 sm12 md6>
							<v-img class="mx-auto"
								  src="@/assets/mushroom2.png"
								  max-width="520"
								  max-height="400"
							></v-img>
							<p class="pt-md-0 pt-sm-3 pt- subtitle-3">Dreaming Mushrooms (Perry Chan 2022)
							</p>
						  </v-flex>
						  </v-layout>
						  
						  <v-layout row wrap>
							<v-flex xs12 sm12 md6 pt-md-8 pt-sm-5>
							<v-img class="mx-auto"
								  src="@/assets/dreamingfish.png"
								  max-width="600"
								  max-height="800"
							></v-img>
							<p class="pt-md-3 pt-sm-3 pt-3 pl-md-12 pl-12 pl-sm-12 subtitle-3">Dreaming fishes (Perry Chan 2022)
							</p>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4">{{ $t('APPTITLE2') }}
							  </p>
							  <p class="subtitle-1">COMING SOON</p>
							</v-flex>
						  </v-layout>
						  <v-layout row wrap>
							<v-flex sm0 xs0 md1>
							</v-flex>
							<v-flex xs12 sm12 md5 pt-md-2 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">Reference
							  </p>
							  <p class="caption">Lawrence, W. Gordon. "The contribution of social dreaming to socio-analysis." Socio-Analysis 1, no. 1 (1999): 18-33.</p>
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
				  <v-tab-item align="left" class="px-0 py-0">
				  </v-tab-item>
				  <v-tab-item align="left" class="px-0 py-0">
					<v-card flat max-width="1100" elevation="0" style="
					background: #FFFFFF;
					background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
					">
					  <v-card-text class="text-left">
						<v-container class="px-md-10 px-5 py-md-10 py-5">
						  <v-layout row wrap>
							<v-flex xs12 sm12 md12>
							  <p class="overline text-capitalize light-blue--text text--darken-4">‘Giving a Voice to the Haunting Ghosts’: Hong Kong’s Collective Trauma in Social Dreaming Matrix (SDM)
							  </p>
							</v-flex>
							<v-flex xs12 sm12 md6>
							  <p class="overline font-italic font-weight-regular text-capitalize light-blue--text text--darken-4">Intro: July 23, 2022, 11am-noon, Online
							  </p>
							  <p class="overline font-italic font-weight-regular text-capitalize light-blue--text text--darken-4">SDM: July 30 & 31, 2022, 11am-3pm, London (TBA)
							  </p>
							  <p class="subtitle-1">Are you from Hong Kong? What does it mean to be a Hongkonger today? Hong Kong is experiencing an unprecedented level of unrest. How has this ongoing collective trauma been impacting on, threatening and shaping Hongkongers’ sense of identity, psyche, social and cultural complex, and so on? Are you interested in exploring the recent collective trauma on a deeper level, unconsciously and collectively? And curious to experience a different kind of thinking space? 
							  </p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md5 pt-md-12>
								<v-card
								class="mx-auto"
								max-width="280"
								>
									<v-card-text>
									  <div>This is a FREE event, and the hosts are not paid for hosting this SDM.</div>
									  <p></p>
									  <div>Contact for any inquiries:</div>
									  <div class="text--primary">
										perrywtchan@protonmail.com
									  </div>
									</v-card-text>
								</v-card>
						  </v-flex>
						  </v-layout>
						  
						  <v-layout row wrap>
							<v-flex xs12 sm12 md5 pt-md-2 pt-sm-5>
							<v-img class="mx-auto"
								  src="@/assets/mushroom.png"
								  max-width="520"
								  max-height="400"
							></v-img>
							<p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">Dreaming Mushrooms (Perry Chan 2022)
							</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-5 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4"> What is a Social Dreaming Matrix (SDM)?
							  </p>
							  <p class="subtitle-1">To learn more about SDM, please refer to About SDM.</p>
							  <p class="subtitle-1">In this SDM, no previous experience and knowledge of SD is required.  We are hosting this weekend of 4 Social Dreaming Matrices in a comfortable setting, and near cafes where we will be able to take our lunch break.
							  </p>
							</v-flex>
						  </v-layout>
						  <v-layout row wrap>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md6 pt-md-2 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">Can I participate?
							  </p>
							  <p class="subtitle-1">We are inviting 10 people to join this Matrix. You are invited if you:</p>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">•	are interested in exploring the Hong Kong’s collective trauma</v-list-item-subtitle>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">•	are perceived yourself as a Hongkonger</v-list-item-subtitle>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">•	are over 18 years old</v-list-item-subtitle>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">•	can communicate in English</v-list-item-subtitle>
							  <v-list-item-subtitle class="subtitle-1 text-wrap">•	are willing to share and engage with dreams or associations to whatever emerges in the Matrix to all participants</v-list-item-subtitle>
							  <p></p>
							  <p class="subtitle-1"> SDM is NOT therapy. It is a safe and non-confrontational space for us to share dreams and other associated thoughts. Participants need to take responsibility for their level of participation and well-being.</p>
							<p class="overline text-capitalize light-blue--text text--darken-4">Venue
							</p>
							  <p class="subtitle-1">Central London (exact location TBA)</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md4 pt-md-2 pt-sm-8 pt-7>
									<p class="overline text-capitalize light-blue--text text--darken-4 pt-5">Agenda
									</p>
									<v-row>
									  <v-col sm="9">
										<v-card
										  class="pa-2"
										  outlined
										  tile
										>
										  July 23 (Sat) (Online)
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
											  11:00-noon
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
											  Introduction
											</v-card>
										  </v-col>
										</v-row>
										<v-card
										  class="pa-2"
										  outlined
										  tile
										>
										  July 30 (Sat) & 31 (Sun) (In-person)
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
											  11:00-11:10
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
											  Check-in
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
											  11:10-11:50
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
											  11:50-12:10
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
											  12:10-13:00
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
											  13:00-14:40
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
											  14:40-15:00
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
									<p class="pt-md-3 pt-sm-3 pt-3 caption">Note: DRD refers to Dream Reflection Dialogue. To learn more, please refer to About SDM; Participants should arrive at 10:45am so that the SDM can begin promptly at 11am.
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
							  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">Confidentiality
							  </p>
							  <p class="subtitle-1">No personal information will be collected and stored. The introductory session and the SD sessions will NOT be audio- or video- recorded. The hosts will take notes or draw during the sessions and this process will be digitally recorded in the device (only the screen).</p>
							  <p class="subtitle-1">However, any personal details and any elements which can be associated to the identity of any participants will be omitted. It is every participant’s responsibility, including the hosts, if speaking of thoughts and idea from within the Matrix, to anonymous them, and have respect for confidentiality.</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md11 pt-md-8 pt-sm-5>
							  <p class="overline text-capitalize light-blue--text text--darken-4 pt-5">About the Hosts
							  </p>
							  </v-flex>
							  <v-flex sm1 md1>
							  </v-flex>
							  <v-flex xs12 sm12 md4 pt-sm-5>
							  <p class="subtitle-1">Perry WT Chan has worked as a relational psychotherapist in NGOs and privately, in the UK and remotely in HK. He is also a counselling tutor and a researcher at the University of Edinburgh. He is particularly interested in early relational (childhood) trauma, and societal collective trauma.</p>
							</v-flex>
							<v-flex sm1 md1>
							</v-flex>
							<v-flex xs12 sm12 md4 pt-sm-5>
							  <p class="subtitle-1">Claire Manson, an artist and art psychotherapist has worked in the NHS and independent sector for over 40 years. She co-founded 'Studio Upstairs', a working arts studio and therapeutic space and has also worked, and volunteered, and continues to do so as a psychotherapist for human rights organisations.  </p>
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
				  </v-tab-item>
				  <v-tab-item>
					<v-card flat>
					  <v-card-text>
						<p>
						COMING SOON
						</p>
					  </v-card-text>
					</v-card>
				  </v-tab-item>
				  <v-tab-item>
					<v-card flat>
					  <v-card-text>
						<p>
						COMING SOON
						</p>
					  </v-card-text>
					</v-card>
				  </v-tab-item>
				</v-tabs>






              

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
