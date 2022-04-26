// ОБЪЯВЛЕНИЕ КАМЕР

var CAM = new Object();

var CAM004 = new Object();
CAM004.sizeX = 720;
CAM004.sizeY = 540;
CAM004.pixSize = 6.9;

var CAM016 = new Object();
CAM016.sizeX = 1440;
CAM016.sizeY = 1080;
CAM016.pixSize = 3.45;

var CAM032 = new Object();
CAM032.sizeX = 2048;
CAM032.sizeY = 1536;
CAM032.pixSize = 3.45;

var CAM050 = new Object();
CAM050.sizeX = 2448;
CAM050.sizeY = 2048;
CAM050.pixSize = 3.45;

var CAM063 = new Object();
CAM063.sizeX = 3072;
CAM063.sizeY = 2048;
CAM063.pixSize = 2.4;

var CAM120 = new Object();
CAM120.sizeX = 4000;
CAM120.sizeY = 3000;
CAM120.pixSize = 1.85;


//var FOV_X = document.getElementById("lenght").value;
var FOV_Y004 = 0;
var FOV_Y016 = 0;
var FOV_Y032 = 0;
var FOV_Y050 = 0;
var FOV_Y063 = 0;
var FOV_Y120 = 0;
var AA004 = 0;
var AA016 = 0;
var AA032 = 0;
var AA050 = 0;
var AA063 = 0;
var AA120 = 0;
let FOV_Y1 = 0;
let a = 0;
var resolCountPerElem004 = 0;
var resolCountPerElem016 = 0;
var resolCountPerElem032 = 0;
var resolCountPerElem050 = 0;
var resolCountPerElem063 = 0;
var resolCountPerElem120 = 0;
var arrResPxPerElem = []; // массив значений количества пикселей на 1 элемент кода
//массив FOV-ов итоговых. Писать значения из функций ниже и обращаться к свойствам в cameraSelection
var attention = '';
var arrFOVsGroup = [{
        fov_xToResult: 0,
        fov_yToResult: 0,
        WDToResult: 0
    },
    {
        fov_xToResult: 0,
        fov_yToResult: 0,
        WDToResult: 0
    },
    {
        fov_xToResult: 0,
        fov_yToResult: 0,
        WDToResult: 0
    },
    {
        fov_xToResult: 0,
        fov_yToResult: 0,
        WDToResult: 0
    },
    {
        fov_xToResult: 0,
        fov_yToResult: 0,
        WDToResult: 0
    },
    {
        fov_xToResult: 0,
        fov_yToResult: 0,
        WDToResult: 0
    },
];
// функция замены симовлов запятой на точку
function replace(element) {
    // set temp value
    var tmp = element.value;
    // replace everything that's not a number or comma or decimal
    tmp = tmp.replace(/[^0-9,.]/g, "");
    // replace commas with decimal
    tmp = tmp.replace(/,/, ".");
    // set element value to new value
    element.value = tmp;
  }
