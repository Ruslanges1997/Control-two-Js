let txtBlock = document.querySelector(`.txt-block`);          //Блок з тектсом
let btnBold = document.querySelector(`.btn-bold`);            //Кнопка для зміни жирності
let btnItalik = document.querySelector(`.btn-italic`);        //Кнопка для зміни курсивності
let btnUnderline = document.querySelector(`.btn-underline`);  //Кнопка для зміни підкресленості
let btnStrike = document.querySelector(`.btn-strike`);        //Кнопка для зміни перекресленість
let btnLeft = document.querySelector(`.btn-left`);            //Кнопка зміни положення текста(зліва)
let btnCenter = document.querySelector(`.btn-center`);        //Кнопкадля  зміни положення текста(центр)
let btnRight = document.querySelector(`.btn-right`);          //Кнопка для зміни положення текста(зправа)
let btnFont = document.querySelector(`.btn-font`);            //Кнопка для зміни  текста(Famaly)
let btnSize = document.querySelector(`.btn-size`);            //Кнопка для зміни текста(Розмір)

function fonGrey() {                                       // Функція міняє фон на сірий                                        
    document.body.style.background = `#ccc`
}
function fonWhite() {                                        // Функція міняє фон на білий                                
    document.body.style.background = `white`
}
// btn-unlock
btnBold.addEventListener(`click`, function () {  //Зміни жирності
    if (event.target.checked) {
        txtBlock.style.fontWeight = 'bold';
    }
    else {
        txtBlock.style.fontWeight = 'normal';
    }
});

btnItalik.addEventListener(`click`, function () {            //Зміни курсивності
    txtBlock.style.fontStyle = event.target.checked ? "italic" : 'normal';
});

btnUnderline.addEventListener(`click`, function () {            //Зміни підкресленості
    txtBlock.style.textDecoration = event.target.checked ? "underline  " : 'none';
});

btnStrike.addEventListener(`click`, function () {             //Зміна перекресленість
    txtBlock.style.textDecoration = event.target.checked ? "line-through  " : 'none';
});

btnLeft.addEventListener(`click`, function () {                //Зміни положення текста(зліва)
    txtBlock.style.textAlign = event.target.checked ? "left " : 'none';
});

btnCenter.addEventListener(`click`, function () {            //Зміни положення текста(центр)     
    txtBlock.style.textAlign = event.target.checked ? "center " : 'none';
});

btnRight.addEventListener('click', function () {              //Зміни положення текста(зправа)  
    txtBlock.style.textAlign = event.target.checked ? "right" : "none";
});

let selectFont = document.querySelector(`.selectFont`);         //Блок з font famaly
btnFont.addEventListener(`click`, function () {
    selectFont.style.display = event.target.checked ? 'block' : 'none'
});

function btnFontFamely(selectTag) {
    let listValue = selectTag.options[selectTag.selectedIndex].text;   //Зміна font famaly
    txtBlock.style.fontFamily = listValue;

    selectFont.style.display = `none`
};

let selectSize = document.querySelector(`.selectSize`);
btnSize.addEventListener(`click`, function () {               // Блок для зміни Розміру текста
    selectSize.style.display = event.target.checked ? 'block' : 'none'
});

function btnSizes(size) {                                      // Зміна текста(Розміру)
    let listVal = size.options[size.selectedIndex].text;
    txtBlock.style.fontSize = listVal;
    selectSize.style.display = `none`
};

let btnColor = document.getElementById('btn_color-txt');       // Кнопка відкриває модалку для зміни кольру текста
let modal = document.getElementById('myModal');                // Модальне вікно з кольорами
let span = document.querySelector('.close');                  // Закриває модалку для зміни кольру текста

btnColor.onclick = function () {                               // Відкриває  вікно з кольорами
    modal.style.display = ' block';
    fonGrey();
}

span.onclick = function () {                                    // Закриває  вікно з кольорами
    modal.style.display = 'none'
    fonWhite();
}

let colorsTxt = document.querySelectorAll('.colorsTxt');      // Доступ до кольорів і змінна кольору текста
for (let i = 0; i < colorsTxt.length; i++) {
    colorsTxt[i].onclick = function () {
        txtBlock.style.color = colorsTxt[i].style.background;
    }
}

let boxBg = document.querySelector(`.box-bg`)
let btnBg = document.querySelector(`.btn-bg`);                // Кнопка для модалки зі зміною background
btnBg.addEventListener('click', function () {
    boxBg.style.display = ' block';
    fonGrey();
});

