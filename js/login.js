const login = document.getElementById('login');
const nombre = document.getElementById('nombreL');
const contraseña = document.getElementById('contraseñaL');

login.addEventListener('submit', ingresarU);

function ingresarU (event){
    event.preventDefault();
    const local = localStorage.getItem("usuario");    
    const validarU = JSON.parse(local);
    console.log("Este es el objeto: "+validarU);
    console.log("Este es el input: "+nombre.value);    
    if (nombre.value === "" || contraseña.value === ""){
        alert("Por favor llene todos los capos")
    }
    else if (!validarU.find(usuario => usuario.nombreCU === nombre.value)){
        alert("El usuario no existe")
    }
    else if (validarU.find(usuario => usuario.nombreCU === nombre.value).contraseñaU !== contraseña.value){
        alert("La contraseña no coincide");
    }
    // else{
    //     alert("Usuario registrado con éxito");
    //     // window.location.href =""
    // }
}