document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tournament-form");
    const submitButton = document.getElementById("submit-button");

    // Telegram Web App API
    const tg = window.Telegram.WebApp;
    tg.expand(); // Расширить приложение на весь экран

    submitButton.addEventListener("click", () => {
        const tournamentData = {
            tournament_creator: parseInt(document.getElementById("tournament_creator").value),
            tournament_name: document.getElementById("tournament_name").value,
            tournament_about: document.getElementById("tournament_about").value,
            tournament_type: parseInt(document.getElementById("tournament_type").value),
            web_app_type: "new_tur"
        };

        // Отправка данных боту
        tg.sendData(JSON.stringify(tournamentData)); // Отправляем данные WebAppData
        tg.close(); // Закрыть Web App после отправки
    });
});
