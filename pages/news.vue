<template>
  <v-container>
    <v-row id="news">
      <v-col>
        <v-row id="hero">
          
          <v-col cols="7">
            <h1>News and Media</h1>
            <div class="mt-10 d-flex justify-space-between align-center" style="max-width:500px;">
              <p class="title">Filter by:</p> 
              <p @click="showAll" class="filter">All News</p>
              <p @click="showPressReleases" class="filter">Press Releases</p>
              <p @click="showPressMentions" class="filter">Press Mentions</p>
            </div>
          </v-col>

          <v-col cols="4">
            <img src="../assets/news_page/bench_dude.svg" alt="news">
          </v-col>
        </v-row>


        <v-row id="news-cards">

          <!-- modularized version -->
          <v-col cols="4" v-for="(card,i) in cardsToRender" :key="i"> 
              <NewsCard :card="card"></NewsCard>
          </v-col>


          <!-- non-modularized version (to be removed, just for reference currently just in case) -->
            <!-- <v-col cols="4" v-for="(card,i) in newsCards" :key="i">  -->
              <!-- <NewsCard type="card.type" date="card.date" url="card.url" title="card.title" author="card.author" outlet="card.outlet"></NewsCard> -->
                    <!-- <v-card class="news-card">
                          <img style="position:absolute;" src="../assets/home_page/news_cards_top_accent.svg" alt="stripe">
                          <div class="d-flex py-6 px-6 justify-space-between">
                            <img src="../assets/home_page/news_icon.svg" alt=news>
                            <div class="news-date">{{card.date}}</div>
                          </div>
                          <div class="pa-6">
                            <a :href="card.url" class="primary--text" style="text-decoration:none;font-weight:bold;">{{card.title}} <img style="height:10px;" src="../assets/home_page/arrow_icon.svg" alt="arrow"></a>
                            <div class="primary--text float-right mt-10">
                              - {{card.author}}, <span style="font-style:italic;"> {{card.outlet}} </span>
                            </div>
                        </div>
                    </v-card> -->
                    <!-- replace w NewsCard component above -->
            <!-- </v-col> -->

            

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
      color: "primary";
    }

    .filter:hover {
      color: #F05452;
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
    showAll: () => {
      debugger
      this.cardsToRender = this.newsCards.slice();
    },
    showPressReleases: () => {
      this.cardsToRender = this.newsCards.filter(card => card.type ==="press_release");
    },
    showPressMentions: () => {
      this.cardsToRender = this.newsCards.filter(card => card.type ==="press_mention");
    }
  },
  head() {
    return {
      title: "News | Covid Watch"
    };
  },
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
