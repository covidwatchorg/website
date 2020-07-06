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
                <p>Universities are on the frontlines of the pandemic, contributing valuable research while also navigating the challenge of welcoming students and staff back to campus safely.</p>
              </v-col>

              <v-col cols="4">
                <h3 class="mb-4">For Government</h3>
                <p>Governments at all levels play a crucial role in facilitating conversations while enacting and enforcing policy in a fluid environment.</p>
              </v-col>

              <v-col cols="4">
                <h3 class="mb-4">For Public Health</h3>
                <p>This is the greatest public health crisis in decades. Public health officials are leading the charge to develop and implement broad and effective responses to the pandemic.</p>
              </v-col>
          </v-row>



          <v-row no-gutters class="mr-10 mb-4 mt-10">
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

        <!-- OLD IMAGE -->
        <!-- <v-spacer />
        <v-col cols="3">
          <img
            class="shrink-on-small-screen"
            src="../assets/pilot_page/woman_globe.svg"
          />
        </v-col> -->
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
      ></CTA>

      <!-- Why Covid Watch? section -->
      <v-row id="why-covid-watch" :class="pageSectionClass">
        <h2 class="section-title">Why Covid Watch?</h2>
        <v-row>
          <v-col :md="3">
            <img
              class="shrink-on-small-screen"
              src="../assets/pilot_page/woman_target.svg"
              alt="target"
            />
          </v-col>

          <v-col :md="9">
            <div class="copy ml-6">
              <h3>Focus Resources Where They're Needed</h3>
              <p>
                Manual contact tracing is labor-intensive. Local public health
                officials need a way to focus and prioritize their efforts. With
                the Covid Watch app, those who have been possibly exposed to the
                coronavirus will receive an anonymous alert. That will be
                followed by instructions on how to protect themselves and their
                community as well as how to call local public health officials.
              </p>
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
              <h3>The Highest Standard of Privacy</h3>
              <p>
                Covid Watch is anonymous and effective. Our app logs
                interactions via Bluetooth in a decentralized system.
                Privacy-focused solutions ease fears of surveillance and lead to
                higher adoption rates among community members. There’s no need
                to upend long-standing expectations around privacy during a
                pandemic when technology exists to safely and securely stop the
                coronavirus.
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
              src="../assets/pilot_page/phone_god.svg"
              alt="target"
            />
          </v-col>

          <v-col :md="9">
            <div class="copy ml-6">
              <h3>Tech That Works Together</h3>
              <p>
                We helped set the standard for protecting users’ personal
                information, and we are committed to bringing this standard to
                communities around the world. Interoperability of different apps
                and systems is key to slowing the spread. Our work influenced
                many other research teams and later the world's largest tech
                companies to adopt an anonymous approach to coronavirus exposure
                alerts. We are aligned with the open source community working
                all over the world to bring forward a cooperative solution to
                COVID-19.
              </p>
            </div>
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
      rgba(255, 255, 255, 0) 20%
    );
  }

  #why-covid-watch {
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
