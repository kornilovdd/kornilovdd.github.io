// Переключение набора размеров кода в зависимости от выбранного типа

var cellCodeSize = '';
var sizeReal = '';
var k = '';
var t = 0;
var selectedLense = '';
var sel = '';
function hide_el(elements) {
  for (var i = 0; i < elements.length; i++)
    elements[i].style.display = 'none';
}
window.onload = function () {
  var a = document.getElementsByName('codeType')[0];
  var b = document.getElementsByClassName('codeSizeCell');
  var c = document.getElementsByClassName('codeSizeReal');
  title = document.getElementById("title")
  btntxt = document.getElementById("cameras")
  // alert(title.innerHTML)
  // if (title.innerHTML = "V440-F") {
  //   btntxt.innerHTML = "V440-F"
  // }
  // else {
  //   btntxt.innerHTML = "FHV7H"
  // }

  a.onchange = function () {
    hide_el(b);
    hide_el(c);
    k = this.value;
    cellCodeSize = document.getElementById(this.value);
    sizeReal = document.getElementById("sizeReal");
    cellCodeSize.style.display = 'block';
    sizeReal.style.display = 'block';

  }

}
function clearInputs() {
  var q = document.getElementById('width');
  var w = document.getElementById('lenght');
  var e = document.getElementById('height');
  q = '';
  w = '';
  e = '';
}
function ufuf() {
      sel = document.getElementById("lense");
      selectedLense= sel.options[sel.selectedIndex].text;
      t=selectedLense.indexOf('C-mount');
      var rowsBlock = document.getElementById('rows');
      rowsBlock.removeAttribute('disabled');
      if (t > -1) {
        rowsBlock.setAttribute('disabled', 'true');
      } 
}

