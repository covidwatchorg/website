<template>
  <v-container>
    <v-row id="home">
      <v-col cols="12">


        <v-row id="hero" class="pa-8">
          
          <v-col cols="8">
            <div class="hero-copy">

              <h1 class="tangerine--text main-heading" style="margin-bottom: 40px">Together, we have the power to stop the spread of COVID-19</h1>

              <v-text class="sub-heading-copy" >Protect the health for your family and community while preserving your privacy through mobile alerts.</v-text>

              <!-- Jesse: Vuetify adjustments not working as expected after some playing so I inline styled -->
              <div style="margin-top: 40px; padding:0px;">
                <v-btn class="cta-button primary mr-10">Download Android Beta</v-btn>
                <v-btn  class="cta-button pewter--text" outlined>iOS Coming Soon</v-btn>
              </div>

            </div>
          </v-col>
          
          <img class="hero-main-img" src="../assets/home_page/hero_main.svg" alt="">



        </v-row>


        <!-- How It Works section -->
        <v-row class="d-block mb-10 pa-8" id="how-it-works">
          <h2 class="plum--text mb-12">How it Works</h2>

          <v-row >

              <v-col cols="3" v-for="(card, i) in howItWorksCards"  :key="i" class="d-flex flex-column align-left">

                  <img class="card-img" :src="card.img" :alt="card.title">
                  <h3 class="card-title mt-10">{{card.title}}</h3>
                  <div class="card-body mt-5">{{card.body}}</div>

              </v-col>

          </v-row>

          <v-row class="cta-container my-8">
            <v-btn class="white primary--text">
              <nuxt-link to="/how-it-works" style="text-decoration:none">
                Learn More
              </nuxt-link>
            </v-btn>
          </v-row>
        </v-row>


        <!-- Why Covid Watch -->

          <!-- this is huge needs to be reduced to the width of screen -->
          <img class="why-background" src="../assets/home_page/lavender_slope.svg" alt="background">

        <v-row id="why-covid-watch" class="d-block pa-8">

            
            <h2 class="plum--text mb-12">Why Covid Watch</h2>

            <v-row>
              <v-col cols="4" v-for="(card, i) in whyCards" :key="i">
                  <img class="card-img" :src="card.img" :alt="card.title">
                  <h3 class="card-title mt-10">{{card.title}}</h3>
                  <div class="card-body mt-5">{{card.body}}</div>
              </v-col>
            </v-row>

          <v-row class="cta-container my-8">
            <v-btn class="white primary--text">Read the Whitepaper</v-btn>
          </v-row>

        </v-row>



        <!-- Latest News -->
        <v-row id="latest-news" class="pa-8"> 

          <v-col>
            <v-row class="d-flex align-center justify-space-between mb-12">
              <h2>Latest News</h2>

              <!-- to do: replace ">" w real arrow icon -->
              <nuxt-link to="/news" style="text-decoration:none;">More News ></nuxt-link>
            </v-row>

            <v-row>
              
              <v-col cols="4" v-for="(card,i) in newsCards" :key="i"> 
              <v-card class="news-card" style="position:relative;">
                    <img style="position:absolute;" src="../assets/home_page/news_cards_top_accent.svg" alt="stripe">
                    <div class="d-flex py-4 px-6 justify-space-evenly">
                      <img src="../assets/home_page/news_icon.svg" alt=news>
                      <div class="news-date">{{card.date}}</div>
                    </div>
                    <div class="pa-6">
                        <a :href="card.url" class="primary--text my-4" style="text-decoration:none;font-weight:bold;">{{card.title}} ></a>
                        <div class="primary--text float-right">
                          - {{card.author}}, <span style="font-style:italic;"> {{card.outlet}} </span>
                    </div>
                  </div>
              </v-card>
                </v-col>

            </v-row>
          </v-col>

        </v-row>


        <!-- Download the App -->
        <v-row id="download-app" class="mb-10 pa-8" > 

          <v-col cols="5">
          <h1 class="tangerine--text">Download the App</h1>
           <div class="mt-12">
                <v-btn class="cta-button primary mt-4 mb-6">Download Android Beta</v-btn>
                <v-btn class="cta-button pewter--text" outlined>iOS Coming Soon</v-btn>
            </div>
          </v-col>

            <v-col cols="2" v-for="(img, i) in mobileImages" :key="i">
              <img :src="img" alt="mobile_preview">


                <!-- there has to be a better way to get this image under the pones as expected-->
              <img v-if="i===0" style="width:325%" src="../assets/home_page/mobile_underline.svg" alt="mobile">
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

    // probs replace w grid spacing
    .hero-main-img {
      width: 100%;
    }

    .hero-copy {
      margin-top: 50px;

      // maybe update later pending v-col final stuff
      max-width: 50%;
    }

    .card-img {
      // placeholder to see the img elements
      width: 100%;

      // this max-height is necessary bc the source fourth image Community Safety is slightly larger in px than the others

      // may need to update this to make images appear larger without the fourth being larger than others
      // max-height: 230px;
    }

    #why-covid-watch .card-img {
      max-height: 200px;
    }

    .card-body, #latest-news h2, .sub-heading-copy {
       color: #585858;
    }

    h2 {
      font-weight: 600;
      font-size: 40px;
      line-height: 49px;
    }

    .card-body {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
    }
 

    .card-title {
      color: #4B0A70;
      font-size: 28px;
    }


    .news-date {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-align: right;
    }

    // this could potentially be abstracted out across other pages also
    .cta-container {
      display: flex;
      justify-content: center;
    }

    #latest-news {
      // note: this is #71cddf with 15% opacity
      background-color: rgba(113, 205, 223, .15);
    }

    .cta-button {
      width: 300px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;

      // this font size from figma makes text look HUGE relative to button and other elements
      // font-size: 18px;
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