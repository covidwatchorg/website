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
              <v-select :items="items"
                @input="setSelected" />
            </div>
            <div id="content">{{ content }}</div>
          </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
function renderContentForState(theState) {
  // This should render out content with a link to the specific petition for the selected state.
  return `You have selected ${theState}.`;
} 

export default {
  data: () => {
    return {
      // Only a short list of states right now for early review
      items: [ "California", "Idaho", "Montana"],
      content: ''
    }
  },
  methods: {
    setSelected(value) {
      this.content = renderContentForState(value)
    }
  }
}
</script>