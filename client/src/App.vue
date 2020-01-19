<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2016/05/cc-site-icon-40x40.png"
          transition="scale-transition"
          width="40"
        />


      </div>

      <h1>Compliment Collector</h1>
      <v-spacer></v-spacer>


    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
