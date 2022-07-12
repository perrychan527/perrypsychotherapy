<template>
    <div align="center" class="pt-md-8 pt-sm-8 pt-4 px-md-16 px-sm-10 mx-sm-4 ml-sm-8 px-6 ml-16">
      <v-card flat elevation="0" max-width="1300" >
        <v-row no-gutters class="flex-nowrap">

          <v-col cols="1" sm="1" md="1">
            <v-card flat>
              <div class="d-flex align-end flex-column mb-6">
                <router-link 
                style="text-decoration: none; color: inherit;"
                :to="{ name: 'socialDreamingAbout', params: { locale: $route.params.locale || 'en' }}">
                  <v-btn
                  class="overline text-capitalize"
                  color="grey darken-4"
                  plain
                >
                  About SDM
                  </v-btn>
                </router-link>
                <v-btn
                  disabled
                  class="overline text-capitalize"
                  color="grey darken-4"
                  plain
                >
                  -2022
                  </v-btn>
                <router-link 
                style="text-decoration: none; color: inherit;"
                :to="{ name: 'londonJuly', params: { locale: $route.params.locale || 'en' }}">
                  <v-btn
                  class="overline text-capitalize"
                  color="grey darken-4"
                  plain
                >
                  July, London
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
                  Sept, London
                  </v-btn>
                </router-link>
              </div>
            </v-card>
          </v-col cols="10" sm="10" md="10">
          <v-col><router-view></router-view>
          </v-col>
        </v-row>
      </v-card>
    </div>
</template>




<style>
.v-ripple__container {
  opacity: 0 !important;
}

</style>



                
                  
                </router-link>