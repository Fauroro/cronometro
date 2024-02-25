debugger
const botonInicio = document.getElementById('boton-inicio');
const botonReinicio = document.getElementById('boton-reinicio');
const cronometro = document.getElementById('cronometro')

let [horas,minutos,segundos] = [0,0,0];

let tiempoTranscurrido;
let estado = 'pausa';

const cronometroAndando = () =>{
  debugger
  segundos++;
  if (segundos===60) {
    segundos = 0;
    minutos++;

    if (minutos===60) {
      minutos=0;
      horas++;      
    }
  }

  const formatoSegundos = formato(segundos);
  const formatoMinutos = formato(minutos);
  const formatoHoras = formato(horas);

  cronometro.innerText = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

debugger
const formato = (unidad) => unidad < 10 ? '0' + unidad : unidad;

botonInicio.addEventListener('click',function() {
  if (estado==='pausa') {
    tiempoTranscurrido = window.setInterval(cronometroAndando,1000);
    botonInicio.innerText = 'PAUSAR';
    botonInicio.classList.remove('inicio');
    botonInicio.classList.add('pausa');
    estado = 'activo';
  } else{
    window.clearInterval(tiempoTranscurrido);
    botonInicio.innerText = 'INICIAR';
    botonInicio.classList.remove('pausa');
    botonInicio.classList.add('inicio');
    estado = 'pausa'
  }
});