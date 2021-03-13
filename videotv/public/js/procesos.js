

const fichas = document.querySelector('.Contenedor-Fichas');

// LISTENERS
initApp();

document.addEventListener('load', initApp)

function initApp(){
    fichas.addEventListener('click', procesosFichas)
}

function procesosFichas(e){
    e.preventDefault();
    
    console.log(e);

    const operacion =  e.target.getAttribute('id');

    console.log(operacion);

       

}
