document.getElementById('cadastro-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome && email && senha) {
        alert(`Cadastro realizado com sucesso! Bem-vindo, ${nome}.`);
        // Aqui você pode integrar com Firebase para salvar no banco de dados
        // Exemplo: salvarDadosNoFirebase(nome, email, senha);
    } else {
        alert('Preencha todos os campos!');
    }
});

// Função fictícia de integração com Firebase (exemplo)
function salvarDadosNoFirebase(nome, email, senha) {
    // Código para salvar os dados no Firestore do Firebase
}
