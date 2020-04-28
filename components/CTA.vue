<!-- for an external link, simply wrap the <CTA> element in an <a>.  Example:

<a href="https://www.whitepaper.com/" alt="whitepaper">
    <CTA pdf content="Read the Whitepaper"></CTA>
</a>

-->


<template>
    <v-row class="cta-container my-12">
        <v-col cols="4">
            <Button secondary :nuxt="nuxt" :to="to" :href="href" :pdf="pdf" :content="content">
                <img
                    v-if="pdf"
                    class="mr-3"
                    style="height:20px;"
                    src="../assets/home_page/pdf_logo.svg"
                    alt="pdf"
                />
                {{content}}
            </Button>
        </v-col>
    </v-row>
</template>


<style lang="scss" scoped>

  .cta-container {
    display: flex;
    justify-content: center;

    // not sure why 'Read the whitepaper' is text-transformed to be uppercase in the whitepaper download case.  I played w some different ways to fix it without luck
    // text-transform: none;
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

}
</script>