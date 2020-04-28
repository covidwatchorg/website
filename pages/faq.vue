<template>
  <v-container>
    <v-row id="faq">
      <v-col>
        <v-row id="hero">
          
          <v-col class="hero-copy" cols="7">
            <h1>Support Us</h1>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="4">
            <img style="max-height:370px;" src="../assets/faq_page/arrow_man.svg" alt="arrow_man">
          </v-col>
        </v-row>


        <!-- faq section -->

        <v-row>
          <!-- maybe make this cols="2" -->

          <!-- navigator -->
          <v-col cols="3">
            <ul >
              <div class="sections-container" v-for="(section, i) in sectionList" :key="i">

                <li class="py-2 pl-6 section-text primary--text" :id="i">
                  <a :href="section.id">
                    {{section.title}}
                  </a>  
                </li>

              </div>
            </ul>

          </v-col>


          <!-- list -->
          <v-col cols="9">

          </v-col>

        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">

  #faq {
    #hero {
      margin-top: 50px;
    }

    .sections-container {
      list-style: none;
    }

    .sections-container:first-child {
      border-top: 2px solid #43C4D9;
    }

    .section-text {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 100px;
      border-bottom: 2px solid #43C4D9;
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
      title: "FAQ | Covid Watch"
    };
  },
  data: () => ({
    sectionList: [
      {
        id: "how-it-works",
        title: "How it works"
      },
      {
        id: "alerts",
        title: "Alerts"
      },
      {
        id: "privacy",
        title: "Privacy"
      },
      {
        id: "partnerships",
        title: "Partnerships"
      },
      {
        id: "collaborations",
        title: "Collaborations"
      }
    ],
    faqList: [
      {
        "question": "Who are you?",
        "questionId": "who-are-you",
        "response": "<p>We’re a non-profit group of researchers, programmers security experts and public health professionals. Starting from a forum post on February 19, our team, led by researchers from Stanford University and the University of Waterloo, has grown to a group of around 10-15 core contributors, as well as many more part-time volunteers and advisors. Although we are aiming to develop an app for initial use in the USA, the team is based around the world.",
        "nuxtLink": "/about#team",
        "linkTitle": "Read more about our team here.",
      },
      {
        "question": "Why are you doing this?",
        "questionId": "why-do-this",
        "response": 
          "<p>We don’t expect a COVID-19 vaccine to be developed for at least a year, which means we must build a system that is capable of rapidly containing local transmission wherever and whenever it appears. By doing this, and implementing it in our communities, we can lessen lockdowns and other restrictions in the world while preventing the majority of the population from getting sick.</p>" +
          "<p> If we build a system that can identify contagious individuals and the people they had contact with, then we can ask only those who have been exposed to COVID-19 to self-isolate. We’ve modelled how such a system can significantly reduce the rate of viral transmission; <a target='_blank' href='/article'> check out our whitepaper </a>. We believe that, combined with a comprehensive testing program, our filter may be powerful enough to protect our communities from COVID-19 becoming endemic.</p>" +
          "<p> We also want to provide a way for individuals to, on a volunteer basis, help reduce the painful impacts of COVID-19. That’s what all of the people working on this project were looking for, and we hope that users who participate in Covid Watch will feel they have been given a tool with which to protect their community and loved ones.</p>"
        ,
        "nuxtLink": "/article",
        "linkTitle": "Read our whitepaper here for a more detailed explanation.",
      },
      {
        "question": "Aren’t Google and Apple working on something similar?",
        "questionId": "google-and-apple",
        "response": "<p>There are! We have been in contact with them since late March 2020.  We are very supportive of their efforts and are exicted two leading tech companies are creating a de facto standardized protocol others can refer to.</p>",
        "nuxtLink": "/press_releases/google_apple_press_release",
        "linkTitle": "Read our full perspective on their efforts in our April 10, 2020 press release here.",
      },
      {
        "question": "What is contact tracing?",
        "questionId": "what-is-contact-tracing",
        "response": 
            "<p> The World Health Organisation (WHO) <a target='_blank' href='https://www.who.int/features/qa/contact-tracing/en/'>defines</a> contact tracing as the identification and monitoring of people who may have come into close contact with a person infected with a contagious disease in order to help the contacts to get relevant care and treatment. </p>" +
            "<p> Contact tracing is a crucial part of epidemiological containment. It is traditionally done through patient interviews—when someone is diagnosed, that patient will be asked where they travelled and whom they saw while contagious. </p>" +
            "<p> Now that many people carry smartphones, it’s possible to perform an intervention like contact tracing automatically. Many groups, including Covid Watch, are working to make this a reality. However, our system does not strictly perform contact tracing. Users are not followed or tracked, and they are warned in an anonymous way. </p>" +
            "<p> We believe this will provide many of the benefits of contact tracing, as well as some additional ones. For example, we can more easily alert people when they have been in close contact with someone they don’t know (say, because you were riding a bus with them). However, we are not providing the kind of historical and identifying data that epidemiologists need for traditional contact tracing. </p>",
        "nuxtLink": "medialist",
        "linkTitle": "Read what media outlets such as Wired and Financial Times have written about Covid Watch and contact tracing here.",
      },
      {
        "question": "If COVID-19 is going to become widespread anyway, why bother delaying the inevitable?",
        "questionId": "delay-inevitable",
        "response": "<p> It’s not inevitable that COVID-19 will spread to every person, and slowing the spread is still extremely important. One major risk of COVID-19 in all countries is that it could overwhelm health systems, limiting their ability to care for people who desperately need it. By reducing infection rates we can space cases out slowly enough that hospitals worldwide can deal with them as they come, saving lives (often referred to as <a target='_blank' href='https://www.flattenthecurve.com/'>'Flattening The Curve'</a>). Furthermore, by enabling people to come out of lockdown, contact tracing could potentially reduce the severe negative economic consequences of COVID-19 that are materialising around the world. </p>",
        "nuxtLink": "/article#impact",
        "linkTitle": "Read more in our Whitepaper on our quantitative analysis of the impact smartphone-enabled contact tracing can have, if you want to get really geeky!",
      },
      {
        "question": "There is already a lockdown in my area and we can’t meet other people, so what is the point?",
        "questionId": "lockdown-why",
        "response": 
          "<p> We want to help bring you out of lockdown. Right now, the virus is spreading rapidly, and we must do our best to prevent hospital systems from becoming terribly overwhelmed. We don’t expect a vaccine for COVID-19 to be ready for at least a year, but we think it will be possible to end the lockdowns sooner than that. </p>" +
          "<p> If we build a system that can trace contagious individuals and the people they had contact with, then we can ask only those who have been exposed to COVID-10 to self-isolate. We’ve modelled how a system like ours can significantly reduce the rate of viral transmission; check out our whitepaper. </p>" +
          "<p> If you don’t want to take our word for it, check out <a target='_blank' href = 'https://github.com/BDI-pathogens/covid-19_instant_tracing/blob/master/Manuscript%20-%20Modelling%20instantaneous%20digital%20contact%20tracing.pdf'> Quantifying dynamics of SARS-CoV-2 transmission suggests that epidemic control and avoidance is feasible through instantaneous digital contact tracing</a>, a preprint published by University of Oxford researchers on March 16 (just under a month after we started work on the project). Trevor Bedford <a target='_blank' href='https://twitter.com/trvrb/status/1240444821593944064'>cited this model</a> as one of the strategies that he believed could bring the pandemic under control. </p>",
        "nuxtLink": "article#impact",
        "linkTitle": "Read a more detailed explanation here in our whitepaper.",
      },
      {
        "question": "Is this legal given health data privacy laws?",
        "questionId": "health-privacy",
        "response": 
          "<p> Yes.</p>" +
          "<p> We take privacy and security extremely seriously; conserving privacy is one of the cornerstones of this work, and we will be fully compliant with GDPR and HIPAA laws. Our engineers have worked at major research institutions such as Stanford University, University College London, and University of Waterloo, and companies like Apple, Google, and Change.org. We understand the importance of data security, and we will be adhering to health privacy laws for the regions in which the app is available. </p>" +
          "<p> In fact, Covid Watch is a founding member of the <a target='_blank' href='https://tcn-coalition.org/'>TCN Coalition</a>, a global coalition of similar COVID-19-related tech efforts worldwide to standardize and commit to a privacy-first digital contact tracing protocol. ('TCN' stands for 'Temporary Contact Number', a decentralized, privacy-first contact tracing protocol developed by the TCN Coalition). </p>"+        
          "<a target='_blank' href='https://github.com/TCNCoalition/TCN'>You can find TCN Coalition's open source work here.</a>",        
        "nuxtLink": "",
      }
    ]
  })
};
</script>


