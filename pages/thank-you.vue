<template>
  <v-row id="thank-you">
    <v-col cols="12" class="py-0">
      <!-- Header -->
      <v-row id="header" :class="pageSectionClass">
        <v-col cols="12" :md="7" :sm="12">
          <div class="mb-12">
            <h1 class="mb-5">Thank you! We couldn't do this without you.</h1>
            <div class="subtitle">
              <p>
                Thank you for being part of the solution. Together we’ve created
                a diverse community of researchers, developers, public health
                professionals, security experts and more. Your contribution has
                a tremendous impact, and we couldn’t thank you enough.
              </p>
            </div>
          </div>
          <v-row class="d-flex justify-center">
            <h3 class="mb4">Let's connect</h3>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="group pa-2">
              <a :href="github.link" class="ma-1">
                <v-icon large class="blue-icon">mdi-github</v-icon>
              </a>
              <a :href="facebook.link" class="ma-1">
                <v-icon large class="blue-icon">mdi-facebook</v-icon>
              </a>
              <a :href="twitter.link" class="ma-1">
                <v-icon large class="blue-icon">mdi-twitter</v-icon>
              </a>
            </span>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-row>
          <div id="animal-img" class="placeholder"></div>
        </v-row>
      </v-row>

      <!-- Volunteers section -->
      <v-row id="volunteers" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h1 class="mb-5">Volunteers</h1>
            <div class="subtitle">
              <p>
                Protecting our communities is a team effoert. Join us and become
                part of the solution.
              </p>
            </div>
          </div>
          <v-row class="d-flex align-center justify-center">
            <v-icon large>mdi-chevron-left</v-icon>
            <div id="animal-img-2" class="placeholder"></div>
            <v-icon large>mdi-chevron-right</v-icon>
            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="3">
              <Button primary hero nuxt to="/join">Join Us</Button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Research participants section -->
      <v-row id="research-participants" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h1 class="mb-5">Research Participants</h1>
            <div class="subtitle">
              <p>
                Want to shape the future of the app? Sign up below and become a
                research participant.
              </p>
            </div>
          </div>
          <v-row class="d-flex align-center justify-center">
            <div id="animal-img-3" class="placeholder"></div>
            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="3">
              <Button primary hero nuxt to="/pilot">Sign up</Button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Pilot partners section -->
      <v-row id="pilot-partners" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h1 class="mb-5">Pilot Partners</h1>
            <div class="subtitle">
              <p>
                Want to bring Covid Watch to your community? Learn how to start
                a pilot.
              </p>
            </div>
          </div>
          <div id="partner-img" class="placeholder"></div>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="3">
              <Button primary hero nuxt to="/pilot">Start a pilot</Button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Companies section -->
      <v-row id="companies" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h1 class="mb-5">Companies</h1>
            <div class="subtitle">
              <p>
                Does your organization want to work with us to help stop the
                spread of COVID-19? Get in touch.__
              </p>
            </div>
          </div>
          <div id="companies-img" class="placeholder"></div>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="3">
              <Button primary hero nuxt to="/forum">Collaborate</Button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Connect with us section -->
      <v-row id="connect-with-us" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h2 class="mb-8">Connect With Us</h2>
            <div class="subtitle">
              <p>
                Do you want to help us tell our story? Does your organization
                want to work with us to help stop the spread of COVID-19? Get in
                touch:
              </p>
            </div>
          </div>
          <ul class="bullet-point-list">
            <li>
              Media inquiries: media@covidwatch.org
            </li>
            <li>
              Partnerships: partnerships@covidwatch.org
            </li>
            <li>
              All other inquiries: contact@covidwatch.org
            </li>
          </ul>
        </v-col>
      </v-row>

      <!-- Newsletter section -->
      <v-row id="newsletter" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h2 class="mb-8">Newsletter</h2>
            <div class="subtitle">
              <p class="bold">
                To receive periodic updates, subscribe to our newsletter by
                entering your email below.
              </p>
            </div>
          </div>
          <v-row class="d-flex">
            <v-col cols="10" class="mb-10 mb-md-0" :sm="8" :md="6">
              <v-text-field
                :outlined="true"
                placeholder="Email address"
                class="email-input"
              ></v-text-field>
            </v-col>
            <v-col cols="10" class="mb-10 mb-md-0" :sm="8" :md="3">
              <Button primary hero nuxt to="/news">Subscribe</Button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
#thank-you {
  #header {
    background: linear-gradient(
      0deg,
      rgba(67, 197, 217, 0.2),
      rgba(255, 255, 255, 0) 60%
    );
  }

  #newsletter {
    background: rgba(69, 197, 217, 0.1);
  }

  #animal-img {
    width: 412px;
    height: 475px;
  }

  #animal-img-2 {
    width: 1090px;
    height: 404px;
  }

  #animal-img-3 {
    width: 1090px;
    height: 135px;
  }

  #partner-img {
    width: 353px;
    height: 108px;
  }

  #companies-img {
    width: 921px;
    height: 117px;
  }

  .placeholder {
    background: grey;
  }

  .email-input .v-input__slot {
    min-height: 52.5px;
    background: #fff;
  }

  a {
    color: white;
    text-transform: none;
    font-style: normal;
  }

  p {
    font-size: 22px;
  }

  .bullet-point-list {
    list-style: disc;
  }

  .bold {
    font-weight: 600;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 16px;
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

  .blue-icon {
    font-size: 55px !important;
    color: #2c58b1;
  }
}
</style>

<script>
import Button from "../components/Button";
import CTA from "../components/CTA";
import {
  TWITTER,
  FACEBOOK,
  INSTAGRAM,
  GITHUB,
} from "@/assets/data/social_media.js";

export default {
  components: {
    Button,
    CTA,
  },
  head() {
    return {
      title: "Thank You | Covid Watch",
    };
  },
  data: () => ({
    twitter: TWITTER,
    instagram: INSTAGRAM,
    facebook: FACEBOOK,
    github: GITHUB,
  }),
};
</script>
