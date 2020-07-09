<template>
  <!-- IMPROVEMENT: make these roles updatable via Airtable -->
  <v-container>
    <v-row id="join">
      <v-col>
        <v-row id="hero">
          <v-col class="hero-copy" :md="7" :sm="10" cols="12">
            <h1>Join Our Team</h1>

            <div class="mt-12">
              <p class="title">We can't do this work alone.</p>
              <p>
                We've grown from a pair of researchers from Stanford University
                and the University of Waterloo into an interdisciplinary team of
                more than 400 researchers, software engineers, public health
                professionals. and security experts.
              </p>
              <p>
                In addition to our founders, a number of our volunteers are
                working full-time on the project. However, there is plenty of
                room to contribute as a volunteer or advisor even if you can
                only put in a few hours a week.
              </p>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col :md="4" :sm="8">
            <img
              class="donate-svg"
              src="../assets/support_page/people_globe.svg"
              alt="globe"
            />
          </v-col>
        </v-row>

        <!-- additional copy -->
        <v-row class="mt-12 pt-6">
          <v-col>
            <h2>Volunteer</h2>
            <p class="mt-6">
              If you'd like an invitation to the 500+ person Slack group that
              we're using to coordinate, fill out the form linked below.
            </p>

            <v-col :md="4">
              <Button href="https://covidapp.typeform.com/to/MnRmBN"
                >I want to volunteer!</Button
              >
            </v-col>
            <p>
              <b>We also have some open positions!</b> Check them out <nuxt-link to="/helpout">here</nuxt-link>
            </p>

            <h4 class="mt-6 mb-4">Most Wanted Volunteers</h4>
            <ul>
              <li v-for="(item, i) in urgentRoles" :key="i">
                {{ item.role }} {{ item.desc }}
              </li>
            </ul>

            <h4 class="mt-6">Developers</h4>
            <p>
              Developers who want to join our growing effort should feel free to
              jump in directly by looking at open issues in the
              <a :href="github.link">Covid Watch</a>
              repo.
            </p>
            <p>Some of the skillsets we need:</p>

            <ul>
              <li v-for="(item, i) in developerRoles" :key="i">
                {{ item.role }}
              </li>
            </ul>

            <h4 class="mt-6">Healthcare Professionals</h4>
            <p>
              We are looking for healthcare professionals and experts to join
              our effort. We'd love to speak with you even if you just have a
              couple of hours to provide some advice.
            </p>
            <p>Some of the expertise we need:</p>

            <ul>
              <li v-for="(item, i) in medicalRoles" :key="i">
                {{ item.role }}
              </li>
            </ul>

            <h4 class="mt-6">Other Roles</h4>
            <p>Some of the skillsets we need:</p>
            <ul>
              <li v-for="(item, i) in otherRoles" :key="i">{{ item.role }}</li>
            </ul>
          </v-col>
        </v-row>

        <v-row class="my-12">
          <v-col>
            <h2>Other Ways to Get Involved</h2>

            <h3>Covid Watch Forum</h3>
            <p class="mt-4">
              This is a space for our pilot partners and advisory council of
              subject matter experts to collaborate, share best practices and
              learn from each other. Learn more
              <nuxt-link to="/forum">here</nuxt-link>.
            </p>

            <h3>Follow Us or Donate</h3>
            <p class="mt-4">
              You don't need to join our team to help Covid Watch! It would also
              help us out if you'd consider other options:
            </p>

            <ul>
              <li>
                Like and share us on
                <a :href="twitter.link">Twitter</a>,
                <a :href="facebook.link">Facebook</a>,
                <a :href="instagram.link">Instagram</a>,
                <a :href="medium.link">Medium</a>, and
                <a :href="github.link">Github</a>
              </li>
              <li>
                Make a
                <nuxt-link to="/support">donation</nuxt-link> to support our
                work
              </li>
              <li>
                Subscribe to our newsletter (at the bottom of this page) below
                to stay up to date on our work
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row class="mb-12">
          <v-col>
            <h3>Other Inquiries?</h3>
            <p class="mt-8">Reach out to our team:</p>

            <ul>
              <li>
                Media:
                <a href="mailto:media@covidwatch.org">media@covidwatch.org</a>
              </li>
              <li>
                General:
                <a href="mailto: contact@covidwatch.org"
                  >contact@covidwatch.org</a
                >
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Newsletter />
  </v-container>
</template>

<style lang="scss">
#join {
  @media (max-width: 400px) {
    .donate-svg {
      display: none;
    }
  }

  @media (min-width: 400px) {
    .donate-svg {
      max-height: 360px;
    }

    #mc-embedded-subscribe {
      margin-left: 0px;
      margin-top: 6px;
      width: 180px;
    }
  }
  ul {
    list-style-type: none;
  }
}
</style>

<script>
import Newsletter from "../components/Newsletter";
import Button from "../components/Button";
import {
  TWITTER,
  FACEBOOK,
  INSTAGRAM,
  MEDIUM,
  GITHUB,
} from "@/assets/data/social_media.js";

export default {
  components: {
    Newsletter,
    Button,
  },
  data: () => ({
    twitter: TWITTER,
    instagram: INSTAGRAM,
    facebook: FACEBOOK,
    medium: MEDIUM,
    github: GITHUB,
    urgentRoles: [
      {
        role: "Web Developers",
        desc:
          "to build an organization-facing web app (counties, businesses, health authorities, etc)",
      },
      {
        role: "Executive Assistants",
        desc: "with consistent full-time or part-time availability",
      },
      {
        role: "Marketing and Communications Managers",
        desc: "to lead aspects of marketing, media outreach, and fundraising",
      },
      {
        role: "CFOs & Finance Directors",
        desc: "to help build & maintain our financial models, budgets etc",
      },
    ],
    otherRoles: [
      {
        role: "PR and Outreach",
      },
      {
        role: "Social Media Manager",
      },
      {
        role:
          "Fundraising and grant applications for not-for-profit organisations",
      },
      {
        role: "Blogging, particularly with a scientific background",
      },
      {
        role:
          "Legal expertise around the handling of personal health information",
      },
      {
        role: "Data re-identification or privacy research and implementation",
      },
      {
        role: "Cryptography and information security",
      },
      {
        role: "Electrical engineering",
      },
    ],
    developerRoles: [
      {
        role: "UI / UX Design",
      },
      {
        role: "iOS and Android native app development",
      },
      {
        role: "Animation Experience",
      },
      {
        role: "Software project management",
      },
      {
        role: "Experience with mobile Bluetooth APIs",
      },
      {
        role: "Experience with cryptography",
      },
    ],
    medicalRoles: [
      {
        role:
          "Public health experience, especially with contact tracing or public health research with infectious diseases",
      },
      {
        role:
          "Deep knowledge of health systems (at federal, state, province, or county level)",
      },
      {
        role: "Public health intervention research",
      },
      {
        role: "Science of behavior change",
      },
      {
        role: "Infectious disease",
      },
      {
        role:
          "Digital health and designing for public health and medical decision-making",
      },
      {
        role: "Experience with labs and testing",
      },
    ],
  }),
  title: "Join Us | Covid Watch",
};
</script>
