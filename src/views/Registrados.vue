<template>
  <div class="container mc">test</div>
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
  setup() {},
};
</script>