<template>
  <div class="Marco">
      <div class="Cabecera">
            <h2 class="Cabecera-Sobra-Texto">VIDEO TV</h2>
            <a id="myBtn" class="Link Cabecera-Sobra-Texto" href="#">Agregar video</a>
        </div>
        <div class="Contenedor-Fichas" id = "Fichas">
            <div class="Ficha" v-for='(video, index) in videos[0]' :key='index'>
                <div class="Ficha-Video">
                    <div>
                        <div class="Botones">
                            <a id="aEditar" class="btn" href="#" data-ide="${id}">Edit</a>
                            <a id="aEliminar" class="btn" href="#" data-idd="${id}">Delete</a>
                        </div>                        
                        <img class="Imagen-Video" src="../assets/fondo-video.jpg" alt="">
                        <div class="Ficha-Contenido">
                            <h3>{{ video.titulo }}</h3>
                            <p>{{ video.visitas }} visualizaciones</p>
                            <p class="Alineacion-Justificado">{{ video.descripcion }}</p>
                        </div>
                        
                    </div>
                    
                </div>            
            </div>
        </div>
        
        
  </div>


  
</template>

<script>
export default {
    data(){
    return {
      videos: []
    }
  },
    mounted() {
        // console.log('Hola');
        const data = fetch ('http://localhost:3000/videos')
            .then( info => {
                return info.json();
            })
            .then( video => {
                // console.log(video)
                this.videos.push(video)
            }) 
            .catch( error => {
                console.log(error)
            })       
    }
}

</script>

<style>

    .Cabecera {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        background: red;
        padding: 10px;        
    }    

    .Cabecera-Sobra-Texto {
        text-shadow: 1.5px 1.5px 1.5px;
    }
    .Cabecera h2 {
        margin: 0px;        
    }

    .Marco {
        border: 1px solid gray;
        
    }

    .Link {
        text-decoration: none;
        color: white;
    }

    .Contenedor-Fichas {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);        
        grid-gap: 10px;
        /* grid-auto-rows: minmax(100px, auto); */
    }

    .Ficha {
        text-align: left;
    }
    .Ficha-Video {
        width: 100%;
        border: 1px solid gray;        
    }

    .Ficha-Contenido {
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
    }

    .Ficha-Contenido h3 {
        margin: 0px;
    }

    .Ficha-Contenido p {
        margin: 8px 0px;
    }

    .Botones {
        display: flex;
        justify-content: space-between;
        /* position: absolute; */
    }

    .btn {
        padding: 5px;
        background: rgb(218, 218, 218);        
        border: 1px solid rgb(202, 202, 202);  
        border-radius: 5px;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        margin: 2px;
    }


    .Imagen-Video {
        width: 100%;
    }

/* MOBILE */
@media (max-width: 576px) {
    .Contenedor-Fichas {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);        
        grid-gap: 10px;
        /* grid-auto-rows: minmax(100px, auto); */
    }
}



</style>