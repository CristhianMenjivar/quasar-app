<template>
  <q-page class="flex flex-center">
    <h1>Typography</h1>

    <q-btn
      @click="toggleSideMenu"
      color="primary"
      :label="isSideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
      class="q-mt-md"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUi from "../composables/useUi";

export default defineComponent({
  name: "Typography",
  setup() {
    const { isSideMenuOpen, toggleSideMenu } = useUi();

    return { toggleSideMenu, isSideMenuOpen };
  },
});
</script>
