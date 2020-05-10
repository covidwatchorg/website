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
          <CTA pdf content="Read the Whitepaper" href="/covid_watch_whitepaper.pdf"></CTA>
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
                <a
                  href="mailto:contact@covid-watch.org"
                  >{{ cta.button_text }}</a
                >
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
                <div>
                  {{ founder.bio }}
                </div>
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

      <!-- Advisors row-->
      <v-row :class="pageSectionClass">
        <v-col cols="11">
          <div class="mb-5">
            <h2>Advisors</h2>
          </div>
        </v-col>

        <template>
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col
                v-for="(advisor, n) in advisors"
                :key="n"
                cols="12"
                sm="4"
              >
                <div
                  class="advisor-card"
                >
                  <div class="title">
                    {{ advisor.name }}
                  </div>
                  <div>
                    {{ advisor.description }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-row>

      <!-- academic partners row-->
      <v-row :class="pageSectionClass" id="academic-partners">
        <v-col class="mb-10" :md="3" :sm="8">
          <h3 class="pt-5">Academic Partners</h3>
        </v-col>

        <v-row justify="space-around" align="center">
          <v-col :md="4" :sm="6">
            <a href="https://www.stanford.edu/">
              <v-img
                max-width="100%"
                class="stanford-img"
                :src="stanford.src"
                @mouseover="stanford.src = stanford.color"
                @mouseleave="stanford.src = stanford.grey"
              />
            </a>
          </v-col>

          <v-col :md="4" :sm="6">
            <a href="https://uwaterloo.ca/">
              <v-img
                max-width="100%"
                class="waterloo-img"
                :src="waterloo.src"
                @mouseover="waterloo.src = waterloo.color"
                @mouseleave="waterloo.src = waterloo.grey"
              />
            </a>
          </v-col>
        </v-row>
      </v-row>

      <!-- colabs row-->
      <v-row :class="pageSectionClass" id="collaborator-projects">
        <v-col class="mb-10" :md="3" :sm="8">
          <h3 class="pt-6">Collaborator Partners</h3>
        </v-col>

        <v-row class="d-md-flex justify-space-evenly no-gutters align-center">
          <v-col
            class="mt-6 mt-sm-0"
            cols="12"
            :sm="4"
            v-for="(collab, i) in collaborator_projects"
            :key="i"
            @mouseover="collab.src = collab.color"
            @mouseleave="collab.src = collab.grey"
            :id="collab.id"
          >
            <a :href="collab.url" class="d-flex flex-column align-center">
              <img class="collab-img" :src="collab.src" />
                <div style="font-size: 16px;">{{ collab.name }}</div>
            </a>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  #safe-paths {
        div {
      text-align: center;
    }
  }

  #tcn-coalition {
    img {
      margin-left: 80px;
    }

    div {
      text-align: center;
      margin-left: 80px;
    }
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
.waterloo-img {
  margin-left: -40px;
  max-width: 260px;
}

.stanford-img {
   max-width: 260px;
}

.advisor-card {
  margin: 0px 20px 30px 0px;
  padding-left: 10px;
}

