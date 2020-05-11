<template>
  <v-container>
    <v-row id="faq">
      <v-col cols="12">
        <!-- hero section -->
        <v-row id="hero">
          <v-col cols="12" :sm="8" :xs="12" class="hero-copy">
            <h1>Frequently Asked Questions</h1>
          </v-col>

          <v-spacer></v-spacer>

          <v-col :sm="8" :md="4">
            <img id="arrow-man" src="../assets/faq_page/arrow_man.svg" alt="arrow_man" />
          </v-col>
        </v-row>

        <!-- faq section -->
        <v-row>
          <!-- left side navigator -->
          <v-col :md="3" id="left-navigation">
            <ul id="navigation" class="pl-0">
              <div class="sections-container" v-for="(faq, i) in faqList" :key="i">
                <li class="section-text primary--text" :id="i">
                  <a :href="`#${faq.sectionId}`" @click="expandSection(i)">{{faq.section}}</a>
                </li>
              </div>
            </ul>
          </v-col>

          <v-spacer></v-spacer>

          <!-- list -->
          <v-col cols="12" :sm="12" :md="8">
            <v-expansion-panels multiple flat hover v-model="panel">
              <v-expansion-panel v-for="(faq, i) in faqList" :key="i" class="faqCard">
                <v-expansion-panel-header class="panel-header">
                  <h3 class="jump-target" :id="faq.sectionId">{{faq.section}}</h3>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <div class="mt-6" v-for="(question, i) in faq.content" :key="i">
                    <div class="question mb-4">{{question.question}}</div>
                    <div class="answer" v-html="question.answer"></div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Newsletter -->
    <Newsletter></Newsletter>
  </v-container>
</template>

