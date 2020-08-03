<template>
  <v-row id="get-support">
    <v-col cols="12" class="py-0">
      <!-- Hero -->
      <v-row id="hero" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h1 class="mb-5">Get Support</h1>
            <div class="subtitle">
              <p>
                Running into some technical questions with Covid Watch's
                solution? You've come to the right place.
              </p>
              <p>
                You can simply email
                <a to="mailto:support@covidwatch.org">support@covidwatch.org</a>
                or user our issue report form for us to investigate further.
                Either way, we will respond shortly.
              </p>
              <v-col cols="10" :sm="6" :md="4" class="mb-4">
                <Button
                  primary
                  href
                  to="https://covidwatch.zendesk.com/hc/en-us/requests/new"
                  >Report Issue</Button
                >
              </v-col>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
