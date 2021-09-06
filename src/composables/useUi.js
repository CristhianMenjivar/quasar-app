import { computed } from "vue";
import { useStore } from "vuex";

const useUi = () => {
  const store = useStore();

  const toggleSideMenu = () => {
    store.commit("ui/toggleSideMenu");
  };

  return {
    // isSideMenuOpen: computed(() => store.getters["ui/isSideMenuOpen"]), // solo lectura
    // get y set escritura y lectura
    isSideMenuOpen: computed({
      get() {
        return store.getters["ui/isSideMenuOpen"];
      },
      set(val) {
        toggleSideMenu();
      },
    }),
    toggleSideMenu,
  };
};

export default useUi;
