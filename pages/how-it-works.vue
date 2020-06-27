<template>
  <v-container grid-list-xs>
    <v-row id="how-it-works">
      <!-- First row-->
      <v-row id="header" :class="pageSectionClass">
        <v-col cols="12" :md="7" :sm="12">
          <p class="title-caps">HOW IT WORKS</p>
          <h1 class="mt-6">Our Privacy-Preserving Protocol</h1>
          <div class="mt-10">
            <p>
              Covid Watch developed a way for people to send each other alerts
              if they might have been exposed to COVID-19. We use anonymous,
              local Bluetooth signals to help you take action.
            </p>
          </div>
        </v-col>

        <v-spacer></v-spacer>

        <v-col id="video-preview" :md="4" class="mr-12">
          <v-dialog
            v-model="dialog"
            width="1200"
            height="600"
            lazy="true"
            @click:outside="(e) => closeDialog()"
          >
            <template v-slot:activator="{ on }">
              <img
                v-on="on"
                style="max-width: 425px;"
                src="../assets/how_it_works/video-preview.svg"
                alt=""
              />
            </template>

            <v-card>
              <v-card-title
                class="headline grey lighten-2 d-flex justify-space-between mb-10"
                primary-title
              >
                <p style="margin: 0px; padding: 0px;">Video Demo</p>

                <v-card-actions>
                  <v-btn color="primary" flat @click="closeDialog()">
                    X
                  </v-btn>
                </v-card-actions>
              </v-card-title>

              <v-row
                id="video-demo"
                class="d-flex justify-center"
                style="margin: 0px; padding: 0px;"
              >
                <v-row class="iframe-container">
                  <youtube
                    id="youtube-player"
                    :video-id="videoId"
                    :player-vars="playerVars"
                    ref="youtube"
                  ></youtube>
                </v-row>
              </v-row>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

      <!-- Step 1 -->
      <div class="triangle_right_1">
        <Step
          :img_num="require('../assets/how_it_works/num-1.svg')"
          :img_step="require('../assets/how_it_works/step-1.svg')"
          title="Bluetooth Signals"
          text="After Jane installs Covid Watch, her phone begins to send out signals over Bluetooth that carry random, anonymous numbers. Her phone also looks for signals sent by other phones nearby. Bluetooth works only across short distances."
        ></Step>

        <!-- Step 2 -->
        <div class="triangle_left_1">
          <Step
            right
            :img_num="require('../assets/how_it_works/num-2.svg')"
            :img_step="require('../assets/how_it_works/num-2-img.svg')"
            title="No Tracing or Tracking"
            text="The random numbers change at short intervals, so Jane’s identity can’t be determined by nearby phones. The random numbers are stored only on her device."
          ></Step>

          <!-- Step 3 -->
          <Step
            :img_num="require('../assets/how_it_works/num-3.svg')"
            :img_step="require('../assets/how_it_works/num-3-img.svg')"
            title="A Chance Encounter"
            text="Jane stops to chat for 15 minutes with Sam, who also has the Covid Watch app installed. Each of their phones now lists these random numbers associated with the time they were together."
          ></Step>
          <!-- Step 4 -->
          <Step
            right
            :img_num="require('../assets/how_it_works/num-4.svg')"
            :img_step="require('../assets/how_it_works/num-4-img-new.svg')"
            title="An Anonymous List"
            text="Jane’s phone keeps a list of these numbers for two to four weeks. Covid Watch doesn’t ask for information that can be used to identify Jane."
          ></Step>
        </div>
        <!-- triangle_left_1 -->
      </div>
      <!-- triangle_right_1 -->

      <!-- Step 5 -->
      <div class="triangle_right_2">
        <Step
          :img_num="require('../assets/how_it_works/num-5.svg')"
          :img_step="require('../assets/how_it_works/num-5-img.svg')"
          title="Alert Others"
          text="A few days later, Sam tests positive for COVID-19. He chooses to alert others using a verification code in the app. When he does, his list of random numbers is shared with other Covid Watch users."
        ></Step>

        <!-- Step 6 -->
        <div class="triangle_left_2">
          <Step
            right
            :img_num="require('../assets/how_it_works/num-6.svg')"
            :img_step="require('../assets/how_it_works/num-6-img.svg')"
            title="Receive Alerts"
            text="On Jane’s phone, the Covid Watch app compares her list against the numbers that others have shared. If a match is found, Jane's app alerts her that she may have been exposed to COVID-19."
          ></Step>

          <!-- Step7 -->
          <Step
            :img_num="require('../assets/how_it_works/num-7.svg')"
            :img_step="require('../assets/how_it_works/num-7-img.svg')"
            title="A Call to Action"
            text="The alert tells Jane what day she was exposed and what she should do to protect people in her community. With the app, she is empowered to act quickly."
          ></Step>

          <!-- Step 8 -->
          <v-row
            align="center"
            :class="[pageSectionClass, flexCenterRowClass]"
            class="step-8-row"
            id="step-2"
          >
            <v-spacer></v-spacer>
            <v-col cols="12" :md="4" :sm="12">
              <img
                class="step_img"
                src="../assets/how_it_works/family-dancing-2.svg"
              />
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" :md="3" :sm="12">
              <img class="mb-4" src="../assets/how_it_works/num-8.svg" />
              <h3 class="mb-5">Community Safety</h3>
              <p>
                Sam might not have remembered meeting Jane. But because they
                both used Covid Watch, Jane is able to follow local healthcare
                guidelines and reduce the spread of COVID-19.
              </p>
            </v-col>
            <v-col cols="12" :md="3" :sm="12">
              <img
                class="step_img"
                src="../assets/how_it_works/family-dancing-1.svg"
              />
            </v-col>
          </v-row>
        </div>
        <!-- triangle_left_2 -->
      </div>
      <!-- triangle_right_2 -->

      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-center">
            Want to Know More?
            <nuxt-link to="/faq">
              visit our FAQ
              <img
                style="height: 16px;"
                src="../assets/home_page/arrow_icon.svg"
                alt="arrow"
              />
            </nuxt-link>
          </h2>
        </v-col>
        <v-col offset="1" cols="8" md="4" class="mb-n1 pa-0 d-flex">
          <img
            class="woman-triangle"
            src="../assets/how_it_works/woman-triangle.svg"
          />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#how-it-works {
  .woman-triangle {
    z-index: 4;
  }

  .triangle_right_1 {
    background-image: url("../assets/how_it_works/triangle-right.svg");
    background-position-x: right;
    background-position-y: 6%;
  }

  .triangle_left_1 {
    background-image: url("../assets/how_it_works/triangle-left.svg");
    background-position-x: left;
    background-position-y: center;
  }

  .triangle_right_2 {
    background-image: url("../assets/how_it_works/triangle-right.svg");
    background-position-x: right;
    background-position-y: 14%;
  }

  .triangle_left_2 {
    background-image: url("../assets/how_it_works/triangle-left.svg");
    background-position-x: left;
    background-position-y: 42%;
  }

  @media (max-width: 960px) {
    .triangle_right_1,
    .triangle_left_1,
    .triangle_right_2,
    .triangle_left_2,
    .step-8-row {
      background-image: none;
    }

    .step-container {
      margin-bottom: 80px;
    }

    .connected_img {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .step_img {
      max-width: 280px;
    }

    .woman-triangle {
      width: 260px;
    }

    #video-preview {
      display: none;
    }
  }

  #video-preview {
    img:hover {
      cursor: pointer;
    }
  }

  // the below makes the iframe responsive
  .iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  .iframe-container #youtube-player {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  #header {
    background: linear-gradient(
      0deg,
      rgba(67, 197, 217, 0.2),
      rgba(255, 255, 255, 0) 60%
    );
  }
}
</style>

<script>
import Step from "../components/Step.vue";
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  components: {
    Step,
  },
  data: () => {
    return {
      dialog: false,
      videoId: "vgT0Cysh7m4",
      playerVars: {
        autoplay: 1,
      },
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.player.pauseVideo();
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  head() {
    return {
      title: "How It Works | Covid Watch",
    };
  },
};
</script>