let colorsBg = document.querySelectorAll('.colors-bg');      // Доступ до кольорів і зміни кольору background
for (let i = 0; i < colorsBg.length; i++) {
    colorsBg[i].onclick = function () {
        document.body.style.background = colorsBg[i].style.background;
    }
}

function openBg(evt, links) {                                       //функція переключає між видом зміни фону
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(links).style.display = "block";
    evt.currentTarget.className += " active";
}

let closeBg = document.querySelector(`.close-Bg`);                  // доступ до к-пки для закриття  Модалки колір bg
closeBg.addEventListener('click', function () {
    boxBg.style.display = 'none';
});

let imagesBg = document.querySelectorAll('.images-bg');       // Доступ до картинок для зміни кольору background
for (let i = 0; i < imagesBg.length; i++) {
    imagesBg[i].onclick = function () {
        document.body.style.background = imagesBg[i].style.background;
    }
}

let file = document.getElementById('customFile');               // Функція робить фоном вибраним файлом 
file.addEventListener("change", function () {
    let url = URL.createObjectURL(event.target.files[0]);
    document.body.style.background = `url(${url})`
});

let modalSign = document.querySelector(`.modal_sign`);        // доступ до модалки з Входом 
let btnZamok = document.querySelector(`.btn-zamok`);          // доступ до кнопки яка  відкриває модалку з Входом 
let btnSign = document.querySelector(`.btn-sign`);           //кнопка в середині модалки з входом
let login = document.querySelector(`.login`);
let password = document.querySelector(`.password`);
let checkTxt = document.querySelector(`.check`);              // підсказує що зробити  
let signLogPas = document.querySelector(`.sign-log-pas`);
btnZamok.addEventListener('click', function () {                // відкриває модалку для входу
    modalSign.style.display = 'block'
    fonGrey();
});


let redactWhite = document.querySelector(`.redact-white`);        //Зміна кольру кноки disabled
let btnRedact = document.querySelector(`.btn-redact`);            //.setAttribute("disabled", "disabled");    // доступ до кнопки з додатковим редактуванням
let levelOne = document.querySelector(`.level-one`);              // Доступ до першого болку
let levelTwo = document.querySelector(`.level-two`);             // Доступ до другого болку
let area = document.querySelector(`.area`);                      // Доступ до area

btnRedact.addEventListener('click', function () {               // функція приховує перший блок , показує  другий і переносить значення з першошо в другий
    area.value = txtBlock.innerHTML;
    levelOne.style.display = `none`
    levelTwo.style.display = `block`
});

let btnUnlocks = document.querySelector(`.btn-unlock`);                    // 
let modalOut = document.querySelector(`.modal_out`);
btnUnlocks.addEventListener("click", function () {
    btnRedact.style.background = ``
    modalOut.style.display = `block`
    fonGrey();
});

btnSign.addEventListener('click', function () {
    if (login.value == `admin` && password.value == `admin`) {
        modalSign.style.display = 'none';
        fonWhite();
        btnRedact.removeAttribute("disabled");
        btnZamok.style.display = "none"
        btnUnlocks.style.display = "block"
        redactWhite.style.background = `whitesmoke`              //Зміна кольру кноки disabled
    }
    else if (login.value !== `admin` && password.value !== `admin`) {
        checkTxt.style.display = 'block';
        password.classList.add('color-red');
        login.classList.add('color-red');
    }
});

let cancel = document.querySelector(`.cancel`);
cancel.addEventListener("click", function () {
    modalOut.style.display = `none`
    fonWhite();
});

let signOut = document.querySelector(`.sign_out`);
signOut.addEventListener("click", function () {
    modalOut.style.display = `none`
    btnUnlocks.style.display = "none"
    btnZamok.style.display = "block"
    redactWhite.style.background = `rgba(255, 255, 255, 0.4)`
    btnRedact.setAttribute("disabled", "disabled");
    fonWhite();
});


let btnSave = document.querySelector(`.btn-save`);      // функція приховує другий блок , показує  перший і переносить значення з  другого в перший
btnSave.addEventListener("click", function () {
    txtBlock.innerHTML = area.value;
    levelOne.style.display = `block`
    levelTwo.style.display = `none`
});

let btnCreateTable = document.querySelector(`.btn-create_table`); //
let btnResetTable = document.querySelector(`.btn-res_table `); //
//  створення Ul>li списків
let formListUl = document.querySelector(`.formListUl`);
let btnListUl = document.querySelector(`.btn-list_Ul`);
let resList = document.querySelector(`.res_list`);
btnListUl.addEventListener('click', function () {
    formListUl.style.display = 'block';
    // fonGrey();
});

