<template>
  <v-row id="pilot">
    <v-col cols="12" class="py-0">
      <!-- Hero -->
      <v-row id="hero" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h1 class="mb-5">Pilot With Us</h1>
            <div class="subtitle">
              <p>
                Amplify your COVID-19 response strategy with anonymous exposure
                alerts.
              </p>
              <p>
                The Covid Watch pilot program offers universities, governments,
                and public health departments an opportunity to rebrand our
                exposure alert app, access to our customizable COVID-19 positive
                case verification portal, and full service implementation
                support from our team.
              </p>
            </div>
          </div>

          <v-row>
            <v-col
              cols="10"
              :md="4"
              v-for="(audience, i) in audienceBlocks"
              :key="i"
            >
              <h3 class="mb-4">{{ audience.title }}</h3>
              <p style="font-size: 16px; line-height: 20px;">
                {{ audience.body }}
              </p>
            </v-col>
          </v-row>

          <v-row class="mt-8">
            <v-col>
              <p>
                If you'd like more information about running a pilot program for
                your organization, let's talk.
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col :sm="5">
              <Button
                target="_blank"
                href="https://covidapp.typeform.com/to/rN6LaK"
                primary
                hero
                >Schedule a Demo</Button
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Our Solution section -->
      <v-row id="our-solution" :class="pageSectionClass">
        <h2 class="section-title">Our Solution</h2>
        <p>
          We help scale your contact tracing efforts, working alongside your
          team to help identify additional cases that might be missed,
          maximizing your response. Our technology helps you identify positive
          cases sooner, protecting your community faster. Here’s how our
          solution is unique:
        </p>

        <v-row class="d-flex justify-center">
          <v-col
            v-for="(block, i) in solutionBlocks"
            :key="i"
            cols="10"
            :sm="8"
            :md="4"
          >
            <div class="d-flex justify-center">
              <img
                :style="block.width"
                class="mb-6"
                :src="block.img"
                :alt="block.title"
              />
            </div>
            <h3 class="mb-4">{{ block.title }}</h3>
            <p v-html="block.body"></p>
          </v-col>
        </v-row>
      </v-row>

      <v-row id="join-community" :class="pageSectionClass">
        <v-col cols="10" :md="8">
          <h3>Join Our Community of Leaders</h3>
          <p class="subtitle mt-5">
            Participation in our pilot program also includes access to the Covid
            Watch Forum, an invite-only collaborative space for our partners and
            advisory council of subject matter experts to share best practices
            and learn from each other.
            <nuxt-link style="color: #2c58b1;" to="/forum"
              >Learn more here</nuxt-link
            >.
          </p>
        </v-col>
        <v-col cols="0" :md="4">
          <img
            class="mt-5 hide-on-small-screen"
            style="width: 100%;"
            src="../assets/forum_page/forum_logo.svg"
          />
        </v-col>
      </v-row>

      <v-row id="arizona-video" :class="pageSectionClass">
        <h2 class="section-title">Covid Watch in Action</h2>
        <p>
          Joyce Schroeder, PhD, from the University of Arizona on why they chose
          to work with Covid Watch to test exposure notifications.
        </p>

        <v-col class="d-flex justify-center">
          <iframe
            width="1000"
            height="577"
            src="https://www.youtube.com/embed/zIhxpO_qmfw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center mb-4 mt-10 pb-12">
        <v-col class="d-flex justify-center px-6" cols="12">
          <p>Let’s talk about what a successful pilot looks like for you.</p>
        </v-col>

        <v-col class="d-flex justify-center" cols="12" :sm="8" :md="5">
          <Button
            target="_blank"
            hero
            href="https://covidapp.typeform.com/to/rN6LaK"
            primary
            >Schedule a Demo</Button
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
#pilot {
  #join-community {
    background: rgba(245, 229, 230, 0.6);
  }

  a {
    color: white;
    text-transform: none;
    font-style: normal;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 16px;
  }

  #public-health {
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

  #public-health {
    .shrink-on-small-screen {
      max-height: 240px;
    }
  }

  #hero {
    background: linear-gradient(
      0deg,
      rgba(67, 197, 217, 0.2),
      rgba(255, 255, 255, 0) 80%
    );
  }

  #our-solution {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(67, 197, 217, 0.2)
    );
  }

  #arizona-video {
    h3 {
      margin-bottom: 10px;
    }
  }
}
</style>

<script>
import Button from "../components/Button";
import CTA from "../components/CTA";

export default {
  components: {
    Button,
    CTA,
  },
  head() {
    return {
      title: "Pilot | Covid Watch",
    };
  },
  data: () => ({
    audienceBlocks: [
      {
        title: "For Universities",
        body:
          "Universities are on the frontlines of the pandemic, contributing valuable research while also navigating the challenge of welcoming students and staff back to campus safely.",
      },
      {
        title: "For Government",
        body:
          "Governments at all levels play a crucial role in facilitating conversations while enacting and enforcing policy in a dynamic environment.",
      },
      {
        title: "For Public Health",
        body:
          "This is the greatest public health crisis in decades. Public health officials are leading the charge to develop and implement broad and effective responses to the pandemic.",
      },
    ],
    solutionBlocks: [
      {
        title: "Open Source",
        body:
          "<p>Our <a style='color:#2C58B1;' href='https://github.com/covidwatchorg'>open source code</a> is transparent and easily audited. We are aligned with the open source community working all over the world to bring forward a cooperative solution to COVID-19.</p>",
        img: require("../assets/support_page/people_globe.svg"),
        width: "width:56%;",
      },
      {
        title: "Protect Privacy",
        body:
          "We use Google/Apple’s (GAEN) Bluetooth protocol. Our team developed the decentralized anonymization algorithm now used by GAEN, which by design never collects any information about the identity or location of the end user.",
        img: require("../assets/pilot_page/woman_medical_device.svg"),
        width: "width:60%",
      },
      {
        title: "Scale Quickly",
        body:
          "Our technology is designed to meet the challenge of pandemic scale with ease and augment other efforts like manual contact tracing without disruption.",
        img: require("../assets/pilot_page/phone_god.svg"),
        width: "width:49%",
      },
      {
        title: "Verified Results",
        body:
          "Public health officials will be able to confirm positive COVID-19 test results via our verification portal. This prevents false positives and allows those infected to anonymously notify others of their potential exposure.",
        img: require("../assets/pilot_page/man_doctor.svg"),
        width: "width:53%",
      },
      {
        title: "Your Messaging",
        body:
          "Tailor the alerts and resources that your users receive. White label the mobile app so that your users will see the trusted brand of your public health department, and learn how to get help.",
        img: require("../assets/pilot_page/medical_branding.svg"),
        width: "width:60%",
      },
      {
        title: "We Work Together",
        body:
          "Covid Watch is learning alongside you as we work side by side. Expect our team to listen to feedback and adapt our solution to changing needs in a fluid landscape.",
        img: require("../assets/pilot_page/woman_helpdesk.svg"),
        width: "width:60%",
      },
    ],
  }),
};
</script>
