<script setup lang="ts">
import { useKeycloak } from "@josempgon/vue-keycloak";

const { keycloak, isAuthenticated, decodedToken } = useKeycloak();

const login = () => {
  keycloak.value?.login();
};

const logout = () => {
  keycloak.value?.logout();
};
</script>

<template>
  <div v-if="!keycloak?.didInitialize">
    <p>The authentication service is not connected.</p>
  </div>
  <div v-else>
    <div v-if="isAuthenticated">
      <p>Hello, {{ decodedToken?.given_name }}!</p>
      <button type="button" @click="logout">Sign Out</button>
    </div>
    <div v-else>
      <button @click="login">Sign In</button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
