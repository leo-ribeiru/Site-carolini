const todasAsFrases = [
  "Educar é semear com sabedoria e colher com paciência.",
  "Ensinar é um ato de amor, um exercício de fé na humanidade.",
  "Cada aluno é um universo inteiro esperando para ser descoberto.",
  "A educação transforma o mundo — uma mente por vez.",
  "O verdadeiro mestre não ensina, ele inspira.",
  "Com conhecimento, a gente abre portas que antes nem sabíamos que existiam.",
  "Ser professora é tocar vidas que nem sempre veremos florescer, mas que sempre florescerão.",
  "Quem ensina com o coração, nunca é esquecido.",
  "O maior presente que você pode dar a alguém é acreditar no seu potencial.",
  "A sala de aula é o lugar onde nascem sonhos e mudam destinos."
];

// Embaralha o array
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const frasesEscolhidas = embaralhar(todasAsFrases).slice(0, 3);
const lista = document.getElementById("lista-frases");

frasesEscolhidas.forEach(frase => {
  const li = document.createElement("li");
  li.textContent = frase;
  lista.appendChild(li);
});
