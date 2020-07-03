<template>
  <v-card style="border-radius:0px;" :card="card" class="news-card d-flex flex-column">
    <v-img
      :src="card.type === 'press_release' ? press.stripe : news.stripe"
      :gradient="card.type === 'press_release' ? press.gradient : news.gradient"
      min-width="100%"
      class="flex-grow-0"
    />
    <div class="news-header d-flex justify-space-between">
      <img :src="card.type === 'press_release' ? press.icon : news.icon" />
      <div class="news-date">{{ card.date }}</div>
    </div>
    <div class="news-title flex-sm-grow-1">
      <a target="_blank" :href="card.url" class="primary--text">
        {{ card.title }}&nbsp;
        <img
          style="height: 10px;"
          src="../assets/home_page/arrow_icon.svg"
          alt="arrow"
        />
      </a>
    </div>
    <v-spacer></v-spacer>
    <div class="news-credit primary--text body-2">
      <span>- {{ card.outlet_name }}</span>
    </div>
    <slot></slot>
  </v-card>
</template>

<style lang="scss" scoped>
.news-card {
  height: 100%;
  max-width: 100%;
}

.news-header {
  padding: 24px;
}

.news-title {
  padding: 0px 24px;
  min-height: 80px;
  margin: 16px 0px;

  a {
    text-decoration: none;
    font-weight: bold;
  }
}

.news-credit {
  padding: 0px 24px;
  margin-bottom: 12px;
  font-style: italic;
  text-align: right;
}
</style>

<script>
export default {
  name: "NewsCard",
  props: {
    card: Object,
  },
  data: () => ({
    news: {
      icon: require("../assets/home_page/news_icon.svg"),
      stripe: require("../assets/home_page/news_cards_top_accent.svg"),
      gradient: "to right, #43C4D9, #fff", // aqua
    },
    press: {
      icon: require("../assets/home_page/tangerine_news_icon.svg"),
      stripe: require("../assets/home_page/tangerine_stripe.svg"),
      gradient: "to right, #F05452, #fff", // tangerine
    },
  }),
};
</script>