function calculateWD004() {
    Object.assign(CAM, CAM004);
    var FOV_X = document.getElementById("lenght").value;
    FOV_Y1 = Number(document.getElementById("width").value);
    heightInput = Number(document.getElementById("height").value);
    var x1 = CAM.sizeX;
    var y1 = CAM.sizeY;
    var pix = CAM.pixSize;
    var brennf = document.getElementById("lense").value;
    var rowsCount = document.getElementById("rows").value;
    var resolPxPerMM004 = 0;


    // var FOV_Y = 0;
    // var AA = 0;

    if ((x1 > 0) && (y1 > 0) && (pix > 0) && (brennf > 0) && (FOV_X > 0)) {
        diagonalPix = Math.sqrt((x1 * x1) + (y1 * y1));

        //diagonalPix=diagonalPix*100;
        diagonalPix = Math.round(diagonalPix);
        //diagonalPix=diagonalPix/100;

        x_mm = (x1 * pix) / 1000;
        y_mm = (y1 * pix) / 1000;
        diagonal_mm = Math.sqrt((x1 * x1) + (y1 * y1)) * pix / 1000;


        AA004 = brennf * (FOV_X / x_mm + 1);

        x_mm = x_mm * 100;
        x_mm = Math.round(x_mm);
        x_mm = x_mm / 100;


        y_mm = y_mm * 100;
        y_mm = Math.round(y_mm);
        y_mm = y_mm / 100;

        ratio = (x1 / y1);

        FOV_Y004 = FOV_X / ratio;

        FOV_Diag004 = Math.sqrt((FOV_X * FOV_X) + (FOV_Y004 * FOV_Y004));

        FOV_Y004 = FOV_Y004 * 100;
        FOV_Y004 = Math.round(FOV_Y004);
        FOV_Y004 = FOV_Y004 / 100;

        AA004 = AA004 * 100;
        AA004 = Math.round(AA004);
        AA004 = AA004 / 100;

        // расчет FOV для определенного количества слоев

        FOV_X_group = ((AA004 + heightInput * rowsCount) * FOV_X) / AA004;
        FOV_X_group = FOV_X_group * 100;
        FOV_X_group = Math.round(FOV_X_group);
        FOV_X_group = FOV_X_group / 100;


        FOV_Y_group = FOV_X_group / ratio;
        FOV_Y_group = FOV_Y_group * 100;
        FOV_Y_group = Math.round(FOV_Y_group);
        FOV_Y_group = FOV_Y_group / 100;

        arrFOVsGroup[0].WDToResult = AA004;
        arrFOVsGroup[0].fov_xToResult = FOV_X_group; // передача значенния X в массив значений полей зрения для передачи в массив выдачи результатов по камерам
        arrFOVsGroup[0].fov_yToResult = FOV_Y_group; // передача значенния Y в массив значений полей зрения для передачи в массив выдачи результатов по камерам

        // Расчет разрешения pix на мм

        resolPxPerMM004 = x1 / FOV_X_group;
        resolPxPerMM004 = resolPxPerMM004 * 100;
        resolPxPerMM004 = Math.round(resolPxPerMM004);
        resolPxPerMM004 = resolPxPerMM004 / 100;

        resolCountPerElem004 = resolPxPerMM004;



        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem004 = resolCountPerElem004 * t;
        resolCountPerElem004 = resolCountPerElem004 * 100;
        resolCountPerElem004 = Math.round(resolCountPerElem004);
        resolCountPerElem004 = resolCountPerElem004 / 100;

        // передача значений в массив для последующей выборки

        arrResPxPerElem[0] = resolCountPerElem004;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;
        // document.getElementById("WD004").innerHTML = ' WD004= ' + AA004 + ' | FOV_X= ' + FOV_X + ' | Counted FOV_Y = ' + FOV_Y004 + ' <br>  ' + ' | FOV_X_group= ' + FOV_X_group + ' | FOV_Y_group= ' + FOV_Y_group + " | Resolution (px per mm) = " + resolPxPerMM004;



    }


}

