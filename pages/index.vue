<template>
  <div>
    <div v-for="elem in item" :key="elem.id"> 
      <example :news="elem" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import example from "@/components/example.vue";
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
    example
  },
}
</script>

<style>

</style>
