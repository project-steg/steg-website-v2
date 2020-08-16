<template>
  <div>
    <top />
    <news />
    <about />
    <partners />
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
    const { data } = await axios.get(
      "https://steg.microcms.io/api/v1/news?limit=99",
      {
        headers: {
          "X-API-KEY": "15fcbc0e-ef8a-4e6f-8111-0811e534fe5d"
        }
      }
    );
    return {
      item: data.contents
    };
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