function calculateWD016() {
    Object.assign(CAM, CAM016);
    var FOV_X = document.getElementById("lenght").value;
    FOV_Y1 = Number(document.getElementById("width").value);
    heightInput = Number(document.getElementById("height").value);
    var x1 = CAM.sizeX;
    var y1 = CAM.sizeY;
    var pix = CAM.pixSize;
    var brennf = document.getElementById("lense").value;
    var rowsCount = document.getElementById("rows").value;
    var resolPxPerMM016 = 0;


    // var FOV_Y = 0;
    // var AA = 0;

    if ((x1 > 0) && (y1 > 0) && (pix > 0) && (brennf > 0) && (FOV_X > 0)) {
        diagonalPix = Math.sqrt((x1 * x1) + (y1 * y1));

        //diagonalPix=diagonalPix*100;
        diagonalPix = Math.round(diagonalPix);
        //diagonalPix=diagonalPix/100;

        x_mm = (x1 * pix) / 1000;
        y_mm = (y1 * pix) / 1000;
        diagonal_mm = Math.sqrt((x1 * x1) + (y1 * y1)) * pix / 1000;

        AA016 = brennf * (FOV_X / x_mm + 1);

        x_mm = x_mm * 100;
        x_mm = Math.round(x_mm);
        x_mm = x_mm / 100;


        y_mm = y_mm * 100;
        y_mm = Math.round(y_mm);
        y_mm = y_mm / 100;

        ratio = (x1 / y1);

        FOV_Y016 = FOV_X / ratio;

        FOV_Diag = Math.sqrt((FOV_X * FOV_X) + (FOV_Y016 * FOV_Y016));

        ratio = ratio * 100;
        ratio = Math.round(ratio);
        ratio = ratio / 100;

        FOV_Y016 = FOV_Y016 * 100;
        FOV_Y016 = Math.round(FOV_Y016);
        FOV_Y016 = FOV_Y016 / 100;

        AA016 = AA016 * 100;
        AA016 = Math.round(AA016);
        AA016 = AA016 / 100;


        // расчет FOV для определенного количества слоев

        FOV_X_group = ((AA016 + heightInput * rowsCount) * FOV_X) / AA016;
        FOV_X_group = FOV_X_group * 100;
        FOV_X_group = Math.round(FOV_X_group);
        FOV_X_group = FOV_X_group / 100;

        FOV_Y_group = FOV_X_group / ratio;
        FOV_Y_group = FOV_Y_group * 100;
        FOV_Y_group = Math.round(FOV_Y_group);
        FOV_Y_group = FOV_Y_group / 100;

        arrFOVsGroup[1].WDToResult = AA016;
        arrFOVsGroup[1].fov_xToResult = FOV_X_group; // передача значенния X в массив значений полей зрения для передачи в массив выдачи результатов по камерам
        arrFOVsGroup[1].fov_yToResult = FOV_Y_group; // передача значенния Y в массив значений полей зрения для передачи в массив выдачи результатов по камерам

        // Расчет разрешения pix на мм

        resolPxPerMM016 = x1 / FOV_X_group;
        resolPxPerMM016 = resolPxPerMM016 * 100;
        resolPxPerMM016 = Math.round(resolPxPerMM016);
        resolPxPerMM016 = resolPxPerMM016 / 100;

        resolCountPerElem016 = resolPxPerMM016;





        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem016 = resolCountPerElem016 * t;
        resolCountPerElem016 = resolCountPerElem016 * 100;
        resolCountPerElem016 = Math.round(resolCountPerElem016);
        resolCountPerElem016 = resolCountPerElem016 / 100;

        // передача значений в массив для последующей выборки

        arrResPxPerElem[1] = resolCountPerElem016;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;




        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem016 = resolCountPerElem016 * t;
        resolCountPerElem016 = resolCountPerElem016 * 100;
        resolCountPerElem016 = Math.round(resolCountPerElem016);
        resolCountPerElem016 = resolCountPerElem016 / 100;

        // передача значений в массив для последующей выборки

        arrResPxPerElem[3] = resolCountPerElem016;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;
        // document.getElementById("WD016").innerHTML = ' WD016= ' + AA016 + ' | FOV_X= ' + FOV_X + ' | Counted FOV_Y = ' + FOV_Y016 + ' <br>  ' + ' | FOV_X_group= ' + FOV_X_group + ' | FOV_Y_group= ' + FOV_Y_group + " | Resolution (px per mm) = " + resolPxPerMM016;



    }

}

