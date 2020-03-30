const app = new Vue({
  el: "#app",
  data() {
    return {
      fondo: "bg-warning",
      color: true,
      mensaje: "Hola Soy Jeffri",
      contador: 0
    };
  },
  computed: {
    invertido() {
      return this.mensaje
        .split("")
        .reverse()
        .join("");
    },
    colores() {
      return {
        "bg-success": this.contador < 10,
        "bg-warning": this.contador > 10 && this.contador < 20,
        "bg-danger": this.contador >= 20
      };
    }
  }
});
