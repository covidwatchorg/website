<template>
  <v-container grid-list-xs>
    <v-row id="how-it-works">
      <!-- First row-->
      <v-row id="header" :class="pageSectionClass">
        <v-col cols="12" :md="7" :sm="12">
          <div class="mt-10">
            <p class="title-caps">HOW IT WORKS</p>
            <h1 class="mt-6">Our Privacy-Preserving Protocol</h1>
            <div class="mt-10">
              <p>
                Covid Watch uses the international, open source
                <a href="https://tcn-coalition.org/"> TCN Protocol </a> first
                developed in our community to send anonymous exposure alerts via
                private, local Bluetooth signals. Let’s find out more about how
                it works for Sam and Jane, two users of the app:
              </p>
            </div>
          </div>
        </v-col>

        <v-col :md="4">
          <img
            class="connected_img"
            src="../assets/how_it_works/connected_group_final.svg"
          />
        </v-col>
      </v-row>

      <!-- Step 1 -->
      <div class="triangle_right_1">
        <Step
          :img_num="require('../assets/how_it_works/num-1.svg')"
          :img_step="require('../assets/how_it_works/step-1.svg')"
          title="Bluetooth signals"
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

        <!-- Step 5 -->
        <div class="triangle_right_2">
          <Step
            :img_num="require('../assets/how_it_works/num-5.svg')"
            :img_step="require('../assets/how_it_works/num-5-img.svg')"
            title="Voluntary Reports"
            text="A few days later, Sam tests positive for COVID-19. Sam chooses to report his diagnosis using a verification code in the app. When he does, his list of random numbers is sent to other Covid Watch users."
          ></Step>

          <!-- Step 6 -->
          <div class="triangle_left_2">
            <Step
              right
              :img_num="require('../assets/how_it_works/num-6.svg')"
              :img_step="require('../assets/how_it_works/num-6-img.svg')"
              title="Exposure Alerts"
              text="On Jane’s phone, the Covid Watch app compares her list against the numbers of those who have tested positive for COVID-19. When Sam shares his result, Jane alert that she may have been exposed to the coronavirus."
            ></Step>

            <!-- Step7 -->
            <Step
              :img_num="require('../assets/how_it_works/num-7.svg')"
              :img_step="require('../assets/how_it_works/num-7-img.svg')"
              title="A Call to Action"
              text="Jane's phone downloads and checks the numbers from COVID-19 positive users. Jane's phone recognizes a number, and she receives an alert that she may have been exposed to COVID-19."
            ></Step>

            <!-- Step 8 -->
            <v-row
              align="center"
              :class="[pageSectionClass, flexcenterRowClass]"
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
        </div>
      </div>

      <v-row class="d-block" :class="pageSectionClass" justify="center">
        <v-col cols="12">
          <h2 class="text-center">
            &nbsp&nbspWant to Know More?
            <nuxt-link to="/faq">
              visit our FAQ
              <img
                style="height: 16px;"
                src="../assets/home_page/arrow_icon.svg"
                alt="arrow"
              />
            </nuxt-link>
            &nbsp&nbsp
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="8" :md="4" :sm="8" class="mb-n1 pa-0 d-flex">
          <img
            class="woman-triangle"
            src="../assets/how_it_works/woman-triangle.svg"
          />
        </v-col>
        <v-spacer></v-spacer>
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
  }
}
</style>

<script>
import Step from "../components/Step.vue";
export default {
  components: {
    Step
  },
  head() {
    return {
      title: "How It Works | Covid Watch"
    };
  }
};
</script>
