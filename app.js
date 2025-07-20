let dias=0;
let horas=0;
let minutos=0;
let segundos=0;
cargarSegundo();

//Definir y ejecutar segundos

function cargarSegundo(){
    let txtsegundos;

    if(segundos < 0){
        segundos =59;
    }

    //Mostrar segundos en pantalla
    if(segundos < 10){
        txtsegundos=`0${segundos}`;
    }else{
        txtsegundos=segundos;
    }
    document.getElementById('segundos').innerHTML=txtsegundos;
    segundos--;

    cargarminutos(segundos);
}


//Definir y ejecutar minuto
function cargarminutos(segundos){
    let txtminutos;

    if(segundos== -1 && minutos !== 0){
        setTimeout(() => {
           minutos--; 
        },500)
    }else if(segundos== -1 && minutos == 0){
        setTimeout(() => {
            minutos=59;
         },500)

    }

    //Mostrar minutos en pantalla
    if(minutos < 10){
        txtminutos= `0${minutos}`;

    }else{
        txtminutos=minutos;
    }
    document.getElementById('minutos').innerHTML=txtminutos;
    cargarhoras(segundos,minutos);

}

//Definir y ejecutar horas
function cargarhoras(segundos,minutos){
    let txthoras;

    if(segundos == -1 && minutos == 0 && horas !==0){
        setTimeout(() =>{
            horas--;

        },500)
    }else if(segundos == -1 && minutos == 0 && horas ==0){
        setTimeout(() =>{
            horas=23;

        },500)
    }

    //Mostrar horas en pantalla
    if(horas < 10){
        txthoras=`0${horas}`;
    }else{
        txthoras=horas;
    }

    document.getElementById('horas').innerHTML=txthoras;
    cargardias(segundos,minutos,horas);
   
}

//Definir y ejecutar dias
function cargardias(segundos,minutos,horas){
    let txtdias;

    if(segundos == -1 && minutos == 0 && horas == 0 && dias !== 0){
        setTimeout(() => {
            dias--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0 && dias == 0){
        setTimeout(() =>{
            dias=91;
        },500)
    }
      
    //Mostrar dias en pantalla
    if(dias < 10){
        txtdias=`0${dias}`;
    }else{
        txtdias=dias;
    }

    document.getElementById('dias').innerHTML=txtdias;

}

    //Ejecutar cada segundo
    setInterval(cargarSegundo,1000);

