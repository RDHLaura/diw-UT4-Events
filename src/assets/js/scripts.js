function fav(id){
    const myfav = document.getElementById(id);
    myfav.classList.toggle('fa-heart-active')
    
}


function desplegar_menu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('activo')
}

let modoclaroOn = false; //almacenar esta variable en local o en una cookie

function claro_oscuro(){
    document.body.classList.toggle('theme--light')
    if(document.body.classList.contains("theme--light")){
        let modoclaroOn = true; 
    }
   
}

function checkMode(){
    if(modoclaroOn){
        document.body.classList.add('theme--light')
    }
    console.log(modoclaroOn)
}