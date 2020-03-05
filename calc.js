var elems = document.querySelectorAll(".in");
var opr = document.querySelectorAll(".op");
var cl = document.getElementById("clear");

var display = document.querySelector("#display");
//clearing display
cl.onclick = function() {
        display.innerText = "";
        current = "";

    }
    //entering number
var current = "";
var prev = "";
var copr = "";

//binding click event to all element
elems.forEach(function(item, index) {

    item.onclick = function() {
        if (current.length < 12) {
            if (item.id == 'point') {
                if (current.indexOf('.') == -1) {
                    current += ".";
                }


            } else {
                current += item.id;

            }
            console.log(item.id);
            display.innerText = current;
        }
    }
});
var res = 0;
//binding operator to all
opr.forEach(function(item) {

    item.onclick = function() {


        if (item.id == 'eq') {
            current = Number(current);
            prev = Number(prev);
            switch (copr) {
                case 'd':
                    current = prev / current;
                    console.log(current);
                    break;
                case 's':
                    current = prev - current;
                    console.log(current);
                    break;
                case 'm':
                    current = prev * current;
                    console.log(current);
                    break;
                case 'a':
                    current = prev+current;
                    console.log(current);
                    break;

            }

            display.innerText = current;
        } else {
            display.innerText = "";
            prev = current;
            current = "";
            copr = item.id;
            console.log(copr);


        }

    }

});