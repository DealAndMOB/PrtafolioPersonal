const menu = document.getElementById('menu');
const btn_menu = document.getElementById('btn_menu');

const email = document.getElementById('correo');
const nombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

document.onclick = function(e){
    if(e.target.id !== "btn_menu" && e.target.id !== "menu"){
    menu.classList.remove('active');
    btn_menu.classList.remove('active');
    }
};

btn_menu.onclick = function(){
    btn_menu.classList.toggle('active');
    menu.classList.toggle('active');
};

thanks.onclick = function() {
    if (email.value.length <= 0 || nombre.value.length <= 0 || mensaje.value.length <= 0){
        swal({
            title: "Por favor",
            text: "Complete todos los datos",
            buttons: false,
            icon: 'error',
            timer: 2500,
        });
    }
    else if (!email.value.match(validRegex)){
        swal({
            title: "Por favor",
            text: "Complete todos los datos",
            buttons: false,
            icon: 'error',
            timer: 2500,
        });
    }
    else {
        swal({
            title: "¡Correo enviado con exito!",
            text: "Muchas gracias por comunicarse",
            buttons: false,
            icon: 'success',
            timer: 2500,
        });
    }
};

