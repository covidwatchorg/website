<template>
  <v-container>
    <h1>h1: home rendered</h1>
    <h2>h2: let's test</h2>
    <h3>h3: header typography</h3>
    <p class="title">title: and typography</p>
    <p class="title-caps">title caps</p>
    <p class="subtitle">subtitle: in general</p>
    <p>default</p>
    <p class="caption">caption</p>
    <Button>A default button</Button>
    <Button secondary>A secondary button</Button>
    <Button disabled large>A disabled button</Button>
    <Button primary hero nuxt to="/support">A hero button w/ link</Button>
  </v-container>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button
  }
};
</script>
