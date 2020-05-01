<template>
    <div>
        <v-row 
            v-if="$vuetify.breakpoint.smAndDown"
            class="py-5 px-12 d-flex align-end step-container"
            > 
            <v-col cols="10">
                <img :src="img_step">
            </v-col>
            <v-col cols="8" :sm="9">
                <img :src="img_num">
                <h3 class="mb-4" {{ title }} </h3>
                <p class="mb-5">
                {{ text }}
                </p>
            </v-col>
        </v-row>

        <v-row v-else class="py-5 px-12 d-flex align-end" :class="{ 'justify-end' : right }">
            <v-col cols="3">
                <img :src="img_num">
                <h3 class="mb-4" {{ title }} </h3>
                <p class="mb-5">
                {{ text }}
                </p>
            </v-col>

            <v-col cols="3">
                <img :src="img_step">
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Step",
    props: {
        img_num: String, 
        img_step: String,
        title: String,
        text: String,
        right: Boolean,
    },
};
</script>
