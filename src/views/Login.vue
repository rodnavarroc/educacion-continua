<template>
  <div class="container mc">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-4 p-4">
        <h1 class="title">Administración</h1>

        <form @submit.prevent="userLogin">
        <br />
        <label for="user"><p>Correo electrónico</p></label>
        <input type="email" class="form-control" v-model="user.email" required />

        <br />
        <label for="user"><p>Contraseña</p></label>
        <input type="password" class="form-control" v-model="user.password" required />

        <center><button type="submit" class="btn w-50 mt-4">Iniciar Sesión</button></center>
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
</style>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {

      }
    };
  },
  setup() {

  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/administracion')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>