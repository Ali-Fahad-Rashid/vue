
<template>
<div class="container ">
  <div class="row"> 
  <div class="col s7 push-s2"> 
  <form @submit.prevent="handleSubmit">
      <label for="User Name">User Name:</label>
      <input type="text" id="title" name="username"  v-model="username" required>
      <label for="User Email">User Email:</label>
      <input type="email" id="snippet" name="email"  v-model="email" required>
      <label for="title">Password:</label>
      <input id="title" type="password" name="password"  v-model="password" required>
      <label for="title">Confirm:</label>
      <input id="title" type="password" name="confirm_pass"  v-model="confirm_pass" required>
            <br><br>
<p>{{error}}</p>


      <button type="submit">Register</button>

  </form>
     </div></div></div>

</template>

<script>
import axios from 'axios'

export default {
  
  data() {
    return {
        username: '',
        email: '',
        password: '',
        confirm_pass:'',
        error:''
    }
  },
  methods: {

      

    handleSubmit() {
      if(this.password != this.confirm_pass){
      this.error="password are not the same"      }
      else {
     let user = {
        username: this.username,
        email: this.email,
        password: this.password      }
     axios.post('http://localhost:3100/api/register',user
      ).then(() => {
        this.$router.push('/login');
      }).catch((err) =>{
      console.log(err)
      this.error='username exist'})
    }}
  }
}


</script>


