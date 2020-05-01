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
                          <p class="answer">{{question.answer}}</p>
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
        id: "#how-it-works",
        title: "How it works"
      },
      {
        id: "#alerts",
        title: "Alerts"
      },
      {
        id: "#privacy",
        title: "Privacy"
      },
      {
        id: "#partnerships",
        title: "Partnerships"
      },
      {
        id: "#collaborations",
        title: "Collaborations"
      }
    ],
    faqList: [
      {
        "question": "How it works",
        "questionId": "how-it-works",
        "content": [
          {
            "question": "this is a question?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare cursus congue fringilla duis. Blandit cras venenatis pulvinar imperdiet. Vivamus et malesuada ornare nascetur enim velit. Libero, in risus nibh nulla pulvinar elit, ut lacus. Magna nibh in duis augue quis eget eget. Tortor eget leo at sed egestas fringilla dictum non. In pulvinar netus morbi id non vitae urna. " +
                      "Enim est neque, ac rhoncus phasellus senectus lorem eget. Lorem amet et placerat in odio morbi tellus urna. Commodo adipiscing nisi, penatibus sit quis malesuada posuere. Tortor leo eros, sapien, scelerisque. Nec feugiat lectus tristique aliquam ipsum quisque. Mauris et sed amet, morbi nunc, imperdiet lobortis. Nunc tortor molestie iaculis placerat sed. Ac ornare mi, dui lobortis pharetra. Massa et, pretium in blandit aliquam nisi pellentesque tristique arcu."
          },
          {
            "question": "this is another question?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare cursus congue fringilla duis. Blandit cras venenatis pulvinar imperdiet. Vivamus et malesuada ornare nascetur enim velit. Libero, in risus nibh nulla pulvinar elit, ut lacus. Magna nibh in duis augue quis eget eget. Tortor eget leo at sed egestas fringilla dictum non. In pulvinar netus morbi id non vitae urna. " +
                      "Enim est neque, ac rhoncus phasellus senectus lorem eget. Lorem amet et placerat in odio morbi tellus urna. Commodo adipiscing nisi, penatibus sit quis malesuada posuere. Tortor leo eros, sapien, scelerisque. Nec feugiat lectus tristique aliquam ipsum quisque. Mauris et sed amet, morbi nunc, imperdiet lobortis. Nunc tortor molestie iaculis placerat sed. Ac ornare mi, dui lobortis pharetra. Massa et, pretium in blandit aliquam nisi pellentesque tristique arcu."
          },
          {
            "question": "this is another question?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare cursus congue fringilla duis. Blandit cras venenatis pulvinar imperdiet. Vivamus et malesuada ornare nascetur enim velit. Libero, in risus nibh nulla pulvinar elit, ut lacus. Magna nibh in duis augue quis eget eget. Tortor eget leo at sed egestas fringilla dictum non. In pulvinar netus morbi id non vitae urna. " +
                      "Enim est neque, ac rhoncus phasellus senectus lorem eget. Lorem amet et placerat in odio morbi tellus urna. Commodo adipiscing nisi, penatibus sit quis malesuada posuere. Tortor leo eros, sapien, scelerisque. Nec feugiat lectus tristique aliquam ipsum quisque. Mauris et sed amet, morbi nunc, imperdiet lobortis. Nunc tortor molestie iaculis placerat sed. Ac ornare mi, dui lobortis pharetra. Massa et, pretium in blandit aliquam nisi pellentesque tristique arcu."
          },
        ]
      },
      {
        "question": "Alerts",
        "questionId": "alerts",
        "content": [
          {
            "question": "this is a question?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare cursus congue fringilla duis. Blandit cras venenatis pulvinar imperdiet. Vivamus et malesuada ornare nascetur enim velit. Libero, in risus nibh nulla pulvinar elit, ut lacus. Magna nibh in duis augue quis eget eget. Tortor eget leo at sed egestas fringilla dictum non. In pulvinar netus morbi id non vitae urna. " +
                      "Enim est neque, ac rhoncus phasellus senectus lorem eget. Lorem amet et placerat in odio morbi tellus urna. Commodo adipiscing nisi, penatibus sit quis malesuada posuere. Tortor leo eros, sapien, scelerisque. Nec feugiat lectus tristique aliquam ipsum quisque. Mauris et sed amet, morbi nunc, imperdiet lobortis. Nunc tortor molestie iaculis placerat sed. Ac ornare mi, dui lobortis pharetra. Massa et, pretium in blandit aliquam nisi pellentesque tristique arcu."
          },
        ]
      },
      {
        "question": "Privacy",
        "questionId": "privacy",
        "content": [
          {
            "question": "this is a question?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare cursus congue fringilla duis. Blandit cras venenatis pulvinar imperdiet. Vivamus et malesuada ornare nascetur enim velit. Libero, in risus nibh nulla pulvinar elit, ut lacus. Magna nibh in duis augue quis eget eget. Tortor eget leo at sed egestas fringilla dictum non. In pulvinar netus morbi id non vitae urna. " +
                      "Enim est neque, ac rhoncus phasellus senectus lorem eget. Lorem amet et placerat in odio morbi tellus urna. Commodo adipiscing nisi, penatibus sit quis malesuada posuere. Tortor leo eros, sapien, scelerisque. Nec feugiat lectus tristique aliquam ipsum quisque. Mauris et sed amet, morbi nunc, imperdiet lobortis. Nunc tortor molestie iaculis placerat sed. Ac ornare mi, dui lobortis pharetra. Massa et, pretium in blandit aliquam nisi pellentesque tristique arcu."
          },
        ]
      },
      {
        "question": "Partnerships",
        "questionId": "partnerships",
        "content": [
          {
            "question": "this is a question?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare cursus congue fringilla duis. Blandit cras venenatis pulvinar imperdiet. Vivamus et malesuada ornare nascetur enim velit. Libero, in risus nibh nulla pulvinar elit, ut lacus. Magna nibh in duis augue quis eget eget. Tortor eget leo at sed egestas fringilla dictum non. In pulvinar netus morbi id non vitae urna. " +
                      "Enim est neque, ac rhoncus phasellus senectus lorem eget. Lorem amet et placerat in odio morbi tellus urna. Commodo adipiscing nisi, penatibus sit quis malesuada posuere. Tortor leo eros, sapien, scelerisque. Nec feugiat lectus tristique aliquam ipsum quisque. Mauris et sed amet, morbi nunc, imperdiet lobortis. Nunc tortor molestie iaculis placerat sed. Ac ornare mi, dui lobortis pharetra. Massa et, pretium in blandit aliquam nisi pellentesque tristique arcu."
          },
        ]
      },
      {
        "question": "Collaborations",
        "questionId": "collaborations",
        "content": [
          {
            "question": "this is a question?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare cursus congue fringilla duis. Blandit cras venenatis pulvinar imperdiet. Vivamus et malesuada ornare nascetur enim velit. Libero, in risus nibh nulla pulvinar elit, ut lacus. Magna nibh in duis augue quis eget eget. Tortor eget leo at sed egestas fringilla dictum non. In pulvinar netus morbi id non vitae urna. " +
                      "Enim est neque, ac rhoncus phasellus senectus lorem eget. Lorem amet et placerat in odio morbi tellus urna. Commodo adipiscing nisi, penatibus sit quis malesuada posuere. Tortor leo eros, sapien, scelerisque. Nec feugiat lectus tristique aliquam ipsum quisque. Mauris et sed amet, morbi nunc, imperdiet lobortis. Nunc tortor molestie iaculis placerat sed. Ac ornare mi, dui lobortis pharetra. Massa et, pretium in blandit aliquam nisi pellentesque tristique arcu."
          },
        ]
      },
      
    ]
  })
};
</script>


