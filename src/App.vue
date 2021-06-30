<template>
  <div id="app">
   
   <BookListComp></BookListComp>
  </div>
</template>

<script>
import BookListComp from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    BookListComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
