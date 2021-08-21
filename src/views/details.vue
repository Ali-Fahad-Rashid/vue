<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">



<h5>{{ post.title }}</h5>
<h2>{{ post.content }}</h2>
<span class="m" @click="delete_post"><a class="m"  href="#">Delete</a></span>
<span class="m"><router-link class="m"  :to="{name:'edit_post',params:{id:id}}">Edit</router-link></span>


<br/><br/>

  </div>

</template>

<script>

import axios from 'axios'
export default {
  name: 'detail',
  props:['id'],
   created () {

axios.get('http://localhost:3100/api/'+this.id).then(res =>{
this.post = res.data

})

}, 

data(){
return{

  post:[]
  
}
},

methods:{

delete_post () {

axios.delete('http://localhost:3100/api/del/'+this.id).then(() =>{
this.$router.push('/')
})

}

},


}
</script>
