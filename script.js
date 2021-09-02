
var minus = document.getElementById("decr");
var plus = document.getElementById("incr");
var qtyinput = document.getElementById("qtyin");

minus.onclick = function () {
    var qtyinput = document.getElementById("qtyin");

    var val = qtyinput.value;
    val = parseInt(val);

    if (val > 0) {

        qtyinput.value = val - 1;
    }
}
plus.onclick = function () {
    var qtyinput = document.getElementById("qtyin");

    var val = qtyinput.value;
    val = parseInt(val);

    if (val < 1000) {

        qtyinput.value = val + 1;
    }

}

 
