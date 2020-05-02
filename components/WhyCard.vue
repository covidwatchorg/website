<template>
  <div>
    <v-img :src="img" :alt="title" v-bind="$attrs" contain></v-img>
    <h3 class="mt-10">{{ title }}</h3>
    <p class="mt-5">{{ body }}</p>
  </div>
</template>


<style lang="scss" scoped>
</style>

<script>
export default {
  name: "WhyCard",
  inheritAttrs: false,
  props: {
    title: String,
    body: String,
    img: String
  }
};
</script>
