<template>
  <div>
    <img :src="img" :alt="title" />
    <h3 class="mt-10">{{ title }}</h3>
    <p class="caption mt-5">{{ body }}</p>
  </div>
</template>


<style lang="scss" scoped>
img {
  // keeps the how it works svgs reasonably sized aligned w Figma
  max-height: 200px;
}
</style>

<script>
export default {
  name: "WhyCard",
  props: {
    title: String,
    body: String,
    img: Object
  }
};
</script>
