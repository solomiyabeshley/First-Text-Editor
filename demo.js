let textEditor = document.querySelector('#text-editor');
let button_edit = document.querySelector('.button-edit');
let add = document.querySelector('.button-add');
let styleBttn = document.querySelector('.button-style');
let buttonSave = document.querySelector('.button-save');
let styleEditor = document.querySelector('#styleEditor');
let input = document.querySelector('#model')
let chooseTableOrList = document.getElementById('chooseTableOrList');
let outputFont = document.querySelector('.output');
chooseTableOrList.style.display = 'none';

//з textarea id="text-editor" передаємо значення,які ввели в textarea id="model"
textEditor.style.display = 'none';
styleEditor.style.display = 'none';
//робимо так,що після змін в textarea наші зміни виводились
buttonSave.addEventListener('click', () => {
    input.innerHTML = textEditor.value;
});
// при кліку на add показуємо вікно з вибором таблиці або ліст
let stylesForTable = document.querySelector("#stylesForTable");
stylesForTable.style.display = 'none';

add.onclick = function addTableList() {
    input.style.display = 'none';
    button_edit.style.display = 'none';
    styleBttn.style.display = 'none';
    textEditor.style.display = 'none';
    outputFont.style.display = 'none';
    if (chooseTableOrList.style.display = 'none') {
        chooseTableOrList.style.display = 'block';
        chooseTableOrList.style.background = 'rgb(195, 204, 211)';
        chooseTableOrList.style.height = '600px';
        chooseTableOrList.style.width = '1200px';
        chooseTableOrList.style.marginLeft = '100px';
        chooseTableOrList.style.paddingLeft = '50px';
    }
}
let checkTable = document.querySelector('#checkTable');
let checkList = document.querySelector('#checkList');
let listStyle = document.querySelector('.listStyle');
listStyle.style.display = 'none';
let createTable = addEventListener("click", function () {
    stylesForTable.style.display = 'none';

    //перевіряємо чи активний radio ,якщо так,тоді показуємо tableStyle або listStyle
    if (checkTable.checked === true) {
        stylesForTable.style.display = 'block';
        listStyle.style.display = 'none';
    } else if (checkList.checked === true) {
        listStyle.style.display = 'block';
        stylesForTable.style.display = 'none';

    }
});
let createTableListCon = document.querySelector('.createTableListCon')

//створюємо таблицю
let createTableBtn = document.querySelector('.createTableBtn');
createTableBtn.addEventListener('click', 
() => {
    input.style.display = 'block';
    chooseTableOrList.style.display = 'none';
    button_edit.style.display = 'block';
    styleBttn.style.display = 'block';
    textEditor.style.display = 'block';
    listStyle.style.display = 'block';
    outputFont.style.display = 'block';
    let countTR = document.querySelector('.countTR').value;
    let countTD = document.querySelector('.countTD').value;
    let widthTD = document.querySelector('.widthTD').value;
    let heightTD = document.querySelector('.heightTD').value;
    let borderWidth = document.querySelector('.borderWidth').value;
    let selectTypeOfBorder = document.querySelector('#selectTypeOfBorder').value;
    let selectColorOfBorder = document.querySelector('#selectColorOfBorder').value;

    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (let i = 0; i < countTR; i++) {
        let tr = document.createElement('tr')
        tableBody.appendChild(tr)

        for (let j = 0; j < countTD; j++) {
            let td = document.createElement('td');
            td.style.width = widthTD + 'px';
            td.style.height = heightTD + 'px';
            td.style.borderWidth = borderWidth + 'px'
            td.style.borderStyle = selectTypeOfBorder;
            td.style.borderColor = selectColorOfBorder;
            td.appendChild(document.createTextNode('TD'))
            tr.appendChild(td)
        }
    }
    input.appendChild(table);
    alert("To change table data you can press 'edit' and then press 'save'!")
});
//створюємо список
let ButtonCreateList = document.querySelector('#ButtonCreateList');
ButtonCreateList.addEventListener('click', () => {
    input.style.display = 'block';
    button_edit.style.display = 'block';
    styleBttn.style.display = 'block';
    textEditor.style.display = 'block';
    outputFont.style.display = 'block';
    chooseTableOrList.style.display = 'none';
    listStyle.style.display = 'none';
    let countLIInp = document.querySelector('#liCount').value;
    let selectMark = document.querySelector('#selectMark').value;

    let list = document.createElement('list');
    let listBody = document.createElement('lbody');
    list.appendChild(listBody);

    for (let i = 0; i < countLIInp; i++) {
        let li = document.createElement('li');
        listBody.appendChild(li);
        li.appendChild(document.createTextNode("LI"));
        li.style.listStyleType = selectMark;
    }
    input.appendChild(list);
    alert("To change list data you can press 'edit' and then press 'save'!");

});
//видалення даних з list
function resetText() {
    document.getElementById("myForm").reset();
}
//робимо так,щоб при відкритті сайту ми не бачили textarea.Коли переходимо з textarea в style блокуємо блок textarea.Щоб відкрити textarea необхідно натиснути на кнопку edit 
button_edit.addEventListener('click', () => {
    textEditor.style.display = 'none';
    styleEditor.style.display = 'none';
    if (textEditor.style.display === 'none') {
        textEditor.style.display = 'block';
    } else if (styleEditor.style.display = 'block') {
        styleEditor.style.display === 'none';
    }
    else {
        textEditor.style.display = 'none';
    }
    textEditor.value = input.innerHTML;
});
//робимо так,щоб при відкритті сайту ми не бачили style.Коли переходимо з style в textarea блокуємо блок style.Щоб відкрити вікно з вибором стилів тексту  необхідно натиснути на кнопку style 
styleBttn.addEventListener('click', () => {
    textEditor.style.display = 'none';
    styleEditor.style.display = 'none';
    if (styleEditor.style.display === 'none') {
        styleEditor.style.display = 'block';
    } else if (output.style.display = 'block') {
        textEditor.style.display === 'none';
    } else {
        styleEditor.style.display = 'none';
    }
});


