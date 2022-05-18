
const formu = document.getElementById('formu');
const nombre_C = document.getElementById('nombre_C');
const nombre_U = document.getElementById('nombre_U');
const contraseña = document.getElementById('contraseña');
const confirmar_C = document.getElementById('confirmar_C');

const nombreRe =[];
let id= 0;

formu.addEventListener('submit', registroU);

function registroU(event) {
    event.preventDefault();
    id++;
    const usuario ={
        Uid : id,
        nombreCU : nombre_C.value,
        nombreUU : nombre_U.value,
        contraseñaU : contraseña.value,
        confirmarCU : confirmar_C.value
    };

    if (nombre_C.value === "" || nombre_U.value === "" || contraseña.value === "" || confirmar_C.value === "") {
        alert("Por favor llenar todos los campos");
    }
    else if (contraseña.value !== confirmar_C.value){
        alert("Por favor ingresar correctamente la contraseña");
    }
    else if(nombreRe.find(usuario => usuario.usuario === nombre_U.value)){
        alert("El usuario ya existe");
    }
    else{
        nombreRe.push(usuario);
        console.log(usuario);
        localStorage.setItem("usuario",JSON.stringify(nombreRe));
        alert("Registro éxitoso");
        nombre_C.value = "";
        nombre_U.value = "";
        contraseña.value = "";
        confirmar_C.value = "";
    }
}