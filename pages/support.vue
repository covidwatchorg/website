<template>
  <v-container>
    <v-row id="support">
      <v-col>
        <v-row id="hero">
          
          <v-col class="hero-copy" :md="7" :sm="10">
            <h1>Support Us</h1>


            <div class="mt-12">
              <p class="title">We can't do this work alone.</p>
              <p>Donate to Covid Watch to help us combat COVID-19 with technology.  Together, we have the power to stop the spread. All contributions are tax deductible</p>
            </div>

            <!-- inline style to be updated once we have global widths for Button component possibly -->
            <div class="mt-16 pt-8 donate-container d-flex flex-wrap">
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W3U2KCLJGV9A8&source=url">
                <Button class="button-donate" hero>Donate</Button>
              </a>
              
              <img class="py-4" src="../assets/support_page/payment_options.svg" alt="payment">
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col :md="4" :sm="8">
            <img class="donate-svg" src="../assets/support_page/people_globe.svg" alt="globe">
          </v-col>
        </v-row>

        <!-- additional copy -->
        <v-row class="mt-12 pt-6">
          <v-col>
            <h3>How We Use Donations</h3>
            <p class="mt-8">Funding for this project will be used primarily for app development and marketing to achieve the high adoption necessary for effectiveness.  In terms of product development, funds will be used to support volunteers who are experiencing financial hardship and who require support to be able to continue working on app development, beta testing, and technical support; this would ensure more dedicated hours spent by developers on this project, resulting in higher-quality work being produced as soon as possible.</p>
          </v-col>        
        </v-row>

        <v-row class="mb-12">
          <v-col>
            <h3>Our Legal Status</h3>
            <p class="mt-8">We have been approved as a not-for-profit organization in the state of Arizona. We have submitted the required application with the IRS, and are awaiting their response and our 501(c)(3) letter. Per the IRS regulations, while this application is pending, we are allowed to operate as a 501(c)(3) charitable organization and are eligible to receive tax deductible, charitable contributions. </p>
            <p><a class="primary--text" style="font-weight:600;text-decoration:none;" href="mailto: contact@covid-watch.org">Contact us</a> for more information.</p>
          </v-col>   
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  #support {
      .hero-copy {
        margin-top: 50px;
      }

      @media (max-width:400px){
        .button-donate {
          width: 280px;
          height:50px;
          font-weight:bold;
        }

        .donate-svg {
            max-height:280px;
        }
      }

      @media (min-width:400px){
        .button-donate {
          width:300px;
          height:50px;
          font-weight:bold;
        }

        .donate-svg {
            max-height:360px;
        }
      }



    .donate-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 520px;
    }

  }

</style>

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
  }
};
</script>
