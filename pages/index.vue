<template>
  <v-container grid-list-xs>
    <v-row id="home">
      <v-col cols="12">


        <v-row id="hero" class="first-row">
          
          <v-col cols="8">
            <div class="hero-copy">

              <h1 class="secondary_2--text main-heading">Together, we have the power to stop the spread of COVID-19</h1>

              <v-text class="sub-heading-copy">Protect the health fo your family and community while preserving your privacy through mobile alerts.</v-text>

              <div>
                <v-btn>Download Android Beta</v-btn>
                <v-btn>Download iOS Beta</v-btn>
              </div>

            </div>
          </v-col>
          
          <img class="hero-main-img" src="../assets/home_page/hero_main.svg" alt="">



        </v-row>


        <!-- How It Works section -->
        <v-row class="d-block" id="how-it-works">
          <h2 class="primary_3--text">How it Works</h2>

          <v-row >

              <v-col cols="3" v-for="(card, i) in howItWorksCards"  :key="i">

                  <img class="card-img" :src="card.img" :alt="card.title">
                  <h3 class="card-title">{{card.title}}</h3>
                  <div class="card-body">{{card.body}}</div>

              </v-col>

          </v-row>

          <v-btn class="primary-1--text">
            <nuxt-link to="/how-it-works">
              Learn More
            </nuxt-link>
          </v-btn>
        </v-row>


        <!-- Why Covid Watch -->
        <v-row id="why-covid-watch" class="d-block">
            <img class="why-background" src="../assets/home_page/lavender_slope.svg" alt="background">
            <h2 class="primary_3--text">Why Covid Watch</h2>

            <v-row>
              <v-col cols="4" v-for="(card, i) in whyCards" :key="i">
                  <img class="card-img" :src="card.img" :alt="card.title">
                  <h3 class="card-title">{{card.title}}</h3>
                  <div class="card-body">{{card.body}}</div>
              </v-col>
            </v-row>
        </v-row>



        <!-- Latest News -->
        <v-row id="latest-news"> 

          <!-- cols slightly uneven -->
          <v-col cols="12">
            <v-row class="d-flex align-center justify-space-between">
              <h2>Latest News</h2>

              <nuxt-link to="/news">More News</nuxt-link>

            </v-row>
          </v-col>

        </v-row>


        <!-- Download the App -->
        <v-row id="download-app"> 

          <v-col cols="4">
          <h1 class="secondary_2--text ">Download the App</h1>
           <div>
                <v-btn>Download Android Beta</v-btn>
                <v-btn>Download iOS Beta</v-btn>
            </div>
          </v-col>

          <v-col cols="2" v-for="(img, i) in mobileImages" :key="i">
            <img :src="img" alt="mobile_preview">
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>



<style lang="scss">
  #home {
    .why-background, .hero-copy {
      position: absolute;
    }

    .hero-copy {
      margin-top: 50px;

      // maybe update later pending v-col final stuff
      max-width: 50%;
    }

    .card-img {
      // placeholder to see the img elements
      width: 70%;
    }

    .hero-main-img {
      width: 100%;
    }

    .card-title, .card-body, #latest-news h2, .sub-heading-copy {
       color: #585858;

    }

    #latest-news {
      // this is #71cddf with 15% opacity
      background-color: rgba(113, 205, 223, .15);
    }
  }

</style>

<script>
export default {
  data: () => ({
    howItWorksCards: [
      {
        title: "Privacy First",
        body: "Sam and Jane’s interaction is logged on their phones anonymously.",
        img: require("../assets/home_page/how_it_works_1.svg")
      },
      {
        title: "Diagnosis Reports",
        body: "Sam later tests postive for COVID-19 and he enters his results into the secure Covid Watch system.",
        img: require("../assets/home_page/how_it_works_2.svg")
      },
      {
        title: "Contact Alerts",
        body: "Jane’s phone gets a notification that a recent contact has tested positive for COVID-19.",
        img: require("../assets/home_page/how_it_works_3.svg")
      },
      {
        title: "Community Safety",
        body: "Jane and Sam helped keep their communities safe. They share the app so that others can, too.",
        img: require("../assets/home_page/how_it_works_4.svg")
      },
    ],
    whyCards: [
      {
        title: "No tracking, ever",
        body: "No personal information is shared. No GPS locations are stored. Bluetooth signals anonymously log when you've been near another phone with Covid Watch installed.",
        img: require("../assets/home_page/why_covid_watch_1.svg")
      },
      {
        title: "Easier than staying home",
        body: "You can leave your home and help keep your community healthy just by installing the app. You don't even need to keep the app open for it to protect you.",
        img: require("../assets/home_page/why_covid_watch_2.svg")
      },
      {
        title: "Share with each other",
        body: "Trust comes when we work together. Covid Watch is a non-profit on a mission to protect your health and privacy, not big tech or government.",
        img: require("../assets/home_page/why_covid_watch_3.svg")
      }
    ],
    mobileImages: [
      require("../assets/home_page/mobile_1.svg"),
      require("../assets/home_page/mobile_2.svg"),
      require("../assets/home_page/mobile_3.svg")
    ]
  })
}
</script>