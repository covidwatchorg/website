<template>
  <v-row id="pilot">
    <v-col cols="12" class="py-0">
      <!-- Hero -->
      <v-row id="hero" class="first-row pa-12">
        <v-col cols="12" :md="8" :sm="12">
          <div class="mb-12">
            <h1 class="mb-5">Bring Covid Watch to Your Community</h1>
            <div class="subtitle">
              <p>Covid Watch works best when communities adopt it together. Each new person that uses our anonymous exposure notification app makes everyone else that much safer and reduces the burden on overloaded public health systems.</p>
              <p>As the world reopens, we will encourage adoption of the Covid Watch app in geographically limited areas and with certain at-risk communities, like essential workers and first responders. We call these initial efforts Pilot Programs.</p>
            </div>
          </div>

          <v-row no-gutters class="mr-10 mb-4 mt-10">
            <v-col :sm="5">
              <!-- the hero prop doesnt seem to be working to give the 58px height so inline CSS'ed it -->
              <Button primary hero>
                <a href="mailto: contact@covid-watch.org" >Use Our Solutions</a>
              </Button>
            </v-col>
          </v-row>
        </v-col>

        <v-spacer />
        <v-col cols="3">
          <img class="shrink-on-small-screen" src="../assets/pilot_page/woman_globe.svg" />
        </v-col>
      </v-row>

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
            <div class="copy ml-4">
              <h3>Focus Resources Where They're Needed</h3>
              <p>Manual contact tracing is labor-intensive. Local public health officials need a way to focus and prioritize their efforts. With the Covid Watch app, those who have been possibly exposed to the coronavirus will receive an anonymous alert. That will be followed by instructions on how to protect themselves and their community as well as how to call local public health officials.</p>
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
            <div class="copy">
              <h3>The Highest Standard of Privacy</h3>
              <p>Covid Watch is anonymous and effective.  Our app logs interactions via Bluetooth in a decentralized system. Privacy-focused solutions ease fears of surveillance and lead to higher adoption rates among community members. There’s no need to upend long-standing expectations around privacy during a pandemic when technology exists to safely and securely stop the coronavirus. </p>
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
            <div class="copy">
              <h3>Tech That Works Together</h3>
              <p>We helped set the standard for protecting users’ personal information, and we are committed to bringing this standard to communities around the world. Interoperability of different apps and systems is key to slowing the spread. Our work influenced many other research teams and later the world's largest tech companies to adopt an anonymous approach to coronavirus exposure alerts. We are aligned with the open source community working all over the world to bring forward a cooperative solution to COVID-19.</p>
            </div>
          </v-col>
        </v-row>
      </v-row>

      <!-- help for public health section -->
      <v-row id="public-health" :class="pageSectionClass">
        <div style="display:block">
          <h2 class="section-title">Help for Public Health</h2>
          <p>We have a targeted set of solutions for communities.</p>
        </div>

        <v-row>
          <v-col :md="4" :sm="8" v-for="(card, i) in whyCards" :key="i" class="px-6">
            <WhyCard :img="card.img" :title="card.title" :body="card.body"></WhyCard>
          </v-col>
        </v-row>

        <v-row class="mr-10 mb-4 mt-10 pb-12 d-flex justify-center">
          <v-col :sm="4">
            <!-- the hero prop doesnt seem to be working to give the 58px height so inline CSS'ed it -->
            <Button primary>
              <a href="mailto: contact@covid-watch.org">Use Our Solutions</a>
            </Button>
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
    WhyCard
  },
  head() {
    return {
      title: "Pilot | Covid Watch"
    };
  },
  data: () => ({
    whyCards: [
      {
        title: "Verified Results",
        body:
          "Public health officials will be able to verify positive test results if users have the coronavirus. This prevents false positives and allows those infected to anonymously notify others of their potential exposure.",
        img: require("../assets/pilot_page/man_doctor.svg")
      },
      {
        title: "Your Face Forward",
        body:
          "Covid Watch builds anonymous, effective tools. Our app augments the work of manual contact tracers. When local communities use our app, they can see the name of your public health department and learn how to contact you.",
        img: require("../assets/pilot_page/medical_branding.svg")
      },
      {
        title: "Smart Support",
        body:
          "Covid Watch is learning alongside you as we both work to protect your community. Expect our researchers to be extremely attentive to the app’s effect in your community and responsive feedback in a fast-moving world.",
        img: require("../assets/pilot_page/woman_helpdesk.svg")
      }
    ]
  })
};
</script>
