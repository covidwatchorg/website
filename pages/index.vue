<template>
  <v-container>
    <v-row id="home">
      <v-col>
        <v-row id="hero">
          <v-col :sm="8" :xs="12" class="px-10">
            <div class="hero-copy">
              <h1>
                Together, we have the power to stop the spread of COVID-19
              </h1>

              <p class="subtitle mt-10">
                Protect the health for your family and community while
                preserving your privacy through mobile alerts.
              </p>

              <v-row no-gutters class="mr-12 pr-12 mb-4 mt-10 d-flex flex-wrap">
                <v-col class="mr-6" :xs="10">
                  <Button primary hero nuxt to="/about" class="mt-4">
                    Download Android Beta
                  </Button>
                </v-col>
                <!-- <v-spacer></v-spacer> -->
                <v-col :xs="10">
                  <Button secondary hero nuxt to="/about" class="mt-4">
                    iOS Coming Soon
                  </Button>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </div>
          </v-col>
        </v-row>

        <!-- How It Works section -->
        <v-row class="d-block mb-10 pa-12" id="how-it-works">
          <h2 class="mb-12">How it Works</h2>

          <v-row>
            <v-col
              :md="3" 
              :sm="8"
              v-for="(card, i) in howItWorksCards"
              :key="i"
              class="d-flex flex-column align-left"
            >
              <img class="card-img" :src="card.img" :alt="card.title" />
              <h3 class="mt-10">{{ card.title }}</h3>
              <p class="caption mt-5">{{ card.body }}</p>
            </v-col>
          </v-row>


          <CTA to="/how-it-works" content="Learn More"></CTA>
        </v-row>

        <!-- Why Covid Watch -->
        <v-row id="why-covid-watch" class="pa-12">
          <h2 class="plum--text mb-12">Why Covid Watch</h2>

          <v-row>
            <v-col             
              :md="4" 
              :sm="8"
              v-for="(card, i) in whyCards" 
              :key="i">
                <div class="img-container">
                  <img class="card-img" :src="card.img" :alt="card.title" />
                </div>
                <div class="content-container">
                  <h3 class="mt-10">{{ card.title }}</h3>
                  <p class="caption mt-5">{{ card.body }}</p>
                </div>
            </v-col>
          </v-row>

          <!-- commented this out as spacing was getting wacky on small screens -->
          <!-- <CTA pdf content="Read the whitepaper" href="/covid_watch_whitepaper.pdf"></CTA> -->

          <v-row class="cta-whitepaper">
            <v-col cols="4">
                <Button class="cta-button" secondary>
                      <img
                          class="mr-3"
                          style="height:20px;"
                          src="../assets/home_page/pdf_logo.svg"
                          alt="pdf"
                      />

                      <a href="/covid_watch_whitepaper.pdf" style="text-transform:none;">
                          Read the Whitepaper
                      </a>
                </Button>
            </v-col>
          </v-row>

 
        </v-row>

        <!-- Latest News -->
        <v-row id="latest-news">
          <v-col>
            <v-row
              class="px-12 mt-12 mb-6 d-flex align-center justify-space-between"
            >
              <h2 class="pewter--text">Latest News</h2>

              <nuxt-link
                to="/news"
                style="text-decoration:none;font-weight:600;font-style:normal;"
                >More News &nbsp;
                <img
                  style="height:10px;"
                  src="../assets/home_page/arrow_icon.svg"
                  alt="arrow"
                />
              </nuxt-link>

              <v-row class="my-8">
                <v-col :md="4" :sm="6" v-for="(card, i) in newsCards" :key="i">
                  <NewsCard :card="card"></NewsCard>
                </v-col>
              </v-row>
            </v-row>
          </v-col>
        </v-row>

        <!-- Download the App -->
        <v-row id="download-app" class="mt-12">
          <v-col  :md="4" :sm="10">
            <h1 class="tangerine--text">Download the App</h1>
            <div class="mt-12">
              <Button class="mt-4 mb-6">Download Android Beta</Button>
              <Button secondary>iOS Coming Soon</Button>
            </div>
          </v-col>

          <v-spacer/>

          <v-col :md="8" :sm="12">
            <img
              style="width:100%;min-width:300px;"
              src="../assets/home_page/mobile_mockups_group.svg"
              alt="mobile"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">

  // this handles the transition effect between pages, see default.vue <transition> element
  .slide-fade-enter {
    opacity: 0;
    transform: translateX(10px);
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }



