<template>
  <v-container>
    <v-row id="news">
      <v-col>
        <v-row id="hero">
          
          <v-col cols=7>
            <h1>News and Media</h1>
            <div class="mt-10 d-flex justify-space-between align-center" style="max-width:600px;">
              <p class="title">Filter by:</p> 
              <Button secondary @click="showAll = true" class="filter px-2">All News</Button>
              <Button secondary @click="showAll = false" class="filter px-2">Press Releases</Button>
              <Button secondary @click="showAll = false" class="filter px-2">Press Mentions</Button>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols=4>
            <img src="../assets/news_page/bench_dude.svg" alt="news">
          </v-col>
        </v-row>

        <!-- all news cards section -->
        <v-row id="news-cards" class="mt-8">

          <!-- modularized NewsCard version -->
          <v-col cols="4" v-for="(card,i) in cardsToRender" :key="i"> 
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
import json from '../assets/medialist.json';

export default {
  components: {
    NewsCard,
    Button
  },
  // may not be necessary if lines below work out
  mounted() {
    this.cardsToRender = this.airtableList.slice();
  },
  // methods: {
  //   // all these methods currently generate errors "TypeError: Cannot read property 'filter' of undefined".
  //   // I suspect it is related to some sort of inner working of Vue related to passing data around that I'm not aware of
  //   showAll: () => {
  //     this.cardsToRender = this.newsCards.slice();
  //   },
  //   showPressReleases: () => {
  //     this.cardsToRender = this.filter(card => card.type === "press_release");
  //   },
  //   showPressMentions: () => {
  //     this.cardsToRender = this.newsCards.filter(card => card.type === "press_mention");
  //   }
  // },
  computed: {
    cardsToRender() {
      if (showAll) {
        this.cardsToRender = airtableList;
      } else {
        // just trying to get cards to disappear for now
        this.cardsToRender = [];
      }
    }
  },
  data: () => ({
    airtableList: json,
    cardsToRender: [],
    showAll: true
  }),
  head() {
    return {
      title: "News | Covid Watch"
    };
  },
};
</script>
