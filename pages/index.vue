<template>
  <div>
    <mainHeader />
    <top />
    <news :news="news" />
    <about />
    <partners :partners="partners" />
    <works :works="works" />
    <blog :blog="blog" />
    <contact />
    <mainFooter />
  </div>
</template>

<script>
import axios from "axios";
import mainHeader from "@/components/header.vue";
import top from "@/components/top.vue";
import news from "@/components/news.vue";
import about from "@/components/about.vue";
import partners from "@/components/partners.vue";
import works from "@/components/works.vue";
import blog from "@/components/blog.vue";
import members from "@/components/members.vue";
import contact from "@/components/contact.vue";
import mainFooter from "@/components/footer.vue";
export default {
  async asyncData({ $config: { API_KEY, BLOG_API_KEY } }) {
    const getNews = axios.get("https://steg.microcms.io/api/v1/news?limit=99", {
      headers: { "X-API-KEY": API_KEY },
    });
    const getPartners = axios.get(
      "https://steg.microcms.io/api/v1/partners?limit=99",
      { headers: { "X-API-KEY": API_KEY } }
    );
    const getBlog = axios.get(
      "https://steg-blog.microcms.io/api/v1/article?limit=99",
      { headers: { "X-API-KEY": BLOG_API_KEY } }
    );
    const getWorks = axios.get(
      "https://steg.microcms.io/api/v1/works?limit=99",
      { headers: { "X-API-KEY": API_KEY } }
    );

    let news_data;
    let partners_data;
    let blog_data;
    let works_data;

    await Promise.all([
      getNews,
      getPartners,
      getBlog,
      getWorks,
    ]).then((values) => {
      news_data = values[0].data.contents;
      partners_data = values[1].data.contents;
      blog_data = values[2].data.contents;
      works_data = values[3].data.contents;
    });

    return {
      news: news_data,
      partners: partners_data,
      blog: blog_data,
      works: works_data,
    };
  },
  components: {
    mainHeader,
    top,
    news,
    about,
    partners,
    works,
    blog,
    contact,
    mainFooter,
  },
};
</script>

<style lang="scss">
</style>
