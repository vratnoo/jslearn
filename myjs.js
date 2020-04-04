//basic to do list application
console.log("vikram");

var td_arr = [];

function render() {
    var target = document.querySelector("ul");
    target.innerHTML = "";
    td_arr.forEach(function(item, index) {
        var nelem = document.createElement("li");
        nelem.setAttribute("draggable", true);
        nelem.setAttribute("id", index);
        nelem.className = 'list-group-item';
        nelem.classList.add('litems');
        var ifchecked = ""
        if (item.status === true) {
            nelem.className += " " + 'checked';
             ifchecked = 'checked';
        }


        el = "<div class='container'>";
        el += "<div class='row'>";
        el += "<div class='col-1 p-0'>";
        el += "<input class='checks' "+ ifchecked +" id=" + index + " type='checkbox'></div>";
        el += "<div class='col'><span>" + item.value + "</span></div>";
        el += "<div class='col-1'><button type='button' id=" + index + "  class='del btn  btn-outline-secondary btn-sm p-0 ml-auto'>";
        el += "<i data-feather='x' class='io'></i></button></div></div></div>";

        // el = '<input class='del' type='button' id=" + index + " value='X'>";
        // el += "<span>" + item.value + "</span><input class='checks' id=" + index + " type='checkbox' " + ifchecked + " name='check'>";
         console.log(el);   
        nelem.innerHTML = el;
        target.appendChild(nelem);
         feather.replace()
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

foo()
}
document.onload = render();
var add = document.querySelector("#add");
add.onclick = function() {

    additem()

};

function additem() {
    var getdata = document.querySelector("#sdata").value;
    if(getdata!==""){
    td_arr.push({
        value: getdata,
        status: false
    });


    render();
    //empty input
    document.querySelector("#sdata").value="";
}

}



function deleteit(item) {
    var id = item.id;
    delete td_arr[id];
    render();



}

function checkit(item) {
    var id = item.id;
    console.log(item.checked);
    celem = item.closest("li");
    if (item.checked === true) {
        td_arr[id].status = true;
        

        celem.className += " " + 'checked';
        console.log(celem)

    } else {
        td_arr[id].status = false;
        celem.className = 'list-group-item';
    }

    console.log(td_arr[id]);



}