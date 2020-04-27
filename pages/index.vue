<template>
  <v-container>
    <v-row id="home">
      <v-col>
        <v-row id="hero">
          <v-col cols="8" class="px-10">

            <div class="hero-copy">

              <h1>Together, we have the power to stop the spread of COVID-19</h1>

              <p class="subtitle mt-10">Protect the health for your family and community while preserving your privacy through mobile alerts.</p>

              <div class="mt-10 d-flex flex-wrap">
                <Button primary hero nuxt to="/about" class="mr-10 mb-4" >Download Android Beta</Button>
                <Button secondary hero nuxt to="/about">iOS Coming Soon</Button>
              </div>

            </div>
          </v-col>
        </v-row>


        <!-- How It Works section -->
        <v-row class="d-block mb-10 pa-12" id="how-it-works">
          
          <h2 class="plum--text mb-12">How it Works</h2>

          <v-row >

              <v-col cols="3" v-for="(card, i) in howItWorksCards"  :key="i" class="d-flex flex-column align-left">

                  <img class="card-img" :src="card.img" :alt="card.title">
                  <h3 class="mt-10">{{card.title}}</h3>
                  <p class="caption mt-5">{{card.body}}</p>

              </v-col>

          </v-row>

          <v-row class="cta-container mt-8">
            <Button secondary nuxt to="/how-it-works">Learn More</Button>
          </v-row>
        </v-row>


        <!-- Why Covid Watch -->
        <v-row id="why-covid-watch" class="d-block mt-12 pa-12">

            <h2 class="plum--text mb-12">Why Covid Watch</h2>

            <v-row>
              <v-col cols="4" v-for="(card, i) in whyCards" :key="i">
                  <img class="card-img" :src="card.img" :alt="card.title">
                  <h3 class="mt-10">{{card.title}}</h3>
                  <p class="caption mt-5">{{card.body}}</p>
              </v-col>
            </v-row>

          <v-row class="cta-container my-8">
            <Button secondary nuxt to="/how-it-works"> <img class="mr-3" style="height:20px;" src="../assets/home_page/pdf_logo.svg" alt="pdf"> Read the Whitepaper</Button>
          </v-row>

        </v-row>



        <!-- Latest News -->
        <v-row id="latest-news" > 
          <v-col>
              <v-row class="px-12 mt-12 mb-6 d-flex align-center justify-space-between">
                <h2 class="pewter--text">Latest News</h2>

                <nuxt-link to="/news" style="text-decoration:none;font-weight:600;font-style:normal;">More News &nbsp; <img style="height:10px;"  src="../assets/home_page/arrow_icon.svg" alt="arrow"> </nuxt-link>

                <!-- not sure why a flex-wrap doesn't resolve responsiveness by stacking cards vertically here: style="display:flex;flex-wrap:wrap;" -->
                <v-row class="my-8">

                <v-col cols="4" v-for="(card,i) in newsCards" :key="i"> 
                  <NewsCard :card="card"></NewsCard>
                </v-col>
                  
                </v-row>
              </v-row>
          </v-col>

        </v-row>


        <!-- Download the App -->
        <v-row id="download-app" class="mb-10 mt-12" > 

          <v-col cols="4 px-12">
          <h1 class="tangerine--text">Get the App</h1>
           <div class="mt-12">
                <Button class="mt-4 mb-6">Download Android Beta</Button>
                <Button secondary>iOS Coming Soon</Button>
            </div>
          </v-col>

          <!-- to do: make disappear on mobile? -->
          <v-col cols="6">
            <img src="../assets/home_page/mobile_mockups_group.svg" alt="mobile">
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>



<style lang="scss">
  #home {

    #hero {
      background-image: url("../assets/home_page/hero_main.svg");
      background-position-x: right;
      background-size: contain;
      height: 560px;
    }

    #why-covid-watch {
      background-image: url("../assets/home_page/lavender_slope.svg");
      background-size: contain;
    }


    // Jesse: I added this bc for some reason appears h2 elements not reading font-size from variables.scss
    h2 {
      font-size: 36px;
    }

    .why-background  {
      max-height: 420px;
      max-width: 1240px;
    }

    .hero-copy {
      margin-top: 50px;
    }

    .card-img {
      width: 100%;
      // this max-height is necessary bc the source fourth image Community Safety is slightly larger in px than the others
      // may need to update this to make images appear larger without the fourth being larger than others
      max-height: 200px;
    }

    #why-covid-watch .card-img {
      // this keeps the why covid watch images from getting too large
      max-height: 200px;
    }

    // this could potentially be abstracted out across other pages also.  centers CTA buttons at the bottom of each section
    .cta-container {
      display: flex;
      justify-content: center;
    }

    #latest-news {
      // note: this is #71cddf with 15% opacity
      background-color: rgba(113, 205, 223, .15);

      .news-card {
        height: 250px;
        min-width: 320px;

        // might be necessary for blue stripe at top
        // style="position:relative;"
      }
    }

  }
</style>

<script>
import Button from "../components/Button.vue";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: {
    Button,
    NewsCard
  },
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
    newsCards: [
      {
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Khari Johnson",
        outlet: "Venture Beat",
      },
      {
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Khari Johnson",
        outlet: "Venture Beat",
      },
      {
        date: "April 13, 2020",
        title: "Lorem ipsum dolor sit amet, dus consectetur adipiscing elit ut etal aliquam",
        url: "https://www.cnn.com",
        author: "Khari Johnson",
        outlet: "Venture Beat",
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
