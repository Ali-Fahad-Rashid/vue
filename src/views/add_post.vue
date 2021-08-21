<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

<div class="container">
   <form @submit.prevent="add_post">

    <div class="">
      <div class="input-field col s6">
        <i class="material-icons prefix">account_circle</i>
        <input id="icon_prefix" name="title" type="text" class="validate" v-model="title" required>
        <label for="icon_prefix"></label>
      </div><br><br>
      <div class="input-field col s6">
        <i class="material-icons prefix">mode_edit</i>
        <textarea id="textarea1" name="content" class="materialize-textarea" v-model="content"></textarea>

        <label for="icon_telephone"></label>
      </div><br><br>

      <button class="btn waves-effect waves-light" type="submit" name="action">Create
        <i class="material-icons right">send</i>
      </button>
    </div>
  </form>
</div>

  </div>

</template>

<script>

import axios from 'axios'
export default {
  name: 'add_post',
data(){
return{

title:'' ,
content:''

}
},

methods:{

add_post (){

let post = {
    title:this.title,
    content:this.content
}
    axios.post('http://localhost:3100/api',post).then(()=>{

        this.$router.push('/')
    })
}

}

}

/*   code: 'ERR_HTTP_HEADERS_SENT' */

</script>



