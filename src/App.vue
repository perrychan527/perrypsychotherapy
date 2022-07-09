<template>
  <v-app>
    <p>
      <v-card>

        <router-link :to="{ name: 'default', params: { locale: $route.params.locale }}">Home</router-link>

        <router-link :to="{ name: 'test', params: { locale: $route.params.locale || 'en' }}">Test</router-link>

        <router-link :to="{ name: 'test2', params: { locale: $route.params.locale || 'en' }}">Test 2</router-link>

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
          this.$i18n.locale = locale
          
          var routeLocale = this.$route.params.locale
          if (routeLocale != "" && routeLocale != locale){
            var newPath = "/" + locale + this.$route.fullPath.slice(3)
            this.$router.push({ path: newPath })
          }
      },
    },
    watch:{
        $route (to, from){
          
          var locale = this.$route.params.locale

          if (locale != ""){
            for(var i = 0; i <this.languages.length; i++) {
              if (this.languages[i].locale == locale){
                this.languageSelected = this.languages[i]
                this.$i18n.locale = locale
                break
              }
            }
          }
        }
    }
  }
</script>