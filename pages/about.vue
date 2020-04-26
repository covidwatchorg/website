<template>
    <v-container grid-list-xs>
<v-row id="about">
        <v-col cols="12">

            <v-row id="header" class="first-row">

                <v-col cols="7">
                    <div class = "first-row-copy">
                        <h1>About Us</h1>
                        <p>Covid Watch is a <b>nonprofit</b>, global effort to give you the power to reduce the spread of COVID-19 in the palm of your hand.</p>
                        <p>We build and foster the adoption of decentralized technology that preserves your right to <b>privacy</b> while <b>protecting</b> your community.</p>
                        <p>We want to speed our return to a world where we can be <b>together</b> again, safely and securely.</p>
                    </div>
                </v-col>

                <v-col cols="4">
                    <!-- Globe and people image --> 
                    <!-- img src="../assets/blah"-->
                </v-col>


                <v-col cols="3">
                    <v-btn class="primary-1--text">
                        <!-- Where should this link to-->
                        <nuxt-link to="/collaborate">
                            Partner With Us
                        </nuxt-link>
                    </v-btn>
                </v-col>   


                <v-col cols="3">
                    <v-btn class="primary-1--text">
                        <nuxt-link to="/collaborate">
                            <!-- Where should this link to-->
                            Use Our Solutions
                        </nuxt-link>
                    </v-btn>

                </v-col>

            </v-row>
        </v-col>
    </v-row>

    <v-row id="we-value">
        <!-- TODO -->
    </v-row>

    <v-row id="join-us">
            <v-col cols="2">
                <h2>Join Us</h2>
            </v-col>


            <v-col cols="8">
            <!--- People biking -->
            </v-col> 

            <v-col cols="3" v-for="(cta, i) in callsToAction">
                <!-- should the buttons be components like this? >
                <!-- primary-button text=cta.button_text link="/donate"></primary-button -->

                <div>{{cta.text}} </div>


            </v-col>
    </v-row>



</v-container>
</template>

<script>
export default {
    data: () => ({
        callsToAction: [
            {
                button_text:"Volunteer",
                cta_text:"Covid Watch is a volunteer-led effort to fight COVID-19. Are you a developer? A public health expert? A writer? We want your help."
            },
            {
                button_text:"Donate",
                cta_text:"Our organization is here to make a difference, not a profit. We need your support to slow the spread. ",
            },
            {
                button_text:"Call to Action",
                cta_text:"Covid Watch works best when a community adopts it together. Are you looking for an app to help protect your state? Your company? Your country? Let’s talk."
            },
            {
                button_text:"Email Us",
                cta_text:"We are working with partners that share our commitment to health and human rights. If your organization has tools to help stop the spread or expertise, let’s work together."
            },
        ],
    })
}
</script>
