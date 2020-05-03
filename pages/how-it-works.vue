<template>
    <v-container grid-list-xs>
        <v-row id="how-it-works">
            <!-- First row-->
            <v-row id="header" class="px-12 mt-12">

                <v-col cols="12" :md="7" :sm="12">
                    <div class="mt-10">
                        <p class="title-caps">HOW IT WORKS</p>
                        <h1 class="mt-6">Our Privacy-Preserving Protocol</h1>
                        <div class="mt-10">
                            <p>Covid Watch uses the international open-source TCN Protocol first developed in our community to send anonymous exposure notifications via private, local Bluetooth signals. Let’s find out more about how it works for Sam and Jane, two users of the app.</p>
                        </div>
                    </div>
                </v-col>

                <v-col :md="4">
                    <img class="connected_img" src="../assets/how_it_works/connected_group_final.svg">
                </v-col>
            </v-row>

            <!-- Step 1 -->
            <div class="triangle_right_1">
                    <Step :img_num="require('../assets/how_it_works/num-1.svg')" :img_step="require('../assets/how_it_works/step-1.svg')" title="Bluetooth signals" text="After Jane installs Covid Watch, her phone begins to chirp random numbers using Bluetooth. Her phone also listens for chirps sent by other phones nearby."></Step>

            <!-- Step 2 -->
            <div class="triangle_left_1">
                <Step right :img_num="require('../assets/how_it_works/num-2.svg')" :img_step= "require('../assets/how_it_works/num-2-img.svg')" title="No Tracing or Tracking"  text="The random numbers change at short intervals, so Jane’s identity and location can’t be determined by nearby phones that can hear the chirps."></Step>
                
            
            <!-- Step 3 -->
              <Step :img_num="require('../assets/how_it_works/num-3.svg')" :img_step="require('../assets/how_it_works/num-3-img.svg')" title=" A Chance Encounter"  text="Jane has a chat with Sam, who also has the Covid Watch app installed. Their phones log these random numbers and the time."></Step>

            <!-- Step 4 -->
                <Step right :img_num="require('../assets/how_it_works/num-4.svg')" :img_step="require('../assets/how_it_works/num-4-img-new.svg')" title="An Anonymous Log"  text="Jane’s phone keeps a log of these numbers for two to four weeks. No personal information is needed for the system to work! Just a log of random numbers along with time. "></Step>
            </div>


            <!-- Step 5 -->
            <div class="triangle_right_2">
                <Step :img_num="require('../assets/how_it_works/num-5.svg')" :img_step="require('../assets/how_it_works/num-5-img.svg')" title="Voluntary Reports"  text="A few days later, Sam tests positive for COVID-19. Sam chooses to report using a verification code in the app. When he does, his log of random numbers is shared with the Covid Watch server."></Step>

            <!-- Step 6 -->
            <div class="triangle_left_2">
                <Step right :img_num="require('../assets/how_it_works/num-6.svg')" :img_step="require('../assets/how_it_works/num-6-img.svg')" title="Exposure Notifications"  text="Jane’s phone checks the Covid Watch server for numbers uploaded by COVID-19 positive patients. When Sam shares his result, Jane receives an alert that she may have been exposed to COVID-19."></Step>

            <!-- Step 7 -->
                <Step :img_num="require('../assets/how_it_works/num-7.svg')" :img_step="require('../assets/how_it_works/num-7-img.svg')" title="A Call to Action"  text="The alert tells Jane what day she was exposed and gives her the information she needs to take action. With this early warning, Jane is empowered to act quickly."></Step>


            <!-- Step 8 -->
            <v-row align="center" class="px-12 step-8-row" justify="space-between" id="step-2">
                <v-col :md="2">
                </v-col>
                <v-col :md="3" :sm="8">
                    <img class="mr-10 step_img" src="../assets/how_it_works/family-dancing-2.svg">
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="11" :md="3" :sm="11">
                    <img class="mb-4"  src="../assets/how_it_works/num-8.svg">
                    <h3 class="mb-5"> Community Safety</h3>
                    <p>
                   Sam might not have remembered meeting Jane. Because they both used Covid Watch, Jane is able to follow local healthcare guidelines and reduce the spread of COVID-19.
                    </p>
                </v-col>
                <v-col :md="3" :sm="10">
                    <img class="step_img" src="../assets/how_it_works/family-dancing-1.svg">
                </v-col>
            </v-row>
            </div>
            </div>
            </div>

            <v-row class="d-block ma-12 pa-12" justify="center">
                <h2 class="text-center"> 
                    Still have questions? To learn more 
                    <nuxt-link to="/faq"> 
                        visit our FAQ  
                        <img
                        style="height:16px;"
                        src="../assets/home_page/arrow_icon.svg"
                        alt="arrow"
                        />
                    </nuxt-link>  
                </h2>
               
            </v-row>

            <v-row class="no-gutters">
                <v-spacer></v-spacer>
                <v-col :md="4" :sm="8">
                    <img class="woman-triangle" src="../assets/how_it_works/woman-triangle.svg">
                </v-col>
                <v-spacer></v-spacer>
            </v-row>


        </v-row>



    </v-container>
</template>

<style lang="scss">

#how-it-works{
    @media (max-width:960px){
        .connected_img{
            display: none;
        }
    }

    .triangle_right_1{
        background-image: url("../assets/how_it_works/triangle-right.svg");
        background-position-x: right;
        background-position-y: 4%;
    }

    .triangle_left_1{
        background-image: url("../assets/how_it_works/triangle-left.svg");
        background-position-x: left;
        background-position-y: center;
    }

    .triangle_right_2{
        background-image: url("../assets/how_it_works/triangle-right.svg");
        background-position-x: right;
        background-position-y: 14%;
    }

    .triangle_left_2{
        background-image: url("../assets/how_it_works/triangle-left.svg");
        background-position-x: left;
        background-position-y: 42%;
    }

        @media (max-width:500px){
            .triangle_right_1, .triangle_left_1, .triangle_right_2, .triangle_left_2, .step-8-row {
                background-image: none;
                
            }

            .step-container {
                margin-bottom: 100px;
            }


            .step_img {
                max-width: 260px;
            }

            .woman-triangle {
                width: 260px;
            }
    }
}
</style>

<script>
import Step from "../components/Step.vue"
export default {
    components: {
        Step,
    },
    head() {
        return {
            title: "How It Works | Covid Watch"
        };
    }
};
</script>
