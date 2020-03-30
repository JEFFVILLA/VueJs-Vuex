const app = new Vue({
  el: "#app",
  data() {
    return {
      titulo: "Hola mundo",
      nombreNuevo: "",
      cantidadNueva: 0,
      total: 0,
      frutas: [
        { nombre: "Manzana", cantidad: 10 },
        { nombre: "Pera", cantidad: 0 },
        { nombre: "Platano", cantidad: 10 }
      ]
    };
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nombreNuevo,
        cantidad: this.cantidadNueva
      });
      (this.nombreNuevo = ""), (this.cantidadNueva = 0);
    }
  },
  computed: {
    sumarFrutas() {
      this.total = 0;
      for (fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }
      return this.total;
    }
  }
});
