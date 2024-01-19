<template>
  <div>
    <h1>Search iTunes</h1>
    <br />
    
     <v-text-field
          v-model="search" autofocus
          @keyup.enter="searchData();"
          label="Enter Artists Name"
          append-icon="search"
       ></v-text-field>

  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
  }, 
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchData(event) {
      this.$router.push(`results/${this.search}`)
    }
  }
}
</script>

<style>
* {
  text-align: center;
}

h1 {
  padding: 20px
}
</style>