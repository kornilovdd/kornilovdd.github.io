var counter = 0;
var resolFilter = [];
var resolModels = [];



function cameraSelect() {
    resolModels = [{
            model: "V440-FXXXY50M-NNX",
            WD: Number(arrFOVsGroup[0].WDToResult),
            FOVX: Number(arrFOVsGroup[0].fov_xToResult),
            FOVY: Number(arrFOVsGroup[0].fov_yToResult),
            resolution: Number(arrResPxPerElem[0])
        },
       
    ];

    if (k = 'DataMatrix') {
        resolFilter = resolModels.filter(function (item) {
            return item.resolution >= 3;
        });


        let table = document.getElementById('table');
        var headNames = ["Модель", "FOV X", "FOV Y", " Разрешение", "   Work Distance"];
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
    p1.innerText = 'Кабель I/O                 V430-W8 1/3/5M';
    p2 = document.getElementById("p2");
    p2.innerText = 'Кабель сетевой             98-000133(4)-01(2) 2/5/7M';
    p3 = document.getElementById("p3");
    p3.innerText = 'Монтажная площадка         V440-AM0';
    a4 = document.getElementById("p4");
    a4.innerText = 'Страница продукта "Сканер кодов V440-F"';
    a4.setAttribute('href', 'https://industrial.omron.ru/ru/products/v440-f');
}

// Для отображения fov и WD для каждой камеры нужно создать массив, куда будут записываться расчетные значения.
// Обращаться к нему в свойствах вот так - resolFilter[1].resolution - array[index].property
// ДОБАВИТЬ СВОЙСТВО ОБЪЕКТА WD     DONE!
