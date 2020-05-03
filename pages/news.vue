<template>
  <v-container>
    <v-row id="news">
      <v-col>
        <v-row id="hero">
          <v-col :md="7" :sm="12" cols="12">
            <h1>News and Media</h1>
            <div
              id="filters"
              class="mt-10"
              style="max-width:500px;"
            >
              <v-col :sm="8" :md="1">
                <p class="title mb-0">Filter:</p>
              </v-col>
              
              <v-row id="filter-container">
                <v-col :sm="8" :md="1">
                  <Button secondary @click="toShow = 'all'" class="filter">
                    All News
                  </Button>
                </v-col>

                <v-col :sm="8" :md="1">
                  <Button secondary @click="toShow = 'releases'" class="filter">
                    Mentions
                  </Button>
                </v-col>

                <v-col :sm="8" :md="1">
                  <Button secondary @click="toShow = 'mentions'" class="filter">
                    Releases
                  </Button>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col :sm="8" :md="4">
            <img id="bench-dude" src="../assets/news_page/bench_dude.svg" alt="news" />
          </v-col>
        </v-row>

        <!-- all news cards section -->
        <v-row id="news-cards" class="mt-8">
          <!-- modularized NewsCard version -->
          <v-col :md="4" :sm="6" :xs="8"  v-for="(card, i) in cardsToRender" :key="i">
            <NewsCard :card="card"></NewsCard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  #filter-container {
    display: flex;
    justify-content: space-around;
  }

#news {
  #filters {
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width:400px){
    .news-card {
      height: 300px;
      min-width: 220px;
    }

    .stripe {
      width: 220px;
    }

    #filter-container {
      display: block;
    }
        #filters  {
      display: block;
    }

    #bench-dude {
      max-width: 260px;
    }
  }


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
    airtableList: json.sort((a,b) => (a.date < b.date) ? 1 : -1),
    toShow: "all"
  }),
  head() {
    return {
      title: "News | Covid Watch"
    };
  }
};

</script>