function calculateWD032() {
    Object.assign(CAM, CAM032);
    var FOV_X = document.getElementById("lenght").value;
    FOV_Y1 = Number(document.getElementById("width").value);
    heightInput = Number(document.getElementById("height").value);
    var x1 = CAM.sizeX;
    var y1 = CAM.sizeY;
    var pix = CAM.pixSize;
    var brennf = document.getElementById("lense").value;
    var rowsCount = document.getElementById("rows").value;
    var resolPxPerMM032 = 0;


    // var FOV_Y = 0;
    // var AA = 0;

    if ((x1 > 0) && (y1 > 0) && (pix > 0) && (brennf > 0) && (FOV_X > 0)) {
        diagonalPix = Math.sqrt((x1 * x1) + (y1 * y1));

        //diagonalPix=diagonalPix*100;
        diagonalPix = Math.round(diagonalPix);
        //diagonalPix=diagonalPix/100;

        x_mm = (x1 * pix) / 1000;
        y_mm = (y1 * pix) / 1000;
        diagonal_mm = Math.sqrt((x1 * x1) + (y1 * y1)) * pix / 1000;


        AA032 = brennf * (FOV_X / x_mm + 1);

        x_mm = x_mm * 100;
        x_mm = Math.round(x_mm);
        x_mm = x_mm / 100;


        y_mm = y_mm * 100;
        y_mm = Math.round(y_mm);
        y_mm = y_mm / 100;

        ratio = (x1 / y1);

        FOV_Y032 = FOV_X / ratio;

        FOV_Diag = Math.sqrt((FOV_X * FOV_X) + (FOV_Y032 * FOV_Y032));

        ratio = ratio * 100;
        ratio = Math.round(ratio);
        ratio = ratio / 100;

        FOV_Y032 = FOV_Y032 * 100;
        FOV_Y032 = Math.round(FOV_Y032);
        FOV_Y032 = FOV_Y032 / 100;

        AA032 = AA032 * 100;
        AA032 = Math.round(AA032);
        AA032 = AA032 / 100;

        // расчет FOV для определенного количества слоев

        FOV_X_group = ((AA032 + heightInput * rowsCount) * FOV_X) / AA032;
        FOV_X_group = FOV_X_group * 100;
        FOV_X_group = Math.round(FOV_X_group);
        FOV_X_group = FOV_X_group / 100;

        FOV_Y_group = FOV_X_group / ratio;
        FOV_Y_group = FOV_Y_group * 100;
        FOV_Y_group = Math.round(FOV_Y_group);
        FOV_Y_group = FOV_Y_group / 100;

        arrFOVsGroup[2].WDToResult = AA032;
        arrFOVsGroup[2].fov_xToResult = FOV_X_group; // передача значенния X в массив значений полей зрения для передачи в массив выдачи результатов по камерам
        arrFOVsGroup[2].fov_yToResult = FOV_Y_group; // передача значенния Y в массив значений полей зрения для передачи в массив выдачи результатов по камерам

        // Расчет разрешения pix на мм

        resolPxPerMM032 = x1 / FOV_X_group;
        resolPxPerMM032 = resolPxPerMM032 * 100;
        resolPxPerMM032 = Math.round(resolPxPerMM032);
        resolPxPerMM032 = resolPxPerMM032 / 100;

        resolCountPerElem032 = resolPxPerMM032;



        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem032 = resolCountPerElem032 * t;
        resolCountPerElem032 = resolCountPerElem032 * 100;
        resolCountPerElem032 = Math.round(resolCountPerElem032);
        resolCountPerElem032 = resolCountPerElem032 / 100;

        // передача значений в массив для последующей выборки

        arrResPxPerElem[2] = resolCountPerElem032;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;
        // document.getElementById("WD032").innerHTML = ' WD032= ' + AA032 + ' | FOV_X= ' + FOV_X + ' | Counted FOV_Y = ' + FOV_Y032 + ' <br>  ' + ' | FOV_X_group= ' + FOV_X_group + ' | FOV_Y_group= ' + FOV_Y_group + " | Resolution (px per mm) = " + resolPxPerMM032;


    }

}

