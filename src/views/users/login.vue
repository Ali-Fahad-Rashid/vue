




<template>
<div class="container ">
  <div class="row"> 
  <div class="col s7 push-s2"> 
  <form @submit.prevent="login" enctype="multipart/form-data">
      <label for="User Name">User Name:</label>
      <input type="text" id="title" name="username"  v-model="username">

      <label for="title">Password:</label>
      <input id="title" type="password" name="password"  v-model="password">
      <br><br>
<p>{{error}}</p>
      <button class="btn pink">login</button>

  </form>
   </div></div></div>
</template>

<script>
import axios from 'axios'


export default {
  
  data() {
    return {
        username: '',
        password: '',
        error:""
    }
  },
  methods: {
    login() {
   let user = {
        username: this.username,
        password: this.password
      }
     axios.post('http://localhost:3100/api/login',user
      ).then(res => {
       // console.log(res)
        if(res.data.user.username){
        localStorage.setItem('user', res.data.user.username);
         window.location.href = '/'
             }
      }).catch(err => 
      {console.log(err)
      this.error= 'error with username or passowrd'
      }
      )
    }
  }
}
</script>
