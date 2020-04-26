<template>
  <v-container grid-list-xs>
    <v-row id="home">
      <v-col cols="12">


        <v-row id="header" class="first-row">
          
          <v-col cols="8">
            <div class="first-row-copy">

              <h1 class="secondary_2--text main-heading">Together, we have the power to stop the spread of COVID-19</h1>

              <v-text>Protect the health fo your family and community while preserving your privacy through mobile alerts.</v-text>

              <div>
                <v-btn>Download Android Beta</v-btn>
                <v-btn>Download iOS Beta</v-btn>
              </div>

            </div>
          </v-col>

          <v-col cols="4">
            <!-- need to get globe image for here, this is a stand in -->
            <img src="data:image/jpeg;base64,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" alt="">
          </v-col>
        </v-row>


        <!-- How It Works section -->
        <v-row class="d-block" id="how-it-works">
          <h2>How it Works</h2>

          <v-row >
            <!-- need to refactor colunns -->
              <v-col cols="3" v-for="(card, i) in howItWorksCards"  :key="i">

                  <div class="card-number">{{i + 1}}</div>

                  <!-- why is this card.img not working?  worked w random internet image url but not relative svg file path  -->
                  <img :src="card.img" :alt="card.title">
                  <h3>{{card.title}}</h3>
                  <div>{{card.body}}</div>

              </v-col>

          </v-row>

          <v-btn class="primary-1--text">
            <nuxt-link to="/how-it-works">
              Learn More
            </nuxt-link>
          </v-btn>
        </v-row>


        <!-- Why Covid Watch -->
        <v-row id="why-covid-watch">
            <v-col cols="4" v-for="(card, i) in whyCards" :key="i">
              <div>
                 <!-- why is this card.img not working?  worked w random internet image url but not relative svg file path  -->
                  <img :src="card.img" :alt="card.title">
                  <h3>{{card.title}}</h3>
                  <div>{{card.body}}</div>
              </div>
            </v-col>
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

          <v-col cols="7" v-for="(img, i) in mobileImages" :key="i">
            <img :src="img" alt="mobile_preview">
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>



<style lang="scss">
  #home {
    img {
      // placeholder to see the img elements
      width: 200px;
      height: 200px;
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
        img: "./assets/home_page/how_it_works_2.svg"
      },
      {
        title: "Contact Alerts",
        body: "Jane’s phone gets a notification that a recent contact has tested positive for COVID-19.",
        img: "./assets/home_page/how_it_works_3.svg"
      },
      {
        title: "Community Safety",
        body: "Jane and Sam helped keep their communities safe. They share the app so that others can, too.",
        img: "./assets/home_page/how_it_works_4.svg"
      },
    ],
    whyCards: [
      {
        title: "No tracking, ever",
        body: "No personal information is shared. No GPS locations are stored. Bluetooth signals anonymously log when you've been near another phone with Covid Watch installed.",
        img: "./assets/home_page/why_covid_watch_1.svg"
      },
      {
        title: "Easier than staying home",
        body: "You can leave your home and help keep your community healthy just by installing the app. You don't even need to keep the app open for it to protect you.",
        img: "./assets/home_page/why_covid_watch_2.svg"
      },
      {
        title: "Share with each other",
        body: "Trust comes when we work together. Covid Watch is a non-profit on a mission to protect your health and privacy, not big tech or government.",
        img: "./assets/home_page/why_covid_watch_3.svg"
      }
    ],
    mobileImages: [
      "./assets/home_page/mobile_1.svg",
      "./assets/home_page/mobile_2.svg",
      "./assets/home_page/mobile_3.svg"
    ]
  })
}
</script>
