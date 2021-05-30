<template>
  <div class="container mc">
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="bg-light">Programa</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Correo</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="registro in Registros" :key="registro.key">
              <td class="bg-light">{{ registro.course }}</td>
              <td>{{ registro.nombre }}</td>
              <td>{{ registro.edad }}</td>
              <td>{{ registro.correo }}</td>
              <td>{{ registro.telefono }}</td>
            </tr>
          </tbody>
        </table>
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
</style>

<script>
import firebase from "firebase";

export default {
  beforeRouteEnter(to, from, next) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      next("/login");
    }
  },
  data() {
    return {
      Registros: [],
    };
  },
  created() {
    firebase
      .firestore()
      .collection("registros")
      .onSnapshot((snapshotChange) => {
        this.Registros = [];
        snapshotChange.forEach((element) => {
          this.Registros.push({
            key: element.id,
            nombre: element.data().nombre,
            correo: element.data().correo,
            telefono: element.data().telefono,
            edad: element.data().edad,
            course: element.data().course,
          });
        });
      });
  },
};
</script>