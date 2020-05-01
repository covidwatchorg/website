<template>
    <v-row id="pilot">
        <v-col cols="12">
                <!-- Hero -->
                <v-row id="hero" class="first-row pa-12">

                    <v-col cols="12" :md="8" :sm="12">
                        <div class="mb-12">
                            <h1 class="mb-5">Bring Covid Watch to Your Community</h1>
                            <div class="subtitle">
                                <p>Covid Watch works best when communities adopt it together. Each new person that uses our anonymous exposure notification app makes everyone else that much safer and reduces the burden on overloaded public health systems.</p>
                                <p >As the world reopens, we will encourage adoption of the Covid Watch app in geographically limited areas and with certain at-risk communities, like essential workers and first responders. We call these initial efforts Pilot Programs.</p>
                            </div>
                        </div>

                        <v-row no-gutters class="mr-10 mb-4 mt-10">
                            <v-col :sm="5">
                                <!-- the hero prop doesnt seem to be working to give the 58px height so inline CSS'ed it -->
                                <Button style="height:58px;" primary hero>
                                    <a href="mailto: contact@covid-watch.org">Use Our Solutions</a>
                                </Button>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-spacer/>
                    <v-col cols="3">
                        <img class="woman_globe_img" src="../assets/pilot_page/woman_globe.svg">
                    </v-col>
                </v-row>

                <!-- Why Covid Watch? section -->
                <v-row id="why-covid-watch" class="pa-12 mb-12">
                    <h2 class="section-title">Why Covid Watch?</h2>
                    <v-row>
                        <v-col :md="3">
                            <img class="adjust-img" src="../assets/pilot_page/woman_target.svg" alt="target">
                        </v-col>

                        <v-col :md="9">
                            <div class="copy">
                                <h2>Focus Resources Where They're Needed</h2>
                                <p>Technology should be a tool to keep those around us healthy. Global pandemics threaten our health and economy. We make tools that will allow us to take back control of our lives, safely and efficiently.</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col :md="3" class="show-on-small-screen">
                            <img src="../assets/pilot_page/woman_medical_device.svg" alt="target">
                         </v-col>
                        <v-col :md="9">
                            <div class="copy">
                                <h2>The Highest Standard of Privacy</h2>
                                <p>Covid Watch is anonymous and effective.  Our app logs interactions via Bluetooth in a decentralized system. Privacy-focused solutions ease fears of surveillance and lead to higher adoption rates among community members. There’s no need to upend long-standing expectations around privacy during a pandemic when technology exists to safely and securely slow the spread of the coronavirus. </p>
                            </div>
                         </v-col>
                         <v-col :md="3" class="hide-on-small-screen">
                            <img src="../assets/pilot_page/woman_medical_device.svg" alt="target">
                         </v-col>
                    </v-row>

                    <v-row>
                        <v-col :md="3">
                            <img src="../assets/pilot_page/phone_god.svg" alt="target">
                        </v-col>

                        <v-col :md="9">
                            <div class="copy">
                                <h2>Tech That Works Together</h2>
                                <p>We helped set the standard for protecting users’ personal information, and we are committed to bringing this standard to communities around the world. Interoperability of different apps and systems is the biggest key to slowing the spread. Our work influenced the world’s largest tech companies to adopt a privacy-first approach for their coronavirus exposure alert notifications. We are aligned with the open source community working all over the world to bring forward a cooperative solution to COVID-19. Join our movement.</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-row>


                <!-- help for public health section -->
                <v-row id="public-health" class="pa-12 mt-12">
                    <h2 class="mb-12 section-title">Help for Public Health</h2>

                    <v-row>
                        <v-col             
                        :md="4" 
                        :sm="8"
                        v-for="(card, i) in whyCards" 
                        :key="i"
                        class="px-6">
                            <div class="img-container">
                            <img class="card-img" :src="card.img" :alt="card.title" />
                            </div>
                            <div class="content-container">
                            <h3 class="mt-10">{{ card.title }}</h3>
                            <p class="caption mt-5">{{ card.body }}</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row class="mr-10 mb-4 mt-10 pb-12 d-flex justify-center">
                        <v-col :sm="4">
                                <!-- the hero prop doesnt seem to be working to give the 58px height so inline CSS'ed it -->
                                <Button style="height:58px;" primary>
                                    <a href="mailto: contact@covid-watch.org" >Use Our Solutions</a>
                                </Button>
                        </v-col>
                    </v-row>
                </v-row>


        </v-col>
    </v-row>
</template>

<style lang="scss">
    #pilot {
        a {
            color: white;
            text-transform: none;
            font-style: normal;
            font-weight: bold;
        }

        .section-title {
            font-size: 36px;
            margin-bottom: 16px;
        }

        #public-health {
            // note: this is #71cddf with 15% opacity
            background-color: rgba(113, 205, 223, 0.15);
        }

        .copy {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;

            h2 {
                margin-bottom: 30px;
            }
        }

        #why-covid-watch .adjust-img {
            max-width: 260px;
            min-width: 180px;
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
        }
    }
</style>

<script>
import CTA from '../components/CTA'
import Button from '../components/Button'

export default {
    components: {
        CTA,
        Button
    },
    data: () => ({
        whyCards: [
            {
                title: "Verified Results",
                body:"Public health officials will be able to verify positive test results if users are infected and anonymously notifying others of their potential exposure.",
                img: require("../assets/pilot_page/man_doctor.svg")
            },
            {
                title: "Your Face Forward",
                body: "Covid Watch builds anonymous, effective tools. We want to stop COVID, not take credit. When local communities use our app, they can see the name of your public health department and learn how to contact you.",
                img: require("../assets/pilot_page/medical_branding.svg")
            },
            {
                title: "Smart Support",
                body: "Covid Watch is learning alongside you as we both work to protect your community. Expect our researchers to be extremely attentive to the app’s effect in your community and responsive feedback in a fast-moving world.",
                img: require("../assets/pilot_page/woman_helpdesk.svg")
            }
        ]
    })
}
</script>