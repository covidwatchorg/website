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
              <p>We've grown from a pair of researchers from Stanford University and the University of Waterloo into an interdisciplinary team of more than 400 researchers, software engineers, public health professionals. and security experts.</p>
              <p>In addition to our founders, a number of our volunteers are working full-time on the project. However, there is plenty of room to contribute as a volunteer or advisor even if you can only put in a few hours a week.</p>
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
            <h2>Volunteer</h2>
            <p class="mt-6">If you'd like an invitation to the 400+ person Slack group that we're using to coordinate, just send a message to contact@covid-watch.org.</p>

            <h4 class="mt-6 mb-4">Most Wanted Volunteers</h4>
            <ul>
                <li v-for="(item, i) in urgentRoles" :key="i"> <strong>{{item.role}} </strong>{{item.desc}} </li>
            </ul>

            <h4 class="mt-6">Developers</h4>
            <p>Developers who want to join our growing effort should feel free to jump in directly by looking at open issues in the <a href="https://github.com/covid19risk">Covid Watch</a> and <a href="https://github.com/TCNCoalition">TCN Coalition</a> Github repos.</p>
            <p>Some of the skillsets we need:</p>
            
            <ul>
                <li v-for="(item, i) in developerRoles" :key="i">{{item.role}}</li>
            </ul>

            <h4 class="mt-6">Healthcare Professionals</h4>
            <p>We are looking for healthcare professionals and experts to join our effort. We'd love to speak with you even if you just have a couple of hours to provide some advice.</p>
            <p>Some of the expertise we need:</p>
            
            <ul>
                <li v-for="(item, i) in medicalRoles" :key="i">{{item.role}}</li>
            </ul>

            <h4 class="mt-6">Other Roles</h4>
            <p>Some of the skillsets we need:</p>
            <ul>
                <li v-for="(item, i) in otherRoles" :key="i">{{item.role}}</li>
            </ul>

          </v-col>        
        </v-row>

        <v-row class="my-12">
          <v-col>
            <h2>Other Ways to Get Involved</h2>
            <p class="mt-8">You don't need to join our team to help Covid Watch! It would also help us out if you'd consider other options:</p>

            <ul>
                <li>Like and share us on <a href="https://twitter.com/COVIDWatchApp">Twitter</a>, <a href="https://www.facebook.com/CovidWatch2020">Facebook</a>, and <a href="https://github.com/covid19risk">Github</a> </li>
                <li>Make a <nuxt-link to="/support">tax-deductible donation</nuxt-link> to support our work</li>
                <li>Subscribe to our newsletter below to stay up to date on our work</li>
            </ul>
          </v-col>   
        </v-row>


        <v-row class="mb-12">
            <v-col>
                <h3>Other Inquiries?</h3>
                <p class="mt-8"><a class="primary--text" style="font-weight:600;text-decoration:none;" href="mailto: contact@covid-watch.org">Contact us</a> for more information.</p>
            </v-col>
        </v-row>

      </v-col>
    </v-row>
    <Newsletter/>
  </v-container>
</template>

<style lang="scss">
#join {
    @media (max-width:400px) {
        .donate-svg {
            display: none;
        }   
    }

    @media (min-width:400px) {
        .donate-svg {
            max-height:360px;
        }


            #mc-embedded-subscribe {
                margin-left: 0px;
                margin-top: 6px;
                width: 180px;
            }
    }
}

</style>

<script>
import Newsletter from "../components/Newsletter"

export default {
components: {
        Newsletter
    },
    data: () => ({
        urgentRoles: [
            {
                role: "Web Developers",
                desc: "to build an organization-facing web app (counties, businesses, health authorities, etc)"
            },            
            {
                role: "Executive Assistants",
                desc: "with consistent full-time or part-time availability"
            },            
            {
                role: "Marketing and Communications Managers",
                desc: "to lead aspects of marketing, media outreach, and fundraising"
            },            
        ],
        otherRoles: [
            {
                role: "PR and Outreach"
            },
            {
                role: "Social Media Manager"
            },
            {
                role: "Fundraising and grant applications for not-for-profit organisations"
            },
            {
                role: "Blogging, particularly with a scientific background"
            },
            {
                role: "Legal expertise around the handling of personal health information"
            },
            {
                role: "Data re-identification or privacy research and implementation"
            },
            {
                role: "Cryptography and information security"
            },
            {
                role: "Electrical engineering"
            },
        ],
        developerRoles: [
            {
                role: "UI / UX Design"
            },
            {
                role: "iOS and Android native app development"
            },
            {
                role: "Animation Experience"
            },
            {
                role: "Software project management"
            },
            {
                role: "Experience with mobile Bluetooth APIs"
            },
            {
                role: "Experience with cryptography"
            },
        ],
        medicalRoles: [
            {
                role: "Public health experience, especially with contact tracing or public health research with infectious diseases"
            },
            {
                role: "Deep knowledge of health systems (at federal, state, province, or county level)"
            },
            {
                role: "Public health intervention research"
            },
            {
                role: "Science of behavior change"
            },
            {
                role: "Infectious disease"
            },
            {
                role: "Digital health and designing for public health and medical decision-making"
            },
            {
                role: "Experience with labs and testing"
            },
        ]
    }),
    title: "Join Us | Covid Watch"
}
</script>