function calculateWD050() {
    Object.assign(CAM, CAM050);
    var FOV_X = document.getElementById("lenght").value;
    FOV_Y1 = Number(document.getElementById("width").value);
    heightInput = Number(document.getElementById("height").value);
    var x1 = CAM.sizeX;
    var y1 = CAM.sizeY;
    var pix = CAM.pixSize;
    var brennf = document.getElementById("lense").value;
    var rowsCount = document.getElementById("rows").value;
    var resolPxPerMM050 = 0;

    //var showSizeReal = 0;
    //var showSizeCell = 0;
    // var FOV_Y = 0;
    // var AA = 0;050

    if ((x1 > 0) && (y1 > 0) && (pix > 0) && (brennf > 0) && (FOV_X > 0)) {
        diagonalPix = Math.sqrt((x1 * x1) + (y1 * y1));

        //diagonalPix=diagonalPix*100;
        diagonalPix = Math.round(diagonalPix);
        //diagonalPix=diagonalPix/100;

        x_mm = (x1 * pix) / 1000;
        y_mm = (y1 * pix) / 1000;
        diagonal_mm = Math.sqrt((x1 * x1) + (y1 * y1)) * pix / 1000;


        AA050 = brennf * (FOV_X / x_mm + 1);

        x_mm = x_mm * 100;
        x_mm = Math.round(x_mm);
        x_mm = x_mm / 100;


        y_mm = y_mm * 100;
        y_mm = Math.round(y_mm);
        y_mm = y_mm / 100;

        ratio = (x1 / y1);

        FOV_Y050 = FOV_X / ratio;

        FOV_Diag = Math.sqrt((FOV_X * FOV_X) + (FOV_Y050 * FOV_Y050));

        ratio = ratio * 100;
        ratio = Math.round(ratio);
        ratio = ratio / 100;

        FOV_Y050 = FOV_Y050 * 100;
        FOV_Y050 = Math.round(FOV_Y050);
        FOV_Y050 = FOV_Y050 / 100;

        AA050 = AA050 * 100;
        AA050 = Math.round(AA050);
        AA050 = AA050 / 100;

        // расчет FOV для определенного количества слоев

        FOV_X_group = ((AA050 + heightInput * rowsCount) * FOV_X) / AA050;
        FOV_X_group = FOV_X_group * 100;
        FOV_X_group = Math.round(FOV_X_group);
        FOV_X_group = FOV_X_group / 100;

        FOV_Y_group = FOV_X_group / ratio;
        FOV_Y_group = FOV_Y_group * 100;
        FOV_Y_group = Math.round(FOV_Y_group);
        FOV_Y_group = FOV_Y_group / 100;

        arrFOVsGroup[3].WDToResult = AA050;
        arrFOVsGroup[3].fov_xToResult = FOV_X_group; // передача значенния X в массив значений полей зрения для передачи в массив выдачи результатов по камерам
        arrFOVsGroup[3].fov_yToResult = FOV_Y_group; // передача значенния Y в массив значений полей зрения для передачи в массив выдачи результатов по камерам

        // Расчет разрешения pix на мм

        resolPxPerMM050 = x1 / FOV_X_group;
        resolPxPerMM050 = resolPxPerMM050 * 100;
        resolPxPerMM050 = Math.round(resolPxPerMM050);
        resolPxPerMM050 = resolPxPerMM050 / 100;

        resolCountPerElem050 = resolPxPerMM050;


        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem050 = resolCountPerElem050 * t;
        resolCountPerElem050 = resolCountPerElem050 * 100;
        resolCountPerElem050 = Math.round(resolCountPerElem050);
        resolCountPerElem050 = resolCountPerElem050 / 100;

        // передача значений в массив для последующей выборки
        if (brennf == 8) {
            arrResPxPerElem[3] = 0;
        } else {
        arrResPxPerElem[3] = resolCountPerElem050;}
        //arrResPxPerElem[3] = resolCountPerElem050;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;
        // document.getElementById("WD050").innerHTML = ' WD050= ' + AA050 + ' | FOV_X= ' + FOV_X + ' | Counted FOV_Y = ' + FOV_Y050 + ' <br>  ' + ' | FOV_X_group= ' + FOV_X_group + ' | FOV_Y_group= ' + FOV_Y_group + " | Resolution (px per mm) = " + resolPxPerMM050;



    }


}

