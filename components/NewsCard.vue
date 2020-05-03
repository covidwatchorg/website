<template>
  <v-card :card="card" class="news-card">
    <v-img
      :src="card.type === 'press_release' ? press.stripe : news.stripe"
      min-width="100%"
      :gradient="card.type === 'press_release' ? press.gradient : news.gradient"
    />
    <div class="d-flex py-6 px-6 justify-space-between">
      <img :src="card.type === 'press_release' ? press.icon : news.icon" />
      <div class="news-date">{{ card.date }}</div>
    </div>
    <div class="px-6 mt-4">
      <div class="card_title mb-5">
        <a
          target="_blank"
          :href="card.url"
          class="primary--text"
          style="text-decoration: none; font-weight: bold;"
        >
          {{ card.title }}
          <img
            style="height: 10px;"
            src="../assets/home_page/arrow_icon.svg"
            alt="arrow"
          />
        </a>
      </div>
      <div class="primary--text body-2 grow float-right mb-2">
        <span style="font-style: italic;">- {{ card.outlet_name }}</span>
      </div>
    </div>
    <slot></slot>
  </v-card>
</template>

<style lang="scss" scoped>
.news-card {
  height: 100%;
  max-width: 100%;
}

.card_title {
  min-height: 80px;
}
</style>

<script>
export default {
  name: "NewsCard",
  props: {
    card: Object
  },
  data: () => ({
    news: {
      icon: require("../assets/home_page/news_icon.svg"),
      stripe: require("../assets/home_page/news_cards_top_accent.svg"),
      gradient: "to right, #43C4D9, #fff" // aqua
    },
    press: {
      icon: require("../assets/home_page/tangerine_news_icon.svg"),
      stripe: require("../assets/home_page/tangerine_stripe.svg"),
      gradient: "to right, #F05452, #fff" // tangerine
    }
  })
};
</script>
