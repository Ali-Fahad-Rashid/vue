<template>
<div>   
  <div id="nav">
    <div v-if="user"> 

      <router-link to="/create">Create | </router-link> 
     <a >{{user}} | </a> 
     <a @click="logout">LogOut | </a>
</div>

<div v-else >

    <router-link to="/">Home | </router-link> 
    <router-link to="/about">About | </router-link> 
    <router-link :to="{name: 'login'}">Login | </router-link> 
     <router-link :to="{name: 'register'}">Register | </router-link> 
</div>

  </div>
  <router-view />
  </div>
</template>


<script>
export default {
data(){
  return {
user:localStorage.getItem('user')
  }
},

methods: {
    logout() {
        localStorage.removeItem('user');
         window.location.href = '/'

    }
}
}
</script>