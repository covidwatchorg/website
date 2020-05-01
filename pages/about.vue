<template>
    <v-container grid-list-xs>
        <v-row id="about">
                <!-- First row-->
                <v-row id="header" class="first-row mb-10 pa-12">

                    <v-col cols="12" :md="7" :sm="12">
                        <div class="mb-12">
                            <h1 class="mb-5">About Us</h1>
                            <div class="subtitle">
                                <p>Covid Watch is a <b>nonprofit</b>, global effort to give you the power to reduce the spread of COVID-19 in the palm of your hand.</p>
                                <p >We build and foster the adoption of decentralized technology that preserves your right to <b>privacy</b> while <b>protecting</b> your community.</p>
                                <p>We want to speed our return to a world where we can be <b>together</b> again, safely and securely.</p>
                            </div>
                        </div>

                        <v-row no-gutters class="mr-10 mt-10">
                            <v-col cols="10" class="mt-12 mb-10 mb-md-0" :sm="8" :md="5">
                                <!-- /partner doesnt exist yet -->
                                <Button primary hero nuxt to="/partner">
                                    Use Our Solution
                                </Button>
                            </v-col>
                            <v-spacer/> 
                            <v-col class="mt-md-12" cols="10" :sm="8" :md="5">
                                <!-- where should this link to? -->
                                <Button secondary hero nuxt to="/pilot">
                                    Join Our Team
                                </Button>
                            </v-col>
                            <v-spacer/>
                        </v-row>
                    </v-col>

                    <v-spacer/>
                    <v-col cols="4">
                        <img class="earth_img" src="../assets/about_us/family-earth.svg">
                    </v-col>
                </v-row>


        <!-- We value row -->
        <v-row class="mb-10 pa-12" id="we-value">
            <h2 class="mb-10">We Value</h2>

            <v-row>

                <v-col 
                    cols="10"
                    :md="4" 
                    :sm="10" 
                    v-for="(card, i) in valueCards"  
                    :key="i" 
                    class="d-flex flex-column align-left">

                    <img class="we_value_img" :src="card.img" :alt="card.title">
                    <h3 class="mt-10">{{card.title}}</h3>
                    <div class="mt-5">{{card.body}}</div>

                </v-col>

            </v-row>

            <v-row class="mt-8">
                <CTA pdf content="Read the whitepaper" href="/covid_watch_whitepaper.pdf"></CTA>
            </v-row>
        </v-row>


        <!-- join us row -->
        <v-row class="join-us mb-10 pa-12" id="join-us">
            <v-row class="mb-3">
                <v-col cols="10" :md="2" :sm="10">
                    <h2>Join Us</h2>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="8">
                    <img class="biking" src="../assets/about_us/cyclists.svg">
                </v-col> 
            </v-row>

            <v-row>
                <v-col class="align-center justify-center" cols="12" :md="3" :sm="6" v-for="(cta, i) in callsToAction" :key="i">
                    <!-- TODO: are these links right? -->
                    <div v-if="cta.link !== 'email'" class="mb-4">
                        <Button secondary nuxt :to="cta.link">{{ cta.button_text }}</Button>
                    </div> 
                    
                    <div v-else class="mb-4">
                        <Button secondary>
                            <a href="mailto: contact@covid-watch.org">{{ cta. button_text }}</a>
                        </Button>
                    </div>

                    <div>{{cta.cta_text}}</div>
                </v-col>
            </v-row>

        </v-row>

        <!-- team row-->
        <v-row class="mb-5 pa-12" id="our-team">
            <v-col cols="10" :md="12" :sm="10">
                    <div class="mb-5"><h2>Our Team</h2></div>
                    <p class="subtitle">Covid Watch is a group of more than 400 volunteers from around the world. We are scientific researchers, privacy and public health experts, journalists, developers, and designers.</p>
            </v-col>

            <template v-for="(founder,n) in founders">
                <v-col :key="n">
                    <v-row>
                        <v-col :md="5">
                            <img class="mr-5" :src="founder.image">
                        </v-col>
                        <v-col cols="10" :md="7" :sm="10">
                            <div class="title">
                                {{founder.name}}
                            </div>
                            <div class="subtitle">
                                <i>{{founder.title}}</i>
                            </div>
                            <img src="../assets/about_us/top-accent.svg">
                            <div class=founder-bio>
                                <p>{{founder.bio}}</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-responsive
                    v-if="n+1 === 2"
                    :key="`width-${n}`"
                    width="100%"
                    ></v-responsive>
            </template>

        </v-row>

        <!-- academic partners row-->
        <v-row class="pa-12" id="academic-partners">
            <v-col class="mb-10" :md="3" :sm="8"><h3 class="pt-5">Academic Partners</h3></v-col>

            <div class="d-md-flex justify-md-space-between align-center">
                <v-col :md="3" :sm="6"> 
                    <a :href="stanford.href">
                    <img :src="stanford.src"  @mouseover="stanford.src = stanford.color" @mouseleave="stanford.src = stanford.grey">
                    </a>
                </v-col>

                <v-col :md="3" :sm="6"> 
                    <a :href="waterloo.href">
                    <img class=waterloo-img :src="waterloo.src"  @mouseover="waterloo.src = waterloo.color" @mouseleave="waterloo.src = waterloo.grey">
                    </a>
                </v-col>
            </div> 
        </v-row>

        <!-- colabs row-->
        <v-row class="pa-12" id="collaborator-projects">
            <v-col class="mb-10" :md="3" :sm="8"><h3 class="pt-6">Collaborator Partners</h3></v-col>


            <div class="d-md-flex justify-md-space-between align-center">
                <v-col :md="2" :sm="6" v-for="(collab, i) in collaborator_projects" :key="i">
                    <a :href="collab.href">
                        <img class=collab-img :src="collab.src"  @mouseover="collab.src = collab.color" @mouseleave="collab.src = collab.grey">
                    </a>
                    <div class="caption justify-center collab-name">
                        {{ collab.name }}
                    </div>
                </v-col>
            </div>
        </v-row>
    </v-row>
    </v-container>
