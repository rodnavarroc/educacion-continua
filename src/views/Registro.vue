<template>
  <div class="container mc">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-8 px-4">
        <h1 class="title">Registro al programa</h1>
        <h4 class="subtitulo">"{{ course }}"</h4>
        <br />
        <form @submit.prevent="onFormSubmit">
          <label>
            <p>Nombre completo</p>
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            v-model="data.nombre"
            class="form-control"
            required
          /><br />

          <label>
            <p>Edad</p>
          </label>
          <input
            type="number"
            name="edad"
            id="edad"
            v-model="data.edad"
            class="form-control"
            required
          /><br />

          <label>
            <p>Correo electrónico</p>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="data.correo"
            class="form-control"
            required
          /><br />

          <label>
            <p>Teléfono de contacto</p>
          </label>
          <input
            type="number"
            name="telefono"
            id="telefono"
            v-model="data.telefono"
            class="form-control"
            required
          /><br />

          <button type="submit" class="btn mt-3 mb-5 w-100">
            Registrarse al programa
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      course: '',
      data: {},
    };
  },
  created() {
    this.course = this.$route.params.course;
    this.data.course = this.course;
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      firebase
        .firestore()
        .collection("registros")
        .add(this.data)
        .then(() => {
          alert("Gracias por registrarte al programa '"+this.course+"'!");
          this.data.nombre = "";
          this.data.edad = "";
          this.data.correo = "";
          this.data.telefono = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>