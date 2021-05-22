<template>
  <div class="about">
    <div class="container mc">
      <center><h1 class="title">Programas</h1></center>

      <div class="row">
        <div class="col-12">
          <br />
          <h3>Diplomados</h3>

          <br />

          <div class="row">
            <div
              v-for="item in diplomados"
              class="col-12 col-md-4"
              :key="item.id"
            >
              <div class="card p-2">
                <img :src="item.img" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{{ item.titulo }}</h5>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <br />
          <hr />
          <h3>Educación Técnica</h3>

          <br />

          <div class="row">
            <div
              v-for="item in tecnicas"
              class="col-12 col-md-4"
              :key="item.id"
            >
              <div class="card p-2">
                <img :src="item.img" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{{ item.titulo }}</h5>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Programas",
  components: {},
  data() {
    return {
      diplomados: [
        {
          titulo: "Automatización",
          img: require("../assets/robot.svg"),
        },
        {
          titulo: "Base de Datos",
          img: require("../assets/db.svg"),
        },
        {
          titulo: "Calidad Total y Mejora Continua",
          img: require("../assets/quality.svg"),
        },
        {
          titulo: "Herramientas de Diseño",
          img: require("../assets/design.svg"),
        },
        {
          titulo: "ITIL",
          img: require("../assets/itil.svg"),
        },
      ],
      tecnicas: [
        {
          titulo: "Automotriz y Diésel",
          img: require("../assets/automotriz.svg"),
        },
        {
          titulo: "Control Numerico Computarizado",
          img: require("../assets/cnc.svg"),
        },
        {
          titulo: "Refrigeración y Calefacción Industrial",
          img: require("../assets/refrigeracion.svg"),
        },
        {
          titulo: "Desarrollador de Software",
          img: require("../assets/dev.svg"),
        },
        {
          titulo: "Electricidad y Electrónica",
          img: require("../assets/electricidad.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.mc {
  padding-top: 12vh;
  color: #002f25;
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

.card {
  height: auto;
}

.card-footer {
  background-color: transparent;
}

.card img {
  width: 80%;
  align-self: center;
}
</style>