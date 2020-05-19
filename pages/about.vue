<template>
  <v-container grid-list-xs>
    <v-row id="about">
      <!-- First row-->
      <v-row id="header" class="first-row" :class="pageSectionClass">
        <v-col cols="12" :md="7">
          <div class="mb-12">
            <h1 class="mb-5">About Us</h1>
            <div class="subtitle">
              <p>
                Covid Watch puts the power to stop COVID-19 in the palm of your
                hand.
              </p>
              <p>
                We build and foster decentralized technology that allows you to
                send anonymous exposure alerts to protect your community without
                sharing any personal information.
              </p>
              <p>
                Our open source, international nonprofit wants to help the world
                return to normal, so we can be together again, freely, safely
                and securely.
              </p>
            </div>
          </div>

          <v-row no-gutters class="mr-10 mt-10">
            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="5">
              <Button primary hero nuxt to="/pilot">Use Our Solutions</Button>
            </v-col>
            <v-spacer />

            <v-col class="mt-md-12" cols="10" :sm="8" :md="5">
              <Button secondary hero nuxt to="/support">Donate</Button>
            </v-col>
            <v-spacer />
          </v-row>
        </v-col>

        <v-spacer />
        <v-col cols="4">
          <img class="earth_img" src="../assets/about_us/family-earth.svg" />
        </v-col>
      </v-row>

      <!-- We value row -->
      <v-row :class="pageSectionClass" id="we-value">
        <h2>We Value</h2>

        <v-row>
          <v-col
            cols="12"
            :md="4"
            v-for="(card, i) in valueCards"
            :key="i"
            class="d-flex flex-column align-left"
          >
            <img class="we_value_img" :src="card.img" :alt="card.title" />
            <h3 class="mt-10">{{ card.title }}</h3>
            <div class="mt-5">{{ card.body }}</div>
          </v-col>
        </v-row>

        <v-row class="mt-8">
          <CTA
            pdf
            content="Read the Whitepaper"
            href="/covid_watch_whitepaper.pdf"
          ></CTA>
        </v-row>
      </v-row>

      <!-- join us row -->
      <v-row class="join-us" :class="pageSectionClass" id="join-us">
        <v-row class="mb-3">
          <v-col cols="10" :md="2">
            <h2>Join Us</h2>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="8">
            <img class="biking" src="../assets/about_us/cyclists.svg" />
          </v-col>
        </v-row>

        <v-row>
          <v-col
            class="align-center justify-center"
            cols="12"
            :md="3"
            :sm="6"
            v-for="(cta, i) in callsToAction"
            :key="i"
          >
            <div class="mb-4">
              <Button v-if="cta.link" secondary nuxt :to="cta.link">{{
                cta.button_text
              }}</Button>
              <Button v-if="!cta.link" secondary>
                <a href="mailto:partnerships@covid-watch.org">
                  {{ cta.button_text }}
                </a>
              </Button>
            </div>

            <div>{{ cta.cta_text }}</div>
          </v-col>
        </v-row>
      </v-row>

      <!-- team row-->
      <v-row :class="pageSectionClass" id="our-team">
        <v-col cols="11">
          <div class="mb-5">
            <h2>Team</h2>
          </div>
          <p class="subtitle">
            Covid Watch is a group of more than 400 volunteers from around the
            world. Our team includes experts in privacy and public health,
            technologists, developers, writers and designers.
          </p>
        </v-col>

        <template v-for="(founder, n) in founders">
          <v-col :key="n">
            <v-row>
              <v-col :md="5">
                <img class="mr-5" :src="founder.image" />
              </v-col>
              <v-col cols="12" :md="7">
                <div class="title">{{ founder.name }}</div>
                <div class="subtitle">
                  <i>{{ founder.title }}</i>
                </div>
                <img
                  class="founder_img"
                  src="../assets/about_us/top-accent.svg"
                />
                <div>{{ founder.bio }}</div>
              </v-col>
            </v-row>
          </v-col>
          <v-responsive
            v-if="n + 1 === 2"
            :key="`width-${n}`"
            width="1000%"
          ></v-responsive>
        </template>
      </v-row>

      <!-- Advisers row-->
      <v-row :class="pageSectionClass">
        <v-col cols="11">
          <div class="mb-5">
            <h2>Advisers</h2>
          </div>
        </v-col>

        <template>
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col v-for="(adviser, n) in advisers" :key="n" cols="12" sm="4">
                <div class="adviser-card">
                  <a :href="adviser.link" target="_blank">
                    <div class="title-link title">{{ adviser.name }}</div>
                  </a>
                  <img
                    class="founder_img"
                    src="../assets/about_us/top-accent.svg"
                  />
                  <div>{{ adviser.description }}</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-row>

      <!-- academic partners row-->
      <v-row :class="pageSectionClass" id="academic-partners">
        <v-col class="mb-10" :md="4" :sm="8">
          <h3 class="pt-5">Academic Partners</h3>
        </v-col>

        <v-row justify="space-around" align="center">
          <v-col :md="4" :sm="6" class="collab-img-col">
            <a target="_blank" href="https://www.stanford.edu/">
              <v-img
                max-width="100%"
                id="stanford-img"
                class="collab-img"
                :src="stanford.src"
                contain
              />
            </a>
          </v-col>

          <v-col :md="4" :sm="6" class="collab-img-col">
            <a target="_blank" href="https://uwaterloo.ca/">
              <v-img
                max-width="100%"
                id="waterloo-img"
                class="collab-img"
                :src="waterloo.src"
                contain
              />
            </a>
          </v-col>
        </v-row>
      </v-row>

      <!-- colabs row-->
      <v-row :class="pageSectionClass" id="collaborator-projects">
        <v-col class="mb-10" :md="4" :sm="8">
          <h3 class="pt-6">Collaborator Partners</h3>
        </v-col>

        <v-row justify="center" align="center">
          <v-col
            cols="12"
            :md="4"
            v-for="(collab, i) in collaborator_projects"
            :key="i"
            :id="collab.id"
            class="text-center collab-img-col mb-6"
          >
            <a target="_blank" :href="collab.url">
              <v-img class="collab-img" :src="collab.src" contain />
              <span class="body-2">{{ collab.name }}</span>
            </a>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.collab-img-col {
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
}
.collab-img {
  max-width: 260px;
  max-height: 70px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 400px) {
  .we_value_img {
    max-width: 260px;
  }
}

