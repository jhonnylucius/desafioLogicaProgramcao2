function partidasRankeadas(vitorias, derrotas) {
    let nomeJogador = "Filipão"
    let saldo = vitorias - derrotas
    let rank

    if (saldo <= 10) {
        rank = "Ferro"
    } else if (saldo <= 20) {
        rank = "Bronze"
    } else if (saldo <= 50) {
        rank = "Prata"
    } else if (saldo <= 80) {
        rank = "Ouro"
    } else if (saldo <= 90) {
        rank = "Diamante"
    } else if (saldo <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }

    console.log(`O Herói ${nomeJogador} tem o saldo de ${saldo} e está no nível ${rank}`)
}


partidasRankeadas(300, 80)
partidasRankeadas(10, 5);
partidasRankeadas(20, 5);
partidasRankeadas(60, 20);
partidasRankeadas(100, 30);
partidasRankeadas(150, 65);
partidasRankeadas(200, 110);
partidasRankeadas(300, 80);