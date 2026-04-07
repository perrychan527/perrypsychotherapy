<template>
  <div align="center" class="pt-md-8 pt-sm-8 pt-4 px-md-10 px-sm-9 px-4">
    <v-card flat max-width="1100" elevation="0" style="
            background: #FFFFFF;
            background: -webkit-linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
            background: linear-gradient(to bottom, #ECEFF1, #F5F5F5, #FFFFFF);
            ">
            <v-card-text class="text-left">
              <v-container class="px-md-10 px-5 py-md-10 py-5">
                <router-link
                  :to="{ name: 'sessioninfo', params: { locale: $route.params.locale || 'en' } }"
                  class="subtitle-2 grey--text text-decoration-none back-link fade-up"
                  style="transition-delay: 0.05s">
                  {{ $t('SESSION_BACK') }}
                </router-link>
                <h1 class="sr-only">{{ $t('H1_SESSION_INTL') }}</h1>
                <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-5 pb-2 fade-up" style="transition-delay: 0.08s">{{ $t('SESSION_HEADING_INTL') }}</h2>
                <v-layout row wrap pt-md-6 pt-sm-4 pt-4>
                  <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5 class="fade-up" style="transition-delay: 0.1s">
                    <v-img class="mx-auto"
                          src="@/assets/lighthouse2.jpg"
                          max-width="520"
                          max-height="400"
                    ></v-img>
                    <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC8') }}</p>
                  </v-flex>
                  <v-flex sm1 md1></v-flex>
                  <v-flex xs12 sm12 md6>
                    <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-1 session-heading fade-up" style="transition-delay: 0.15s">
                      {{ $t('SESSION_INTL_FEES_TITLE') }}
                    </h2>
                    <p class="subtitle-1 fade-up" style="transition-delay: 0.2s">{{ $t('SESSION_INTL_FEES_INTRO') }}</p>
                    <p class="subtitle-1 fade-up" style="transition-delay: 0.22s">{{ $t('SESSION_INTL_FEE_FIRST') }}<br>{{ $t('SESSION_INTL_FEE_FOLLOWING') }}</p>
                    <p class="subtitle-1 fade-up session-para" style="transition-delay: 0.25s">{{ $t('SESSION_INTL_INTRO') }}</p>
                  </v-flex>
                  <v-flex xs12 sm12 md6>
                    <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-7 session-heading fade-up" style="transition-delay: 0.1s">
                      {{ $t('SESSION_INTL_FIRST_TITLE') }}
                    </h2>
                    <p class="subtitle-1 fade-up session-para" style="transition-delay: 0.15s">{{ $t('SESSION_INTL_FIRST_P1') }}</p>
                  </v-flex>
                  <v-flex sm1 md1></v-flex>
                  <v-flex xs12 sm12 md5 pt-md-3 pt-sm-5 pt-5 class="fade-up" style="transition-delay: 0.25s">
                    <v-img class="mx-auto"
                          src="@/assets/mistyforest.jpg"
                          :alt="$t('ALT_SESSION_FOREST')"
                          max-width="520"
                          max-height="400"
                    ></v-img>
                    <p class="pt-md-3 pt-sm-3 pt-3 subtitle-3">{{ $t('PIC7') }}</p>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <h2 class="overline text-capitalize light-blue--text text--darken-4 pt-7 session-heading fade-up" style="transition-delay: 0.1s">
                      {{ $t('SESSION_INTL_HOW_TITLE') }}
                    </h2>
                    <p class="subtitle-1 fade-up session-para" style="transition-delay: 0.15s">{{ $t('SESSION_INTL_HOW_P1') }}</p>
                    <p class="subtitle-1 fade-up session-para" style="transition-delay: 0.2s">{{ $t('SESSION_INTL_HOW_P2') }}</p>
                  </v-flex>
                </v-layout>
                <v-layout row wrap justify-space-around pt-md-16 pt-sm-5 pt-5>
                  <v-flex xs12 md12 class="d-flex flex-column-reverse fade-up" style="transition-delay: 0.1s">
                    <p class="text-center subtitle-2 font-weight-regular">{{ $t('COPY1') }}</p>
                    <p class="text-center subtitle-2 font-weight-regular">{{ $t('E3') }}</p>
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
      title: this.$t('META_SESSION_INTL_TITLE'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('META_SESSION_INTL_DESC') }
      ]
    }
  }
}
</script>


<style scoped>
.back-link {
  transition: color 0.2s;
}
.back-link:hover {
  color: #555 !important;
}

@media (min-width: 601px) {
  .session-heading {
    margin-bottom: 25px;
  }
  .session-para {
    line-height: 2.4;
  }
}

@media (max-width: 599px) {
  .session-para {
    line-height: 2.2;
  }
  .session-heading {
    margin-bottom: 16px;
  }
}
</style>
