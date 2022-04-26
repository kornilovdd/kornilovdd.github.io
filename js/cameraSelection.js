var counter = 0;
var resolFilter = [];
var resolModels = [];



function cameraSelect() {
    resolModels = [{
            model: "FHV7H-M004",
            WD: Number(arrFOVsGroup[0].WDToResult),
            FOVX: Number(arrFOVsGroup[0].fov_xToResult),
            FOVY: Number(arrFOVsGroup[0].fov_yToResult),
            resolution: Number(arrResPxPerElem[0])
        },
        {
            model: "FHV7H-M016",
            WD: Number(arrFOVsGroup[1].WDToResult),
            FOVX: Number(arrFOVsGroup[1].fov_xToResult),
            FOVY: Number(arrFOVsGroup[1].fov_yToResult),
            resolution: Number(arrResPxPerElem[1])
        },
        {
            model: "FHV7H-M032",
            WD: Number(arrFOVsGroup[2].WDToResult),
            FOVX: Number(arrFOVsGroup[2].fov_xToResult),
            FOVY: Number(arrFOVsGroup[2].fov_yToResult),
            resolution: Number(arrResPxPerElem[2])
        },
        {
            model: "FHV7H-M050",
            WD: Number(arrFOVsGroup[3].WDToResult),
            FOVX: Number(arrFOVsGroup[3].fov_xToResult),
            FOVY: Number(arrFOVsGroup[3].fov_yToResult),
            resolution: Number(arrResPxPerElem[3])
        },
        {
            model: "FHV7H-M063R",
            WD: Number(arrFOVsGroup[4].WDToResult),
            FOVX: Number(arrFOVsGroup[4].fov_xToResult),
            FOVY: Number(arrFOVsGroup[4].fov_yToResult),
            resolution: Number(arrResPxPerElem[4])
        },
        {
            model: "FHV7H-M120R",
            WD: Number(arrFOVsGroup[5].WDToResult),
            FOVX: Number(arrFOVsGroup[5].fov_xToResult),
            FOVY: Number(arrFOVsGroup[5].fov_yToResult),
            resolution: Number(arrResPxPerElem[5])
        }
    ];

    if (k = 'DataMatrix') {
        resolFilter = resolModels.filter(function (item) {
            return item.resolution >= 3;
        });
        // подсчет камер с разрешением от 3 пикселей на элемент
        var camCount = 0
        camCount = resolFilter.length;
        // console.log (camCount);
        // вывод таблицы с подобранными камерами, если количество больше 0
        if (camCount > 0) {
            let table = document.getElementById('table');
            document.getElementById("message").innerHTML = "";
        var headNames = ["Модель", "FOV X", "FOV Y", "Разрешение", "Work Distance до нижнего слоя"];
        var Table = document.getElementById("table");
        Table.innerHTML = "";
        var thead = document.createElement('thead');

        table.appendChild(thead);

        for (var i = 0; i < headNames.length; i++) {
            thead.appendChild(document.createElement("th")).
            appendChild(document.createTextNode(headNames[i]));
        }
        for (let camResult of resolFilter) {



            let tr = document.createElement('tr');
            tr.setAttribute("id", "tbl");

            let td1 = document.createElement('td');
            td1.innerHTML = camResult.model;
            tr.appendChild(td1);

            let td2 = document.createElement('td');
            td2.innerHTML = camResult.FOVX + " mm";
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            td3.innerHTML = camResult.FOVY + " mm";
            tr.appendChild(td3);

            let td4 = document.createElement('td');
            td4.innerHTML = camResult.resolution + " px per elem";
            tr.appendChild(td4);

            let td5 = document.createElement('td');
            td5.innerHTML = camResult.WD + " mm";
            tr.appendChild(td5);

            table.appendChild(tr);

        }
        } else {
        // CHANGE SOME <p> element
        var msg = ''
        msg = document.getElementById("countResol").innerHTML;
        msg = msg + " Проверьте корректность введенных данных.";
        document.getElementById("countResol").innerHTML = msg;
        document.getElementById('table').innerHTML = "";
        }


    } else if (k = 'QR') {
        resolFilter = resolModels.filter(function (item) {
            return item.resolution >= 3;
        });
        let table = document.getElementById('table');
        var headNames = ["Model", "FOV X", "FOV Y", "Resolution", "Work Distance"];
        var Table = document.getElementById("table");
        Table.innerHTML = "";
        var thead = document.createElement('thead');

        table.appendChild(thead);

        for (var i = 0; i < headNames.length; i++) {
            thead.appendChild(document.createElement("th")).
            appendChild(document.createTextNode(headNames[i]));
        }
        for (let camResult of resolFilter) {



            let tr = document.createElement('tr');
            tr.setAttribute("id", "tbl");

            let td1 = document.createElement('td');
            td1.innerHTML = camResult.model;
            tr.appendChild(td1);

            let td2 = document.createElement('td');
            td2.innerHTML = camResult.FOVX + " mm";
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            td3.innerHTML = camResult.FOVY + " mm";
            tr.appendChild(td3);

            let td4 = document.createElement('td');
            td4.innerHTML = camResult.resolution + " px per elem";
            tr.appendChild(td4);

            let td5 = document.createElement('td');
            td5.innerHTML = camResult.WD + " mm";
            tr.appendChild(td5);

            table.appendChild(tr);

        }
    }
}

function addTextNode(text) {
    hAcs = document.getElementById("hAcs")
    hAcs.innerText = 'Аксессуары';
    p1 = document.getElementById("p1");
    p1.innerText = 'Кабель I/O                 FHV-VDB 2/3/5M';
    p2 = document.getElementById("p2");
    p2.innerText = 'Кабель сетевой             FHV-VNB 2/3/5M';
    p3 = document.getElementById("p3");
    p3.innerText = 'Монтажная площадка         FHV-XMT-7';
    a4 = document.getElementById("p4");
    a4.innerText = 'Страница продукта "Смарт камера FHV7H"';
    a4.setAttribute('href', 'https://industrial.omron.ru/ru/products/fhv7');
}

// Для отображения fov и WD для каждой камеры нужно создать массив, куда будут записываться расчетные значения.
// Обращаться к нему в свойствах вот так - resolFilter[1].resolution - array[index].property
// ДОБАВИТЬ СВОЙСТВО ОБЪЕКТА WD     DONE!
