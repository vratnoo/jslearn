var menu  = document.getElementById('menu');
var side = document.querySelector(".sidebar");
console.log(side);

menu.onclick  = function(){

    
    if(side.style.display == 'none'){
        side.style.display = 'block';
    }else{
        side.style.display = 'none';
    }
}