@media (max-width: 950px) {
  .earth_img {
    display: none;
  }

  .biking {
    display: none;
  }
}

.founder_img {
  max-width: 100%;
}

.we_value_img {
  min-height: 263px;
}

.first-row {
  background: linear-gradient(
    0deg,
    rgba(67, 197, 217, 0.2),
    rgba(255, 255, 255, 0) 20%
  );
}
.about-us-copy {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;

  color: #585858;
}
.join-us {
  background: rgba(245, 229, 230, 0.6);
}

.adviser-card {
  margin: 0px 35px 35px 0px;
  padding: 10px;
}
</style>

<script>
import Button from "../components/Button.vue";
import CTA from "../components/CTA.vue";

export default {
  data: () => ({
    callsToAction: [
      {
        button_text: "Volunteer",
        cta_text:
          "Covid Watch is a volunteer-led effort to fight COVID-19. Are you a developer? A public health expert? A writer? We want your help.",
        link: "/join",
      },
      {
        button_text: "Donate",
        cta_text:
          "Our organization is here to make a difference, not a profit. We need your support to slow the spread. ",
        link: "/support",
      },
      {
        button_text: "Start a Pilot",
        cta_text:
          "Covid Watch works best when a community adopts it together. Are you looking for an app to help protect your state? Your company? Your country? Let’s talk.",
        link: "/pilot",
      },
      {
        button_text: "Partner With Us",
        cta_text:
          "We are working with partners that share our commitment to health and human rights. If your organization has expertise or tools to help stop the spread, let’s work together.",
        link: "",
      },
    ],
    valueCards: [
      {
        title: "Health",
        body:
          "Technology should be a tool to keep those around us safe. Global pandemics threaten our health and economy. We make tools that will allow us to take back control of our lives, safely and efficiently.",
        img: require("../assets/about_us/woman-exercising.svg"),
      },
      {
        title: "Privacy",
        body:
          "Each person should control information about their health, even when our health impacts those around us. Covid Watch does not collect any personal information. We protect data and privacy while protecting communities.",
        img: require("../assets/about_us/woman-medical-advice.svg"),
      },
      {
        title: "Cooperation",
        body:
          "We are setting precedents  in real time, giving individuals and communities the power to confront this global challenge. We work closely with public health officials and organizations that share our values.",
        img: require("../assets/about_us/woman-social-network.svg"),
      },
    ],
    advisers: [
      {
        name: "Charles Belle, JD",
        description:
          "Fellow at Center for Internet and Society, Stanford Law School",
        link: "http://cyberlaw.stanford.edu/about/people/charles-belle",
      },
      {
        name: "Dan Boneh, PhD",
        description:
          "Professor of Computer Science and Electrical Engineering, Stanford University",
        link: "https://profiles.stanford.edu/dan-boneh",
      },
      {
        name: "Joshua Cohen, PhD",
        description:
          "Faculty at Apple University; Distinguished Senior Fellow at UC Berkeley; Editor, Boston Review",
        link: "http://bostonreview.net/joshua-cohen",
      },
      {
        name: "Peter Eckersley, PhD",
        description: "Convener, stop-covid.tech",
        link: "https://stop-covid.tech",
      },
      {
        name: "Jerry Fiddler",
        description: "Principal, Zygote Ventures",
        link: "http://zygoteventures.com/about-the-principal/",
      },
      {
        name: "Al Gidari, JD",
        description:
          "Director of Privacy at Center for Internet and Society, Stanford Law School",
        link: "http://cyberlaw.stanford.edu/about/people/albert-gidari",
      },
      {
        name: "Robert M. Grant, MD, MPH",
        description:
          "Professor of Medicine, University of California San Francisco",
        link: "https://profiles.ucsf.edu/robert.grant"
      },
      {
        name: "Jeffrey Ladish",
        description: "Security Consultant, Gordian Research",
        link: "https://jeffreyladish.com/",
      },
      {
        name: "Plinio Pelegrini Morita, PhD",
        description:
          "J.W. Graham Information Technology Emerging Leader Chair in Applied Health Informatics, University of Waterloo",
        link:
          "https://uwaterloo.ca/advanced-interface-design-lab/people-profiles/plinio-pelegrini-morita",
      },
      {
        name: "Julie Parsonnet, MD",
        description:
          "Professor of Medicine and of Epidemiology and Population Health, Stanford University",
        link: "https://profiles.stanford.edu/julie-parsonnet",
      },
      {
        name: "Harper Reed",
        description: "Entrepreneur, TCN Coalition",
        link: "https://harperreed.com/",
      },
      {
        name: "Arthur Reingold, MD",
        description:
          "Professor and Division Head of Epidemiology and Biostatistics, UC Berkeley School of Public Health",
        link: "https://publichealth.berkeley.edu/people/arthur-reingold/",
      },
      {
        name: "Asa Tapley, MD, MSc",
        description:
          "Fellow, Allergy and Infectious Diseases, University of Washington",
        link: "https://aid.uw.edu/fellow/asa-tapley",
      },
    ],
    founders: [
      {
        image: require("../assets/about_us/tina-photo.svg"),
        name: "Tina White",
        title: "Executive Director",
        bio:
          "Tina is a PhD candidate at Stanford University where she designs neural network architectures for scientific simulations. Covid Watch began with a post she made in the early days of the pandemic.",
      },
      {
        image: require("../assets/about_us/james-photo.svg"),
        name: "James Petrie",
        title: "Head of Research",
        bio:
          "James is a PhD candidate in Applied Mathematics at the University of Waterloo where he focuses on numerical modelling, machine learning, and optimization.",
      },
      {
        image: require("../assets/about_us/rhys-photo.svg"),
        name: "Rhys Fenwick",
        title: "Head of Communications",
        bio:
          "Rhys is a science communicator from Australia with a background in biotechnology and software development. His main area of focus is communicating emerging technologies to broad audiences.",
      },
      {
        image: require("../assets/about_us/zsombor-photo.svg"),
        name: "Zsombor Szabo",
        title: "Head of Engineering",
        bio:
          "Zsombor is a mobile app developer with more than ten years of experience building next-generation networks, notably including an app called Berkanan Messenger that runs on Bluetooth mesh networks.",
      },
    ],
    stanford: {
      src: require("../assets/about_us/logo-stanford.svg"),
      href: "https://www.stanford.edu/",
    },
    waterloo: {
      src: require("../assets/about_us/logo-university-of-waterloo.svg"),
      href: "https://uwaterloo.ca/",
    },
    collaborator_projects: [
      {
        id: "tcn-coalition",
        url: "https://tcn-coalition.org/",
        src: require("../assets/about_us/logo-TCN-coalition.svg"),
        name: "Founding Member",
      },
      {
        id: "coepi",
        url: "https://www.coepi.org/",
        src: require("../assets/about_us/logo-coepi.svg"),
        name: "CoEpi",
      },
      {
        id: "openmined",
        url: "https://www.openmined.org/",
        src: require("../assets/about_us/logo-openmined.svg"),
        name: "OpenMined",
      },
    ],
    title: "About Us | Covid Watch",
  }),
  components: {
    Button,
    CTA,
  },
  head() {
    return {
      title: "About Us | Covid Watch",
    };
  },
};
</script>
