// Получаем элемент родительского контейнера матрицы по его идентификатору
const matrixContainer = document.getElementById('matrix');

// Создаем два вложенных цикла для генерации элементов матрицы
// Внешний цикл перебирает строки матрицы, внутренний - столбцы
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // Создаем элемент div для текущего элемента матрицы
        const matrixItem = document.createElement('div');
        // Добавляем класс для стилизации элемента
        matrixItem.classList.add('matrix__item');
        // Задаем уникальный идентификатор элемента на основе его позиции в матрице
        matrixItem.id = `item-${i}-${j}`;
        // Задаем случайный фоновый цвет для элемента
        matrixItem.style.backgroundColor = `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`;
        // Добавляем элемент в родительский контейнер матрицы
        matrixContainer.appendChild(matrixItem);
    }
}

// Функция для генерации случайного значения цвета в диапазоне от 0 до 255
function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}