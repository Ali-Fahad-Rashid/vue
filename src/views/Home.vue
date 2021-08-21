<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div v-if="posts.length">
<div v-for="post in posts" :key="post._id"> 
<router-link :to="{name:'details',params:{id:post._id}}">
<h2>{{ post.title }}</h2>
<h5>{{ post.content }}</h5>
</router-link> 

<br><br>
</div>
</div>

  </div>

</template>

<script>

import axios from 'axios'
export default {
  name: 'Home',
data(){
return{

  posts:[]
  
}
},



mounted () {

axios.get('http://localhost:3100/api').then(res =>{
this.posts = res.data

}).catch(err=>{console.log(err)})

}
}

/*   code: 'ERR_HTTP_HEADERS_SENT' */

</script>



