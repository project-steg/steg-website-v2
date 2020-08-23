<template>
  <div>
    <top />
    <news :news="news" />
    <about />
    <partners :partners="partners" />
    <works />
    <blog />
    <members />
    <contact />
  </div>
</template>

<script>
import axios from "axios";
import top from "@/components/top.vue";
import news from "@/components/news.vue";
import about from "@/components/about.vue";
import partners from "@/components/partners.vue";
import works from "@/components/works.vue";
import blog from "@/components/blog.vue";
import members from "@/components/members.vue";
import contact from "@/components/contact.vue";
export default {
  async asyncData() {
    const getNews = axios.get('https://steg.microcms.io/api/v1/news?limit=99', {headers: {"X-API-KEY": process.env.API_KEY} });
    const getPartners = axios.get('https://steg.microcms.io/api/v1/partners?limit=99', {headers: {"X-API-KEY": process.env.API_KEY} });

    let news_data;
    let partners_data;

    await Promise.all([getNews, getPartners]).then(function(values) {
      news_data = values[0].data.contents
      partners_data = values[1].data.contents
    })

    return {
      news: news_data,
      partners: partners_data
    }
  },
  components: {
    top,
    news,
    about,
    partners,
    works,
    blog,
    members,
    contact,
  },
}
</script>

<style lang="scss">
@include mq(md) {
    .html{
      font-size: 13px;
    }
}
</style>
