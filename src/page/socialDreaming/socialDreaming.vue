<template>
    <div align="center" class="px-md-5 px-sm-0 px-4 mr-md-5">
      <v-card flat elevation="0" max-width="1250" class="pr-md-5">
        <v-card-text class="text-left">
          <v-container class="px-md-10 px-5 py-md-7 py-sm-7 py-3">
            <v-layout row wrap>
              <v-flex xs2 sm2 md2 class="white">
                <div class="d-flex align-end flex-column mb-6 ">
                  <v-btn
                    disabled
                    class="overline text-capitalize"
                    color="grey darken-4"
                    plain
                  >
                  </v-btn>
                  <router-link text-wrap word-wrap
                  style="text-decoration: none; color: inherit;"
                  :to="{ name: 'socialDreamingAbout', params: { locale: $route.params.locale || 'en' }}">
                    <v-btn
                    class="overline text-capitalize"
                    color="grey darken-4"
                    plain
                    text-wrap
                  >
                    {{ $t('tabAboutSdm') }}
                    </v-btn>
                  </router-link>
                  <v-btn
                    disabled
                    class="overline text-capitalize"
                    color="grey darken-4"
                    plain
                  >
                    -2022-
                  </v-btn>
                  <router-link 
                  style="text-decoration: none; color: inherit;"
                  :to="{ name: 'londonJuly', params: { locale: $route.params.locale || 'en' }}">
                    <v-btn
                    class="overline text-capitalize"
                    color="grey darken-4"
                    plain
                  >
                    {{ $t('tabLondonJuly') }}
                    </v-btn>
                  </router-link>
                  <router-link 
                  style="text-decoration: none; color: inherit;"
                  :to="{ name: 'londonSeptember', params: { locale: $route.params.locale || 'en' }}">
                    <v-btn
                    class="overline text-capitalize"
                    color="grey darken-4"
                    plain
                  >
                    {{ $t('tabLondonDec') }}
                    </v-btn>
                  </router-link>
                  <v-btn
                    disabled
                    class="overline text-capitalize"
                    color="grey darken-4"
                    plain
                  >
                    -2023-
                  </v-btn>
                  <router-link 
                  style="text-decoration: none; color: inherit;"
                  :to="{ name: 'hkMay', params: { locale: $route.params.locale || 'en' }}">
                    <v-btn
                    class="overline text-capitalize"
                    color="grey darken-4"
                    plain
                  >
                    {{ $t('tabHkMay') }}
                    </v-btn>
                  </router-link>
                </div>
              </v-flex>
              <v-flex xs10 sm10 md10>
                <router-view></router-view>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </div>
</template>




<style>
.v-ripple__container {
  opacity: 0 !important;
}
.v-btn {
  min-height: 50px;
  height: 100% !important;
}
.v-btn__content {
  width: 100%; white-space: normal;
}

</style>