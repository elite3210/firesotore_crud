// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlcO8qpVT9-6RWlsSa3ajBCp438iizRmE",
    authDomain: "firestore-crud-3f3db.firebaseapp.com",
    projectId: "firestore-crud-3f3db",
    storageBucket: "firestore-crud-3f3db.appspot.com",
    messagingSenderId: "273782540106",
    appId: "1:273782540106:web:c31edc2b6f352217af63b3"
  };


const openModal = document.getElementById("openRegisterModal")
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

const showRegisterModal = ()=>{
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click',showRegisterModal)
closeModal.addEventListener('click',showRegisterModal)

registerForm.addEventListener('submit', (e)=>{})