// блок элемент
let area = document.getElementById('area');
// теперь id
let cell = document.getElementsByClassName('cell');

// выиграшные положения
let player = "x";
let winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

// нашей переменной let cell присваеваем класс создаем через цикл
// класс let cell выступает в качестве ячейки нашей клетки
for(let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>"
}

//  с помощью цикла каждой нашей ячейке добавляем событие клика после нажатия которого будет срабатывать функция cell-click 
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);

}
//  в нажатой ячейке нам нужно определить занята ячейка или нет. Если не занята то в эту ячейку записываем текущего игрока.

function cellClick() {
    //    ячейка
    
    let data = [];

    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert("ячейка занята");
        return
    }
    
    // если в этой ячейке стоит позиция текущего игрока, то в массив дата добавляем эти данные

    for (let i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    
    
   



    //  после каждого хода нужно проверять  воспадают ли текущие положения игрока с выиграшными положениями.

    if (checkWin(data)) {
        alert("Выиграл: " + player);
    } else {
        let draw = true;
        for (let i in cell) {
            if (cell[i].innerHTML == '') draw = false;
        }
        if (draw) {
            
            restart("ничья");
        }
    }
// после каждого хода меняем игрока и через консоль выводим массив дата. Через каждый ход игрок меняется и каждый ход записсывается
    
    player = player == "x" ? "o" : "x";
}
function checkWin(data) {
    for (let i in winIndex) {
        let win = true;
        for (let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = data.indexOf(id);
            
            if (win == -1) {
                win = false
                
            }
        }

        if (win) return true;
    }
    return false;
}