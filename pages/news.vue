<template>
  <v-container>
    <v-row id="news">
      <v-col>
        <v-row id="hero">
          <v-col cols="7">
            <h1>News and Media</h1>
            <div
              class="mt-10 d-flex justify-space-between align-center"
              style="max-width:600px;"
            >
              <p class="title">Filter by:</p>
              <Button secondary @click="showAll = true" class="filter px-2"
                >All News</Button
              >
              <Button secondary @click="showAll = false" class="filter px-2"
                >Press Releases</Button
              >
              <Button secondary @click="showAll = false" class="filter px-2"
                >Press Mentions</Button
              >
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="4">
            <img src="../assets/news_page/bench_dude.svg" alt="news" />
          </v-col>
        </v-row>

        <!-- all news cards section -->
        <v-row id="news-cards" class="mt-8">
          <!-- modularized NewsCard version -->
          <v-col cols="4" v-for="(card, i) in cardsToRender" :key="i">
            <NewsCard :card="card"></NewsCard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#news {
  #hero {
    margin-top: 50px;
  }
}
</style>

<script>
import NewsCard from "../components/NewsCard.vue";
import Button from "../components/Button.vue";
import json from "../assets/medialist.json";

export default {
  components: {
    NewsCard,
    Button
  },
  computed: {
    cardsToRender() {
      return this.showAll ? this.airtableList : [];
    }
  },
  data: () => ({
    airtableList: json,
    showAll: true
  }),
  head() {
    return {
      title: "News | Covid Watch"
    };
  }
};
</script>
