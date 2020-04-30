<template>
    <v-col cols="3">
        <img :src="img">
        <h3 class="mb-4" {{ title }} </h3>
        <p class="mb-5">
        {{ text }}
        </p>
    </v-col>
</template>

<script>

export default {
    name: "Step",
    props: {
        img: String, 
        title: String,
        text: String,
    },
};
</script>
