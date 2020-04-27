<template>
  <v-container>
    <v-row id="news">
      <v-col>
        <v-row id="hero">
          
          <v-col cols=7>
            <h1>News and Media</h1>
            <div class="mt-10 d-flex justify-space-between align-center" style="max-width:500px;">
              <p class="title">Filter by:</p> 
              <p @click="showAll" class="filter px-2">All News</p>
              <p @click="showPressReleases" class="filter px-2">Press Releases</p>
              <p @click="showPressMentions" class="filter px-2">Press Mentions</p>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols=4>
            <img src="../assets/news_page/bench_dude.svg" alt="news">
          </v-col>
        </v-row>

        <!-- all news cards section -->
        <v-row id="news-cards">

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

    .filter {
      font-weight: 500;
      color: var(--v-primary-base);
    }

    .filter:hover {
      color: var(--v-aqua-base);
      cursor: pointer;
    }
  }

</style>


<script>
import NewsCard from "../components/NewsCard.vue";

export default {
  components: {
    NewsCard
  },
  mounted() {
    this.cardsToRender = this.newsCards.slice();
  },
  methods: {
    // all these methods currently generate errors "TypeError: Cannot read property 'filter' of undefined".
    // I suspect it is related to some sort of inner working of Vue related to passing data around that I'm not aware of
    showAll: () => {
      this.cardsToRender = this.newsCards.slice();
    },
    showPressReleases: () => {
      this.cardsToRender = this.filter(card => card.type === "press_release");
    },
    showPressMentions: () => {
      this.cardsToRender = this.newsCards.filter(card => card.type === "press_mention");
    }
  },
  head() {
    return {
      title: "News | Covid Watch"
    };
  },
  // this was a hacky attempt to resolve the errors w the methods above
  // computed: {
  //   newsCardsCopy() {
  //     return { data:newsCards }
  //   }
  // },
  data: () => ({
    cardsToRender: undefined,
    newsCards: [
      {
        type: "press_mention",
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Khari Johnson",
        outlet: "Venture Beat",
      },
      {
        type: "press_mention",
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Khari Johnson",
        outlet: "Venture Beat",
      },
      {
        type: "press_mention",
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Khari Johnson",
        outlet: "Venture Beat",
      },
      {
        type: "press_release",
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Rhys Fenwick",
        outlet: "Covid Watch",
      },
      {
        type: "press_release",
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Rhys Fenwick",
        outlet: "Covid Watch",
      },
      {
        type: "press_release",
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Rhys Fenwick",
        outlet: "Covid Watch",
      }
    ]
  })
};
</script>