function calculateWD063() {
    Object.assign(CAM, CAM063);
    var FOV_X = document.getElementById("lenght").value;
    FOV_Y1 = Number(document.getElementById("width").value);
    heightInput = Number(document.getElementById("height").value);
    var x1 = CAM.sizeX;
    var y1 = CAM.sizeY;
    var pix = CAM.pixSize;
    var brennf = document.getElementById("lense").value;
    var rowsCount = document.getElementById("rows").value;
    var resolPxPerMM063 = 0;


    // var FOV_Y = 0;
    // var AA = 0;

    if ((x1 > 0) && (y1 > 0) && (pix > 0) && (brennf > 0) && (FOV_X > 0)) {
        diagonalPix = Math.sqrt((x1 * x1) + (y1 * y1));

        //diagonalPix=diagonalPix*100;
        diagonalPix = Math.round(diagonalPix);
        //diagonalPix=diagonalPix/100;

        x_mm = (x1 * pix) / 1000;
        y_mm = (y1 * pix) / 1000;
        diagonal_mm = Math.sqrt((x1 * x1) + (y1 * y1)) * pix / 1000;


        AA063 = brennf * (FOV_X / x_mm + 1);

        x_mm = x_mm * 100;
        x_mm = Math.round(x_mm);
        x_mm = x_mm / 100;


        y_mm = y_mm * 100;
        y_mm = Math.round(y_mm);
        y_mm = y_mm / 100;

        ratio = (x1 / y1);

        FOV_Y063 = FOV_X / ratio;

        FOV_Diag = Math.sqrt((FOV_X * FOV_X) + (FOV_Y063 * FOV_Y063));

        FOV_Y063 = FOV_Y063 * 100;
        FOV_Y063 = Math.round(FOV_Y063);
        FOV_Y063 = FOV_Y063 / 100;

        AA063 = AA063 * 100;
        AA063 = Math.round(AA063);
        AA063 = AA063 / 100;

        // расчет FOV для определенного количества слоев

        FOV_X_group = ((AA063 + heightInput * rowsCount) * FOV_X) / AA063;
        FOV_X_group = FOV_X_group * 100;
        FOV_X_group = Math.round(FOV_X_group);
        FOV_X_group = FOV_X_group / 100;

        FOV_Y_group = FOV_X_group / ratio;
        FOV_Y_group = FOV_Y_group * 100;
        FOV_Y_group = Math.round(FOV_Y_group);
        FOV_Y_group = FOV_Y_group / 100;

        arrFOVsGroup[4].WDToResult = AA063;
        arrFOVsGroup[4].fov_xToResult = FOV_X_group; // передача значенния X в массив значений полей зрения для передачи в массив выдачи результатов по камерам
        arrFOVsGroup[4].fov_yToResult = FOV_Y_group; // передача значенния Y в массив значений полей зрения для передачи в массив выдачи результатов по камерам

        // Расчет разрешения pix на мм

        resolPxPerMM063 = x1 / FOV_X_group;
        resolPxPerMM063 = resolPxPerMM063 * 100;
        resolPxPerMM063 = Math.round(resolPxPerMM063);
        resolPxPerMM063 = resolPxPerMM063 / 100;

        resolCountPerElem063 = resolPxPerMM063;
        var inpRed = document.getElementById('width');
        if (FOV_Y063 < FOV_Y1) {
                
           inpRed.style.backgroundColor = "#F5897C";
           inpRed.style.transition = "0,1";
                //alert("Dear User! Please, pay attention to the value of the FOV Y field in the result table. It may be less than you entered. You can enter increased value to Lenght input field.");
        } else {
        inpRed.style.backgroundColor = "white";
        inpRed.style.transition = "0,1";
    }

        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem063 = resolCountPerElem063 * t;
        resolCountPerElem063 = resolCountPerElem063 * 100;
        resolCountPerElem063 = Math.round(resolCountPerElem063);
        resolCountPerElem063 = resolCountPerElem063 / 100;

        // передача значений в массив для последующей выборки

        arrResPxPerElem[4] = resolCountPerElem063;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;
        // document.getElementById("WD063").innerHTML = ' WD063= ' + AA063 + ' | FOV_X= ' + FOV_X + ' | Counted FOV_Y = ' + FOV_Y063 + ' <br>  ' + ' | FOV_X_group= ' + FOV_X_group + ' | FOV_Y_group= ' + FOV_Y_group + " | Resolution (px per mm) = " + resolPxPerMM063;



    }

}

