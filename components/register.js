const frmRegister = document.getElementById('formulario');
const userName = document.getElementById('first-name');
const userLastName = document.getElementById('last-name');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// const userRegistered = [];
let id = 0;

export const userRegistered = JSON.parse(localStorage.getItem('user')) || [];



frmRegister.addEventListener("submit", registerUser);


// Registrar Usuario

export function registerUser(event){
    // Prevenir eventos precargados
    event.preventDefault();
    // Agregar un id
    // id++;
    // Crear un objeto con los datos del usuario
    const newUser = {
        id: new Date().getTime(),
        name: userName.value,
        lastName: userLastName.value,
        email: userEmail.value,
        password: userPassword.value,
        confirmPassword: confirmPassword.value,
        favoritos: [],
    };
    // Validar que los campos no esten vacios
    if (
        userName.value === '' || 
        userLastName.value === '' || 
        userEmail.value === '' || 
        userPassword.value === '' || 
        confirmPassword.value === ''
    ){
        console.log('Por favor, llene todos los campos');
        // alert('Por favor, llene todos los campos');
    }
    // Validar que las contraseñas sean iguales
    else if (userPassword.value !== confirmPassword.value){
        alert('Las contraseñas no coinciden');
    }
    // Validar que el usuario no este registrado
    else if (userRegistered.find(user => user.email === userEmail.value)){
        alert('El usuario ya esta registrado');
    }
    // Registrar usuario
    else {
        userRegistered.push(newUser);
        localStorage.setItem('user', JSON.stringify(userRegistered));
        alert('Usuario registrado correctamente');
        window.location.href = './Login.html';
   
    // Limpiar campos
        userName.value = '';
        userLastName.value = '';
        userEmail.value = '';
        userPassword.value = '';
        confirmPassword.value = '';
    }
}