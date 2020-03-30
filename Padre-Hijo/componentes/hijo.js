Vue.component("hijo", {
  template: `
    <div class="p-5 bg-success">
        <h2>Componente Hijo</h2>
        <h5>{{numero}}</h5>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
  props: ["numero"],
  data() {
    return {
      nombre: "Jeffri"
    };
  },
  mounted() {
    this.$emit("nombreHijo", this.nombre);
  }
});
