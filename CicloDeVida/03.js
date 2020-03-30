const app = new Vue({
  el: "#app",
  data() {
    return {
      mensaje: "Hola soy un ciclo de vida"
    };
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("Before Updated");
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy() {
    console.log("Before Destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    destruir() {
      this.$destroy();
    }
  }
});
