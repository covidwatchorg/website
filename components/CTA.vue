<!-- for an external link, example:

    <CTA pdf content="Read the whitepaper" href="/covid_watch_whitepaper.pdf"></CTA>

-->

<template>
  <v-row class="cta-container my-12">
    <v-col :md="4" sm="6" cols="12">
      <Button class="cta-button" secondary :nuxt="nuxt" :to="to" :href="href">
        <img
          v-if="pdf"
          class="mr-3"
          style="height:20px;"
          src="../assets/home_page/pdf_logo.svg"
          alt="pdf"
        />
        <!-- <a> tag if it's a pdf -->
        <a target="_blank" :href="href" v-if="pdf" style="text-transform:none;">{{content}}</a>
        <!-- else just display name of button normally -->
        <div v-else>{{content}}</div>
      </Button>
    </v-col>
  </v-row>
</template>


<style lang="scss" scoped>
.cta-container {
  display: flex;
  justify-content: center;
}

.cta-button {
  min-width: 300px;
}
</style>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button
  },
  props: {
    href: String,
    nuxt: Boolean,
    to: String,
    pdf: Boolean,
    content: String
  }
};
</script>
