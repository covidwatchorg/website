<template>
  <v-container>
    <v-row id="faq">
      <v-col>
        
        <a target="_blank" href="https://docs.google.com/forms/d/1ZKt7ewHUvDmCFHdhXOckFTjK8-ZJhIw1W94BoCLOdWA/viewform?edit_requested=true">
              <v-hover v-slot:default="{ hover }" > 
                <v-alert 
                  outlined 
                  dense 
                  dismissable 
                  color="info" 
                  type="info"
                  :elevation="hover ? 2 : 0"
                  :class="{ 'on-hover': hover }"
                  class="d-flex pa-2 mx-10 justify-center"
                  >
                    Have an old smartphone to donate for Covid Watch to use for testing?  Click here!
                  </v-alert>
              </v-hover>
          </a>
        <v-row id="hero">
          
          <v-col class="hero-copy" :md="7" :sm="10">
            <h1>Frequently Asked Questions</h1>
          </v-col>

          <v-spacer></v-spacer>

          <!-- Jesse: there is something like :smAndDown but couldnt figure out exaclty how to make work quickly 
          https://vuetifyjs.com/en/customization/breakpoints/

          so instead have some repeition like :xs="8" :sm="8"
          -->
          <v-col :sm="8" :md="4">
            <img id="arrow-man" src="../assets/faq_page/arrow_man.svg" alt="arrow_man">
          </v-col>
        </v-row>


        <!-- faq section -->
        <v-row>

          <!-- left side navigator -->
          <v-col :md="3" id="left-navigation">
            <ul id="navigation" class="pl-0">
              <div class="sections-container" v-for="(section, i) in sectionList" :key="i">

                <li class=" pl-6 section-text primary--text" :id="i">
                  <a :href="section.id">
                    {{section.title}}
                  </a>  
                </li>

              </div>
            </ul>

          </v-col>

          <v-spacer></v-spacer>

          <!-- list -->
          <v-col :sm="12" :md="8">


            <v-expansion-panels 
              multiple
              flat
              hover
              v-model="panel"
            >
              <v-expansion-panel 
                v-for="(faq, i) in faqList"
                :key="i"
                class="my-2 faqCard"
              >
                  <v-expansion-panel-header @click="setStyle($event)" class="closed-header panel-header">
                    <h3 :id="faq.questionId">{{faq.question}}</h3>


                    <!-- adds the svg arrow but it doesn't turn around automatically when card is expanded -->
                    <!-- possible CSS/Javascript work in the future -->
                    <!-- <template v-slot:actions>
                        <img src="../assets/faq_page/arrow.svg" alt="arrow">
                    </template> -->

                  </v-expansion-panel-header>
                  
                    <v-expansion-panel-content>

                        <div class="mt-6 " v-for="(question, i) in faq.content" :key="i">

                          <div class="question mb-4">{{question.question}}</div>
                          <div class="answer" v-html="question.answer"></div>
                        </div>
                    </v-expansion-panel-content>

              </v-expansion-panel >
            </v-expansion-panels>
          </v-col>
        </v-row>

      </v-col>
    </v-row>


      <!-- there is white space at below the Newsletter caused by v-container padding.  Perhaps adjust this to not have padding on bottom? -->
      <!-- Newsletter -->
      <Newsletter></Newsletter>

      </v-container>
</template>

<style lang="scss">

  #faq {
    min-height: 1000px;

    #arrow-man {
      max-height:370px;
      min-width: 360px;
      width: 90%;
    }

    // at screen width of 960px, the navigation left bar disappears and the content takes over the v-row
    @media (max-width:960px){
      #left-navigation {
        display: none;
      }
    }

    // messed around for a while thinking the arrow-man svg was causing a huge white margin on the right side but it appears it may not be...?
    @media (max-width:600px) {
        #arrow-man {
          display: none;
      }
    }

    #hero {
      margin-top: 50px;
    }

    // option: mediocre fixed left navigation section:
    // #navigation {
      // position: fixed;
      // 396px is approx the same as if not position:fixed and in line w Figma
      // top: 396px;
    // }

    .sections-container {
      list-style: none;
    }

    .sections-container:first-child {
      border-top: 3px solid rgb(67,196,217,.5);
    }

    .section-text {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      // from Figma bit makes a fixed left nav section too large
      line-height: 100px;
      // uncomment line-height: 60px for position: fixed left nav
      // line-height: 60px;
      border-bottom: 3px solid rgb(67,196,217,.5);
    }

    // this sets some CSS that Vuetify creates to eliminate margin top and bottom for each faq section name
    .v-application .my-2 {
      margin: 0px;
    }

    .closed-header {
        h3 {
        color: #2C58B1;
      }
       border-bottom: 3px solid rgb(67,196,217,.5);
    }

    .v-expansion-panel-header--active {
              h3 {
        color: #828282;
      }
        border-bottom: none;
     

    }

    .faqCard {
      h3 {
        // this pulls from Figma
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
      }


      // started to build this out
      // .panel-header {
      //   border-bottom: 3px solid rgb(67,196,217,.5);
      // }

      // playing w hacky ways to make the arrows next to each section title
      .mdi-chevron-down {
        margin-right: 450px;
      }

      #alerts {
        width: 200px;
      }

      .question {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        color: #585858;
      }

      .answer {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #585858;
      }
    }
  }
  