let tableBackground = document.querySelector('.tableBackground');
let tableText = document.querySelector('.tableText');
let colorOfText = document.querySelector('.colorOfText');
let backgroundColor = document.querySelector('.backgroundColor');
tableBackground.style.display = 'none';
tableText.style.display = 'none';
let q = document.querySelector('.q');
let w = document.querySelector('.w');
let e = document.querySelector('.e');
let r = document.querySelector('.r');
let t = document.querySelector('.t');
let y = document.querySelector('.y');
let u = document.querySelector('.u');
let i = document.querySelector('.i');
let o = document.querySelector('.o');
let a = document.querySelector('.a');
let s = document.querySelector('.s');
let d = document.querySelector('.d');
let f = document.querySelector('.f');
let g = document.querySelector('.g');
let h = document.querySelector('.h');
let j = document.querySelector('.j');
let k = document.querySelector('.k');
let l = document.querySelector('.l');
//робимо так,щоб при кліку на color of text нам показувалась табличка,в якій ми можемо вибрати колір тексту
colorOfText.addEventListener('click', () => {
    tableBackground.style.display = 'none';
    if (tableText.style.display === 'none') {
        tableText.style.display = 'block';
    } else {
        tableText.style.display = 'none';
    }
});
//робимо так,щоб при кліку на background color  нам показувалась табличка,в якій ми можемо вибрати колір фону
backgroundColor.addEventListener('click', () => {
    tableText.style.display = 'none';
    if (tableBackground.style.display === 'none') {
        tableBackground.style.display = 'block';
    } else {
        tableBackground.style.display = 'none';
    }
});
//задаємо кожному div таблички певний колір,на який будемо міняти колір фону
q.onclick = () => { input.style.background = 'rgb(20, 53, 53)'; }
w.onclick = () => { input.style.background = 'rgb(67, 54, 124)'; }
e.onclick = () => { input.style.background = 'rgb(75, 7, 7)'; }
r.onclick = () => { input.style.background = 'rgb(39, 14, 34)'; }
t.onclick = () => { input.style.background = 'rgb(150, 144, 65)'; }
y.onclick = () => { input.style.background = 'rgb(134, 4, 4)'; }
u.onclick = () => { input.style.background = 'rgb(177, 116, 3)'; }
i.onclick = () => { input.style.background = 'rgb(7, 58, 19)'; }
o.onclick = () => { input.style.background = 'rgb(26, 122, 122)'; }
//задаємо кожному div таблички певний колір,на який будемо міняти колір тексту
a.onclick = () => { input.style.color = 'rgb(182, 216, 203)'; }
s.onclick = () => { input.style.color = 'rgb(214, 185, 231)'; }
d.onclick = () => { input.style.color = 'rgb(255, 94, 134)'; }
f.onclick = () => { input.style.color = 'rgb(255, 167, 240)'; }
g.onclick = () => { input.style.color = 'rgb(235, 241, 150)'; }
h.onclick = () => { input.style.color = 'rgb(216, 182, 182)'; }
j.onclick = () => { input.style.color = 'rgb(255, 232, 98)'; }
k.onclick = () => { input.style.color = 'rgb(171, 255, 154)'; }
l.onclick = () => { input.style.color = 'rgb(134, 237, 255)'; }
//при активному checkbox id="textBold" наш стиль тексту буде жирним
function textBold() {
    input.style.fontWeight = "bolder";
    if (document.getElementById('textBold').checked == false) {
        input.style.fontWeight = "300";
    }
}
//при активному checkbox id="curveText" наш стиль тексту буде курсивним
function textCursive() {
    input.style.fontStyle = "italic";
    if (document.getElementById('curveText').checked == false) {
        input.style.fontStyle = "normal";
    }
}
//за допомогою input type="range"міняємо розмір шрифту в діапазоні від 10px до 20px
let fontSize = function () {
    let rng = document.getElementById('seek');
    rng.addEventListener("input",
        function () {
            input.style.fontSize = rng.value + 'px';
        });
}();
//за допомогою select>option змінюємо шрифт тексту,який ми ввели