let chooseUl = document.getElementById(`choose_ul`);
let closeListUl = document.querySelector(`.close_list-ul`);
closeListUl.addEventListener('click', function () {
    formListUl.style.display = 'none';
    fonWhite();
});

// formListUl
let countLiId = document.getElementById(`countLi_id`);
let typeListUl = document.getElementById(`type-list_ul`);

function resetList() {
    countLiId.value = "";
};

let validUl = document.querySelector(`.valid_ul`);
function createList() {
    let formList = document.forms["formCreateList"];
    let countLi = formList.countLi.value;
    let typeList = formList.typeList.value;
    if (countLiId.value == "") {
        validUl.style.display = 'block';
        countLiId.classList.add('color-red');
    } else {
        area.value += `<ul>`;
        for (let i = 1; i <= countLi; i++) {
            area.value += `<li style= "list-style:${typeList};">item ${i}</li>`
        }
        area.value += `</ul>`;
        validUl.style.display = 'none';
        countLiId.classList.remove('color-red');
        formList.classList.add('none');
    }
};

// OL>li
let btnListOl = document.querySelector(`.btn-list_Ol`);
let formListOl = document.querySelector(`.formListOl`);
let countLiIdOl = document.getElementById(`countLi_id-ol`);
let validOl = document.querySelector(`.valid_ol`)
btnListOl.addEventListener('click', function () {
    formListOl.style.display = 'block'
});

let countOlId = document.getElementById(`countOl_id`);
let closeOl = document.querySelector(`.close_ol`);

closeOl.addEventListener(`click`, function () {
    formListOl.style.display = `none`;
});

function createListOl() {
    let formListol = document.forms["formCreateListOl"];
    let countLiOl = formListol.countLiOl.value;
    let typeListOl = formListol.typeListOl.value;
    if (countLiIdOl.value == "") {
        validOl.style.display = 'block';
        countLiIdOl.classList.add('color-red');
    } else {
        area.value += `<ol>`;
        for (let i = 1; i <= countLiOl; i++) {
            area.value += `<li style= "list-style:${typeListOl};">item ${i}</li>`
        }
        area.value += `</ol>`;
        validOl.style.display = 'none';
        countLiIdOl.classList.remove('color-red');
        formListol.classList.add('none');
    }
};

function resetListOl() {
    countLiIdOl.value = "";
};

////  таблиця
let formCreateTable = document.querySelector(`.formCreateTable`);
let closeTable = document.querySelector(`.close_table`);
let btnTable = document.querySelector(`.btn-table`);
btnTable.addEventListener('click', function () {
    formCreateTable.style.display = `block`;
});

closeTable.addEventListener('click', function () {
    formCreateTable.style.display = `none`;
});

// створення таблиці
let validTb = document.querySelector(`.valid_tb`);
let countTrId = document.getElementById(`countTrId`);
let countTdID = document.getElementById(`countTdID`);
let ResetTable = document.querySelector(`.reset`);
let resWidtTd = document.querySelector(`.res_widt-td`);
let resTr = document.querySelector(`.res_Tr`);
let resTd = document.querySelector(`.res_Td`)
let resHeightTd = document.querySelector(`.res_height-td`);
let resWithBorderTd = document.querySelector(`.res_withBorder-td`);
function createTable() {
    let form = document.forms['formCreateTable'];
    let formborder = document.forms['border'];
    let countTr = form.countTr.value;
    let countTd = form.countTd.value;
    let countWidth = form.WidthOfTd.value;
    let countHeight = form.HeightOfTd.value;
    let countB = form.WidthOfBorder.value + "px";
    let countTypeOfBorder = formborder.typeOfBorder.value;
    let countcolorOfBorder = form.ColorOfBorder.value;
    if (resWidtTd.value == "") {
        resWidtTd.classList.add('color-red');
        validTb.style.display = 'block';
    }

    else {
        area.value += `<table border="1">`
        for (let i = 1; i <= countTr; i++) {
            area.value += `<tr>`
            for (let j = 1; j <= countTd; j++) {
                area.value += `<td style= "width:${countWidth}px; 
                        height:${countHeight}px;
                        border-width:${countB};
                        border-style:${countTypeOfBorder};                   
                        border-color:${countcolorOfBorder}"; >TD</td>`
            }
            area.value += `</tr>`
        }
        resWidtTd.classList.remove('color-red');
        area.value += `</table>`
        validTb.style.display = 'none';
    }
}

//Зачищення полів таблиці
ResetTable.addEventListener("click", function () { // очищення полів в таблиці
    resWidtTd.value = ""
    resTr.value = ""
    resTd.value = ""
    resHeightTd.value = ""
    resWithBorderTd.value = ""
});

