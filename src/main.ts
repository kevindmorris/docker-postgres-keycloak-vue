import { vueKeycloak } from "@josempgon/vue-keycloak";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

async function initKeycloak() {
  const app = createApp(App);

  await vueKeycloak.install(app, {
    config: keycloakConfig,
    initOptions: {
      onLoad: "check-sso",
    },
  });

  app.mount("#app");
}

initKeycloak();
