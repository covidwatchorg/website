<template>
    <v-btn class="cta-button" :class="type" :nuxt="true" :to="link">
        {{ text }}
    </v-btn>
</template>


<script>
export default {
    name: "Button",
    props: {
        type: {
            type: String,
            required: true
        },
        link:{
            type: String,
            required: true
        },
        text:{
            type: String,
            required: true
        }
    }
};
</script>


<style lang="scss">
    .cta-button {
        width: 300px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        // this font size from figma makes text look HUGE relative to button and other elements
        // font-size: 18px;
    }
</style>
