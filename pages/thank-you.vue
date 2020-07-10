<template>
  <v-container>
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
        <v-col cols="4" class="d-flex justify-center align-center" :sm="12" :md="4">
          <img
              class="header-svg"
              src="../assets/thank_you_page/header_img.svg"
              alt="header-img"
            />
        </v-col>
      </v-row>

      <!-- Volunteers section -->
      <v-row id="volunteers" :class="pageSectionClass">
        <v-col cols="12">
          <div class="mb-12">
            <h1 class="mb-5">Volunteers</h1>
            <div class="subtitle">
              <p>
                Protecting our communities is a team effort. Join us and become
                part of the solution.
              </p>
            </div>
          </div>
          <v-row class="align-center justify-space-between">
            <v-icon large>mdi-chevron-left</v-icon>
              <v-col cols="8" :sm="10" :md="11">
                <img
                  class="volunteers-svg"
                  src="../assets/thank_you_page/volunteers_img.svg"
                  alt="volunteers-img"
                />
              </v-col>
            <v-icon large>mdi-chevron-right</v-icon>
          </v-row>
           <v-row class="justify-center">
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
          <v-row class="justify-center">
            <v-col cols="12" :sm="10" :md="12">
              <img
                  class="research-participants-svg"
                  src="../assets/thank_you_page/research_participants_img.svg"
                  alt="research-participants-img"
                />
            </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="3">
              <Button primary hero nuxt to="/join">Sign up</Button>
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
          <v-row class="justify-start">
            <v-col cols="4" :sm="6" :md="4">
              <img
                  class="pilot-partner-logo-svg"
                  src="../assets/thank_you_page/pilot_partner_logo.svg"
                  alt="pilot-partner-logo"
                />
            </v-col>
          </v-row>
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
          <v-row class="justify-start">
            <v-col cols='10' :sm="12" :md="10">
              <img
                  class="company-logos-svg"
                  src="../assets/thank_you_page/company_logos.svg"
                  alt="company-logos"
                />
            </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="3">
              <Button primary hero nuxt to="/join">Collaborate</Button>
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
          <ul class="contact-list">
            <li>
              Media inquiries:
              <a href="mailto: media@covidwatch.org">media@covidwatch.org</a>
            </li>
            <li>
              Partnerships:
              <a href="mailto: contact@covidwatch.org">partnerships@covidwatch.org</a>
            </li>
            <li>
              All other inquiries:
              <a href="mailto: contact@covidwatch.org">contact@covidwatch.org</a>
            </li>
          </ul>
        </v-col>
      </v-row>

      <!-- Newsletter -->
      <Newsletter></Newsletter>
    </v-col>
  </v-row>
  </v-container>
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

  .email-input .v-input__slot {
    min-height: 52.5px;
    background: #fff;
  }

  img {
    width: 100%;
  }

  a {
    color: #fff;
    text-transform: none;
    font-style: normal;
  }

  p {
    font-size: 22px;
  }

  .contact-list {
    list-style: disc;
  }

  .contact-list a {
    color: #2C58B1;
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
import Newsletter from '../components/Newsletter';
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
    Newsletter
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
