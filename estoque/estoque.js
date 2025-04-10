// 🔥 Firebase Config (troque pelas suas chaves reais!)
const firebaseConfig = {
 apiKey: "AIzaSyBWXYmxvuEkbPUGkds4tM6hsH_gzvJWt5Q",
 authDomain: "nexterp-134df.firebaseapp.com",
 projectId: "nexterp-134df",
 storageBucket: "nexterp-134df.firebasestorage.app",
 messagingSenderId: "931540639802",
 appId: "1:931540639802:web:e2af0c888b4d5daa869503"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referência da tabela e do form
const tabela = document.getElementById("tabelaEstoque");
const form = document.getElementById("formEstoque");

// 🧾 Função pra renderizar os produtos na tabela
db.collection("estoque").onSnapshot(snapshot => {
 tabela.innerHTML = ""; // limpa a tabela
 snapshot.forEach(doc => {
   const item = doc.data();
   tabela.innerHTML += `
     <tr class="border-b">
       <td class="px-4 py-2">${item.nome}</td>
       <td class="px-4 py-2">${item.sku}</td>
       <td class="px-4 py-2">${item.quantidade}</td>
       <td class="px-4 py-2">R$ ${item.preco.toFixed(2)}</td>
       <td class="px-4 py-2">
         <span class="status-${item.ativo ? 'ativo' : 'inativo'}">
           ${item.ativo ? 'Ativo' : 'Inativo'}
         </span>
       </td>
       <td class="px-4 py-2">
         <button class="btn-acao" onclick="deletarProduto('${doc.id}')">Excluir</button>
       </td>
     </tr>
   `;
 });
});

// ➕ Cadastro de novo produto
form.addEventListener("submit", async (e) => {
 e.preventDefault();

 const nome = document.getElementById("nome").value;
 const sku = document.getElementById("sku").value;
 const quantidade = parseInt(document.getElementById("quantidade").value);
 const preco = parseFloat(document.getElementById("preco").value);
 const ativo = document.getElementById("ativo").value === "true";

 try {
   await db.collection("estoque").add({
     nome,
     sku,
     quantidade,
     preco,
     ativo
   });
   form.reset(); // limpa o formulário
   alert("Produto cadastrado com sucesso!");
 } catch (error) {
   console.error("Erro ao cadastrar produto:", error);
   alert("Erro ao cadastrar. Veja o console.");
 }
});

// ❌ Excluir produto do estoque
async function deletarProduto(id) {
 const confirmar = confirm("Tem certeza que deseja excluir este produto?");
 if (!confirmar) return;

 try {
   await db.collection("estoque").doc(id).delete();
   alert("Produto excluído com sucesso!");
 } catch (error) {
   console.error("Erro ao excluir:", error);
   alert("Erro ao excluir. Veja o console.");
 }
}
