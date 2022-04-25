// ОБЪЯВЛЕНИЕ КАМЕР

var CAM = new Object();

var CAM440 = new Object();
CAM440.sizeX = 2464;
CAM440.sizeY = 2056;
CAM440.pixSize = 3.45;

// var CAM016 = new Object();
// CAM016.sizeX = 1440;
// CAM016.sizeY = 1080;
// CAM016.pixSize = 3.45;

// var CAM032 = new Object();
// CAM032.sizeX = 2048;
// CAM032.sizeY = 1536;
// CAM032.pixSize = 3.45;

// var CAM050 = new Object();
// CAM050.sizeX = 2448;
// CAM050.sizeY = 2048;
// CAM050.pixSize = 3.45;

// var CAM063 = new Object();
// CAM063.sizeX = 3072;
// CAM063.sizeY = 2048;
// CAM063.pixSize = 2.4;

// var CAM120 = new Object();
// CAM120.sizeX = 4000;
// CAM120.sizeY = 3000;
// CAM120.pixSize = 1.85;


//var FOV_X = document.getElementById("lenght").value;
var FOV_Y440 = 0;
// var FOV_Y016 = 0;
// var FOV_Y032 = 0;
// var FOV_Y050 = 0;
// var FOV_Y063 = 0;
// var FOV_Y120 = 0;
var AA440 = 0;
// var AA016 = 0;
// var AA032 = 0;
// var AA050 = 0;
// var AA063 = 0;
// var AA120 = 0;
let FOV_Y1 = 0;
let a = 0;
var resolCountPerElem440 = 0;
// var resolCountPerElem016 = 0;
// var resolCountPerElem032 = 0;
// var resolCountPerElem050 = 0;
// var resolCountPerElem063 = 0;
// var resolCountPerElem120 = 0;
var arrResPxPerElem = []; // массив значений количества пикселей на 1 элемент кода
//массив FOV-ов итоговых. Писать значения из функций ниже и обращаться к свойствам в cameraSelection
var attention = '';
var arrFOVsGroup = [{
        fov_xToResult: 0,
        fov_yToResult: 0,
        WDToResult: 0
    },
    // {
    //     fov_xToResult: 0,
    //     fov_yToResult: 0,
    //     WDToResult: 0
    // },
    // {
    //     fov_xToResult: 0,
    //     fov_yToResult: 0,
    //     WDToResult: 0
    // },
    // {
    //     fov_xToResult: 0,
    //     fov_yToResult: 0,
    //     WDToResult: 0
    // },
    // {
    //     fov_xToResult: 0,
    //     fov_yToResult: 0,
    //     WDToResult: 0
    // },
    // {
    //     fov_xToResult: 0,
    //     fov_yToResult: 0,
    //     WDToResult: 0
    // },
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
function calculateWD440() {
    Object.assign(CAM, CAM440);
    var FOV_X = document.getElementById("lenght").value;
    FOV_Y1 = Number(document.getElementById("width").value);
    // heightInput = Number(document.getElementById("height").value);
    var x1 = CAM.sizeX;
    var y1 = CAM.sizeY;
    var pix = CAM.pixSize;
    var brennf = document.getElementById("lense").value;
    // var rowsCount = document.getElementById("rows").value;
    var resolPxPerMM440 = 0;


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


        AA440 = brennf * (FOV_X / x_mm + 1);

        x_mm = x_mm * 100;
        x_mm = Math.round(x_mm);
        x_mm = x_mm / 100;


        y_mm = y_mm * 100;
        y_mm = Math.round(y_mm);
        y_mm = y_mm / 100;

        ratio = (x1 / y1);

        FOV_Y440 = FOV_X / ratio;

        FOV_Diag440 = Math.sqrt((FOV_X * FOV_X) + (FOV_Y440 * FOV_Y440));

        FOV_Y440 = FOV_Y440 * 100;
        FOV_Y440 = Math.round(FOV_Y440);
        FOV_Y440 = FOV_Y440 / 100;

        AA440 = AA440 * 100;
        AA440 = Math.round(AA440);
        AA440 = AA440 / 100;

        // расчет FOV для определенного количества слоев

        FOV_X_group = ((AA440) * FOV_X) / AA440;
        FOV_X_group = FOV_X_group * 100;
        FOV_X_group = Math.round(FOV_X_group);
        FOV_X_group = FOV_X_group / 100;


        FOV_Y_group = FOV_X_group / ratio;
        FOV_Y_group = FOV_Y_group * 100;
        FOV_Y_group = Math.round(FOV_Y_group);
        FOV_Y_group = FOV_Y_group / 100;

        arrFOVsGroup[0].WDToResult = AA440;
        arrFOVsGroup[0].fov_xToResult = FOV_X_group; // передача значенния X в массив значений полей зрения для передачи в массив выдачи результатов по камерам
        arrFOVsGroup[0].fov_yToResult = FOV_Y_group; // передача значенния Y в массив значений полей зрения для передачи в массив выдачи результатов по камерам

        // Расчет разрешения pix на мм

        resolPxPerMM440 = x1 / FOV_X_group;
        resolPxPerMM440 = resolPxPerMM440 * 100;
        resolPxPerMM440 = Math.round(resolPxPerMM440);
        resolPxPerMM440 = resolPxPerMM440 / 100;

        resolCountPerElem440 = resolPxPerMM440;



        var w = Number(sizeReal.value);
        var r = Number(cellCodeSize.value);
        var t = 0;


        t = w / r;
        t = t * 100;
        t = Math.round(t);
        t = t / 100;

        resolCountPerElem440 = resolCountPerElem440 * t;
        resolCountPerElem440 = resolCountPerElem440 * 100;
        resolCountPerElem440 = Math.round(resolCountPerElem440);
        resolCountPerElem440 = resolCountPerElem440 / 100;

        // передача значений в массив для последующей выборки

        arrResPxPerElem[0] = resolCountPerElem440;

        //document.getElementById("countResol").innerHTML = "selected size is -  " + Number(cellCodeSize.value) + "  " + Number(sizeReal.value) + "  minimal element size of code is - " + t + " mm <br>" + "  |  pixels per 1 element = " + resolCountPerElem050;
        // document.getElementById("WD004").innerHTML = ' WD004= ' + AA004 + ' | FOV_X= ' + FOV_X + ' | Counted FOV_Y = ' + FOV_Y004 + ' <br>  ' + ' | FOV_X_group= ' + FOV_X_group + ' | FOV_Y_group= ' + FOV_Y_group + " | Resolution (px per mm) = " + resolPxPerMM004;



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
    document.getElementById("countResol").innerHTML = ' Размер элемента кода = ' + s + ' mil (' + m + " мм)";
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
  