</template>

<style lang="scss">
@media (max-width:1000px){
    .earth_img{
        display: none;
    }
}


@media (max-width:950px){
    .biking{
        display: none;
    }
}

.we_value_img{
    min-height: 263px;
}



.cta-container {
    display: flex;
    justify-content: left;
}

.first-row{
    background: linear-gradient(0deg, rgba(67, 197, 217, 0.2), rgba(255, 255, 255, 0) 20%);
}
.about-us-copy{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 34px;

    color: #585858;
}
.join-us{
    background: rgba(245, 229, 230, 0.6);
}
.waterloo-img{
    margin-left: -40px;
}
</style>

<script>
import Button from '../components/Button.vue'
import CTA from "../components/CTA.vue";


export default {
    data: () => ({
        callsToAction: [
        {
            button_text:"Volunteer",
            cta_text:"Covid Watch is a volunteer-led effort to fight COVID-19. Are you a developer? A public health expert? A writer? We want your help.",
            link:"/join",
        },
        {
            button_text:"Donate",
            cta_text:"Our organization is here to make a difference, not a profit. We need your support to slow the spread. ",
            link:"/support",
        },
        {
            button_text:"Start a Pilot",
            cta_text:"Covid Watch works best when a community adopts it together. Are you looking for an app to help protect your state? Your company? Your country? Let’s talk.",
            link:"/pilot",
        },
        {
            button_text:"Email Us",
            cta_text:"We are working with partners that share our commitment to health and human rights. If your organization has tools to help stop the spread or expertise, let’s work together.",
            link:"email",
        },
        ],
        valueCards: [
        {
            title:"Healthy Communities",
            body:"Technology should be a tool to keep those around us healthy. Global pandemics threaten our health and economy. We make tools that will allow us to take back control of our lives, safely and efficiently.",
            img:require("../assets/about_us/woman-exercising.svg"),
        },
        {
            title:"Privacy Preservation",
            body:"Each person should control information about their health, even when our health impacts those around us. Covid Watch does not collect any personal information. We protect data and privacy while protecting public health.",
            img:require("../assets/about_us/woman-medical-advice.svg"),
        },
        {
            title:"Cooperation on COVID",
            body:"We are setting precedents  in real time, giving individuals and communities the power to confront this global challenge. We work closely with public health officials and organizations that share our values.",
            img:require("../assets/about_us/woman-social-network.svg"),
        }
        ],
        founders: [
        {
            image:require("../assets/about_us/tina-photo.svg"),
            name:"Tina White",
            title:"Executive Director",
            bio:"Tina is a PhD candidate at Stanford University where she designs neural network architectures for scientific simulations. Covid Watch began with a post she made in the early days of the pandemic."
        },
        {
            image:require("../assets/about_us/james-photo.svg"),
            name:"James Petrie",
            title:"Head of Research",
            bio:"James is a PhD candidate in Applied Mathematics at the University of Waterloo where he focuses on numerical modelling, machine learning, and optimization."
        },
        {
            image:require("../assets/about_us/rhys-photo.svg"),
            name:"Rhys Fenwick",
            title:"Head of Communications",
            bio:"Rhys is a science communicator from the University of Wollongong, Australia with a background in medical biotechnology and software development."
        },
        {
            image: require("../assets/about_us/zsombor-photo.svg"),
            name:"Zsombor Szabo",
            title:"Head of Engineering",
            bio:"Zsombor is a mobile app developer with more than ten years of experience building next-generation networks, notably including an app called Berkanan Messenger that runs on Bluetooth mesh networks."
        },
        ],
        stanford: {
            grey:require("../assets/about_us/logo-stanford-black.svg"),
            color:require("../assets/about_us/logo-stanford-red.svg"), 
            src:require("../assets/about_us/logo-stanford-black.svg"),
            href: "https://www.stanford.edu/"
        },    
        waterloo: {
            grey:require("../assets/about_us/logo-university-of-waterloo-gray.svg"),
            color:require("../assets/about_us/logo-university-of-waterloo.svg"),
            src:require("../assets/about_us/logo-university-of-waterloo-gray.svg"),
            href: "https://uwaterloo.ca/"
        },
        collaborator_projects: [
        {
            grey:require("../assets/about_us/logo-TCN-coalition-gray.svg"),
            color:require("../assets/about_us/logo-TCN-coalition.svg"), 
            src:require("../assets/about_us/logo-TCN-coalition-gray.svg"),
            name:"TCN Coalition",
            href: "https://tcn-coalition.org/"
        },    
        {
            grey:require("../assets/about_us/logo-coepi-gray.svg"),
            color:require("../assets/about_us/logo-coepi.svg"),
            src:require("../assets/about_us/logo-coepi-gray.svg"),
            name:"Community Epidemiology in Action",
            href: "https://www.coepi.org/"
        },
        {
            grey:require("../assets/about_us/logo-privacykit-gray.svg"),
            color:require("../assets/about_us/logo-privacykit.svg"),
            src:require("../assets/about_us/logo-privacykit-gray.svg"),
            name:"PrivateKit: SafePaths",
            href: "http://safepaths.mit.edu/"
        },
        ],
        title: "About Us | Covid Watch"

    }),
    components: {
        Button,
        CTA
    },
    head(){
        return {
            title: "About Us | Covid Watch",
        };
    },

}
</script>