#home {

    @media (max-width:400px){
      .news-card {
        height: 380px;
        min-width: 220px;

        .stripe {
          width: 220px;
        }
      }

      // hacky way to get whitepaper button to not take up margin on right of screen
      .cta-whitepaper {
        display: flex;
        justify-content: start;
        width: 160px;
      }
  }

    @media (min-width:400px){
        .news-card {
          height: 250px;
          min-width: 320px;

          .stripe {
            width: 320px;
          }
        }

      // hacky way to get whitepaper button to center
      .cta-whitepaper {
        display: flex;
        justify-content: center;
      }
    }

  // these @media lines below govern the svg image in the hero.
  @media (max-width:920px){
      #hero {
        background-image: none;
    }
  }

  @media (min-width:920px){
      #hero {
        background-image: url("../assets/home_page/hero_main.svg");
        background-position-x: right;
        background-size: contain;
        height: 560px;
    }
  }

  #why-covid-watch {
    background-image: url("../assets/home_page/lavender_slope.svg");
    background-size: contain;
  }

  // Jesse: I added this bc for some reason appears h2 elements not reading font-size from variables.scss
  h2 {
    font-size: 36px;
  }

  .why-background {
    max-height: 420px;
    max-width: 1240px;
  }

  .hero-copy {
    margin-top: 50px;
  }

  .card-img {
    // keeps the how it works svgs reasonably sized aligned w Figma
    max-height: 200px;
  }

  #why-covid-watch .img-container {
    display: flex;
    justify-content: center;
    height: 200px;
  }

  // #why-covid-watch .content-container {

  // }

  #latest-news {
    // note: this is #71cddf with 15% opacity
    background-color: rgba(113, 205, 223, 0.15);
  }
}
</style>

<script>
import Button from "../components/Button.vue";
import CTA from "../components/CTA.vue";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: {
    Button,
    NewsCard,
    CTA
  },
  methods: {
    hideBackground(e) {
      // debugger
    }
  },
  data: () => ({
    howItWorksCards: [
      {
        title: "Privacy First",
        body:
          "Sam and Jane’s interaction is logged on their phones anonymously.",
        img: require("../assets/home_page/how_it_works_1.svg")
      },
      {
        title: "Diagnosis Reports",
        body:
          "Sam later tests postive for COVID-19 and he enters his results into the secure Covid Watch system.",
        img: require("../assets/home_page/how_it_works_2.svg")
      },
      {
        title: "Contact Alerts",
        body:
          "Jane’s phone gets a notification that a recent contact has tested positive for COVID-19.",
        img: require("../assets/home_page/how_it_works_3.svg")
      },
      {
        title: "Community Safety",
        body:
          "Jane and Sam helped keep their communities safe. They share the app so that others can, too.",
        img: require("../assets/home_page/how_it_works_4.svg")
      }
    ],
    whyCards: [
      {
        title: "No tracking, ever",
        body:
          "No personal information is shared. No GPS locations are stored. Bluetooth signals anonymously log when you've been near another phone with Covid Watch installed.",
        img: require("../assets/home_page/why_covid_watch_1.svg")
      },
      {
        title: "Easier than staying home",
        body:
          "You can leave your home and help keep your community healthy just by installing the app. You don't even need to keep the app open for it to protect you.",
        img: require("../assets/home_page/why_covid_watch_2.svg")
      },
      {
        title: "Share with each other",
        body:
          "Trust comes when we work together. Covid Watch is a non-profit on a mission to protect your health and privacy, not big tech or government.",
        img: require("../assets/home_page/why_covid_watch_3.svg")
      }
    ],
    newsCards: [
      {
        date: "April 8, 2020",
        title: "Clever Cryptography Could Protect Privacy in Covid-19 Contact-Tracing Apps",
        url: "https://www.wired.com/story/covid-19-contact-tracing-apps-cryptography/",
        author_name: "Andy Greenberg",
        outlet_name: "Wired"
      },
      {
        date: "April 9, 2020",
        title: "Stanford researchers help develop privacy-focused coronavirus alert app",
        url: "https://news.stanford.edu/2020/04/09/stanford-researchers-help-develop-privacy-focused-coronavirus-alert-app/",
        author_name: "Tom Abate",
        outlet_name: "Stanford News"
      },
      {
        date: "March 29, 2020",
        title: "One of the victims of the COVID-19 pandemic may be citizen privacy rights",
        url: "https://www.japantimes.co.jp/news/2020/03/29/world/coronavirus-pandemic-privacy-rights/#.XqoOAZNKgUG",
        author_name: "Rob Lever",
        outlet_name: "Japan Times"
      }
    ],
    mobileImages: [
      require("../assets/home_page/mobile_1.svg"),
      require("../assets/home_page/mobile_2.svg"),
      require("../assets/home_page/mobile_3.svg")
    ]
  })
};
</script>
