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
                You can simply email
                <a href="mailto:support@covidwatch.org"
                  >support@covidwatch.org</a
                >
                or use our issue report form for us to investigate further - see
                button below.
              </p>
              <p>Either way, we will respond shortly.</p>
              <v-row>
                <v-col cols="10" :sm="6" :md="4" class="my-4">
                  <Button
                    primary
                    href="https://covidwatch.zendesk.com/hc/en-us/requests/new"
                    >Report Issue</Button
                  >
                </v-col>
              </v-row>
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