<style lang="scss">
#faq {
  min-height: 1000px;

  .hero-copy {
    margin-top: 50px;
  }

  #arrow-man {
    max-height: 370px;
    min-width: 360px;
    width: 90%;
  }

  // at screen width of 960px, the navigation left bar disappears and the content takes over the v-row
  @media (max-width: 960px) {
    #left-navigation {
      display: none;
    }
  }

  // messed around for a while thinking the arrow-man svg was causing a huge white margin on the right side but it appears it may not be...?
  @media (max-width: 600px) {
    #arrow-man {
      display: none;
    }
  }

  .sections-container {
    list-style: none;
  }

  .sections-container:first-child {
    border-top: 3px solid rgb(67, 196, 217, 0.5);
  }

  .section-text {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    // from Figma bit makes a fixed left nav section too large
    line-height: 100px;
    // uncomment line-height: 60px for position: fixed left nav
    // line-height: 60px;
    border-bottom: 3px solid rgb(67, 196, 217, 0.5);
  }

  .v-expansion-panel-header {
    h3 {
      color: #2c58b1;
    }
    border-bottom: 3px solid rgb(67, 196, 217, 0.5);
    &--active {
      h3 {
        color: #828282;
      }
      border-bottom: none;
    }
  }

  .faqCard {
    h3 {
      // this pulls from Figma
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
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
  mounted() {
    // this offsets the location where any anchor tags take you so that they aren't underneath AppBar
    // note: this works in Chrome but not in Firefox and perhaps other browsers?
    window.addEventListener("hashchange", function() {
      window.scrollTo(window.scrollX, window.scrollY - 150);
    });
  },
  methods: {
    expandSection(index) {
      if (!this.panel.includes(index)) {
        this.panel.push(index);
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
    panel: [0],
    faqList: [
      {
        section: "Our Alert System",
        sectionId: "our-alert-system",
        content: [
          {
            question: "What is contact tracing? Is that what Covid Watch does?",
            answer:
              "<p> Contact tracing is the process of reconstructing the interactions of a sick person from the time they were infected until the time they were diagnosed and quarantined. <a target='_blank' href='https://www.cdc.gov/coronavirus/2019-ncov/php/open-america/contact-tracing.html'>Manual contact tracing</a> takes a lot of effort and looks a lot like detective work. Imagine trying to list everyone you talked to for the past two weeks in your normal, undistanced life. Not so easy. </p> " +
              "<p> The Covid Watch app helps narrow and augment the work of manual contact tracers. This is not contact tracing. We use the Bluetooth feature on your smartphone to sense when you are near someone else with Covid Watch installed. A list of times you were in close proximity to other users is stored on your phone. The people you’ve seen will have a corresponding record on their phones. </p>" +
              "<p> If either person tests positive for COVID-19, they can inform the app about their diagnosis. Without requiring them to remember whom they saw in the past two weeks, Covid Watch will automatically warn everyone they saw about potential infection and encourage them to take steps like getting tested or self-quarantining. We call this key intervention an ‘exposure alert.’ </p>" +
              "<p> You can learn more about our exposure alert system on our <a target='_blank' href='/how-it-works'>How It Works</a> page. Or you can read our original <a target='_blank' href='/covid_watch_whitepaper.pdf'>White Paper</a> that describes Covid Watch’s founding vision of privacy-preserving technology. </p>"
          },
          {
            question: "How do exposure alerts help to stop the spread?",
            answer:
              "<p>The coronavirus will be with us for a long time. Realistically, we can’t stay under lockdown without wreaking immense economic havoc and threatening our way of life. </p> " +
              "<p>Covid Watch’s mission is to use technology to make it safer for us all to be together again. As testing becomes more prevalent and communities take steps to come back together, we need a system that reflects our real-world social contacts accurately and offers steps to take as soon as the coronavirus is detected.</p>" +
              "<p>Exposure alerts, like those provided by Covid Watch, will empower individuals and communities with the information they need to respond to potential infection. Actionable information allows people to quarantine earlier, get tested more quickly, and stop the spread. Public health officials and <a target='_blank' href='https://www.cdc.gov/coronavirus/2019-ncov/php/open-america/contact-tracing.html'>manual contact tracers</a> can not be everywhere. We augment their work by anonymously alerting people if they are at higher risk.</p>"
          },
          {
            question: "Does everyone need to use Covid Watch for it to work?",
            answer:
              "Our app works best when communities adopt it together, but it’s not necessary for everyone around you to have Covid Watch or a compatible app installed to stop the spread. This technology is new, but <a target='_blank' href='https://github.com/BDI-pathogens/covid-19_instant_tracing/blob/master/Report%20-%20Effective%20Configurations%20of%20a%20Digital%20Contact%20Tracing%20App.pdf'>early models estimate</a> that rapid exposure alerts could stop the epidemic if <a target='_blank' href='https://science.sciencemag.org/content/early/2020/04/09/science.abb6936'>56 percent</a> of people used the app. Even below that number, every new user increases information about infections and makes communities safer. "
          }
        ]
      },
      {
        section: "How It Works",
        sectionId: "how-it-works",
        content: [
          {
            question: "Why does the Covid Watch app use my Bluetooth Signal?",
            answer:
              "<p>Bluetooth signals allow us to know who’s actually close to you and for how long. If you’re on the first floor of a tall building, and someone else is on the 15th, a Bluetooth signal would not log your interaction. That’s not true of other ways to view your location, like GPS.</p> " +
              "<p>Also, your Bluetooth signal belongs to you and your phone. This allows us to never store your data centrally. Instead, random numbers that list your interactions via Bluetooth are stored on your own device.</p>" +
              "<p>You can learn more about the tech behind our contact tracing solution in our <a target='_blank' href='/covid_watch_whitepaper.pdf'>White Paper</a>.</p>"
          },
          {
            question: "Will the alerts tell me where and when I was exposed?",
            answer:
              "<p>Since we don’t collect any location data, we can’t tell you where you were exposed. However, we will be able to tell you on which day you were exposed.</p> " +
              "<p>We recognize that this involves some privacy trade-offs. If you receive an alert that you were exposed on a day where you were within six feet of very few people, you may be able to deduce who shared their test results. We wouldn’t be able to know who exposed you, but you might be able to infer it.</p>" +
              "<p>We think the benefits of knowing when you were exposed outweigh the risks of possibly being able to guess who exposed you.</p>"
          },
          {
            question: "How much will Covid Watch drain my phone’s battery?",
            answer:
              "<p>We expect Covid Watch to drain your battery significantly less than using a pair of Bluetooth headphones. We use standard low-energy Bluetooth interfaces, and we send Bluetooth chirps every few minutes rather than in a constant stream.</p> "
          },
          {
            question:
              "How can you be sure that the diagnosis reports are genuine?",
            answer:
              "<p>Wherever you live, local public health officials are monitoring testing for COVID-19 closely. This testing is key to slowing the spread. It’s important that users of the app not be able to send out false positives. We are coordinating with public health officials to create a system that allows you to quickly and easily verify that you have tested positive for the coronavirus before sharing it anonymously with those you’ve spent time near in the previous weeks.</p> "
          }
        ]
      },
      {
        section: "Privacy",
        sectionId: "privacy",
        content: [
          {
            question: "How does the Covid Watch app protect my privacy?",
            answer:
              "<p>In short, we don’t collect data about who you are, where you go or who you’re near. With the Covid Watch app, your phone periodically sends out Bluetooth signals, essentially saying to nearby phones, “Hey, I’m here!” If another phone nearby also has the app and says, “Hey, I’m here too,” both phones will log the interaction and store it for two to four weeks right there inside your device.</p>" +
              "<p>If you are diagnosed with COVID-19, you can choose to share your test results with other Covid Watch users. Once your results have been verified by local health officials, your phone will upload a random number to our database. Other Covid Watch users whose phones have stored the same random number will then be notified that they were exposed to someone who tested positive for COVID-19. Our database contains no personal information and no locations. A hacker who broke into our database or your phone would just find a list of random numbers.</p>"
          },
          {
            question:
              "Why is it important to protect privacy with apps like Covid Watch?",
            answer:
              "<p>Privacy is a basic human right. You should not have to give it up to protect your health and the health of your community. People’s locations, travel history, and contact networks are sensitive personal information that should not be tracked by health authorities or technology companies unless absolutely necessary. It’s clearly not necessary, since we have access to decentralized, Bluetooth-based solutions. </p>" +
              "<p>Some contact tracing apps store identifying, personal information in a centralized database. With these apps, there is always a risk that the data will be leaked or hacked. This could expose individuals to scams, identity theft, public shaming, and other negative consequences. It also presents a potential liability for health authorities.</p>" +
              "<p>How much trust do we want to demand of people before they’re willing to install an app to stop the spread? With a privacy-preserving approach, so little data is stored that people can sign up without needing to worry about what might happen to their information.</p>" +
              "<p>It’s also important to be careful about what systems we put in place during times of crisis, since these systems historically persist long after. How confident are we that our personal data would only be used for COVID-19 contact tracing? What kind of privacy norms do we want going forward?</p>" +
              "<p>The ACLU favors our decentralized and anonymous approach to using technology to slow the spread of the coronavirus. You can <a target='_blank' href='https://www.aclu.org/report/aclu-white-paper-principles-technology-assisted-contact-tracing'>read more here</a>.</p>"
          },
          {
            question: "Why does the Android app ask for location permission?",
            answer:
              "<p>Devices that run on the Android operating system require location permissions for apps that access Bluetooth. This is because some apps use Bluetooth beacons, placed in fixed locations, to track your location. This is why Covid Watch does not communicate with Bluetooth beacons. We never gather your location information. </p>"
          },
          {
            question:
              "Who gets access to the information I share with the Covid Watch app?",
            answer:
              "<p>The Covid Watch app stores everything only on your phone. 'Everything' isn’t much — it’s the random numbers you’ve been sending out and the list of those you’ve gathered from those around you. No one but you has access to this. If you uninstall the app, your proximity log is gone, and we wouldn’t be able to restore it.</p>" +
              "<p>You can choose to share a positive test result by uploading this anonymous info to our database. This will be accessible to our database administrators, but it’s just a list of random numbers. These random numbers aren't meaningful except to the devices which have picked up your phone's Bluetooth signal during social contacts. And all they tell those phones is that they have been in proximity of someone who is now infected.</p>"
          },
          {
            question:
              "How are you sure I can’t be identified when I share my test results?",
            answer:
              "<p>We don't identify you, because we can’t identify you. Covid Watch does not ask for you for identifying information. The communications between phones do not contain any information about who these phones belong to. For example, if you are close to the same person twice on different days, your phone won’t even know whether it was the same person or different people.</p>" +
              "<p>Our database does not contain identifying information. Exposure alerts can only be generated using a combination of the information in the shared database and the information stored on your phone.</p>"
          }
        ]
      },
      {
        section: "Working Together",
        sectionId: "working-together",
        content: [
          {
            question: "What makes Covid Watch different?",
            answer:
              "<p>Covid Watch is voluntary, decentralized, anonymous and Bluetooth-based. The response to the coronavirus is a global patchwork of local efforts, and it’s no different with app-based solutions to slow the spread of COVID-19.</p> " +
              "<p>Some countries and companies are releasing apps that are not based on the same privacy-protecting principles at the center of our mission. A tracing solution that monitors you via Bluetooth and stores every interaction you have in a centralized database that is accessible by the government is the least private solution to the problem we face. This would represent a once-in-a-lifetime erosion of civil liberties.</p>" +
              "<p>We are aligned with <a target='_blank' href='https://tcn-coalition.org/'>a global group of privacy-minded technologists</a> that have coalesced around solutions that protect your privacy and public health at the same time.</p>" +
              "<p>Read more about the <a target='_blank' href='https://tcn-coalition.org/'>TCN Coalition</a> and our <a target='_blank' href='https://github.com/TCNCoalition/TCN'>shared commitment</a> to protecting your privacy. </p>"
          },
          {
            question: "Are Apple and Google building apps like this?",
            answer:
              "<p>No. They will not be building apps themselves. </p>" +
              "<p>Apple and Google made a rare joint announcement in April: these two competitors would be working together on creating systems to allow for anonymous exposure alerts. More specifically, they would be building a set of programming tools, called an API, that would allow apps like Covid Watch to more easily use the Bluetooth systems built into billions of smartphones around the world. </p>" +
              "<p>Apple and Google responded to challenges Covid Watch and others faced in building a privacy-protecting app to notify communities and individuals of potential exposure to the coronavirus. The Covid Watch app will use these new APIs to offer private solutions to public health problems.</p>" +
              "<p>Read more about Apple and Google’s commitment to privacy <a target='blank' href='https://www.apple.com/covid19/contacttracing'>here</a>.</p>"
          },
          {
            question: "Are you working with the government?",
            answer:
              "<p>Covid Watch is a nonprofit, not a government agency or a private company focused on profit. Our mission is to protect your health and your privacy. The COVID-19 pandemic, however, presents a once-in-a-lifetime challenge to society. Since this crisis began, governments have taken the lead on testing for the virus, issuing stay-at-home orders and <a target='blank' href=''https://www.cdc.gov/coronavirus/2019-ncov/php/principles-contact-tracing.html>manual contact tracing</a>.</p>" +
              "<p>The Covid Watch app makes it easier for governments to focus on their role, by alerting more people of exposure than would be notified by manual contact tracing and testing efforts alone. We are working closely with local public health officials to verify testing results and provide people with the tools they need to act quickly.</p>" +
              "<p>We understand the importance of data security, and we will be adhering to health privacy laws for the regions in which the app is available. We will be fully compliant with GDPR and HIPAA laws.</p>"
          }
        ]
      }
    ]
  })
};
</script>


