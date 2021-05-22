<template>
  <div class="home">
    <div class="container mc">
      <div class="row">
        <div class="col-12 col-md-6">
          <img src="../assets/exams.svg" class="main-img" />
        </div>
        <div class="col-12 col-md-6 px-4">
          <br />
          <h1 class="title">
            Programas diseñados para los ingenieros del futuro
          </h1>
          <p class="subtitle">
            <br />
            El departamento de Educación Continua de la FIME pone a tu
            disposición más de 10 programas especializados para cualquier área
            de la ingeniería.<br /><br />
            Encuentra tu curso ideal y aprende nuevas herramientas para
            desarrollar tu potencial dentro y fuera de la facultad.
            <ul class="pt-5">
              <li>Estudia desde casa</li>
              <li>Clases en fin de semana</li>
              <li>Descuento para estudiantes de Licenciatura en FIME</li>
            </ul>
            <br />
          </p>
          <router-link class="btn w-100 btn-lg" to="/programas">Consulta nuestros programas</router-link>
        </div>
      </div>
      <br /><br />
    </div>

    <img src="../assets/separator.svg" class="main-img"/>
    <div class="container-fluid bg-light second">
      <div class="container">
        <div class="row pt-5">
          <center>
            <h3 class="title">Contáctanos</h3>
            <br>
          </center>
          
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-4"><p class="footer-info"><center><b>Via telefónica</b><br> 81-8329-4020</center></p></div>
                <div class="col-12 col-md-4"><p class="footer-info"><center><b>Facebook</b><br><a class="link" href="http://www.facebook.com/educont.caadi" rel="noopener" target="_blank">Educación Continua y CAADI</a></center></p></div>
                <div class="col-12 col-md-4"><p class="footer-info"><center><b>Correo electrónico</b><br> <a class="link" href="mailto://educont.fime@uanl.mx">educont.fime@uanl.mx</a></center></p></div>
              </div>
            </div>          
        </div>
        <br><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.mc {
  padding-top: 15vh;
}

.main-img {
  width: 100%;
}

.title {
  color: #01765d;
  font-weight: 600;
}

.subtitle {
  font-size: 18px;
  font-weight: 400;
  color: #002f25;
  text-align: justify;
}

.btn {
  background-color: #b3dccc;
  color: #002f25;
  font-weight: 600;
}

.btn:hover {
  background-color: #1a846d;
  color: #e6f1ef;
}

ul {
  text-align: left;
}

.second {
  height: auto;
}

.link {
  text-decoration: none;
  color: inherit;
}

.footer-info {
  font-size: 21px;
  font-weight: 400;
  color: #002f25;
  text-align: justify;
}
</style>
