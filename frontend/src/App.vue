<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
       <div class="fluid-container">
            <router-link class="nav-link active" aria-current="page"  to="/">GIT MALL</router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
       </div>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav d-flex justify-content-end  ">
        <li class="nav-item  ">
          
<router-link class="nav-link active" aria-current="page"  to="/">Home</router-link> 

        </li>
        <li class="nav-item">
    
          <router-link class="nav-link" to="/login">Login</router-link> 
        </li>
        
        <li class="d-flex justify-content-end">
          <router-link class="nav-link" to="/register">SignUp</router-link> 
        </li>
      </ul>
     
    </div>
   </div>
    

</nav>
<!--end of navbar-->
  <router-view/>
</template>

<script>


export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
