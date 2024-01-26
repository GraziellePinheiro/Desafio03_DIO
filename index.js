//DESAFIO, CALCULAR PARTIDAS RANKEADAS

function calcularPartidasRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}

let vitorias = 198;
let derrotas = 47;
let nivel = "";

let resultado = calcularPartidasRankeadas(vitorias, derrotas);

if (resultado < 10) {
  nivel = "Ferro";
} else if (resultado >= 11 && resultado <= 20) {
  nivel = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
  nivel = "Prata";
} else if (resultado >= 51 && resultado <= 80) {
  nivel = "Ouro";
} else if (resultado >= 81 && resultado <= 90) {
  nivel = "Diamante";
} else if (resultado >= 91 && resultado <= 100) {
  nivel = "Lendário";
} else if (resultado >= 101) {
  nivel = "IMMORTAL";
} else {
  console.log("Inválido");
}

console.log(
  "O Heroi possui um saldo de " + resultado + " está no nivel " + nivel
);
