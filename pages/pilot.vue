<template>
  <v-row id="pilot">
    <v-col cols="12" class="py-0">
      <!-- Hero -->
      <v-row id="hero" :class="pageSectionClass">
        <v-col cols="12" :md="10" :sm="12">
          <div class="mb-12">
            <h1 class="mb-5">Pilot With Us</h1>
            <div class="subtitle">
              <p>
                Amplify your COVID-19 response strategy with anonymous exposure alerts. 
              </p>
              <p>
                The Covid Watch pilot program  offers universities, governments, and public health departments an opportunity to whitelabel our exposure alert app, access to our unique COVID-19 positive case  verification portal, and  full service implementation support from our team.. 
              </p>
            </div>
          </div>

          <v-row>
              <v-col cols="4">
                <h3 class="mb-4">For Universities</h3>
                <p style="font-size:16px; line-height:20px;">Universities are on the frontlines of the pandemic, contributing valuable research while also navigating the challenge of welcoming students and staff back to campus safely.</p>
              </v-col>

              <v-col cols="4">
                <h3 class="mb-4">For Government</h3>
                <p style="font-size:16px; line-height:20px;">Governments at all levels play a crucial role in facilitating conversations while enacting and enforcing policy in a fluid environment.</p>
              </v-col>

              <v-col cols="4">
                <h3 class="mb-4">For Public Health</h3>
                <p style="font-size:16px; line-height:20px;">This is the greatest public health crisis in decades. Public health officials are leading the charge to develop and implement broad and effective responses to the pandemic.</p>
              </v-col>
          </v-row>

          <v-row class="mt-8">
            <v-col>
              <p>Let's talk about what a successful pilot looks like for you.</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col :sm="5">
              <Button
                target="_blank"
                href="https://covidapp.typeform.com/to/rN6LaK"
                primary
                hero
                >Talk With Us</Button
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- <v-row id="arizona-video" :class="pageSectionClass">
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

        <v-row>
          <v-col class="d-flex flex-column justify-center align-center" :md="4">
            <h3>Whitelabel Branding</h3>
            <img
              style="max-width: 300px;"
              src="../assets/pilot_page/uofa-1.svg"
              alt="arizona-render"
            />
          </v-col>
          <v-col class="d-flex flex-column justify-center align-center" :md="4">
            <h3>Customized Messaging</h3>
            <img
              style="border: solid 1px gray; max-width: 300px;"
              src="../assets/pilot_page/uofa-2.svg"
              alt="arizona-render"
            />
          </v-col>
          <v-col class="d-flex flex-column justify-center align-center" :md="4">
            <h3>Confidence to Reopen</h3>
            <img
              style="border: solid 1px gray; max-width: 300px;"
              src="../assets/pilot_page/uofa-3.svg"
              alt="arizona-render"
            />
          </v-col>
        </v-row>
      </v-row>
      <CTA
        content="Start a Pilot"
        href="https://covidapp.typeform.com/to/rN6LaK"
      ></CTA> -->

      <!-- Our Solution? section -->
      <v-row id="our-solution" :class="pageSectionClass">
        <h2 class="section-title">Our Solution</h2>
        <p>We help scale your contact tracing efforts, working alongside your team to help identify additional cases that might be missed, maximizing your response.   Our technology helps you identify positive cases sooner, protecting your community faster. Here’s how our solution is unique</p>

        <!-- Open Source block -->
        <v-row>
          <v-col cols="4">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/woman_target.svg"
              alt="target"
            />
            <h3>Open Source</h3>
            <p>
              Our open source code is transparent and easily audited.  We are aligned with the open source community working all over the world to bring forward a cooperative solution to COVID-19.
            </p>
          </v-col>


          <v-col cols="4">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/woman_medical_device.svg"
              alt="target"
            />
            <h3>Protect Privacy</h3>
            <p>
              We use Google/Apple’s (GAEN) Bluetooth protocol, which is decentralized by design and  never collects any information about the identity or location of the end user. It’s that simple. 
            </p>
          </v-col>

          <v-col cols="4">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/phone_god.svg"
              alt="target"
            />
            <h3>Scale Quickly</h3>
            <p>
              Our technology is designed to meet the challenge of pandemic scale with ease. Augment other efforts like manual contact tracing without disruption.  
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="4"
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

      </v-row>

      <!-- help for public health section -->
      <v-row id="public-health" :class="pageSectionClass">
        <div style="display: block;">
          <h2 class="section-title">Help for Public Health</h2>
          <p>We have a targeted set of solutions for communities.</p>
        </div>

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
            <Button
              target="_blank"
              href="https://covidapp.typeform.com/to/rN6LaK"
              primary
              >Start a Pilot</Button
            >
          </v-col>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
#pilot {
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

    // figma basis does not show expected result, needs some fiddling:
    // background: linear-gradient(0deg, #43C4D9 0%, rgba(255, 255, 255, 0) 100%);
    // opacity: 0.6;
// transform: matrix(1, 0, 0, -1, 0, 0);
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
import WhyCard from "../components/WhyCard.vue";

export default {
  components: {
    Button,
    CTA,
    WhyCard,
  },
  head() {
    return {
      title: "Pilot | Covid Watch",
    };
  },
  data: () => ({
    whyCards: [
      {
        title: "Verified Results",
        body:
          "Public health officials will be able to verify positive test results if users have COVID-19. This prevents false positives and allows those infected to anonymously notify others of their potential exposure.",
        img: require("../assets/pilot_page/man_doctor.svg"),
      },
      {
        title: "Your Face Forward",
        body:
          "Covid Watch builds anonymous, effective tools. Our app augments the work of manual contact tracers. When local communities use our app, they can see the name of your public health department and learn how to contact you.",
        img: require("../assets/pilot_page/medical_branding.svg"),
      },
      {
        title: "Smart Support",
        body:
          "Covid Watch is learning alongside you as we both work to protect your community. Expect our researchers to be extremely attentive to the app’s effect in your community and provide responsive feedback in a fast-moving world.",
        img: require("../assets/pilot_page/woman_helpdesk.svg"),
      },
    ],
  }),
};
</script>
