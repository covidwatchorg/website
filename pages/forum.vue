<template>
  <v-row id="forum">
    <v-col cols="12" class="py-0">
      <!-- Hero -->
      <v-row id="hero" :class="pageSectionClass">
        <v-col cols="12" :md="7" :sm="12">
          <div class="mb-12">
            <h1 class="mb-5">Covid Watch Forum</h1>
            <div class="subtitle">
              <p>
                Covid Watch is working with a wide range of
                organizations–including public health authorities, universities
                and governments–to bring our privacy-preserving exposure
                notification solution to anyone in the world. This is
                uncharted territory, and every day we and our partners discover
                new ways to aid in the fight against COVID-19.
              </p>
              <p>
                To harness the full potential of these collaborations, we
                launched the Covid Watch Forum –
                <span
                  >a space for our pilot partners and advisory council of
                  subject matter experts to collaborate, share best practices
                  and learn from each other</span
                >.
              </p>
            </div>
          </div>

          <v-row no-gutters class="mr-10 mb-4 mt-10">
            <v-col :sm="5">
              <Button nuxt to="/pilot" primary hero>Start a Pilot</Button>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          :md="5"
          class="d-flex align-baseline justify-center mt-12 pt-12"
        >
          <img
            class="hide-on-small-screen"
            style="width: 100%;"
            src="../assets/forum_page/forum_logo.svg"
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
              <h3>Smarter Together</h3>
              <p>
                In the face of the COVID-19 pandemic, those who are working on
                solutions need ways to share knowledge in real time. The lessons
                learned in one region, shared clearly and quickly, could make a
                life-or-death difference elsewhere. By pooling our insights and
                experience, the Covid Watch Forum allows our members to move
                forward with confidence, knowing that their actions are informed
                by cutting-edge data and technology. Forum members have access
                to world-class expertise to ensure that every step we take
                together is grounded firmly in the highest standard of evidence.
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
              <h3>Global Collaboration</h3>
              <p>
                The Covid Watch Forum meets regularly to discuss the latest
                developments and to collaborate on best practices. The Forum
                facilitates networking between organizations who wouldn’t
                typically work together, but who are united by their urgent need
                to augment manual contact tracing with exposure notification
                technology to reopen schools and businesses safely.
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col :md="3" class="show-on-small-screen">
            <img
              class="shrink-on-small-screen"
              src="../assets/support_page/people_globe.svg"
              alt="target"
            />
          </v-col>
          <v-col :md="9">
            <div class="copy ml-6">
              <h3>A Community of Leaders</h3>
              <p>
                The ultimate vision of Covid Watch is a global network of people watching out for each other and their communities. To help make this happen, the Forum connects our pilot partners with academics in public health, privacy, cryptography, and other key fields. We will periodically publish and share our progress publicly so that we can all move with confidence and accelerate innovation. 
              </p>
            </div>
          </v-col>
          <v-col :md="3" class="hide-on-small-screen">
            <img
              style="max-width: 268px;"
              class="shrink-on-small-screen"
              src="../assets/support_page/people_globe.svg"
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
            The Covid Watch Forum is open to our pilot partners and advisory
            council members. Members include universities, hospitals, public
            health departments, domain experts and state and federal
            governments.
          </p>
        </div>

        <v-row>
          <v-col>
            <p>
              If you are interested in joining the Forum, the first step is to
              get in touch with Covid Watch about
              <a href="https://covidapp.typeform.com/to/rN6LaK"
                >starting a pilot</a
              >.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col
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
          </v-col>
        </v-row>

        <v-row class="mr-10 mb-4 mt-10 pb-12 d-flex justify-center">
          <v-col :sm="4">
            <Button nuxt to="/pilot" secondary>Start a Pilot</Button>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
#forum {
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
  },
  data: () => ({
    whyCards: [
      {
        title: "Universities",
        body:
          "Universities are on the frontlines of the pandemic, contributing valuable research while also navigating the challenge of welcoming students and  staff back to campus.",
        img: require("../assets/pilot_page/man_doctor.svg"),
      },
      {
        title: "Governments",
        body:
          "Governments at all levels play a crucial role in facilitating conversations while enacting and enforcing policy in a fluid environment.",
        img: require("../assets/pilot_page/medical_branding.svg"),
      },
      {
        title: "Public Health",
        body:
          "This is the greatest public health crisis in decades. Public health officials are leading the charge to develop and implement broad and effective responses to the pandemic.",
        img: require("../assets/pilot_page/woman_helpdesk.svg"),
      },
    ],
  }),
};
</script>
