function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da(o) ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da(o) ${player2}" />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay += 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("brazil", "16:00", "cameroon")
  ) +
  createCard(
    "28/11",
    "sexta",
    createGame("uruguay", "07:00", "ghana") +
      createGame("portugal", "13:00", "switzerland") +
      createGame("switzerland", "16:00", "cameroon")
  ) +
  createCard(
    "02/12",
    "segunda",
    createGame("uruguay", "16:00", "portugal") +
      createGame("portugal", "13:00", "brazil") +
      createGame("uruguay", "16:00", "brazil")
  )
