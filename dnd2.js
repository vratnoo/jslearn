var foo  = function() {
	

// iterating over list items
var drageditem = null;

var litems = document.querySelectorAll(".litems");
console.log(litems)
litems.forEach(function(item) {
console.log(item)
 item.addEventListener('dragstart', function(ev) {
        console.log(ev.target);

        console.log("dragstart");
         ev.dataTransfer.effectAllowed = 'move';
  		ev.dataTransfer.setData('text', ev.target.id);
  		drageditem  = this
    });


 item.addEventListener('dragover', function(e) {
        if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  this.classList.add('over');

  e.dataTransfer.dropEffect = 'move'; 
    });

   item.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    console.log("vikram")
    // ev.target.appendChild(document.getElementById(data))


});

    item.addEventListener('dragleave', function(ev) {
    ev.preventDefault();

   	 console.log("dragleaveed")
     this.classList.remove('over');
   


});

     item.addEventListener('dragend', function(ev) {
    ev.preventDefault();

   	 console.log("dragend")
     this.classList.remove('over');
   


});

     item.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
   	 console.log(data)
   	 console.log(drageditem)
   	 const dragedelem = document.getElementById(data)
   	 console.log(data)
   	 this.parentNode.insertBefore(dragedelem,this)
     this.classList.remove('over');
   


});






})

}
//end function

