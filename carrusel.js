const carrusel = document.querySelector(".cont-carrusel"),
firstImg = carrusel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".iconos-carrusel");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;



const showHideIcons =() => {
    //Mostrar y esconder íconos dependiendo del valor izquierdo del scroll
    let scrollWidth = carrusel.scrollWidth - carrusel.clientWidth; //Obteniendo el width maximo del scroll
    arrowIcons[0].style.display = carrusel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carrusel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 6; //Obteniendo el width de la primera imagen y añadiendo un margen de 6 de valor
        //Si el icono clickeado es el izquierdo, se reduce el width con el valor del scroll left del carrusel sino, se añade
        carrusel.scrollLeft += icon.id == "izquierda" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); //Llamando evento "showHideIcons" después de 60 milisegs

    });
});

const autoSlide = () => {
    //Si ya no hay imagenes para scrollear entonces el carrusel regresa desde ahí
    if(carrusel.scrollLeft == (carrusel.scrollWidth - carrusel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff) //Haciendo el valor de positionDiff positivo
    let firstImgWidth = firstImg.clientWidth + 6;
    //Obteniendo la diferencia de valor que se necesita por añadir o reducir de la izquierda del carrusel para llevar a la imagen del medio al centro
    let valDifference = firstImgWidth - positionDiff; 

    if(carrusel.scrollLeft > prevScrollLeft) { //Si el usuario hace scroll a la derecha
        return carrusel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    //Si el usuario hace scroll a la izquierda
    carrusel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;;
}

const dragStart = (e) => {

    //Actualizando el valor de las variables globales en evento "mousedown"
    isDragStart = true;
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carrusel.scrollLeft;
}

const dragging = (e) => {
    //Scroll del carrusel a la izquierda de acuerdo con el apuntador del mouse    
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carrusel.classList.add("dragging");
    positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;
    carrusel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carrusel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carrusel.addEventListener("mousedown", dragStart);
carrusel.addEventListener("touchstart", dragStart);

carrusel.addEventListener("mousemove", dragging);
carrusel.addEventListener("touchmove", dragging);


carrusel.addEventListener("mouseup", dragStop);
carrusel.addEventListener("mouseleave", dragStop);
carrusel.addEventListener("touchend", dragStop);