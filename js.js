/* Это объявление переменной, мы наши кнопку по тегу */
var button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Деньги это не главное')
})
document.addEventListener('DOMContentLoaded', function () {
    var contactsLink = document.querySelector('.show-contacts');
    var contactsPopup = document.querySelector('.contacts-popup');

    // Переключение видимости блока при клике на ссылку
    contactsLink.addEventListener('click', function () {
        contactsPopup.style.display = (contactsPopup.style.display === 'block') ? 'none' : 'block';
    });

    // Закрытие блока при клике в любом другом месте страницы
    document.addEventListener('click', function (event) {
        if (event.target !== contactsLink) {
            contactsPopup.style.display = 'none';
        }
    });

    // Отменять закрытие блока при клике на сам блок
    contactsPopup.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Получаем контейнер для пузырьков
    var bubbleContainer = document.querySelector('.animated-background');

    // Генерируем случайное количество пузырьков
    for (var i = 0; i < 20; i++) {
        createBubble();
    }

    // Функция для создания пузырьков
    function createBubble() {
        var bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Устанавливаем случайные координаты и размеры пузырька
        var randomX = Math.random() * window.innerWidth;
        var randomY = Math.random() * window.innerHeight;
        var randomSize = Math.random() * 10 + 10; // Размер от 10px до 20px

        bubble.style.left = randomX + 'px';
        bubble.style.top = randomY + 'px';
        bubble.style.width = randomSize + 'px';
        bubble.style.height = randomSize + 'px';

        // Добавляем пузырок в контейнер
        bubbleContainer.appendChild(bubble);
    }
});


