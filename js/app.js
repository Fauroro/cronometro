// LLamado de elementos del DOM por ID
const botonInicio = document.getElementById('boton-inicio');
const botonReinicio = document.getElementById('boton-reinicio');
const cronometro = document.getElementById('cronometro')

// Definicion de variables para el cronometro
let [horas,minutos,segundos] = [0,0,0];

// estado e intervalo del tiempo transcurrido del cronometro
let tiempoTranscurrido;
let estado = 'pausa';

// funcion que denota la logica del funcionamiento del cronometro; tambien actualiza el texto del cronometro en el  HTML
// 1. se valida que trancurrieron 60 segundos para agregar un minuto y reiniciar el contador de segundos
// 2. se valida que trancurrieron 60 minutos para agregar una hora y reiniciar el contador de minutos
const cronometroAndando = () =>{
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

// Funcion encargada de asignar el formato agregando un 0 antes del numero si se cuenta solo con un digito en el contador
const formato = (unidad) => unidad < 10 ? '0' + unidad : unidad;

// Funcion asociada al evento click con el boton de inicio que inicia o pausa el cronometro segun su estado actual
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

// Funcion asociada el evento click con el boton de reiniciar que reinicia el formato, valores y estado del cronometro
botonReinicio.addEventListener('click',function(){
  window.clearInterval(tiempoTranscurrido);
  [horas,minutos,segundos] = [0,0,0];
  cronometro.innerText = '00:00:00';
  botonInicio.innerText = 'INICIAR';
  botonInicio.classList.remove('pausa');
  botonInicio.classList.add('inicio');
  estado = 'pausa'
});