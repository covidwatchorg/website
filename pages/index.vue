<template>
  <v-container>
    <v-row id="home">
      <v-col>
        <v-row id="hero">
          <v-col :md="7" :sm="8" cols="12">
            <h1>Together, we have the power to stop COVID-19.</h1>

            <p class="subtitle">
              Protect yourself, your family and your community with anonymous
              mobile alerts.
            </p>

            <v-row no-gutters class="ctas mb-4 mt-10 d-flex flex-wrap">
              <v-col class="mr-6" cols="12" :sm="8" :md="3">
                <Button primary hero nuxt to="/pilot" class="mt-4">Start a Pilot</Button>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- How It Works section -->
        <v-row :class="pageSectionClass" id="how-it-works">
          <h2>How it Works</h2>
          <v-row class="justify-center">
            <v-col
              :md="3"
              :sm="8"
              cols="10"
              v-for="(card, i) in howItWorksCards"
              :key="i"
              class="d-flex flex-column align-left"
            >
              <WhyCard :img="card.img" :title="card.title" :body="card.body" aspect-ratio="1"></WhyCard>
            </v-col>
          </v-row>

          <CTA to="/how-it-works" content="Learn More"></CTA>
        </v-row>

        <!-- Why Covid Watch -->
        <v-row id="why-covid-watch" :class="pageSectionClass">
          <h2 class="plum--text">Why Covid Watch</h2>

          <v-row class="justify-center">
            <v-col :md="4" :sm="8" cols="10" v-for="(card, i) in whyCards" :key="i">
              <WhyCard :img="card.img" :title="card.title" :body="card.body" max-height="200px"></WhyCard>
            </v-col>
          </v-row>

          <CTA pdf content="Read the Whitepaper" href="/covid_watch_whitepaper.pdf"></CTA>
        </v-row>

        <!-- Latest News -->
        <v-row id="latest-news" :class="[pageSectionClass, flexCenterRowClass]">
          <h2 class="pewter--text">Featured News</h2>
          <nuxt-link to="/news" class="font-weight-bold" style="text-decoration: none;">
            More News &nbsp;
            <img
              style="height: 10px;"
              src="../assets/home_page/arrow_icon.svg"
              alt="arrow"
            />
          </nuxt-link>

          <v-row>
            <v-col :md="4" :sm="6" cols="12" v-for="(card, i) in newsCards" :key="i">
              <NewsCard :card="card"></NewsCard>
            </v-col>
          </v-row>
        </v-row>

        <!-- Download the App -->
        <v-row
          id="download-app"
          class="mobile_imgs"
          :class="[pageSectionClass, largeMarginClass]"
          justify="center"
        >
          <v-col :md="4" :sm="10" cols="12">
            <h1 class="tangerine--text">Get the App</h1>
            <div class="mt-12">
              <a target="_blank" href="https://covidapp.typeform.com/to/kpp8Id">
                <Button hero class="mt-4 mb-6">Get Early Access</Button>
              </a>
              <!-- no secondary CTA for now -->
              <!-- <Button secondary disabled>iOS Coming Soon</Button> -->
            </div>
          </v-col>

          <v-spacer />

          <v-col
            class="mx-md-4"
            v-for="(img, i) in mobileImagesToShow"
            :key="i"
            :md="2"
            :sm="4"
            cols="auto"
          >
            <img :src="img" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#home {
  @media (min-width: 960px) {
    .mobile_imgs {
      background-image: url("../assets/home_page/mobile_background.svg");
      background-position-x: right;
      background-position-y: 86%;
    }
  }

  // these @media lines below govern the svg image in the hero.
  @media (max-width: 500px) {
    .news-card {
      width: 280px;
    }
  }

  @media (max-width: 760px) {
    #hero {
      background-image: none;

      .subtitle {
        margin-top: 40px;
      }

      .ctas {
        margin-top: 10px;
      }
    }
  }

  @media (min-width: 760px) {
    #hero {
      background-image: url("../assets/home_page/hero_main.svg");
      background-position-x: right;
      background-size: contain;

      .subtitle {
        margin-top: 2vw;
      }

      .ctas {
        margin-top: 2vw;
      }
    }

    @media (min-width: 1760px) {
      #hero {
        height: 570px;
      }
    }

    @media (max-width: 1760px) {
      #hero {
        height: 44vw;
      }

      #how-it-works {
        margin-top: -4vw;
      }
    }
  }

  #why-covid-watch {
    background-image: url("../assets/home_page/lavender_slope.svg");
    background-size: contain;

    .img-container {
      display: flex;
      justify-content: center;
      height: 200px;
    }
  }

  .why-background {
    max-height: 420px;
    max-width: 1240px;
  }

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
import WhyCard from "../components/WhyCard.vue";

