<template>
<!--<router-link class="nav-link" to="/">Inicio</router-link>-->
  <div id="nav">
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
      <div class="container-fluid border-bottom pb-2">
        <a class="navbar-brand" href="#">Educación Continua | FIME</a>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Rubik;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

#nav a {
  text-decoration: none;
  color: #01765D;
  font-weight: 500;
}

.navbar {
  background-color: #fff;
}
</style>
