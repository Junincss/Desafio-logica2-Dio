let choice = "";
do {
  let userName = prompt("Digite seu nome de usuário:");
  let victory = parseInt(prompt("Insira o número de partidas Vitoriosas:"));
  let defeat = parseInt(prompt("Insira o número de partidas derrotadas:"));

  mainRanked();

  function mainRanked() {
    let result = calculateBaseRank(victory, defeat);
    let resultElo = eloRank(result);
    finalMessage(userName, result, resultElo);
  }

  function finalMessage(userName, result, resultElo) {
    alert(
      `O jogador ${userName} tem saldo de ${result} e seu elo ranqueado é  ${resultElo}`
    );
  }

  function calculateBaseRank(victory, defeat) {
    let balancerank = victory - defeat;
    console.log(balancerank);
    return balancerank;
  }
  function eloRank(result) {
    if (result >= -99999999999 && result <= 10) {
      elo = "Ferro";
    } else if (result >= 11 && result <= 20) {
      elo = "Bronze";
    } else if (result >= 21 && result <= 50) {
      elo = "Prata";
    } else if (result >= 51 && result <= 80) {
      elo = "Ouro";
    } else if (result >= 81 && result <= 90) {
      elo = "Diamante";
    } else if (result >= 91 && result <= 100) {
      elo = "Lendário";
    } else if (result >= 101) {
      elo = "Imortal";
    }

    return elo;
  }
  choice = prompt("Deseja verificar outro personagem?\n 1- Sim\n 2- Sair");
} while (choice !== "2");
