var selem = document.getElementById('source');

var telem = document.getElementById('dest');
var elem = document.getElementById('elem');

// iterating on list items
var litems = document.querySelectorAll(".litems");
litems.forEach(function(item) {
    item.addEventListener('dragstart', function(ev) {
        console.log(ev.target);

        ev.dataTransfer.setData("text", ev.target.id);
        console.log("dragstart");
    });

    item.addEventListener("click",function(ev){
    	ev.target.contentEditable = "true";

    });

    item.addEventListener("mouseout",function(ev){
    	this.contentEditable = "false";

    });


})

var lgroup = document.querySelectorAll(".lgroup");

lgroup.forEach(function(item) {

    item.addEventListener('dragover', function(ev) {

        ev.preventDefault();
        

    });

    item.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');

    ev.target.appendChild(document.getElementById(data))


});


})