export default {
  components: {
    Button,
    CTA,
    NewsCard,
    WhyCard
  },
  methods: {
    hideBackground(e) {
      // debugger
    }
  },
  computed: {
    mobileImagesToShow() {
      return this.$vuetify.breakpoint.xsOnly
        ? [this.mobileImages[0]]
        : this.mobileImages;
    }
  },
  data: () => ({
    howItWorksCards: [
      {
        title: "Always Anonymous",
        body:
          "While Sam and Jane chat, their phones note each others’ anonymous signals and list them securely.",
        img: require("../assets/home_page/how_it_works_1.svg")
      },
      {
        title: "Alert Others",
        body:
          "A few days later, Sam tests positive for COVID-19. He chooses to send a verified alert to others using the app.",
        img: require("../assets/home_page/how_it_works_2.svg")
      },
      {
        title: "Receive Alerts",
        body:
          "Jane’s phone gets an alert that she may have been exposed to COVID-19. The app tells her how to take action.",
        img: require("../assets/home_page/how_it_works_3.svg")
      },
      {
        title: "Safe Communities",
        body:
          "Jane and Sam have helped protect their communities. They share the app so that others can, too.",
        img: require("../assets/home_page/how_it_works_4.svg")
      }
    ],
    whyCards: [
      {
        title: "No tracking, ever",
        body:
          "No personal information is shared. No GPS locations are stored. Bluetooth signals send out random numbers that are later used to send exposure alerts, anonymously.",
        img: require("../assets/home_page/why_covid_watch_1.svg")
      },
      {
        title: "Back to life, safely",
        body:
          "Even if you leave your home, you can help keep yourself and your community safe by using Covid Watch. You don't even need to open the app again for it to protect you.",
        img: require("../assets/home_page/why_covid_watch_2.svg")
      },
      {
        title: "Peace of mind, together",
        body:
          "Trust comes when we work together. Covid Watch is a nonprofit on a mission to protect your health and privacy, not big tech or government.",
        img: require("../assets/home_page/why_covid_watch_3.svg")
      }
    ],
    newsCards: [
      {
        type: "press_mention",
        date: "May 5, 2020",
        title:
          "University of Arizona testing app to trace COVID-19 cases on campus",
        url:
          "https://www.kold.com/2020/05/28/ua-testing-app-trace-covid-cases-campus/",
        author_name: "",
        outlet_name: "Arizona KOLD 13"
      },
      {
        type: "press_release",
        date: "May 7, 2020",
        title:
          "Emergent Ventures singles out the Covid Watch app for coronavirus response",
        url:
          "https://drive.google.com/file/d/1uVVPVzwUnBhqeOQU4Vw9O-Sng77uNzmt/view",
        author_name: "",
        outlet_name: "Press Release, Covid Watch"
      },
      {
        type: "press_mention",
        date: "April 8, 2020",
        title:
          "Clever Cryptography Could Protect Privacy in Covid-19 Contact Tracing Apps",
        url:
          "https://www.wired.com/story/covid-19-contact-tracing-apps-cryptography/",
        author_name: "",
        outlet_name: "Wired"
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
