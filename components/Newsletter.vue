<template>
    <v-row>
        <v-col cols="12" class="pa-12 mt-12 d-flex" id="subscribe">
            

            <v-col cols="9">
                <h2 class="plum--text">Newsletter</h2>

                <p class="mt-8">To receive periodic updates, subscribe to our newsletter by entering your email below.</p>

                <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                <div class="mt-10" id="mc_embed_signup">
                    <form action="https://covid19risk.us19.list-manage.com/subscribe/post?u=2edaa31c7afb7799ee770eb46&amp;id=362b89c2c0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate pa-0" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll" class="d-flex align-baseline">

                            <div>
                                <div class="pa-0 mc-field-group">
                                    <input  placeholder="Email address" type="email" value="" name="EMAIL" class="pl-4 required email" id="mce-EMAIL">
                                </div>

                                <div id="mce-responses" class="clear">
                                    <div class="response" style="display:none"></div>
                                    <div class="response" style="display:none"></div>
                                </div>
                                
                                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                    <input type="text" name="b_2edaa31c7afb7799ee770eb46_362b89c2c0" tabindex="-1" value="">
                                </div>
                            </div>

                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe" class="ma-0 pa-0 ml-6 button">
                        </div>
                    </form>
                </div>
            </v-col>

            <v-spacer></v-spacer>

            <v-col cols="3">
                <img src="../assets/faq_page/subscribe_woman.svg" alt="subscribe">
            </v-col>

            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>



            <!-- Begin Mailchimp Signup Form -->

            
<!-- PRE SIGNIFICANT REFACTOR
            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
            <form action="https://covid19risk.us19.list-manage.com/subscribe/post?u=2edaa31c7afb7799ee770eb46&amp;id=362b89c2c0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll" class="d-flex">

                    <div >
                        <div class="mc-field-group">
                            <input  placeholder="example@xyz.com" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                        </div>

                        <div id="mce-responses" class="clear">
                            <div class="response" style="display:none"></div>
                            <div class="response" style="display:none"></div>
                        </div>
                        
                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups
                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input type="text" name="b_2edaa31c7afb7799ee770eb46_362b89c2c0" tabindex="-1" value="">
                        </div>
                    </div>

                    <input  type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
            </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
             -->
            <!--End mc_embed_signup -->
        </v-col>
    </v-row>
</template>

<style lang="scss" scoped>
    #subscribe {
        // note: this is #71cddf with 15% opacity
        background-color: rgba(113, 205, 223, 0.15);

        #mc-embedded-subscribe {
            background-color: #2C58B1;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            height: 47px;
            min-width: 287px;
        }

         #mc-embedded-subscribe:hover {
            // trying to recreate the <Button> hover effect
            background-color: #4e70cd
         }

        .mc-field-group {
            min-width: 500px;
        
            #mce-EMAIL {
                // from Figma:
                /* White */
                background: #FFFFFF;
                /* Light Grey */
                border: 2px solid #BDBDBD;
                box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                width: 100%;
                font-size: 18px;
                font-style: italic;
            }
        }
    }
</style>

<script>
import Button from "../components/Button.vue";

export default {
    name: "Newsletter",
    components: {
        Button
    }
}
</script>