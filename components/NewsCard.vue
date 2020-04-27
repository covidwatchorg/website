<template>
    <v-card :card="card" class="news-card">
            <img style="position:absolute;" src="../assets/home_page/news_cards_top_accent.svg" alt="stripe">
            <div class="d-flex py-6 px-6 justify-space-between">
            <img src="../assets/home_page/news_icon.svg" alt=news>
            <div class="news-date">{{card.date}}</div>
            </div>
            <div class="pa-6">
            <a :href="card.url" class="primary--text" style="text-decoration:none;font-weight:bold;">{{card.title}} <img style="height:10px;" src="../assets/home_page/arrow_icon.svg" alt="arrow"></a>
            <div class="primary--text float-right mt-10">
                - {{card.author}}, <span style="font-style:italic;"> {{card.outlet}} </span>
            </div>
        </div>

        <slot></slot>
    </v-card>
</template>


<style lang="scss" scoped>
.news-card {
    height: 250px;
    min-width: 320px;
}
</style>

<script>
    export default {
    name: "NewsCard",
    props: {
        card: Object
    }
    };
</script>
