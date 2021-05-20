<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg fixed-top bg-success">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Educación Continua | FIME</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Inicio</router-link>
            <router-link class="nav-link" to="/programas">Programas</router-link>
          </div>
        </div>
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
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #82ebbf;
}
</style>
