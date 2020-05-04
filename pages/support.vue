<template>
  <v-container>
    <v-row id="support">
      <v-col>
        <v-row id="hero" :class="pageSectionClass" justify="center" align="center">
          <v-col class="hero-copy" :md="7" :sm="10" cols="12">
            <h1>Support Us</h1>

            <div :class="largeMarginClass">
              <p class="title">We can't do this work alone.</p>
              <p>
                Donate to Covid Watch to help us combat COVID-19 with technology.
                Together, we have the power to stop the spread. All contributions
                are tax deductible.
              </p>
            </div>
            <v-row align="center" justify="space-between">
              <v-col cols="8" sm="6">
                <Button hero>Donate</Button>
              </v-col>
              <v-col cols="8" sm="6">
                <a :href="paypalLink">
                  <v-img
                    :src="require('../assets/support_page/payment_options.svg')"
                    max-width="100%"
                    max-height="40px"
                    contain
                    alt="Paypal accepts VISA, Mastercard and American Express"
                  />
                </a>
              </v-col>
            </v-row>
          </v-col>

          <v-spacer></v-spacer>

          <v-col :md="4" :sm="8">
            <v-img
              :src="require('../assets/support_page/people_globe.svg')"
              max-width="100%"
              contain
              alt="Two people holding a globe"
            />
          </v-col>
        </v-row>

        <v-row :class="[pageSectionClass, largeMarginClass]">
          <v-col>
            <h3>How We Use Donations</h3>
            <p
              class="mt-8"
            >Funding for this project will be used primarily for app development and marketing to achieve the high adoption necessary for effectiveness. In terms of product development, funds will be used to support volunteers who are experiencing financial hardship and who require support to be able to continue working on app development, beta testing, and technical support; this would ensure more dedicated hours spent by developers on this project, resulting in higher-quality work being produced as soon as possible.</p>
          </v-col>
        </v-row>

        <v-row :class="pageSectionClass">
          <v-col>
            <h3>Our Legal Status</h3>
            <p
              class="mt-8"
            >We have been approved as a not-for-profit organization in the state of Arizona. We have submitted the required application with the IRS, and are awaiting their response and our 501(c)(3) letter. Per the IRS regulations, while this application is pending, we are allowed to operate as a 501(c)(3) charitable organization and are eligible to receive tax deductible, charitable contributions.</p>
            <p>
              <a
                class="primary--text"
                style="font-weight:600;text-decoration:none;"
                href="mailto: contact@covid-watch.org"
              >Contact us</a> for more information.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button
  },
  head() {
    return {
      title: "Support Us | Covid Watch"
    };
  },
  data: () => ({
    paypalLink:
      "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W3U2KCLJGV9A8&source=url"
  })
};
</script>
