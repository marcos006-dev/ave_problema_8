'use strict';

const cantidadImagenes = document.getElementById('cantidadImagenes');
const resultImagenes = document.getElementById('resultImagenes');
const cargarImagenes = document.getElementById('cargarImagenes');

document.addEventListener('DOMContentLoaded', function () {
  cargarImagenes.addEventListener('click', (e) => {
    if (parseInt(cantidadImagenes.value) > 15) {
      alert('EL numero maximo de imagenes a ingresar es de 15');
      return;
    }

    armarTabla(cantidadImagenes.value);
  });
});

const armarTabla = (cantidadImagenes) => {
  let listaImagenes = '';

  for (let i = 1; i <= cantidadImagenes; i++) {
    listaImagenes += `
    <div class="col-1">
    <h6 class="text-center">${i}</h6>
    <img src="https://midu.dev/images/wallpapers/javascript-small-vertical-4k.png" class="img-fluid" />
    </div>
    `;
  }

  resultImagenes.innerHTML = listaImagenes;
};
