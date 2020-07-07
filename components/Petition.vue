<template>
  <div v-if="state">
    <div v-if="state.progress">
      {{ state.progress }}
    </div>
    <div v-else-if="state.link">
      {{ state.text }}'s survey can be reached at
      <a :href="state.link">{{ state.link }}</a>
    </div>
    <div v-else>
      We don't have a survey for {{ state.text }}. Please create one at
      <a href="https://change.org">Change.org</a> and send it to us at
      <a href="mailto:contact@covidwatch.org">contact@covidwatch.org</a>
    </div>
  </div>
</template>

<script>
import json from "../assets/data/statepetitions.json";

export default {
  name: "Petition",
  props: {
    theState: String,
  },
  computed: {
    state: function () {
      return json.find((x) => x.value === this.theState);
    },
  },
};
</script>
