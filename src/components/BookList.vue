<template>
  <div id="bookList">
      <h2>Book List ({{ totalBookList }})</h2>

      <div>
          <span>Add New Book </span>
          <input type="text" v-model="bookName" @keyup.enter="addNewBook"> 
          <button id="btn_margin" @click="addNewBook">Add </button>
      </div>

      <div id="bookview">
          <ul>
              <li v-for="(book,index) in booklists" :key="index">{{book}} <button id="btn_margin" @click="removeBook(index)"> X </button> </li> 
          </ul>
      </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
                bookName:''
        }
    },
    computed:{
        booklists(){
            return this.$store.state.bookList
        },
        totalBookList(){
            return this.$store.getters.totalBook
        }
    },
    methods:{

        addNewBook(){
            this.$store.dispatch('addNewBook',this.bookName);
            this.bookName=""
        //    this.$store.commit('addNewBook',this.bookName)

        },
        removeBook(index){
             this.$store.commit('removeBook',index)
        }

    }

}
</script>

<style>
ul{
    list-style: none;
}
#btn_margin{
    margin-left: 15px;
}

</style>