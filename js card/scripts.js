const button = document.getElementById('btn-resize');  // Получаем ссылку на кнопку
button.addEventListener('click', () => {  // Навешиваем обработчик на клик по кнопке
  const images = document.getElementsByTagName('img');  // Получаем все изображения на странице
  for (let i = 0; i < images.length; i++) {  // Проходим в цикле по всем изображениям
    images[i].style.width = '30%';  // Устанавливаем ширину изображения в 50%
    images[i].style.border = '2px solid blue';  // Добавляем рамку толщиной 2 пикселя синего цвета
    images[i].style.position = 'absolute';  // Устанавливаем позиционирование 'absolute'
    images[i].style.bottom = '0';  // Устанавливаем расположение в левом нижнем углу
    images[i].style.left = '0';  // Устанавливаем расположение в левом нижнем углу
  }
});