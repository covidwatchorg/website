<template>
  <v-row id="forum">
    <v-col cols="12" class="py-0">
      <!-- Hero -->
      <v-row id="hero" :class="pageSectionClass">
        <v-col cols="12" :md="8" :sm="12">
          <div class="mb-12">
            <h1 class="mb-5">Covid Watch Forum</h1>
            <div class="subtitle">
              <p>
                Covid Watch is working with a range of organizations around the
                world to bring our privacy-preserving exposure notification
                technology to a global audience. This is uncharted territory,
                and every day we and our partners discover new tools to aid us
                in the fight against COVID-19.
              </p>
              <p>
                To harness the full potential of these collaborations, we've
                founded the Covid Watch Forum: a digital space for our partners
                to learn from each other.
              </p>
            </div>
          </div>

          <v-row no-gutters class="mr-10 mb-4 mt-10">
            <v-col :sm="5">
              <Button
                target="_blank"
                href="https://covidapp.typeform.com/to/rN6LaK"
                primary
                hero
                >Join the Forum</Button
              >
            </v-col>
          </v-row>
        </v-col>

        <v-spacer />
        <v-col cols="3">
          <p style="color: red;">note: images not final</p>
          <img
            class="shrink-on-small-screen"
            src="../assets/pilot_page/woman_globe.svg"
          />
        </v-col>
      </v-row>

      <!-- About the Forum section -->
      <v-row id="about-the-forum" :class="pageSectionClass">
        <h2 class="section-title">About the Forum</h2>

        <v-row>
          <v-col :md="3" class="show-on-small-screen">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/woman_medical_device.svg"
              alt="target"
            />
          </v-col>
          <v-col :md="9">
            <div class="copy ml-6">
              <h3>Digital Collaboration</h3>
              <p>
                Regular meetings allow Forum members to present the latest
                developments in their work and write the rulebook for the
                field's best practices. High-level networking and facilitation
                means that this support doesn't stop there: day or night at any
                time, Forum members seeking advice or guidance know that it's
                always at their fingertips.
              </p>
            </div>
          </v-col>
          <v-col :md="3" class="hide-on-small-screen">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/woman_medical_device.svg"
              alt="target"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col :md="3">
            <img
              class="shrink-on-small-screen"
              src="../assets/about_us/woman-social-network.svg"
              alt="target"
            />
          </v-col>

          <v-col :md="9">
            <div class="copy ml-6">
              <h3>A Team Of Billions</h3>
              <p>
                The ultimate vision of Covid Watch is a global network of users
                watching out for each other and their communities. To help make
                this happen, the Forum has gathered like-minded leaders from
                across the world: X, Y, and Z to name just a few.
              </p>
              <p style="color: red;">Jesse Note: who are X, Y, and Z?</p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col :md="3" class="show-on-small-screen">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/woman_medical_device.svg"
              alt="target"
            />
          </v-col>
          <v-col :md="9">
            <div class="copy ml-6">
              <h3>Smarter Together</h3>
              <p>
                In the face of the COVID-19 pandemic, we can't afford to hold
                knowledge hostage. The lessons learned in one region, shared
                clearly and quickly, could make a life or death difference
                elsewhere. By pooling our experience the Covid Watch Forum
                allows all of our members to move forwards with confidence,
                knowing that their actions are informed by world-leading data.
              </p>
            </div>
          </v-col>
          <v-col :md="3" class="hide-on-small-screen">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/woman_medical_device.svg"
              alt="target"
            />
          </v-col>
        </v-row>
      </v-row>

      <!-- how-to-join section -->
      <v-row id="how-to-join" :class="pageSectionClass">
        <div style="display: block;">
          <h2 class="section-title">How to Join</h2>
          <p>
            Covid Watch Forum is open to select organizations partnered with
            Covid Watch.
          </p>
        </div>

        <v-row>
          <v-col>
            <p>
              Current and anticipated forum members include universities, public
              health departments, and government. If you represent such an
              organization, you can get in touch with us
              <a
                style="color: blue;"
                href="https://covidapp.typeform.com/to/rN6LaK"
                >here</a
              >.
            </p>
          </v-col>
        </v-row>

        <!-- COMMENTED OUT PREVIOUS CARDS from ABOUT page -- could be used for -->
        <!-- <v-col
            :md="4"
            :sm="8"
            v-for="(card, i) in whyCards"
            :key="i"
            class="px-6"
          >
            <WhyCard
              :img="card.img"
              :title="card.title"
              :body="card.body"
            ></WhyCard>
          </v-col> -->

        <p style="color: red;">
          Jesse suggestion: three images/columns of universities, public health
          departments, and government like on bottom of
          <nuxt-link to="/pilot" style="text-decoration: none; color: blue;">
            /pilot page
          </nuxt-link>
        </p>

        <v-row class="mr-10 mb-4 mt-10 pb-12 d-flex justify-center">
          <v-col :sm="4">
            <Button
              target="_blank"
              href="https://covidapp.typeform.com/to/rN6LaK"
              primary
              >Join the Forum</Button
            >
          </v-col>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
#forum {
  a {
    color: white;
    text-transform: none;
    font-style: normal;
    // font-weight: bold;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 16px;
  }

  #how-to-join {
    // note: this is #71cddf with 15% opacity
    background-color: rgba(113, 205, 223, 0.15);
  }

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h3 {
      margin-bottom: 30px;
    }
  }

  // this below shows elements consistently on the screen w the image above text.  without this the middle value prop only has the image below
  .show-on-small-screen {
    display: none;
  }

  @media (max-width: 600px) {
    .show-on-small-screen {
      display: flex;
    }

    .hide-on-small-screen {
      display: none;
    }

    .shrink-on-small-screen {
      max-width: 240px;
    }
  }

  #how-to-join {
    .shrink-on-small-screen {
      max-height: 240px;
    }
  }

  #hero {
    background: linear-gradient(
      0deg,
      rgba(67, 197, 217, 0.2),
      rgba(255, 255, 255, 0) 20%
    );
  }

  #about-the-forum {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(67, 197, 217, 0.2)
    );
  }
}
</style>

<script>
import Button from "../components/Button";
import CTA from "../components/CTA";
import WhyCard from "../components/WhyCard.vue";

export default {
  components: {
    Button,
    CTA,
    WhyCard,
  },
  head() {
    return {
      title: "Forum | Covid Watch",
    };
  }, //THIS CAN BE DELETED IF WE DONT USE THIS SIMILAR LAYOUT
  //   data: () => ({
  //     whyCards: [
  //       {
  //         title: "Verified Results",
  //         body:
  //           "Public health officials will be able to verify positive test results if users have COVID-19. This prevents false positives and allows those infected to anonymously notify others of their potential exposure.",
  //         img: require("../assets/pilot_page/man_doctor.svg"),
  //       },
  //       {
  //         title: "Your Face Forward",
  //         body:
  //           "Covid Watch builds anonymous, effective tools. Our app augments the work of manual contact tracers. When local communities use our app, they can see the name of your public health department and learn how to contact you.",
  //         img: require("../assets/pilot_page/medical_branding.svg"),
  //       },
  //       {
  //         title: "Smart Support",
  //         body:
  //           "Covid Watch is learning alongside you as we both work to protect your community. Expect our researchers to be extremely attentive to the app’s effect in your community and provide responsive feedback in a fast-moving world.",
  //         img: require("../assets/pilot_page/woman_helpdesk.svg"),
  //       },
  //     ],
  //   }),
};
</script>