</style>

<script>
import Button from "../components/Button.vue";
import Newsletter from "../components/Newsletter.vue";
  
export default {
  components: {
    Button,
    Newsletter
  },
  methods: {
    setStyle: function (e) {
      // ended up just using this Vuetify class I discovered instead of 'open-header' v-expansion-panel-header--active
      // still leaving this function in case it proves useful to have an 'open-header' class in the future
      let classList = Array.from(e.currentTarget.classList);
      if (classList.includes("closed-header")) {
        classList[classList.indexOf("closed-header")] = "open-header";
      } else {
        classList[classList.indexOf("open-header")] = "closed-header";
      }
    }
  },
  head() {
    return {
      title: "FAQ | Covid Watch"
    };
  },
  data: () => ({
    // panel controls which sections in the list are open upon loading the page.
    panel: [0, 1, 2, 3, 4, 5],
    sectionList: [
      {
        id: "#our-alert-system",
        title: "Our Alert System"
      },
      {
        id: "#how-it-works",
        title: "How It Works"
      },
      {
        id: "#privacy",
        title: "Privacy"
      },
      {
        id: "#working-together",
        title: "Working Together"
      },
    ],
    faqList: [
      {
        "question": "Our Alert System",
        "questionId": "our-alert-system",
        "content": [
          {
            "question": "What is contact tracing? Is that what Covid Watch does?",
            "answer": "<p> Contact tracing is the process of reconstructing the interactions of a sick person from the time they were infected until the time they were diagnosed and quarantined. Manual contact tracing takes a lot of effort and looks a lot like detective work. Imagine trying to list everyone you talked to for the past two weeks in your normal, undistanced life. Not so easy. </p> " +
                      "<p> The Covid Watch watch app takes detective work out of the equation. This is not contact tracing. We use the Bluetooth feature on your smartphone to sense when you are near someone else with Covid Watch installed. A log of times you were in close proximity to other users is stored on your phone. The people you’ve seen will have a corresponding record on their phones. </p>" +
                      "<p> If either person tests positive for COVID-19, they can inform the app about their diagnosis. Without requiring them to remember whom they saw in the past two weeks, Covid Watch will automatically warn everyone they saw about potential infection and encourage them to take steps like getting tested or self-quarantining. We call this key intervention an ‘exposure notification.’ </p>" +
                      "<p> You can learn more about our exposure notification system on our <a href='/how-it-works'>How It Works</a> page. Or you can read our original <a href='https://drive.google.com/file/d/1_hCc2Q_eyUymRCtJRWxUZS8aTgMrv_R2/view'>White Paper</a> that describes Covid Watch’s founding vision of privacy-preserving technology. </p>"
          },
          {
            "question": "How do exposure notifications help to stop the spread?",
            "answer": "<p>The coronavirus will be with us for a long time. Realistically, we can’t stay under lockdown without wreaking immense economic havoc and threatening our way of life.</p> " +
                      "<p>Covid Watch’s mission is to use technology to make it safer for us all to be together again. As testing becomes more prevalent and communities take steps to come back together, we need a system to reflect our real-world interactions accurately and provide actionable information as soon as the coronavirus is detected. Exposure notifications, like those provided by Covid Watch, will empower individuals and communities with the information they need to respond to potential infection. Actionable information allows people to quarantine earlier, get tested more quickly, and stop the spread."
          },
          {
            "question": "Does everyone need to use Covid Watch for it to work?",
            "answer": "Our app works best when communities adopt it together, but it’s not necessary for everyone around you to have Covid Watch or a compatible app installed to stop the spread. This technology is new, but <a href='https://github.com/BDI-pathogens/covid-19_instant_tracing/blob/master/Report%20-%20Effective%20Configurations%20of%20a%20Digital%20Contact%20Tracing%20App.pdf'>early models estimate</a> that rapid exposure alerts could alter the trajectory of an epidemic if <a href='https://science.sciencemag.org/content/early/2020/04/09/science.abb6936'>less than 60 percent</a> of people used the app. Even below that number, every new user increases information about infections and makes communities safer. "
          },
        ]
      },
      {
        "question": "How It Works",
        "questionId": "how-it-works",
        "content": [
          {
            "question": "Why does the Covid Watch app use my Bluetooth signal?",
            "answer": "<p>Bluetooth signals allow us to know who’s actually close to you and for how long. If you’re on the first floor of a tall building, and someone else is on the 15th, a Bluetooth signal would not log your interaction. That’s not true of other ways to view your location, like GPS.</p> " +
                      "<p>Also, your Bluetooth signal belongs to you and your phone. They allow us to never store your data centrally. Instead, random numbers that log your interactions via Bluetooth are stored on your own device.</p>" +
                      "<p>You can more about the tech behind our contact tracing solution in our <a href='https://drive.google.com/file/d/1_hCc2Q_eyUymRCtJRWxUZS8aTgMrv_R2/view'>White Paper</a>.</p>"
          },
          {
            "question": "Will the alerts tell me where and when I was exposed?",
            "answer": "<p>Since we don’t collect any location data, we can’t tell you where you were exposed. However, we will be able to tell you on which day you were exposed.</p> " +
                      "<p>We recognize that this involves some privacy trade-offs, since if you receive an alert that you were exposed on a day where you were within six feet of very few people, you may be able to deduce who shared their test results.</p>" +
                      "<p>We think the benefits of knowing when you were exposed outweigh the privacy risks of deduction.</p>"
          },
          {
            "question": "How much will Covid Watch drain my phone’s battery?",
            "answer": "<p>We expect Covid Watch to drain your battery significantly less than using a pair of Bluetooth headphones. We use standard low-energy Bluetooth interfaces, and we send Bluetooth chirps every few minutes rather than in a constant stream.</p> "
          },
          {
            "question": "How can you be sure that the diagnosis reports are genuine?",
            "answer": "<p>Local public health officials wherever you are closely monitor testing for COVID-19. This testing is key to slowing the spread. It’s important that users of the app not be able to send out false positives. We’ll be coordinating with public health officials to create a system that allows you to quickly and easily verify that you have tested positive for the coronavirus before sharing it anonymously with those you’ve spent time near in the previous weeks.</p> "
          },
        ]
      },
      {
        "question": "Privacy",
        "questionId": "privacy",
        "content": [
          {
            "question": "How does the Covid Watch app protect my privacy?",
            "answer": "<p>In short, we don’t collect data about who you are, where you go or who you’re near. With the Covid Watch app, your phone periodically sends out what we call Bluetooth chirps, essentially saying to nearby phones, “Hey, I’m here!” If another phone is nearby chirping, “Hey, I’m here too,” both phones will log the interaction and store it for two to four weeks right there inside your device.</p>" +
                      "<p>If you are diagnosed with COVID-19 , you can choose to share your test results with Covid Watch after they are verified by local health officials.  Once you do that, you upload a random number to our database that allows other devices to recognize that the Bluetooth chirps they heard from your phone are associated with a positive result. The database contains no personal information, no timestamps, and no locations. A hacker who broke into our database would just find a bunch of random numbers.</p>"
          },
          {
            "question": "Why is it important to protect privacy with apps like Covid Watch?",
            "answer": "<p>People’s locations, travel history, and contact networks are sensitive personal information that should not be tracked by health authorities or technology companies unless absolutely necessary. It’s clearly not necessary, since we have access to decentralized, Bluetooth-based proximity detection.</p>" +
                      "<p>If you are diagnosed with COVID-19 , you can choose to share your test results with Covid Watch after they are verified by local health officials.  Once you do that, you upload a random number to our database that allows other devices to recognize that the Bluetooth chirps they heard from your phone are associated with a positive result. The database contains no personal information, no timestamps, and no locations. A hacker who broke into our database would just find a bunch of random numbers.</p>" +
                      "<p>If contact tracing apps store identifying, personal information in a centralized database, there is always a risk that the data will be leaked or hacked. This could expose individuals to scams, identity theft, public shaming, and other negative consequences. It also presents a potential liability for health authorities. How much trust do we want to demand of people before they’re willing to install an app to stop the spread? With a privacy-preserving approach, so little data is stored that people can sign up without needing to worry about what might happen to their information.</p>" +
                      "<p>It’s also important to be careful about what systems we put in place during times of crisis, since these systems historically persist long after. How confident are we that our personal data would only be used for COVID-19 contact tracing? What kind of privacy norms do we want going forward? </p>" +
                      "<p>The ACLU favors our decentralized and anonymous approach to using technology to slow the spread of the coronavirus. You can <a href='https://www.aclu.org/report/aclu-white-paper-principles-technology-assisted-contact-tracing'>read more here</a>.</p>"
          },
          {
            "question": "Why does the Android app ask for location permission?",
            "answer": "<p>Devices that run on the Android operating system require location permissions for apps that access Bluetooth. This is because some apps use Bluetooth beacons, placed in fixed locations, to track your location. Covid Watch does not communicate with Bluetooth beacons and never gathers your location information. </p>"
          },
          {
            "question": "Who gets access to the information I share with the Covid Watch app?",
            "answer": "<p>The Covid Watch app stores everything only on your phone. “Everything” isn’t much—it’s the <a href='/how-it-works'>random numbers you’ve been sending out and the log of those you’ve gathered from those around you</a>. No one but you has access to this. If you uninstall the app, your proximity log is gone.</p>" +
                      "<p>You can choose to share a positive test result by uploading this anonymous info to our database. This will be accessible to our database administrators, but it’s just a bunch of random numbers. These random numbers aren't meaningful except for the devices which have heard your phone's Bluetooth chirps. And all they tell those phones is that they have been in proximity of someone who is now infected.</p>"
          },
          {
            "question": "How are you sure I can’t be identified when I share my test results?",
            "answer": "<p>We can’t identify you. The communications between phones do not contain any information about who these phones belong to. For example, if you are close to the same person twice on different days, your phone won’t even know whether it was the same person or different people.</p>" +
                      "<p>You can choose to share a positive test result by uploading this anonymous info to our database. This will be accessible to our database administrators, but it’s just a bunch of random numbers. These random numbers aren't meaningful except for the devices which have heard your phone's Bluetooth chirps. And all they tell those phones is that they have been in proximity of someone who is now infected.</p>"
          },
        ]
      },
      {
        "question": "Working Together",
        "questionId": "working-together",
        "content": [
          {
            "question": "What makes Covid Watch different?",
            "answer": "Covid Watch is voluntary, decentralized, anonymous and Bluetooth-based. The response to the coronavirus is a global patchwork of local efforts, and it’s no different with app-based solutions to slow the spread of COVID-19." +
                      "Some countries and companies are releasing apps that are not based on the same privacy-protecting principles at the center of our mission. A tracing solution that monitors you via Bluetooth and stores every interaction you have in a centralized database that is accessible by the government is the least private solution to the problem we face. This would represent a once-in-a-lifetime erosion of civil liberties." +
                      "We are aligned with <a href='https://tcn-coalition.org/'>a global group of privacy-minded technologists</a> that have coalesced around solutions that protect your privacy and public health at the same time." +
                      "Read more about the <a href='https://tcn-coalition.org/'>TCN Coalition</a>TCN Coalition and our <a href='https://github.com/TCNCoalition/TCN'>shared commitment</a> to protecting your privacy."
          },
          {
            "question": "Are Apple and Google building contact tracing apps?",
            "answer": "Apple and Google made a rare joint announcement in April: these two competitors would be working together on creating systems to allow for something they called ‘digital contact tracing.’ More specifically, they would be building a set of programming tools, called an API, that would allow apps like Covid Watch to more easily use the Bluetooth systems built into billions of smartphones around the world. They will not be building apps themselves." +
                      "Apple and Google responded to challenges Covid Watch and others faced in building a privacy-protecting app to notify communities and individuals of potential exposure to the coronavirus. This is not digital contact tracing. Instead, this allows apps like Covid Watch to offer secure and anonymous exposure alert notifications. The Covid watch app will use these new APIs to offer private solutions to public health problems." +
                      "Read more about Apple and Google’s commitment to privacy <a href='https://www.apple.com/covid19/contacttracing'>here</a>."
          },
          {
            "question": "Are you working with the government?",
            "answer": "Covid Watch is a nonprofit, not a government agency or a private company focused on profits. Our mission is to protect your health and your privacy. The COVID-19 pandemic, however, presents a once-in-a-lifetime challenge to society. Since this crisis began, governments have taken the lead on testing for the virus, issuing stay-at-home orders and <a href=''https://www.cdc.gov/coronavirus/2019-ncov/php/principles-contact-tracing.html>manual contact tracing</a>." +
                      "The Covid Watch app makes it easier for governments to focus on their role, by narrowing the scope of manual contact tracing and testing efforts. We are working closely with local public health officials to verify testing results and provide them with the tools they need to act quickly." +
                      "We understand the importance of data security, and we will be adhering to health privacy laws for the regions in which the app is available. We will be fully compliant with GDPR and HIPAA laws."
          },
        ]
      },      
    ]
  })
};
</script>


