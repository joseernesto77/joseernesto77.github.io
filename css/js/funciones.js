console.log("Se accedio a las funciones"); //Para verificar por consola si se accedio a las funciones

function goFace() {
    window.open("https://www.facebook.com", '_blank');
    console.log("Si anda Face"); //Para verificar por consola si se accedio bien
};

function goInsta() {
    window.open("https://www.instagram.com", '_blank');
    console.log("Si anda Insta"); //Para verificar por consola si se accedio bien
}

document.getElementById('MasInfo').addEventListener('click', function(){
    console.log('Se muestra info'); //Para verificar por consola si se accedio a la funcion
    document.getElementById('MasInfo').innerHTML="Actualmente buscando una empresa que pueda ofrecer un puesto de tiempo completo. Durante el último año, he acumulado experiencia en el desarrollo de múltiples competencias, como la atención al cliente, la capacidad de trabajar en equipo y las habilidades de comunicación. Por ahora, estoy en búsqueda de trabajar tiempo completo para una organización que pueda ofrecer oportunidades para desarrollar habilidades de gestión.";
})

document.getElementById('cartasRec').addEventListener('click', function(){
    console.log('Se muestra cartas de recomendacion');
    document.getElementById('cartasRec').innerHTML="Abierto en otra pagina (Recomendaciones)";
    window.open("cartaRecomendacion.html");

})
