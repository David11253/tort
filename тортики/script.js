// Импортируем массив тортов из другого файла
import { torts } from "./know.js";

// Получаем элементы из HTML
const getCakeBtn = document.getElementById("getCakeBtn");
const cakeName = document.getElementById("cakeName");
const cakeIngredients = document.getElementById("cakeIngredients");
const cakeVideo = document.getElementById("cakeVideo");

// Функция для получения случайного торта
function getRandomCake() {
    // Выбираем случайный торт
    const randomIndex = Math.floor(Math.random() * torts.length);
    const selectedCake = torts[randomIndex];

    // Заполняем данные на странице
    cakeName.textContent = selectedCake.name;
    cakeIngredients.textContent = `Ингредиенты: ${selectedCake.ingest}`;
    cakeVideo.src = selectedCake.youtube_srs;
}

// Вешаем обработчик события на кнопку
getCakeBtn.addEventListener("click", getRandomCake);
