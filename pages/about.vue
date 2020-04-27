<template>
    <v-container grid-list-xs>
        <v-row id="about">
            <v-col cols="12">
                <!-- First row-->
                <v-row id="header" class="first-row">

                    <v-col cols="7">
                        <div>
                            <h2 style="margin-bottom: 46px">About Us</h2>
                            <div class="about-us-copy">
                                <p>Covid Watch is a <b>nonprofit</b>, global effort to give you the power to reduce the spread of COVID-19 in the palm of your hand.</p>
                                <p >We build and foster the adoption of decentralized technology that preserves your right to <b>privacy</b> while <b>protecting</b> your community.</p>
                                <p>We want to speed our return to a world where we can be <b>together</b> again, safely and securely.</p>
                            </div>
                        </div>
                    </v-col>

                    <v-col cols="4">
                        <img src="../assets/about_us/family-earth.svg">
                    </v-col>

                    
                    <v-col cols="3">
    <v-btn class="cta-button, primary" :nuxt="true" :to="link">
        {{ text }}
    </v-btn>
                        <Button type="primary" link="collaborate" text="Partner With Us"></Button>
                    </v-col>   


                    <v-col cols="3">
                        <Button link="collaborate" text="Use Our Solutions"></Button>
                    </v-col>

                </v-row>
            </v-col>
        </v-row>


        <!-- We value row -->
        <v-row class="d-block mb-10 pa-12" id="we-value">
            <h2 class="plum--text mb-12">We Value</h2>

            <v-row >

                <v-col cols="4" v-for="(card, i) in valueCards"  :key="i" class="d-flex flex-column align-left">

                    <img class="card-img" :src="card.img" :alt="card.title">
                    <h3 class="card-title mt-10">{{card.title}}</h3>
                    <div class="card-body mt-5">{{card.body}}</div>

                </v-col>

            </v-row>

            <v-row class="cta-container my-8">
                <!-- whitepaper link? !-->
                <Button type="white primary--text" link="/whitepaper" text="Read the Whitepaper"></Button>
            </v-row>
        </v-row>


        <!-- join us row -->
        <v-row id="join-us" class="join-us">
            <v-col cols="2">
                <h2>Join Us</h2>
            </v-col>


            <v-col cols="8">
                <img src="../assets/about_us/cyclists.svg">
            </v-col> 

            <v-col cols="3" v-for="(cta, i) in callsToAction" :key="i">
                <Button type="primary--text" :text="cta.button_text" link="/donate"></Button>
                <div>{{cta.cta_text}}</div>
            </v-col>
        </v-row>

        <!-- team row-->
        <v-row id="our-team">
            <v-col cols="12">
                <div class="our-team-copy">
                    <h2>Our Team</h2>
                    <p>Covid Watch is a group of more than 400 volunteers from around the world. We are scientific researchers, privacy and public health experts, journalists, developers, and designers.</p>
                </div>
            </v-col>

            <template v-for="(founder,n) in founders">
                <v-col :key="n">
                    <v-row>
                        <img :src="founder.image">
                        <v-col cols="4">
                            <div class=founder-name>
                                {{founder.name}}
                            </div>
                            <div class=founder-title>
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
        <v-row id="academic-partners">
            <v-col cols="3"><h3>Academic Partners</h3></v-col>

            <v-col cols="3" v-for="(partner, i) in academic_partners" :key="i">
                <img class=partner-img :src="partner.src"  @mouseover="partner.src = partner.color" @mouseleave="partner.src = partner.grey">
            </v-col>
        </v-row>

        <!-- colabs row-->
        <v-row id="collaborator-projects">
            <v-col cols="3"><h3>Collaborator Partners</h3></v-col>

            <v-col cols="2" v-for="(collab, i) in collaborator_projects" :key="i">
                <img class=collab-img :src="collab.src"  @mouseover="collab.src = collab.color" @mouseleave="collab.src = collab.grey">
                <div class="collab-name">
                    {{ collab.name }}
                </div>
            </v-col>

        </v-row>




    </v-container>
</template>

<styles lang="scss">
.cta-container {
    display: flex;
    justify-content: center;
}
.first-row{
    background: linear-gradient(0deg, rgba(67, 197, 217, 0.3), rgba(255, 255, 255, 0) 20%);
}
.about-us-copy{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;

    color: #585858;
}
.join-us{
    background: rgba(245, 229, 230, 60);
}
</styles>

<script>
import Button from '../components/Button.vue'
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
            bio:"Tina is PhD candidate at Stanford University where she designs neural network architectures for scientific simulations. Covid Watch began with a post she made in the early days of the pandemic."
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
        academic_partners: [
        {
            grey:require("../assets/about_us/logo-stanford-black.svg"),
            color:require("../assets/about_us/woman-medical-advice.svg"), 
            src:require("../assets/about_us/logo-stanford-black.svg")
        },    
        {
            grey:require("../assets/about_us/logo-university-of-waterloo-gray.svg"),
            color:require("../assets/about_us/woman-exercising.svg"),
            src:require("../assets/about_us/logo-university-of-waterloo-gray.svg")
        },
        ],
        collaborator_projects: [
        {
            grey:require("../assets/about_us/logo-TCN-coalition-gray.svg"),
            color:require("../assets/about_us/woman-medical-advice.svg"), 
            src:require("../assets/about_us/logo-TCN-coalition-gray.svg"),
            name:"TCN Coalition"
        },    
        {
            grey:require("../assets/about_us/logo-coepi-gray.svg"),
            color:require("../assets/about_us/woman-exercising.svg"),
            src:require("../assets/about_us/logo-coepi-gray.svg"),
            name:"Community Epidemiology in Action"
        },
        {
            grey:require("../assets/about_us/logo-privacykit-gray.svg"),
            color:require("../assets/about_us/woman-exercising.svg"),
            src:require("../assets/about_us/logo-privacykit-gray.svg"),
            name:"PrivateKit: SafePaths"
        },
        ],
        title: "About Us | Covid Watch"

    }),
    components: {
        Button
    }
}
</script>
