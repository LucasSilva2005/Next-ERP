import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBWXYmxvuEkbPUGkds4tM6hsH_gzvJWt5Q',
    authDomain: 'nexterp-134df.firebaseapp.com',
    projectId: 'nexterp-134df',
    storageBucket: 'nexterp-134df.firebasestorage.app',
    messagingSenderId: '931540639802',
    appId: '1:931540639802:web:e2af0c888b4d5daa869503'
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Lógica de cadastro
document.getElementById('cadastro-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Criando o usuário no Firebase Authentication
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Usuário criado com sucesso
            const user = userCredential.user;
            console.log('Usuário cadastrado com sucesso:', user);
            
            // Exibir uma mensagem ou redirecionar o usuário
            alert('Usuário cadastrado com sucesso!');
            document.getElementById('cadastro-form').reset(); // Limpa o formulário
        })
        .catch((error) => {
            // Se houver algum erro (ex: email já em uso)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erro ao cadastrar:', errorCode, errorMessage);
            alert('Erro ao cadastrar usuário: ' + errorMessage);
        });
});
