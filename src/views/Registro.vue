<template>
  <div class="container mc">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-8 px-4">
        <h1 class="title">Registro al programa</h1>
        <h4 class="subtitulo">"Calidad Total y Mejora Continua"</h4>
        <br />
        <div>
          <label>
            <p>Nombre completo</p>
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
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
            class="form-control"
            required
          /><br />

          <center><a href="" class="btn mt-3 mb-5">Registrarse al programa</a></center>

        </div>
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
input[type=number] {
  -moz-appearance: textfield;
}
</style>

<script>
export default {
  setup() {},
};
</script>