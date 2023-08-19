
function updateTime(){
//Boston
let bostonElement = document.querySelector("#boston");
let bostonDateElement = bostonElement.querySelector(".date");
let bostonTimeElement = bostonElement.querySelector(".time");
let bostonTime = moment().tz("America/New_York");

bostonDateElement.innerHTML = bostonTime.format("MMMM Do, YYYY");
bostonTimeElement.innerHTML = bostonTime.format("h:mm:ss [<small>]A[</small>]");

//Dublin
let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("MMMM Do, YYYY");
dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1000);


//Dublin
let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("MMMM Do, YYYY");
dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");