.org {
  font-size: 14px;
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
        link: "/join"
      },
      {
        button_text: "Donate",
        cta_text:
          "Our organization is here to make a difference, not a profit. We need your support to slow the spread. ",
        link: "/support"
      },
      {
        button_text: "Start a Pilot",
        cta_text:
          "Covid Watch works best when a community adopts it together. Are you looking for an app to help protect your state? Your company? Your country? Let’s talk.",
        link: "/pilot"
      },
      {
        button_text: "Partner With Us",
        cta_text:
          "We are working with partners that share our commitment to health and human rights. If your organization has tools to help stop the spread or expertise, let’s work together.",
        link: ""
      }
    ],
    valueCards: [
      {
        title: "Health",
        body:
          "Technology should be a tool to keep those around us safe. Global pandemics threaten our health and economy. We make tools that will allow us to take back control of our lives, safely and efficiently.",
        img: require("../assets/about_us/woman-exercising.svg")
      },
      {
        title: "Privacy",
        body:
          "Each person should control information about their health, even when our health impacts those around us. Covid Watch does not collect any personal information. We protect data and privacy while protecting communities.",
        img: require("../assets/about_us/woman-medical-advice.svg")
      },
      {
        title: "Cooperation",
        body:
          "We are setting precedents  in real time, giving individuals and communities the power to confront this global challenge. We work closely with public health officials and organizations that share our values.",
        img: require("../assets/about_us/woman-social-network.svg")
      }
    ],
    advisors: [
      {
        name: "Dr. Plinio Pelegrini Morita (PhD)",
        description: "Assistant Professor and J.W. Graham Information Technology Emerging Leader Chair in Applied Health Informatics at School of Public Health and Health Systems, University of Waterloo, Canada."
      },
      {
        name: "Joshua Cohen",
        description: "Faculty at Apple University; Distinguished Senior Fellow at UC Berkeley; Editor at Boston Review."
      },
       {
        name: "Dan Boneh",
        description: "Professor of Computer Science and Electrical Engineering at Stanford University."
      },
      {
        name: "Al Gidari",
        description: "Director of Privacy at Center for Internet and Society, Stanford Law School."
      },
      {
        name: "Julie Parsonnet",
        description: "Professor of Medicine and of Epidemiology and Population Health at Stanford University."
      },
      {
        name: "Charles Belle",
        description: "Fellow at Center for Internet and Society at Stanford Law School."
      }
    ],
    founders: [
      {
        image: require("../assets/about_us/tina-photo.svg"),
        name: "Tina White",
        title: "Executive Director",
        bio:
          "Tina is a PhD candidate at Stanford University where she designs neural network architectures for scientific simulations. Covid Watch began with a post she made in the early days of the pandemic."
      },
      {
        image: require("../assets/about_us/james-photo.svg"),
        name: "James Petrie",
        title: "Head of Research",
        bio:
          "James is a PhD candidate in Applied Mathematics at the University of Waterloo where he focuses on numerical modelling, machine learning, and optimization."
      },
      {
        image: require("../assets/about_us/rhys-photo.svg"),
        name: "Rhys Fenwick",
        title: "Head of Communications",
        bio:
          "Rhys is a science communicator from Australia with a background in biotechnology and software development. His main area of focus is communicating emerging technologies to broad audiences."
      },
      {
        image: require("../assets/about_us/zsombor-photo.svg"),
        name: "Zsombor Szabo",
        title: "Head of Engineering",
        bio:
          "Zsombor is a mobile app developer with more than ten years of experience building next-generation networks, notably including an app called Berkanan Messenger that runs on Bluetooth mesh networks."
      }
    ],
    stanford: {
      grey: require("../assets/about_us/logo-stanford-black.svg"),
      color: require("../assets/about_us/logo-stanford-red.svg"),
      src: require("../assets/about_us/logo-stanford-black.svg"),
      href: "https://www.stanford.edu/"
    },
    waterloo: {
      grey: require("../assets/about_us/logo-university-of-waterloo-gray.svg"),
      color: require("../assets/about_us/logo-university-of-waterloo.svg"),
      src: require("../assets/about_us/logo-university-of-waterloo-gray.svg"),
      href: "https://uwaterloo.ca/"
    },
    collaborator_projects: [
      {
        id: "coepi",
        url: "https://www.coepi.org/",
        grey: require("../assets/about_us/logo-coepi-gray.svg"),
        color: require("../assets/about_us/logo-coepi.svg"),
        src: require("../assets/about_us/logo-coepi-gray.svg"),
        name: "CoEpi"
      },
      {
        id: "safe-paths",
        url: "https://covidsafepaths.org/",
        grey: require("../assets/about_us/logo-privacykit-gray.svg"),
        color: require("../assets/about_us/logo-privacykit.svg"),
        src: require("../assets/about_us/logo-privacykit-gray.svg"),
        name: "Covid SafePaths"
      },
      {
        id: "tcn-coalition",
        url: "https://tcn-coalition.org/",
        grey: require("../assets/about_us/logo-TCN-coalition-gray.svg"),
        color: require("../assets/about_us/logo-TCN-coalition.svg"),
        src: require("../assets/about_us/logo-TCN-coalition-gray.svg"),
        name: "Founding Member"
      }
    ],
    title: "About Us | Covid Watch"
  }),
  components: {
    Button,
    CTA
  },
  head() {
    return {
      title: "About Us | Covid Watch"
    };
  }
};
</script>
