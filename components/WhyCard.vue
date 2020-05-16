<template>
  <div>
    <v-img
      class="shrink-on-small-screen"
      :src="img"
      :alt="title"
      v-bind="$attrs"
      contain
    ></v-img>
    <h3 class="mt-10">{{ title }}</h3>
    <p class="mt-5">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "WhyCard",
  inheritAttrs: false,
  props: {
    title: String,
    body: String,
    img: String,
  },
};
</script>
