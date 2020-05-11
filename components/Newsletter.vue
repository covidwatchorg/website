<template>
  <v-row>
    <v-col cols="12" class="pa-12 mt-12 d-flex" id="subscribe">
      <v-col cols="9">
        <h2>Newsletter</h2>

        <p
          class="mt-8"
        >To receive periodic updates, subscribe to our newsletter by entering your email below.</p>

        <!-- Jesse note: there is a lot of pre-built code here that is copy/pasted from Mailchimp's 'create a subscribe button' service, be careful editing ids -->
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div class="mt-10" id="mc_embed_signup">
          <form
            action="https://covid19risk.us19.list-manage.com/subscribe/post?u=2edaa31c7afb7799ee770eb46&amp;id=362b89c2c0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            ref="mc-embedded-subscribe-form"
            class="validate pa-0"
            target="_blank"
            novalidate
          >
            <v-row id="mc_embed_signup_scroll" align="center">
              <v-col>
                <div class="pa-0 mc-field-group">
                  <input
                    placeholder="Email address"
                    type="email"
                    value
                    name="EMAIL"
                    class="pl-4 required email"
                    id="mce-EMAIL"
                  />
                </div>

                <div id="mce-responses" class="clear">
                  <div class="response" style="display:none"></div>
                  <div class="response" style="display:none"></div>
                </div>

                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                    name="b_2edaa31c7afb7799ee770eb46_362b89c2c0"
                    tabindex="-1"
                    value
                  />
                </div>
              </v-col>

              <v-col cols="10" :sm="6" :md="3">
                <Button hero id="mc-embedded-subscribe" name="subscribe" @click="submit">Subscribe</Button>
              </v-col>
            </v-row>
          </form>
        </div>
      </v-col>

      <v-spacer></v-spacer>

      <v-col id="subscribe-woman-col" cols="3">
        <img src="../assets/faq_page/subscribe_woman.svg" alt="subscribe" />
      </v-col>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
#subscribe {
  // note: this is #71cddf with 15% opacity
  background-color: rgba(113, 205, 223, 0.15);

  #mc_embed_signup_scroll {
    display: flex;
    align-items: baseline;
  }

  .mc-field-group {
    min-width: 500px;

    #mce-EMAIL {
      // from Figma:
      /* White */
      background: #ffffff;
      /* Light Grey */
      border: 2px solid #bdbdbd;
      box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      width: 100%;
      font-style: italic;
      padding: 12px;
    }
  }

  @media screen {
    @media (max-width: 960px) {
      #subscribe-woman-col {
        display: none;
      }

      #mc_embed_signup_scroll {
        display: block;
      }

      .mc-field-group {
        min-width: 200px;
      }

      #mc-embedded-subscribe {
        margin: 1em 0 1em 0;
      }
    }
  }
}
</style>


<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"
></script>
<script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
<script>
(function($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
  fnames[3] = "ADDRESS";
  ftypes[3] = "address";
  fnames[4] = "PHONE";
  ftypes[4] = "phone";
  fnames[5] = "BIRTHDAY";
  ftypes[5] = "birthday";
})(jQuery);
var $mcj = jQuery.noConflict(true);
</script>
<script>
import Button from "../components/Button.vue";

export default {
  name: "Newsletter",
  components: {
    Button
  },
  methods: {
    submit() {
      this.$refs["mc-embedded-subscribe-form"].submit();
    }
  }
};
</script>