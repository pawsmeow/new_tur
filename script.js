document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tournament-form");
    const submitButton = document.getElementById("submit-button");

    // Telegram Web App API
    const tg = window.Telegram.WebApp;
    tg.expand(); // Расширить приложение на весь экран

    submitButton.addEventListener("click", () => {
        const tournamentData = {
            gameid: document.getElementById("tournament_creator").value,
            nickname: document.getElementById("tournament_name").value,
            username: document.getElementById("tournament_about").value,
            web_app_type: "new_tur"
        };

        // Отправка данных боту
        tg.sendData(JSON.stringify(tournamentData)); // Отправляем данные WebAppData
        tg.close(); // Закрыть Web App после отправки
    });
});
