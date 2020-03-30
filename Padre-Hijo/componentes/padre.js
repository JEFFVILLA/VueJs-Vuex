Vue.component("padre", {
  template: `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        <h3>{{nombrePadre}}</h3>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
  data() {
    return {
      numeroPadre: 0,
      nombrePadre: ""
    };
  }
});
