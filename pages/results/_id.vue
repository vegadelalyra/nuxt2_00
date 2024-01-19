<template>
  <div>
    <h1>Results for {{ $route.params.id }}!</h1>
    <div v-if="albumExists">
      <div v-for="(album, index) in albumData">
        <Card
          :title="album.collectionCensoredName"
          :image="album.artworkUrl100"
          :artistName="album.artistName"
          :url="album.artistViewUrl"
          :color="picker(index)"
        />
      </div>
    </div>
    <div v-else>
      <h1>Could Not Find album</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "~/components/Card.vue";
export default {
  asyncData({ params }) {
    const baseURL = (artist) =>
      `https://itunes.apple.com/search?term=${artist}&entity=album`;
    return axios.get(baseURL(params.id)).then((response) => {
      return { albumData: response.data.results };
    });
  },
  components: {
    Card
  },
  middleware: "search",
  methods: {
    picker(index) {
        return index % 2 === 0 ? 'pink' : 'blue'
    }
  },
  computed: {
    albumExists() {
      return this.albumData.length > 0;
    },
  },
};
</script>
