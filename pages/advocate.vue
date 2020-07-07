<template>
  <v-container grid-list-xs>
    <v-row id="header" class="first-row" :class="[pageSectionClass, mobileMarginsClass]">
      <v-col cols="12" :md="7">
        <div class="mb-12">
          <h1 class="mb-5">Advocate for your State</h1>
          <div class="subtitle">
            <p>
              Covid Watch leverages the <a href="https://www.apple.com/covid19/contacttracing">Privacy-Preserving Contact Tracing</a>
              technology developed by Apple and Google. Adoption of this technology happens state by state. Click below to choose your state.
            </p>
          </div>
          <div id="stateselector">
            <v-select :items="items" v-model="theState" />
          </div>
          <Petition :theState="theState"></Petition>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Petition from "../components/Petition.vue";
import json from "../assets/data/statepetitions.json";

export default {
  components:{
    Petition
  },
  data: () => {
    return {
      theState: null,
      items: json
    }
  },
}
</script>