function calculateWD120() {
    Object.assign(CAM, CAM120);
    var FOV_X = document.getElementById("lenght").value;
    FOV_Y1 = Number(document.getElementById("width").value);
    heightInput = Number(document.getElementById("height").value);
    var x1 = CAM.sizeX;
    var y1 = CAM.sizeY;
    var pix = CAM.pixSize;
    var brennf = document.getElementById("lense").value;
    var rowsCount = document.getElementById("rows").value;
    var resolPxPerMM120 = 0;


    // var FOV_Y = 0;
    // var AA = 0;

    if ((x1 > 0) && (y1 > 0) && (pix > 0) && (brennf > 0) && (FOV_X > 0)) {
        diagonalPix = Math.sqrt((x1 * x1) + (y1 * y1));

        //diagonalPix=diagonalPix*100;
        diagonalPix = Math.round(diagonalPix);
        //diagonalPix=diagonalPix/100;

        x_mm = (x1 * pix) / 1000;
        y_mm = (y1 * pix) / 1000;
        diagonal_mm = Math.sqrt((x1 * x1) + (y1 * y1)) * pix / 1000;


        AA120 = brennf * (FOV_X / x_mm + 1);

        x_mm = x_mm * 100;
        x_mm = Math.round(x_mm);
        x_mm = x_mm / 100;


        y_mm = y_mm * 100;
        y_mm = Math.round(y_mm);
        y_mm = y_mm / 100;

        ratio = (x1 / y1);

        FOV_Y120 = FOV_X / ratio;

        FOV_Diag = Math.sqrt((FOV_X * FOV_X) + (FOV_Y120 * FOV_Y120));

        ratio = ratio * 100;
        ratio = Math.round(ratio);
        ratio = ratio / 100;

        FOV_Y120 = FOV_Y120 * 100;
        FOV_Y120 = Math.round(FOV_Y120);
        FOV_Y120 = FOV_Y120 / 100;

        AA120 = AA120 * 100;
        AA120 = Math.round(AA120);
        AA120 = AA120 / 100;


        // расчет FOV для определенного количества слоев

        FOV_X_group = ((AA120 + heightInput * rowsCount) * FOV_X) / AA120;
        FOV_X_group = FOV_X_group * 100;
        FOV_X_group = Math.round(FOV_X_group);
        FOV_X_group = FOV_X_group / 100;

        FOV_Y_group = FOV_X_group / ratio;
        FOV_Y_group = FOV_Y_group * 100;
        FOV_Y_group = Math.round(FOV_Y_group);
        FOV_Y_group = FOV_Y_group / 100;

        arrFOVsGroup[5].WDToResult = AA120;
        arrFOVsGroup[5].fov_xToResult = FOV_X_group; // передача значенния X в массив значений полей зрения для передачи в массив выдачи результатов по камерам
        arrFOVsGroup[5].fov_yToResult = FOV_Y_group; // передача значенния Y в массив значений полей зрения для передачи в массив выдачи результатов по камерам

        // Расчет разрешения pix на мм

        resolPxPerMM120 = x1 / FOV_X_group;
        resolPxPerMM120 = resolPxPerMM120 * 100;
        resolPxPerMM120 = Math.round(resolPxPerMM120);
        resolPxPerMM120 = resolPxPerMM120 / 100;

        resolCountPerElem120 = resolPxPerMM120;



        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem120 = resolCountPerElem120 * t;
        resolCountPerElem120 = resolCountPerElem120 * 100;
        resolCountPerElem120 = Math.round(resolCountPerElem120);
        resolCountPerElem120 = resolCountPerElem120 / 100;

        // передача значений в массив для последующей выборки

        arrResPxPerElem[5] = resolCountPerElem120;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;
        // document.getElementById("WD120").innerHTML = ' WD120= ' + AA120 + ' | FOV_X= ' + FOV_X + ' | Counted FOV_Y = ' + FOV_Y120 + ' <br>  ' + ' | FOV_X_group= ' + FOV_X_group + ' | FOV_Y_group= ' + FOV_Y_group + " | Resolution (px per mm) = " + resolCountPerElem120;



    }

}

function minElemSize() {
    var f = Number(sizeReal.value);
    var g = Number(cellCodeSize.value);
    var s = 0;
    var m = 0;
    s = f / g;
    m = s;
    m = m * 100;
    m = Math.round(m);
    m = m / 100;
    s = s * 39, 37;
    s = s * 100;
    s = Math.round(s);
    s = s / 100; 
    // console.log(s)
    if (isNaN(s)) {
        document.getElementById("countResol").innerHTML = ' Пожалуйста, заполните форму.';
    } else {
        document.getElementById("countResol").innerHTML = ' Размер элемента кода = ' + s + ' mil (' + m + " мм).";
    }
    
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
