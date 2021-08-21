<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

<div class="container">
   <form @submit.prevent="edit_post">

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

      <button class="btn waves-effect waves-light" type="submit" name="action">Update
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
  props:['id'],
data(){
return{

title:'' ,
content:''

}
},

methods:{

edit_post (){

let post = {
    title:this.title,
    content:this.content
}
    axios.post('http://localhost:3100/api/'+this.id,post).then(()=>{

        this.$router.push('/')
    })
}

},

created (){

    axios.get('http://localhost:3100/api/'+this.id).then(res =>{
this.title = res.data.title
this.content = res.data.content


})
}

}

/*   code: 'ERR_HTTP_HEADERS_SENT' */

</script>



