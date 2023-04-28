// блок элемент
let area = document.getElementById('area');
// теперь id
let cell = document.getElementsByClassName('cell');

// нашей переменной let cell присваеваем класс создаем через цикл
// класс let cell выступает в качестве ячейки нашей клетки
for(let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>"
}

//  с помощью цикла каждой нашей ячейке добавляем событие клика после нажатия которого будет срабатывать функция cell-click 
for (let i = 0; i < cell.length; i++) {
    cell[i]
}