<template>
  <v-app>
    <p>
	  <v-card>
      <v-btn>
	  <router-link to="/">Home</router-link>
	  </v-btn>
      <router-link to="/test">Test</router-link>
	  <router-link to="/test2">Test2</router-link>
      </v-card>
    </p>

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

    <router-view></router-view>
  </v-app>
</template>

<script>
import utility from './js/utility/utility'

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
      }
    },
    methods : {
      changeLocale: function(locale){
          utility.setCookie("locale", locale, 365)
          this.$i18n.locale = locale
      }
    },
    created: function () {
      var cookieLocale = utility.getCookie("locale")
      if (cookieLocale != ""){
        for(var i = 0; i <this.languages.length; i++) {
          if (this.languages[i].locale == cookieLocale){
            this.languageSelected = this.languages[i]
            break
          }
        }
      }
    }
  }
</script>