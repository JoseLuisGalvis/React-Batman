document.addEventListener("DOMContentLoaded", function () {
  // Inicializacion
  let estado_linterna = "apagado";

  // Capturo el sonido
  let sonido_batman = document.querySelector("#bati_encendido");
  let sonido_click = document.querySelector("#bati_click");

  // Capturar las cajas
  let batman = document.querySelector(".batman");
  let bati_boton = document.querySelector(".bati_boton");

  // Evento
  batman.addEventListener("click", controlar_linterna);

  // Función controlar linterna
  function controlar_linterna() {
    if (estado_linterna == "apagado") {
      estado_linterna = "encendido";
      sonido();
      batman.classList.add("batman_activo");
    } else {
      estado_linterna = "apagado";
      sonido();
      batman.classList.remove("batman_activo");
    }
  }

  // Función para manipular el sonido
  function sonido() {
    console.log(
      "Estado de sonido_batman:",
      sonido_batman.paused ? "Paused" : "Playing"
    );
    console.log("Reproduciendo sonido_click");

    if (sonido_batman.paused) {
      sonido_click.play();
      sonido_batman.play();
      console.log("Reproduciendo sonido_batman");
    } else {
      sonido_click.play();
      sonido_batman.pause();
      sonido_batman.currentTime = 0;
      console.log("Pausado sonido_batman");
    }
  }
});
