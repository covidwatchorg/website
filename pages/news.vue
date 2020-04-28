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
              <p class="title mb-0">Filter by:</p>
              <Button secondary @click="toShow = 'all'" class="filter px-2"
                >All News</Button
              >
              <Button secondary @click="toShow = 'releases'" class="filter px-2"
                >Press Releases</Button
              >
              <Button secondary @click="toShow = 'mentions'" class="filter px-2"
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
import gsap from 'gsap'; //this is a javascript animation library, more info: https://www.vuemastery.com/courses/animating-vue/intro-to-GSAP-3

export default {
  mounted() {
        gsap.from('.news-card' , {
        duration: 0.5,
        opacity: 0,
        scale: .8,
        x: 0,
        ease: 'power1',
        stagger: 0.08
      })
  },
  components: {
    NewsCard,
    Button
  },
  updated: function () {
        gsap.from('.news-card' , {
        duration: 0.5,
        opacity: 0,
        scale: .8,
        x: 0,
        ease: 'power1',
        stagger: 0.08
      });
  },
  computed: {
    cardsToRender() {
      if (this.toShow === "all") {
        return this.airtableList;
      } else if (this.toShow === "mentions") {
        return this.airtableList.filter(card => card.type === "press_mention");
      } else {
        return this.airtableList.filter(card => card.type === "press_release") ;
      }
    }
  },
  data: () => ({
    airtableList: json,
    toShow: "all"
  }),
  head() {
    return {
      title: "News | Covid Watch"
    };
  }
};

</script>
