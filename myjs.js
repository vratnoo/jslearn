//basic to do list application
console.log("vikram");

var td_arr = [];

function render() {
    var target = document.querySelector("ul");
    target.innerHTML = "";
    td_arr.forEach(function(item, index) {
        var nelem = document.createElement("li");
        nelem.className = 'list-group-item';
        if (item.status === true) {
            nelem.className+=" "+'checked';
            var ifchecked = 'checked';
        }
        el = "<input class='del' type='button' id=" + index + " value='X'>";
        el += "<span>" + item.value + "</span><input class='checks' id=" + index + " type='checkbox' " + ifchecked + " name='check'>";
     
        nelem.innerHTML = el;
        target.appendChild(nelem);
    });

    var checks = document.querySelectorAll(".checks");
    checks.forEach(function(item) {
        item.onclick = function() {
            checkit(item);
        }


    });
    var del = document.querySelectorAll(".del");
    del.forEach(function(item) {
        item.onclick = function() {
            deleteit(item);
        }


    });


}
document.onload = render();
var add = document.querySelector("#add");
add.onclick = function() {
    additem()
};

function additem() {
    var getdata = document.querySelector("#sdata").value;
    td_arr.push({
        value: getdata,
        status: false
    });


    render();

}



function deleteit(item) {
    var id = item.id;
    delete td_arr[id];
    render();



}

function checkit(item) {
    var id = item.id;
    console.log(item.checked);
    if (item.checked === true) {
        td_arr[id].status = true;
        item.parentNode.className+=" "+'checked';

    } else {
        td_arr[id].status = false;
        item.parentNode.className= 'list-group-item';
    }

    console.log(td_arr[id]);



}