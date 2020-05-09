<template>
 <v-container grid-list-xs> 
    <v-row id="article">
      <!-- First row-->
      <v-row :class="pageSectionClass">
        <v-col cols="12" :md="12">
            <div class="mb-12">
                <h1 class="mb-5">Read our Whitepaper</h1>

                <div class="subtitle">
                    <p>
                        Read our foundational whitepaper proposing the Covid Watch solution in detail.  Published March 20, 2020.
                    </p>
                </div>
            </div>
        </v-col>
      </v-row>
    </v-row>
    <CTA pdf content="Read the Whitepaper" href="/covid_watch_whitepaper.pdf"></CTA>
 </v-container>
</template>

<script>
import Button from "../components/Button.vue";
import CTA from "../components/CTA.vue";

export default {
    components: {
        Button,
        CTA,
    }
}
</script>