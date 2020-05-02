<template>
  <v-card :card="card" class="news-card">
    <img
      class="stripe"
      style="position: absolute;"
      src="../assets/home_page/news_cards_top_accent.svg"
      alt="stripe"
    />
    <div class="d-flex py-6 px-6 justify-space-between">
      <img src="../assets/home_page/news_icon.svg" alt="news" />
      <div class="news-date">{{ card.date }}</div>
    </div>
    <div class="px-6">
      <div class="card_title mb-5">
        <a
          target="_blank"
          :href="card.url"
          class="primary--text"
          style="text-decoration: none; font-weight: bold;"
          >{{ card.title }}
          <img
            style="height: 10px;"
            src="../assets/home_page/arrow_icon.svg"
            alt="arrow"
        /></a>
      </div>
      <v-text-card class="primary--text grow float-left">
        - {{ card.author_name }},
        <span style="font-style: italic;"> {{ card.outlet_name }} </span>
      </v-text-card>
    </div>

    <slot></slot>
  </v-card>
</template>

<style lang="scss" scoped>
.news-card {
  height: 250px;
  min-width: 320px;
}

.card_title {
  min-height: 80px;
}

//     @media (max-width:400px){
//         .news-card {
//         height: 250px;
//         min-width: 320px;
//         }
//     }

//   @media (min-width:400px){
//       .news-card {
//         height: 350px;
//         min-width: 300px;
//     }
//   }
</style>

<script>
export default {
  name: "NewsCard",
  props: {
    card: Object
  }
};
</script>
