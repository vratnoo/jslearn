var button = document.getElementById('target');
var dest = document.getElementById('dest');
//learning ajax request
var ajax = new XMLHttpRequest();
ajax.open('GET', "https://www.w3schools.com/js/js_ajax_http.asp","true");


button.addEventListener('click',function(){

    ajax.send();
    console.log(ajax.status);
    dest.innerHTML = "OKKKK";
})